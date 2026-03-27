"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { productsData } from "@/data/products";

// 3D Tilt Card Wrapper
function ProductCard({ product }: { product: typeof productsData[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      className="group outline-none"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex flex-col items-center bg-[var(--bg-surface)] p-6 h-[480px] border border-[var(--border-color)] transition-colors duration-500 hover:border-[var(--accent)]"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badges */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-[var(--accent)] text-white font-mono">
            {product.badge}
          </div>
        )}

        <div className="text-center w-full mb-2">
          <p className="font-mono text-[var(--accent)] text-[10px] tracking-widest uppercase mb-1">
            {product.brand}
          </p>
        </div>
        
        {/* Image Container */}
        <motion.div 
          style={{ transform: "translateZ(50px)" }}
          className="relative w-full h-[220px] mb-6 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        >
          <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-b from-transparent to-[var(--bg-base)]/50 absolute bottom-0 blur-xl" />
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
          />
        </motion.div>

        {/* Info Container */}
        <motion.div 
          style={{ transform: "translateZ(30px)" }}
          className="flex flex-col flex-grow items-center justify-end text-center w-full z-10"
        >
          <h4 className="font-heading text-xl font-bold uppercase tracking-wide leading-tight mb-2">
            {product.title}
          </h4>
          <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-2">
            {product.subtitle}
          </p>
          
          <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-[var(--border-color)] group-hover:border-[var(--accent)]/30 transition-colors duration-500">
            <span className="font-mono font-bold text-lg text-white">
              ARS {product.price.toLocaleString("es-AR")}
            </span>
            <button className="text-[var(--accent)] hover:text-white transition-colors p-2 relative overflow-hidden flex items-center justify-center">
              <ShoppingCart size={20} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function FeaturedProducts() {
  return (
    <section className="py-24 px-4 w-full bg-[var(--bg-base)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle 
            title="Inventario Exclusivo" 
            subtitle="Resultados Profesionales"
            className="mb-0"
          />
          <Link href="/tienda" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] font-mono text-sm tracking-widest uppercase transition-colors whitespace-nowrap">
            Explorar Tienda completa <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
