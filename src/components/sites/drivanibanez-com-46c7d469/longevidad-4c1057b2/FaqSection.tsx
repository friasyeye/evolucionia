"use client";

import { useState } from "react";
import { ChevronDownIcon } from "../shared/icons";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    q: "¿Qué es la medicina de longevidad y cómo puede ayudarte a vivir más años con mejor salud?",
    a: "La medicina de longevidad busca ayudarte a llegar a más años de vida con más energía, autonomía y calidad de vida. En esta consulta no se aborda desde modas o promesas vacías, sino desde medicina de precisión: diagnóstico avanzado del metabolismo, ejercicio, nutrición y tratamientos regenerativos basados en evidencia. El objetivo no es solo vivir más, sino hacerlo con menos fatiga, menos dolor y más capacidad física y mental.",
  },
  {
    q: "¿Qué es el Método Metabólico® del Dr. Ivan Ibáñez?",
    a: "El Método Metabólico® es un método propio, desarrollado y registrado por el Dr. Iván Ibáñez, que parte de una idea sencilla: antes de pautar ejercicio, nutrición o tratamiento, hay que medir cómo está funcionando realmente tu metabolismo. No se basa en recomendaciones generales, sino en datos obtenidos mediante estudio metabólico en reposo y, cuando hace falta, prueba de esfuerzo con análisis de gases.",
  },
  {
    q: "¿Para qué sirve un estudio del metabolismo en reposo o calorimetría indirecta?",
    a: "La calorimetría indirecta permite saber cuántas calorías necesita tu cuerpo en reposo y cómo está utilizando grasas, hidratos o proteínas. Esa información ayuda a dejar de trabajar con suposiciones y a tomar decisiones más precisas sobre nutrición, pérdida de peso, rendimiento o salud metabólica. En otras palabras: permite personalizar de verdad, no en teoría.",
  },
  {
    q: "¿Qué se puede saber con una prueba de esfuerzo con análisis de gases?",
    a: "La prueba de esfuerzo con gases permite ver cómo responde tu cuerpo durante el ejercicio. Ayuda a detectar problemas que a veces no aparecen en reposo, valorar la seguridad cardiovascular al hacer ejercicio, identificar las pulsaciones donde quemas más grasa, cuándo utilizas más azúcares, cuáles son tus zonas de entrenamiento óptimas y cuál es la edad biológica real de tu cuerpo.",
  },
  {
    q: "¿Qué es la edad biológica y por qué puede ser más importante que la edad cronológica?",
    a: "La edad cronológica dice cuántos años tienes. La edad biológica intenta mostrar cómo está envejeciendo realmente tu cuerpo. Esa diferencia importa porque lo relevante no es solo cumplir años, sino cómo llegas a ellos: con energía, autonomía, buen rendimiento físico y menos riesgo de enfermedad. Por eso conocer tu edad biológica puede ayudarte a orientar mejor el ejercicio, la recuperación y las decisiones de salud a largo plazo.",
  },
  {
    q: "¿Para quién tiene sentido una consulta de rendimiento, longevidad y dolor con enfoque metabólico?",
    a: "Tiene especial sentido para personas activas, deportistas o empresarios que quieren vivir muchos años con salud, mantener energía, rendir mejor y evitar que el dolor les limite. También para quien siente que ya hace muchas cosas para cuidarse, pero quiere dejar de ir a ciegas y empezar a tomar decisiones con base médica y datos reales.",
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
