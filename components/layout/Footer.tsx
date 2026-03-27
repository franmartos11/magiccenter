"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] pt-24 pb-8 border-t border-[var(--border-color)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-heading font-black tracking-widest uppercase italic transform skew-x-[-10deg]">
                Magic<span className="text-[var(--accent)]">Center</span>
              </span>
            </Link>
            <p className="text-[var(--text-muted)] text-sm max-w-[280px]">
              Líderes en estética vehicular en Argentina. Precisión técnica y pasión por el automóvil.
            </p>
            <div className="flex items-center gap-4 text-white font-mono text-sm font-bold">
              <a href="#" className="hover:text-[var(--accent)] transition-colors p-2 bg-[#111] rounded-full border border-[var(--border-color)] flex items-center justify-center w-10 h-10 group">
                IG
              </a>
              <a href="#" className="hover:text-[var(--accent)] transition-colors p-2 bg-[#111] rounded-full border border-[var(--border-color)] flex items-center justify-center w-10 h-10 group">
                FB
              </a>
              <a href="#" className="hover:text-[var(--accent)] transition-colors p-2 bg-[#111] rounded-full border border-[var(--border-color)] w-10 h-10 flex items-center justify-center group">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[var(--accent)] uppercase font-bold text-xs tracking-widest mb-2">
              Navegación
            </h4>
            <Link href="/" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm uppercase tracking-wide">Inicio</Link>
            <Link href="/servicios" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm uppercase tracking-wide">Servicios</Link>
            <Link href="/tienda" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm uppercase tracking-wide">Tienda Detailing</Link>
            <Link href="/nosotros" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm uppercase tracking-wide">Nosotros</Link>
            <Link href="/contacto" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm uppercase tracking-wide">Contacto</Link>
          </div>

          {/* Nav Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[var(--accent)] uppercase font-bold text-xs tracking-widest mb-2">
              Legal en Argentina
            </h4>
            <a href="#" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm uppercase tracking-wide">Defensa del Consumidor</a>
            <a href="#" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm uppercase tracking-wide">Términos y Condiciones</a>
            <a href="#" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm uppercase tracking-wide">Políticas de Privacidad</a>
            <a href="#" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm uppercase tracking-wide">Botón de Arrepentimiento</a>
          </div>

          {/* Contact Widget */}
          <div className="flex flex-col gap-6">
            <h4 className="font-mono text-[var(--accent)] uppercase font-bold text-xs tracking-widest mb-2">
              Newsletter
            </h4>
            <p className="text-[var(--text-muted)] text-sm">
              Sumate para ofertas exclusivas en ARS.
            </p>
            <form className="relative mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="TU EMAIL" 
                className="w-full bg-[#111] border-b border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] font-mono text-white transition-colors duration-300"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 bottom-0 px-4 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors border-b border-transparent focus:outline-none"
              >
                &rarr;
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border-color)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-widest">
            &copy; {currentYear} Magic Center Argentina. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
             <span className="text-[var(--text-dim)] flex items-center gap-2 text-xs font-mono">
               <MapPin size={12} /> CABA, Buenos Aires
             </span>
             <span className="text-[var(--text-dim)] flex items-center gap-2 text-xs font-mono">
               <Phone size={12} /> +54 9 11 1234-5678
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
