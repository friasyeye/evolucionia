import { Reveal } from "../shared/Reveal";

const MEDIMOS = [
  { n: "01", text: "Cuánta energía consumes realmente." },
  { n: "02", text: "Si utilizas mejor grasas o hidratos." },
  { n: "03", text: "A qué intensidad tu cuerpo empieza a quemar grasa de forma eficiente." },
];

export function MetodoLongSection() {
  return (
    <section
      id="metodo-long"
      className="w-full px-5 py-24 md:px-8"
      style={{ background: "linear-gradient(180deg, #191919 0%, #07357e 100%)" }}
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <Reveal
          as="h2"
          className="font-tight mx-auto max-w-[16ch] text-center text-[clamp(2.2rem,4.6vw,3.8rem)] font-semibold leading-[1.03] text-[#56c5f2]"
        >
          Método Metabólico® — Qué es y por qué funciona
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-[620px] space-y-2 text-center text-[17px] text-white/85">
          <p>No todas las personas responden igual al ejercicio.</p>
          <p>No todas necesitan el mismo tratamiento para el dolor.</p>
          <p>Y no todas envejecen igual.</p>
        </Reveal>

        <div className="mx-auto mt-16 max-w-[820px] rounded-[12px] border border-white/15 bg-white/[0.04] p-8 md:p-12">
          <Reveal className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#56c5f2]">
            En pocas palabras
          </Reveal>
          <Reveal className="mt-4 space-y-4 text-[16px] leading-relaxed text-white/90">
            <p>
              El Método Metabólico® empieza por algo muy simple: Antes de cambiar tu comida o tus
              hábitos, miramos cómo está funcionando tu cuerpo.
            </p>
            <p>
              Para ello, te hacemos una <strong className="font-semibold">calorimetría indirecta</strong>.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-tight text-[20px] font-semibold text-white">
              ¿Qué medimos con esta prueba médica?
            </h3>
            <a
              href="/cita"
              className="inline-block shrink-0 bg-[#56c5f2] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#07357e] transition-colors hover:bg-white"
            >
              Pedir cita ahora
            </a>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {MEDIMOS.map((m) => (
              <Reveal key={m.n}>
                <div className="font-tight text-[40px] font-semibold leading-none text-[#56c5f2]">
                  {m.n}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-white/85">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
