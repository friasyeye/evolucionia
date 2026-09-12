import { asset } from "./assets";
import { Reveal } from "../shared/Reveal";

export function SobrepesoHero() {
  return (
    <section
      className="relative w-full px-5 pt-28 pb-20 md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #052350 100%)" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal className="mb-5 text-[14px] font-light tracking-wide text-[#56c5f2]">
          Tratamiento para el sobrepeso, la obesidad y el lipedema.
        </Reveal>

        <div className="grid gap-8 md:grid-cols-[1.4fr_0.9fr] md:items-end">
          <Reveal
            as="h1"
            className="max-w-[18ch] text-[clamp(2.2rem,4.6vw,4rem)] font-normal leading-[1.05] text-white"
          >
            Te ayudamos a sentirte bien con tu cuerpo{" "}
            <span className="text-[#56c5f2]">— con criterio médico.</span>
          </Reveal>
          <Reveal className="flex flex-col items-start gap-6 md:items-end">
            <p className="max-w-[42ch] text-[16px] leading-relaxed text-white/85 md:text-right">
              Antes de cambiar tu dieta o tu ejercicio, estudiamos cómo está funcionando tu
              metabolismo para saber qué cambios pueden ayudarte de verdad.
            </p>
            <a
              href="#metodo-long"
              className="inline-block border border-white/50 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-[#07357e]"
            >
              Saber más
            </a>
          </Reveal>
        </div>

        <Reveal className="mt-12 overflow-hidden rounded-[10px]">
          <img
            src={asset("Dr-Ivan-Ibanez-Consulta-pano-11.avif")}
            alt="Consulta de sobrepeso, obesidad y lipedema"
            className="aspect-[16/8] w-full object-cover"
          />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <Reveal
            as="h2"
            className="font-tight max-w-[16ch] text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-[1.05] text-white"
          >
            Hacer las cosas bien y no ver resultados desgasta más de lo que parece.
          </Reveal>
          <Reveal className="space-y-5 text-[16px] leading-relaxed text-white/85">
            <p>
              Muchas personas llegan a nosotros después de haber probado dietas, ejercicio o
              recomendaciones que a otras les funcionaron, pero en su caso no.
            </p>
            <p>
              Han puesto esfuerzo, han seguido indicaciones y aun así no han conseguido mejorar como
              esperaban.
            </p>
            <p>Cuando pasa esto, el problema no suele ser la falta de voluntad.</p>
            <p className="font-semibold text-white">
              Muchas veces, el problema es empezar sin entender cómo está funcionando realmente el
              cuerpo.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
