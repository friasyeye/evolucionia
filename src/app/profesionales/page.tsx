import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { ProfHero } from "@/components/sites/drivanibanez-com-46c7d469/profesionales-faa07b7e/ProfHero";
import { ProfRealidadSection } from "@/components/sites/drivanibanez-com-46c7d469/profesionales-faa07b7e/ProfRealidadSection";
import { ProfNoTodosSection } from "@/components/sites/drivanibanez-com-46c7d469/profesionales-faa07b7e/ProfNoTodosSection";
import { ProfMetodoSection } from "@/components/sites/drivanibanez-com-46c7d469/profesionales-faa07b7e/ProfMetodoSection";
import { ProfWaitlist } from "@/components/sites/drivanibanez-com-46c7d469/profesionales-faa07b7e/ProfWaitlist";

export const metadata: Metadata = {
  title: "Formación en Metabolismo e Hipoxia | Dr. Iván Ibáñez",
  description:
    "Aprende a incorporar calorimetría indirecta e hipoxia intermitente a tu práctica clínica con criterio, seguridad y aplicación real.",
};

export default function ProfesionalesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ProfHero />
        <ProfRealidadSection />
        <ProfNoTodosSection />
        <ProfMetodoSection />
        <ProfWaitlist />
      </main>
      <SiteFooter />
    </>
  );
}
