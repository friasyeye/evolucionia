import { asset } from "./assets";
import { Reveal } from "../shared/Reveal";

export function LongevidadHero() {
  return (
    <section
      className="relative w-full px-5 pt-28 pb-20 md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #052350 100%)" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal className="mb-5 text-[14px] font-light tracking-wide text-[#56c5f2]">
          Rendimiento, longevidad y tratamiento del dolor.
        </Reveal>

        <div className="grid gap-8 md:grid-cols-[1.4fr_0.9fr] md:items-end">
          <Reveal
            as="h1"
            className="max-w-[18ch] text-[clamp(2.2rem,4.6vw,4rem)] font-normal leading-[1.05] text-white"
          >
            Optimiza tu rendimiento y tu salud <span className="text-[#56c5f2]">— con criterio médico.</span>
          </Reveal>
          <Reveal className="flex flex-col items-start gap-6 md:items-end">
            <p className="max-w-[42ch] text-[16px] leading-relaxed text-white/85 md:text-right">
              Antes de pautar ejercicio, nutrición o tratamiento, estudiamos cómo está funcionando tu
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

        {/* hero image */}
        <Reveal className="mt-12 overflow-hidden rounded-[10px]">
          <img
            src={asset("DSF3888.avif")}
            alt="Consulta de longevidad y rendimiento"
            className="aspect-[16/8] w-full object-cover"
          />
        </Reveal>

        {/* statement block */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <Reveal
            as="h2"
            className="font-tight max-w-[16ch] text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-[1.05] text-white"
          >
            Hoy muchas personas buscan mejorar su rendimiento, vivir más años con salud o tratar el
            dolor.
          </Reveal>
          <Reveal className="space-y-5 text-[16px] leading-relaxed text-white/85">
            <p>
              A menudo acaban entrenando más, tomando más suplementos o probando tendencias que
              prometen mucho, pero no siempre se apoyan en datos reales.
            </p>
            <p>
              Nuestro enfoque es distinto. Antes de intervenir, medimos tu metabolismo en reposo y en
              esfuerzo para entender cómo responde tu cuerpo.
            </p>
            <p>
              A partir de ahí, usamos esa información para orientar con más precisión el ejercicio, la
              nutrición y el tratamiento. Porque no se trata de hacer más por hacer.
            </p>
            <p className="font-semibold text-white">
              Se trata de tomar mejores decisiones, con criterio médico.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
