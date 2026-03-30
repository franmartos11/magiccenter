"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

interface StatItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

function StatItem({ end, suffix = "", prefix = "", label, duration = 2 }: StatItemProps) {
  const [count, setCount] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(Math.round(value).toLocaleString("es-AR"));
        },
      });
      return controls.stop;
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-8 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-heading text-5xl md:text-6xl font-black text-[var(--accent)] mb-2"
      >
        {prefix}{count}{suffix}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-[var(--text-muted)] group-hover:text-white transition-colors uppercase text-xs sm:text-sm md:text-base tracking-[0.1em] font-medium"
      >
        {label}
      </motion.div>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="w-full bg-[#050505] border-y border-[var(--border-color)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border-color)] border-l border-r border-[var(--border-color)]">
        <StatItem end={10} prefix="+" label="Años de Experiencia" />
        <StatItem end={2000} prefix="+" label="Autos Tratados" />
        <StatItem end={150} prefix="+" label="Productos en Stock" />
        <StatItem end={100} suffix="%" label="Clientes Satisfechos" />
      </div>
    </section>
  );
}
