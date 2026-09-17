import Image from "next/image";
import { Reveal } from "../shared/Reveal";
import { IntegrationChips } from "./IntegrationChips";

const LOGOS: { alt: string; src: string; fill?: boolean; scale?: number; bg?: string }[] = [
  { alt: "Logotipo de Dropbox", src: "/images/logos/Dropbox_logo.webp" },
  { alt: "Logotipo de Microsoft", src: "/images/logos/logo_microsoftwebp.webp" },
  { alt: "Logotipo de Pipedrive", src: "/images/logos/pipedrive.png", bg: "#000000" },
  {
    alt: "Logotipo de WhatsApp",
    src: "/images/logos/whatsapp-icon-white.png",
    bg: "#25D366",
  },
  { alt: "Logotipo de HubSpot", src: "/images/logos/hubspot.png", fill: true },
  { alt: "Logotipo de BIM", src: "/images/logos/bim.jfif", fill: true },
  { alt: "Logotipo de Google Calendar", src: "/images/logos/Google_Calendar_icon_(2020).svg.webp" },
  { alt: "Logotipo de Procore", src: "/images/logos/procore.png" },
  { alt: "Logotipo de Excel", src: "/images/logos/Microsoft_Office_Excel_(2019–2025).svg.webp" },
  { alt: "Logotipo de Monday", src: "/images/logos/monday-icon.svg" },
];

/** Círculo de la órbita: radio 460 (debe coincidir con --evo-orb-r). */
const ORB_R = 460;
/** Holgura arriba para que el logo de la cúspide no se corte. */
const ORB_PAD_TOP = 30;
/** Se ve el 70% del círculo; el 30% restante queda detrás de la card.
 *  Da 674px: si cambia, actualizar el `md:min-h-[674px]` del bloque de texto. */
const ORB_VISIBLE_H = Math.round(ORB_R * 2 * 0.7) + ORB_PAD_TOP;

/** Los logos giran por todo el círculo, pero solo se ve el arco de arriba: con
 *  los diez a la vez quedaban amontonados, así que orbitan siete (51º entre
 *  cada uno) y el resto se quedan para los chips de la card. */
const ORB_LOGOS = LOGOS.slice(0, 7);

/** Reparto angular de los logos sobre la elipse (radios en globals.css). */
const STEP = 360 / ORB_LOGOS.length;

/** En móvil solo caben unos pocos logos sobre el arco.
 *  Si cambia la cantidad, actualizar --evo-arc-n en globals.css. */
const MOBILE_ARC = LOGOS.slice(0, 5);

function LogoMark({
  alt,
  src,
  fill,
  scale,
}: {
  alt: string;
  src: string;
  fill?: boolean;
  scale?: number;
}) {
  // Los chips miden como mucho 48px: pedimos esa resolución y Next sirve el
  // WebP/AVIF redimensionado en vez del original (algunos pesaban 150KB a
  // 554px para pintarse a 28px). Los SVG no pasan por el optimizador.
  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      unoptimized={src.endsWith(".svg")}
      className={fill ? "h-full w-full object-cover" : "h-7 w-7 object-contain"}
      style={fill && scale ? { transform: `scale(${scale})` } : undefined}
    />
  );
}

export function IntegracionesSection() {
  return (
    <section
      aria-labelledby="integraciones-title"
      className="w-full overflow-hidden px-5 py-24 md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #f5f5f5 100%)" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* ---------- Órbita con el texto dentro + card ----------
            El círculo mide 920px; su contenedor lo recorta al 70%, y el 30%
            restante queda detrás de la card. */}
        <div className="relative">
          {/* Desktop: círculo completo con los logos orbitando */}
          <div
            aria-hidden="true"
            className="evo-orb pointer-events-none absolute left-1/2 top-0 hidden w-[1000px] -translate-x-1/2 overflow-hidden md:block"
            style={{ height: `${ORB_VISIBLE_H}px` }}
          >
            {/* centro del círculo */}
            <div className="absolute left-1/2" style={{ top: `${ORB_R + ORB_PAD_TOP}px` }}>
              {/* anillo tenue */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25"
                style={{ height: `${ORB_R * 2}px`, width: `${ORB_R * 2}px` }}
              />

              {ORB_LOGOS.map((logo, i) => (
                // recorre el círculo variando su ángulo; nunca rota
                <div
                  key={logo.alt}
                  className="evo-orb__slot absolute -ml-6 -mt-6"
                  style={{ "--start": `${i * STEP}deg` } as React.CSSProperties}
                >
                  {/* flotación desfasada */}
                  <div
                    className="evo-orb__chip flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#07357e]/12 bg-white"
                    style={
                      {
                        "--delay": `${i * 0.6}s`,
                        ...(logo.bg ? { backgroundColor: logo.bg } : null),
                      } as React.CSSProperties
                    }
                  >
                    <LogoMark alt={logo.alt} src={logo.src} fill={logo.fill} scale={logo.scale} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Móvil: arco amplio y plano con los logos apoyados sobre la línea.
              El círculo es mucho más ancho que la pantalla, así la curva que
              asoma es suave y cruza de lado a lado. */}
          {/* overflow-hidden recorta el círculo: solo se ve su borde superior,
              nunca el inferior. */}
          <div
            aria-hidden="true"
            className="evo-arc pointer-events-none absolute inset-x-0 top-0 h-[150px] overflow-hidden md:hidden"
          >
            {/* la línea: solo asoma la cúspide del círculo */}
            <div className="absolute left-1/2 top-[60px] h-[900px] w-[900px] -translate-x-1/2 rounded-full border border-[#07357e]/15" />

            {/* logos deslizándose a lo largo de la curva */}
            {MOBILE_ARC.map(({ alt, src, fill, scale, bg }, i) => (
              <div
                key={alt}
                className="evo-arc__slot absolute left-1/2 top-[510px]"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#07357e]/12 bg-white"
                  style={bg ? { backgroundColor: bg } : undefined}
                >
                  <LogoMark alt={alt} src={src} fill={fill} scale={scale} />
                </div>
              </div>
            ))}
          </div>

          {/* ---------- Texto: dentro del arco en desktop, bajo la línea en móvil ---------- */}
          {/* En desktop el texto se ancla abajo: un pb mayor lo sube dentro del círculo. */}
          <Reveal className="relative mx-auto flex max-w-[560px] flex-col items-center pt-[170px] text-center md:min-h-[674px] md:justify-end md:pb-[200px] md:pt-0">
            <h2
              id="integraciones-title"
              className="font-tight max-w-[26ch] text-[clamp(1.6rem,2.4vw,2.1rem)] font-semibold leading-[1.05] text-white"
            >
              Integramos IA con las herramientas que ya usas
            </h2>

            <p className="mt-5 text-[16px] leading-relaxed text-white/80">
              Nos conectamos a lo que ya usáis: correo, documentos, Whatsapp, CRM. Funciona con
              casi cualquier herramienta que tenga un acceso web detrás, así que nadie tiene que
              migrar nada ni aprender nada nuevo.
            </p>
          </Reveal>

          {/* ---------- Card: sube sobre la órbita y esconde su parte baja ---------- */}
          <Reveal className="relative z-10 mt-12 md:-mt-32">
            <div className="grid gap-6 rounded-[10px] border border-[#07357e]/12 bg-white p-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10 md:p-12">
              <div>
                <h3 className="font-tight max-w-[28ch] text-[clamp(1.5rem,2.2vw,2rem)] font-semibold leading-[1.05] text-[#07357e]">
                  Tus herramientas funcionan bien por separado. Lo que falta es que estén conectadas entre ellas.

                </h3>
                <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-[#07357e]/80">
                  Cuando una herramienta avisa a la siguiente, el proceso deja de depender de que
                  alguien esté disponible. Ocurre igual un lunes a las nueve que un viernes a las
                  ocho, con un caso o con cincuenta, y nada se queda a medias porque alguien esté
                  ocupado.
                </p>
              </div>

              <IntegrationChips />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
