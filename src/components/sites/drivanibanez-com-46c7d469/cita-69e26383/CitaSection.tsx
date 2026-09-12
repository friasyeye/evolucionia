"use client";

import { useState } from "react";
import { ArrowRightIcon, StarIcon } from "../shared/icons";

const IMG = "/sites/drivanibanez-com-46c7d469/cita-69e26383/images";

const MODALIDADES = [
  "Videollamada · 150€",
  "Presencial Dolor/Sobrepeso/Lipedema Girona - 80€",
  "Presencial Longevidad en Girona · 200€ (1h de visita)",
  "Presencial en Andorra",
];

export function CitaSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      className="w-full px-5 pt-28 pb-16 md:px-8"
      style={{ background: "linear-gradient(180deg, #07357e 0%, #f5f5f5 50%)" }}
    >
      {/* header text */}
      <div className="mx-auto max-w-[1000px] text-center">
        <h1 className="font-tight text-[clamp(2rem,3.4vw,2.7rem)] font-normal text-white">
          Solicita tu <span className="font-bold">consulta</span>
        </h1>
        <p className="mx-auto mt-3 max-w-[46ch] text-[17px] text-white/90">
          Recibirás una llamada para confirmar la cita en 24/48 horas
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
            Online / Presencial
          </h2>

          <div>
            <img
              src={`${IMG}/dr-ivan-ibanez-perfil.webp`}
              alt="Dr. Iván Ibáñez"
              className="mb-4 h-12 w-12 rounded-full object-cover"
            />
            <p className="text-[17px] font-normal text-[#56c5f2]">¿ERES PROFESIONAL?</p>
            <p className="mt-1 text-[17px] text-white">Accede a la formación online.</p>
            <a
              href="/#metodo"
              className="mt-2 inline-flex items-center gap-2 text-[15px] text-white underline underline-offset-4 transition-colors hover:text-[#56c5f2]"
            >
              Acceder ahora
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
            type="tel"
            required
            placeholder="Teléfono"
            className="border-b border-[#07357e] bg-transparent px-2 py-2 text-[14px] text-[#07357e] placeholder:text-[#07357e]/70 focus:outline-none"
          />
          <select
            required
            defaultValue=""
            className="border-b border-[#07357e] bg-transparent px-2 py-2 text-[14px] text-[#07357e] focus:outline-none"
          >
            <option value="" disabled>
              Modalidad de visita
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

      {/* rating + topdoctors */}
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
          Basado en <span className="font-semibold">25 reseñas</span>
        </p>
        <img src={`${IMG}/topdoctors-logo.svg`} alt="Top Doctors" className="mt-2 h-5 w-auto" />
      </div>
    </section>
  );
}
