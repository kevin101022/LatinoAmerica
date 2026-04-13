import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { name: 'Inicio', id: 'hero', icon: 'ph:house-duotone' },
    { name: '¿Qué es?', id: 'whatislatam', icon: 'ph:globe-hemisphere-west-duotone' },
    { name: 'Colores', id: 'colors', icon: 'ph:palette-duotone' },
    { name: 'Galeano', id: 'galeano', icon: 'ph:feather-duotone' },
    { name: 'Mapa', id: 'interactive-map', icon: 'ph:map-pin-duotone' },
    { name: 'Cronología', id: 'timeline', icon: 'ph:clock-countdown-duotone' },
    { name: 'Educación', id: 'education', icon: 'ph:student-duotone' },
    { name: 'Canciones', id: 'songs', icon: 'ph:music-note-duotone' },
    { name: 'Semiótica', id: 'story-analysis', icon: 'ph:book-open-duotone' },
    { name: 'Preguntas', id: 'questions', icon: 'ph:question-duotone' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-noche/95 shadow-xl' : 'bg-noche/80'} backdrop-blur-md border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">

          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="font-playfair text-lg md:text-xl font-bold text-crema flex items-center gap-1.5 shrink-0"
          >
            <span>Nuestra</span>
            <span className="text-terracota italic font-light">América</span>
          </button>

          {/* Links desktop — scrollable row */}
          <ul className="hidden lg:flex items-center gap-1 font-cinzel text-xs uppercase tracking-widest text-white/75 overflow-x-auto flex-1 justify-end">
            {navLinks.map((link) => (
              <li key={link.id} className="shrink-0">
                <button
                  onClick={() => scrollTo(link.id)}
                  className="px-3 py-1.5 rounded-lg hover:text-maiz hover:bg-white/5 transition-all duration-200 whitespace-nowrap outline-none"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa (móvil + tablet) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-9 h-9 rounded-lg border border-white/20 hover:border-maiz/50 transition-colors duration-200 gap-1 shrink-0"
            aria-label="Menú"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-crema origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-crema"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-crema origin-center transition-all"
            />
          </button>

        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[52px] left-0 w-full z-40 bg-noche/97 backdrop-blur-xl border-b border-white/10 shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <ul className="max-w-2xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-cinzel text-xs text-white/80 uppercase tracking-widest hover:bg-maiz/10 hover:text-maiz transition-all duration-200 text-left"
                  >
                    <Icon icon={link.icon} className="text-xl text-maiz/60 shrink-0" />
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay cierra menú */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
