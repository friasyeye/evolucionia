import { asset } from "./assets";
import { Reveal } from "../shared/Reveal";

const CARDS = [
  {
    img: "EDF6B1F7-875B-4957-89FD-41FD3622ECAD_4_5005_c.jpeg",
    title: "Menos estimación",
    text: 'Cuando dejas de trabajar con fórmulas teóricas y empiezas a medir metabolismo real, puedes ajustar con más precisión nutrición, ejercicio y estrategia clínica. Con la Hipoxia e Hiperoxia Intermitente aplicada como precondicionamiento clínico ayudará a rehabilitar el metabolismo. La hipoxia intermitente es un "mimético" del ejercicio físico.',
  },
  {
    img: "Telemedicina-1-1024x682.avif",
    title: "Más diferenciación clínica",
    text: "Incorporar calorimetría indirecta e hipoxia intermitente te permite ofrecer un servicio más objetivo, más seguro y más difícil de sustituir.",
  },
  {
    img: "profesionales-perfil-1.avif",
    title: "Más seguridad al aplicar",
    text: "Aprender a medir no solo mejora la precisión. También te ayuda a integrar estas tecnologías con más criterio, menos dudas y más seguridad para ti y para tus pacientes.",
  },
];

export function ProfRealidadSection() {
  return (
    <section className="w-full bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal className="mb-4 text-[14px] font-medium uppercase tracking-[0.1em] text-[#56c5f2]">
            Una realidad:
          </Reveal>
          <Reveal
            as="h2"
            className="font-tight text-[clamp(1.9rem,3.4vw,2.8rem)] font-semibold leading-[1.08] text-[#07357e]"
          >
            Formación en Metabolismo e Hipoxia Intermitente — qué cambia cuando trabajas con datos
            reales.
          </Reveal>
          <Reveal className="mt-6 text-[16px] leading-relaxed text-[#07357e]/85">
            En consulta, muchas veces no falta conocimiento. Lo que falta es medir, interpretar y
            ajustar con más objetividad.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {CARDS.map((c) => (
            <Reveal key={c.title} className="flex flex-col">
              <div className="overflow-hidden rounded-[10px]">
                <img src={asset(c.img)} alt={c.title} className="aspect-[4/3] w-full object-cover" />
              </div>
              <h3 className="font-tight mt-6 text-[clamp(1.3rem,1.8vw,1.6rem)] font-semibold leading-tight text-[#07357e]">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#07357e]/80">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
