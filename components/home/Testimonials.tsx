"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "../ui/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Matias G.",
    role: "Dueño de Porsche 911",
    text: "Increíble la dedicación. El cerámico que le aplicaron dejó el auto mejor que 0km. El nivel de detalle es de otro planeta.",
    service: "Tratamiento Cerámico",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Alejandro M.",
    role: "Cliente Frecuente",
    text: "Hace años atiendo todas mis chatas acá. Mecánica de confianza y siempre cumplen con los tiempos. Son unos profesionales.",
    service: "Mecánica Integral",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sofía R.",
    role: "Primera visita",
    text: "Dejé mi auto para una limpieza de interior profunda porque estaba arruinado. Me lo devolvieron con olor a nuevo. Excelente atención.",
    service: "Limpieza Interior",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 w-full bg-[var(--bg-surface)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle 
          title="Lo que dicen" 
          subtitle="Resultados Comprobados"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-[var(--bg-card)] p-8 border border-[var(--border-color)] relative group hover:border-[var(--accent)] transition-colors duration-500"
            >
              {/* Giant quote mark behind */}
              <div className="absolute -top-6 -left-2 text-[120px] font-heading font-black text-[var(--bg-base)] group-hover:text-[var(--accent)]/10 transition-colors duration-500 leading-none select-none z-0">
                &ldquo;
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6 text-[var(--accent)]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-white/90 text-sm md:text-base italic mb-8 min-h-[80px]">
                  &quot;{t.text}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[var(--border-color)]">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold tracking-wider uppercase">
                      {t.name}
                    </h5>
                    <p className="text-[var(--text-muted)] text-xs tracking-widest uppercase">
                      {t.service}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
