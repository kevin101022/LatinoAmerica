import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-noche text-crema py-12 px-6 border-t border-pasion">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        <h2 className="font-playfair text-3xl font-bold mb-4">
          Nuestra <span className="text-terracota italic">América</span> Escribe
        </h2>
        
        <div className="w-24 h-[1px] bg-maiz/50 mb-6"></div>
        
        <p className="font-lora text-white/60 text-base mb-8 max-w-lg leading-relaxed">
          Un proyecto dedicado a explorar, comprender y enaltecer la riqueza cultural, lingüística y literaria de Latinoamérica.
        </p>

        <div className="font-cinzel text-xs text-white/40 tracking-[0.2em] uppercase">
          &copy; {new Date().getFullYear()} Proyecto de Literatura. Todos los colores reservados.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
