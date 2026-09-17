import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { Reveal } from "@/components/sites/drivanibanez-com-46c7d469/shared/Reveal";

export const metadata: Metadata = {
  title: "Casos de éxito | Evolución IA",
  description: "Resultados reales de empresas que automatizaron procesos con Evolución IA.",
};

const CASES = [
  {
    eyebrow: "Base de conocimiento interna",
    title: "Así tiene Renovamarin todo su histórico de proyectos en un solo asistente",
    stat: "70%",
    desc: "menos tiempo buscando precedentes de proyectos anteriores",
    href: "/casos-de-exito/montea-arquitectura",
    imageSrc: "/images/renovamarin-caso.jpg",
    logoSrc: "/images/logos/renovamarin.webp",
    logoWidthClass: "w-[26%] max-w-[110px]",
  },
  {
    eyebrow: "Automatización interna",
    title: "Cómo Obras Insignia dejó de perder tiempo bajando y subiendo fotos de sus obras a mano",
    stat: "90%",
    desc: "menos tiempo subiendo fotos de obra a mano",
    href: "/casos-de-exito/obras-insignia",
    imageSrc: "/images/insignia-caso.jpg",
    logoSrc: "/images/logos/insigna.webp",
    logoWidthClass: "w-[26%] max-w-[110px]",
  },
  {
    eyebrow: "Gestión de inscripciones",
    title: "Cómo Eko Tour Tennis Academy eliminó los errores en la documentación de sus alumnos",
    stat: "85%",
    desc: "menos errores en la documentación de cada inscripción",
    href: "/casos-de-exito/eko-tour",
    imageSrc: "/images/eko-tour-caso.jpg",
    logoSrc: "/images/logos/eko_tour.webp",
    logoWidthClass: "w-[16%] max-w-[70px]",
  },
];

const CLIENT_LOGOS = [
  { src: "/images/logos/gersan.webp", alt: "Gersan", width: 376, height: 64, heightClass: "h-4 md:h-5" },
  { src: "/images/logos/eko_tour.webp", alt: "Eko Tour", width: 64, height: 64, heightClass: "h-8 md:h-10" },
  { src: "/images/logos/insigna.webp", alt: "Insigna — Rehabilitación y Arquitectura", width: 191, height: 64, heightClass: "h-5 md:h-6" },
  { src: "/images/logos/mao_studio.webp", alt: "MAO Studio", width: 69, height: 64, heightClass: "h-6 md:h-7" },
  { src: "/images/logos/renovamarin.webp", alt: "Renovamarin", width: 297, height: 48, heightClass: "h-4 md:h-5" },
  { src: "/images/logos/logo_viedlreformas.png", alt: "Vield Reformas", width: 832, height: 274, heightClass: "h-5 md:h-6" },
  { src: "/images/logos/logo-mobile.webp", alt: "Pro Serveis", width: 200, height: 60, heightClass: "h-6 md:h-7" },
  { src: "/images/logos/logo-didi-03.png", alt: "Didi Art Club", width: 2250, height: 2250, heightClass: "h-12 md:h-16" },
];

function LogoRow() {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16">
      {CLIENT_LOGOS.map((logo) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          unoptimized
          className={`w-auto shrink-0 opacity-70 grayscale [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(63%)_saturate(2878%)_hue-rotate(206deg)_brightness(94%)_contrast(97%)] ${logo.heightClass}`}
        />
      ))}
    </div>
  );
}

export default function CasosDeExitoPage() {
  return (
    <>
      <SiteHeader />
      <main className="w-full bg-[#eef5fc] px-5 pb-24 pt-[72px] md:px-8 md:pt-[80px]">
        <div className="mx-auto w-full max-w-[1200px]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-white">
              <div className="px-8 pb-6 pt-10 md:px-16 md:pb-8 md:pt-12">
                <p className="font-tight text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-[#1e8dc4]">
                  Nuestros clientes
                </p>
                <h1 className="mt-4 font-tight text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.05] text-[#07357e]">
                  Trabajo que ya no hacen a mano
                </h1>
                <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-[#07357e]/70">
                  Cada negocio de aquí abajo necesitaba algo distinto: un chatbot, una automatización interna, una mini-herramienta a medida. Pero todos comparten el mismo resultado: menos tiempo perdido en tareas repetitivas y más control sobre lo que antes se les escapaba.
                </p>
                <a
                  href="/contacto"
                  className="mt-8 inline-flex w-fit items-center rounded-full bg-[#07357e] px-5 py-2.5 text-[0.9rem] font-medium text-white transition-colors hover:bg-[#0a4aa0]"
                >
                  Hablemos
                </a>

                <div className="mt-8 w-full overflow-hidden md:mt-10">
                  <div className="di-marquee" style={{ animationDuration: "60s" }} aria-hidden>
                    <LogoRow />
                    <LogoRow />
                    <LogoRow />
                    <LogoRow />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <a href="/casos-de-exito/mao-studio" className="grid overflow-hidden rounded-2xl bg-white md:grid-cols-2">
              <div className="flex flex-col justify-between gap-10 p-8 md:p-16">
                <div>
                  <p className="font-tight text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-[#1e8dc4]">
                    Trámites y expedientes
                  </p>
                  <h2 className="mt-3 font-tight text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.15] text-[#07357e]">
                    Mao Studio automatiza la tramitación de cédulas de habitabilidad y emplazamiento
                  </h2>
                </div>

                <div className="flex flex-col gap-6 border-t border-[#07357e]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[15px] leading-relaxed text-[#07357e]/70">
                    Cómo Mao Studio pasó de gestionar cada expediente correo a correo a tramitarlo
                    de principio a fin sin intervención manual.
                  </p>
                  <div className="shrink-0">
                    <p className="font-tight text-[clamp(2.2rem,3.4vw,2.8rem)] font-semibold leading-none text-[#1e8dc4]">
                      25h
                    </p>
                    <p className="mt-2 text-[14px] leading-snug text-[#1e8dc4]/80">
                      ahorradas al mes en trámites
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 pl-0 md:pb-8 md:pl-0 md:pr-12 md:pt-16">
                <div className="relative aspect-[4/3] w-full self-center overflow-hidden rounded-xl">
                  <Image
                    src="/images/mao-caso.jpg"
                    alt="Mao Studio"
                    fill
                    className="object-cover"
                  />
                  <Image
                    src="/images/logos/mao_studio.webp"
                    alt="Mao Studio"
                    width={69}
                    height={64}
                    unoptimized
                    className="absolute left-1/2 top-1/2 w-[22%] max-w-[120px] -translate-x-1/2 -translate-y-1/2 [filter:brightness(0)_invert(1)]"
                  />
                </div>
              </div>
            </a>
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {CASES.map((c) => (
              <Reveal key={c.title}>
                <a href={c.href} className="block h-full overflow-hidden rounded-2xl bg-white">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image src={c.imageSrc} alt={c.title} fill className="object-cover" />
                    <Image
                      src={c.logoSrc}
                      alt={c.title}
                      width={200}
                      height={64}
                      unoptimized
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [filter:brightness(0)_invert(1)] ${c.logoWidthClass}`}
                    />
                  </div>

                  <div className="flex h-full flex-col p-6">
                    <p className="font-tight text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#1e8dc4]">
                      {c.eyebrow}
                    </p>
                    <h3 className="mt-3 font-tight text-[17px] font-semibold leading-snug text-[#07357e]">
                      {c.title}
                    </h3>

                    <div className="mt-6 border-t border-[#07357e]/10 pt-5">
                      <p className="font-tight text-[clamp(1.6rem,2.4vw,2rem)] font-semibold leading-none text-[#1e8dc4]">
                        {c.stat}
                      </p>
                      <p className="mt-2 text-[13.5px] leading-snug text-[#07357e]/70">{c.desc}</p>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
