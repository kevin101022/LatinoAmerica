import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Inicio', id: 'hero' },
    { name: '¿Qué es?', id: 'whatislatam' },
    { name: 'Colores', id: 'colors' },
    { name: 'Galeano', id: 'galeano' },
    { name: 'Mapa', id: 'interactive-map' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-noche/80 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo O Título corto */}
        <div 
          className="font-playfair text-xl md:text-2xl font-bold text-crema cursor-pointer flex items-center space-x-2 shadow-sm"
          onClick={() => scrollTo('hero')}
        >
          <span>Nuestra</span>
          <span className="text-terracota italic font-light">América</span>
        </div>

        {/* Links (Escritorio) */}
        <ul className="hidden md:flex space-x-8 font-cinzel text-sm uppercase tracking-widest text-white/80">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button 
                onClick={() => scrollTo(link.id)}
                className="hover:text-maiz transition-colors duration-300 outline-none"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Móvil (Simplificado a un solo botón o scroll básico) */}
        <div className="md:hidden flex space-x-4">
          <button 
             onClick={() => scrollTo('colors')}
             className="text-xs font-cinzel text-white/80 uppercase border border-white/20 px-3 py-1 rounded"
          >
             Explorar
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
