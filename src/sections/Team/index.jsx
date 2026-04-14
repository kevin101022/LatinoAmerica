import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import foto1 from '../../assets/images/fotogrupo.jpeg';
import foto2 from '../../assets/images/grupofotojpeg.jpeg';

const Team = () => (
  <section
    id="team"
    className="relative py-20 md:py-28 bg-crema overflow-hidden"
  >
    {/* Manchas decorativas sutiles */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-maiz/8 rounded-full blur-[80px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-60 h-60 bg-selva/6 rounded-full blur-[70px] pointer-events-none" />

    <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

      {/* CABECERA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-3 mb-5">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-pasion/50" />
          <Icon icon="ph:users-three-duotone" className="text-3xl text-pasion" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-pasion/50" />
        </div>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-noche mb-3 drop-shadow-sm">
          Equipo de Trabajo
        </h2>
        <div className="w-16 h-[3px] bg-pasion mx-auto mb-5" />
        <p className="font-lora text-lg text-noche/80 font-medium">
          Proyecto académico sobre Literatura Latinoamericana
        </p>
      </motion.div>

      {/* DOS FOTOS LADO A LADO — más grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
        {[foto1, foto2].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative rounded-2xl overflow-hidden border-4 border-noche shadow-[8px_8px_0px_rgba(26,26,46,1)] aspect-[3/2]"
          >
            <img
              src={src}
              alt={`Foto grupal del equipo ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      {/* PIE DE FOTO ÚNICO — centrado bajo las dos fotos */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-2 mb-12"
      >
        <Icon icon="ph:map-pin-duotone" className="text-xl text-pasion shrink-0" />
        <p className="font-cinzel text-xs md:text-sm text-noche uppercase tracking-[0.2em] font-semibold">
          Consulado General de Venezuela · Cúcuta, Colombia
        </p>
      </motion.div>

      {/* PLACA DEL PROYECTO */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <div className="inline-block bg-white/60 border-4 border-double border-noche/30 rounded-2xl px-8 py-5 shadow-sm">
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
