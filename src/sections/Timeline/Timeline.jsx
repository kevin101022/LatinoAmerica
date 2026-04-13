import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import EraCard from './EraCard';
import timelineData from '../../data/timeline.json';

// Importando imágenes decorativas
import leerImg from '../../assets/images/leer.jpg';
import literaturaImg from '../../assets/images/literatura.jpg';

const Timeline = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Line Animation (vertical drop)
        const lineEl = pathRef.current;
        if (lineEl) {
          animate(lineEl, {
            height: ['0%', '100%'],
            easing: 'easeInOutQuad',
            duration: 2500,
            begin: () => {
              lineEl.style.opacity = 1;
            }
          });
        }

        // Points Animation
        animate('.era-point', {
          scale: [0, 1],
          opacity: [0, 1],
          delay: stagger(300, {start: 600}), 
          easing: 'spring(1, 80, 10, 0)'
        });

        observer.disconnect();
      }
    }, { threshold: 0.05 });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="relative py-24 bg-crema overflow-hidden" 
      ref={containerRef}
      id="linea-tiempo"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-maiz/20 via-crema/80 to-transparent pointer-events-none"></div>
      
      {/* IMÁGENES DE FONDO DECORATIVAS */}
      <div className="absolute top-0 right-0 w-[90vw] md:w-[60vw] max-w-4xl h-[600px] pointer-events-none opacity-50 mix-blend-multiply z-0">
         <img src={leerImg} alt="Decoración lectura" className="w-full h-full object-cover [mask-image:radial-gradient(ellipse_at_top_right,black_30%,transparent_70%)] -webkit-mask-image:radial-gradient(ellipse_at_top_right,black_30%,transparent_70%)" />
      </div>
      <div className="absolute bottom-0 left-0 w-[90vw] md:w-[60vw] max-w-4xl h-[700px] pointer-events-none opacity-40 mix-blend-multiply z-0">
         <img src={literaturaImg} alt="Decoración literatura" className="w-full h-full object-cover [mask-image:radial-gradient(ellipse_at_bottom_left,black_20%,transparent_70%)] -webkit-mask-image:radial-gradient(ellipse_at_bottom_left,black_20%,transparent_70%)" />
      </div>

      <div className="text-center mb-16 relative z-10 px-4">
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-noche font-bold mb-4 drop-shadow-sm">
          Línea del Tiempo
        </h2>
        <p className="font-lora text-noche/80 text-lg md:text-xl max-w-2xl mx-auto">
          Evolución de las letras latinoamericanas. Navega por las épocas que marcaron nuestra historia y estilo literario.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* LA LÍNEA VERTICAL CENTRAL */}
        <div className="absolute top-0 bottom-0 left-[28px] lg:left-1/2 -translate-x-1/2 w-1 z-0">
          {/* El track tenue de fondo */}
          <div className="w-full h-full bg-noche/5"></div>
          {/* La línea animada con gradiente */}
          <div 
            ref={pathRef}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-pasion via-maiz to-andino rounded-b-full origin-top"
            style={{ opacity: 0, height: '0%' }}
          ></div>
        </div>

        {/* CONTAINER DE LAS ERAS */}
        <div className="relative flex flex-col gap-12 lg:gap-8 w-full pb-10">
          {timelineData.map((era, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={era.id} className="relative w-full flex items-start lg:justify-between group min-h-[140px]">
                
                {/* EL PUNTO DE LA ERA (Absoluto anclado a la línea) */}
                <div 
                  className="era-point absolute left-[12px] lg:left-1/2 -translate-x-1/2 mt-10 md:mt-12 w-8 h-8 rounded-full border-[6px] border-crema z-20 shadow-[0_0_15px_rgba(0,0,0,0.15)]"
                  style={{ 
                    backgroundColor: era.color, 
                    opacity: 0, 
                    transform: 'scale(0)' 
                  }}
                />
                
                {/* CONECTOR HORIZONTAL MINIMALISTA (Desktop) */}
                <div 
                  className={`hidden lg:block absolute top-[64px] h-[2px] w-[3rem] bg-noche/10 z-0`}
                  style={{ 
                    left: isLeft ? 'calc(50% - 3rem)' : '50%'
                  }}
                />
                
                {/* CONECTOR HORIZONTAL MINIMALISTA (Mobile) */}
                <div 
                  className={`lg:hidden absolute top-[56px] left-[28px] h-[2px] w-[28px] bg-noche/10 z-0`}
                />
                
                {/* Espaciador vacío para el lado opuesto en pantallas grandes */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)] shrink-0"></div>

                {/* CONTENEDOR DE LA TARJETA */}
                <div className={`w-full pl-[56px] lg:pl-0 lg:w-[calc(50%-3rem)] shrink-0 transition-opacity ${isLeft ? 'lg:order-first' : ''}`}>
                  <EraCard era={era} position={isLeft ? 'left' : 'right'} />
                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
