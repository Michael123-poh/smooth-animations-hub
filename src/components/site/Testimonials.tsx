import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    quote:
      "L'équipe Gaïa a été un partenaire fiable et dévoué tout au long de ce projet. Le logotype illustre parfaitement le dynamisme et la diversité de la marque.",
    name: "Le management",
    role: "Oracle Education Consultancy",
    badge: "OEC",
  },
  {
    quote:
      "Confier notre branding à l'équipe Gaïa est la meilleure décision que j'ai prise après avoir décidé de monter mon cabinet.",
    name: "Fred MILLA",
    role: "CEO, ILMA Consulting",
    badge: "FM",
  },
  {
    quote:
      "Avec l'équipe Gaïa, construire notre identité visuelle a été une belle aventure de collaboration. Nous sommes ravis de les avoir à nos côtés.",
    name: "Eddy Ernest N.",
    role: "CEO, Invest Link",
    badge: "EN",
  },
  {
    quote:
      "L'équipe Gaïa a su nous révéler tout le potentiel de notre projet. Nous étions complètement stupéfaits par le résultat.",
    name: "Mmes MBANGO & YOUDOM",
    role: "Co-fondatrices, VITAPRO",
    badge: "MY",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ITEMS.length), 7000);
    return () => clearInterval(t);
  }, []);

  const prev = (i - 1 + ITEMS.length) % ITEMS.length;
  const next = (i + 1) % ITEMS.length;

  return (
    <section id="temoignages" className="relative py-28 md:py-36 bg-cream text-navy-deep overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="container relative">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-orange mb-4 font-medium-r">
          06 — Témoignages
        </p>
        <Reveal textActiveColor="text-navy-deep">
          <h2 className="text-center text-5xl md:text-7xl font-bold-r tracking-[-0.02em] mb-4">
            Ce qu'ils en <span className="italic text-orange">disent.</span>
          </h2>
          <p className="text-center text-navy-deep/65 font-book text-lg max-w-xl mx-auto mb-16">
            La preuve de notre engagement à donner vie à des idées fortes et durables.
          </p>
        </Reveal>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-stretch gap-6 justify-center">
            {/* Prev (faded) */}
            <Card item={ITEMS[prev]} faded className="hidden lg:flex" />
            {/* Active */}
            <Card item={ITEMS[i]} key={i} />
            {/* Next (faded) */}
            <Card item={ITEMS[next]} faded className="hidden lg:flex" />
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Témoignage ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-accent" : "w-4 bg-white/20"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  item,
  faded,
  className = "",
}: {
  item: (typeof ITEMS)[number];
  faded?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative flex-1 max-w-2xl rounded-2xl border border-navy-deep/10 bg-white p-8 md:p-10 shadow-xl transition-all duration-700 ${faded ? "opacity-25 scale-90 grayscale" : "opacity-100 animate-fade-up"
        } ${className}`}
    >
      {/* Yellow corner */}
      {!faded && (
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl">
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange rotate-45" />
        </div>
      )}
      <p className="text-base md:text-lg leading-relaxed font-book text-navy-deep/90 mb-8">
        {item.quote}
      </p>
      <div className="flex items-center justify-between text-navy-deep">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-navy-deep text-white inline-flex items-center justify-center font-bold-r">
            {item.badge}
          </div>
          <div>
            <p className="font-bold-r">{item.name}</p>
            <p className="text-navy-deep/50 font-book text-sm">{item.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
