import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Ricardo Montanari | Psicólogo Clínico - Junguiano",
  description: "Psicologia Analítica (Junguiana) focada em ansiedade, transição de carreira e desenvolvimento pessoal. Atendimento online e presencial em Jundiaí/SP.",
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