"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../shared/Reveal";

export function CaseStudyClosingSection({ pitch }: { pitch: ReactNode }) {
  const ref = useRef<HTMLElement | null>(null);
  // Progreso del gradiente: empieza casi todo azul y se aclara según se
  // hace scroll por la sección, hasta llegar al mismo aspecto de siempre.
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 al entrar por abajo, 1 cuando la sección ya ha subido una pantalla.
      const p = (vh - rect.top) / vh;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // La parada blanca arranca en 40% (mucho más azul) y sube hasta 100%
  // (el gradiente de siempre) según avanza el scroll.
  const whiteStop = 40 + progress * 60;

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-between px-5 py-16 md:px-8"
      style={{ background: `linear-gradient(180deg, #07357e 0%, #f5f5f5 ${whiteStop}%)` }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal
          as="h2"
          className="font-tight max-w-[40ch] text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.15] text-white"
        >
          {pitch}
        </Reveal>
      </div>

      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <a
            href="/contacto"
            className="font-tight block text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.15] text-[#07357e] transition-colors hover:text-[#0a6ea8]"
          >
            Hablemos.
          </a>
        </Reveal>
      </div>
    </section>
  );
}
