import Image from "next/image";
import { Reveal } from "../shared/Reveal";

export function AutomatizacionHero() {
  return (
    <section
      id="top"
      className="relative flex w-full flex-col px-5 pt-28 pb-20 md:px-8"
      style={{
        background:
          "radial-gradient(60% 50% at 55% 45%, rgba(3,15,40,0.65) 0%, rgba(3,15,40,0) 70%), linear-gradient(180deg, #020d24 0%, #07357e 100%)",
      }}
    >
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col">
        <Reveal
          as="h1"
          className="font-tight max-w-[26ch] text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[1.05] text-white"
        >
          Automatización de procesos
        </Reveal>

        <Reveal className="mt-10 max-w-[52ch] text-[16px] leading-relaxed text-[#56c5f2]">
          Antes de automatizar nada, miramos qué tareas se repiten siempre igual en tu negocio y
          construimos un sistema de automatización de procesos hecho a tu medida, pensado
          específicamente para tu forma de trabajar.
        </Reveal>

        <Reveal className="relative mt-24 aspect-[3000/1014] w-full">
          <Image
            src="/images/bio-system-diagram.png"
            alt="Diagrama del sistema de automatización"
            fill
            quality={85}
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
}
