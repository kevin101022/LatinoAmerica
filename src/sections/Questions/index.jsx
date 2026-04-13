import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import data from '../../data/questions.json';
import imagen1 from '../../assets/images/Imagen1.jpg';

/* ── ACORDEÓN FAQ ── */
const FAQ = ({ pregunta, respuesta, conclusion, index, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15 }}
    className="border border-noche/10 rounded-2xl overflow-hidden shadow-sm bg-white/50"
  >
    {/* Cabecera clicable */}
    <button
      onClick={onToggle}
      className="w-full flex items-start gap-4 p-6 md:p-8 text-left group transition-colors duration-300 hover:bg-maiz/5"
    >
      <div
        className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 font-playfair font-bold text-base
          ${isOpen ? 'bg-pasion text-crema border-pasion' : 'bg-transparent text-pasion border-pasion/40 group-hover:border-pasion'}`}
      >
        {index + 1}
      </div>
      <div className="flex-1">
        <p className="font-playfair text-lg md:text-xl font-bold text-noche leading-snug pr-4">
          {pregunta}
        </p>
      </div>
      <div className={`shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <Icon icon="ph:caret-down-bold" className="text-pasion text-xl" />
      </div>
    </button>

    {/* Respuesta expandible */}
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-6 md:px-8 pb-8 border-t border-noche/8">
            <div className="pt-6 space-y-4">
              {respuesta.split('\n\n').map((para, i) => (
                <p key={i} className="font-lora text-base md:text-lg text-noche/90 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            {/* Conclusión destacada */}
            <div className="mt-6 flex gap-3 bg-maiz/10 border-l-4 border-maiz/60 px-5 py-4 rounded-r-xl">
              <Icon icon="ph:seal-check-duotone" className="text-2xl text-maiz shrink-0 mt-0.5" />
              <p className="font-lora text-base md:text-lg text-noche font-medium italic leading-relaxed">
                <strong className="font-cinzel text-sm text-pasion uppercase tracking-widest not-italic block mb-1">Conclusión</strong>
                {conclusion}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          SECCIÓN 1 · ENMIENDA (CITA + IMAGEN)
      ═══════════════════════════════════════════════ */}
      <section id="enmienda" className="relative py-24 bg-noche overflow-hidden">
        {/* Textura fondo */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #C4501E 31px, #C4501E 32px)' }}
        />

        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="shrink-0 w-60 md:w-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-maiz/20"
            >
              <img
                src={imagen1}
                alt="Enmienda de un hombre"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Texto de la cita */}
            <div className="flex flex-col gap-6">
              <p className="font-cinzel text-xs md:text-sm text-maiz uppercase tracking-[0.3em] font-bold">
                {data.enmienda.titulo}
              </p>

              <div className="relative">
                <Icon icon="ph:quotes-duotone" className="absolute -top-4 -left-4 text-maiz/10 text-[120px] pointer-events-none" />
                <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl text-crema leading-relaxed italic relative z-10">
                  "{data.enmienda.cita}"
                </blockquote>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-[2px] w-10 bg-maiz/50" />
                <div>
                  <p className="font-cinzel text-sm font-bold text-maiz">{data.enmienda.autor}</p>
                  <p className="font-lora text-xs text-crema/60 italic">{data.enmienda.cargo}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECCIÓN 2 · PREGUNTAS FINALES (FAQ)
      ═══════════════════════════════════════════════ */}
      <section id="questions" className="relative py-24 bg-crema overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #C4501E 31px, #C4501E 32px)' }}
        />

        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">

          {/* Cabecera */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-pasion/50" />
              <Icon icon="ph:question-duotone" className="text-3xl text-pasion" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-pasion/50" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-noche mb-3">
              Preguntas Finales
            </h2>
            <p className="font-lora text-lg text-noche/80">
              Haz clic en cada pregunta para revelar la respuesta.
            </p>
          </motion.div>

          {/* FAQs */}
          <div className="space-y-4 mb-20">
            {data.preguntas.map((p, i) => (
              <FAQ
                key={p.id}
                index={i}
                pregunta={p.pregunta}
                respuesta={p.respuesta}
                conclusion={p.conclusion}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* ── BIBLIOGRAFÍA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Icon icon="ph:books-duotone" className="text-3xl text-selva" />
              <h3 className="font-cinzel text-xl md:text-2xl font-bold uppercase tracking-widest text-noche">
                Bibliografía
              </h3>
            </div>

            <div className="bg-white/50 border border-noche/10 rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
              {data.bibliografia.map((ref, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex gap-3 pb-4 border-b border-noche/8 last:border-0 last:pb-0"
                >
                  <Icon icon="ph:book-open-duotone" className="text-terracota text-xl shrink-0 mt-1" />
                  <div>
                    <p className="font-lora text-base text-noche leading-relaxed">
                      <span className="font-semibold">{ref.autor}</span>
                      {ref.año ? ` (${ref.año}). ` : '. '}
                      <em>{ref.titulo}.</em>
                      {ref.editorial ? ` ${ref.editorial}` : ''}
                    </p>
                    {ref.nota && (
                      <p className="font-lora text-sm text-pasion italic mt-0.5">— {ref.nota}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Questions;
