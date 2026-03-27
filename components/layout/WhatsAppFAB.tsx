"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function WhatsAppFAB() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-[100] group"
    >
      <Link
        href="https://wa.me/5491112345678?text=Hola%20Magic%20Center,%20quisiera%20asesoramiento"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} className="relative z-10" />
        
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full w-full h-full border-2 border-[#25D366] opacity-0 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] z-0" />
        
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-4 bg-[var(--bg-surface)] border border-[var(--border-color)] px-4 py-2 rounded-lg text-sm font-medium opacity-0 transform translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
          Consultanos ahora
        </div>
      </Link>
    </motion.div>
  );
}
