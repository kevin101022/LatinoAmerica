import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const CountryPanel = ({ country, onClose }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        {country ? (
          <motion.div
            key={country.id}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            className="w-full max-w-md bg-white border-4 border-noche shadow-[8px_8px_0px_#1A1A2E] md:shadow-[15px_15px_0px_rgba(26,26,46,1)] rounded-xl overflow-hidden"
          >
            {/* Cabecera */}
            <div className="bg-maiz border-b-4 border-noche p-4 md:p-6 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-noche tracking-wide truncate">
                  {country.name}
                </h3>
                <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-noche/60 mt-1">
                  {country.id}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Icon icon={country.icon} className="text-4xl md:text-5xl border-2 border-noche rounded-full shadow-sm" />
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-noche text-white flex items-center justify-center font-bold text-sm hover:bg-pasion transition-all duration-200 border-2 border-noche shadow-[2px_2px_0px_#1A1A2E] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  title="Cerrar"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-4 md:p-6 space-y-4 md:space-y-5 bg-crema/20">

              {/* Gastronomía */}
              <div className="flex gap-3 md:gap-4 items-start">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-noche flex items-center justify-center shrink-0 shadow-md">
                  <Icon icon="fluent-emoji-flat:pot-of-food" className="text-xl md:text-2xl" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-cinzel font-bold text-noche text-xs md:text-sm uppercase tracking-wider mb-1">Gastronomía</h4>
                  <p className="font-lora text-noche/80 text-sm md:text-base leading-snug">{country.dish}</p>
                </div>
              </div>

              {/* Literatura */}
              <div className="flex gap-3 md:gap-4 items-start">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-pasion flex items-center justify-center shrink-0 shadow-md">
                  <Icon icon="fluent-emoji-flat:open-book" className="text-xl md:text-2xl" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-cinzel font-bold text-noche text-xs md:text-sm uppercase tracking-wider mb-1">Literatura</h4>
                  <p className="font-lora text-noche/80 text-sm md:text-base leading-snug italic">{country.book}</p>
                </div>
              </div>

              {/* Música */}
              <div className="flex gap-3 md:gap-4 items-start">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-selva flex items-center justify-center shrink-0 shadow-md">
                  <Icon icon="fluent-emoji-flat:musical-notes" className="text-xl md:text-2xl" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-cinzel font-bold text-noche text-xs md:text-sm uppercase tracking-wider mb-1">Música y Sonido</h4>
                  <p className="font-lora text-noche/80 text-sm md:text-base leading-snug">{country.music}</p>
                </div>
              </div>

              {/* Creencias */}
              <div className="flex gap-3 md:gap-4 items-start">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-terracota flex items-center justify-center shrink-0 shadow-md">
                  <Icon icon="fluent-emoji-flat:candle" className="text-xl md:text-2xl" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-cinzel font-bold text-noche text-xs md:text-sm uppercase tracking-wider mb-1">Creencias</h4>
                  <p className="font-lora text-noche/80 text-sm md:text-base leading-snug">{country.religion}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-md border-4 border-dashed border-noche/20 rounded-xl flex flex-col items-center justify-center p-6 md:p-10 text-center bg-white/50 min-h-[180px] md:min-h-[300px]"
          >
            <Icon icon="fluent-emoji-flat:compass" className="text-5xl md:text-6xl mb-3 opacity-40 grayscale" />
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-noche/40 mb-2">Selecciona un territorio</h3>
            <p className="font-lora text-noche/40 text-sm md:text-base leading-relaxed">
              Toca cualquier país del mapa para explorar su identidad cultural e histórica.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountryPanel;
