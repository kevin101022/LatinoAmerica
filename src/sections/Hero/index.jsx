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
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-24 px-6 overflow-hidden" 
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
      <div className="z-10 relative flex flex-col items-center justify-center w-full max-w-5xl text-center mt-6">
        
        {/* Gran Título Monumental animado por Letras */}
        <h1 
          className="font-playfair text-[min(9vw,4.5rem)] lg:text-[6rem] font-bold text-white leading-tight mb-6 drop-shadow-[0_4px_6px_rgba(0,0,0,1)] uppercase tracking-wide flex flex-wrap justify-center gap-x-[0.3em] gap-y-2"
          ref={titleRef}
        >
          {"NUESTRA AMÉRICA ESCRIBE.".split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, charIndex) => (
                <span key={`${wordIndex}-${charIndex}`} className="letter inline-block">{char}</span>
              ))}
            </span>
          ))}
        </h1>

        <motion.div 
          className="w-full max-w-4xl text-center mb-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="font-lora text-2xl md:text-3xl text-maiz mb-4 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            La voz de un continente que nunca dejó de escribir
          </h2>
          <p className="font-lora text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-3xl mx-auto">
            Desde la emancipación hasta el boom y más allá — exploramos la identidad, la resistencia y la creatividad de las letras latinoamericanas.
          </p>
        </motion.div>

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
