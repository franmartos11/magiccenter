"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterAccordion({ title, children, defaultOpen = true }: FilterAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--border-color)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left font-mono font-bold tracking-widest text-sm uppercase text-white hover:text-[var(--accent)] transition-colors"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function FilterSidebar() {
  return (
    <aside className="w-full lg:w-[260px] flex-shrink-0">
      <h3 className="font-heading text-xl uppercase font-bold tracking-widest mb-6 border-l-2 border-[var(--accent)] pl-3">
        Filtros
      </h3>

      <div className="flex flex-col">
        <FilterAccordion title="Categorías">
          <div className="flex flex-col gap-2">
            {["Todos", "Ceramic & Coating", "Shampoo & Foam", "Polish & Compound", "Accesorios"].map(
              (cat, i) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-3 h-3 rounded-full border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors flex items-center justify-center ${i === 0 ? "bg-[var(--accent)] border-[var(--accent)]" : ""}`} />
                  <span className={`text-sm ${i === 0 ? "text-white font-medium" : "text-[var(--text-muted)] group-hover:text-white transition-colors"}`}>
                    {cat}
                  </span>
                </label>
              )
            )}
          </div>
        </FilterAccordion>

        <FilterAccordion title="Marcas">
          <div className="flex flex-col gap-3">
            {["Koch Chemie", "Meguiar's", "Ceramic Pro", "Gyeon", "3D Car Care"].map((brand) => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="appearance-none w-4 h-4 border border-[var(--border-color)] bg-transparent checked:bg-[var(--accent)] checked:border-[var(--accent)] cursor-pointer group-hover:border-[var(--accent)] transition-colors relative 
                  checked:after:content-[''] checked:after:absolute checked:after:left-[4px] checked:after:top-[1px] checked:after:w-[6px] checked:after:h-[10px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-45"
                />
                <span className="text-sm text-[var(--text-muted)] group-hover:text-white transition-colors">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </FilterAccordion>

        <FilterAccordion title="Precio">
          <div className="flex flex-col gap-4">
            <input type="range" min="0" max="500000" className="w-full accent-[var(--accent)] cursor-pointer h-1 bg-[var(--border-color)] appearance-none rounded" />
            <div className="flex justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>$0</span>
              <span>$500.000+</span>
            </div>
          </div>
        </FilterAccordion>

        <FilterAccordion title="Stock" defaultOpen={false}>
          <label className="flex items-center gap-3 cursor-pointer group">
             <input
                type="checkbox"
                defaultChecked
                className="appearance-none w-4 h-4 border border-[var(--border-color)] bg-transparent checked:bg-[var(--accent)] checked:border-[var(--accent)] cursor-pointer group-hover:border-[var(--accent)] transition-colors relative 
                checked:after:content-[''] checked:after:absolute checked:after:left-[4px] checked:after:top-[1px] checked:after:w-[6px] checked:after:h-[10px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-45"
              />
              <span className="text-sm text-[var(--text-muted)] group-hover:text-white transition-colors">Solo disponibles (En Stock)</span>
          </label>
        </FilterAccordion>

        <div className="mt-8">
          <button className="w-full bg-white text-black hover:bg-[var(--bg-base)] hover:text-white border border-transparent hover:border-[var(--border-color)] transition-colors font-bold uppercase tracking-widest text-sm py-3 mb-2">
            Aplicar Filtros
          </button>
          <button className="w-full bg-transparent text-[var(--text-muted)] hover:text-white transition-colors font-mono uppercase tracking-widest text-xs py-2">
            Limpiar Todos
          </button>
        </div>
      </div>
    </aside>
  );
}
