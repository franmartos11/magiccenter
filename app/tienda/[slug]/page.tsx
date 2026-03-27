import { productsData } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Star, ShieldCheck, Microscope, Package, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";

interface ProductDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen bg-[var(--bg-base)]">
      {/* Short Breadcrumb Header */}
      <div className="pt-24 pb-8 px-4 border-b border-[var(--border-color)] bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto text-[var(--accent)] font-mono text-xs tracking-[0.2em] font-bold uppercase">
          Inicio / Tienda / {product.brand} / {product.title}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-4 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-[var(--border-color)]">
        
        {/* Left Col: Main Image Gallery (Mock) */}
        <div className="flex flex-col gap-4">
          <div className="w-full relative h-[600px] bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center overflow-hidden group">
            {product.badge && (
              <div className="absolute top-6 left-6 z-10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-[var(--accent)] text-white font-mono shadow-[0_0_20px_rgba(229,0,0,0.5)]">
                {product.badge}
              </div>
            )}
            {/* Soft Ambient Light Behind Product */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen" />
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={600}
              className="object-contain w-[80%] h-[80%] drop-shadow-[0_40px_40px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-110"
              priority
            />
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
             {[1,2,3,4].map((i) => (
                <div key={i} className={`aspect-square bg-[var(--bg-surface)] border ${i===1 ? "border-[var(--accent)]" : "border-[var(--border-color)]"} opacity-50 hover:opacity-100 transition-colors cursor-pointer flex items-center justify-center p-4`}>
                   <Image src={product.image} width={100} height={100} className="object-contain" alt="" />
                </div>
             ))}
          </div>
        </div>

        {/* Right Col: Info */}
        <div className="flex flex-col pt-8">
          <span className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-[0.3em] font-bold mb-4">
            {product.brand}
          </span>
          <h1 className="font-heading text-6xl lg:text-7xl font-black uppercase text-white mb-6 leading-[0.85] tracking-tight">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-8">
             <div className="flex text-[var(--accent)]">
               <Star fill="currentColor" size={16} />
               <Star fill="currentColor" size={16} />
               <Star fill="currentColor" size={16} />
               <Star fill="currentColor" size={16} />
               <Star fill="currentColor" size={16} />
             </div>
             <a href="#reviews" className="text-[var(--text-muted)] text-sm font-mono hover:text-white underline underline-offset-4">(42 Reviews)</a>
          </div>

          <p className="text-[var(--text-muted)] text-lg mb-10 leading-relaxed font-medium">
            Fórmula de última tecnología diseñada para entusiastas y profesionales. Ofrece resultados comprobados sobre cualquier superficie exterior. Desarrollado específicamente para maximizar durabilidad extrema y minimizar errores en la aplicación.
          </p>

          <div className="w-full h-px bg-[var(--border-color)] mb-8" />

          {/* Price */}
          <div className="mb-10">
            <span className="text-[var(--text-dim)] font-mono text-xs uppercase tracking-widest block mb-2">Precio unidad</span>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-4xl font-bold text-white tracking-widest">
                ARS {product.price.toLocaleString("es-AR")}
              </span>
            </div>
          </div>

          {/* Variables (Size/Volume) */}
          <div className="mb-10">
             <span className="text-[var(--text-dim)] font-mono text-xs uppercase tracking-widest block mb-4">Seleccionar Volumen</span>
             <div className="flex gap-4">
                <button className="px-6 py-2 border border-[var(--accent)] bg-[var(--accent)]/10 text-white font-mono font-bold">50 ML</button>
                <button className="px-6 py-2 border border-[var(--border-color)] text-[var(--text-muted)] hover:border-white hover:text-white font-mono transition-colors">100 ML</button>
             </div>
          </div>

          {/* Add to Cart form */}
          <div className="flex gap-4 mb-16 h-16">
             <div className="w-32 border border-[var(--border-color)] flex items-center text-white bg-[var(--bg-surface)]">
               <button className="flex-1 h-full text-[var(--text-muted)] hover:text-[var(--accent)] text-xl font-mono">-</button>
               <span className="flex-1 text-center font-mono font-bold">1</span>
               <button className="flex-1 h-full text-[var(--text-muted)] hover:text-[var(--accent)] text-xl font-mono">+</button>
             </div>
             <button className="flex-1 bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] font-heading font-black uppercase text-xl tracking-widest shadow-[0_10px_30px_rgba(229,0,0,0.3)] transition-all hover:scale-[1.02]">
                Agregar al Carrito
             </button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-6 pt-10 border-t border-[var(--border-color)]">
             <div className="flex gap-4 items-start group">
                <Microscope size={24} className="text-[var(--accent)] group-hover:scale-110 transition-transform" />
                <div>
                   <h5 className="font-mono font-bold uppercase text-xs tracking-widest text-white mb-1">Fórmula Premium</h5>
                   <p className="text-[var(--text-dim)] text-xs font-medium">Testado internacionalmente.</p>
                </div>
             </div>
             <div className="flex gap-4 items-start group">
                <ShieldCheck size={24} className="text-[var(--accent)] group-hover:scale-110 transition-transform" />
                <div>
                   <h5 className="font-mono font-bold uppercase text-xs tracking-widest text-white mb-1">Uso Profesional</h5>
                   <p className="text-[var(--text-dim)] text-xs font-medium">Aprobado para detailing.</p>
                </div>
             </div>
             <div className="flex gap-4 items-start group">
                <Package size={24} className="text-[var(--accent)] group-hover:scale-110 transition-transform" />
                <div>
                   <h5 className="font-mono font-bold uppercase text-xs tracking-widest text-white mb-1">Stock Asegurado</h5>
                   <p className="text-[var(--text-dim)] text-xs font-medium">Despacho en 24hs.</p>
                </div>
             </div>
             <div className="flex gap-4 items-start group">
                <Clock size={24} className="text-[var(--accent)] group-hover:scale-110 transition-transform" />
                <div>
                   <h5 className="font-mono font-bold uppercase text-xs tracking-widest text-white mb-1">100% Original</h5>
                   <p className="text-[var(--text-dim)] text-xs font-medium">Importador directo.</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Technical Specs & Reviews Section */}
      <section id="reviews" className="w-full bg-[#050505] py-24 px-4 border-b border-[var(--border-color)]">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
            
            {/* Dilution Guide */}
            <div>
               <h3 className="font-heading text-4xl uppercase font-bold tracking-widest mb-10 text-white flex items-center gap-4">
                 Guía Técnica
                 <span className="w-16 h-1 bg-[var(--accent)]"></span>
               </h3>
               
               <table className="w-full text-left bg-[var(--bg-surface)] border border-[var(--border-color)] mb-8">
                 <thead>
                   <tr className="border-b border-[var(--border-color)] font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
                      <th className="p-6">Uso Recomendado</th>
                      <th className="p-6">Dilución</th>
                   </tr>
                 </thead>
                 <tbody className="font-mono text-sm text-[var(--text-muted)] font-medium">
                   <tr className="border-b border-[var(--border-color)] bg-[#111]">
                     <td className="p-6">Mantenimiento Ligero</td>
                     <td className="p-6 text-white font-bold">1:400</td>
                   </tr>
                   <tr className="border-b border-[var(--border-color)] bg-[var(--bg-surface)]">
                     <td className="p-6">Corrección Media</td>
                     <td className="p-6 text-white font-bold">1:200</td>
                   </tr>
                   <tr className="bg-[#111]">
                     <td className="p-6">Foam Cannon (Espuma)</td>
                     <td className="p-6 text-white font-bold">1:10</td>
                   </tr>
                 </tbody>
               </table>
               <p className="text-[var(--text-dim)] text-xs font-mono uppercase tracking-widest leading-relaxed">
                 *Los parámetros son una guía base sugerida. Puede ajustarse dependiendo las condiciones de la laca, el nivel de contaminación y la presión hidrocinética utilizada durante el proceso.
               </p>
            </div>

            {/* Expert Reviews */}
            <div>
               <h3 className="font-heading text-4xl uppercase font-bold tracking-widest mb-10 text-white flex items-center gap-4">
                 Reseñas
                 <span className="w-16 h-1 bg-[var(--accent)]"></span>
               </h3>
               
               <div className="flex flex-col gap-6">
                  {/* Review Card */}
                  <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 relative">
                    <div className="absolute top-4 right-4 text-[var(--border-color)] text-6xl font-serif font-black flex leading-none mt-2 opacity-50">&rdquo;</div>
                    <div className="flex text-[var(--accent)] mb-4">
                      <Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} /><Star fill="currentColor" size={12} />
                    </div>
                    <p className="text-white/80 italic mb-6">
                      La mejor fórmula molecular que utilicé en el taller. Seca uniforme, sin ghosting en paños oscuros y la duración estimada es superada ampliamente.
                    </p>
                    <div className="flex items-center gap-4 border-t border-[var(--border-color)] pt-4">
                       <div className="w-10 h-10 rounded-full border border-[var(--border-color)] overflow-hidden">
                          <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" width={40} height={40} className="w-full h-full object-cover grayscale" alt="Reviewer" />
                       </div>
                       <div>
                         <p className="font-mono uppercase font-bold text-xs text-white">Fabricio D.</p>
                         <p className="text-[var(--text-dim)] text-[10px] uppercase tracking-widest">Detailer Certificado</p>
                       </div>
                    </div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* Recommend/Related (Bottom spacer area in plan) */}
      <section className="py-24 px-4 bg-[var(--bg-base)]">
         <div className="max-w-[1400px] mx-auto text-center">
            <h3 className="font-heading text-5xl font-black uppercase tracking-tighter text-white/20 mb-10">Essential Pairing</h3>
            <p className="text-[var(--text-muted)] uppercase tracking-widest text-xs font-mono">Los profesionales también utilizan</p>
         </div>
      </section>
    </main>
  );
}
