"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

const galleryImages = [
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1623868661726-5bbf227181c2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549643444-245f7783fdac?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486262715619-679ce583efb8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop",
];

export function WorkshopGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev! + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      <section className="py-24 w-full bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-4">
          <SectionTitle title="Nuestras Instalaciones" subtitle="Conocé nuestro hábitat" />
        </div>
        
        {/* Striped full-width gallery */}
        <div className="flex w-full overflow-x-auto no-scrollbar snap-x snap-mandatory">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative min-w-[300px] md:min-w-[400px] h-[300px] md:h-[400px] snap-center group cursor-pointer border-r border-[#1a1a1a]"
              onClick={() => setSelectedIdx(i)}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={src} alt="Workshop Magic Center" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white text-black font-mono font-bold tracking-widest uppercase text-xs px-6 py-3 flex items-center gap-2">
                  <Maximize2 size={16} /> Ver Foto
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-white hover:text-[var(--accent)] transition-colors p-2"
            >
              <X size={32} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-6 text-white hover:text-[var(--accent)] transition-colors p-4"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-6 text-white hover:text-[var(--accent)] transition-colors p-4"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedIdx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-[90%] h-[80vh] max-w-6xl max-h-[800px]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedIdx]}
                alt={`Magic Center Imagen ${selectedIdx + 1}`}
                fill
                className="object-contain"
                priority
              />
              {/* Counter string */}
              <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-[var(--text-muted)] font-mono text-sm tracking-widest uppercase">
                {selectedIdx + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
