"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const headline = "SOMOS MAGIC CENTER.".split("");
  const subheadline = "DONDE TU AUTO RENACE".split("");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--bg-base)]">
      {/* Background with Ken Burns effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-[var(--bg-base)]" />
        <Image
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2670&auto=format&fit=crop"
          alt="Premium Detailing Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center max-w-5xl px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="uppercase tracking-widest text-[var(--accent)] text-sm md:text-md font-bold mb-6 border border-[var(--accent)] px-4 py-1.5 rounded-full"
        >
          Especialistas en Detailing
        </motion.div>

        <h1 className="flex flex-wrap justify-center font-heading text-6xl md:text-8xl lg:text-[130px] font-black uppercase tracking-tighter leading-none mb-2 text-white">
          {headline.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.04,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <h2 className="flex flex-wrap justify-center text-xl md:text-3xl text-[var(--text-muted)] font-medium mb-12">
          {subheadline.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.8 + index * 0.02,
                ease: "easeOut",
              }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link href="/servicios" className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-8 py-4 uppercase font-bold tracking-wider transition-colors duration-300">
            Ver Servicios
          </Link>
          <Link href="/tienda" className="bg-transparent border border-[var(--border-color)] hover:bg-white/5 text-white px-8 py-4 uppercase font-bold tracking-wider transition-colors duration-300">
            Ir a la Tienda
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-[var(--text-dim)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="uppercase text-xs tracking-widest font-mono">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={20} className="text-[var(--accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
