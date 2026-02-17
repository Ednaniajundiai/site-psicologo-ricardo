"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { BASE_PATH } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-background to-white"
    >
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">
            Psicologia Analítica & Desenvolvimento Humano
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
            Dê o próximo passo para uma vida mais <span className="italic">consciente</span> e equilibrada.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
            Psicoterapia junguiana focada em autoconhecimento e saúde mental para homens e mulheres que buscam ressignificar sua jornada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#contato"
              className="bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Agendar Consulta <ArrowRight size={20} />
            </Link>
            <Link
              href="#sobre"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors text-center"
            >
              Conheça o Profissional
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full hidden md:block"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={`${BASE_PATH}/Ricardo_Montanari.png`}
              alt="Dr. Ricardo Montanari em seu consultório"
              fill
              className="object-cover"
              priority
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl z-[-1]"></div>
            <div className="absolute top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl z-[-1]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}