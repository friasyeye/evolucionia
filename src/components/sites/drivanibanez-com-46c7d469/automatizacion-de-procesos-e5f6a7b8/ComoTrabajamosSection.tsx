import Image from "next/image";
import { Reveal } from "../shared/Reveal";

const TRUST_BLOCKS = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Antes de proponer nada, entendemos cómo funciona tu negocio hoy: qué procesos se repiten, dónde se pierde tiempo y qué herramientas ya usas. Como agencia de automatización, no partimos de una solución prefabricada — partimos de tu caso concreto.",
    img: "/images/servidoresjpg.jpg",
  },
  {
    n: "02",
    title: "Diseño del sistema",
    body: "Con esa información diseñamos el sistema de automatización de procesos que tiene sentido para ti: qué se automatiza primero, con qué herramientas y en qué orden. No son soluciones de automatización genéricas que sirven para cualquiera — está pensado para encajar con cómo ya trabajas tú.",
    img: "/images/datos.jpg",
  },
  {
    n: "03",
    title: "Implementación",
    body: "Construimos y conectamos el sistema a tus herramientas actuales — correo, documentos, CRM, lo que ya uséis. Llevamos tiempo montando sistemas de automatización para negocios distintos, así que sabemos qué conexiones son fiables y cuáles acaban dando problemas más adelante. Tu equipo sigue con lo suyo mientras nosotros montamos esto por detrás.",
    img: "/images/mantenimiento.jpg",
  },
  {
    n: "04",
    title: "Seguimiento",
    body: "Una vez en marcha, revisamos que el sistema siga funcionando bien y lo ajustamos si algo cambia en tu negocio. Como empresa de automatizaciones, no desaparecemos después de la entrega — seguimos ahí.",
    img: "/images/servidoresjpg.jpg",
  },
];

export function ComoTrabajamosSection() {
  return (
    <section className="w-full bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* statement: destacado + cuerpo, repetido dos veces */}
        <div className="max-w-[46ch] text-left">
          <Reveal
            as="p"
            className="font-tight text-[clamp(1.3rem,2.4vw,2.1rem)] font-semibold leading-[1.25] text-[#07357e] [text-wrap:balance]"
          >
            Automatizar un proceso es dejar de hacer a mano algo que ya se repite siempre igual.
          </Reveal>
          <Reveal as="p" className="mt-6 text-[18px] leading-relaxed text-[#07357e]/90">
            Rellenar el mismo documento. Mover un archivo de una carpeta a otra. Avisar a alguien
            cuando algo cambia. Actualizar la misma información en dos sitios distintos.
          </Reveal>
          <Reveal
            as="p"
            className="font-tight mt-10 text-[clamp(1.3rem,2.4vw,2.1rem)] font-semibold leading-[1.25] text-[#07357e] [text-wrap:balance]"
          >
            Si se puede describir paso a paso, se puede automatizar.
          </Reveal>
          <Reveal as="p" className="mt-6 text-[18px] leading-relaxed text-[#07357e]/90">
            Y nosotros nos encargamos de que pase solo, sin que nadie tenga que acordarse de
            hacerlo.
          </Reveal>
          <Reveal as="p" className="mt-6 text-[18px] leading-relaxed text-[#07357e]/90">
            Así lo hacemos, paso a paso:
          </Reveal>
        </div>

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
