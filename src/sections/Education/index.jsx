import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import educationData from '../../data/education.json';
import LevelPanel from './LevelPanel';

const Education = () => {
  const [activeTab, setActiveTab] = useState(educationData.levels[0].id);

  // Helper to find the active level data
  const activeLevelData = educationData.levels.find(level => level.id === activeTab);

  return (
    <section 
      id="education" 
      className="relative py-24 bg-crema text-noche"
    >
      {/* Patrón de líneas sutil / Cuaderno */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #C4501E 31px, #C4501E 32px)' }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-noche drop-shadow-sm mb-4">
              Literatura en la Educación Colombiana
            </h2>
            <p className="font-lora text-noche/80 text-lg md:text-xl leading-relaxed">
              {educationData.intro}
            </p>
          </motion.div>
        </div>

        {/* NAVEGADOR DE PESTAÑAS (TABS) */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 relative z-10">
          {educationData.levels.map((level) => {
            const isActive = activeTab === level.id;
            return (
              <button
                key={level.id}
                onClick={() => setActiveTab(level.id)}
                className={`relative px-6 md:px-10 py-4 md:py-5 rounded-xl font-cinzel text-sm md:text-lg font-bold tracking-wider transition-all duration-300 flex items-center gap-3 md:gap-4 overflow-hidden border
                  ${isActive 
                    ? 'text-white border-transparent shadow-xl transform -translate-y-1' 
                    : 'bg-white/60 text-noche border-noche/10 hover:bg-white hover:border-noche/30'}
                `}
                style={isActive ? { backgroundColor: level.color } : {}}
              >
                <Icon icon={level.icon} className="text-xl md:text-2xl" />
                <div className="flex flex-col items-start min-w-[120px]">
                  <span className="text-base md:text-lg">{level.title}</span>
                  <span className={`text-[11px] md:text-xs font-lora font-bold uppercase tracking-widest opacity-90 decoration-transparent hidden sm:block w-max ${isActive ? 'text-white' : 'text-pasion'}`}>
                    {level.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* CONTENIDO (LevelPanel) */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <LevelPanel key={activeTab} data={activeLevelData} />
          </AnimatePresence>
        </div>

        {/* REFLEXIÓN FINAL */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto bg-white/60 backdrop-blur-md text-noche p-10 md:p-14 rounded-2xl shadow-xl border-4 border-double border-terracota/20 relative overflow-hidden group"
        >
          {/* Marca de agua decorativa clásica */}
          <Icon icon="ph:quotes-duotone" className="absolute -top-6 -left-6 text-terracota/5 text-[220px] pointer-events-none" />
          
          <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-pasion mb-10 text-center uppercase tracking-widest relative z-10 flex flex-col items-center gap-3">
             <div className="w-12 h-[2px] bg-maiz/50 mb-1"></div>
            Reflexión Final
             <div className="w-12 h-[2px] bg-maiz/50 mt-1"></div>
          </h3>
          
          <div className="font-lora text-lg md:text-2xl text-noche/90 leading-relaxed text-center space-y-8 relative z-10 px-4 md:px-6">
            {educationData.reflection.text.split('\n\n').map((paragraph, index) => (
               <p key={index} className={index === 1 ? 'italic text-pasion font-semibold bg-maiz/5 py-4 px-6 rounded-lg border-x-2 border-maiz/20 shadow-sm' : ''}>
                 {paragraph}
               </p>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
