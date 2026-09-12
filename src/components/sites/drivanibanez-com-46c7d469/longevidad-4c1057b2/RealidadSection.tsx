import { asset } from "./assets";
import { Reveal } from "../shared/Reveal";

const CARDS = [
  {
    n: "01",
    img: "DSF3976.avif",
    title: "Misma rutina, resultados distintos",
    text: "Hay cuerpos que mejoran con ciertas cargas y otros que se estancan, se fatigan o acumulan dolor.",
  },
  {
    n: "02",
    img: "tratamiento-rendimiento-deportivo.avif",
    title: "Más no siempre es mejor",
    text: "Más entrenamiento, más suplementos o más intervención no siempre significan más progreso.",
  },
  {
    n: "03",
    img: "DSF3938.avif",
    title: "Llegar mejor a los próximos años",
    text: "Empieza entendiendo qué necesita tu cuerpo para rendir, recuperarse y mantenerse activo más tiempo.",
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
            Dos personas pueden entrenar parecido, comer parecido o tratar una molestia parecida y
            obtener resultados muy distintos. No porque una se cuide más que la otra, sino porque su
            cuerpo no responde igual al esfuerzo, a la recuperación ni al tratamiento.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {CARDS.map((c) => (
            <Reveal key={c.n} className="flex flex-col">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src={asset(c.img)}
                  alt={c.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <span className="font-tight mt-6 text-[15px] font-semibold text-[#56c5f2]">{c.n}</span>
              <h3 className="font-tight mt-2 text-[clamp(1.3rem,1.8vw,1.6rem)] font-semibold leading-tight text-[#07357e]">
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
