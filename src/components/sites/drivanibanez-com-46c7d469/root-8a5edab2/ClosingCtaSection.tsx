import { Reveal } from "../shared/Reveal";

export function ClosingCtaSection() {
  return (
    <section
      className="flex min-h-screen w-full flex-col justify-between px-5 py-16 md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #f5f5f5 100%)" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal
          as="h2"
          className="font-tight max-w-[24ch] text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.15] text-white"
        >
          Nada de esto cambia si sigue siendo una idea aparcada. Por nuestra parte, estamos
          preparados y con ganas de escuchar tu proyecto.
        </Reveal>
      </div>

      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <a
            href="https://calendar.app.google/cde2o1czTcgHYRyz5"
            target="_blank"
            rel="noopener noreferrer"
            className="font-tight block text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.15] text-[#07357e] transition-colors hover:text-white"
          >
            Hablemos.
          </a>
        </Reveal>
      </div>
    </section>
  );
}
