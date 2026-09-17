"use client";

import { useState } from "react";
import { ArrowRightIcon, StarIcon } from "../shared/icons";

const MODALIDADES = [
  "1.000-3.000€",
  "3.000-6.000€",
  "Más de 6.000€",
  "Prefiero hablarlo en la llamada",
];

// Formatea el teléfono como "+34 XXX XX XX XX" a medida que se escribe.
function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").replace(/^34/, "").slice(0, 9);
  const groups = [digits.slice(0, 3), digits.slice(3, 5), digits.slice(5, 7), digits.slice(7, 9)].filter(Boolean);
  return `+34 ${groups.join(" ")}`.trimEnd();
}

export function CitaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("+34 ");

  return (
    <section
      className="w-full px-5 pt-28 pb-16 md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #f5f5f5 50%)" }}
    >
      {/* header text */}
      <div className="mx-auto max-w-[1000px] text-center">
        <h1 className="font-tight text-[clamp(2rem,3.4vw,2.7rem)] font-normal text-white">
          Cuéntanos tu <span className="font-bold">caso</span>
        </h1>
        <p className="mx-auto mt-3 max-w-[46ch] text-[17px] text-white/90">
          Te respondemos en menos de 24 horas
        </p>
      </div>

      {/* card */}
      <div
        className="mx-auto mt-10 grid w-full max-w-[1000px] gap-6 rounded-[10px] bg-white p-4 md:grid-cols-2 md:p-5"
        style={{ boxShadow: "0 10px 15px -3px rgba(0,0,0,0.04), 0 4px 6px -4px rgba(0,0,0,0.05)" }}
      >
        {/* left panel */}
        <div
          className="flex flex-col justify-between gap-16 rounded-[10px] p-8 md:p-10"
          style={{ background: "linear-gradient(33deg, #07357e, #051d42)" }}
        >
          <h2 className="font-tight text-[clamp(1.6rem,2.2vw,1.9rem)] font-normal text-white">
            20-30 min · Por videollamada
          </h2>

          <div>
            <img
              src="/images/logos/Sergi_safo.png"
              alt="Sergi Safo"
              className="mb-4 h-12 w-12 rounded-full object-cover"
            />
            <p className="text-[17px] font-normal text-[#56c5f2]">¿Prefieres hablar directamente?</p>
            <p className="mt-1 text-[17px] text-white">
              Agenda una llamada y hablamos hoy mismo, sin esperar a que te contestemos por email.
            </p>
            <a
              href="https://calendar.app.google/cde2o1czTcgHYRyz5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-[15px] text-white underline underline-offset-4 transition-colors hover:text-[#56c5f2]"
            >
              Agendar llamada
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* form */}
        <form
          className="flex flex-col gap-6 px-2 py-4 md:px-6 md:py-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="text"
            required
            placeholder="Nombre"
            className="border-b border-[#07357e] bg-transparent px-2 py-2 text-[14px] text-[#07357e] placeholder:text-[#07357e]/70 focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="border-b border-[#07357e] bg-transparent px-2 py-2 text-[14px] text-[#07357e] placeholder:text-[#07357e]/70 focus:outline-none"
          />
          <input
            type="text"
            required
            placeholder="¿A qué se dedica tu negocio?"
            className="border-b border-[#07357e] bg-transparent px-2 py-2 text-[14px] text-[#07357e] placeholder:text-[#07357e]/70 focus:outline-none"
          />
          <input
            type="text"
            required
            placeholder="¿Qué te gustaría automatizar?"
            className="border-b border-[#07357e] bg-transparent px-2 py-2 text-[14px] text-[#07357e] placeholder:text-[#07357e]/70 focus:outline-none"
          />
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            placeholder="+34 600 00 00 00"
            className="border-b border-[#07357e] bg-transparent px-2 py-2 text-[14px] text-[#07357e] placeholder:text-[#07357e]/70 focus:outline-none"
          />
          <select
            required
            defaultValue=""
            className="border-b border-[#07357e] bg-transparent px-2 py-2 text-[14px] text-[#07357e] focus:outline-none"
          >
            <option value="" disabled>
              Inversión
            </option>
            {MODALIDADES.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <label className="flex items-center gap-2 text-[14px] text-[#07357e]">
            <input type="checkbox" required className="h-4 w-4 accent-[#07357e]" />
            He leído y acepto la política de privacidad
          </label>

          <button
            type="submit"
            className="mt-2 self-start bg-[#07357e] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.5px] text-[#f5f5f5] transition-colors hover:bg-[#052a66]"
          >
            {submitted ? "¡Enviado!" : "Pedir cita"}
          </button>
        </form>
      </div>

      {/* rating */}
      <div className="mx-auto mt-10 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[17px] font-semibold text-[#07357e]">4.9</span>
          <div className="flex gap-0.5 text-[#56c5f2]">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4" />
            ))}
          </div>
        </div>
        <p className="text-[15px] text-[#07357e]">
          Basado en <span className="font-semibold">23 reseñas</span>
        </p>
      </div>
    </section>
  );
}
