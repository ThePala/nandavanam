import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './App.css';

function App() {
  const mapRef = useRef(null);
  const [selectedTree, setSelectedTree] = useState(null);
  const [selectedblock, setSelectedblock] = useState('');
  const [selectedTempleId, setSelectedTempleId] = useState('');
  const [blockSet, setblockSet] = useState(new Set());
  const [templeLookup, setTempleLookup] = useState([]);
  const [availableTemples, setAvailableTemples] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const [blockDetailsOpen, setblockDetailsOpen] = useState(true);
  const [templeDetailsOpen, setTempleDetailsOpen] = useState(true);
  const [treeDetailsOpen, setTreeDetailsOpen] = useState(true);
  const [speciesColorMap, setSpeciesColorMap] = useState({});
  const [templeNameMap, setTempleNameMap] = useState({}); 

useEffect(() => {
  fetch('/templenameslist.csv')
    .then(res => res.text())
    .then(text => {
      const lines = text.trim().split('\n');
      const map = {};
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',');
        if (cols.length < 2) continue; // Skip malformed lines
        const id = cols[0]?.trim();
        const name = cols[1]?.trim();
        if (id && name) {
          map[id] = name;
        }
      }
      setTempleNameMap(map);
    });
}, []);

  const blockMarkersRef = useRef({});
  const templeMarkersRef = useRef({});

  const colorPalette = [
    '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231',
    '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe',
    '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000',
    '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080'
  ];

  const resetAll = () => {
    setSelectedTree(null);
    setSelectedblock('');
    setSelectedTempleId('');
    setAvailableTemples([]);
  };

  const highlightMarkers = (highlightedMarkers) => {
    // Reset all to default
    Object.values(blockMarkersRef.current).flat().forEach(marker =>
      marker.setStyle({ weight: 0.5, color: '#000' })
    );

    // Highlight selected ones
    highlightedMarkers.forEach(marker =>
      marker.setStyle({ weight: 3, color: '#fff' })  // Thicker stroke, white color
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
        const blocks = new Set();
        const lookup = [];
        const colorMap = {};
        let colorIndex = 0;
        const blockMarkers = {};
        const templeMarkers = {};

        const layer = L.geoJSON(data, {
          pointToLayer: (feature, latlng) => {
            const props = feature.properties;
            const block = props['data-details-block'];
            const temple = props['Temple'];

            blocks.add(block);
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
              setSelectedblock(block);
              setSelectedTempleId(temple);
              // Auto-collapse other sections and expand tree details
              setblockDetailsOpen(false);
              setTempleDetailsOpen(false);
              setTreeDetailsOpen(true);
            });

            if (!blockMarkers[block]) blockMarkers[block] = [];
            blockMarkers[block].push(circle);

            if (!templeMarkers[temple]) templeMarkers[temple] = [];
            templeMarkers[temple].push(circle);

            return circle;
          },
        }).addTo(map);

        setblockSet(blocks);
        setTempleLookup(lookup);
        setTreeData(data.features);
        setSpeciesColorMap(colorMap);
        blockMarkersRef.current = blockMarkers;
        templeMarkersRef.current = templeMarkers;
      });
  }, []);

useEffect(() => {
  if (selectedblock) {
    const temples = templeLookup
      .filter(t => t['data-details-block'] === selectedblock)
      .map(t => t.Temple);
    setAvailableTemples([...new Set(temples)]);

    const markers = blockMarkersRef.current[selectedblock];
    if (markers?.length) {
      const map = mapRef.current;
      const group = L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.02));
      highlightMarkers(markers);
    }
  } else {
    highlightMarkers([]);  // Reset if none selected
    setAvailableTemples([]);
  }
}, [selectedblock, templeLookup]);

useEffect(() => {
  const markers = templeMarkersRef.current[selectedTempleId];
  if (markers?.length) {
    const map = mapRef.current;
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.02));
    highlightMarkers(markers);
  } else {
    highlightMarkers([]);
  }
}, [selectedTempleId]);

  const getblockStats = () => {
    const filtered = templeLookup.filter(t => t['data-details-block'] === selectedblock);
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

  const getTempleStats = () => {
    if (!selectedTempleId) return { totalTrees: 0, speciesDistribution: [] };
    
    const filtered = templeLookup.filter(t => t.Temple === selectedTempleId);
    const totalTrees = filtered.length;

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

    return { totalTrees, speciesDistribution };
  };

  const { totalTrees, templeCount, speciesDistribution } = getblockStats();
  const { totalTrees: templeTotalTrees, speciesDistribution: templeSpeciesDistribution } = getTempleStats();

  return (
    <div className="container">
      <div id="map" />
      <div className="sidebar">
        <button onClick={resetAll} className="reset-button">🔄</button>

        <select value={selectedblock} onChange={(e) => setSelectedblock(e.target.value)}>
          <option value="">Select block</option>
          {[...blockSet].map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>

        <div className="block-section">
          <h2 onClick={() => setblockDetailsOpen(!blockDetailsOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Block Details
            <span style={{ fontSize: '0.8em' }}>{blockDetailsOpen ? '▼' : '▶'}</span>
          </h2>
          {blockDetailsOpen && (
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
            <option key={tid} value={tid}>
              {templeNameMap[tid] || tid}
            </option>
          ))}
        </select>

        <div className="temple-section">
          <h2 onClick={() => setTempleDetailsOpen(!templeDetailsOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Temple Details
            <span style={{ fontSize: '0.8em' }}>{templeDetailsOpen ? '▼' : '▶'}</span>
          </h2>
          {templeDetailsOpen && selectedTempleId && (
            <div>
              <p><b>Temple:</b> {templeNameMap[selectedTempleId] || selectedTempleId}</p>
              <p><b>Total Trees:</b> {templeTotalTrees}</p>
              {templeTotalTrees > 0 && (
                <>
                  <PieChart width={200} height={200}>
                    <Pie
                      data={templeSpeciesDistribution}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label={false}
                    >
                      {templeSpeciesDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value} trees`, name]} />
                  </PieChart>
                  <ul className="legend">
                    {templeSpeciesDistribution.map(entry => (
                      <li key={entry.name} style={{ marginBottom: '4px' }}>
                        <span style={{ background: entry.color, width: 12, height: 12, display: 'inline-block', marginRight: 6, borderRadius: '50%' }}></span>
                        {entry.name}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>

        <div className="tree-section">
          <h2 onClick={() => setTreeDetailsOpen(!treeDetailsOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Tree Details
            <span style={{ fontSize: '0.8em' }}>{treeDetailsOpen ? '▼' : '▶'}</span>
          </h2>
          {treeDetailsOpen && selectedTree && (
            <div>
              <p><b>Species:</b> {selectedTree['data-details-species'] || 'Unknown'}</p>
              <p><b>Block:</b> {selectedTree['data-details-block']}</p>
              <p><b>Temple:</b> {templeNameMap[selectedTree['Temple']] || selectedTree['Temple']}</p>
              <p><b>GBH (Base Level):</b> {selectedTree['data-details-gbh-base-level'] || 'N/A'}</p>
              {/* Add more tree properties as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;