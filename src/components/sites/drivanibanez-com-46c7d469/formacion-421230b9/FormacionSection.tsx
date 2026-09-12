import { Reveal } from "../shared/Reveal";
import { PlusIcon } from "../shared/icons";

const IMG = "/sites/drivanibanez-com-46c7d469/formacion-421230b9/images";

const CURSOS = [
  {
    img: "7E7EB918-AC91-4F01-A518-391E1140FC05_1_105_c-e1786979672697.jpeg",
    price: "495 €",
    title: "Metabolismo y Calorimetría Indirecta en Reposo",
    desc: "Este curso está diseñado para profesionales de la salud que quieren dejar de estimar el metabolismo y empezar a medirlo con precisión real.",
    meta: [
      { label: "Fecha", value: "19/09/2026" },
      { label: "Duración", value: "5 horas" },
      { label: "Modalidad", value: "Online" },
    ],
    href: "#",
  },
];

export function FormacionSection() {
  return (
    <section
      className="w-full px-5 pt-28 pb-24 md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #ffffff 33%)" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal className="mb-12 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/80">
          Formaciones
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {CURSOS.map((c) => (
            <Reveal key={c.title}>
              <a href={c.href} className="group block">
                {/* image */}
                <div className="relative overflow-hidden rounded-[10px]">
                  <img
                    src={`${IMG}/${c.img}`}
                    alt={c.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-multiply"
                    style={{ background: "rgba(7,53,126,0.45)" }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-[14px] font-medium text-[#07357e]">
                    {c.price}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#07357e] transition-colors group-hover:bg-white">
                    <PlusIcon className="h-5 w-5" />
                  </span>
                </div>

                {/* body */}
                <h2 className="font-tight mt-6 text-[clamp(1.6rem,2.4vw,2.1rem)] font-semibold leading-tight text-[#07357e]">
                  {c.title}
                </h2>
                <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-[#07357e]/80">
                  {c.desc}
                </p>

                <dl className="mt-6 grid max-w-[440px] grid-cols-3 gap-4 border-t border-[#07357e]/15 pt-6">
                  {c.meta.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#07357e]/50">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-[15px] font-medium text-[#07357e]">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
