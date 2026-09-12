import { asset } from "./assets";
import { Reveal } from "../shared/Reveal";

const BENEFITS = [
  "Comprende exactamente cómo responde tu cuerpo para dejar de probar cosas al azar y empezar a tomar decisiones que realmente funcionan.",
  "Toma decisiones sobre tu salud con criterio y tranquilidad, sin depender de modas, dietas contradictorias o recomendaciones genéricas.",
  "Descubre qué hacer… y qué evitar, para no perder tiempo ni energía en estrategias que no encajan con tu metabolismo.",
  "Recibe acompañamiento médico basado en datos reales, no en suposiciones ni tendencias, para avanzar con seguridad en tu proceso de salud.",
];

export function BenefitsSection() {
  return (
    <section
      className="w-full px-5 py-24 md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #191919 100%)" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal
          as="h2"
          className="font-tight mx-auto max-w-[22ch] text-center text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-[1.1] text-white"
        >
          El problema suele ser que se aplican soluciones genéricas a un metabolismo que es único.
        </Reveal>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[10px]">
            <img
              src={asset("Dr-Ivan-Ibanez-Consulta-vertical-150.avif")}
              alt="Consulta Dr. Iván Ibáñez"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>

          <ol className="flex flex-col gap-8">
            {BENEFITS.map((b, i) => (
              <Reveal as="li" key={i} delay={i * 80} className="flex gap-5">
                <span className="font-tight text-[22px] font-semibold text-[#56c5f2]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[16px] leading-relaxed text-white/85">{b}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
