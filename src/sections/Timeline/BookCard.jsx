import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  }
};

const BookCard = ({ titulo, autor, año, pais, descripcion }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-crema/80 backdrop-blur border border-noche/10 rounded flex relative overflow-hidden group hover:border-pasion/30 transition-all duration-300"
    >
      {/* Lomo del libro simulado */}
      <div className="w-1.5 md:w-2 bg-gradient-to-b from-maiz/80 to-terracota/80 shrink-0 shadow-[inset_1px_0_2px_rgba(0,0,0,0.1)]"></div>
      
      <div className="p-4 md:p-5 flex-1 relative z-10">
        <h4 className="font-playfair text-[1.15rem] md:text-xl text-noche font-bold leading-snug mb-1.5 group-hover:text-pasion transition-colors duration-300">
          {titulo}
        </h4>
        
        <div className="flex flex-wrap gap-x-3 gap-y-1.5 items-center font-cinzel text-[10px] md:text-xs uppercase tracking-widest text-selva mb-3">
          <span className="font-bold flex items-center gap-1">
            <Icon icon="mdi:fountain-pen" className="text-noche/40" />
            {autor}
          </span>
          <span className="flex items-center gap-1 text-noche/60">
            <Icon icon="mdi:calendar-outline" className="text-noche/40" /> {año}
          </span>
          <span className="flex items-center gap-1 text-noche/60">
            <Icon icon="ph:map-pin" className="text-noche/40" /> {pais}
          </span>
        </div>
        
        <p className="font-lora text-noche/80 text-sm leading-relaxed border-l-2 border-noche/10 pl-3 italic">
          "{descripcion}"
        </p>
      </div>

      {/* Marca de agua */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 text-noche/5 opacity-50 mix-blend-overlay pointer-events-none group-hover:scale-110 group-hover:-mr-2 transition-all duration-700">
         <Icon icon="ph:book-open-duotone" className="w-24 h-24" />
      </div>
    </motion.div>
  );
};

export default BookCard;
