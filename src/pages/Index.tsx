import { useEffect, useState, useRef } from "react";
import { GaiaNavbar } from "../components/site/GaiaNavbar";
import { GaiaHero } from "../components/site/GaiaHero";
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

/* ─── Scroll Y + direction ───────────────────────────── */
function useScroll() {
  const [y, setY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const prevY = useRef(0);
  useEffect(() => {
    const handler = () => {
      const cur = window.scrollY;
      const goingDown = cur > prevY.current;
      // Cache la nav en scrollant vers le bas (passé 80 px), réaffiche en remontant
      if (cur <= 80) {
        setHidden(false);
      } else if (goingDown) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      prevY.current = cur;
      setY(cur);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return { y, hidden };
}

/* ─── Subtitle width = h2 longest line ──────────────────── */
function useSyncSubtitleWidth() {
  useEffect(() => {
    function run() {
      document.querySelectorAll<HTMLElement>(".section-header").forEach((hdr) => {
        const h2 = hdr.querySelector<HTMLHeadingElement>("h2");
        const sub = hdr.querySelector<HTMLElement>(".section-sub");
        if (!h2 || !sub) return;

        // Probe with h2's exact font to measure each line separately
        const cs = getComputedStyle(h2);
        const probe = document.createElement("span");
        probe.style.cssText =
          `position:fixed;top:-9999px;left:0;visibility:hidden;` +
          `pointer-events:none;white-space:nowrap;` +
          `font-family:${cs.fontFamily};font-size:${cs.fontSize};` +
          `font-weight:${cs.fontWeight};letter-spacing:${cs.letterSpacing};`;
        document.body.appendChild(probe);

        let targetW = 0;
        h2.childNodes.forEach((n) => {
          if (n.nodeType !== Node.TEXT_NODE || !n.textContent?.trim()) return;
          probe.textContent = n.textContent;
          const w = probe.getBoundingClientRect().width;
          if (w > targetW) targetW = w;
        });
        document.body.removeChild(probe);
        if (targetW <= 0) return;

        // Scale sub font so it fills exactly targetW on one line
        sub.style.fontSize = "";
        sub.style.whiteSpace = "nowrap";
        sub.style.maxWidth = "";
        const cssFS = parseFloat(getComputedStyle(sub).fontSize) || 15;
        const naturalW = sub.scrollWidth;
        if (naturalW <= 0) return;

        const scaled = cssFS * (targetW / naturalW);
        sub.style.fontSize = `${Math.max(8, scaled)}px`;
        sub.style.maxWidth = `${Math.ceil(targetW)}px`;
      });
    }

    document.fonts.ready.then(run);
    window.addEventListener("resize", run, { passive: true });
    return () => window.removeEventListener("resize", run);
  }, []);
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
  const { y: scrollY, hidden: navHidden } = useScroll();
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  useReveal();
  useParallaxOrbs();

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const io = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <CustomCursor />
      <GaiaNavbar />
      <main id="main-content">
        <GaiaHero scrollY={scrollY} />
        <div className="gaia-bridge">
          <p className="gaia-bridge-text reveal">
            Derrière chaque marque se cache une histoire,<br />
            et chez Gaïa nous la transformons<br />
            en une <span style={{ color: "var(--orange)" }}>identité forte</span>
          </p>
        </div>
        <GaiaServices />
        <GaiaPortfolio />
        <GaiaDNA />
        <GaiaPillars />
        <GaiaProcess />
        <GaiaTestimonials />
        <GaiaCTA />
      </main>
      <GaiaFooter ref={footerRef} />
    </>
  );
};

export default Index;
