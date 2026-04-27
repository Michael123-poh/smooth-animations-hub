import { Reveal } from "./Reveal";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const CASES = [
  {
    client: "Oracle Education",
    tag: "Éducation · Identité visuelle",
    desc: "Une charte autour d'une palette bleue et verte symbolisant confiance et innovation.",
    color: "from-[hsl(140_60%_45%)] to-[hsl(220_70%_45%)]",
  },
  {
    client: "ILMA Consulting",
    tag: "Conseil · Branding",
    desc: "Identité visuelle cohérente pour un cabinet de droit des affaires et fiscalité.",
    color: "from-[hsl(265_45%_55%)] to-[hsl(280_50%_30%)]",
  },
  {
    client: "VITAPRO",
    tag: "BTP · Identité de marque",
    desc: "Valeurs de fiabilité et dynamisme pour un acteur des matériaux camerounais.",
    color: "from-[hsl(22_89%_55%)] to-[hsl(220_60%_30%)]",
  },
  {
    client: "INVEST LINK",
    tag: "Finance · Branding",
    desc: "Identité axée sur qualité et excellence pour faciliter les relations Afrique-Asie.",
    color: "from-[hsl(35_70%_55%)] to-[hsl(220_70%_25%)]",
  },
  {
    client: "Résidence Isabella",
    tag: "Hôtellerie · Branding",
    desc: "Univers visuel évoquant le luxe et le bien-être pour une résidence à Douala.",
    color: "from-[hsl(35_30%_55%)] to-[hsl(0_0%_15%)]",
  },
  {
    client: "K-CARE Cosmetics",
    tag: "Cosmétique · Packaging",
    desc: "Palette évoquant le bio et la qualité, packaging artisanal pour produits féminins.",
    color: "from-[hsl(80_55%_50%)] to-[hsl(150_50%_25%)]",
  },
];

export function CaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="realisations" className="relative py-28 md:py-36 bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="container relative">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-orange mb-6 font-medium-r">
            05 — Nos réalisations
          </p>
          <h2 className="text-5xl md:text-7xl font-bold-r tracking-[-0.02em] text-white leading-[0.95]">
            Chaque projet,<br />
            <span className="italic text-orange">une histoire.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/70 font-book text-lg">
            De l'identité visuelle aux campagnes digitales — la diversité de nos
            clients et la richesse des idées que nous cultivons ensemble.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 relative">
        <div
          ref={trackRef}
          className="flex gap-6 px-8 md:px-16 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {CASES.map((c, i) => (
            <Reveal key={c.client} delay={i * 80}>
              <article
                className={`group relative shrink-0 snap-start w-[300px] md:w-[460px] aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 cursor-pointer`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.color} transition-transform duration-700 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/30 transition-colors duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between">
                    <span className="self-start text-[11px] uppercase tracking-[0.25em] font-medium-r bg-white/20 backdrop-blur px-3 py-1.5 rounded-full">
                      {c.tag}
                    </span>
                    <ArrowUpRight className="h-6 w-6 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold-r tracking-tight mb-2">
                      {c.client}
                    </h3>
                    <p className="font-book text-sm text-white/85 leading-snug max-w-xs">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
