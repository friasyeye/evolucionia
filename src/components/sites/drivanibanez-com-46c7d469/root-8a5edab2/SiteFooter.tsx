import { ArrowRightIcon } from "../shared/icons";

const MARQUEE = ["Automatización", "IA", "Procesos", "Conectividad"];

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center">
      {MARQUEE.map((w) => (
        <span key={w} className="flex items-center">
          <span className="px-6 font-light text-white/40">·</span>
          <span className="font-light text-white/90 whitespace-nowrap">{w}</span>
        </span>
      ))}
    </div>
  );
}

const COLUMNS = [
  {
    title: "Empresa",
    links: [
      { label: "Servicios", href: "/servicios" },
      { label: "Casos de éxito", href: "/casos-de-exito" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Automatización de procesos", href: "/servicios" },
      { label: "Chatbots", href: "/servicios" },
      { label: "Agentes de IA", href: "/servicios" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      className="relative w-full overflow-hidden text-white"
      style={{ background: "radial-gradient(120% 100% at 20% 0%, #0a4aa0 0%, #07357e 40%, #041c44 100%)" }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8">
        {/* top block */}
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="font-tight text-[clamp(2.6rem,6vw,4.4rem)] font-semibold leading-[0.9] whitespace-nowrap text-white/25">
            EVOLUCIÓN IA
          </h2>

          <div className="flex flex-col gap-6">
            <p className="max-w-[36ch] text-[15px] leading-relaxed text-white/80">
              Montamos servicios de IA para empresas, simples de usar y fiables, que trabajan por
              detrás mientras tu equipo decide.
            </p>
            <a
              href="https://calendar.app.google/cde2o1czTcgHYRyz5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] text-[#8fd3f7] transition-colors hover:text-white"
            >
              <ArrowRightIcon className="h-4 w-4" />
              Pide tu diagnóstico gratuito
            </a>
          </div>
        </div>

        {/* link columns */}
        <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/60">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[15px] text-white/85 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-5 py-5 text-[11px] uppercase tracking-wide text-white/60 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Aviso legal</a>
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
          <p>©2026 Evolución IA</p>
          <a
            href="https://pulsarstudioo.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Diseño web by Pulsar Studio
          </a>
        </div>
      </div>

      {/* bottom marquee */}
      <div className="w-full overflow-hidden border-t border-white/10 py-8">
        <div
          className="di-marquee text-[clamp(2rem,5.5vw,4.5rem)] leading-none"
          aria-hidden
        >
          {/* 4 copias (no 2): con solo dos, en pantallas anchas cada mitad
              del recorrido no llega a cubrir el viewport y se ve un hueco
              vacío antes de que entre la siguiente copia. La animación sigue
              moviéndose -50% del ancho total, así que el bucle sigue siendo
              perfecto con cualquier número par de copias. */}
          <MarqueeRow />
          <MarqueeRow />
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </footer>
  );
}
