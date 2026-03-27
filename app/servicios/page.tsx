import { PageHero } from "@/components/shared/PageHero";
import { ServiceDetail } from "@/components/services/ServiceDetail";

const servicesDataFull = [
  {
    id: "detailing-exterior",
    number: "01",
    title: "Detailing Exterior",
    description: "Proceso completo de descontaminación del barniz, corrección de rayas y realce profundo de brillo. Pensado para vehículos con pintura opaca, spider-webs o contaminantes incrustados que un lavado común no elimina.",
    image: "https://images.unsplash.com/photo-1600539758206-218209867540?q=80&w=1200&auto=format&fit=crop",
    checklist: [
      "Lavado meticuloso y descontaminación férrica/mecánica con arcilla",
      "Medición de espesor de laca y pintura",
      "Corrección de barniz de 1, 2 o 3 pasos según estado",
      "Pulido de alto brillo y refinado",
      "Protección final con sellador sintético Carnauba o cerámico básico"
    ],
    price: "ARS 60.000",
  },
  {
    id: "interior",
    number: "02",
    title: "Limpieza Interior Profunda",
    description: "Extracción del polvo, mugre, ácaros y bacterias de cada rincón del habitáculo. Usamos vapor de alta temperatura, extractoras de inyección/extracción y productos químicos no agresivos para devolver el 'olor a nuevo'.",
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1200&auto=format&fit=crop",
    checklist: [
      "Aspirado exhaustivo de alfombras, butacas y baúl",
      "Lavado de tapizados de tela o nutrición profunda de cuero",
      "Desinfección de ductos de ventilación con vapor a 140°C",
      "Limpieza y acondicionamiento UV de tablero, plásticos y paneles",
      "Detallado de pedales, volante y consola central"
    ],
    price: "ARS 25.000",
    reverse: true,
  },
  {
    id: "tratamientos",
    number: "03",
    title: "Tratamiento Cerámico",
    description: "Aplicación de coating molecular de dureza 9H/10H. Se fusiona con el barniz creando una coraza que protege la pintura durante 3 a 5 años. Repele agua (hidrofobia extrema), polvo, excremento de aves, savia y rayos UV.",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1200&auto=format&fit=crop",
    checklist: [
      "Incluye Detailing Exterior completo como preparación obligatoria",
      "Aplicación de coating en pintura, plásticos y ópticas",
      "Sellado de vidrios repelente al agua",
      "Curado infrarrojo certificado",
      "Garantía escrita de 24 meses y mantenimientos programados"
    ],
    price: "ARS 180.000",
    badge: "PREMIUM",
  },
  {
    id: "ppf",
    number: "04",
    title: "Film PPF (Paint Protection)",
    description: "La protección definitiva. Película transparente de poliuretano auto-regenerativa, que absorbe el impacto físico de piedras en ruta, rayones de llaves o raspones, manteniendo la pintura original de fábrica intacta.",
    image: "https://images.unsplash.com/photo-1549643444-245f7783fdac?q=80&w=1200&auto=format&fit=crop",
    checklist: [
      "Instalación de film pre-corte con plotter (sin cutter sobre el auto)",
      "Propiedad de auto-curado con calor (rayas leves desaparecen)",
      "Protección frontal parcial (Capot, paragolpes, espejos)",
      "Protección Full Car disponible bajo pedido presupuestado",
      "Garantía del material hasta 10 años"
    ],
    price: "ARS 250.000",
    reverse: true,
  },
  {
    id: "mecanica",
    number: "05",
    title: "Mecánica Integral",
    description: "No solo embellecemos, reparamos. Contamos con un taller equipado con tecnología de punta y scanners para brindar diagnósticos precisos y mantenimientos programados que aseguran la fiabilidad y performance de tu vehículo.",
    image: "https://images.unsplash.com/photo-1486262715619-679ce583efb8?q=80&w=1200&auto=format&fit=crop",
    checklist: [
      "Service técnico de motor: cambio de aceite, filtros, bujías",
      "Diagnóstico computarizado por escáner multimarca",
      "Sistema de frenos: revisión, recambio de pastillas, rectificado y purgado ABS",
      "Suspensión y tren delantero",
      "Distribución y correas"
    ],
    price: "A Consultar",
  },
  {
    id: "lavadero",
    number: "06",
    title: "Lavadero Profesional",
    description: "Técnicas de lavado seguro a dos baldes, con shampoos pH neutro y manoplas de microfibra de alta densidad. Nos aseguramos de lavar tu vehículo sin generar swirls ni marcas en la laca.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200&auto=format&fit=crop",
    checklist: [
      "LAVADO BÁSICO: Exterior a detalle + hidrolavado superficial de llantas",
      "LAVADO COMPLETO: Exterior a detalle + aspirado y limpieza rápida de plásticos interiores",
      "LAVADO PREMIUM: Lavado VIP. Prelavado con espuma activa (Snow Foam) + Lavado de chasis inferior + Acondicionador de plásticos, gomas y motor"
    ],
    price: "Desde ARS 8.000",
    reverse: true,
  }
];

export default function ServiciosPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--bg-base)] text-white w-full overflow-x-hidden">
      <PageHero 
        title="Servicios Especializados" 
        badge="Nuestra Experiencia"
        image="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2670&auto=format&fit=crop"
      />

      <div className="w-full flex flex-col">
        {servicesDataFull.map((s) => (
          <ServiceDetail 
            key={s.id}
            id={s.id}
            number={s.number}
            title={s.title}
            description={s.description}
            image={s.image}
            checklist={s.checklist}
            price={s.price}
            badge={s.badge}
            reverse={s.reverse}
          />
        ))}
      </div>

      {/* Services Footer Banner */}
      <section className="py-24 px-4 bg-[#0a0a0a] border-t border-[var(--border-color)]">
        <div className="max-w-[800px] mx-auto text-center">
          <h3 className="font-heading text-4xl uppercase font-black tracking-widest mb-6">¿Tenés dudas sobre qué servicio necesita tu auto?</h3>
          <p className="text-[var(--text-muted)] mb-10">Con gusto analizamos el vehículo de forma gratuita en nuestro taller para armarte el presupuesto adecuado.</p>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex overflow-hidden relative group items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-10 py-5 uppercase font-heading font-black tracking-widest transition-colors duration-300 shadow-[0_0_40px_rgba(229,0,0,0.4)]"
          >
            Hablar con un asesor
          </a>
        </div>
      </section>
    </main>
  );
}
