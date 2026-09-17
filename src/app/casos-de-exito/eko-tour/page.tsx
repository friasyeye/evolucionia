import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { CaseStudyLayout } from "@/components/sites/drivanibanez-com-46c7d469/casos-de-exito/CaseStudyLayout";
import { ekoTourCase } from "@/components/sites/drivanibanez-com-46c7d469/casos-de-exito/eko-tour";

export const metadata: Metadata = {
  title: "Eko Tour Tennis Academy | Casos de éxito | Evolución IA",
  description:
    "Cómo Eko Tour Tennis Academy dejó de perseguir firmas y papeleo cada temporada automatizando la documentación de inscripciones.",
};

export default function EkoTourPage() {
  return (
    <>
      <SiteHeader />
      <CaseStudyLayout data={ekoTourCase} />
      <SiteFooter />
    </>
  );
}
