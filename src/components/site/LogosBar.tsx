const LOGOS = ["AFRIPAY", "SWEEP", "TOBIKO", "LUMEN", "TECH-IV", "CAMTOUR", "ENVIRO", "B-TRANS", "GA\u00CFA", "BMH"];

export const LogosBar = () => {
  return (
    <div className="logos-bar" style={{ background: 'rgba(8, 15, 43, 0.95)' }}>
      <div className="logos-track">
        {[...LOGOS, ...LOGOS].map((l, i) => (
          <div key={i} className="logo-item" style={{ fontSize: '12px', opacity: 0.4 }}>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
};
