"use client";

import { motion } from "framer-motion";
import { Brain, Compass, CloudRain } from "lucide-react";

const pains = [
  {
    icon: CloudRain,
    title: "Peso da Ansiedade",
    description: "Sentimento constante de preocupação, insônia e dificuldade em relaxar, impactando sua qualidade de vida.",
  },
  {
    icon: Compass,
    title: "Dificuldade em Decisões",
    description: "Paralisia diante de escolhas importantes, medo de errar e sensação de não estar no controle da própria vida.",
  },
  {
    icon: Brain,
    title: "Sentimento de Estagnação",
    description: "Percepção de que a vida não avança, repetição de padrões nocivos e falta de propósito claro.",
  },
];

export default function PainPoints() {
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
            Você se identifica com algum desses sentimentos?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Muitas vezes, o sofrimento é um sinal de que algo em nossa psique pede atenção e transformação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <pain.icon className="text-secondary w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                {pain.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}