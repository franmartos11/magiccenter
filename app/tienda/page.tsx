import { PageHero } from "@/components/shared/PageHero";
import { FilterSidebar } from "@/components/shop/FilterSidebar";
import { ProductCardFull } from "@/components/shop/ProductCardFull";
import { productsData } from "@/data/products";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function TiendaPage() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-[var(--bg-base)]">
      <PageHero
        title="Productos de Detailing"
        badge="Inventario Exclusivo"
        image="https://images.unsplash.com/photo-1623868661726-5bbf227181c2?q=80&w=2670&auto=format&fit=crop"
      />

      <div className="max-w-[1400px] mx-auto w-full px-4 py-16 flex flex-col lg:flex-row gap-12">
        {/* Mobile Filter Button */}
        <div className="lg:hidden w-full flex justify-between items-center bg-[var(--bg-surface)] p-4 border border-[var(--border-color)]">
          <span className="font-heading font-bold uppercase tracking-widest text-white">Filtros</span>
          <SlidersHorizontal size={20} className="text-[var(--accent)]" />
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block w-[260px] flex-shrink-0">
          <FilterSidebar />
        </div>

        {/* Product Grid Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar Sorting */}
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-[var(--border-color)]">
            <h2 className="font-heading text-4xl font-black uppercase text-white tracking-widest italic">
              SHOP <span className="text-[var(--accent)]">PRECISION</span>
            </h2>
            
            <div className="hidden md:flex items-center gap-4 text-sm font-mono tracking-widest uppercase text-[var(--text-muted)]">
              <span>{productsData.length} Productos</span>
              <div className="w-px h-4 bg-[var(--border-color)]" />
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                Relevancia <ChevronDown size={14} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {productsData.map((p) => (
              <ProductCardFull key={p.id} product={p} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-[var(--bg-surface)] border border-[var(--accent)] text-white font-mono font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center bg-transparent border border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-surface)] hover:text-white transition-colors font-mono font-bold">2</button>
            <button className="w-10 h-10 flex items-center justify-center bg-transparent border border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-surface)] hover:text-white transition-colors font-mono font-bold">3</button>
            <span className="text-[var(--text-dim)] px-2">...</span>
            <button className="w-10 h-10 flex items-center justify-center bg-transparent border border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-surface)] hover:text-white transition-colors font-mono font-bold">12</button>
          </div>
        </div>
      </div>

      {/* Bottom Assesment Banner */}
      <section className="mt-12 py-20 px-4 bg-[#0a0a0a] border-y border-[var(--border-color)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent)]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2">
            <h3 className="font-heading text-4xl md:text-5xl uppercase font-black tracking-tighter mb-4 text-white">¿No estás seguro de qué elegir?</h3>
            <p className="text-[var(--text-muted)] text-lg mb-8 max-w-[400px]">Nuestros expertos certificados están listos para asesorarte sobre los mejores productos para tu vehículo.</p>
            <a href="https://wa.me/5491112345678" className="inline-block border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white px-8 py-4 uppercase font-bold tracking-widest text-sm transition-colors duration-300">
              Hablar con un Experto
            </a>
          </div>
          <div className="md:w-1/2 flex gap-4 w-full">
             <div className="bg-[var(--bg-surface)] p-8 flex-1 border border-[var(--border-color)] flex flex-col items-center justify-center text-center">
                <span className="text-[var(--accent)] text-2xl mb-4">🛡️</span>
                <span className="font-mono font-bold tracking-widest text-xs uppercase">Calidad Certificada</span>
             </div>
             <div className="bg-[var(--bg-surface)] p-8 flex-1 border border-[var(--border-color)] flex flex-col items-center justify-center text-center">
                <span className="text-[var(--accent)] text-2xl mb-4">🚚</span>
                <span className="font-mono font-bold tracking-widest text-xs uppercase">Envíos a todo el país</span>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
