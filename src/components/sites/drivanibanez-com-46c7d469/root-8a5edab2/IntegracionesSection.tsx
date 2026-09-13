import { Reveal } from "../shared/Reveal";
import { IntegrationChips } from "./IntegrationChips";

/**
 * Logos de la órbita. Placeholder temporal: cuando lleguen los reales,
 * sustituir `src: null` por la ruta en /images/logos y ajustar `alt`.
 */
const LOGOS: { alt: string; src: string | null }[] = [
  { alt: "Logotipo de Dropbox", src: "/images/logos/Dropbox_logo.webp" },
  { alt: "Logotipo de Microsoft", src: "/images/logos/logo_microsoftwebp.webp" },
  { alt: "Logotipo de Pipedrive", src: "/images/logos/pipedrive.jpg" },
  { alt: "Logotipo de WhatsApp", src: "/images/logos/whatsapp.webp" },
  { alt: "Logotipo de HubSpot", src: "/images/logos/hubspot.png" },
  { alt: "Logotipo de Google Drive", src: null },
  { alt: "Logotipo de Google Calendar", src: null },
  { alt: "Logotipo de Notion", src: null },
  { alt: "Logotipo de Excel", src: null },
  { alt: "Logotipo de Zapier", src: null },
];

/** Reparto angular de los logos sobre la elipse (radios en globals.css). */
const STEP = 360 / LOGOS.length;

/** En móvil solo caben unos pocos logos sobre el arco.
 *  Si cambia la cantidad, actualizar --evo-arc-n en globals.css. */
const MOBILE_ARC = LOGOS.slice(0, 5);

/** Círculo de la órbita: radio 460 (debe coincidir con --evo-orb-r). */
const ORB_R = 460;
/** Holgura arriba para que el logo de la cúspide no se corte. */
const ORB_PAD_TOP = 30;
/** Se ve el 70% del círculo; el 30% restante queda detrás de la card.
 *  Da 674px: si cambia, actualizar el `md:min-h-[674px]` del bloque de texto. */
const ORB_VISIBLE_H = Math.round(ORB_R * 2 * 0.7) + ORB_PAD_TOP;

function LogoMark({ alt, src }: { alt: string; src: string | null }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className="h-7 w-7 object-contain" />;
  }
  return (
    <span role="img" aria-label={alt} className="block h-6 w-6 rounded-full bg-[#07357e]/12" />
  );
}

export function IntegracionesSection() {
  return (
    <section
      aria-labelledby="integraciones-title"
      className="w-full overflow-hidden px-5 py-24 md:px-8"
      style={{ background: "linear-gradient(180deg, #d6edfb 0%, #eaf6fd 65%, #ffffff 100%)" }}
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
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#07357e]/10"
                style={{ height: `${ORB_R * 2}px`, width: `${ORB_R * 2}px` }}
              />

              {LOGOS.map((logo, i) => (
                // recorre el círculo variando su ángulo; nunca rota
                <div
                  key={logo.alt}
                  className="evo-orb__slot absolute -ml-6 -mt-6"
                  style={{ "--start": `${i * STEP}deg` } as React.CSSProperties}
                >
                  {/* flotación desfasada */}
                  <div
                    className="evo-orb__chip flex h-12 w-12 items-center justify-center rounded-full border border-[#07357e]/12 bg-white"
                    style={{ "--delay": `${i * 0.6}s` } as React.CSSProperties}
                  >
                    <LogoMark alt={logo.alt} src={logo.src} />
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
            {MOBILE_ARC.map(({ alt, src }, i) => (
              <div
                key={alt}
                className="evo-arc__slot absolute left-1/2 top-[510px]"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#07357e]/12 bg-white">
                  <LogoMark alt={alt} src={src} />
                </div>
              </div>
            ))}
          </div>

          {/* ---------- Texto: dentro del arco en desktop, bajo la línea en móvil ---------- */}
          {/* En desktop el texto se ancla abajo: un pb mayor lo sube dentro del círculo. */}
          <Reveal className="relative mx-auto flex max-w-[560px] flex-col items-center pt-[170px] text-center md:min-h-[674px] md:justify-end md:pb-[200px] md:pt-0">
            <h2
              id="integraciones-title"
              className="font-tight max-w-[26ch] text-[clamp(1.6rem,2.4vw,2.1rem)] font-semibold leading-[1.05] text-[#07357e]"
            >
              Integramos IA con las herramientas que ya usas
            </h2>

            <p className="mt-5 text-[16px] leading-relaxed text-[#07357e]/80">
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
