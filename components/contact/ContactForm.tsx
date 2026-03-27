"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="bg-[var(--bg-surface)] p-8 border border-[var(--border-color)] relative overflow-hidden">
      <h3 className="font-heading text-3xl font-black uppercase tracking-widest text-white mb-2">Envianos un mensaje</h3>
      <p className="text-[var(--text-muted)] text-sm mb-8">Respondemos en menos de 24 horas hábiles.</p>
      
      {status === "success" && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="absolute inset-0 z-20 bg-[var(--bg-surface)] flex flex-col items-center justify-center p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
          >
            <CheckCircle size={64} className="text-[#25D366] mb-6" />
          </motion.div>
          <h4 className="font-heading text-4xl uppercase font-black text-white mb-2 tracking-widest">¡Excelente!</h4>
          <p className="text-[var(--text-muted)] max-w-[300px]">Tu consulta fue enviada con éxito. Nos pondremos en contacto pronto.</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-mono text-[var(--accent)] font-bold">Nombre Completo *</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-[#111] border-b border-[var(--border-color)] px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors font-mono"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-mono text-[var(--accent)] font-bold">Teléfono / WhatsApp *</label>
            <input 
              type="tel" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="bg-[#111] border-b border-[var(--border-color)] px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors font-mono"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="flex flex-col gap-2">
             <label className="text-[10px] uppercase tracking-widest font-mono text-[var(--accent)] font-bold">Email</label>
             <input 
               type="email" 
               value={formData.email}
               onChange={(e) => setFormData({...formData, email: e.target.value})}
               className="bg-[#111] border-b border-[var(--border-color)] px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors font-mono"
             />
           </div>
           
           <div className="flex flex-col gap-2">
             <label className="text-[10px] uppercase tracking-widest font-mono text-[var(--accent)] font-bold">Servicio de Interés</label>
             <select 
               value={formData.service}
               onChange={(e) => setFormData({...formData, service: e.target.value})}
               className="bg-[#111] border-b border-[var(--border-color)] px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors font-mono text-white/50"
             >
               <option value="" disabled>Seleccionar...</option>
               <option className="text-white" value="detailing">Detailing / Pulido</option>
               <option className="text-white" value="ceramic">Tratamiento Cerámico</option>
               <option className="text-white" value="ppf">Film PPF</option>
               <option className="text-white" value="mechanic">Mecánica Integral</option>
               <option className="text-white" value="shop">Consulta de Tienda</option>
             </select>
           </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest font-mono text-[var(--accent)] font-bold">Tu Mensaje *</label>
          <textarea 
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="bg-[#111] border border-[var(--border-color)] p-4 outline-none focus:border-[var(--accent)] transition-colors font-mono resize-none"
          />
        </div>

        <button 
          type="submit" 
          disabled={status === "loading"}
          className="mt-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-heading text-xl uppercase tracking-widest font-black py-4 flex items-center justify-center gap-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
             <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>Enviar Consulta <Send size={18} /></>
          )}
        </button>
      </form>
    </div>
  );
}
