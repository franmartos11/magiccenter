"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { servicesData } from "@/data/services";

export function FeaturedServices() {
  return (
    <section className="py-24 px-4 md:px-8 w-full bg-[var(--bg-base)]">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle 
          title="Nuestros Servicios" 
          subtitle="Excelencia Técnica al Detalle"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative h-[500px] overflow-hidden bg-[var(--bg-card)] cursor-pointer"
            >
              {/* Background Image with Parallax & Hover Effect */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-40"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Red Overlay on hover */}
                <div className="absolute inset-0 bg-red-900/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-[var(--accent)] group-hover:opacity-60" />
              </div>

              {/* Content Box */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                {/* Tech Number Badge */}
                <div className="absolute top-8 right-8 font-mono text-2xl font-bold text-white/20 group-hover:text-[var(--accent)] transition-colors duration-500">
                  {service.number}
                </div>

                <div className="transform translate-y-8 transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <h3 className="font-heading text-4xl font-bold uppercase mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] group-hover:text-white/80 transition-colors duration-500 mb-6 font-medium max-w-[90%]">
                    {service.shortDesc}
                  </p>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[var(--accent)] font-bold tracking-widest uppercase text-sm opacity-0 transform -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    Ver más <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Bottom Border Line - expands on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--accent)] w-0 transition-all duration-500 ease-in-out group-hover:w-full z-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
