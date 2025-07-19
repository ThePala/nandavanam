import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './App.css';

function App() {
  const mapRef = useRef(null);
  const [selectedTree, setSelectedTree] = useState(null);
  const [selectedVillage, setSelectedVillage] = useState('');
  const [selectedTempleId, setSelectedTempleId] = useState('');
  const [villageSet, setVillageSet] = useState(new Set());
  const [templeLookup, setTempleLookup] = useState([]);
  const [availableTemples, setAvailableTemples] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const [villageDetailsOpen, setVillageDetailsOpen] = useState(true);
  const [speciesColorMap, setSpeciesColorMap] = useState({});

  const villageMarkersRef = useRef({});
  const templeMarkersRef = useRef({});

  const colorPalette = [
    '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231',
    '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe',
    '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000',
    '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080'
  ];

  const resetAll = () => {
    setSelectedTree(null);
    setSelectedVillage('');
    setSelectedTempleId('');
    setAvailableTemples([]);
  };

  const highlightMarkers = (highlightedMarkers) => {
  // Reset all to default
  Object.values(villageMarkersRef.current).flat().forEach(marker =>
    marker.setStyle({ weight: 0.5 })
  );

  // Highlight selected ones
  highlightedMarkers.forEach(marker =>
    marker.setStyle({ weight: 3 })  // Thicker stroke
  );
};


  useEffect(() => {
    if (mapRef.current) return;

    const satellite = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: '&copy; Esri, Maxar, Earthstar Geographics',
      }
    );

    const map = L.map('map', {
      center: [8.658335, 77.448118],
      zoom: 18,
      layers: [satellite],
    });
    mapRef.current = map;

    fetch('/trees.geojson')
      .then(res => res.json())
      .then(data => {
        const villages = new Set();
        const lookup = [];
        const colorMap = {};
        let colorIndex = 0;
        const villageMarkers = {};
        const templeMarkers = {};

        const layer = L.geoJSON(data, {
          pointToLayer: (feature, latlng) => {
            const props = feature.properties;
            const village = props['data-details-village'];
            const temple = props['Temple'];

            villages.add(village);
            lookup.push({
              ...props,
              latlng,
            });

            const species = props['data-details-species'] || 'Unknown';
            if (!colorMap[species]) {
              colorMap[species] = colorPalette[colorIndex % colorPalette.length];
              colorIndex++;
            }

            const gbh = parseFloat(props['data-details-gbh-base-level']) || 1;
            const radius = Math.max(gbh * 0.04, 3.5);

            const circle = L.circleMarker(latlng, {
              radius,
              fillColor: colorMap[species],
              color: '#000',
              weight: 0.5,
              fillOpacity: 0.8,
            });

            circle.on('click', () => {
              setSelectedTree(props);
              setSelectedVillage(village);
              setSelectedTempleId(temple);
            });

            if (!villageMarkers[village]) villageMarkers[village] = [];
            villageMarkers[village].push(circle);

            if (!templeMarkers[temple]) templeMarkers[temple] = [];
            templeMarkers[temple].push(circle);

            return circle;
          },
        }).addTo(map);

        setVillageSet(villages);
        setTempleLookup(lookup);
        setTreeData(data.features);
        setSpeciesColorMap(colorMap);
        villageMarkersRef.current = villageMarkers;
        templeMarkersRef.current = templeMarkers;
      });
  }, []);

useEffect(() => {
  if (selectedVillage) {
    const temples = templeLookup
      .filter(t => t['data-details-village'] === selectedVillage)
      .map(t => t.Temple);
    setAvailableTemples([...new Set(temples)]);

    const markers = villageMarkersRef.current[selectedVillage];
    if (markers?.length) {
      const map = mapRef.current;
      const group = L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.2));
      highlightMarkers(markers);
    }
  } else {
    highlightMarkers([]);  // Reset if none selected
    setAvailableTemples([]);
  }
}, [selectedVillage, templeLookup]);


useEffect(() => {
  const markers = templeMarkersRef.current[selectedTempleId];
  if (markers?.length) {
    const map = mapRef.current;
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.2));
    highlightMarkers(markers);
  } else {
    highlightMarkers([]);
  }
}, [selectedTempleId]);


  const getVillageStats = () => {
    const filtered = templeLookup.filter(t => t['data-details-village'] === selectedVillage);
    const totalTrees = filtered.length;
    const templeCount = new Set(filtered.map(t => t.Temple)).size;

    const speciesMap = {};
    filtered.forEach(t => {
      const species = t['data-details-species'] || 'Unknown';
      speciesMap[species] = (speciesMap[species] || 0) + 1;
    });

    const speciesDistribution = Object.entries(speciesMap).map(([name, count]) => ({
      name,
      value: count,
      color: speciesColorMap[name] || '#888'
    }));

    return { totalTrees, templeCount, speciesDistribution };
  };

  const { totalTrees, templeCount, speciesDistribution } = getVillageStats();

  return (
    <div className="container">
      <div id="map" />
      <div className="sidebar">
        <button onClick={resetAll} className="reset-button">🔄</button>

        <select value={selectedVillage} onChange={(e) => setSelectedVillage(e.target.value)}>
          <option value="">Select Village</option>
          {[...villageSet].map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>

        <div className="village-section">
          <h2 onClick={() => setVillageDetailsOpen(!villageDetailsOpen)}>Village Details</h2>
          {villageDetailsOpen && (
            <div>
              <p><b>No. of Nandhavanam:</b> {templeCount}</p>
              <p><b>Species wise Distribution of Trees:</b> {totalTrees}</p>
              <PieChart width={200} height={200}>
                <Pie
                  data={speciesDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={false}
                >
                  {speciesDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value} trees`, name]} />
              </PieChart>
              <ul className="legend">
                {speciesDistribution.map(entry => (
                  <li key={entry.name} style={{ marginBottom: '4px' }}>
                    <span style={{ background: entry.color, width: 12, height: 12, display: 'inline-block', marginRight: 6, borderRadius: '50%' }}></span>
                    {entry.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <select value={selectedTempleId} onChange={(e) => setSelectedTempleId(e.target.value)}>
          <option value="">Select Temple</option>
          {availableTemples.map(tid => (
            <option key={tid} value={tid}>{tid}</option>
          ))}
        </select>

        <div className="temple-section">
          <h2>Temple Details</h2>
          {/* Future implementation */}
        </div>
      </div>
    </div>
  );
}

export default App;
