import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import BookCard from './BookCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const eraIcons = {
  "colonial": "ph:feather-bold",
  "ilustracion": "ph:lightbulb-filament-bold",
  "romanticismo": "ph:heart-break-bold",
  "modernismo": "ph:sparkle-bold",
  "vanguardia": "ph:cube-bold",
  "posboom": "ph:book-bookmark-bold"
};

const EraCard = ({ era, position }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = position === 'left';
  const icon = eraIcons[era.id] || "ph:books-bold";

  return (
    <motion.div 
      layout={true}
      className={`w-full max-w-[500px] bg-white/60 backdrop-blur-md border border-noche/10 rounded-2xl p-6 lg:p-8 shadow-xl cursor-pointer relative overflow-hidden group 
        ${isLeft ? 'lg:ml-auto lg:mr-0 lg:rounded-r-none lg:border-r-0' : 'lg:mr-auto lg:ml-0 lg:rounded-l-none lg:border-l-0'} 
      `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Background glow based on era color */}
      <div 
        className={`absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20`}
        style={{ 
          background: `radial-gradient(circle at ${isLeft ? 'top right' : 'top left'}, ${era.color}, transparent 70%)` 
        }}
      />

      {/* Decorative vertical line matching Era's color */}
      <div 
        className={`absolute top-0 bottom-0 w-2 pointer-events-none opacity-80 ${isLeft ? 'right-0 hidden lg:block' : 'left-0 hidden lg:block'}`}
        style={{ backgroundColor: era.color }}
      />
      {/* Mobile top bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 pointer-events-none opacity-80 lg:hidden"
        style={{ backgroundColor: era.color }}
      />

      <motion.div layout="position" className="relative z-10 flex flex-col items-start gap-3">
        <div className="flex w-full items-center justify-between">
          <span className="font-cinzel text-pasion text-xs md:text-sm font-bold tracking-[0.2em] uppercase bg-crema/80 border border-terracota/30 px-3 py-1.5 rounded shadow-sm flex items-center gap-2">
            <Icon icon={icon} className="text-sm" />
            {era.periodo}
          </span>
          <div className="bg-noche/5 rounded-full w-8 h-8 flex items-center justify-center text-noche/50 border border-noche/10 transition-colors group-hover:bg-pasion group-hover:text-crema">
             <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>↓</motion.span>
          </div>
        </div>
        
        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-noche leading-tight">
          {era.era}
        </h3>
      </motion.div>

      <motion.div layout="position" className="relative z-10 mt-3 flex items-center gap-2">
        <p className="font-lora text-noche/70 text-sm font-medium">
          {era.obras.length} Obras Clave {!isExpanded && <span className="underline decoration-noche/20 ml-1">Ver lista</span>}
        </p>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="flex flex-col gap-3 mt-6 relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {era.obras.map((obra, index) => (
              <BookCard key={index} {...obra} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EraCard;
