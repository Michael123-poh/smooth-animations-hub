import { Reveal } from "./Reveal";
import team from "@/assets/gaia-team.jpg";

const SKILLS = [
  {
    label: "Image de marque",
    desc: "On reconnaît une marque à son apparence, mais on s'y attache pour sa personnalité. Nous concevons des identités qui résonnent, qui parlent au cœur autant qu'à l'esprit.",
    bg: "bg-orange",
    text: "text-white",
  },
  {
    label: "Identité visuelle",
    desc: "Du logotype aux couleurs, de la typographie à l'univers graphique — un territoire singulier, cohérent et profondément aligné avec vos ambitions.",
    bg: "bg-navy-deep",
    text: "text-white",
  },
  {
    label: "Expérience utilisateur",
    desc: "Sites web, applications, interfaces. Nous créons des expériences digitales fluides et mémorables qui transforment vos visiteurs en ambassadeurs.",
    bg: "bg-navy-deep",
    text: "text-white",
  },
  {
    label: "Supports de communication",
    desc: "On capte l'attention avec un visuel. On marque les esprits avec une intention. Des supports vivants, sur-mesure, qui parlent, séduisent, convainquent.",
    bg: "bg-orange",
    text: "text-white",
  },
];

export function SavoirFaire() {
  return (
    <section id="savoir-faire" className="relative bg-white text-navy-deep py-28 md:py-36 overflow-hidden">
      <div className="container">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-orange mb-6 font-medium-r">
            04 — Notre savoir-faire
          </p>
          <h2 className="text-5xl md:text-7xl font-bold-r tracking-[-0.02em] leading-[0.95] mb-6 max-w-4xl">
            Du fond, de la forme,<br />
            <span className="italic text-orange">surtout du sens.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-8 items-start">
          {/* Skills Grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {SKILLS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <article
                  className={`group relative ${s.bg} ${s.text} rounded-[2rem] p-10 min-h-[320px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
                >
                  {/* Decorative background number */}
                  <span className="absolute -right-4 -bottom-4 text-9xl font-bold-r opacity-5 group-hover:opacity-10 transition-opacity">
                    0{i + 1}
                  </span>

                  <div className="relative z-10">
                    <div className={`h-12 w-12 rounded-xl mb-8 flex items-center justify-center ${s.bg === 'bg-orange' ? 'bg-white text-orange' : 'bg-orange text-white'}`}>
                      <span className="text-xl font-bold-r">0{i + 1}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold-r mb-4 leading-tight">
                      {s.label}
                    </h3>
                  </div>

                  <div className="relative z-10">
                    <p className="font-book text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Team / Statement Column */}
          <div className="lg:col-span-4 sticky top-32">
            <Reveal delay={400}>
              <div className="relative group">
                <div className="absolute inset-0 bg-orange/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-[2.5rem] overflow-hidden border border-navy-deep/5 shadow-xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <img src={team} alt="Gaia Team" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-60" />
                </div>

                <div className="mt-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-orange" />
                    <p className="text-orange font-bold-r tracking-widest uppercase text-xs">Excellence</p>
                  </div>
                  <p className="text-2xl font-book italic text-navy-deep leading-snug">
                    "On ne cherche pas l'ordinaire, on vise <span className="text-orange font-bold-r not-italic">l'exception.</span> Tout est pensé pour résonner."
                  </p>
                  <div className="pt-4">
                    <button className="bg-navy-deep text-white px-8 py-4 rounded-full font-bold-r text-sm uppercase tracking-widest hover:bg-orange transition-colors shadow-lg shadow-navy-deep/20">
                      Discutons de votre projet
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}