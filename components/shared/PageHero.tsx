"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  badge?: string;
  image: string;
}

export function PageHero({ title, badge, image }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-[var(--bg-base)]">
      {/* Background with Ken Burns effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#080808]/90 via-[#080808]/70 to-[var(--bg-base)]" />
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center max-w-5xl px-4 mt-20">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="uppercase tracking-widest text-[var(--accent)] text-xs md:text-sm font-bold mb-6 border border-[var(--accent)] px-4 py-1.5 rounded-full"
          >
            {badge}
          </motion.div>
        )}

        <h1 className="flex flex-wrap justify-center font-heading text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none text-white text-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-[0.2em] whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + (wordIndex * 0.1) + (charIndex * 0.03),
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
