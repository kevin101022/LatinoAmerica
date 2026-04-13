import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => (
  <footer className="bg-noche text-crema pt-16 pb-8 px-6 border-t-4 border-pasion/30">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

      {/* Logo / Nombre */}
      <div className="flex items-center gap-3">
        <Icon icon="ph:book-open-text-duotone" className="text-3xl text-maiz" />
        <h2 className="font-playfair text-3xl md:text-4xl font-bold">
          Nuestra <span className="text-terracota italic">América</span> Escribe
        </h2>
      </div>

      {/* Tagline */}
      <p className="font-lora text-lg md:text-xl italic text-crema/70 text-center max-w-lg leading-relaxed">
        "La voz de un continente que nunca dejó de escribir"
      </p>

      {/* Separador */}
      <div className="flex items-center gap-4 w-full max-w-xs">
        <div className="flex-1 h-[1px] bg-maiz/20" />
        <Icon icon="ph:feather-duotone" className="text-maiz/40 text-xl" />
        <div className="flex-1 h-[1px] bg-maiz/20" />
      </div>

      {/* Créditos */}
      <div className="text-center">
        <p className="font-cinzel text-xs text-crema/50 tracking-[0.2em] uppercase mb-1">
          Literatura Latinoamericana · Proyecto académico UNIPAMPLONA
        </p>
        <p className="font-cinzel text-xs text-crema/40 tracking-[0.15em] uppercase">
          Cúcuta, Colombia · © {new Date().getFullYear()}
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;
