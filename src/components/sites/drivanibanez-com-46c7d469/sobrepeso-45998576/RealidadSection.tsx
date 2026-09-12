import { asset } from "./assets";
import { Reveal } from "../shared/Reveal";

const CARDS = [
  {
    img: "sobrepeso-objetivos.avif",
    title: "Frustración acumulada",
    text: "Has seguido indicaciones, has puesto esfuerzo… y aun así los resultados no llegan.",
  },
  {
    img: "perder-peso-enfoque-generico.avif",
    title: "Enfoques genéricos",
    text: "Muchas decisiones se toman a ciegas cuando no se analiza cómo funciona realmente tu metabolismo.",
  },
  {
    img: "ETERNAL-MEDICAL-GROUP.avif",
    title: "El problema no eres tú",
    text: "Cuando el enfoque no se adapta a tu cuerpo, es normal sentir cansancio, frustración y confusión.",
  },
];

export function RealidadSection() {
  return (
    <section className="w-full bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal className="mb-4 text-[14px] font-medium uppercase tracking-[0.1em] text-[#56c5f2]">
            Una realidad:
          </Reveal>
          <Reveal
            as="h2"
            className="font-tight text-[clamp(1.9rem,3.4vw,2.8rem)] font-semibold leading-[1.08] text-[#07357e]"
          >
            Lo que a otra persona le funciona, en ti puede no funcionar igual.
          </Reveal>
          <Reveal className="mt-6 text-[16px] leading-relaxed text-[#07357e]/85">
            En consulta vemos a menudo personas que han seguido todas las indicaciones… y aun así su
            cuerpo no responde.
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
