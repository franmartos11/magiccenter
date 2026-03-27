"use client";

import { useEffect, useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function ContactoPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Basic schedule check: Mon-Fri 9-18, Sat 9-14
    const d = new Date();
    const day = d.getDay(); // 0: Sun, 1: Mon, ...
    const hour = d.getHours();
    
    if (day >= 1 && day <= 5) {
      setIsOpen(hour >= 9 && hour < 18);
    } else if (day === 6) {
      setIsOpen(hour >= 9 && hour < 14);
    } else {
      setIsOpen(false);
    }
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-[var(--bg-base)] text-white w-full overflow-x-hidden pt-0">
      <PageHero 
        title="Contacto"
        badge="Estamos Cerca"
        image="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-24 px-4 w-full bg-[var(--bg-base)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left - Contact Form */}
          <div className="lg:col-span-7 w-full order-2 lg:order-1">
             <RevealOnScroll>
                <ContactForm />
             </RevealOnScroll>
          </div>

          {/* Right - Info */}
          <div className="lg:col-span-5 flex flex-col pt-8 order-1 lg:order-2">
             <RevealOnScroll delay={0.2}>
                <h2 className="font-heading text-6xl font-black uppercase text-white mb-2 tracking-tighter">
                  Hablemos
                </h2>
                <div className="w-16 h-1 bg-[var(--accent)] mb-12" />

                <div className="flex flex-col gap-10">
                   {/* Dirección */}
                   <div className="flex items-start gap-4">
                      <div className="mt-1 text-[var(--accent)]"><MapPin size={28} /></div>
                      <div>
                         <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold mb-2">Visítanos</h4>
                         <p className="text-white text-lg">Avenida del Libertador 4500<br/><span className="text-[var(--text-muted)] text-base">Palermo, CABA, Argentina</span></p>
                      </div>
                   </div>
                   
                   {/* Teléfono y WhatsApp */}
                   <div className="flex items-start gap-4">
                      <div className="mt-1 text-[var(--accent)]"><Phone size={28} /></div>
                      <div>
                         <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold mb-2">Llamadas y WhatsApp</h4>
                         <a href="tel:+5491112345678" className="text-white text-lg hover:text-[var(--accent)] transition-colors inline-block mb-4">+54 9 11 1234-5678</a>
                         <div>
                            <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-2 uppercase font-mono tracking-widest text-xs font-bold hover:bg-[#1EBE5A] transition-colors shadow-lg">
                              Chat con Asesor
                            </a>
                         </div>
                      </div>
                   </div>

                   {/* Email */}
                   <div className="flex items-start gap-4">
                      <div className="mt-1 text-[var(--accent)]"><Mail size={28} /></div>
                      <div>
                         <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold mb-2">Correo Comercial</h4>
                         <a href="mailto:info@magicenter.com.ar" className="text-white text-lg hover:text-[var(--accent)] transition-colors inline-block">info@magicenter.com.ar</a>
                      </div>
                   </div>
                   
                   <div className="w-full h-px bg-[var(--border-color)] my-4" />
                   
                   {/* Horarios */}
                   <div>
                       <div className="flex items-center justify-between mb-6">
                         <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold">Horarios de Atención</h4>
                         <div className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 ${isOpen ? "text-[#25D366] border border-[#25D366]/30 bg-[#25D366]/10" : "text-[var(--accent)] border border-[var(--accent)]/30 bg-[var(--accent)]/10"}`}>
                            <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-[#25D366]" : "bg-[var(--accent)]"}`} />
                            {isOpen ? "Abierto" : "Cerrado"}
                         </div>
                       </div>
                       
                       <table className="w-full text-left font-mono text-sm tracking-wide text-[var(--text-muted)]">
                          <tbody>
                             <tr className="border-b border-[var(--border-color)]">
                               <td className="py-3 text-white">Lunes a Viernes</td>
                               <td className="py-3 text-right">09:00 - 18:00</td>
                             </tr>
                             <tr className="border-b border-[var(--border-color)]">
                               <td className="py-3 text-white">Sábados</td>
                               <td className="py-3 text-right">09:00 - 14:00</td>
                             </tr>
                             <tr>
                               <td className="py-3 text-white">Domingos</td>
                               <td className="py-3 text-right text-[var(--accent)]">Cerrado</td>
                             </tr>
                          </tbody>
                       </table>
                   </div>
                </div>
             </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] border-t border-[var(--border-color)] relative">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.3934305881476!2d-58.423985584771485!3d-34.56886476316278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5a6a0eebfb3%3A0xe9f002b545f1b1fa!2sAv.%20del%20Libertador%204500%2C%20C1426%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen={false} 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
           className="w-full h-full grayscale invert-[90%] hue-rotate-180 contrast-125 opacity-80"
         />
         {/* Map overlay border */}
         <div className="absolute inset-0 pointer-events-none border-[10px] border-[var(--bg-base)] z-10" />
      </section>
    </main>
  );
}
