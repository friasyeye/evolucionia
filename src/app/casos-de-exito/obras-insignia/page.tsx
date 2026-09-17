import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { CaseStudyLayout } from "@/components/sites/drivanibanez-com-46c7d469/casos-de-exito/CaseStudyLayout";
import { obrasInsigniaCase } from "@/components/sites/drivanibanez-com-46c7d469/casos-de-exito/obras-insignia";

export const metadata: Metadata = {
  title: "Obras Insignia | Casos de éxito | Evolución IA",
  description:
    "Cómo Obras Insignia dejó de perder tiempo bajando y subiendo fotos de sus obras a mano, automatizando la gestión de fotos de obra desde WhatsApp.",
};

export default function ObrasInsigniaPage() {
  return (
    <>
      <SiteHeader />
      <CaseStudyLayout data={obrasInsigniaCase} />
      <SiteFooter />
    </>
  );
}
