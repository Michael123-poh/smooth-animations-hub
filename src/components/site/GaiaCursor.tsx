import { useEffect, useRef } from "react";

/* Curseur personnalisé Gaïa — point + anneau qui suit avec inertie.
   Partagé entre les pages (accueil, portfolio, …). Le body a `cursor: none`. */
export function GaiaCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Pointeur fin uniquement (souris) — pas sur tactile
    if (!window.matchMedia("(pointer: fine)").matches) return;

    function onMove(e: MouseEvent) {
      posRef.current = { x: e.clientX, y: e.clientY };
    }

    function tick() {
      if (dotRef.current) {
        dotRef.current.style.left = `${posRef.current.x}px`;
        dotRef.current.style.top = `${posRef.current.y}px`;
      }
      ringPos.current.x += (posRef.current.x - ringPos.current.x) * 0.13;
      ringPos.current.y += (posRef.current.y - ringPos.current.y) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      raf.current = requestAnimationFrame(tick);
    }

    function onEnterLink() {
      ringRef.current?.style.setProperty("width", "60px");
      ringRef.current?.style.setProperty("height", "60px");
      ringRef.current?.style.setProperty("border-color", "rgba(255,138,61,1)");
    }
    function onLeaveLink() {
      ringRef.current?.style.setProperty("width", "36px");
      ringRef.current?.style.setProperty("height", "36px");
      ringRef.current?.style.setProperty("border-color", "rgba(255,138,61,0.7)");
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    // Délégation : écoute au niveau document pour couvrir les éléments montés après.
    function over(e: MouseEvent) {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], [data-cursor='hover']")) onEnterLink();
    }
    function out(e: MouseEvent) {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], [data-cursor='hover']")) onLeaveLink();
    }
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="gaia-cursor"
        aria-hidden="true"
        style={{ position: "fixed", pointerEvents: "none", zIndex: 99999 }}
      >
        <div className="gaia-cursor-dot" />
      </div>
      <div
        ref={ringRef}
        className="gaia-cursor"
        aria-hidden="true"
        style={{ position: "fixed", pointerEvents: "none", zIndex: 99998 }}
      >
        <div className="gaia-cursor-ring" />
      </div>
    </>
  );
}
