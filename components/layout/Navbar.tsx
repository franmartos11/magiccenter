"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Tienda Detailing", path: "/tienda" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 border-b border-[var(--border-color)] ${
          isScrolled
            ? "py-4 bg-[#080808]/90 backdrop-blur-md"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-heading font-black tracking-widest uppercase italic transform skew-x-[-10deg]">
              Magic<span className="text-[var(--accent)]">Center</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative font-heading tracking-widest uppercase text-sm font-bold group ${
                  pathname === link.path ? "text-[var(--accent)]" : "text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 w-full h-[2px] bg-[var(--accent)] transform origin-left transition-transform duration-300 ${
                  pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
          </nav>

          {/* Icons Context & Mobile trigger */}
          <div className="flex items-center gap-5">
            <button className="text-[var(--text-muted)] hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <button className="text-[var(--text-muted)] hover:text-white transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[var(--accent)] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-mono">0</span>
            </button>
            <button className="text-[var(--text-muted)] hover:text-white transition-colors hidden md:block">
              <User size={20} />
            </button>
            
            <button className="hidden md:block bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 py-2 uppercase font-heading font-bold tracking-wider text-sm transition-colors duration-300">
              Reservar Turno
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white ml-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#080808] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
              <span className="text-2xl font-heading font-black tracking-widest uppercase italic">
                Magic<span className="text-[var(--accent)]">Center</span>
              </span>
              <button
                className="text-white p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-heading tracking-widest uppercase text-3xl font-bold ${
                    pathname === link.path ? "text-[var(--accent)]" : "text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="mt-8 flex gap-6">
                 <button className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-8 py-3 uppercase font-heading font-bold tracking-wider transition-colors duration-300 w-64">
                   Reservar Turno
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
