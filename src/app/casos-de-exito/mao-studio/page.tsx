import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { CaseStudyLayout } from "@/components/sites/drivanibanez-com-46c7d469/casos-de-exito/CaseStudyLayout";
import { maoStudioCase } from "@/components/sites/drivanibanez-com-46c7d469/casos-de-exito/mao-studio";

export const metadata: Metadata = {
  title: "Mao Studio | Casos de éxito | Evolución IA",
  description:
    "Cómo Mao Studio automatizó la tramitación de cédulas de habitabilidad y emplazamiento, de correos sueltos a un expediente que se tramita solo.",
};

export default function MaoStudioPage() {
  return (
    <>
      <SiteHeader />
      <CaseStudyLayout data={maoStudioCase} />
      <SiteFooter />
    </>
  );
}
