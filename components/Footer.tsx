import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="font-serif text-2xl font-bold mb-6">Dr. Ricardo Montanari</h3>
          <p className="text-gray-300 mb-4 max-w-sm">
            Psicologia Analítica (Junguiana) focada no desenvolvimento humano e saúde mental integral.
          </p>
          <p className="text-secondary font-medium">CRP: 06/88234-X</p>
        </div>

        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Contato & Localização</h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
              <span>
                Atendimento Online (Global)<br />
                Presencial: Av. 9 de Julho, 1200 - Jundiaí/SP
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>contato@ricardomontanari.com.br</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Links Úteis</h4>
          <ul className="space-y-3 text-gray-300 mb-8">
            <li><Link href="#sobre" className="hover:text-secondary transition-colors">Sobre Mim</Link></li>
            <li><Link href="#metodologia" className="hover:text-secondary transition-colors">Metodologia</Link></li>
            <li><Link href="#faq" className="hover:text-secondary transition-colors">Dúvidas Frequentes</Link></li>
            <li><Link href="#" className="hover:text-secondary transition-colors">Política de Privacidade</Link></li>
          </ul>
          <div className="flex gap-4">
            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Dr. Ricardo Montanari. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}