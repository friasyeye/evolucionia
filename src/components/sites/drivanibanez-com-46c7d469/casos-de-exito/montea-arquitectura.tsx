import type { CaseStudyData } from "./CaseStudyLayout";

export const monteaArquitecturaCase: CaseStudyData = {
  closingPitch: (
    <>
      Si tu estudio también tiene años de proyectos repartidos en carpetas que nadie tiene tiempo
      de repasar, esto podría ser para ti. Y si tu caso es distinto, mejor todavía: así vemos
      juntos qué tiene sentido para tu negocio, no lo que le sirvió a otro.
    </>
  ),
  category: "Base de conocimiento interna",
  badge: "Interno",
  title: "Así tiene Renovamarin todo su histórico de proyectos en un solo asistente",
  intro: (
    <>
      <p>
        <strong className="text-[#07357e]">Renovamarin</strong> es un estudio de arquitectura
        especializado en vivienda residencial y reforma integral, con más de una década de
        proyectos ejecutados.
      </p>
      <p>
        Su forma de trabajar se apoya en la experiencia acumulada proyecto a proyecto, pero esa
        experiencia vivía repartida entre carpetas, PDFs sueltos y la memoria de quien había
        llevado cada encargo.
      </p>
    </>
  ),
  imageSrc: "/images/renovamarin-caso.jpg",
  imageAlt: "Renovamarin",
  logoSrc: "/images/logos/renovamarin.webp",
  metrics: [
    { value: "70%", label: "menos tiempo buscando cómo se resolvió algo en un proyecto anterior." },
    {
      value: "+10 años",
      label: "de proyectos con todo el histórico del estudio accesible en segundos, no repartido en carpetas.",
    },
    { value: "De horas a minutos", label: "en reunir los precedentes para la memoria técnica de un proyecto nuevo." },
  ],
  quote: {
    text: "Antes, cada vez que arrancábamos un proyecto parecido a otro que ya habíamos hecho, tocaba rebuscar carpeta por carpeta o preguntar a quien se acordara. Ahora se lo preguntamos al asistente y en segundos tenemos la referencia.",
    author: "Joel Marin, fundador de Renovamarin",
  },
  challengeIntro:
    "Antes del asistente, encontrar cómo se había resuelto algo en un proyecto anterior dependía casi por completo de la memoria de quien lo había llevado. Esto incluía:",
  challengePoints: [
    "Buscar manualmente entre carpetas de proyectos de años distintos, sin un criterio común de organización.",
    "Preguntar directamente a la persona que había llevado ese proyecto, si seguía en el estudio.",
    "Repetir decisiones ya tomadas antes por no encontrar el precedente a tiempo.",
  ],
  challengeOutcome:
    "El resultado: horas perdidas cada vez que un proyecto nuevo se parecía a uno anterior, y conocimiento del estudio que se iba con cada persona que lo dejaba.",
  solutionIntro: "Renovamarin implementó un asistente interno que:",
  solutionPoints: [
    "Conoce el contenido de todos los proyectos anteriores del estudio.",
    'Responde preguntas directas del tipo "cómo resolvimos la ventilación en el proyecto de tal calle".',
    "Sirve como punto de partida para las memorias técnicas de proyectos nuevos, citando los precedentes usados.",
    "Se actualiza automáticamente con cada proyecto nuevo que se cierra.",
  ],
  solutionOutcome:
    "El conocimiento del estudio dejó de depender de que alguien se acordara, y pasó a estar disponible para todo el equipo.",
  closingQuote: {
    text: "Lo que más nos tranquiliza es que ese conocimiento ya no depende de que alguien se acuerde o siga trabajando aquí. Está ahí, disponible para todo el equipo.",
    author: "Joel Marin, fundador de Renovamarin",
  },
};
