import type { CaseStudyData } from "./CaseStudyLayout";

export const ekoTourCase: CaseStudyData = {
  closingPitch: (
    <>
      Si en tu negocio también hay documentación repetitiva que se rellena y envía a mano cada
      vez, esto podría ser para ti. Y si tu caso es distinto, mejor todavía: así vemos juntos qué
      tiene sentido para tu negocio, no lo que le sirvió a otro.
    </>
  ),
  category: "Automatización interna",
  badge: "Interno",
  title: "Cómo Eko Tour Tennis Academy dejó de perseguir firmas y papeleo cada temporada",
  intro: (
    <>
      <p>
        <strong className="text-[#07357e]">Eko Tour Tennis Academy</strong> es una academia de
        tenis en Barcelona que forma a jugadores de todas las edades y niveles. Cada temporada
        gestiona decenas de inscripciones nuevas, con toda la documentación y el papeleo que eso
        conlleva para cada alumno.
      </p>
    </>
  ),
  imageSrc: "/images/eko-tour-caso.jpg",
  imageAlt: "Eko Tour Tennis Academy",
  logoSrc: "/images/logos/eko_tour.webp",
  logoWidthClass: "w-[32%] max-w-[140px]",
  metrics: [
    { value: "85%", label: "menos errores en la documentación de cada inscripción." },
    { value: "5h a la semana", label: "liberadas del papeleo de inscripciones." },
    {
      value: "Todo en un mismo sitio",
      label: "el estado de cada alumno (firmado, pendiente o sin enviar) visible de un vistazo, sin repasar carpeta por carpeta.",
    },
  ],
  quote: {
    text: "Ahora tengo todo mucho más organizado y controlado. Antes esto se comía un montón de tiempo, y ese tiempo ahora lo dedico a hacer crecer la academia.",
    author: "Ricard Ros, fundador de Eko Tour Tennis Academy",
  },
  challengeIntro: "Antes de la automatización, cada inscripción implicaba varios pasos manuales por alumno:",
  challengePoints: [
    "Rellenar a mano la ficha del alumno, la autorización de imagen y la ficha médica para cada inscripción.",
    "Guardar cada documento manualmente en la carpeta correspondiente, organizada por temporada.",
    "Enviar cada documento por WhatsApp o email para que padres y alumnos lo firmaran.",
    "No tener un control centralizado de quién había firmado ya, quién tenía la documentación pendiente y quién ni siquiera la había recibido.",
  ],
  challengeOutcome:
    "El resultado: papeleo repetitivo por cada alumno, temporada tras temporada, y ningún sistema para saber de un vistazo en qué punto estaba cada uno.",
  solutionIntro:
    "Con un formulario donde se recogen los datos del alumno y del tutor, un flujo en n8n genera automáticamente los tres documentos (ficha, autorización de imagen y ficha médica) a partir de plantillas ya rellenadas, y los guarda directamente en la carpeta del alumno en OneDrive, organizada por temporada.",
  solutionPoints: [
    "Genera automáticamente la ficha, la autorización de imagen y la ficha médica a partir de plantillas.",
    "Guarda cada documento en la carpeta del alumno en OneDrive, organizada por temporada.",
    "El responsable revisa y envía el documento para su firma.",
    "En cuanto se envía, el estado se actualiza automáticamente en el CRM: completa, pendiente de firma o sin enviar.",
  ],
  solutionOutcome:
    "El responsable revisa y envía el documento para su firma; en cuanto se envía, el estado se actualiza automáticamente en el CRM, mostrando de un vistazo qué alumnos tienen la documentación completa, pendiente de firma o sin enviar todavía.",
  closingQuote: {
    text: "No sabía que esto se pudiera automatizar así. Me sorprendió que funcionara con nuestros procesos de siempre, sin tener que cambiar de herramientas ni de programas.",
    author: "Ricard Ros, fundador de Eko Tour Tennis Academy",
  },
};
