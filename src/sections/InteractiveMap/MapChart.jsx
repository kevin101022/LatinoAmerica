import React, { useState, useRef, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { geoAzimuthalEqualArea } from 'd3-geo';
import mapaData from '../../data/mapa.json';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MAP_WIDTH = 800;
const MAP_HEIGHT = 600;

// La misma proyección que usa ComposableMap internamente
const buildProjection = () =>
  geoAzimuthalEqualArea()
    .rotate([75, 12, 0])
    .scale(330)
    .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]);

const MapChart = ({ activeCountry, setActiveCountry, onMarkerPixel, containerRef }) => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const handleCountryClick = (geo) => {
    const geoName = geo.properties.name;
    const foundCountry = mapaData.find(c => c.geoName === geoName);
    if (foundCountry) {
      setActiveCountry(foundCountry);
    } else {
      setActiveCountry(null);
    }
  };

  // Cada vez que cambia el país activo, calcular posición de pantalla del marcador
  useEffect(() => {
    if (!activeCountry?.centroid || !containerRef?.current) {
      onMarkerPixel(null);
      return;
    }

    const proj = buildProjection();
    const [svgX, svgY] = proj(activeCountry.centroid);

    const rect = containerRef.current.getBoundingClientRect();
    const scaleX = rect.width / MAP_WIDTH;
    const scaleY = rect.height / MAP_HEIGHT;

    onMarkerPixel({
      x: rect.left + svgX * scaleX,
      y: rect.top + svgY * scaleY,
    });
  }, [activeCountry, containerRef, onMarkerPixel]);

  return (
    <div className="w-full h-full relative">
      {/* Tooltip nombre del país */}
      {hoveredCountry && (
        <div className="absolute top-3 right-3 z-20 bg-maiz px-4 py-2 border-2 border-noche shadow-[4px_4px_0px_#1A1A2E] transform rotate-1 pointer-events-none">
          <p className="font-cinzel font-bold text-noche uppercase tracking-wider text-sm">{hoveredCountry}</p>
        </div>
      )}

      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{ rotate: [75, 12, 0], scale: 330 }}
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter(geo => !!mapaData.find(c => c.geoName === geo.properties.name))
              .map((geo) => {
                const geoName = geo.properties.name;
                const foundCountry = mapaData.find(c => c.geoName === geoName);
                const isActive = activeCountry && activeCountry.geoName === geoName;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleCountryClick(geo)}
                    onMouseEnter={() => setHoveredCountry(foundCountry.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    style={{
                      default: {
                        fill: isActive ? '#8B1A1A' : '#F5E6D3',
                        stroke: '#1A1A2E',
                        strokeWidth: 1,
                        outline: 'none',
                        transition: 'all 200ms',
                      },
                      hover: {
                        fill: isActive ? '#8B1A1A' : '#F5A623',
                        stroke: '#1A1A2E',
                        strokeWidth: 1.5,
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'all 200ms',
                      },
                      pressed: {
                        fill: '#8B1A1A',
                        stroke: '#1A1A2E',
                        strokeWidth: 2,
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
          }
        </Geographies>

        {/* Marcador dorado sobre el país seleccionado */}
        {activeCountry?.centroid && (
          <Marker coordinates={activeCountry.centroid}>
            <circle r={9} fill="#F5A623" stroke="#1A1A2E" strokeWidth={2.5} />
            <circle r={4} fill="#1A1A2E" />
          </Marker>
        )}
      </ComposableMap>
    </div>
  );
};

export default MapChart;
