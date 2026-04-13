import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MapChart from './MapChart';
import CountryPanel from './CountryPanel';

const InteractiveMapSection = () => {
  const [activeCountry, setActiveCountry] = useState(null);
  const [line, setLine] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const mapContainerRef = useRef(null);
  const panelRef = useRef(null);
  const sectionRef = useRef(null);

  // Detectar si estamos en desktop (>= 1024px)
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMarkerPixel = useCallback((viewportPos) => {
    // Solo dibujar la línea en desktop
    if (!viewportPos || !panelRef.current || !sectionRef.current || !isDesktop) {
      setLine(null);
      return;
    }
    setTimeout(() => {
      if (!panelRef.current || !sectionRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const panelRect = panelRef.current.getBoundingClientRect();
      setLine({
        x1: viewportPos.x - sectionRect.left,
        y1: viewportPos.y - sectionRect.top,
        x2: panelRect.left - sectionRect.left + 8,
        y2: panelRect.top - sectionRect.top + panelRect.height / 2,
      });
    }, 120);
  }, [isDesktop]);

  useEffect(() => {
    if (!activeCountry) setLine(null);
  }, [activeCountry]);

  // En mobile, recalcular sin línea cuando cambia el país
  useEffect(() => {
    if (!isDesktop) setLine(null);
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 px-4 md:px-6 bg-[#F9F7F1] flex flex-col justify-center relative"
      id="interactive-map"
    >
      {/* SVG de línea — solo en desktop */}
      <AnimatePresence mode="wait">
        {isDesktop && activeCountry && line && (
          <svg
            key={activeCountry.id}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 20, width: '100%', height: '100%' }}
          >
            <motion.path
              d={`M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`}
              fill="none"
              stroke="#D91616"
              strokeWidth={4}
              strokeDasharray="20 10"
              strokeLinecap="round"
              initial={{ opacity: 0, strokeDashoffset: 200 }}
              animate={{ opacity: 1, strokeDashoffset: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            <motion.circle
              cx={line.x2}
              cy={line.y2}
              r={7}
              fill="#D91616"
              stroke="#1A1A2E"
              strokeWidth={2}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.25 }}
            />
          </svg>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Cabecera */}
        <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto px-2">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-8 md:w-12 h-1 bg-terracota" />
            <span className="font-cinzel text-noche/60 tracking-[0.15em] md:tracking-[0.2em] uppercase text-xs md:text-sm font-bold">
              Explorador Cultural
            </span>
            <div className="w-8 md:w-12 h-1 bg-terracota" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-noche mb-3 md:mb-4 leading-tight">
            Nuestra Comarca
          </h2>
          <p className="font-lora text-base md:text-lg text-noche/70 leading-relaxed">
            Haz clic sobre cualquier territorio para descubrir los elementos que narran su historia: el platillo que alimenta al pueblo, el libro que denuncia sus dolores o los versos que cantan su resistencia.
          </p>
        </div>

        {/* Instrucción mobile */}
        <p className="text-center text-noche/50 font-cinzel text-xs uppercase tracking-widest mb-4 md:hidden">
          ↓ Selecciona un país en el mapa
        </p>

        {/* Grid: apilado en mobile, lado a lado en desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_420px] gap-6 md:gap-8 lg:gap-10 items-start lg:items-center">

          {/* Mapa */}
          <div
            ref={mapContainerRef}
            className="w-full border-4 border-noche rounded-xl shadow-[6px_6px_0px_#1A1A2E] md:shadow-[8px_8px_0px_#1A1A2E] bg-[#dceef5] relative overflow-hidden"
            style={{ minHeight: 'clamp(280px, 55vw, 580px)' }}
          >
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#1A1A2E 2px, transparent 2px)',
                backgroundSize: '28px 28px',
              }}
            />
            <MapChart
              activeCountry={activeCountry}
              setActiveCountry={setActiveCountry}
              onMarkerPixel={handleMarkerPixel}
              containerRef={mapContainerRef}
            />
          </div>

          {/* Panel lateral / inferior */}
          <div ref={panelRef} className="w-full flex items-center justify-center">
            <CountryPanel
              country={activeCountry}
              onClose={() => {
                setActiveCountry(null);
                setLine(null);
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveMapSection;
