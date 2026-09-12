import { asset } from "./assets";
import { Reveal } from "../shared/Reveal";
import { BoltIcon } from "../shared/icons";

const METAB = [
  {
    title: "Metabolismo rápido",
    text: "Quema más calorías en reposo y responde bien a los carbohidratos.",
  },
  {
    title: "Metabolismo lento",
    text: "Requiere menos calorías y quema mejor grasas que carbohidratos.",
  },
];

export function NoTodosSection() {
  return (
    <section className="w-full bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal
          as="h2"
          className="font-tight mx-auto max-w-[20ch] text-center text-[clamp(2rem,4.4vw,3.6rem)] font-semibold uppercase leading-[1.05] text-[#56c5f2]"
        >
          No todos los cuerpos responden igual — el tuyo tampoco.
        </Reveal>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[10px]">
            <img
              src={asset("DSF3854-1.avif")}
              alt="Dr. Iván Ibáñez"
              className="aspect-[4/5] w-full object-cover md:aspect-[4/4]"
            />
          </Reveal>

          <div>
            <Reveal className="space-y-4 text-[16px] leading-relaxed text-[#07357e]">
              <p>Dos personas pueden seguir pautas parecidas y obtener resultados muy distintos.</p>
              <p>No porque una se esfuerce más que otra, sino porque su cuerpo no funciona igual.</p>
              <p>
                Por eso,{" "}
                <strong className="font-semibold">
                  antes de cambiar la alimentación o el ejercicio, estudiamos cómo está funcionando tu
                  metabolismo
                </strong>
                .
              </p>
              <p>Así podemos saber qué cambios tienen sentido en tu caso y cuáles no.</p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {METAB.map((m) => (
                <Reveal key={m.title}>
                  <div className="h-full rounded-[6px] border border-[#07357e]/20 p-5">
                    <div className="flex items-center gap-2">
                      <BoltIcon className="h-5 w-5 text-[#56c5f2]" />
                      <h3 className="font-tight text-[18px] font-semibold text-[#07357e]">
                        {m.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#07357e]/80">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
