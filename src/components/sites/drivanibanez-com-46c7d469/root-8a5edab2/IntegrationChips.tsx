"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FileTextIcon } from "../shared/icons";

const CHIPS = [
  { label: "Llega un correo", tag: "Entrada", logo: "/images/logos/mail.svg" },
  {
    label: "Se leen los datos",
    tag: "Lectura",
    logo: "/images/logos/robot.svg",
    logoClassName: "h-5 w-5",
  },
  { label: "Se genera el documento", tag: "Redacción", Icon: FileTextIcon, iconClassName: "h-6 w-6" },
  {
    label: "Se guarda en Drive",
    tag: "Archivado",
    logo: "/images/logos/logo_microsoftwebp.webp",
    logoClassName: "h-4 w-4",
  },
  { label: "Aviso al responsable", tag: "Notificación", logo: "/images/logos/slack.png" },
];

const ROTATE_MS = 1800;

/** Alto de cada chip + separación, en px. La pista se desplaza de uno en uno. */
const STEP_PX = 60;

/** La lista se duplica para que el bucle no tenga un salto visible. */
const LOOP = [...CHIPS, ...CHIPS];

export function IntegrationChips() {
  // `pos` avanza sin parar; al entrar en la copia se reposiciona sin animar.
  const [pos, setPos] = useState(0);
  const [jump, setJump] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setPos((p) => p + 1), ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (pos < CHIPS.length) return;
    // Ya se ve la copia: volvemos al inicio sin transición, salto invisible.
    const t = setTimeout(() => {
      setJump(true);
      setPos(0);
    }, 600);
    return () => clearTimeout(t);
  }, [pos]);

  useEffect(() => {
    if (!jump) return;
    // Reactivamos la transición en el frame siguiente al reposicionamiento.
    const r = requestAnimationFrame(() => setJump(false));
    return () => cancelAnimationFrame(r);
  }, [jump]);

  return (
    // Ventana: corta en móvil (2 chips), alta en desktop (3 chips).
    <div className="relative h-[120px] overflow-hidden md:h-[180px]">
      {/* Pista: se desliza hacia arriba un chip cada vez. */}
      <ul
        className="evo-chips__track flex flex-col gap-3"
        data-jump={jump ? "true" : undefined}
        style={{ transform: `translateY(-${pos * STEP_PX}px)` }}
      >
        {LOOP.map(({ label, tag, Icon, logo, logoClassName, iconClassName }, i) => (
          <li
            key={`${tag}-${i}`}
            aria-hidden={i >= CHIPS.length ? true : undefined}
            data-active={i === pos ? "true" : undefined}
            className="evo-chip flex h-12 items-center gap-3 rounded-[10px] border border-[#07357e]/12 bg-white px-3.5"
            style={{
              boxShadow:
                "0 .6px .6px -1.25px rgba(7,53,126,.06), 0 2.3px 2.3px -2.5px rgba(7,53,126,.05), 0 10px 10px -3.75px rgba(7,53,126,.03)",
            }}
          >
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-[7px] bg-[#07357e]/12"
            >
              {logo ? (
                <Image
                  src={logo}
                  alt=""
                  width={28}
                  height={28}
                  unoptimized={logo.endsWith(".svg")}
                  className={`object-contain ${logoClassName ?? "h-full w-full"}`}
                />
              ) : Icon ? (
                <Icon className={`text-[#07357e] ${iconClassName ?? "h-5 w-5"}`} />
              ) : null}
            </span>
            <span className="text-[14px] leading-tight text-[#07357e]">{label}</span>
            <span className="ml-auto shrink-0 text-[12px] text-[#07357e]/50">{tag}</span>
          </li>
        ))}
      </ul>

      {/* Desvanecido abajo: los chips que entran aparecen progresivamente. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent"
      />
    </div>
  );
}
