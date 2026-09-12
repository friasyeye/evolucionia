import { Reveal } from "../shared/Reveal";

export function MedicinaRealSection() {
  return (
    <section className="w-full bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 md:grid-cols-3">
        <Reveal
          as="h2"
          className="font-tight text-[clamp(2rem,3vw,2.6rem)] font-semibold leading-[1.05] text-[#07357e]"
        >
          De cero a funcionando
        </Reveal>

        <Reveal className="space-y-4 text-[16px] leading-relaxed text-[#07357e]">
          <p>
            Empezamos mirando cómo se mueve el trabajo en tu empresa y salimos de ahí con las
            tareas que se pueden quitar antes. Por esas empezamos: en menos de 45 días ya hay
            trabajo que tu equipo deja de hacer.
          </p>
          <p>Lo que venga después lo decides tú.</p>
        </Reveal>

        <Reveal className="text-[16px] leading-relaxed text-[#07357e]" delay={120}>
          <p>
            El sistema puede crecer —sumar procesos, conectarse con más herramientas, ocuparse de
            cosas que hoy no están sobre la mesa— o quedarse exactamente como está.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
