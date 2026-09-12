import { Reveal } from "../shared/Reveal";

const STEPS = [
  {
    icon: "/images/icon-step-diagnostico.svg",
    title: "Diagnóstico",
    body: "Media hora de videollamada para ver cómo se mueve el trabajo en tu empresa. No proponemos nada que no hayamos entendido antes.",
  },
  {
    icon: "/images/icon-step-propuesta.svg",
    title: "Propuesta",
    body: "Qué se automatiza, en qué orden, cuánto tarda y cuánto cuesta. Lo sabes todo antes de decidir.",
  },
  {
    icon: "/images/icon-step-montaje.svg",
    title: "Montaje",
    body: "Lo construimos y lo conectamos a tus herramientas. Tu equipo sigue con lo suyo.",
  },
  {
    icon: "/images/icon-step-en-marcha.svg",
    title: "En marcha",
    body: "Se queda funcionando sin que nadie tenga que acordarse de él. Si algo cambia por tu parte, lo ajustamos.",
  },
];

export function BioSection() {
  return (
    <section className="w-full bg-white px-5 pb-16 md:px-8">
      <div className="mx-auto grid w-full max-w-[1200px] items-stretch gap-10 md:grid-cols-[1.1fr_1fr]">
        {/* portrait */}
        <Reveal className="relative min-h-[420px] w-full overflow-hidden">
          <img
            src="/images/bio-portrait-background.jfif"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <img
            src="/images/bio-system-diagram.png"
            alt="Diagrama del sistema"
            className="absolute inset-0 m-auto w-[95%] max-w-[560px] object-contain"
          />
        </Reveal>

        {/* content */}
        <div className="flex flex-col">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 80}
              className="border-b border-[#07357e]/10 py-6 first:pt-0 last:border-b-0"
            >
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="h-5 w-5 shrink-0 bg-[#56c5f2]"
                  style={{
                    WebkitMaskImage: `url(${step.icon})`,
                    maskImage: `url(${step.icon})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
                <p className="text-[13px] font-semibold tracking-wide text-[#0a6ea8]">
                  {step.title}
                </p>
              </div>
              <p className="mt-2 max-w-[46ch] text-[16px] leading-relaxed text-[#07357e]/80">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
