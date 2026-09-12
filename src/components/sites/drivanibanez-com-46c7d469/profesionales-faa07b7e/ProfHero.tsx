import { asset } from "./assets";
import { Reveal } from "../shared/Reveal";

export function ProfHero() {
  return (
    <section
      className="relative w-full px-5 pt-28 pb-20 md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #052350 100%)" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal className="mb-5 text-[14px] font-light tracking-wide text-[#56c5f2]">
          Formación en Metabolismo e Hipoxia Intermitente.
        </Reveal>

        <div className="grid gap-8 md:grid-cols-[1.4fr_0.9fr] md:items-end">
          <Reveal
            as="h1"
            className="max-w-[18ch] text-[clamp(2.2rem,4.6vw,4rem)] font-normal leading-[1.05] text-white"
          >
            Si quieres mejores resultados en consulta,{" "}
            <span className="text-[#56c5f2]">necesitas mejores datos.</span>
          </Reveal>
          <Reveal className="flex flex-col items-start gap-6 md:items-end">
            <p className="max-w-[42ch] text-[16px] leading-relaxed text-white/85 md:text-right">
              Aprende a incorporar calorimetría indirecta e hipoxia intermitente a tu práctica clínica
              con criterio, seguridad y aplicación real.
            </p>
            <a
              href="#prof-lista"
              className="inline-block border border-white/50 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-[#07357e]"
            >
              Saber más
            </a>
          </Reveal>
        </div>

        <Reveal className="mt-12 overflow-hidden rounded-[10px]">
          <img
            src={asset("Dr-Ivan-Ibanez-Web-oficial-scaled.avif")}
            alt="Formación para profesionales sanitarios"
            className="aspect-[16/8] w-full object-cover"
          />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <Reveal
            as="h2"
            className="font-tight max-w-[16ch] text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-[1.05] text-white"
          >
            El problema no siempre es lo que pautas.
          </Reveal>
          <Reveal className="space-y-5 text-[16px] leading-relaxed text-white/85">
            <p>En consulta muchas veces estimamos.</p>
            <p>
              Estimamos gasto energético.
              <br />
              Estimamos requerimientos.
              <br />
              Estimamos respuesta metabólica.
            </p>
            <p className="font-semibold text-white">Pero estimar no es lo mismo que medir.</p>
            <p>
              Dos profesionales pueden pautar una intervención parecida y obtener resultados muy
              distintos. Uno ajusta con más precisión. El otro corrige sobre la marcha.
            </p>
            <p>
              La diferencia no suele estar en la teoría. Suele estar en el nivel de objetividad con el
              que se trabaja.
            </p>
            <p>
              Cuando incorporas herramientas como la calorimetría indirecta, reduces incertidumbre y
              puedes intervenir con más criterio, más seguridad y más precisión.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
