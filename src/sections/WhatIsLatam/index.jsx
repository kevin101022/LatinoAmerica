import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const WhatIsLatam = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Easing personalizado súper fluido
      } 
    }
  };

  return (
    <section className="py-16 md:py-20 px-6 bg-white relative" id="what-is-latam">
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-maiz/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-noche mb-6 tracking-tight">
            Comprendiendo Nuestra América
          </h2>
          <div className="w-16 h-2 bg-pasion mx-auto border border-noche"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }} // Se repite cada vez que entra al viewport
        >
          {/* Card 1 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col bg-crema p-8 lg:p-10 border-4 border-noche shadow-[8px_8px_0px_rgba(26,26,46,1)] relative z-10 transition-transform duration-300"
          >
            <div className="absolute -top-8 -left-2 md:-left-6 w-16 h-16 bg-terracota border-4 border-noche rounded-full flex items-center justify-center shadow-[4px_4px_0px_rgba(26,26,46,1)]">
              <Icon icon="ph:globe-hemisphere-west" className="text-3xl text-white" />
            </div>
            <h3 className="font-playfair text-3xl font-bold text-noche mt-6 mb-4">
              ¿Qué es Latinoamérica?
            </h3>
            <p className="font-lora text-noche/80 leading-relaxed text-lg flex-grow">
              Latinoamérica es una región del continente americano que comprende los países donde se hablan lenguas derivadas del latín, principalmente español y portugués, y en menor medida francés. Abarca desde México en el norte hasta Argentina y Chile en el sur, incluyendo América Central, el Caribe y América del Sur. Son aproximadamente 20 países con una población de más de 650 millones de personas.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col bg-crema p-8 lg:p-10 border-4 border-noche shadow-[8px_8px_0px_rgba(26,26,46,1)] relative z-10 transition-transform duration-300"
          >
            <div className="absolute -top-8 -left-2 md:-left-6 w-16 h-16 bg-andino border-4 border-noche rounded-full flex items-center justify-center shadow-[4px_4px_0px_rgba(26,26,46,1)]">
              <Icon icon="ph:translate" className="text-3xl text-white" />
            </div>
            <h3 className="font-playfair text-3xl font-bold text-noche mt-6 mb-4">
              Lenguas Predominantes
            </h3>
            <ul className="font-lora text-noche/80 leading-relaxed text-lg space-y-4 flex-grow">
              <li className="flex items-start">
                <span className="text-pasion mr-2 font-bold">•</span>
                <span><strong className="text-noche">Español:</strong> idioma principal en la mayoría de los países.</span>
              </li>
              <li className="flex items-start">
                <span className="text-pasion mr-2 font-bold">•</span>
                <span><strong className="text-noche">Portugués:</strong> hablado por la enorme población de Brasil.</span>
              </li>
              <li className="flex items-start">
                <span className="text-pasion mr-2 font-bold">•</span>
                <span><strong className="text-noche">Francés:</strong> hablado en Haití y la Guayana Francesa.</span>
              </li>
              <li className="flex items-start">
                <span className="text-pasion mr-2 font-bold">•</span>
                <span><strong className="text-noche">Lenguas Indígenas:</strong> quechua, guaraní, aimara y náhuatl, oficiales en varios estados.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col bg-crema p-8 lg:p-10 border-4 border-noche shadow-[8px_8px_0px_rgba(26,26,46,1)] relative z-10 transition-transform duration-300"
          >
            <div className="absolute -top-8 -left-2 md:-left-6 w-16 h-16 bg-selva border-4 border-noche rounded-full flex items-center justify-center shadow-[4px_4px_0px_rgba(26,26,46,1)]">
              <Icon icon="mdi:earth-americas" className="text-3xl text-white" />
            </div>
            <h3 className="font-playfair text-3xl font-bold text-noche mt-6 mb-4">
              Identidad y Cultura
            </h3>
            <p className="font-lora text-noche/80 leading-relaxed text-lg flex-grow">
              Latinoamérica es una de las regiones más diversas del mundo debido al mestizaje. Su identidad se formó a través de la interacción entre los pueblos originarios (Aztecas, Mayas, Incas), la colonización europea y la herencia africana. Es un mosaico de naciones con historia compartida de independencia y resistencia.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsLatam;
