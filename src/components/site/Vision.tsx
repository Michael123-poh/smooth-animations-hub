import { Reveal } from "./Reveal";
import { PatternStrip } from "./PatternStrip";
import { Award, Handshake, Users, MessageCircle } from "lucide-react";
import cameroon from "@/assets/gaia-cameroon.jpg";

const PILLARS = [
  {
    icon: Award,
    title: "Excellence",
    desc: "Comme la nature qui façonne ses œuvres avec patience et harmonie, nous portons une attention minutieuse à chaque détail.",
  },
  {
    icon: Handshake,
    title: "Engagement",
    desc: "Pleinement investis dans chaque projet. Chaque mission est une promesse que nous tenons avec passion et détermination.",
  },
  {
    icon: Users,
    title: "Convivialité",
    desc: "Le travail créatif est avant tout une collaboration. Confiance et échange au cœur de chaque interaction.",
  },
  {
    icon: MessageCircle,
    title: "Transparence",
    desc: "Communication claire, honnête et ouverte à chaque étape. Nous instaurons une relation de confiance durable.",
  },
];

export function Vision() {
  return (
    <section id="vision" className="relative bg-cream text-navy-deep overflow-hidden">
      <PatternStrip className="absolute top-0 left-0 right-0" height={70} opacity={0.5} />

      {/* Vision intro — split layout with Cameroon trophy */}
      <div className="container relative pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange mb-6 font-medium-r">
                03 — Notre Vision
              </p>
              <h2 className="text-5xl md:text-6xl font-bold-r tracking-[-0.02em] leading-[0.95] mb-8">
                Que les idées locales<br />
                <span className="italic text-orange">brillent avec audace.</span>
              </h2>
              <p className="text-navy-deep/70 font-book text-lg leading-relaxed max-w-lg mb-6">
                Dans un monde saturé d'images, nous donnons une voix visuelle forte
                et authentique aux marques d'ici. Élever la perception du
                <span className="font-bold-r"> «Made in Cameroon»</span> et lui faire prendre la
                place qu'il mérite.
              </p>
              <p className="text-navy-deep/70 font-book leading-relaxed max-w-lg">
                Un Cameroun où l'esthétique, la stratégie et l'authenticité se
                rencontrent pour façonner le futur.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative rounded-3xl overflow-hidden bg-navy-deep aspect-square shadow-[0_40px_80px_-30px_rgba(3,4,94,0.4)]">
              <img src={cameroon} alt="Sculpture orange représentant le Cameroun" className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Piliers fondateurs — Creative Grid */}
      <div className="container relative pb-32">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h3 className="text-4xl md:text-6xl font-bold-r leading-tight mb-4">Nos piliers fondateurs</h3>
              <p className="text-navy-deep/60 font-book text-lg">
                Des valeurs qui dictent chacun de nos gestes.
              </p>
            </div>
            <div className="h-px hidden md:block flex-1 bg-navy-deep/10 mx-12 mb-6" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Pillar 1 - Excellence */}
          <div className="md:col-span-7">
            <Reveal delay={0}>
              <div className="group relative bg-orange rounded-[2.5rem] p-10 h-full text-white overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-500">
                <Award className="absolute -right-8 -top-8 h-48 w-48 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-bold-r uppercase tracking-widest mb-6">01 — Qualité</span>
                  <h4 className="text-3xl md:text-4xl font-bold-r mb-4">L'Excellence</h4>
                  <p className="text-white/80 font-book text-lg leading-relaxed max-w-md">
                    Chaque détail est une opportunité de perfection. Nous sculptons vos idées avec la précision d'un artisan.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Pillar 2 - Engagement */}
          <div className="md:col-span-5">
            <Reveal delay={100}>
              <div className="group relative bg-white border border-navy-deep/10 rounded-[2.5rem] p-10 h-full text-navy-deep hover:shadow-2xl transition-all duration-500">
                <Handshake className="h-10 w-10 text-orange mb-6" />
                <h4 className="text-3xl font-bold-r mb-4">Engagement</h4>
                <p className="text-navy-deep/70 font-book leading-relaxed">
                  Votre réussite est notre unique boussole. Nous nous investissons corps et âme dans votre vision.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Pillar 3 - Convivialité */}
          <div className="md:col-span-5">
            <Reveal delay={200}>
              <div className="group relative bg-navy-deep rounded-[2.5rem] p-10 h-full text-white hover:shadow-2xl transition-all duration-500">
                <Users className="h-10 w-10 text-orange mb-6" />
                <h4 className="text-3xl font-bold-r mb-4">Co-création</h4>
                <p className="text-white/70 font-book leading-relaxed">
                  L'intelligence collective au service du design. Votre expertise et notre créativité ne font qu'un.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Pillar 4 - Transparence */}
          <div className="md:col-span-7">
            <Reveal delay={300}>
              <div className="group relative bg-cream border-2 border-orange/20 rounded-[2.5rem] p-10 h-full text-navy-deep overflow-hidden hover:border-orange transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="shrink-0 h-16 w-16 rounded-2xl bg-orange flex items-center justify-center text-white shadow-lg">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold-r">Transparence</h4>
                    <p className="text-navy-deep/70 font-book mt-2 leading-relaxed">
                      Une communication limpide pour bâtir une confiance inébranlable. Pas de surprises, juste du résultat.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <PatternStrip className="absolute bottom-0 left-0 right-0" height={70} opacity={0.5} />
    </section>
  );
}