import type { CaseStudyData } from "./CaseStudyLayout";

export const maoStudioCase: CaseStudyData = {
  closingPitch: (
    <>
      Si en tu estudio también hay expedientes que se gestionan correo a correo, con visitas,
      documentación y plantillas que rellenar a mano, esto podría ser para ti. Y si tu caso es
      distinto, mejor todavía: así vemos juntos qué tiene sentido para tu negocio, no lo que le
      sirvió a otro.
    </>
  ),
  category: "Automatización interna",
  badge: "Interno",
  title: "Cómo Mao Studio automatizó la tramitación de cédulas de habitabilidad y emplazamiento",
  intro: (
    <>
      <p>
        <strong className="text-[#07357e]">Mao Studio</strong> es un estudio de arquitectura que
        gestiona, entre otros trámites, cédulas de habitabilidad y planos de emplazamiento para
        sus clientes, coordinando documentación, visitas técnicas y expedientes administrativos.
      </p>
    </>
  ),
  imageSrc: "/images/mao-caso.jpg",
  imageAlt: "Mao Studio",
  logoSrc: "/images/logos/mao_studio.webp",
  logoWidthClass: "w-[18%] max-w-[90px]",
  metrics: [
    { value: "25h al mes", label: "liberadas del trabajo administrativo de gestionar cada expediente a mano." },
    {
      value: "Localiza la parcela sola",
      label: "el sistema entra al Catastro, encuentra la ubicación y monta el plano marcado, sin que nadie tenga que hacerlo a mano.",
    },
    {
      value: "De varios correos sueltos",
      label: "a un expediente que se tramita solo, de principio a fin.",
    },
  ],
  quote: {
    text: "Me pareció una locura que la propia IA se metiera en el Catastro a buscar la parcela y montara el plano ella sola. Nos ha ahorrado unas 6 horas a la semana que antes se iban en gestionar cada expediente a mano.",
    author: "Jorge, fundador de Mao Studio",
  },
  challengeIntro:
    "Antes de la automatización, tramitar una cédula de habitabilidad implicaba varios pasos manuales encadenados:",
  challengePoints: [
    "Responder al cliente pidiendo la factura de luz y la nota simple cuando no las adjuntaba en su primer correo.",
    "Crear a mano una carpeta en OneDrive para cada expediente y organizar ahí la documentación recibida.",
    "Coordinar la visita técnica y, después, procesar a mano el correo del técnico con las notas tomadas in situ.",
    "Rellenar manualmente el PDF de la cédula y el del emplazamiento con esos datos.",
    "Buscar la ubicación catastral, capturar el plano marcado y montarlo junto con la foto del emplazamiento que aportaba el técnico.",
  ],
  challengeOutcome:
    "El resultado: un proceso administrativo largo, repartido entre varias personas y varios pasos manuales, fácil de retrasar si alguien no tenía un hueco ese día.",
  solutionIntro: "Se montó una automatización que:",
  solutionPoints: [
    "Detecta cuando un cliente escribe interesado en una cédula y responde automáticamente pidiendo la factura de luz y la nota simple si no vienen adjuntas.",
    "Crea automáticamente la ficha del expediente en OneDrive con toda la documentación ya organizada.",
    "Cuando el técnico envía su correo con las notas de la visita, un agente de IA extrae la información necesaria y rellena el PDF de la cédula y el emplazamiento.",
    "A partir de la referencia catastral que envía el técnico, localiza la parcela en el Catastro, captura el plano con la ubicación marcada, y lo combina con la foto de emplazamiento aportada por el técnico.",
  ],
  solutionOutcome:
    "Todo el expediente pasa de gestionarse a mano, correo a correo, a tramitarse solo de principio a fin.",
  closingQuote: {
    text: "Que la IA pueda encargarse de todo esto nos permite centrarnos en las cosas de verdadero valor.",
    author: "Jorge, fundador de Mao Studio",
  },
};
