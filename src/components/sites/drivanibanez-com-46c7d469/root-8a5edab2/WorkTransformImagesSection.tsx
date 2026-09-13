import { PlusIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const CARDS = [
  {
    img: "/images/logos/card-automatizacion-procesos.jfif",
    title: "Automatización de procesos",
    body: "El trabajo que siempre se hace igual, hecho sin que nadie lo haga.",
  },
  {
    img: "/images/logos/card-chatbots.png",
    imgPosition: "25% center",
    title: "Chatbots",
    body: "Las preguntas que ya respondes cada día, respondidas sin que estés.",
  },
  {
    img: "/images/logos/card-agentes-ia.jpg",
    title: "Agentes de IA",
    body: "Las decisiones de siempre, tomadas sin que nadie pare a tomarlas.",
  },
];

export function WorkTransformImagesSection() {
  return (
    <section
      className="relative w-full px-5 pt-24 pb-24 md:px-8"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #ffffff 70%, #eaf6fd 100%)" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal
          as="h2"
          className="font-tight max-w-[32ch] text-[clamp(2rem,3vw,2.6rem)] font-semibold leading-[1.05] text-[#07357e]"
        >
          Montamos servicios de IA para empresas, simples de usar y fiables, que trabajan por detrás mientras tu equipo decide.
        </Reveal>

        {/* explorar cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {CARDS.map((card) => (
            <Reveal key={card.title}>
              <a
                href="#especialidades"
                className="group relative block aspect-[3/4] w-full overflow-hidden rounded-[2px]"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={card.imgPosition ? { objectPosition: card.imgPosition } : undefined}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/50 transition-colors duration-500 group-hover:from-black/70" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#07357e]/60 to-transparent" />
                {/* top row */}
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
                  <PlusIcon className="h-7 w-7 text-white" />
                  <span className="flex items-center gap-3 text-[17px] text-white">
                    <span className="h-px w-8 bg-[#56c5f2]" />
                    Explorar
                  </span>
                </div>
                {/* title + body */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-tight text-[clamp(1.4rem,1.8vw,1.7rem)] font-light leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/75">{card.body}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <Reveal className="space-y-4 text-[16px] leading-relaxed text-[#07357e]">
            <p>
              Hay tres formas de quitarle trabajo repetitivo a un equipo, y casi nunca se usa solo
              una. Lo que acaba funcionando es una mezcla, ensamblada pieza a pieza.
            </p>
            <p>No un servicio. Un sistema.</p>
          </Reveal>

          <Reveal className="text-[16px] leading-relaxed text-[#07357e]" delay={120}>
            <p>
              Por eso no te vamos a preguntar cuál de las tres quieres. Te vamos a preguntar qué te
              está costando tiempo.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
