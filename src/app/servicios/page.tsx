import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { ComingSoonSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/ComingSoonSection";

export const metadata: Metadata = {
  title: "Servicios | Evolución IA",
  description: "Estamos terminando esta página. Mientras tanto, hablamos directamente de tu proyecto.",
};

export default function ServiciosPage() {
  return (
    <>
      <SiteHeader />
      <ComingSoonSection />
      <SiteFooter />
    </>
  );
}
