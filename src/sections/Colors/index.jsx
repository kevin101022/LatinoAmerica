import React, { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { motion } from 'framer-motion';

// Imágenes Cucuteñas
import imgCucuta1 from '../../assets/images/1.jpeg';
import imgCucuta2 from '../../assets/images/2.jpeg';
import imgCucuta3 from '../../assets/images/3.jpeg';

const ColorsSection = () => {
  const containerRef = useRef(null);
  const swatchesRef = useRef([]);
  const [activeColor, setActiveColor] = useState(null);

  const colorsData = [
    { name: 'Terracota', hex: '#C4501E', tailwind: 'bg-terracota', desc: 'Arquitectura y pueblos: casas pintadas de Cartagena, Guanajuato, Valparaíso.' },
    { name: 'Selva', hex: '#2D6A4F', tailwind: 'bg-selva', desc: 'Naturaleza: el verde profundo de la Amazonía y las selvas latinoamericanas.' },
    { name: 'Maíz / Sol', hex: '#F5A623', tailwind: 'bg-maiz', desc: 'Muralismo mexicano: Diego Rivera, Siqueiros, colores poderosos y simbólicos.' },
    { name: 'Pasión', hex: '#8B1A1A', tailwind: 'bg-pasion', desc: 'Historia y resistencia: la sangre de las luchas de independencia y la pasión cultural.' },
    { name: 'Andino', hex: '#1B6CA8', tailwind: 'bg-andino', desc: 'El azul turquesa del Caribe y los cielos de los Andes.' },
    { name: 'Crema', hex: '#F5E6D3', tailwind: 'bg-crema', desc: 'Textiles indígenas: tejidos mayas, andinos y amazónicos con significado cultural.' },
    { name: 'Noche', hex: '#1A1A2E', tailwind: 'bg-noche', desc: 'La noche latinoamericana: el realismo mágico, lo misterioso y lo profundo.' },
  ];

  const setSwatchRef = (el, index) => {
    swatchesRef.current[index] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(
            swatchesRef.current,
            {
              opacity: [0, 1],
              scale: [0.8, 1],
              delay: stagger(100),
              easing: 'easeOutExpo',
              duration: 800
            }
          );
        } else {
          // Reset para animar nuevamente
          swatchesRef.current.forEach(el => {
            if(el) {
              el.style.opacity = 0;
            }
          });
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    swatchesRef.current.forEach(el => {
      if(el) el.style.opacity = 0;
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (index) => {
    setActiveColor(colorsData[index]);
    animate(
      swatchesRef.current[index],
      {
        scale: 1.15,
        boxShadow: '0px 15px 30px rgba(0,0,0,0.5)',
        duration: 600,
        easing: 'spring(1, 80, 10, 0)'
      }
    );
  };

  const handleMouseLeave = (index) => {
    setActiveColor(null);
    animate(
      swatchesRef.current[index],
      {
        scale: 1,
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        duration: 600,
        easing: 'spring(1, 80, 10, 0)'
      }
    );
  };

  return (
    <section className="py-16 md:py-20 px-6 bg-crema/20 flex flex-col justify-center border-t border-noche/10" id="colors">
      <div className="max-w-6xl mx-auto w-full">
        {/* PARTE 1: LOS COLORES */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-noche mb-4">
            ¿De qué color es Latinoamérica?
          </h2>
          <p className="font-lora text-lg md:text-xl text-noche leading-relaxed">
            No existe un solo color, sino una paleta inmensamente rica. Latinoamérica es famosa por su uso vibrante y expresivo del color. Si hubiera que elegir uno que la represente simbólicamente, muchos dirían que es el verde de su biodiversidad combinado con el rojo de su historia y pasión cultural. Lo más honesto es decir que Latinoamérica es todos los colores a la vez.
          </p>
        </div>

        <div className="relative mb-20" ref={containerRef}>
          {/* Swatches Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-5 justify-center">
            {colorsData.map((color, index) => (
              <div 
                key={color.name}
                ref={(el) => setSwatchRef(el, index)}
                className={`relative w-full aspect-square cursor-pointer ${color.tailwind} border-[4px] border-noche shadow-xl hover:z-20`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{ borderRadius: '4px' }}
              >
              </div>
            ))}
          </div>
          
          <div className="mt-8 h-32 flex items-center justify-center">
             {activeColor ? (
                <div className="text-center w-full max-w-2xl px-4 p-6 bg-white border-4 border-noche shadow-[8px_8px_0px_rgba(26,26,46,1)] transition-all duration-300">
                  <h4 
                    className="font-cinzel font-bold text-2xl mb-2 tracking-wider" 
                    style={{
                      color: activeColor.hex, 
                      WebkitTextStroke: activeColor.name === 'Crema' ? '1px #000000' : '0px',
                      textShadow: activeColor.name !== 'Crema' ? '0px 1px 4px rgba(0,0,0,0.4)' : 'none'
                    }}
                  >
                    {activeColor.name}
                  </h4>
                  <p className="font-lora text-noche text-lg font-medium">{activeColor.desc}</p>
                </div>
             ) : (
                <div className="text-center text-noche font-lora italic text-lg opacity-60">
                   Pasa el cursor sobre un color para revelar su detalle
                </div>
             )}
          </div>
        </div>

        {/* PARTE 2: PERSPECTIVA CUCUTEÑA POLAROID */}
        <div className="mt-16 border-t-2 border-noche/10 pt-16">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl md:text-5xl font-bold text-noche mb-4">
              Foto Latinoamericana Desde una Perspectiva Cucuteña
            </h3>
            <div className="w-24 h-2 bg-pasion mx-auto border-2 border-noche"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
             {/* Polaroid 1 */}
             <motion.div 
               className="relative overflow-hidden bg-white p-4 pb-16 shadow-[0px_15px_35px_rgba(0,0,0,0.15)] z-10 w-full max-w-[320px] -rotate-3"
               whileHover={{ scale: 1.05, rotate: 0, zIndex: 30, boxShadow: '0px_25px_50px_rgba(0,0,0,0.25)' }}
               transition={{ type: "spring", stiffness: 300 }}
             >
               <img src={imgCucuta1} alt="Colombia Cúcuta" className="w-full h-auto aspect-square object-cover" />
               <p className="absolute bottom-4 left-0 w-full text-center font-caveat font-lora italic text-gray-500 text-lg">Cúcuta, Colombia</p>
             </motion.div>

             {/* Polaroid 2 */}
             <motion.div 
               className="relative overflow-hidden bg-white p-4 pb-16 shadow-[0px_15px_35px_rgba(0,0,0,0.15)] z-10 w-full max-w-[320px] rotate-2 md:mt-10"
               whileHover={{ scale: 1.05, rotate: 0, zIndex: 30, boxShadow: '0px_25px_50px_rgba(0,0,0,0.25)' }}
               transition={{ type: "spring", stiffness: 300 }}
             >
               <img src={imgCucuta2} alt="Perspectiva Cucuteña" className="w-full h-auto aspect-square object-cover" />
               <p className="absolute bottom-4 left-0 w-full text-center font-caveat font-lora italic text-gray-500 text-lg">Retrato Local</p>
             </motion.div>

             {/* Polaroid 3 */}
             <motion.div 
               className="relative overflow-hidden bg-white p-4 pb-16 shadow-[0px_15px_35px_rgba(0,0,0,0.15)] z-10 w-full max-w-[320px] -rotate-2"
               whileHover={{ scale: 1.05, rotate: 0, zIndex: 30, boxShadow: '0px_25px_50px_rgba(0,0,0,0.25)' }}
               transition={{ type: "spring", stiffness: 300 }}
             >
               <img src={imgCucuta3} alt="Fotos Cúcuta" className="w-full h-auto aspect-square object-cover" />
               <p className="absolute bottom-4 left-0 w-full text-center font-caveat font-lora italic text-gray-500 text-lg">Tardes Andinas</p>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorsSection;
