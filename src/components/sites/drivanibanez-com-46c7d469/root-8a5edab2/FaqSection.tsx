"use client";

import { useState } from "react";
import { ChevronDownIcon } from "../shared/icons";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    q: "¿Cuánto cuesta automatizar procesos con IA?",
    a: "Depende del proceso: no es lo mismo automatizar un flujo de correos que montar un sistema completo conectado a varias herramientas. Por eso no damos una cifra cerrada de entrada — en el diagnóstico gratuito analizamos tu caso y te decimos el precio exacto antes de que decidas nada, sin sorpresas después.",
  },
  {
    q: "¿Cuánto se tarda en tener el primer sistema funcionando?",
    a: "En menos de 45 días ya hay trabajo que tu equipo deja de hacer a mano. El plazo exacto depende de cuántas herramientas haya que conectar y de la complejidad del proceso, pero esa primera automatización siempre llega antes de que pase mes y medio.",
  },
  {
    q: "¿Necesito conocimientos técnicos o tener a alguien de IT en el equipo?",
    a: "No. Nosotros montamos, conectamos y dejamos el sistema funcionando; tu equipo solo tiene que usarlo igual que ya usa el correo o el CRM. Si algo hay que tocar o revisar más adelante, esa parte también la llevamos nosotros.",
  },
  {
    q: "¿En qué se diferencia esto de usar ChatGPT directamente?",
    a: "ChatGPT es una herramienta que alguien tiene que abrir, usar y revisar cada vez. Lo que montamos nosotros es un sistema a medida, integrado en tus procesos, que actúa solo sin que nadie tenga que operarlo. Son dos categorías distintas, no dos opciones que compitan entre sí.",
  },
  {
    q: "¿Qué pasa si algo falla?",
    a: "Lo revisamos y lo arreglamos nosotros. Antes de entregar cualquier sistema dejamos previsto qué hacer si un paso falla o una conexión se cae, para que no dependa de que tu equipo lo detecte a mano.",
  },
  {
    q: "¿Incluye mantenimiento después de la entrega?",
    a: "Sí. No desaparecemos el día que se firma: revisamos periódicamente que el sistema siga funcionando bien y siga conectado solo a lo que debe.",
  },
  {
    q: "¿Sirve para cualquier tipo de negocio o solo para algunos sectores?",
    a: "Sirve para cualquier negocio con procesos repetitivos que hoy hace una persona a mano; hemos trabajado con despachos, inmobiliarias y academias, entre otros. Ahora mismo nos estamos especializando además en estudios de arquitectura, donde ya conocemos bien los procesos del sector.",
  },
];

export function FaqSection() {
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
