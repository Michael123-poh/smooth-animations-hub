import { useEffect, useState } from "react";
import logoSombre from "../../assets/logos/Gaia_logo_principal_declinaison_sur_fond_sombre@3x.png";

// Minuit à Douala/Cameroun (UTC+1), le 3 août 2026 — offset fixe pour que
// l'échéance soit la même seconde absolue pour tous les visiteurs, peu
// importe leur fuseau horaire local.
const TARGET = new Date("2026-08-03T00:00:00+01:00").getTime();

function getRemaining() {
  return Math.max(0, TARGET - Date.now());
}

function split(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function CountdownGate({ children }: { children: React.ReactNode }) {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    if (remaining <= 0) return;
    const id = setInterval(() => {
      setRemaining(getRemaining());
    }, 1000);
    return () => clearInterval(id);
  }, [remaining <= 0]);

  if (remaining <= 0) {
    return <>{children}</>;
  }

  const { days, hours, minutes, seconds } = split(remaining);

  return (
    <div className="countdown-gate" role="status" aria-live="polite">
      <img src={logoSombre} alt="Gaïa Studio" className="countdown-gate-logo" />
      <p className="countdown-gate-label">Ça arrive bientôt</p>
      <div className="countdown-gate-timer">
        <div className="countdown-gate-unit">
          <span className="countdown-gate-num">{pad(days)}</span>
          <span className="countdown-gate-unit-label">Jours</span>
        </div>
        <span className="countdown-gate-sep">:</span>
        <div className="countdown-gate-unit">
          <span className="countdown-gate-num">{pad(hours)}</span>
          <span className="countdown-gate-unit-label">Heures</span>
        </div>
        <span className="countdown-gate-sep">:</span>
        <div className="countdown-gate-unit">
          <span className="countdown-gate-num">{pad(minutes)}</span>
          <span className="countdown-gate-unit-label">Minutes</span>
        </div>
        <span className="countdown-gate-sep">:</span>
        <div className="countdown-gate-unit">
          <span className="countdown-gate-num">{pad(seconds)}</span>
          <span className="countdown-gate-unit-label">Secondes</span>
        </div>
      </div>
    </div>
  );
}
