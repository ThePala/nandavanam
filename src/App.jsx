import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  const mapRef = useRef(null);
  const [selectedTree, setSelectedTree] = useState(null);
  const [allSpecies, setAllSpecies] = useState(new Set());
  const [selectedVillage, setSelectedVillage] = useState('');
  const [availableTempleBlocks, setAvailableTempleBlocks] = useState([]);
  const [selectedTempleId, setSelectedTempleId] = useState('');
  const [villageSet, setVillageSet] = useState(new Set());
  const [templeLookup, setTempleLookup] = useState([]);

  const speciesColors = {};
  const colorPalette = [
    '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231',
    '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe',
    '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000',
    '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080'
  ];

  const getSpeciesColor = (species) => {
    if (!speciesColors[species]) {
      const index = Object.keys(speciesColors).length % colorPalette.length;
      speciesColors[species] = colorPalette[index];
    }
    return speciesColors[species];
  };

  useEffect(() => {
    if (mapRef.current) return;

    const streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    });

    const satellite = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri, Maxar, Earthstar Geographics'
      });

    const map = L.map('map', {
      center: [8.658335, 77.448118],
      zoom: 18,
      layers: [satellite]
    });
    mapRef.current = map;

    L.control.layers({
      "Streets": streets,
      "Satellite": satellite
    }).addTo(map);

    fetch('/trees.geojson')
      .then(res => res.json())
      .then(data => {
        const speciesSet = new Set();
        const villages = new Set();
        const lookup = [];
        let previouslySelectedCircle = null;

        const geoLayer = L.geoJSON(data, {
          pointToLayer: (feature, latlng) => {
            const props = feature.properties || {};
            const species = props['data-details-species'] || 'Unknown';

            const girth = (parseFloat(props['data-details-gbh-base-level']) || 1) * 0.04;
            const radius = Math.max(girth * 0.5, 3.5);

            speciesSet.add(species);
            villages.add(props['data-details-village']);
            lookup.push({
              village: props['data-details-village'],
              block: props['data-details-block'],
              templeid: props.Temple,
              species: props['data-details-species'],
              latlng,
              properties: props
            });

            const color = getSpeciesColor(species);
            const circle = L.circleMarker(latlng, {
              radius,
              fillColor: color,
              color: '#000',
              weight: 0.5,
              fillOpacity: 0.8
            });

            circle.feature = feature;

            circle.on('click', () => {
              if (previouslySelectedCircle && previouslySelectedCircle !== circle) {
                const prevProps = previouslySelectedCircle.feature.properties;
                const prevGirth = (parseFloat(prevProps['data-details-gbh-base-level']) || 1) * 0.04;
                previouslySelectedCircle.setRadius(Math.max(prevGirth * 0.5, 3.5));
              }

              const accuracy = parseFloat(props.accuracy) || 5;
              circle.setRadius(accuracy / 2);

              previouslySelectedCircle = circle;
              setSelectedTree({ ...props, latlng });
            });

            return circle;
          }
        }).addTo(map);

        setAllSpecies(speciesSet);
        setVillageSet(villages);
        setTempleLookup(lookup);
      })
      .catch(err => console.error('Error loading GeoJSON:', err));
  }, []);

  // Zoom to first tree in selected temple
useEffect(() => {
  if (selectedTempleId && mapRef.current && templeLookup.length) {
    const matches = templeLookup.filter(t => t.templeid === selectedTempleId);
    if (matches.length > 0) {
      const latlngs = matches.map(t => t.latlng);
      const bounds = L.latLngBounds(latlngs);
      mapRef.current.fitBounds(bounds, { padding: [50, 50] }); // Optional padding
    }
  }
}, [selectedTempleId, templeLookup]);


  return (
    <div className="container">
      <div id="map" />
      <div className="sidebar">
        <div className="filter-section">
          <h2>Filter by Village</h2>
          <select value={selectedVillage} onChange={(e) => {
            const v = e.target.value;
            setSelectedVillage(v);
            setSelectedTempleId('');
            const filtered = templeLookup
              .filter(t => t.village === v)
              .map(t => ({ block: t.block, templeid: t.templeid }));
            const unique = Array.from(new Map(filtered.map(i => [i.templeid, i])).values());
            setAvailableTempleBlocks(unique);
          }}>
            <option value="">-- Select Village --</option>
            {[...villageSet].map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>

          {availableTempleBlocks.length > 0 && (
            <div className="radio-options">
              <h3>Select Temple</h3>
              {availableTempleBlocks.map(({ block, templeid }) => (
                <label key={templeid}>
                  <input
                    type="radio"
                    name="templeid"
                    value={templeid}
                    checked={selectedTempleId === templeid}
                    onChange={() => setSelectedTempleId(templeid)}
                  />
                  Block: {block} | Temple: {templeid}
                </label>
              ))}
            </div>
          )}
        </div>

        {selectedTree ? (
          <div className="tree-details">
            <h2>Tree Details</h2>
            {Object.entries(selectedTree).map(([k, v]) => (
              <p key={k}><b>{k}</b>: {v}</p>
            ))}
          </div>
        ) : (
          <div className="no-selection">
            <h2>No Tree Selected</h2>
            <p>Click a tree to view details.</p>
          </div>
        )}

        <div className="generic-info">
          <h2>Generic Info</h2>
          <p><b>Total Species:</b> {
            [...allSpecies].filter(species => {
              if (!selectedTempleId) return true;
              return templeLookup.some(t =>
                t.templeid === selectedTempleId &&
                t.species === species
              );
            }).length
          }</p>
          <ul>
            {[...allSpecies]
              .filter(species => {
                if (!selectedTempleId) return true;
                return templeLookup.some(t =>
                  t.templeid === selectedTempleId &&
                  t.species === species
                );
              })
              .map(species => (
                <li key={species}>
                  <span style={{
                    background: getSpeciesColor(species),
                    display: 'inline-block',
                    width: 12,
                    height: 12,
                    marginRight: 6,
                    borderRadius: '50%'
                  }}></span>
                  {species}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
