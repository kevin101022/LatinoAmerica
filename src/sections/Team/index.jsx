import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const members = [
  { name: 'Luna Julieth Sanguino Serrano', icon: 'ph:user-circle-duotone' },
  { name: 'Mariana Contreras Fernández', icon: 'ph:user-circle-duotone' },
  { name: 'Marlyn Yuliana Ramírez Angarita', icon: 'ph:user-circle-duotone' },
  { name: 'Lex Morgan Ortiz Zapata', icon: 'ph:user-circle-duotone' },
];

const Team = () => (
  <section id="team" className="relative py-24 bg-crema overflow-hidden border-t border-noche/8">
    {/* Patrón de fondo */}
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #C4501E 31px, #C4501E 32px)' }}
    />

    {/* Decoración */}
    <div className="absolute bottom-0 right-0 text-maiz/5 pointer-events-none">
      <Icon icon="ph:users-three-duotone" className="text-[300px]" />
    </div>

    <div className="max-w-3xl mx-auto px-4 md:px-8 relative z-10">

      {/* Cabecera */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-3 mb-5">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-selva/50" />
          <Icon icon="ph:users-three-duotone" className="text-3xl text-selva" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-selva/50" />
        </div>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-noche mb-3">
          Equipo de Trabajo
        </h2>
        <p className="font-lora text-lg text-noche/80">
          Proyecto académico sobre Literatura Latinoamericana
        </p>
      </motion.div>

      {/* Grid de miembros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/60 border border-noche/10 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            style={{ borderLeftColor: '#2D6A4F', borderLeftWidth: '4px' }}
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-selva/10 border-2 border-selva/20 flex items-center justify-center group-hover:bg-selva/20 transition-colors duration-300">
              <Icon icon={member.icon} className="text-2xl text-selva" />
            </div>
            <p className="font-playfair text-base md:text-lg font-semibold text-noche leading-snug">
              {member.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Placa del proyecto */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-block bg-white/40 border-4 border-double border-selva/20 rounded-2xl px-8 py-5 shadow-sm">
          <p className="font-cinzel text-sm font-bold text-selva uppercase tracking-widest mb-1">
            Literatura Latinoamericana
          </p>
          <p className="font-lora text-base text-noche/80">
            Proyecto académico · UNIPAMPLONA · Cúcuta, Colombia · 2026
          </p>
        </div>
      </motion.div>

    </div>
  </section>
);

export default Team;
