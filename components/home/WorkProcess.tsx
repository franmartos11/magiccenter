"use client";

import { motion } from "framer-motion";
import { Search, ClipboardList, Settings, CheckCircle } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

const steps = [
  {
    id: 1,
    title: "Recepción & Diagnóstico",
    desc: "Evaluamos el estado de tu vehículo en detalle.",
    icon: Search,
  },
  {
    id: 2,
    title: "Plan de Trabajo",
    desc: "Definimos los productos y técnicas ideales.",
    icon: ClipboardList,
  },
  {
    id: 3,
    title: "Ejecución Profesional",
    desc: "Manos a la obra con máxima precisión técnica.",
    icon: Settings,
  },
  {
    id: 4,
    title: "Entrega & Control",
    desc: "Revisión final exhaustiva antes de la entrega.",
    icon: CheckCircle,
  },
];

export function WorkProcess() {
  return (
    <section className="py-24 px-4 w-full bg-[var(--bg-card)] border-y border-[var(--border-color)]">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle 
          title="Así Trabajamos" 
          subtitle="Proceso Estandarizado"
          className="text-center flex flex-col items-center" 
        />
        
        {/* We override SectionTitle layout for center alignment in CSS using tailwind or just relying on its internal flex layout (it's flex-row by default, but it will center ok or we might need to adjust SectionTitle. Actually I'll let it be default left aligned like the rest) */}
        
        <div className="relative mt-20">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-[#222]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="h-full bg-[var(--accent)] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 text-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-[90px] h-[90px] rounded-full bg-[var(--bg-base)] border-[2px] border-[#333] flex items-center justify-center mb-6 relative transition-colors duration-500 group-hover:border-[var(--accent)] shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <Icon className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-500 w-8 h-8" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--accent)] text-white font-mono text-sm font-bold flex items-center justify-center border-4 border-[var(--bg-base)]">
                      {step.id}
                    </div>
                  </div>
                  
                  <h4 className="font-heading text-2xl uppercase tracking-wider font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[var(--text-muted)] group-hover:text-white transition-all duration-300 text-sm md:text-base max-w-[240px] mx-auto leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
