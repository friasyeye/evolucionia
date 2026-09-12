import { asset } from "./assets";
import { Reveal } from "../shared/Reveal";
import { BoltIcon } from "../shared/icons";

const METAB = [
  {
    title: "Mayor oxidación de grasas",
    text: "Tolera mejor ciertas pautas nutricionales y responde de forma distinta a la carga física.",
  },
  {
    title: "Mayor dependencia de hidratos",
    text: "Necesita otro ajuste de nutrición, intensidad y recuperación.",
  },
];

export function ProfNoTodosSection() {
  return (
    <section className="w-full bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal
          as="h2"
          className="font-tight mx-auto max-w-[20ch] text-center text-[clamp(2rem,4.4vw,3.6rem)] font-semibold uppercase leading-[1.05] text-[#56c5f2]"
        >
          No todos tus pacientes responden igual.
        </Reveal>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[10px]">
            <img
              src={asset("DSF3896.avif")}
              alt="Formación en metabolismo e hipoxia"
              className="aspect-[4/5] w-full object-cover md:aspect-[4/4]"
            />
          </Reveal>

          <div>
            <Reveal className="space-y-4 text-[16px] leading-relaxed text-[#07357e]">
              <p>Dos pacientes pueden seguir pautas parecidas y obtener resultados muy distintos.</p>
              <p>
                No porque uno se adhiera más que el otro, sino porque su metabolismo no funciona igual.
              </p>
              <p>
                Por eso,{" "}
                <strong className="font-semibold">
                  antes de ajustar la nutrición, el ejercicio o la estrategia terapéutica, aprendes a
                  medir cómo está funcionando su metabolismo
                </strong>
                .
              </p>
              <p className="text-[15px] text-[#07357e]/80">
                Luego con una nutrición de precisión y con la Hipoxia intermitente es cuando existe la
                gran mejora. La hipoxia e hiperoxia intermitente es un entrenamiento respiratorio
                realizado con un generador de hipoxia, que alterna de forma controlada periodos con
                menor y mayor concentración de oxígeno. Su objetivo es estimular los mecanismos de
                adaptación del organismo, mejorar la eficiencia metabólica y celular y aumentar la
                tolerancia al estrés fisiológico.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {METAB.map((m) => (
                <Reveal key={m.title}>
                  <div className="h-full rounded-[6px] border border-[#07357e]/20 p-5">
                    <div className="flex items-center gap-2">
                      <BoltIcon className="h-5 w-5 text-[#56c5f2]" />
                      <h3 className="font-tight text-[17px] font-semibold text-[#07357e]">
                        {m.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#07357e]/80">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
