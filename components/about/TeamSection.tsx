"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link2 } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

const team = [
  { name: "Federico", role: "CEO & Master Detailer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
  { name: "Martín", role: "Jefe Taller Mecánico", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" },
  { name: "Lucas", role: "Especialista PPF", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop" },
  { name: "Andrés", role: "Técnico Lavadero", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" },
];

export function TeamSection() {
  return (
    <section className="py-24 px-4 w-full bg-[#050505] overflow-hidden border-y border-[var(--border-color)]">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle title="Nuestro Equipo" subtitle="Profesionales de Primera" className="text-center" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16">
           {team.map((member, i) => (
             <motion.div
               key={member.name}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.6, delay: i * 0.15 }}
               className="group relative cursor-pointer"
             >
               <div className="relative w-full h-[350px] mb-6 overflow-hidden border border-[var(--border-color)]">
                 <Image src={member.img} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105" />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent opacity-80" />
                 
                 <div className="absolute bottom-4 right-4 bg-white text-black w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                   <Link2 size={18} />
                 </div>
                 
                 <div className="absolute bottom-0 left-0 h-1 bg-[var(--accent)] w-0 group-hover:w-full transition-all duration-500 ease-out z-20" />
               </div>
               
               <h4 className="font-heading text-3xl font-black uppercase tracking-widest text-white mb-2">{member.name}</h4>
               <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-bold">{member.role}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
