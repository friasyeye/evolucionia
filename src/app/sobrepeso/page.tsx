import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { CitaSection } from "@/components/sites/drivanibanez-com-46c7d469/cita-69e26383/CitaSection";
import { MetodoLongSection } from "@/components/sites/drivanibanez-com-46c7d469/longevidad-4c1057b2/MetodoLongSection";
import { SobrepesoHero } from "@/components/sites/drivanibanez-com-46c7d469/sobrepeso-45998576/SobrepesoHero";
import { RealidadSection } from "@/components/sites/drivanibanez-com-46c7d469/sobrepeso-45998576/RealidadSection";
import { NoTodosSection } from "@/components/sites/drivanibanez-com-46c7d469/sobrepeso-45998576/NoTodosSection";
import { BenefitsSection } from "@/components/sites/drivanibanez-com-46c7d469/sobrepeso-45998576/BenefitsSection";
import { EspecialidadesTabs } from "@/components/sites/drivanibanez-com-46c7d469/sobrepeso-45998576/EspecialidadesTabs";
import { FaqSection } from "@/components/sites/drivanibanez-com-46c7d469/sobrepeso-45998576/FaqSection";
import { ResultsSection } from "@/components/sites/drivanibanez-com-46c7d469/sobrepeso-45998576/ResultsSection";

export const metadata: Metadata = {
  title: "Sobrepeso, Obesidad y Lipedema | Tratamiento Metabólico",
  description:
    "Tratamiento para el sobrepeso, la obesidad y el lipedema con criterio médico. Antes de cambiar tu dieta o ejercicio, estudiamos cómo funciona tu metabolismo.",
};

export default function SobrepesoPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <SobrepesoHero />
        <RealidadSection />
        <NoTodosSection />
        <MetodoLongSection />
        <BenefitsSection />
        <EspecialidadesTabs />
        <FaqSection />
        <ResultsSection />
        <CitaSection />
      </main>
      <SiteFooter />
    </>
  );
}
