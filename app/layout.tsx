import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BASE_PATH } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Ricardo Montanari | Psicólogo Clínico - Junguiano",
  description: "Psicologia Analítica (Junguiana) focada em ansiedade, transição de carreira e desenvolvimento pessoal. Atendimento online e presencial em Jundiaí/SP.",
  keywords: ["psicólogo", "jundiaí", "terapia online", "ansiedade", "junguiano", "ricardo montanari", "psicologia analítica"],
  authors: [{ name: "Ricardo Montanari" }],
  creator: "Ednan",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ednaniajundiai.github.io/site-psicologo-ricardo/",
    title: "Ricardo Montanari | Psicólogo Clínico",
    description: "Psicologia Analítica focada em desenvolvimento pessoal e saúde mental.",
    siteName: "Ricardo Montanari Psicologia",
    images: [
      {
        url: `${BASE_PATH}/Ricardo_Montanari_perfil.png`, // Ajuste conforme a imagem principal
        width: 800,
        height: 600,
        alt: "Psicólogo Ricardo Montanari",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#F9FAFB] text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
