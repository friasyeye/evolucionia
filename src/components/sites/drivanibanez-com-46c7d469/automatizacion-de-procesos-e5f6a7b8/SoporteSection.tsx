import Image from "next/image";
import { Reveal } from "../shared/Reveal";

const CARDS = [
  {
    title: "Monitorización constante",
    body: "Los fallos pueden aparecer — estamos preparados para ellos. Vigilamos el sistema de forma continua para detectarlos a tiempo y resolverlos antes de que se conviertan en un problema mayor.",
    img: "/images/servidoresjpg.jpg",
  },
  {
    title: "Crece si tu negocio crece",
    body: "Si más adelante hay más procesos que automatizar, el sistema se amplía sobre lo que ya existe — no hace falta empezar de cero cada vez.",
    img: "/images/datos.jpg",
  },
  {
    title: "Sin permanencia forzada",
    body: "No hay contratos eternos ni penalizaciones por dejarlo. Si un día decides que ya no lo necesitas, te vas cuando quieras.",
    img: "/images/mantenimiento.jpg",
  },
];

export function SoporteSection() {
  return (
    <section className="w-full bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal
          as="h2"
          className="font-tight max-w-[20ch] text-[clamp(2rem,3.4vw,2.8rem)] font-semibold leading-[1.05] text-[#07357e]"
        >
          Esto no acaba en la entrega
        </Reveal>

        <Reveal className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-[#07357e]/80">
          Así seguimos después de que el sistema esté funcionando.
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <Reveal key={card.title}>
              <article
                className="flex h-full flex-col rounded-[8px] p-8"
                style={{ background: "linear-gradient(160deg, #2f6fd6 0%, #1e5bb0 100%)" }}
              >
                <h3 className="font-tight text-[19px] font-semibold leading-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/80">{card.body}</p>

                <div className="mt-auto pt-6">
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      quality={85}
                      sizes="(min-width: 768px) 380px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
