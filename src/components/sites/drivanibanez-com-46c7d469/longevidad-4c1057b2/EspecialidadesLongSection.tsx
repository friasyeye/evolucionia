import { asset } from "./assets";
import { Reveal } from "../shared/Reveal";

const PRUEBAS = [
  "Historia clínica deportiva",
  "Exploración cardiovascular y musculoesquelética",
  "Electrocardiograma",
  "Valoración del riesgo cardiovascular",
  "Certificados médicos deportivos",
  "Evaluación fisiológica avanzada",
  "Diagnóstico de edad biológica",
  'Terapias para optimización y longevidad. Medicina de las 6 "P": Predictiva, Preventiva, Personalizada, Participativa, Positiva y de Precisión',
];

export function EspecialidadesLongSection() {
  return (
    <section id="especialidades" className="w-full bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal className="text-[14px] font-medium uppercase tracking-[0.1em] text-[#56c5f2]">
          Entender antes de tratar
        </Reveal>
        <Reveal
          as="h2"
          className="font-tight mt-3 text-[clamp(2.4rem,4vw,3.4rem)] font-semibold leading-none text-[#07357e]"
        >
          Especialidades
        </Reveal>
        <Reveal className="mt-3 text-[17px] text-[#07357e]/80">
          No todos los cuerpos necesitan lo mismo.
        </Reveal>

        {/* Revisiones card */}
        <div className="mt-12 grid items-stretch gap-8 rounded-[12px] border border-[#07357e]/12 p-5 md:grid-cols-2 md:p-6">
          <Reveal className="overflow-hidden rounded-[10px]">
            <img
              src={asset("ChatGPT-Image-17-ago-2026-09_29_34-p.m-1024x576.png")}
              alt="Revisiones médicas deportivas"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </Reveal>
          <Reveal className="flex flex-col justify-center py-2">
            <h3 className="font-tight text-[clamp(1.5rem,2.2vw,2rem)] font-semibold text-[#07357e]">
              Revisiones médicas deportivas
            </h3>
            <p className="mt-2 text-[16px] font-medium text-[#56c5f2]">
              Valora cómo está tu cuerpo antes de exigirle más.
            </p>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[#07357e]/85">
              <p>
                No se trata solo de saber si puedes entrenar. Se trata de saber en qué punto estás,
                qué riesgos conviene descartar y cómo puedes seguir activo con más seguridad y más
                criterio.
              </p>
              <p>
                Esta revisión médica deportiva nos permite valorar tu estado general, detectar
                señales que en reposo pueden pasar desapercibidas y tomar decisiones más precisas
                sobre ejercicio, rendimiento y prevención.
              </p>
            </div>
            <a
              href="/cita"
              className="mt-6 inline-block self-start bg-[#07357e] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#f5f5f5] transition-colors hover:bg-[#052a66]"
            >
              Pedir cita
            </a>
          </Reveal>
        </div>

        {/* Pruebas list */}
        <Reveal className="mt-12">
          <h3 className="font-tight text-[20px] font-semibold text-[#07357e]">Pruebas diagnósticas</h3>
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {PRUEBAS.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-[#07357e]/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#56c5f2]" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
