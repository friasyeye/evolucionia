import { ArrowRightIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "../shared/icons";

const MARQUEE = ["Longevidad", "Salud", "Ciencia", "Metabolismo"];

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
  { title: "Sobre mí", links: ["Sobre mí", "Pedir cita", "Eternal Medical Group", "Contacto"] },
  { title: "Formación", links: ["Cursos en directo", "Longevidad a tu ritmo", "Profesionales"] },
  {
    title: "Especialidades",
    links: ["Sobrepeso", "Obesidad", "Lipedema", "Longevidad", "Rendimiento", "Tratamiento del dolor"],
  },
  {
    title: "Recursos",
    links: [
      "Calculadora de salud",
      "Libro en español",
      "Libro en inglés",
      "Libro en portugués",
      "BiohackPro Longevity Drink",
      "Suplementación",
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
          <h2 className="font-tight text-[clamp(2.6rem,6vw,4.4rem)] font-semibold leading-[0.9] text-white/25">
            DR.
            <br />
            IVÁN
            <br />
            IBÁÑEZ
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-white/80 transition-colors hover:text-white">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/80 transition-colors hover:text-white">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white/80 transition-colors hover:text-white">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="max-w-[36ch] text-[15px] leading-relaxed text-white/80">
              ETERNAL MEDICAL GROUP, Carrer Heroïnes de Santa Bàrbara, 6, Planta 1 (EDIFICIO, 17004
              CLÍNICI ONYAR, Girona
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[15px] text-[#8fd3f7] transition-colors hover:text-white"
            >
              <ArrowRightIcon className="h-4 w-4" />
              Cómo llegar
            </a>
          </div>
        </div>

        {/* link columns */}
        <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/60">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[15px] text-white/85 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
              {col.title === "Recursos" && (
                <p className="mt-4 flex items-center gap-2 text-[13px] text-white/70">
                  <ArrowRightIcon className="h-4 w-4 text-[#8fd3f7]" />
                  Código descuento: <span className="font-semibold text-[#8fd3f7]">IBAÑEZ</span>
                </p>
              )}
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
          <p>©2026 · Colegiado 17/5487</p>
          <p>Diseño web by D.Lozano</p>
        </div>
      </div>

      {/* bottom marquee */}
      <div className="w-full overflow-hidden border-t border-white/10 py-8">
        <div
          className="di-marquee text-[clamp(2rem,5.5vw,4.5rem)] leading-none"
          aria-hidden
        >
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </footer>
  );
}
