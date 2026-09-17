import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { CaseStudyLayout } from "@/components/sites/drivanibanez-com-46c7d469/casos-de-exito/CaseStudyLayout";
import { monteaArquitecturaCase } from "@/components/sites/drivanibanez-com-46c7d469/casos-de-exito/montea-arquitectura";

export const metadata: Metadata = {
  title: "Renovamarin | Casos de éxito | Evolución IA",
  description:
    "Cómo Renovamarin tiene todo su histórico de proyectos accesible en un solo asistente interno, reduciendo un 70% el tiempo dedicado a buscar precedentes.",
};

export default function MonteaArquitecturaPage() {
  return (
    <>
      <SiteHeader />
      <CaseStudyLayout data={monteaArquitecturaCase} />
      <SiteFooter />
    </>
  );
}
