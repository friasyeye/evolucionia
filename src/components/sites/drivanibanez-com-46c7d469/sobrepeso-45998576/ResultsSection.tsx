import { Reveal } from "../shared/Reveal";

export function ResultsSection() {
  return (
    <section
      className="w-full px-5 py-24 md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #052350 100%)" }}
    >
      <div className="mx-auto w-full max-w-[900px] text-center">
        <Reveal className="mb-4 text-[15px] font-medium text-[#56c5f2]">
          Olvídate de soluciones temporales.
        </Reveal>
        <Reveal
          as="h2"
          className="font-tight mx-auto max-w-[18ch] text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.05] text-white"
        >
          Obtén resultados reales que se mantengan a largo plazo.
        </Reveal>
        <Reveal>
          <a
            href="/cita"
            className="mt-10 inline-block bg-[#56c5f2] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#07357e] transition-colors hover:bg-white"
          >
            Pedir cita
          </a>
        </Reveal>
      </div>
    </section>
  );
}
