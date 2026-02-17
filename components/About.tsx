"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { BASE_PATH } from "@/lib/utils";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={`${BASE_PATH}/Ricardo_Montanari_perfil.png`}
            alt="Foto de perfil do Ricardo Montanari"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="font-serif text-2xl">Ricardo Montanari</p>
            <p className="text-sm opacity-90">CRP: 06/88234-X</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Uma abordagem humana e profunda
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Sou psicólogo clínico formado pela Universidade de São Paulo (USP) com mais de 10 anos de experiência em atendimento clínico. Minha trajetória profissional sempre foi guiada pela busca de compreender a complexidade da alma humana.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Especializei-me em Psicologia Analítica (Junguiana) por acreditar que o sintoma não é apenas um problema a ser eliminado, mas um símbolo que aponta para uma necessidade de transformação.
          </p>
          <ul className="space-y-3 pt-4">
            {[
              "Especialista em Ansiedade e Depressão",
              "Foco em Masculinidade Contemporânea",
              "Transição de Carreira e Propósito",
              "Atendimento Online e Presencial",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}