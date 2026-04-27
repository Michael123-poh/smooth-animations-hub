import { useEffect, useState, useRef } from "react";
import { GaiaNavbar } from "../components/site/GaiaNavbar";
import { GaiaHero } from "../components/site/GaiaHero";
import { GaiaMarquee } from "../components/site/GaiaMarquee";
import { GaiaServices } from "../components/site/GaiaServices";
import { GaiaDNA } from "../components/site/GaiaDNA";
import { GaiaPillars } from "../components/site/GaiaPillars";
import { GaiaPortfolio } from "../components/site/GaiaPortfolio";
import { GaiaTestimonials } from "../components/site/GaiaTestimonials";
import { GaiaProcess } from "../components/site/GaiaProcess";
import { GaiaCTA } from "../components/site/GaiaCTA";
import { GaiaFooter } from "../components/site/GaiaFooter";

/* ─── Custom cursor ──────────────────────────────────── */
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      posRef.current = { x: e.clientX, y: e.clientY };
    }

    function tick() {
      if (dotRef.current) {
        dotRef.current.style.left = `${posRef.current.x}px`;
        dotRef.current.style.top = `${posRef.current.y}px`;
      }
      // Ring follows with lag (lerp)
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

    // Attach to all interactive elements
    const interactives = document.querySelectorAll("a, button, [role='button'], .service-card, .pillar-card, .port-item");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
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

/* ─── Scroll Y ───────────────────────────────────────── */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const handler = () => setY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return y;
}

/* ─── Scroll reveal ──────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const selector = ".reveal, .reveal-left, .reveal-right";
    const els = document.querySelectorAll(selector);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Section scroll progress for parallax orbs ─────── */
function useParallaxOrbs() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const raf = { id: 0 };

    function tick() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height || 1)));
        section.style.setProperty("--scroll-progress", String(progress));
      });
      raf.id = requestAnimationFrame(tick);
    }

    raf.id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.id);
  }, []);
}

const Index = () => {
  const scrollY = useScrollY();
  useReveal();
  useParallaxOrbs();

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <CustomCursor />
      <GaiaNavbar solid={scrollY > 60} />
      <main id="main-content">
        <GaiaHero scrollY={scrollY} />
        <GaiaMarquee />
        <GaiaServices />
        <GaiaDNA />
        <GaiaPillars />
        <GaiaPortfolio />
        <GaiaTestimonials />
        <GaiaProcess />
        <GaiaCTA />
      </main>
      <GaiaFooter />
    </>
  );
};

export default Index;
