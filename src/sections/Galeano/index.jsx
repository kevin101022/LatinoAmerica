import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';
import galeanoImg from '../../assets/images/galeano.jpg';
import venasImg from '../../assets/images/venas-abiertas.jpg';

const GaleanoSection = () => {
  const quoteRef = useRef(null);
  
  const quoteText = "La división internacional del trabajo consiste en que unos países se especializan en ganar y otros en perder. Nuestra comarca del mundo, que hoy llamamos América Latina, fue precoz: se especializó en perder desde los remotos tiempos en que los europeos del Renacimiento se abalanzaron a través del mar y le hundieron los dientes en la garganta.";
  const words = quoteText.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animar cada palabra de la cita
          animate(
            quoteRef.current.querySelectorAll('.quote-word'),
            {
              opacity: [0, 1],
              y: [10, 0],
              delay: stagger(30),
              easing: 'easeOutExpo',
              duration: 800
            }
          );
        } else {
          // Reset para que vuelva a animarse la próxima vez
          quoteRef.current.querySelectorAll('.quote-word').forEach(el => {
            if(el) el.style.opacity = 0;
          });
        }
      },
      { threshold: 0.2 }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 md:py-16 px-6 bg-white overflow-hidden relative min-h-[85vh] flex items-center" id="galeano">
      {/* Decors */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-pasion/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        
        {/* Columna Izquierda: Composición Artística de Imágenes */}
        <motion.div 
          className="relative w-full h-[500px] flex items-center justify-center p-8"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Fondo Decorativo para enmarcar */}
          <div className="absolute top-10 left-10 w-3/4 h-3/4 bg-noche/5 border-2 border-noche border-dashed rounded-lg"></div>

          {/* Imagen de Galeano (Principal, tamaño grande) */}
          <motion.div 
            className="absolute z-10 w-2/3 h-4/5 left-4 top-4 rounded-xl overflow-hidden shadow-[15px_15px_30px_rgba(0,0,0,0.3)] border-[6px] border-white ring-1 ring-black/10"
            whileHover={{ scale: 1.02, zIndex: 30 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img 
              src={galeanoImg} 
              alt="Eduardo Galeano" 
              className="w-full h-full object-cover filter contrast-125 saturate-50"
            />
          </motion.div>
          
          {/* Imagen del Libro (Superpuesta, flotando abajo a la derecha) */}
          <motion.div 
            className="absolute z-20 w-2/5 h-auto right-4 bottom-8 rounded-lg overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.4)] border-4 border-white"
            animate={{ rotate: 6 }}
            whileHover={{ scale: 1.1, y: -10, rotate: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={venasImg} 
              alt="Las venas abiertas de América Latina" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Columna Derecha: Cita y Análisis Integro */}
        <div className="flex flex-col justify-center text-sm md:text-base">
          <div className="mb-4">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-noche leading-tight">
              Eduardo Galeano
            </h2>
            <p className="font-cinzel text-pasion font-bold tracking-widest text-xs md:text-sm mt-2 uppercase">
              Las venas abiertas de América Latina (1971)
            </p>
          </div>

          <div className="font-lora text-noche/80 space-y-4">
            <p className="leading-snug md:leading-relaxed text-justify">
              En su obra clásica, Galeano concibe Latinoamérica como una región definida por la explotación histórica de sus recursos y su pueblo. Para él, América Latina es una tierra rica condenada a la pobreza por el saqueo colonial e imperial. Sus recursos naturales — metales preciosos, tierras fértiles, petróleo y gas — han servido paradójicamente más a la riqueza de las grandes potencias que al bienestar de los propios latinoamericanos.
            </p>

            <h3 className="font-playfair text-xl font-bold text-noche/90 mt-2">Su visión central</h3>
            <p className="leading-snug md:leading-relaxed text-justify">
              Galeano concibe Latinoamérica como una región atrapada en una paradoja trágica: cuanto más riqueza natural posee, más pobre ha sido su pueblo. El oro, la plata, el azúcar, el caucho, el petróleo — todos fluyeron hacia afuera, dejando miseria hacia adentro.
            </p>
          </div>

          {/* Cita Contundente destacada */}
          <div className="relative my-6 p-4 md:p-5 bg-crema/40 border-l-4 border-pasion shadow-sm">
            <div className="absolute -top-3 -left-3 text-5xl text-pasion opacity-20 font-serif leading-none">"</div>
            <h4 className="font-cinzel text-[0.65rem] md:text-xs text-pasion font-bold uppercase tracking-widest mb-2">Un fragmento contundente de la obra</h4>
            <p 
              ref={quoteRef}
              className="font-playfair text-[0.95rem] md:text-lg italic text-noche space-x-1"
            >
              {words.map((word, i) => (
                <span key={i} className="quote-word inline-block opacity-0">
                  {word}
                </span>
              ))}
            </p>
          </div>

          <p className="font-lora text-noche/80 text-sm md:text-base leading-snug md:leading-relaxed text-justify mt-2">
            La definición más poderosa que Galeano da de Latinoamérica: no como un accidente geográfico, sino como el resultado de un sistema global diseñado para extraer, en el que la región fue asignada al papel del despojado desde el primer día de la conquista. Para Galeano, entender Latinoamérica es entender esa historia de despojo — y también la resistencia que nunca ha cesado.
          </p>

        </div>
      </div>
    </section>
  );
};

export default GaleanoSection;
