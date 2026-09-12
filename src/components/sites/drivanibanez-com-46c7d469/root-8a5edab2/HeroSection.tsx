import Image from "next/image";

// Cada logo llega con su propio aspect ratio y "peso" visual natural (un
// wordmark ancho como Renovamarin lee más grande que un emblema cuadrado
// como Eko Tour a la misma altura). `heightClass` iguala el tamaño percibido
// tomando Insigna como referencia neutra: Eko Tour sube un punto, Gersan baja
// un punto y Renovamarin baja apenas medio punto respecto a como estaba.
// En móvil las cinco alturas se reducen de forma proporcional (mismos
// puntos relativos entre sí) para que la fila quepa completa sin envolver.
const CLIENT_LOGOS = [
  { src: "/images/logos/gersan.webp", alt: "Gersan", width: 376, height: 64, heightClass: "h-[0.6rem] sm:h-[0.75rem] md:h-[1.0625rem]" },
  { src: "/images/logos/eko_tour.webp", alt: "Eko Tour", width: 64, height: 64, heightClass: "h-[1.43rem] sm:h-[1.625rem] md:h-[2.6rem]" },
  { src: "/images/logos/insigna.webp", alt: "Insigna — Rehabilitación y Arquitectura", width: 191, height: 64, heightClass: "h-[0.85rem] sm:h-4 md:h-6" },
  { src: "/images/logos/mao_studio.webp", alt: "MAO Studio", width: 69, height: 64, heightClass: "h-[1.075rem] sm:h-[1.265rem] md:h-[1.9rem]" },
  { src: "/images/logos/renovamarin.webp", alt: "Renovamarin", width: 297, height: 48, heightClass: "h-[0.7rem] sm:h-3.5 md:h-[1.35rem]" },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-start overflow-hidden"
    >
      {/* ---------- background photo ----------
          hero-background-mobile.jpg es un recorte vertical generado a partir de
          hero-background-desktop.png, centrado en la silueta. */}
      {/* quality={85}: al 75% por defecto (Next.js default) se perdía el
          grano/textura de la foto original en las zonas de degradado del
          cielo — se notaba especialmente en pantallas grandes. 85 recupera
          la mayor parte del detalle (~390KB en WebP) sin acercarse al peso
          de calidad 90-100 (540KB-850KB), buscando mantener el LCP bajo
          para Page Speed. */}
      <Image
        src="/images/hero-background-mobile.jpg"
        alt=""
        aria-hidden
        fill
        priority
        quality={85}
        sizes="100vw"
        className="-z-10 object-cover md:hidden"
      />
      <Image
        src="/images/hero-background-desktop.png"
        alt=""
        aria-hidden
        fill
        priority
        quality={85}
        sizes="100vw"
        className="-z-10 hidden scale-[1.35] object-cover [object-position:53%_66%] md:block"
      />

      {/* content */}
      <div className="relative flex min-h-[100svh] w-full flex-col">
        <div className="mx-auto w-full max-w-[1480px] flex-1 px-6 pt-[20svh] sm:px-8 sm:pt-[22svh] md:px-14 md:pt-[19svh] lg:px-20">
          {/* "Agencia IA" is the page's H1. It stays right here in DOM/reading
              order — immediately before the H2 — for semantics, accessibility
              and SEO, but is visually hidden (`sr-only`) at this spot. Its
              visual presentation moves down next to the client-logo strip via
              the plain <p> labelled "visual H1 echo" below, matching the
              Ringr AI reference layout without duplicating a real heading or
              disturbing heading order for assistive tech / search engines. */}
          <div className="mx-auto flex max-w-[780px] flex-col text-center">
            <h1 className="sr-only">Agencia de IA</h1>
            <h2 className="font-tight text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white">
              Automatización e IA a medida integrada en tu negocio
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-[clamp(0.95rem,1.15vw,1.125rem)] font-light leading-relaxed text-white/85">
              Desarrollamos automatizaciones, chatbots y agentes de IA a medida que se adaptan a cómo ya trabaja tu equipo.
            </p>
            <div className="mt-7">
              <a
                href="/cita"
                className="inline-flex items-center justify-center rounded-full bg-white/15 px-7 py-3.5 text-[0.95rem] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              >
                Llamada de descubrimiento
              </a>
            </div>
          </div>
        </div>

        {/* ---------- trust strip ----------
            Logos de clientes reales de Evolución IA. Se sirven en sus colores
            originales (fondo ya recortado a transparente) y se decoloran a
            blanco/gris únicamente vía CSS `filter` — el archivo en sí nunca
            se edita a gris, así se puede reutilizar en cualquier fondo
            (ver conversación: por qué el color se aplica en CSS, no en el asset). */}
        <div className="mx-auto w-full max-w-[1480px] px-6 pb-10 sm:px-8 md:px-14 md:pb-12 lg:px-20">
          <div className="flex flex-col items-center gap-5 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
              {/* Visual stand-in for the H1 above ("Agencia IA"), aria-hidden so
                  screen readers don't hear it twice — the real, accessible H1
                  lives with the main heading block. */}
              <p aria-hidden className="font-tight text-[0.72rem] font-semibold tracking-[0.02em] text-white/60">
                Agencia de IA
              </p>
              <p className="font-tight text-[0.8rem] font-semibold leading-snug text-cyan-accent">
                Ver casos de éxito
              </p>
            </div>
            <div className="flex w-full flex-nowrap items-center justify-between gap-x-2 opacity-70 grayscale [filter:brightness(0)_invert(1)] sm:justify-center sm:gap-x-6 md:w-auto md:flex-wrap md:gap-x-12 md:gap-y-5">
              {CLIENT_LOGOS.map((logo) => (
                // unoptimized: son PNG originales sin SVG disponible, ya
                // exportados a WebP y a su tamaño de render real (ver
                // conversación sobre optimización de logos). Pasarlos otra
                // vez por el pipeline de next/image los recomprimiría un
                // segundo ciclo con pérdida, generando artefactos en los
                // bordes de texto sin ahorro de peso real en archivos ya
                // tan pequeños (2-12KB).
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  unoptimized
                  className={`w-auto shrink-0 ${logo.heightClass}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
