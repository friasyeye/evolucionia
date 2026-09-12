"use client";

import { useState } from "react";
import { asset } from "./assets";
import { Reveal } from "../shared/Reveal";
import { cn } from "@/lib/utils";

const TABS = [
  {
    label: "Sobrepeso y obesidad",
    img: "obesidad-mujer-1.avif",
    title: "Sobrepeso y obesidad",
    subtitle: "Deja de luchar contra tu peso. Empieza a entender tu metabolismo.",
    paragraphs: [
      "No se trata solo de perder kilos. Se trata de que tu cuerpo vuelva a responder. Bajar grasa, recuperar energía y mejorar tu calidad de vida es el resultado. Sin soluciones extremas. Sin improvisar.",
      "En nuestra unidad realizamos un abordaje médico integral para identificar la causa real del exceso de peso o del lipedema.",
    ],
    pruebas: [
      "Calorimetría indirecta en reposo (medición precisa del metabolismo basal)",
      "Análisis de cociente respiratorio (RQ) y flexibilidad metabólica",
      "Estudio de composición corporal avanzada (masa grasa, masa magra, agua corporal)",
      "Ecografía clínica para valoración de tejido adiposo y diagnóstico diferencial",
      "Evaluación de distribución grasa segmentaria",
      "Analítica metabólica y hormonal personalizada",
      "Evaluación de inflamación de bajo grado",
      "Estudio de resistencia a la insulina",
      "Valoración del gasto energético y adaptación metabólica",
    ],
  },
  {
    label: "Lipedema",
    img: "lipedema-ejemplo-1.avif",
    title: "Lipedema",
    subtitle: "El lipedema no es solo una cuestión estética.",
    paragraphs: [
      "Detrás hay dolor, inflamación y la sensación de que nadie entiende lo que te ocurre. Aquí no aplicamos dietas genéricas.",
      "Analizamos cómo funciona tu metabolismo y adaptamos nutrición y ejercicio a tu fisiología, para reducir inflamación, mejorar movilidad y ayudarte a sentir que vuelves a tener control sobre tu cuerpo.",
    ],
    pruebas: [
      "Diagnóstico clínico especializado",
      "Diferenciación entre lipedema, obesidad y linfedema",
      "Valoración de dolor, fibrosis y afectación tisular",
      "Ecografía para valoración estructural del tejido adiposo",
      "Estrategias antiinflamatorias específicas para lipedema",
    ],
  },
  {
    label: "Otros tratamientos",
    img: "DSF4075.avif",
    title: "Otros tratamientos",
    subtitle: "Tu metabolismo es único, y por eso el tratamiento también debería serlo.",
    paragraphs: [
      "Antes de definir nutrición, ejercicio o cualquier intervención, analizamos cómo responde tu metabolismo para poder diseñar una estrategia médica realmente personalizada.",
      "El objetivo es actuar sobre las causas y ayudarte a mejorar tu salud con un enfoque adaptado a tu cuerpo.",
    ],
    pruebas: [
      "Plan nutricional clínico personalizado",
      "Estrategias low-carb, cetogénicas o periodizadas según metabolismo",
      "Programación de ejercicio adaptado al perfil metabólico",
      "Protocolos para mejorar la flexibilidad metabólica",
      "Hipoxia intermitente aplicada al metabolismo",
      "Suplementación médica personalizada",
      "Infiltraciones ecoguiadas en casos de dolor asociado",
      "Ultrasonidos focales de bajo índice mecánico",
      "Plasma rico en plaquetas (PRP) en casos seleccionados",
    ],
  },
];

export function EspecialidadesTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section id="especialidades" className="w-full bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal className="text-[14px] font-medium uppercase tracking-[0.1em] text-[#56c5f2]">
          Entender antes de tratar
        </Reveal>
        <Reveal
          as="h2"
          className="font-tight mt-3 text-[clamp(2.4rem,4vw,3.4rem)] font-semibold leading-none text-[#07357e]"
        >
          Especialidades
        </Reveal>
        <Reveal className="mt-3 text-[17px] text-[#07357e]/80">
          No todos los cuerpos necesitan lo mismo.
        </Reveal>

        {/* tabs */}
        <div className="mt-10 flex flex-wrap gap-3">
          {TABS.map((t, i) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-[14px] font-medium transition-colors",
                i === active
                  ? "border-[#07357e] bg-[#07357e] text-white"
                  : "border-[#07357e]/25 text-[#07357e] hover:border-[#07357e]/60"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* panel */}
        <div className="mt-8 grid items-stretch gap-8 rounded-[12px] border border-[#07357e]/12 p-5 md:grid-cols-2 md:p-6">
          <div className="overflow-hidden rounded-[10px]">
            <img
              src={asset(tab.img)}
              alt={tab.title}
              className="h-full min-h-[300px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center py-2">
            <h3 className="font-tight text-[clamp(1.5rem,2.2vw,2rem)] font-semibold text-[#07357e]">
              {tab.title}
            </h3>
            <p className="mt-2 text-[16px] font-medium text-[#56c5f2]">{tab.subtitle}</p>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[#07357e]/85">
              {tab.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <a
              href="/cita"
              className="mt-6 inline-block self-start bg-[#07357e] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#f5f5f5] transition-colors hover:bg-[#052a66]"
            >
              Pedir cita
            </a>
          </div>
        </div>

        {/* pruebas */}
        <div className="mt-12">
          <h3 className="font-tight text-[20px] font-semibold text-[#07357e]">Pruebas diagnósticas</h3>
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {tab.pruebas.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-[#07357e]/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#56c5f2]" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
