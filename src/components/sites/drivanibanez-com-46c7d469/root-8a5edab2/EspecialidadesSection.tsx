import { ArrowRightIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const CARDS = [
  { title: "Mao Studio", stat: "25h/mes", desc: "liberadas del trabajo administrativo de gestionar cada expediente a mano.", href: "/casos-de-exito/mao-studio" },
  { title: "Renovamarin", stat: "70%", desc: "menos tiempo buscando cómo se resolvió algo en un proyecto anterior.", href: "/casos-de-exito/montea-arquitectura" },
  { title: "Obras Insignia", stat: "90%", desc: "menos tiempo dedicado a bajar y subir fotos de obra cada día.", href: "/casos-de-exito/obras-insignia" },
  { title: "Eko Tour Tennis Academy", stat: "85%", desc: "menos errores en la documentación de cada inscripción.", href: "/casos-de-exito/eko-tour" },
  { title: "Decor Revestimientos", stat: "~7h/semana", desc: "menos dedicadas a preparar cada presupuesto.", href: "/casos-de-exito/decor-revestimientos" },
];

export function EspecialidadesSection() {
  return (
    <section
      id="especialidades"
      className="w-full px-5 py-24 md:px-8"
      style={{ background: "linear-gradient(135deg, #0a3f8f 0%, #1e5bb0 55%, #3f86cf 100%)" }}
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 md:grid-cols-[0.9fr_1.4fr]">
        {/* sticky title */}
        <div>
          <h2 className="font-tight sticky top-24 text-[clamp(2.6rem,4vw,3.6rem)] font-semibold leading-none text-[#f5f5f5]">
            Resultados
          </h2>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-6">
          {CARDS.map((card) => (
            <Reveal key={card.title}>
              <a href={card.href} className="block h-full">
                <article className="flex h-full min-h-[280px] flex-col rounded-[4px] border border-white/25 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.06] md:p-10">
                  <div className="-mx-2 -mt-2 flex items-start justify-between gap-4 md:-mx-4">
                    <h3 className="font-tight text-[19px] font-semibold leading-tight text-[#f5f5f5]">
                      {card.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#8fd3f7]/50 text-[#8fd3f7]">
                      <ArrowRightIcon className="h-4 w-4 -rotate-45" />
                    </span>
                  </div>
                  <p className="font-tight mt-auto pt-10 text-[clamp(2.2rem,3.4vw,2.8rem)] font-semibold leading-none text-[#f5f5f5]">
                    {card.stat}
                  </p>
                  <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-white/75">
                    {card.desc}
                  </p>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
