import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import songsData from '../../data/songs.json';

const SongCard = ({ song, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white/60 backdrop-blur-sm border border-noche/10 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-default"
      style={{ borderLeftColor: song.color, borderLeftWidth: '5px' }}
    >
      {/* Fondo de hover muy sutil */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${song.color}08, transparent 60%)` }}
      />

      {/* Número de ranking */}
      <div
        className="absolute top-5 right-5 font-playfair text-6xl md:text-7xl font-black leading-none pointer-events-none select-none transition-all duration-500"
        style={{ color: `${song.color}15` }}
      >
        {String(song.rank).padStart(2, '0')}
      </div>

      <div className="relative z-10 flex items-start gap-4">
        {/* Ícono y número */}
        <div
          className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${song.color}20`, border: `1.5px solid ${song.color}40` }}
        >
          <Icon icon={song.icon} className="text-2xl" style={{ color: song.color }} />
        </div>

        <div className="flex-1 min-w-0">
          {/* Género y País */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className="font-cinzel text-[10px] md:text-xs uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border"
              style={{ color: song.color, borderColor: `${song.color}40`, backgroundColor: `${song.color}10` }}
            >
              {song.genre}
            </span>
            <span className="font-cinzel text-[11px] md:text-sm text-noche/80 uppercase tracking-widest font-semibold">
              {song.country} · {song.year}
            </span>
          </div>

          {/* Título */}
          <h3 className="font-playfair text-xl md:text-2xl font-bold text-noche leading-tight mb-1 group-hover:text-pasion transition-colors duration-300">
            {song.title}
          </h3>
          <p className="font-cinzel text-sm md:text-base text-noche/80 uppercase tracking-wider font-semibold mb-3">
            {song.artist}
          </p>

          {/* Descripción */}
          <p className="font-lora text-base md:text-lg text-noche leading-relaxed mb-5">
            {song.description}
          </p>

          {/* Botón YouTube */}
          <a
            href={song.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-cinzel text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            style={{ backgroundColor: '#FF0000' }}
            onClick={e => e.stopPropagation()}
          >
            <Icon icon="logos:youtube-icon" className="text-base" />
            Escuchar en YouTube
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Songs = () => {
  return (
    <section id="songs" className="relative py-24 bg-crema overflow-hidden">
      {/* Patrón de notas musicales decorativo */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #C4501E 31px, #C4501E 32px)' }}
      />

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 right-10 text-maiz/10 pointer-events-none">
        <Icon icon="ph:music-notes-duotone" className="text-[200px] md:text-[300px]" />
      </div>
      <div className="absolute bottom-20 left-0 text-terracota/8 pointer-events-none">
        <Icon icon="ph:guitar-duotone" className="text-[180px] md:text-[260px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-terracota/50"></div>
            <Icon icon="ph:music-note-duotone" className="text-3xl text-terracota" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-terracota/50"></div>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-noche mb-4 drop-shadow-sm">
            Top 7 Canciones
          </h2>
          <p className="font-playfair text-xl md:text-2xl text-pasion italic mb-2">
            Latinoamericanas
          </p>
          <p className="font-lora text-noche/90 text-lg max-w-2xl mx-auto">
            Siete obras que cruzaron fronteras, fundaron identidades y convirtieron el ritmo en resistencia cultural.
          </p>
        </motion.div>

        {/* Grid de canciones */}
        <div className="flex flex-col gap-5">
          {songsData.songs.map((song, index) => (
            <SongCard key={song.rank} song={song} index={index} />
          ))}
        </div>

        {/* Cierre editorial */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-maiz/50"></div>
            <Icon icon="ph:vinyl-record-duotone" className="text-2xl text-maiz/60" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-maiz/50"></div>
          </div>
          <p className="font-cinzel text-sm text-noche/70 uppercase tracking-widest mt-4 font-semibold">
            El ritmo como voz de un continente
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Songs;
