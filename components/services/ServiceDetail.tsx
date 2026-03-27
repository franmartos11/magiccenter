"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface ServiceDetailProps {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  checklist: string[];
  price?: string;
  badge?: string;
  reverse?: boolean;
}

export function ServiceDetail({
  id,
  number,
  title,
  description,
  image,
  checklist,
  price,
  badge,
  reverse = false,
}: ServiceDetailProps) {
  return (
    <section id={id} className="py-24 px-4 w-full bg-[var(--bg-base)] odd:bg-[var(--bg-card)] overflow-hidden border-b border-[var(--border-color)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Image Column */}
        <RevealOnScroll
          className={`relative h-[400px] md:h-[600px] w-full overflow-hidden border border-[var(--border-color)] group ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {badge && (
            <div className="absolute top-6 right-6 z-20 px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-[var(--accent)] text-white font-mono shadow-[0_0_20px_rgba(229,0,0,0.5)]">
              {badge}
            </div>
          )}
          <motion.div
            className="w-full h-[120%] absolute -top-[10%]"
            initial={{ y: "-10%" }}
            whileInView={{ y: "10%" }}
            viewport={{ margin: "-10%" }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          >
            {/* Simple CSS parallax fallback in case JS scroll fails or is too complex for basic setup. I will use framer-motion useScroll to make it proper parallax shortly if needed, but linear movement provides a nice constant slow-pan. */}
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent opacity-80" />
          
          {/* Subtle line frame inside image */}
          <div className="absolute inset-4 border border-[var(--border-color)]/30 z-10 pointer-events-none" />
        </RevealOnScroll>

        {/* Content Column */}
        <div className={`flex flex-col ${reverse ? "lg:order-1" : "lg:order-2"}`}>
          <RevealOnScroll delay={0.1}>
            <div className="font-mono text-[100px] leading-none font-black text-[var(--border-color)] select-none opacity-50 mb-[-40px]">
              {number}
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-black uppercase text-white mb-6 tracking-tighter shadow-black drop-shadow-lg">
              {title}
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-10 leading-relaxed font-medium">
              {description}
            </p>

            <ul className="flex flex-col gap-4 mb-12">
              {checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="text-[var(--accent)] mt-1">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            {price && (
              <div className="mb-10 p-6 border border-[var(--border-color)] bg-[var(--bg-surface)] backdrop-blur-sm self-start">
                <span className="text-[var(--text-dim)] uppercase tracking-widest text-xs font-mono block mb-2">Precio base desde</span>
                <span className="font-mono text-3xl font-bold text-white tracking-tight">{price}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contacto"
                className="bg-[var(--accent)] text-white text-center px-8 py-4 uppercase font-bold tracking-widest hover:bg-[var(--accent-hover)] transition-colors"
              >
                Pedir Turno
              </Link>
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--border-color)] text-center text-white px-8 py-4 uppercase font-bold tracking-widest hover:bg-white/5 transition-colors"
              >
                Consultar
              </a>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
