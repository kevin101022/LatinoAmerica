import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import analysisData from '../../data/analysis.json';
import bookCover from '../../assets/images/Imagen2.jpg';

const LevelTab = ({ level, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-5 md:px-8 py-3 md:py-4 rounded-xl font-cinzel text-sm md:text-base font-bold tracking-wider transition-all duration-300 flex flex-col items-center gap-1 border overflow-hidden
      ${isActive
        ? 'text-white border-transparent shadow-xl -translate-y-1'
        : 'bg-white/50 text-noche border-noche/10 hover:bg-white hover:border-terracota/30'}
    `}
    style={isActive ? { backgroundColor: level.color } : {}}
  >
    <div className="flex items-center gap-2">
      <Icon icon={level.icon} className="text-xl" />
      <span>Nivel {level.number}</span>
    </div>
    <span className={`text-[11px] md:text-xs font-lora font-bold uppercase tracking-widest ${isActive ? 'text-white' : 'text-pasion'}`}>
      {level.title}
    </span>
  </button>
);

const StoryAnalysis = () => {
  const [activeLevel, setActiveLevel] = useState(analysisData.levels[0].id);
  const currentLevel = analysisData.levels.find(l => l.id === activeLevel);

  return (
    <section id="story-analysis" className="relative py-24 bg-crema overflow-hidden">
      {/* Fondo líneas sepia */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #C4501E 31px, #C4501E 32px)' }}
      />

      {/* Decoración fondo */}
      <div className="absolute top-0 left-0 text-noche/5 pointer-events-none">
        <Icon icon="ph:feather-duotone" className="text-[280px] md:text-[400px] -translate-x-1/3 -translate-y-1/4" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10 mb-16"
        >
          {/* Portada del libro — Efecto 3D */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
            className="shrink-0 relative group"
            style={{ perspective: '800px' }}
          >
            {/* Contenedor con efecto 3D */}
            <div
              className="relative transition-transform duration-700 group-hover:rotate-y-2"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-8deg)',
                filter: 'drop-shadow(20px 20px 30px rgba(139,26,26,0.35))'
              }}
            >
              {/* LOMO del libro */}
              <div
                className="absolute top-0 left-0 h-full rounded-l-sm"
                style={{
                  width: '28px',
                  background: 'linear-gradient(to right, #5C0A0A, #8B1A1A)',
                  transform: 'translateX(-22px) rotateY(90deg)',
                  transformOrigin: 'right center',
                }}
              />

              {/* PORTADA */}
              <div className="w-44 md:w-52 overflow-hidden rounded-r-md rounded-l-none"
                style={{
                  boxShadow: 'inset -4px 0 8px rgba(0,0,0,0.2)',
                  height: '280px',
                }}
              >
                <img
                  src={bookCover}
                  alt="Portada El almohadón de plumas - Horacio Quiroga"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 block"
                />
                {/* Brillo del lomo en la portada */}
                <div className="absolute top-0 left-0 w-6 h-full bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Sombra en el suelo */}
            <div
              className="absolute -bottom-4 left-4 right-0 h-6 blur-xl rounded-full"
              style={{ background: 'rgba(139,26,26,0.25)' }}
            />
          </motion.div>

          {/* Título y datos rápidos */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-pasion/50"></div>
              <Icon icon="ph:scroll-duotone" className="text-3xl text-pasion" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-pasion/50"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-noche mb-2 drop-shadow-sm">
              El almohadón de plumas
            </h2>
            <p className="font-playfair text-xl md:text-2xl italic text-pasion mb-4">
              Horacio Quiroga · {analysisData.story.year}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="font-cinzel text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-pasion/10 text-pasion border border-pasion/20">{analysisData.story.genre}</span>
              <span className="font-cinzel text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-selva/10 text-selva border border-selva/20">{analysisData.story.movement}</span>
              <span className="font-cinzel text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-terracota/10 text-terracota border border-terracota/20">{analysisData.story.nationality}</span>
            </div>
          </div>
        </motion.div>

        {/* Ficha técnica + Sinopsis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14"
        >
          {/* Ficha técnica */}
          <div className="bg-white/50 border border-noche/10 rounded-2xl p-6 shadow-sm border-l-4"
            style={{ borderLeftColor: '#8B1A1A' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Icon icon="ph:identification-card-duotone" className="text-pasion text-2xl" />
              <h3 className="font-cinzel text-base font-bold uppercase tracking-widest text-pasion">Ficha Técnica</h3>
            </div>
            <dl className="space-y-3 font-lora text-sm md:text-base">
              {[
                { label: 'Autor', value: analysisData.story.author, icon: 'ph:user-duotone' },
                { label: 'Origen', value: analysisData.story.nationality, icon: 'ph:map-pin-duotone' },
                { label: 'Año', value: analysisData.story.year, icon: 'ph:calendar-duotone' },
                { label: 'Género', value: analysisData.story.genre, icon: 'ph:tag-duotone' },
                { label: 'Corriente', value: analysisData.story.movement, icon: 'ph:lightning-duotone' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <Icon icon={item.icon} className="text-terracota text-lg mt-0.5 shrink-0" />
                  <div>
                    <span className="font-cinzel text-xs uppercase tracking-widest text-noche/80 block font-bold">{item.label}</span>
                    <span className="text-noche font-semibold text-base md:text-lg">{item.value}</span>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Sinopsis */}
          <div className="bg-white/50 border border-noche/10 rounded-2xl p-6 shadow-sm border-l-4"
            style={{ borderLeftColor: '#C4501E' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Icon icon="ph:book-open-text-duotone" className="text-terracota text-2xl" />
              <h3 className="font-cinzel text-base font-bold uppercase tracking-widest text-terracota">Sinopsis</h3>
            </div>
            <p className="font-lora text-noche/95 text-base md:text-lg leading-relaxed">
              {analysisData.story.synopsis}
            </p>
          </div>
        </motion.div>

        {/* Fragmentos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 space-y-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <Icon icon="ph:quotes-duotone" className="text-2xl text-maiz" />
            <h3 className="font-cinzel text-base font-bold uppercase tracking-widest text-noche">Fragmentos Centrales</h3>
          </div>
          {analysisData.story.fragments.map((frag, i) => (
            <blockquote key={i} className="bg-maiz/10 border-l-4 border-maiz/60 pl-5 pr-4 py-4 rounded-r-xl font-lora italic text-base md:text-lg text-noche leading-relaxed">
              {frag}
            </blockquote>
          ))}
        </motion.div>

        {/* Introducción Semiótica */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 bg-white/40 border border-noche/10 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-selva/10 p-2 rounded-lg border border-selva/20">
              <Icon icon="ph:brain-duotone" className="text-selva text-2xl" />
            </div>
            <div>
              <h3 className="font-cinzel text-base md:text-lg font-bold uppercase tracking-widest text-selva">
                Teoría: {analysisData.theory.name}
              </h3>
              <p className="font-lora text-sm text-noche/80 italic font-semibold">{analysisData.theory.theorists}</p>
            </div>
          </div>
          <p className="font-lora text-base md:text-lg text-noche leading-relaxed">
            {analysisData.theory.intro}
          </p>
        </motion.div>

        {/* Tabs de Niveles */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {analysisData.levels.map(level => (
            <LevelTab
              key={level.id}
              level={level}
              isActive={activeLevel === level.id}
              onClick={() => setActiveLevel(level.id)}
            />
          ))}
        </div>

        {/* Contenido del Nivel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="bg-white/60 backdrop-blur border border-noche/10 rounded-2xl p-6 md:p-10 shadow-sm overflow-hidden"
            style={{ borderTopColor: currentLevel.color, borderTopWidth: '4px' }}
          >
            {/* Header del nivel */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow shrink-0"
                style={{ backgroundColor: `${currentLevel.color}20`, border: `2px solid ${currentLevel.color}40` }}
              >
                <Icon icon={currentLevel.icon} className="text-xl" style={{ color: currentLevel.color }} />
              </div>
              <div>
                <h4 className="font-cinzel font-bold text-lg md:text-xl uppercase tracking-widest text-noche">
                  Nivel {currentLevel.number} — {currentLevel.title}
                </h4>
                <p className="font-lora text-sm italic text-noche/80 font-medium">{currentLevel.subtitle} · <em>{currentLevel.tag}</em></p>
              </div>
            </div>

            {/* Bloques de análisis */}
            <div className="space-y-6">
              {currentLevel.blocks.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-1 rounded-full" style={{ backgroundColor: `${currentLevel.color}50` }} />
                  <div>
                    <h5 className="font-cinzel text-sm md:text-base font-bold text-noche mb-1 uppercase tracking-wide">
                      {block.heading}
                    </h5>
                    <p className="font-lora text-base md:text-lg text-noche leading-relaxed">
                      {block.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Signos icónicos (solo nivel 1) */}
            {currentLevel.signs.length > 0 && (
              <div className="mt-8 pt-6 border-t border-noche/10">
                <p className="font-cinzel text-xs uppercase tracking-widest text-noche/80 mb-4 font-bold">Signos Icónicos Evidentes</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentLevel.signs.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 bg-maiz/8 rounded-xl px-4 py-3 border border-maiz/20">
                      <Icon icon="ph:arrow-right-bold" className="text-maiz shrink-0" />
                      <div>
                        <span className="font-playfair font-bold text-noche text-sm">{s.sign}</span>
                        <span className="font-lora text-noche/90 text-sm"> → {s.meaning}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Cierre */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/40 border-4 border-double border-terracota/20 rounded-2xl p-8 md:p-12 text-center shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-terracota/40 self-center"></div>
            <Icon icon="ph:seal-question-duotone" className="text-4xl text-terracota/60 mx-4" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-terracota/40 self-center"></div>
          </div>
          <h3 className="font-cinzel text-xl md:text-2xl font-bold text-pasion uppercase tracking-widest mb-6">
            Cierre del Análisis · Lo que la hermenéutica añade
          </h3>
          <p className="font-lora text-lg md:text-xl text-noche leading-relaxed italic max-w-3xl mx-auto">
            "{analysisData.closing}"
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default StoryAnalysis;
