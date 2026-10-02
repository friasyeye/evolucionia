"use client";

import { useState } from "react";
import { ChevronDownIcon } from "../shared/icons";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    q: "¿Qué tipo de procesos se pueden automatizar en una empresa?",
    a: "Cualquier tarea que se repita siempre igual y se pueda describir paso a paso: rellenar documentos, mover archivos entre carpetas o herramientas, avisar cuando algo cambia de estado, actualizar la misma información en varios sitios. Si lo puedes explicar como una secuencia de pasos, probablemente se puede automatizar.",
  },
  {
    q: "¿Tengo que cambiar las herramientas que ya uso para automatizar un proceso?",
    a: "No. Conectamos el sistema a las herramientas que ya usa tu equipo — correo, documentos, CRM, WhatsApp — en vez de pedirte que migres a algo nuevo. El objetivo es que tu equipo siga trabajando igual, solo que sin la parte repetitiva.",
  },
  {
    q: "¿La automatización de procesos sirve también para tareas que no son 100% repetitivas?",
    a: "Depende. Si la tarea tiene reglas claras aunque varíe un poco cada vez, normalmente sí se puede automatizar una gran parte. Si depende completamente del criterio de una persona en cada caso, esa parte se queda para tu equipo — nosotros solo quitamos lo mecánico.",
  },
  {
    q: "¿Qué diferencia hay entre una automatización de procesos y un agente de IA?",
    a: "Una automatización de procesos sigue una secuencia de pasos fija que definimos de antemano. Un agente de IA toma decisiones dentro de un margen, porque el caso varía más de lo que se puede prever paso a paso. Muchas veces el sistema que montamos usa las dos cosas juntas, según qué parte del proceso lo necesite.",
  },
  {
    q: "¿Puedo automatizar varios procesos a la vez o hay que hacerlo uno por uno?",
    a: "Se puede ir por fases o a la vez, según lo que tenga sentido para tu negocio. En el diagnóstico priorizamos por impacto — normalmente empezamos por el proceso que más tiempo te está quitando ahora mismo.",
  },
  {
    q: "¿Qué pasa si cambio de herramienta o programa después de automatizar un proceso?",
    a: "El sistema se ajusta para seguir funcionando con la nueva herramienta. Por eso el seguimiento después de la entrega no es opcional para nosotros — si algo cambia por tu parte, lo adaptamos.",
  },
  {
    q: "¿La automatización de procesos requiere usar inteligencia artificial?",
    a: "No siempre. Algunas automatizaciones son puramente mecánicas y no necesitan IA para nada — solo la usamos cuando de verdad aporta algo, por ejemplo para leer e interpretar texto que no viene en un formato fijo.",
  },
];

export function AutomatizacionFaqSection() {
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
