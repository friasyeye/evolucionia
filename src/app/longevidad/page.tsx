import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { CitaSection } from "@/components/sites/drivanibanez-com-46c7d469/cita-69e26383/CitaSection";
import { LongevidadHero } from "@/components/sites/drivanibanez-com-46c7d469/longevidad-4c1057b2/LongevidadHero";
import { RealidadSection } from "@/components/sites/drivanibanez-com-46c7d469/longevidad-4c1057b2/RealidadSection";
import { NoTodosSection } from "@/components/sites/drivanibanez-com-46c7d469/longevidad-4c1057b2/NoTodosSection";
import { MetodoLongSection } from "@/components/sites/drivanibanez-com-46c7d469/longevidad-4c1057b2/MetodoLongSection";
import { BenefitsSection } from "@/components/sites/drivanibanez-com-46c7d469/longevidad-4c1057b2/BenefitsSection";
import { EspecialidadesLongSection } from "@/components/sites/drivanibanez-com-46c7d469/longevidad-4c1057b2/EspecialidadesLongSection";
import { FaqSection } from "@/components/sites/drivanibanez-com-46c7d469/longevidad-4c1057b2/FaqSection";
import { ResultsSection } from "@/components/sites/drivanibanez-com-46c7d469/longevidad-4c1057b2/ResultsSection";

export const metadata: Metadata = {
  title: "Medicina de Longevidad y Rendimiento | Dr. Iván Ibáñez",
  description:
    "Optimiza tu rendimiento y tu salud con criterio médico. Antes de pautar ejercicio, nutrición o tratamiento, estudiamos cómo está funcionando tu metabolismo.",
};

export default function LongevidadPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LongevidadHero />
        <RealidadSection />
        <NoTodosSection />
        <MetodoLongSection />
        <BenefitsSection />
        <EspecialidadesLongSection />
        <FaqSection />
        <ResultsSection />
        <CitaSection />
      </main>
      <SiteFooter />
    </>
  );
}
