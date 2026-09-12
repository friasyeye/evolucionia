import { asset } from "../shared/assets";
import { Reveal } from "../shared/Reveal";

const CENTROS = [
  {
    img: "ETERNAL-MEDICAL-GROUP.avif",
    place: "Girona",
    title: "Eternal Medical",
    address: ["Carrer Heroïnes de Santa Bàrbara, 6, Planta 1.", "Edificio Clínica Onyar, 17004."],
  },
  {
    img: "Quantum.avif",
    place: "Andorra",
    title: "Clínica Quantum",
    address: ["Avinguda del Fener, 22, LOCAL 1, AD700", "Escaldes-Engordany, Andorra"],
  },
  {
    img: "Telemedicina.avif",
    place: "Online",
    title: "Telemedicina",
    address: ["Sesión a través de videoconferencia.", "60 minutos estimados."],
  },
];

export function CentrosSection() {
  return (
    <section id="centros" className="w-full bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal
          as="h2"
          className="font-tight text-[clamp(2.4rem,4vw,3.4rem)] font-semibold leading-none text-[#07357e]"
        >
          Centros
        </Reveal>
        <Reveal className="mt-3 text-[16px] text-[#07357e]/80">
          Dónde paso consulta presencial y online
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CENTROS.map((c) => (
            <Reveal key={c.title}>
              <article className="group flex h-full flex-col">
                <div className="overflow-hidden rounded-[4px]">
                  <img
                    src={asset(c.img)}
                    alt={c.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-[15px] text-[#07357e]">{c.place}</span>
                  <span className="h-px flex-1 bg-[#07357e]/20" />
                </div>
                <h3 className="font-tight mt-3 text-[clamp(1.9rem,2.6vw,2.4rem)] font-semibold leading-none text-[#07357e]">
                  {c.title}
                </h3>
                <div className="mt-4 border-t border-[#07357e]/15 pt-4 text-[15px] leading-relaxed text-[#07357e]/80">
                  {c.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
