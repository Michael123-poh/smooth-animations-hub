export const FooterCTA = () => {
  return (
    <section className="fcta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy2) 100%)' }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%,rgba(245, 130, 32, 0.05),transparent)", pointerEvents: "none" }} />
      <h2 className="reveal">Prêt à transformer<br />votre vision en réalité ?</h2>
      <p className="reveal d1">Bâtissons ensemble l'avenir de votre marque avec audace et stratégie.</p>
      <button className="btn-y reveal d2" style={{ fontSize: 16, padding: "16px 44px", background: 'var(--orange)', color: 'white' }}>
        Lancer la discussion
      </button>
    </section>
  );
};
