const LOGOS = [
  "Oracle Education",
  "ILMA Consulting",
  "VITAPRO",
  "INVEST LINK",
  "Résidence Isabella",
  "K-CARE Cosmetics",
  "Gaïa",
  "+300 marques",
];

export function LogoMarquee() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <section className="border-y border-white/10 py-8 overflow-hidden bg-navy-deep">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-white/50 font-medium-r mb-6">
        Ils nous ont fait confiance
      </p>
      <div className="relative">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {items.map((name, i) => (
            <span
              key={i}
              className="text-xl md:text-2xl font-bold-r text-white/40 hover:text-orange transition-colors whitespace-nowrap tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[hsl(var(--navy-deep))] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[hsl(var(--navy-deep))] to-transparent" />
      </div>
    </section>
  );
}