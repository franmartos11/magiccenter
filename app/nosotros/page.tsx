import { PageHero } from "@/components/shared/PageHero";
import { OurStory } from "@/components/about/OurStory";
import { TeamSection } from "@/components/about/TeamSection";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { WorkshopGallery } from "@/components/about/WorkshopGallery";

export default function NosotrosPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--bg-base)] text-white w-full overflow-x-hidden pt-0">
      <PageHero 
        title="Somos Magic Center"
        badge="Nuestra Historia"
        image="https://images.unsplash.com/photo-1549643444-245f7783fdac?q=80&w=2670&auto=format&fit=crop"
      />

      <div className="flex flex-col w-full">
        <OurStory />
        <ValuesGrid />
        <TeamSection />
        <WorkshopGallery />
      </div>

      <section className="py-20 w-full overflow-hidden border-t border-[var(--border-color)] bg-[var(--bg-surface)]">
         <div className="flex w-full overflow-hidden no-scrollbar">
            <div className="flex gap-16 md:gap-32 min-w-max animate-[marquee_20s_linear_infinite]">
               {[1,2,3].map((_, idx) => (
                 <div key={idx} className="flex gap-16 md:gap-32 items-center text-[var(--border-color)] font-heading font-black text-6xl md:text-8xl tracking-widest uppercase">
                    <span>Precision</span>
                    <span className="text-[var(--accent)]">•</span>
                    <span>Calidad</span>
                    <span className="text-[var(--accent)]">•</span>
                    <span>Detailing</span>
                    <span className="text-[var(--accent)]">•</span>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
}
