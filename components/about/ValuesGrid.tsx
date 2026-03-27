"use client";

import { motion } from "framer-motion";
import { Wrench, Diamond, Handshake, Trophy } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

const values = [
  { icon: Wrench, title: "PRECISIÓN", desc: "Sin atajos. Cada tornillo y cada capa de clear coat importan." },
  { icon: Diamond, title: "CALIDAD", desc: "Utilizamos las mejores marcas de insumos del mundo. Literalmente." },
  { icon: Handshake, title: "CONFIANZA", desc: "Transparencia absoluta. Lo que diagnosticamos es lo que es." },
  { icon: Trophy, title: "RESULTADOS", desc: "El vehículo habla por nosotros cuando sale del taller." },
];

export function ValuesGrid() {
  return (
    <section className="py-24 px-4 w-full bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle title="Nuestra Misión" subtitle="Por qué existimos" className="mb-20" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
          {values.map((v, i) => {
             const Icon = v.icon;
             return (
               <motion.div
                 key={v.title}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true, margin: "-10%" }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="bg-[var(--bg-card)] p-12 md:p-16 relative overflow-hidden group hover:bg-[#111] transition-colors duration-500"
               >
                 <Icon className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.02] transform -rotate-12 group-hover:scale-110 group-hover:text-[var(--accent)]/[0.05] transition-all duration-700 pointer-events-none" />
                 
                 <div className="relative z-10">
                   <Icon className="w-12 h-12 text-[var(--accent)] mb-8" />
                   <h3 className="font-heading text-4xl uppercase tracking-widest font-black text-white mb-4">
                     {v.title}
                   </h3>
                   <p className="text-[var(--text-muted)] text-lg max-w-[300px]">
                     {v.desc}
                   </p>
                 </div>
               </motion.div>
             )
          })}
        </div>
      </div>
    </section>
  );
}
