import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";
import { CaseStudyClosingSection } from "./CaseStudyClosingSection";

type Metric = {
  value: string;
  label: string;
};

type Quote = {
  text: string;
  author: string;
};

export type CaseStudyData = {
  category: string;
  badge: string;
  title: string;
  intro: ReactNode;
  imageSrc?: string;
  imageAlt: string;
  logoSrc?: string;
  logoWidthClass?: string;
  metrics: Metric[];
  quote: Quote;
  challengeIntro: string;
  challengePoints: string[];
  challengeOutcome: string;
  solutionIntro: string;
  solutionPoints: string[];
  solutionOutcome: string;
  closingQuote: Quote;
  closingPitch: ReactNode;
};

export function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <main className="w-full pt-[60px] text-[#07357e]" style={{ backgroundColor: "#eef4fb" }}>
      <div className="mx-auto w-full max-w-[1520px] px-5 py-16 md:px-14 md:py-20">
        <a
          href="/casos-de-exito"
          className="inline-flex items-center gap-2 text-[13px] text-[#07357e]/60 transition-colors hover:text-[#07357e]"
        >
          <ArrowRightIcon className="h-3.5 w-3.5 rotate-180" />
          Más casos de éxito
        </a>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div className="flex h-full flex-col">
              <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0a6ea8]">
                {data.category}
              </span>
              <h1
                className="font-tight mt-4 bg-clip-text text-[clamp(1.8rem,3.2vw,2.4rem)] font-semibold leading-tight text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #07357e 0%, #0a6ea8 55%, #56c5f2 100%)" }}
              >
                {data.title}
              </h1>
              <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-[#07357e]/70">
                {data.intro}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[4px] border border-[#07357e]/10 bg-white md:aspect-[16/12]">
              {data.imageSrc ? (
                <Image
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  fill
                  quality={85}
                  sizes="(min-width: 768px) 760px, 100vw"
                  className="object-cover"
                />
              ) : (
                <span className="font-tight px-6 text-center text-[22px] font-semibold text-[#07357e]/20">
                  {data.imageAlt}
                </span>
              )}
              {data.logoSrc && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={data.logoSrc}
                    alt={`Logo de ${data.imageAlt}`}
                    width={300}
                    height={64}
                    unoptimized={data.logoSrc.endsWith(".webp")}
                    className={data.logoWidthClass ?? "w-[60%] max-w-[300px]"}
                  />
                </div>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 grid gap-8 border-y border-[#07357e]/10 py-9 sm:grid-cols-3 md:mt-20">
            {data.metrics.map((m) => (
              <div key={m.label} className="max-w-[32ch]">
                <p className="font-tight text-[clamp(1.6rem,2.5vw,2rem)] font-semibold leading-none text-[#07357e]">
                  {m.value}
                </p>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[#07357e]/65">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-[0.9fr_1.4fr] md:gap-14">
            <div />
            <blockquote>
              <p className="font-tight text-[clamp(1.2rem,2vw,1.5rem)] font-medium italic leading-snug text-[#07357e]/90">
                &ldquo;{data.quote.text}&rdquo;
              </p>
              <footer className="mt-5 text-[14px] text-[#07357e]/55">— {data.quote.author}</footer>
            </blockquote>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 border-t border-[#07357e]/10 pt-12 md:mt-20 md:grid-cols-[0.9fr_1.4fr] md:gap-14">
          <Reveal>
            <h2 className="font-tight text-[13px] font-semibold uppercase tracking-[0.15em] text-[#07357e]/50">
              El reto
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-[#07357e]/75">
              <p>{data.challengeIntro}</p>
              <ul className="flex flex-col gap-2.5">
                {data.challengePoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#0a6ea8]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#07357e]/60">{data.challengeOutcome}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 border-t border-[#07357e]/10 pt-12 md:mt-16 md:grid-cols-[0.9fr_1.4fr] md:gap-14">
          <Reveal>
            <h2 className="font-tight text-[13px] font-semibold uppercase tracking-[0.15em] text-[#07357e]/50">
              La solución
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-[#07357e]/75">
              <p>{data.solutionIntro}</p>
              <ul className="flex flex-col gap-2.5">
                {data.solutionPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#0a6ea8]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#07357e]/60">{data.solutionOutcome}</p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 grid gap-6 border-t border-[#07357e]/10 pt-12 md:mt-20 md:grid-cols-[0.9fr_1.4fr] md:gap-14">
            <div />
            <blockquote>
              <p className="font-tight text-[clamp(1.2rem,2vw,1.5rem)] font-medium italic leading-snug text-[#07357e]/90">
                &ldquo;{data.closingQuote.text}&rdquo;
              </p>
              <footer className="mt-5 text-[14px] text-[#07357e]/55">— {data.closingQuote.author}</footer>
            </blockquote>
          </div>
        </Reveal>

      </div>

      <CaseStudyClosingSection pitch={data.closingPitch} />
    </main>
  );
}
