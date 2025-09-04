import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import '../styles/map.css';

function MapTool() {
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
  const [templeBlockMap, setTempleBlockMap] = useState({}); // New: Temple ID → Block Name mapping 

  const blockMarkersRef = useRef({});
  const templeMarkersRef = useRef({});
  const blockPolygonsRef = useRef(null);
  const treeLayerRef = useRef(null);
  const blockLabelsRef = useRef([]);

useEffect(() => {
  fetch('/templenameslist.csv')
    .then(res => res.text())
    .then(text => {
      console.log('CSV Raw text:', text.substring(0, 200)); // First 200 chars
      const lines = text.trim().split('\n');
      console.log('CSV Lines:', lines.slice(0, 5)); // First 5 lines
      
      const nameMap = {};
      const blockMap = {};
      
      // Function to properly parse CSV line with quoted fields
      const parseCSVLine = (line) => {
        const result = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          
          if (char === '"') {
            // Handle escaped quotes (double quotes within quotes)
            if (inQuotes && line[i + 1] === '"') {
              current += '"';
              i++; // Skip the next quote
            } else {
              inQuotes = !inQuotes;
            }
          } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
          } else {
            current += char;
          }
        }
        
        // Add the last field
        result.push(current.trim());
        return result;
      };
      
      for (let i = 1; i < lines.length; i++) {
        const cols = parseCSVLine(lines[i]);
        if (cols.length < 3) continue;
        
        const templeId = cols[0]?.trim();
        const templeName = cols[1]?.trim();
        const blockName = cols[2]?.trim();
        
        if (templeId && templeName) {
          nameMap[templeId] = templeName;
        }
        if (templeId && blockName) {
          blockMap[templeId] = blockName;
        }
      }
      
      console.log('Temple Name Map sample:', Object.entries(nameMap).slice(0, 3));
      console.log('Temple Block Map sample:', Object.entries(blockMap).slice(0, 3));
      
      setTempleNameMap(nameMap);
      setTempleBlockMap(blockMap);
    });
}, []);

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
    
    // Remove tree layer when resetting
    if (treeLayerRef.current && mapRef.current) {
      mapRef.current.removeLayer(treeLayerRef.current);
      treeLayerRef.current = null;
    }
    
    // Show block labels again
    showBlockLabels();
    
    // Reset map view to show all polygons
    if (blockPolygonsRef.current && mapRef.current) {
      mapRef.current.fitBounds(blockPolygonsRef.current.getBounds());
    }
  };

// Replace the highlightMarkers function and add new highlighting functions

const highlightMarkers = (highlightedMarkers) => {
  // Reset all markers to default style first
  Object.values(blockMarkersRef.current).flat().forEach(marker =>
    marker.setStyle({ weight: 0.5, color: '#000' })
  );

  // Highlight the specified markers
  highlightedMarkers.forEach(marker =>
    marker.setStyle({ weight: 3, color: '#fff' })
  );
};

const highlightBlockTrees = (blockName) => {
  const markersToHighlight = [];
  
  // Get all temples in this block
  const templesInBlock = Object.entries(templeBlockMap)
    .filter(([tid, block]) => block === blockName)
    .map(([tid]) => tid);
  
  // Collect all markers for temples in this block
  templesInBlock.forEach(templeId => {
    if (templeMarkersRef.current[templeId]) {
      markersToHighlight.push(...templeMarkersRef.current[templeId]);
    }
  });
  
  highlightMarkers(markersToHighlight);
};

const highlightTempleTree = (templeId) => {
  const markers = templeMarkersRef.current[templeId] || [];
  highlightMarkers(markers);
};

  const showBlockLabels = () => {
    // Clear existing labels
    blockLabelsRef.current.forEach(label => {
      if (mapRef.current && mapRef.current.hasLayer(label)) {
        mapRef.current.removeLayer(label);
      }
    });
    blockLabelsRef.current = [];

    // Add new labels
    if (blockPolygonsRef.current) {
      blockPolygonsRef.current.eachLayer(layer => {
        const bounds = layer.getBounds();
        const center = bounds.getCenter();
        const blockName = layer.feature.properties.Block_Name || 
                         layer.feature.properties.BLOCK_NAME || 
                         layer.feature.properties.block_name || 
                         layer.feature.properties.name || 
                         'Unknown Block';

        const label = L.marker(center, {
          icon: L.divIcon({
            className: 'block-label',
            html: `<div style="background: rgba(255,255,255,0.8); padding: 2px 6px; border-radius: 3px; font-size: 12px; font-weight: bold; text-align: center; border: 1px solid #333;">${blockName}</div>`,
            iconSize: [100, 20],
            iconAnchor: [50, 10]
          })
        }).addTo(mapRef.current);

        blockLabelsRef.current.push(label);
      });
    }
  };

  const hideBlockLabels = () => {
    blockLabelsRef.current.forEach(label => {
      if (mapRef.current && mapRef.current.hasLayer(label)) {
        mapRef.current.removeLayer(label);
      }
    });
    blockLabelsRef.current = [];
  };

  const loadTreesForBlock = (blockName) => {
    // Remove existing tree layer
    if (treeLayerRef.current && mapRef.current) {
      mapRef.current.removeLayer(treeLayerRef.current);
    }

    fetch('/trees.geojson')
      .then(res => res.json())
      .then(data => {
        const blocks = new Set();
        const lookup = [];
        const colorMap = {};
        let colorIndex = 0;
        const blockMarkers = {};
        const templeMarkers = {};

        // Load ALL trees (no filtering for now)
        const filteredFeatures = data.features;

        const layer = L.geoJSON({ type: 'FeatureCollection', features: filteredFeatures }, {
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
              setSelectedTempleId(temple);
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
        }).addTo(mapRef.current);

        treeLayerRef.current = layer;
        setTempleLookup(lookup);
        setTreeData(filteredFeatures);
        setSpeciesColorMap(prev => ({ ...prev, ...colorMap }));
        blockMarkersRef.current = blockMarkers;
        templeMarkersRef.current = templeMarkers;

        // Hide block labels when trees are loaded
        hideBlockLabels();
      });
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
      center: [8.542344, 77.586146],
      zoom: 10,
      layers: [satellite],
    });
    mapRef.current = map;

    // Load district block polygons
    fetch('/district_blocks.geojson')
      .then(res => res.json())
      .then(data => {
        const polygonLayer = L.geoJSON(data, {
          style: {
            color: '#3388ff',
            weight: 2,
            opacity: 0.8,
            fillColor: '#3388ff',
            fillOpacity: 0.1
          },
          onEachFeature: (feature, layer) => {
            // Make polygons clickable to select block
            layer.on('click', () => {
              const blockName = feature.properties.Block_Name || 
                               feature.properties.BLOCK_NAME || 
                               feature.properties.block_name || 
                               feature.properties.name || 
                               'Unknown Block';
              setSelectedblock(blockName);
            });
          }
        }).addTo(map);
        
        blockPolygonsRef.current = polygonLayer;
        
        // Get all block names from polygons and show labels
        const blockNames = new Set();
        data.features.forEach(feature => {
          const blockName = feature.properties.Block_Name || 
                           feature.properties.BLOCK_NAME || 
                           feature.properties.block_name || 
                           feature.properties.name || 
                           'Unknown Block';
          blockNames.add(blockName);
        });
        
        setblockSet(blockNames);
        showBlockLabels();
      })
      .catch(err => console.log('District blocks not found:', err));
  }, []);

// Updated useEffect for selectedblock
useEffect(() => {
  if (selectedblock) {
    // Load trees for selected block
    loadTreesForBlock(selectedblock);

    // Zoom to selected block
    if (blockPolygonsRef.current) {
      blockPolygonsRef.current.eachLayer(layer => {
        const blockName = layer.feature.properties.Block_Name || 
                         layer.feature.properties.BLOCK_NAME || 
                         layer.feature.properties.block_name || 
                         layer.feature.properties.name || 
                         'Unknown Block';
        if (blockName === selectedblock) {
          mapRef.current.fitBounds(layer.getBounds().pad(0.02));
        }
      });
    }

    // Get temples from the CSV-based map
    const templesInBlock = Object.entries(templeBlockMap)
      .filter(([tid, block]) => block === selectedblock)
      .map(([tid]) => tid);

    setAvailableTemples(templesInBlock);
    
    // Highlight all trees in the selected block after a short delay
    // (to ensure trees are loaded first)
    setTimeout(() => {
      highlightBlockTrees(selectedblock);
    }, 500);
    
  } else {
    setAvailableTemples([]);
    showBlockLabels();
    // Reset highlighting when no block is selected
    highlightMarkers([]);
  }
}, [selectedblock, templeBlockMap]);

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
    const filtered = templeLookup.filter(t => {
      const templeId = t.Temple;
      const templeBlock = templeBlockMap[templeId];
      return templeBlock === selectedblock;
    });
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
      <Link to="/" className="home-icon" style={{ position: 'absolute', top: 16, left: 16, zIndex: 1002, background: '#fff', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="material-icons" style={{ fontSize: 28, color: '#2f5d2f' }}>home</span>
      </Link>
      <div id="map" />
      <div className="sidebar">
        <button onClick={resetAll} className="reset-button">
  <span className="material-icons">refresh</span>
</button>

        <select value={selectedblock} onChange={(e) => setSelectedblock(e.target.value)}>
          <option value="">Select block</option>
          {[...blockSet].map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>

        <div className="block-section">
<h2 onClick={() => setblockDetailsOpen(!blockDetailsOpen)}>
  Block Details
  <span className="material-icons" style={{ fontSize: '18px' }}>
    {blockDetailsOpen ? 'expand_more' : 'chevron_right'}
  </span>
</h2>
          {blockDetailsOpen && selectedblock && (
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
<h2
  onClick={() => setTempleDetailsOpen(!templeDetailsOpen)}
>
  Temple Details
  <span className="material-icons">
    {templeDetailsOpen ? 'expand_more' : 'chevron_right'}
  </span>
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
                <span style={{
                  background: entry.color,
                  width: 12,
                  height: 12,
                  display: 'inline-block',
                  marginRight: 6,
                  borderRadius: '50%'
                }}></span>
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
<h2
  onClick={() => setTreeDetailsOpen(!treeDetailsOpen)}
>
  Tree Details
  <span className="material-icons">
    {treeDetailsOpen ? 'expand_more' : 'chevron_right'}
  </span>
</h2>

  {treeDetailsOpen && selectedTree && (
    <div>
      <p><b>Species:</b> {selectedTree['data-details-species'] || 'Unknown'}</p>
      <p><b>Block:</b> {selectedTree['data-details-block']}</p>
      <p><b>Temple:</b> {templeNameMap[selectedTree['Temple']] || selectedTree['Temple']}</p>
      <p><b>GBH (Base Level):</b> {selectedTree['data-details-gbh-base-level'] || 'N/A'}</p>
      <p><b>Temple ID:</b> {selectedTree['Temple'] || 'N/A'}</p>
    </div>
  )}
</div>

      </div>
    </div>
  );
}

export default MapTool;