"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const milestones = [
  { year: "2015", text: "Apertura del primer taller especializado." },
  { year: "2018", text: "Incorporación de línea oficial de Cerámicos." },
  { year: "2021", text: "Expansión a mecánica técnica de alta gama." },
  { year: "2024", text: "Lanzamiento de tienda propia online Magic Center." },
];

export function OurStory() {
  return (
    <section className="py-24 px-4 w-full bg-[var(--bg-base)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Left Col - Timeline */}
        <div className="lg:col-span-6 relative">
          <RevealOnScroll className="relative pl-8 md:pl-16">
            {/* Main vertical line */}
            <div className="absolute left-[3px] md:left-[3px] top-4 bottom-4 w-px bg-[var(--border-color)]">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full bg-[var(--accent)] origin-top"
              />
            </div>

            <div className="flex flex-col gap-12 sm:gap-16">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--bg-base)] border border-[var(--border-color)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-colors shadow-[0_0_10px_rgba(229,0,0,0)] group-hover:shadow-[0_0_15px_rgba(229,0,0,0.6)] z-10" />
                  
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                  >
                    <h3 className="font-mono text-3xl md:text-5xl font-bold text-white tracking-widest uppercase mb-2">
                       {m.year}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm md:text-base">{m.text}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Col - Image */}
        <div className="lg:col-span-6 relative flex justify-end">
           <RevealOnScroll delay={0.4} className="relative w-full max-w-[600px] h-[600px] right-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent opacity-80 z-10 pointer-events-none" />
             <div className="absolute top-8 -right-8 w-full h-full border border-[var(--accent)] z-0 hidden lg:block" />
             <Image
                src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1200&auto=format&fit=crop"
                alt="Historia Magic Center"
                fill
                className="object-cover z-10 grayscale hover:grayscale-0 transition-all duration-700"
             />
           </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
