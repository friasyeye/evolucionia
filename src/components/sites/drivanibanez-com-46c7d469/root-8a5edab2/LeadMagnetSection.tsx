"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { Reveal } from "../shared/Reveal";

export function LeadMagnetSection() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const privacyId = useId();

  return (
    <section
      className="flex min-h-screen w-full flex-col items-center justify-center px-5 py-24 md:px-8"
      style={{ background: "linear-gradient(180deg, #1e5eb8 0%, #07357e 55%, #052350 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center md:max-w-[900px]">
        <Reveal className="text-[13px] font-semibold tracking-[0.12em] text-[#56c5f2]">
          ↓ Antes de invertir en IA ↓
        </Reveal>

        <Reveal
          as="h2"
          delay={80}
          className="font-tight mt-5 max-w-[22ch] text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.15] text-white md:max-w-[34ch]"
        >
          El 95% de las empresas que prueba la IA no consigue ningún retorno. ¿Quieres saber por qué? Apúntate:
        </Reveal>

        <Reveal delay={200} className="mt-10 w-full max-w-[380px]">
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/servicios");
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              className="w-full border border-white/40 bg-transparent px-4 py-2.5 text-[15px] text-white placeholder:text-white/60 outline-none transition-colors focus:border-white"
            />

            <label htmlFor={privacyId} className="flex items-start gap-2 text-left">
              <span className="relative mt-0.5 h-4 w-4 shrink-0">
                <input
                  id={privacyId}
                  type="checkbox"
                  required
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="peer absolute inset-0 h-4 w-4 appearance-none rounded-sm border border-white/40 bg-transparent"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="pointer-events-none absolute inset-0 h-4 w-4 stroke-white opacity-0 peer-checked:opacity-100"
                  fill="none"
                >
                  <path
                    d="M3.5 8.2l3 3 6-6.4"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[13px] leading-snug text-white/80">
                He leído y acepto la política de privacidad
              </span>
            </label>

            <button
              type="submit"
              className="mt-4 w-full bg-[#56c5f2] px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#07357e] transition-colors hover:bg-white"
            >
              Quiero la guía gratis
            </button>
          </form>
        </Reveal>

        <Reveal delay={260} className="mt-6 text-[15px] text-white/80">
          Descargarla es gratis y rápido.
        </Reveal>
      </div>
    </section>
  );
}
