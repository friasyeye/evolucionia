import type { CaseStudyData } from "./CaseStudyLayout";

export const decorRevestimientosCase: CaseStudyData = {
  closingPitch: (
    <>
      Si tu empresa también rehace presupuestos parecidos a otros que ya hiciste antes, esto
      podría ser para ti. Y si tu caso es distinto, mejor todavía: así vemos juntos qué tiene
      sentido para tu negocio, no lo que le sirvió a otro.
    </>
  ),
  category: "Herramienta a medida",
  badge: "Interno",
  title: "Cómo Decor Revestimientos dejó de rehacer presupuestos desde cero cada vez",
  intro: (
    <>
      <p>
        <strong className="text-[#07357e]">Decor Revestimientos</strong> es una empresa de
        aplicación de microcemento y Mortex en Barcelona, especializada en reformas y acabados
        decorativos para particulares y profesionales.
      </p>
    </>
  ),
  imageSrc: "/images/decor-caso.jpg",
  imageAlt: "Decor Revestimientos",
  logoSrc: "/images/logos/logo_decor.png",
  metrics: [
    { value: "~7h a la semana", label: "menos dedicadas a preparar cada presupuesto." },
    {
      value: "Biblioteca de partidas",
      label: "los costes de materiales se guardan una vez y se reutilizan en todos los presupuestos siguientes.",
    },
    {
      value: "Seguimiento de cada presupuesto",
      label: "aceptado, pendiente o rechazado, de un vistazo, sin repasarlos uno a uno.",
    },
  ],
  quote: {
    text: "La verdad que me gusta mucho porque es muy sencillo e intuitivo, lo tengo ya muy pillado.",
    author: "Israel Acosta, Fundador de Decor Revestimientos",
  },
  challengeIntro: "Antes de tener la herramienta, cada presupuesto se preparaba prácticamente desde cero:",
  challengePoints: [
    "Buscar y recalcular los costes de los materiales cada vez, sin un histórico centralizado.",
    "Rehacer partidas parecidas a las de presupuestos anteriores en vez de reutilizarlas.",
    "No tener un registro claro de qué presupuestos estaban aceptados, pendientes o rechazados.",
    "Depender de archivos sueltos para los datos de cada cliente.",
  ],
  challengeOutcome:
    "El resultado: horas dedicadas cada semana a un trabajo repetitivo que, en gran parte, ya se había hecho antes para otro cliente.",
  solutionIntro: "Se montó una mini app a medida que permite:",
  solutionPoints: [
    "Crear presupuestos por partidas de forma rápida.",
    "Guardar una biblioteca de partidas con los costes de materiales, lista para reutilizar en cualquier presupuesto nuevo.",
    "Guardar los datos de cada cliente y reutilizar presupuestos anteriores como base para uno nuevo.",
    "Ver de un vistazo en qué estado está cada presupuesto: aceptado, pendiente o rechazado.",
  ],
  solutionOutcome:
    "Preparar un presupuesto pasó de empezar de cero cada vez a partir siempre de algo ya construido.",
  closingQuote: {
    text: "Ahora tardamos muchísimo menos en hacer los presupuestos y tenemos todo más organizado.",
    author: "Israel Acosta, Decor Revestimientos",
  },
};
