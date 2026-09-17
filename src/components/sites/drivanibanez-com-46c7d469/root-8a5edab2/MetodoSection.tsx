import Image from "next/image";
import { Reveal } from "../shared/Reveal";
import { CountUp } from "../shared/CountUp";

const STATS = [
  { n: 24, suffix: "/7", label: "Activo, sin pausas" },
  { n: 95, suffix: "%", label: "Tareas resueltas sin intervención humana" },
  { n: 0, suffix: "", label: "decisiones importantes que toma sin ti " },
];

const TRUST_BLOCKS = [
  {
    n: "01",
    title: "Servidores en la Unión Europea",
    body: "Tus datos se alojan en servidores propios, dentro de la Unión Europea y bajo el marco del RGPD. No dependemos de infraestructura de terceros fuera de Europa para guardar lo que es tuyo, ni subcontratamos ese almacenamiento a nadie más.",
    img: "/images/servidoresjpg.jpg",
  },
  {
    n: "02",
    title: "Tú decides qué sale de tu negocio",
    body: "Cuando un proceso necesita apoyarse en un modelo externo como ChatGPT o Claude, decidimos contigo qué datos se envían y cuáles se quedan fuera antes de que el sistema empiece a funcionar. No es una decisión automática que toma el sistema por su cuenta.",
    img: "/images/datos.jpg",
  },
  {
    n: "03",
    title: "No te dejamos solos tras la entrega",
    body: "Un sistema de IA no se monta y se olvida. Revisamos periódicamente que siga funcionando bien, que siga conectado solo a lo que debe, y cerramos cualquier acceso o permiso que ya no haga falta antes de que se convierta en un problema.",
    img: "/images/mantenimiento.jpg",
  },
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
          Por qué esto no lo resuelve ChatGPT
        </Reveal>

        {/* intro two-column */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal className="order-2 flex items-end md:order-1">
            <p className="flex items-center gap-4 text-[16px] text-[#07357e]">
              <span className="h-px w-10 bg-[#56c5f2]" />
              Conectado. Independiente. Permanente.
            </p>
          </Reveal>

          <Reveal className="order-1 space-y-5 border-l border-[#07357e]/15 pl-6 text-[16px] leading-relaxed text-[#07357e] md:order-2 md:pl-10">
            <p>
              ChatGPT, Claude o cualquier otro modelo son herramientas potentes.
            </p>
            <p>
              Pero siguen siendo eso: herramientas que alguien tiene que abrir, usar y revisar.
            </p>
            <p className="font-semibold">
              Nosotros montamos sistemas a medida, integrados en tus procesos, que conectan tus
              herramientas y funcionan sin que nadie tenga que operarlos.
            </p>
            <p>Dos categorías distintas. Cada una con su función.</p>
          </Reveal>
        </div>

        {/* stats */}
        <div className="mt-24 grid grid-cols-3 gap-6 text-center">
          {STATS.map((s) => (
            <Reveal key={s.label}>
              <div className="font-tight text-[clamp(2.5rem,7vw,6.1rem)] font-semibold leading-none text-[#07357e]">
                <CountUp end={s.n} suffix={s.suffix} />
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
          Muchas empresas dudan antes de dar acceso a sus datos a un sistema de IA que no conocen ni controlan del todo, y con razón.
        </Reveal>

        {/* trust blocks: image + text, alternating sides */}
        {TRUST_BLOCKS.map((block, i) => (
          <div key={block.n} className="mt-20 grid items-center gap-10 md:grid-cols-2">
            <Reveal
              className={
                i % 2 === 1
                  ? "relative aspect-[4/3] overflow-hidden rounded-[6px] md:order-2"
                  : "relative aspect-[4/3] overflow-hidden rounded-[6px]"
              }
            >
              <Image
                src={block.img}
                alt={block.title}
                fill
                quality={85}
                sizes="(min-width: 768px) 580px, 100vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal
              className={
                i % 2 === 1
                  ? "space-y-4 text-[16px] leading-relaxed text-[#07357e] md:order-1"
                  : "space-y-4 text-[16px] leading-relaxed text-[#07357e]"
              }
              delay={120}
            >
              <p className="font-tight text-[15px] font-semibold tracking-wide text-[#0a6ea8]">
                {block.n} — {block.title}
              </p>
              <p>{block.body}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
