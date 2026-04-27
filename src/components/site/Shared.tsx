import { useEffect, useState } from "react";
import { Check, Sparkles, Monitor, Zap, Palette, Target, Wrench, ChevronLeft, ChevronRight, ChevronDown, Lightbulb as LbIcon, Heart, Shield, Users, Layers } from "lucide-react";

export function Stars() {
  const [stars, setStars] = useState<{ id: number; left: number; top: number; d: string; delay: string }[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      d: (Math.random() * 2 + 3).toFixed(1) + "s",
      delay: (Math.random() * 5).toFixed(1) + "s",
    })));
  }, []);

  return (
    <div className="hero-stars">
      {stars.map(s => (
        <div key={s.id} className="star" style={{
          left: s.left + "%",
          top: s.top + "%",
          // @ts-ignore
          "--d": s.d,
          animationDelay: s.delay,
          background: 'var(--orange)',
          opacity: 0.3
        }}/>
      ))}
    </div>
  );
}

export function CreativeLight({ phase }: { phase: number }) {
  const ty = [0, -40, -80, -120][phase] ?? 0;
  const glow = phase > 0 ? (phase * 15) : 0;
  
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Lightbulb Thread */}
      <div style={{ 
        width: '2px', 
        height: '200px', 
        background: 'linear-gradient(to bottom, var(--orange), transparent)',
        position: 'absolute',
        top: '-200px',
        opacity: 0.6
      }} />
      
      <div style={{ 
        transform: `translateY(${ty}px)`, 
        transition: "all 1s cubic-bezier(.2,0,.3,1)",
        filter: `drop-shadow(0 0 ${glow}px var(--orange))`
      }}>
        <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
          {/* Bulb Glass */}
          <path d="M60 20C35 20 15 40 15 65C15 85 25 105 40 115L40 135L80 135L80 115C95 105 105 85 105 65C105 40 85 20 60 20Z" 
            fill={phase > 0 ? "var(--orange)" : "rgba(255,255,255,0.05)"} 
            stroke="var(--orange)" 
            strokeWidth="2"
            style={{ transition: 'fill 0.8s ease' }}
          />
          {/* Filament */}
          <path d="M50 135L50 110C50 100 70 100 70 110L70 135" stroke="white" strokeWidth="2" opacity={phase > 0 ? 1 : 0.2} />
          {/* Base */}
          <rect x="45" y="135" width="30" height="8" rx="2" fill="#334466" />
          <rect x="48" y="145" width="24" height="6" rx="2" fill="#223355" />
          <circle cx="60" cy="158" r="4" fill="#112233" />
        </svg>
      </div>
      
      {/* Organic Link Element (Floating Circle) */}
      <div style={{ 
        width: '40px', 
        height: '40px', 
        borderRadius: '50%', 
        border: '1px solid var(--orange)',
        position: 'absolute',
        bottom: '-100px',
        opacity: phase > 1 ? 0.4 : 0,
        transform: `scale(${phase * 0.5})`,
        transition: 'all 0.8s ease'
      }} />
    </div>
  );
}

export function GIcon() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <span style={{ 
        fontWeight: 900, 
        fontSize: '24px', 
        color: 'white', 
        letterSpacing: '-1.5px',
        fontFamily: 'Barlow, sans-serif',
        textTransform: 'lowercase'
      }}>gaia</span>
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f58220', marginTop: '10px' }} />
    </div>
  );
}

export { Check, Sparkles, Monitor, Zap, Palette, Target, Wrench, ChevronLeft, ChevronRight, ChevronDown, LbIcon, Heart, Shield, Users, Layers };
