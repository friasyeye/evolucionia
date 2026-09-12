"use client";

import { useState } from "react";

export function ProfWaitlist() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="prof-lista"
      className="w-full px-5 py-20 md:px-8"
      style={{ background: "linear-gradient(180deg, #052350 0%, #07357e 100%)" }}
    >
      <div
        className="mx-auto grid w-full max-w-[1000px] gap-6 rounded-[10px] bg-white p-4 md:grid-cols-2 md:p-5"
        style={{ boxShadow: "0 10px 15px -3px rgba(0,0,0,0.2)" }}
      >
        {/* left panel */}
        <div
          className="flex flex-col justify-center rounded-[10px] p-8 md:p-10"
          style={{ background: "linear-gradient(33deg, #07357e, #051d42)" }}
        >
          <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#56c5f2]">
            Lista de espera
          </span>
          <h2 className="font-tight mt-4 text-[clamp(1.6rem,2.4vw,2.1rem)] font-semibold leading-tight text-white">
            Estamos preparando las formaciones para profesionales.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/85">
            Apúntate y te avisaremos cuando salgan.
          </p>
        </div>

        {/* form */}
        <form
          className="flex flex-col gap-6 px-2 py-4 md:px-6 md:py-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
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
          <label className="flex items-center gap-2 text-[14px] text-[#07357e]">
            <input type="checkbox" required className="h-4 w-4 accent-[#07357e]" />
            He leído y acepto la política de privacidad
          </label>
          <button
            type="submit"
            className="mt-2 self-start bg-[#07357e] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.5px] text-[#f5f5f5] transition-colors hover:bg-[#052a66]"
          >
            {sent ? "¡Apuntado!" : "Avísame cuando salga"}
          </button>
        </form>
      </div>
    </section>
  );
}
