"use client";

import { useState } from "react";
import { ChevronDownIcon } from "../shared/icons";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    q: "¿Puedo contratar solo un servicio de automatización o tengo que hacer un proyecto completo?",
    a: "Sí, puedes empezar contratando un solo servicio — un chatbot, una automatización concreta o un agente de IA. En el diagnóstico gratuito valoramos qué necesitas, y muchas veces el proyecto acaba combinando varias piezas, pero nunca es obligatorio contratar más de lo que hace falta.",
  },
  {
    q: "¿Cómo sé si lo que necesito es una automatización, un chatbot o un agente de IA?",
    a: "No hace falta que lo sepas antes de contactarnos. En la llamada de diagnóstico nos cuentas dónde se pierde tiempo en tu negocio y nosotros te decimos qué tipo de solución encaja mejor con tu caso.",
  },
  {
    q: "¿Con qué tipos de empresas trabaja Evolución IA?",
    a: "Hemos trabajado con inmobiliarias, academias, despachos de abogados y negocios de hostelería y restauración, entre otros. Ahora mismo estamos centrados sobre todo en estudios de arquitectura, que es donde tenemos más casos recientes y experiencia acumulada, pero seguimos abiertos a cualquier negocio con procesos repetitivos que merezca la pena automatizar.",
  },
  {
    q: "¿Tengo que implementar todas las automatizaciones que salgan en el diagnóstico?",
    a: "No. Del diagnóstico sale un roadmap con distintas fases posibles, y tú decides qué alcance implementar primero. No hace falta abordar todo lo identificado de una vez — se puede ir por fases según lo que tenga más impacto o prioridad para ti.",
  },
  {
    q: "¿Qué pasa si en el diagnóstico no encontráis nada que valga la pena automatizar?",
    a: "Te lo decimos directamente. El diagnóstico es gratuito precisamente porque a veces la conclusión es que no hay retorno suficiente todavía, y preferimos decírtelo antes de proponerte nada que no vaya a servir.",
  },
];

export function ServiciosFaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="w-full bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[860px]">
        <h2 className="font-tight text-center text-[clamp(2rem,3.4vw,2.8rem)] font-semibold leading-tight text-[#07357e]">
          Preguntas frecuentes
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
