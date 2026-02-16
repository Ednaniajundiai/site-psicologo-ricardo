"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Como funciona a terapia online?",
    answer: "A terapia online acontece por videochamada (Google Meet ou Zoom), com a mesma duração e sigilo do atendimento presencial. É ideal para quem busca flexibilidade ou mora fora de Jundiaí.",
  },
  {
    question: "Qual a duração das sessões?",
    answer: "As sessões têm duração de 50 minutos e ocorrem semanalmente, garantindo um acompanhamento contínuo e profundo do processo terapêutico.",
  },
  {
    question: "Aceita convênios médicos?",
    answer: "O atendimento é particular, mas forneço recibo para reembolso junto ao seu convênio, caso seu plano ofereça essa modalidade.",
  },
  {
    question: "Qual o valor da consulta?",
    answer: "Para informações sobre valores e disponibilidade de horários, entre em contato diretamente pelo WhatsApp ou formulário de agendamento.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Dúvidas Frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-primary text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-secondary" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}