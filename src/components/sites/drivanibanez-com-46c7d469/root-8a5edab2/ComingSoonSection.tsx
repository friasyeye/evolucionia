import { Reveal } from "../shared/Reveal";

export function ComingSoonSection() {
  return (
    <section
      className="flex min-h-screen w-full flex-col items-center justify-center px-5 py-24 text-center md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #f5f5f5 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center">
        <Reveal
          as="h1"
          className="font-tight text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.15] text-white"
        >
          Esto también lo estamos montando.
        </Reveal>

        <Reveal delay={100} className="mt-5 text-[16px] leading-relaxed text-white/85">
          Todavía estamos terminando esto, pero seguimos trabajando cada día con negocios reales.
          Si quieres saber qué podemos hacer por el tuyo, hablamos directamente.
        </Reveal>

        <Reveal delay={200} className="mt-8">
          <a
            href="https://calendar.app.google/cde2o1czTcgHYRyz5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[0.95rem] font-medium text-[#07357e] transition-colors hover:bg-white/85"
          >
            Hablemos
          </a>
        </Reveal>
      </div>
    </section>
  );
}
