"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "O processo terapêutico com o Ricardo foi um divisor de águas. Consegui entender padrões que repetia há anos e finalmente me sinto no controle das minhas escolhas.",
    author: "Marcos S.",
    role: "Empresário",
  },
  {
    text: "Me senti acolhida desde a primeira sessão. A abordagem junguiana trouxe uma profundidade que eu não encontrei em outras terapias. Recomendo muito!",
    author: "Juliana F.",
    role: "Advogada",
  },
  {
    text: "Estava perdido na minha transição de carreira e a terapia me ajudou a reencontrar meu propósito. Hoje trabalho com o que amo e com muito mais equilíbrio.",
    author: "Rafael M.",
    role: "Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            O que dizem os pacientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-2xl relative shadow-sm border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 text-secondary/20 w-10 h-10" />
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <p className="font-serif font-semibold text-primary">{t.author}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}