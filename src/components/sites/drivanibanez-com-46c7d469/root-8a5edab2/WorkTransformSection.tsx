import { ArrowRightIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Entra el trabajo",
    body: "Un email, un formulario, un documento, un mensaje. Lo que ya recibes cada día.",
  },
  {
    n: "2",
    title: "El sistema lo entiende y actúa",
    body: "Lee, clasifica, redacta, actualiza, responde o avisa. Según lo que definamos contigo.",
  },
  {
    n: "3",
    title: "Tu equipo decide",
    body: "Revisa lo que importa y se queda con la parte que requiere criterio.",
  },
];

export function WorkTransformSection() {
  return (
    <section
      className="relative w-full px-5 pt-24 pb-24 md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #040404 100%)" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Heading (h2) + body copy read as one continuous paragraph visually
            — same size/line-height/max-width, no gap between them — while
            staying two separate semantic elements (h2 + p) for SEO/structure. */}
        <Reveal className="max-w-[42ch] text-[clamp(1.6rem,2.6vw,2.4rem)] font-normal leading-[1.35]">
          <h2 className="inline text-[#56c5f2]">
            Tu equipo no es lento. Está haciendo trabajo que no debería hacer una persona.{" "}
          </h2>
          <p className="inline text-white/90">
            Copiar datos de un sitio a otro, rehacer el mismo documento, perseguir información entre carpetas y correos. Alguien tiene que hacerlo, sí. Pero no quien aporta el criterio y la creatividad que ninguna IA va a sustituir
          </p>
        </Reveal>

        {/* horizontal panel */}
        <Reveal className="mt-16">
          <div
            className="flex flex-col overflow-hidden rounded-[4px] lg:flex-row"
            style={{ background: "linear-gradient(120deg, #ffffff 0%, #eaf6fd 50%, #d6edfb 100%)" }}
          >
            {/* left: title, CTA, 3-step row */}
            <div className="flex-1 p-8 md:p-10">
              <h3 className="font-tight text-[clamp(1.3rem,2vw,1.7rem)] font-normal leading-tight text-[#0a2a5e]">
                En qué se convierte ese trabajo
              </h3>

              <a
                href="/cita"
                className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[#0a2a5e] bg-transparent px-5 py-2.5 text-[14px] font-medium text-[#0a2a5e] transition-colors hover:bg-[#0a2a5e] hover:text-white"
              >
                Calcula tu ahorro
                <ArrowRightIcon className="h-4 w-4 -rotate-45 text-[#0a2a5e] transition-colors group-hover:text-white" />
              </a>

              <div className="mt-10 grid gap-x-6 gap-y-5 sm:grid-cols-3">
                {STEPS.map((step) => (
                  <div key={step.n}>
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0a6ea8]/10 text-[11px] font-semibold text-[#0a6ea8]">
                        {step.n}
                      </span>
                      <p className="text-[13px] font-semibold tracking-wide text-[#0a2a5e]">
                        {step.title}
                      </p>
                    </div>
                    <p className="mt-1.5 text-[14px] leading-snug text-[#0a2a5e]/70">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* right: quote */}
            <div className="flex flex-col justify-end p-8 md:p-10 lg:w-[380px] lg:shrink-0">
              <div className="border-t border-[#0a2a5e]/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
                <p className="text-[14px] leading-snug text-[#0a2a5e]/90">
                  &ldquo;Estábamos hartos de copiar y pegar datos en plantillas que siempre se
                  descuadraban. Con este sistema, la información de la visita se estructura sola y
                  sin errores.&rdquo;
                </p>
                <p className="mt-4 text-[13px] font-semibold text-[#0a2a5e]">
                  — MAO, Estudio de Arquitectura
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
