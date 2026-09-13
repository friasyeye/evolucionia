"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Servicios", href: "/servicios" },
  { label: "Casos de éxito", href: "/casos-de-exito" },
  { label: "Contacto", href: "/contacto" },
];

const CITA_HREF = "/cita";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  // Transparente solo mientras se esta sobre el hero a pantalla completa.
  // En paginas sin hero (o al hacer scroll) vuelve al fondo solido.
  const [overHero, setOverHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const update = () => {
      setOverHero(window.scrollY < hero.offsetHeight - 60);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const transparent = overHero && !open;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full text-white transition-colors duration-300",
        transparent ? "bg-transparent" : "backdrop-blur-sm"
      )}
      style={transparent ? undefined : { backgroundColor: "rgba(20,20,20,0.89)" }}
    >
      <div className="mx-auto flex h-[60px] w-full items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-tight text-[20px] font-semibold tracking-tight text-white">
          Evolucion IA
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] text-white/90 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={CITA_HREF}
          className="hidden items-center rounded-full border border-[#56c5f2] bg-[#56c5f2] px-5 py-2 text-[15px] text-white transition-colors hover:bg-transparent hover:text-[#56c5f2] lg:flex"
        >
          Diagnóstico gratuito
        </a>

        <button
          type="button"
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-2 lg:hidden"
        >
          <span
            className={cn(
              "block h-[2px] w-6 bg-white transition-transform",
              open && "translate-y-[7px] rotate-45"
            )}
          />
          <span className={cn("block h-[2px] w-6 bg-white transition-opacity", open && "opacity-0")} />
          <span
            className={cn(
              "block h-[2px] w-6 bg-white transition-transform",
              open && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 px-5 pb-5 lg:hidden"
          style={{ backgroundColor: "rgba(20,20,20,0.96)" }}
        >
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3 text-[16px] text-white/90"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CITA_HREF}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full border border-[#56c5f2] bg-[#56c5f2] px-5 py-2.5 text-[16px] text-white transition-colors hover:bg-transparent hover:text-[#56c5f2]"
          >
            Diagnóstico gratuito
          </a>
        </nav>
      )}
    </header>
  );
}
