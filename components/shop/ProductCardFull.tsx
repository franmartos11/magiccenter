"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    brand: string;
    title: string;
    price: number;
    image: string;
    badge?: string;
  };
}

export function ProductCardFull({ product }: ProductCardProps) {
  return (
    <Link href={`/tienda/${product.slug}`} className="block group">
      <div className="relative flex flex-col items-center bg-[var(--bg-surface)] p-6 h-[480px] border border-[var(--border-color)] overflow-hidden transition-all duration-300">
        
        {/* Hover Border Effect (Top and Right) */}
        <div className="absolute top-0 left-0 w-0 h-1 bg-[var(--accent)] group-hover:w-full transition-all duration-500 z-20" />
        <div className="absolute top-0 right-0 w-1 h-0 bg-[var(--accent)] group-hover:h-full transition-all duration-500 delay-100 z-20" />
        <div className="absolute bottom-0 right-0 w-0 h-1 bg-[var(--accent)] group-hover:w-full transition-all duration-500 delay-200 z-20" />
        <div className="absolute bottom-0 left-0 w-1 h-0 bg-[var(--accent)] group-hover:h-full transition-all duration-500 delay-300 z-20" />

        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-[var(--accent)] text-white font-mono shadow-[0_0_15px_rgba(229,0,0,0.4)]">
            {product.badge}
          </div>
        )}

        <button className="absolute top-4 right-4 z-10 p-2 text-[var(--text-muted)] hover:text-white transition-colors group/heart">
          <Heart size={20} className="group-hover/heart:fill-white" />
        </button>

        <div className="text-center w-full mb-2 relative z-10">
          <p className="font-mono text-[var(--accent)] text-[10px] tracking-widest uppercase mb-1">
            {product.brand}
          </p>
        </div>
        
        <div className="relative w-full h-[220px] mb-6 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110">
          <div className="w-[180px] h-[180px] rounded-full bg-[var(--bg-base)]/80 absolute bottom-0 blur-xl mix-blend-lighten" />
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] mix-blend-screen"
          />
        </div>

        <div className="flex flex-col flex-grow items-center justify-end text-center w-full z-10">
          <h4 className="font-heading text-xl font-bold uppercase tracking-wide leading-tight mb-2">
            {product.title}
          </h4>
          
          <div className="mt-auto w-full border-t border-[var(--border-color)] group-hover:border-transparent transition-colors duration-300 relative overflow-hidden">
             
             {/* Slide down current price text on hover */}
             <div className="py-4 font-mono font-bold text-lg text-white transform transition-transform duration-300 group-hover:translate-y-[100%] opacity-100 group-hover:opacity-0 absolute inset-0 flex items-center justify-center">
                ARS {product.price.toLocaleString("es-AR")}
             </div>

             {/* Slide up ADD TO CART button on hover */}
             <button className="w-full py-4 text-[var(--accent)] hover:text-white uppercase font-heading font-black tracking-widest text-sm flex items-center justify-center gap-2 transform transition-all duration-300 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-[var(--bg-base)] hover:bg-[var(--accent)]">
               <ShoppingCart size={16} />
               Agregar al Carrito
             </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
