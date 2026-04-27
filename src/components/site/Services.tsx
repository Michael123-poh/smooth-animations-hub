import { Reveal } from "./Reveal";
import { PatternStrip } from "./PatternStrip";

/**
 * Notre Histoire — section orange (signature Gaïa) qui suit le hero navy.
 * Le pattern strip en haut crée la continuité visuelle avec le hero.
 */
export function Services() {
  return (
    <section
      id="histoire"
      className="relative bg-orange text-white overflow-hidden"
    >
      {/* Pattern strip — pont visuel depuis le hero navy */}
      <PatternStrip className="absolute top-0 left-0 right-0" height={70} opacity={0.4} />

      <div className="container relative pt-32 pb-28 md:pt-40 md:pb-36">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-6 font-medium-r">
                01 — Notre Histoire
              </p>
              <h2 className="text-5xl md:text-7xl font-bold-r tracking-[-0.02em] leading-[0.95] mb-8 text-white">
                Derrière chaque marque,<br />
                <span className="italic font-book">une histoire.</span>
              </h2>
              <p className="text-white/90 font-book text-lg leading-relaxed max-w-md">
                La vôtre — sincère, humaine, façonnée avec passion pour refléter la
                <span className="font-bold-r"> perfection</span> que vous méritez.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-white text-navy-deep rounded-3xl p-10 md:p-14 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.4)]">
              <h3 className="text-3xl md:text-4xl font-bold-r mb-6 text-navy-deep">
                Tout a commencé par un constat simple, presque dérangeant.
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-navy-deep/80 font-book leading-relaxed">
                <div className="space-y-4">
                  <p>
                    En parcourant les rayons de nos supermarchés, une question revenait sans cesse :
                    <span className="block mt-2 italic text-orange font-medium-r">
                      pourquoi les produits Made in Cameroun sont-ils si peu attirants ?
                    </span>
                  </p>
                  <p>
                    Des packagings ternes. Des logos hésitants. Et pourtant, derrière ces
                    produits, il y a de la passion. Des femmes et des hommes qui croient
                    en leurs rêves.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    C'est de cette idée qu'est née <span className="font-bold-r">gaïa</span>,
                    un nom choisi en écho à la déesse de la Terre — celle qui nourrit,
                    qui révèle, qui fait croître.
                  </p>
                  <p>
                    Un terreau fertile où chaque marque peut éclore, grandir et se déployer.
                  </p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-navy-deep/10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-orange/20 inline-flex items-center justify-center text-orange font-bold-r">
                  CT
                </div>
                <div>
                  <p className="font-bold-r text-navy-deep">Christian T.</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-navy-deep/60 font-medium-r">Manager</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Pattern strip vers la section suivante */}
      <PatternStrip className="absolute bottom-0 left-0 right-0" height={70} opacity={0.4} />
    </section>
  );
}
