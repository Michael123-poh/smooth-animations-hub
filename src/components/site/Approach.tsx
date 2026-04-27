import { Reveal } from "./Reveal";
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import bulb from "@/assets/gaia-hero.jpg";
import bridge from "@/assets/gaia-bridge.jpg";

const STEPS = [
  {
    n: "01",
    eyebrow: "NOTRE ADN",
    title: "Image de marque",
    bullets: [
      "Identité qui reflète vos valeurs",
      "Logo, palette, typographie, univers graphique",
      "Une histoire vraie, racontée avec justesse",
    ],
  },
  {
    n: "02",
    eyebrow: "NOTRE ADN",
    title: "Expérience utilisateur",
    bullets: [
      "Sites web, applications, interfaces",
      "Expériences digitales fluides et intuitives",
      "Transformer un utilisateur en ambassadeur",
    ],
  },
  {
    n: "03",
    eyebrow: "NOTRE ADN",
    title: "Supports de communication",
    bullets: [
      "Visuels qui ont du fond et de la forme",
      "Sur-mesure, jamais figés",
      "Donnent envie d'écouter, retenir, agir",
    ],
  },
];

export function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0); // 0 -> 1 across the section

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Rocket goes from bottom (start) to top (end)
  const rocketTop = 100 - progress * 90; // % from top

  return (
    <section
      ref={sectionRef}
      id="adn"
      className="relative bg-navy-deep text-white overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Section intro — full width bridge image as visual anchor */}
      <div className="container relative pt-28 pb-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-orange mb-6 font-medium-r">
            02 — Notre ADN
          </p>
          <h2 className="text-5xl md:text-7xl font-bold-r tracking-[-0.02em] leading-[0.95] mb-8 max-w-4xl">
            Créer des <span className="text-orange">ponts émotionnels</span><br />
            entre les marques et leurs publics.
          </h2>
          <p className="text-white/70 font-book text-lg max-w-2xl leading-relaxed">
            Bien plus qu'un studio créatif, nous sommes des passionnés à l'intersection
            de l'humain et du design. Nous transformons des idées en expériences
            mémorables.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 relative rounded-3xl overflow-hidden h-[280px] md:h-[420px]">
            <img src={bridge} alt="Pont suspendu dans la brume" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1600} height={900} />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-navy-deep/30 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8 md:p-14">
              <p className="text-2xl md:text-4xl font-book italic text-white max-w-xl leading-tight">
                "Les marques les plus mémorables sont celles qui parlent au cœur
                avant de parler au marché."
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Sticky Image + Content Grid */}
      <div className="container relative py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Sticky Image Column */}
          <div className="hidden lg:block sticky top-[20%] h-[60vh] z-10">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-orange/20 blur-[120px] rounded-full opacity-50" />
              <img
                src={bulb}
                alt="ADN Gaia"
                className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl border border-white/5 transform hover:scale-[1.02] transition-transform duration-700"
              />
              {/* Floating element/glow */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange rounded-full blur-3xl opacity-40 animate-pulse" />
            </div>
          </div>

          {/* Steps stack */}
          <div className="relative space-y-32 md:space-y-[40vh] pb-32">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl md:text-8xl font-bold-r text-white/10 group-hover:text-orange/20 transition-colors duration-500">
                      {s.n}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-orange/50 to-transparent" />
                  </div>

                  <p className="text-xs uppercase tracking-[0.4em] text-orange mb-3 font-medium-r">
                    {s.eyebrow}
                  </p>
                  <h3 className="text-4xl md:text-6xl font-bold-r tracking-tight mb-8">
                    {s.title}
                  </h3>

                  <ul className="space-y-6">
                    {s.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-4 text-white/80 font-book text-lg leading-snug">
                        <span className="mt-1.5 inline-flex h-2 w-2 rounded-full bg-orange shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative line for non-last items */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute left-[30px] bottom-[-20vh] w-px h-[15vh] bg-gradient-to-b from-orange/30 to-transparent hidden md:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
