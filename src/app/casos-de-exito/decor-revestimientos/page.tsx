import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { CaseStudyLayout } from "@/components/sites/drivanibanez-com-46c7d469/casos-de-exito/CaseStudyLayout";
import { decorRevestimientosCase } from "@/components/sites/drivanibanez-com-46c7d469/casos-de-exito/decor-revestimientos";

export const metadata: Metadata = {
  title: "Decor Revestimientos | Casos de éxito | Evolución IA",
  description:
    "Cómo Decor Revestimientos dejó de rehacer presupuestos desde cero cada vez con una herramienta a medida.",
};

export default function DecorRevestimientosPage() {
  return (
    <>
      <SiteHeader />
      <CaseStudyLayout data={decorRevestimientosCase} />
      <SiteFooter />
    </>
  );
}
