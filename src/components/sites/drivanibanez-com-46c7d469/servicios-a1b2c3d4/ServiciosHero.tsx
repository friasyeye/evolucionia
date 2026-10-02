import Image from "next/image";
import { PlusIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const CARDS = [
  {
    img: "/images/logos/card-automatizacion-procesos.jfif",
    title: "Automatización de procesos",
    body: "El trabajo que siempre se hace igual, hecho sin que nadie lo haga.",
    href: "/servicios/automatizacion-de-procesos",
  },
  {
    img: "/images/logos/card-chatbots.png",
    imgPosition: "25% center",
    title: "Chatbots",
    body: "Las preguntas que ya respondes cada día, respondidas sin que estés.",
    href: "/servicios",
  },
  {
    img: "/images/logos/card-agentes-ia.jpg",
    title: "Agentes de IA",
    body: "Las decisiones de siempre, tomadas sin que nadie pare a tomarlas.",
    href: "/servicios",
  },
];

export function ServiciosHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[200svh] w-full flex-col px-5 pt-28 pb-20 md:px-8"
      style={{
        background:
          "radial-gradient(60% 50% at 55% 45%, rgba(3,15,40,0.65) 0%, rgba(3,15,40,0) 70%), linear-gradient(180deg, #020d24 0%, #07357e 100%)",
      }}
    >
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col">
        <Reveal
          as="h1"
          className="font-tight max-w-[26ch] text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[1.05] text-white"
        >
          Quítale trabajo repetitivo a tu equipo — con criterio técnico.
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_0.9fr] md:items-end">
          <Reveal className="max-w-[52ch] text-[16px] leading-relaxed text-[#56c5f2]">
            Antes de automatizar un proceso, montar un chatbot o construir un sistema a medida con
            IA, miramos cómo funciona tu negocio para saber qué merece la pena cambiar de verdad.
          </Reveal>

          {/* caja destacada: línea corta que termina en el borde derecho del
              contenedor + conector vertical que se une a ella en la esquina y
              cubre el arranque del texto */}
          <Reveal className="relative ml-auto w-fit pt-3 pl-4">
            <span className="absolute top-0 right-0 left-0 h-[2px] bg-[#56c5f2]" />
            <span className="absolute top-0 left-0 h-14 w-[2px] bg-[#56c5f2]" />
            <p className="max-w-[24ch] text-[14px] font-semibold tracking-wide text-[#56c5f2]">
              Personalizado. Hecho a medida.
            </p>
          </Reveal>
        </div>

        {/* línea larga hasta el final de las cards */}
        <div className="mt-4 border-t-[2px] border-[#56c5f2]" />

        {/* service cards (en vez de la imagen de referencia) */}
        <Reveal className="mt-12">
          <div className="grid gap-5 md:grid-cols-3">
            {CARDS.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group relative block aspect-[3/4] w-full overflow-hidden rounded-[2px]"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  quality={85}
                  sizes="(min-width: 768px) 380px, 100vw"
                  style={card.imgPosition ? { objectPosition: card.imgPosition } : undefined}
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/50 transition-colors duration-500 group-hover:from-black/70" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#07357e]/60 to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
                  <PlusIcon className="h-7 w-7 text-white" />
                  <span className="flex items-center gap-3 text-[17px] text-white">
                    <span className="h-px w-8 bg-[#56c5f2]" />
                    Explorar
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-tight text-[clamp(1.4rem,1.8vw,1.7rem)] font-light leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/75">{card.body}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* statement block */}
        <Reveal
          as="h2"
          className="font-tight mt-16 max-w-[22ch] text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold leading-[1.15] text-white"
        >
          Muchas empresas empiezan a usar IA sin saber qué retorno les va a traer, ni qué sistema
          hay detrás funcionando de verdad.
        </Reveal>

        <Reveal className="mt-10 max-w-[60ch] space-y-5 text-[16px] leading-relaxed text-white/85">
          <p>
            Nuestro enfoque es distinto. Antes de meter IA en nada, miramos si de verdad hace
            falta y qué resultado real va a dar.
          </p>
          <p>
            Solo si tiene sentido, decidimos contigo qué automatizar primero y con qué
            herramientas — sin tocar lo que ya funciona bien. Porque no se trata de automatizar
            por automatizar.
          </p>
          <p>Se trata de tomar mejores decisiones, con un retorno medible detrás.</p>
        </Reveal>

        <Reveal className="mt-10">
          <a
            href="https://calendar.app.google/cde2o1czTcgHYRyz5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-[0.95rem] font-medium text-[#07357e] transition-colors hover:bg-white/85"
          >
            Hablemos
          </a>
        </Reveal>
      </div>
    </section>
  );
}
