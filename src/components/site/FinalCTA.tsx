import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Mail, MapPin } from "lucide-react";

const FEATURES = [
  "Atelier de découverte & cadrage stratégique",
  "Identité visuelle complète (logo, charte, univers)",
  "Supports de communication sur-mesure",
  "Site web ou application — design & développement",
  "Animations et interactions soignées",
  "Stratégie de marque & positionnement",
  "Accompagnement post-lancement",
  "+300 projets menés à terme",
];

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-navy-deep overflow-hidden">
      {/* Horizon glow — orange instead of blue */}
      <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-orange/30 to-transparent" />
      <div className="absolute inset-x-0 top-[40%] h-px bg-gradient-to-r from-transparent via-orange/70 to-transparent blur-sm" />
      <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-orange/40 blur-3xl" />

      <div className="container relative max-w-3xl">
        <Reveal>
          <div className="rounded-3xl bg-white p-8 md:p-12 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)]">
            <div className="flex justify-end mb-6">
              <span className="text-navy-deep/70 font-medium-r flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-orange animate-pulse" />
                Disponible pour de nouveaux projets
              </span>
            </div>

            <div className="flex items-start gap-5 mb-6">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-orange rounded-md rotate-6" />
                <div className="relative h-14 w-14 rounded-md inline-flex items-center justify-center text-navy-deep">
                  <Sparkles className="h-7 w-7 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold-r tracking-[-0.02em] text-navy-deep leading-[1.05]">
                Donnons vie<br />à votre <span className="text-orange">vision.</span>
              </h2>
            </div>

            <p className="text-navy-deep/70 font-book text-lg mb-8 leading-relaxed">
              Un processus sur-mesure pour révéler le véritable potentiel de votre
              marque — de la stratégie au déploiement.
            </p>

            <ul className="space-y-3 mb-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-navy-deep font-medium-r">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange/15 text-orange shrink-0">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-8 w-full rounded-xl bg-orange text-white hover:bg-orange/90 hover:scale-[1.02] transition-transform h-14 text-base font-bold-r shadow-lg shadow-orange/30"
            >
              <a href="mailto:contact@gaiaimagine.com">Démarrer la conversation</a>
            </Button>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-navy-deep/60 font-book">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange" /> contact@gaiaimagine.com
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange" /> Douala, Cameroun
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
}
