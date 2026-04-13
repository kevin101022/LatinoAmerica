import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';
import bgImage from '../../assets/images/3012a2938e18a10d13893d0cf40bdda1.jpg';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll('.letter');
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(letters, {
            opacity: [0, 1],
            y: [40, 0],
            scale: [0.8, 1],
            delay: stagger(60),
            duration: 1000,
            easing: 'easeOutQuint'
          });
        } else {
          // Reset
          letters.forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(40px) scale(0.8)';
          });
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  const team = [
    "Luna Julieth Sanguino Serrano",
    "Mariana Contreras Fernandez",
    "Marlyn Yuliana Ramírez Angarita",
    "Lex Morgan Ortiz Zapata"
  ];

  return (
    <section 
      className="relative h-[80vh] min-h-[600px] max-h-[800px] flex flex-col justify-center items-center py-10 px-6 overflow-hidden" 
      id="inicio"
    >
      {/* 1. Fondo e Imagen */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Latinoamérica" 
          className="w-full h-full object-cover top-0 left-0"
        />
        {/* Capa mucho más oscura y sólida para asegurar lectura perfecta */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* 2. Contenido de la Portada */}
      <div className="z-10 relative flex flex-col items-center w-full max-w-5xl text-center mt-6">
        
        {/* Gran Título Monumental animado por Letras */}
        <h1 
          className="font-playfair text-[min(10vw,6rem)] lg:text-[7rem] font-bold text-white leading-none mb-8 drop-shadow-[0_4px_6px_rgba(0,0,0,1)] uppercase tracking-wide whitespace-nowrap"
          ref={titleRef}
        >
          {Array.from("LATINOAMERICA").map((char, i) => (
            <span key={i} className="letter inline-block">{char}</span>
          ))}
        </h1>

        {/* Nombres del Equipo / Introducción compactos */}
        <motion.div 
          className="w-full max-w-3xl bg-black/60 border-2 border-maiz/50 rounded-xl p-6 lg:p-8 shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-cinzel text-maiz text-base tracking-[0.2em] uppercase text-center mb-4 border-b border-maiz/30 pb-3">
            Integrantes del Proyecto
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-lora text-white text-lg md:text-xl font-medium text-center">
            {team.map((name, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
