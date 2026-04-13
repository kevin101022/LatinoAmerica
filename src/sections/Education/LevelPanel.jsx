import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const LevelPanel = ({ data }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mt-8"
      key={data.id} // Forza re-render de la animación de los hijos
    >
      {/* Columna Izquierda: Ciclos y Currículo */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        {data.ciclos.map((ciclo, idx) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            key={idx} 
            className="bg-white/40 backdrop-blur-sm border border-noche/10 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Borde de color temático lateral */}
            <div className="absolute top-0 bottom-0 left-0 w-1.5" style={{ backgroundColor: data.color }}></div>
            
            <h4 className="font-playfair text-2xl text-noche font-bold mb-4 ml-2">{ciclo.name}</h4>
            <ul className="space-y-4 ml-2">
              {ciclo.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Icon icon="ph:bookmark-simple-fill" className="text-terracota mt-1 shrink-0 text-xl" />
                  <span className="font-lora text-noche/90 text-base md:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Columna Derecha: Importancia Bento */}
      <div className="lg:col-span-5 h-full relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-maiz/10 backdrop-blur-md text-noche rounded-2xl p-8 md:p-10 h-auto lg:sticky lg:top-24 shadow-lg border-2 border-maiz/40 relative overflow-hidden"
        >
          {/* Marca de agua decorativa */}
          <Icon icon={data.icon} className="absolute right-[-15%] top-[-10%] text-[12rem] text-terracota/5 pointer-events-none drop-shadow-sm" />

          <div className="flex items-center gap-4 mb-10 relative z-10">
            <div className="bg-maiz/20 p-2 rounded-lg border border-maiz/40 text-pasion shadow-sm">
              <Icon icon="ph:star-fill" className="text-3xl" />
            </div>
            <h3 className="font-cinzel text-xl md:text-2xl font-bold tracking-wider uppercase text-pasion drop-shadow-sm">
              5 Razones Clave
            </h3>
          </div>
          
          <ul className="space-y-6 relative z-10">
            {data.importance.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 group">
                <div className="bg-pasion w-8 h-8 rounded-lg flex justify-center items-center shrink-0 mt-0.5 border border-pasion/20 group-hover:bg-terracota transition-all shadow-md transform rotate-3 group-hover:rotate-0">
                  <span className="font-playfair font-bold text-sm text-crema">{idx + 1}</span>
                </div>
                <span className="font-lora text-noche/90 text-base md:text-lg leading-relaxed group-hover:translate-x-1 transition-transform">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-10 pt-6 border-t border-maiz/30 relative z-10">
            <p className="font-cinzel text-[10px] md:text-xs tracking-widest text-pasion/60 uppercase font-bold text-center">
              Compromiso Educativo Colombiano
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LevelPanel;
