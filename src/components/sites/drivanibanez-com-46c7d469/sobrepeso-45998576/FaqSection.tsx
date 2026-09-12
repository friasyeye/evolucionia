"use client";

import { useState } from "react";
import { ChevronDownIcon } from "../shared/icons";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    q: "Nunca he logrado conseguir perder peso. ¿Qué cambia con su método?",
    a: "Que no empezamos por darte otra dieta genérica. Primero estudiamos cómo funciona tu metabolismo: cuánto gastas realmente, qué tipo de energía utiliza tu cuerpo y cómo responde al ejercicio. Muchas personas no fracasan porque les falte fuerza de voluntad, sino porque han seguido pautas que no estaban adaptadas a su fisiología. El Método Metabólico permite personalizar la nutrición y el ejercicio según tus datos reales, no según fórmulas estándar. Así podemos entender qué está frenando tu pérdida de peso y diseñar una estrategia más precisa, sostenible y ajustada a ti.",
  },
  {
    q: "¿Tendré que hacer deporte o dieta estricta?",
    a: "No se trata de vivir a dieta ni de machacarte haciendo deporte. El objetivo es encontrar una pauta que puedas mantener en tu vida real. En algunos casos habrá que ajustar la alimentación; en otros, mejorar el tipo de ejercicio, la intensidad o la frecuencia. Pero siempre desde un enfoque progresivo, realista y adaptado a ti.",
  },
  {
    q: "¿Qué pasa si lo mio es genético?",
    a: "La genética influye, pero no lo explica todo ni lo determina todo. Puede hacer que tengas más tendencia a acumular grasa, más facilidad para ganar peso o más dificultad para perderlo. Pero el metabolismo, la alimentación, el ejercicio, el descanso, las hormonas, la inflamación y el estilo de vida también tienen un papel importante. El enfoque no es culparte ni decirte “come menos y muévete más”. Es entender qué margen de mejora existe en tu caso y trabajar desde ahí con datos, criterio médico y una estrategia realista.",
  },
  {
    q: "¿Cuanto cuesta el servicio?",
    a: "El precio depende del tipo de valoración, las pruebas necesarias y el seguimiento que necesite cada persona. No todos los casos requieren lo mismo: hay pacientes que necesitan un estudio metabólico inicial y una pauta personalizada, y otros que requieren un acompañamiento más completo por antecedentes, sobrepeso, obesidad, menopausia, lipedema, problemas hormonales o dificultad mantenida para perder peso.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[860px]">
        <h2 className="font-tight text-center text-[clamp(2rem,3.4vw,2.8rem)] font-semibold leading-tight text-[#07357e]">
          Preguntas Frecuentes
        </h2>

        <div className="mt-12 divide-y divide-[#07357e]/12 border-y border-[#07357e]/12">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-tight text-[17px] font-semibold text-[#07357e] md:text-[18px]">
                    {item.q}
                  </span>
                  <ChevronDownIcon
                    className={cn(
                      "h-5 w-5 shrink-0 text-[#56c5f2] transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  )}
                >
                  <p className="min-h-0 text-[15px] leading-relaxed text-[#07357e]/80">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
