import { asset } from "../shared/assets";
import { Reveal } from "../shared/Reveal";
import { CountUp } from "../shared/CountUp";

const STATS = [
  { n: 261, label: "Análisis cada año" },
  { n: 60, label: "Minutos por prueba" },
  { n: 23, label: "Años de experiencia" },
];

export function MetodoSection() {
  return (
    <section id="metodo" className="w-full bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* big heading */}
        <Reveal
          as="h2"
          className="font-tight max-w-[13ch] text-[clamp(2.8rem,7vw,6.1rem)] font-semibold leading-[0.95] text-[#07357e]"
        >
          Qué es el Método Metabólico®
        </Reveal>

        {/* intro two-column */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal className="flex items-end">
            <p className="flex items-center gap-4 text-[16px] text-[#07357e]">
              <span className="h-px w-10 bg-[#56c5f2]" />
              Preciso. Científico. Efectivo.
            </p>
          </Reveal>

          <Reveal className="space-y-5 border-l border-[#07357e]/15 pl-6 text-[16px] leading-relaxed text-[#07357e] md:pl-10">
            <p className="font-semibold">
              Cada cuerpo responde de forma distinta a la alimentación, al ejercicio y al estrés.
            </p>
            <p>
              Imagina que, en lugar de probar otra dieta o entrenar más duro,{" "}
              <strong className="font-semibold">
                primero analizamos cómo tu cuerpo utiliza la energía
              </strong>
              .
            </p>
            <p>
              Descubrimos cuánto gastas en reposo, qué combustible usas mejor y a qué intensidad
              quemas más grasa.
            </p>
            <p>
              Con esos datos{" "}
              <strong className="font-semibold">
                diseñamos una estrategia de nutrición y ejercicio 100% personalizada
              </strong>{" "}
              y exclusiva para ti.
            </p>
            <p>
              Eso es{" "}
              <strong className="font-semibold">
                el Método Metabólico del Dr. Ibáñez: un sistema médico registrado que mide tu
                metabolismo antes de pautar nada.
              </strong>
            </p>
            <p>Así, las decisiones dejan de ser genéricas y pasan a ser precisas, coherentes y optimizadas para ti.</p>
            <p>
              Porque <strong className="font-semibold">el problema no es tu esfuerzo</strong>, es no
              saber cómo funciona tu cuerpo.
            </p>
          </Reveal>
        </div>

        {/* stats */}
        <div className="mt-24 grid grid-cols-3 gap-6 text-center">
          {STATS.map((s) => (
            <Reveal key={s.label}>
              <div className="font-tight text-[clamp(2.5rem,7vw,6.1rem)] font-semibold leading-none text-[#07357e]">
                <CountUp end={s.n} />
              </div>
              <div className="mt-3 text-[15px] font-semibold text-[#07357e] md:text-[16px]">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>

        {/* centered statement */}
        <Reveal
          as="p"
          className="font-tight mx-auto mt-24 max-w-[22ch] text-center text-[clamp(1.9rem,4.4vw,3.6rem)] font-semibold leading-[1.05] text-[#07357e]"
        >
          Durante años, muchas personas han pasado por consulta después de probar dietas, métodos o
          promesas que no entendían su cuerpo.
        </Reveal>

        {/* diff + watch image */}
        <div className="mt-20 grid items-center gap-10 md:grid-cols-2">
          <Reveal className="space-y-6 text-[16px] leading-relaxed text-[#07357e]">
            <p className="font-semibold">Aquí ocurre algo diferente.</p>
            <div className="space-y-1">
              <p>Aquí se mide.</p>
              <p>Aquí se explica.</p>
              <p>Aquí se acompaña.</p>
            </div>
            <p className="text-[#07357e]/80">Y así...</p>
            <p>
              Pacientes que llegan con frustración, salen entendiendo qué ocurre realmente en su
              metabolismo y, gracias a ello, recuperan energía, claridad y calidad de vida.
            </p>
          </Reveal>
          <Reveal className="overflow-hidden rounded-[6px]">
            <img
              src={asset("metodo-metabolico-ivan-ibanez-1536x962.avif")}
              alt="Método Metabólico"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>

        {/* blue image + copy */}
        <div className="mt-20 grid items-center gap-10 md:grid-cols-2">
          <Reveal className="order-2 overflow-hidden rounded-[6px] md:order-1">
            <img
              src={asset("antiaging-longevidad-1-1024x683.avif")}
              alt="Antiaging y longevidad"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal className="order-1 space-y-6 text-[16px] leading-relaxed text-[#07357e] md:order-2">
            <p>
              Personas que conviven con obesidad, sobrepeso o lipedema durante años encuentran, por
              fin, un enfoque que lo comprende y lo mide.
            </p>
            <p>
              Quienes quieren mantener su ritmo de vida con energía estable, foco mental y un cuerpo
              que responda, descubren cómo hacerlo.
            </p>
          </Reveal>
        </div>

        {/* closing */}
        <Reveal className="mt-20 space-y-6 text-[16px] leading-relaxed text-[#07357e]">
          <p>Porque la medicina no es solo prescribir.</p>
          <div className="space-y-1">
            <p>Es escuchar.</p>
            <p>Es interpretar.</p>
            <p>Es personalizar.</p>
          </div>
          <p className="font-semibold">Profesionalidad y humanidad no deberían ser excepcionales.</p>
          <p className="font-tight text-[clamp(1.4rem,2.5vw,2rem)] font-semibold">Aquí son la base.</p>
        </Reveal>
      </div>
    </section>
  );
}
