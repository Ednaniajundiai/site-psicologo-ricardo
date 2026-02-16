"use client";

import { motion } from "framer-motion";

const concepts = [
  {
    title: "A Sombra",
    description: "Aspectos ocultos da nossa personalidade que rejeitamos, mas que guardam grande potencial de energia e criatividade quando integrados.",
  },
  {
    title: "A Persona",
    description: "As máscaras sociais que utilizamos para nos adaptar ao mundo. O equilíbrio está em não se confundir com elas.",
  },
  {
    title: "Individuação",
    description: "O processo central da terapia: tornar-se quem você realmente é, integrando consciente e inconsciente em uma totalidade única.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-2 block">
              Nossa Abordagem
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              A Psicologia Analítica de Carl Jung
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Diferente de abordagens focadas apenas no sintoma, a psicologia junguiana busca a raiz das questões na profundidade da alma. É um convite para dialogar com seu inconsciente e descobrir o sentido por trás do sofrimento.
            </p>
            <div className="h-1 w-20 bg-secondary rounded-full"></div>
          </motion.div>

          <div className="space-y-6">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="font-serif text-xl text-secondary mb-2">
                  {concept.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {concept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}