import type { CaseStudyData } from "./CaseStudyLayout";

export const obrasInsigniaCase: CaseStudyData = {
  closingPitch: (
    <>
      Si en tu empresa también hay información que llega por WhatsApp, email o cualquier otro
      canal informal y alguien tiene que bajarla, ordenarla y subirla a mano cada día, esto podría
      ser para ti. Y si tu caso es distinto, mejor todavía: así vemos juntos qué tiene sentido para
      tu negocio, no lo que le sirvió a otro.
    </>
  ),
  category: "Automatización interna",
  badge: "Interno",
  title: "Cómo Obras Insignia dejó de perder tiempo bajando y subiendo fotos de sus obras a mano",
  intro: (
    <>
      <p>
        <strong className="text-[#07357e]">Obras Insignia</strong> es una empresa de rehabilitación
        y reforma de edificios en Bizkaia, especializada en fachadas, refuerzo estructural,
        impermeabilización de cubiertas e instalación de ascensores, con más de 500 obras
        ejecutadas desde 2012.
      </p>
      <p>
        Su forma de trabajar se apoya en el método y el control de cada obra en curso, con equipos
        propios que envían el avance diario directamente desde el terreno.
      </p>
    </>
  ),
  imageSrc: "/images/insignia-caso.jpg",
  logoSrc: "/images/logos/insigna.webp",
  imageAlt: "Obras Insignia",
  metrics: [
    { value: "90%", label: "menos tiempo dedicado a bajar y subir fotos de obra cada día." },
    { value: "97%", label: "de fotos archivadas correctamente, sin que nadie tenga que revisarlas ni corregir nada." },
    {
      value: "Funciona solo",
      label: "en segundo plano: nadie tiene que acordarse de hacerlo ni ir con prisas buscando algo que debería estar ya subido.",
    },
  ],
  quote: {
    text: "Antes teníamos que estar pendientes de bajar y subir las fotos de cada obra a mano, y con varias obras a la vez se acumulaba. Ahora ya está todo organizado sin que nadie tenga que ocuparse de ello.",
    author: "Amaya Alonso Asla, Fundadora de Insignia Rehabilitación y Arquitectura",
  },
  challengeIntro:
    "Antes de la automatización, cada avance de obra llegaba por WhatsApp en forma de fotos que el equipo de obra enviaba desde el terreno. Alguien tenía que:",
  challengePoints: [
    "Revisar el WhatsApp y descargar cada foto manualmente.",
    "Identificar a qué obra y qué fecha correspondía cada tanda de fotos.",
    "Subirlas una a una al servidor de la empresa para que quedaran archivadas y accesibles.",
  ],
  challengeOutcome:
    "El resultado: un proceso manual y repetitivo cada día, dependiente de que alguien se acordara de hacerlo a tiempo antes de que se acumularan fotos sin clasificar.",
  solutionIntro:
    "Se montó una automatización que corre en local, sin necesidad de IA (aquí ni hacía falta ni tenía sentido usarla, es tarea puramente mecánica) que:",
  solutionPoints: [
    "Detecta las fotos nuevas enviadas por WhatsApp.",
    "Las descarga automáticamente.",
    "Las sube vía FTP directamente al servidor de la empresa, organizadas y listas para consultar.",
  ],
  solutionOutcome: "Todo el proceso pasó de manual a automático, sin que nadie tenga que acordarse de hacerlo.",
  closingQuote: {
    text: "Lo que más se nota es que ya no tenemos que estar encima. Sabemos que las fotos están donde tienen que estar, aunque no las hayamos mirado nosotros mismos.",
    author: "Amaya Alonso Asla, Fundadora de Insignia Rehabilitación y Arquitectura",
  },
};
