"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section className="relative py-32 px-4 w-full bg-[var(--accent)] overflow-hidden">
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] bg-repeat rotate-[-15deg]" />
      </div>

      <div className="max-w-[1000px] mx-auto relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[var(--bg-base)] font-mono text-sm tracking-[0.3em] font-bold uppercase mb-6 block">
            El verdadero Detailing
          </span>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-10 text-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            ¿LISTO PARA EL CAMBIO QUE MERECE TU AUTO?
          </h2>
          
          <Link
            href="/contacto"
            className="group relative inline-flex items-center gap-4 bg-[var(--bg-base)] text-white px-10 py-5 uppercase font-heading font-black tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]"
          >
            {/* Hover fill sweep effect */}
            <span className="absolute inset-0 w-full h-full bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
            
            <span className="relative z-10 group-hover:text-[var(--bg-base)] transition-colors duration-300">
              Pedir Turno Ahora
            </span>
            <ArrowRight size={20} className="relative z-10 group-hover:text-[var(--bg-base)] transition-colors duration-300 transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
