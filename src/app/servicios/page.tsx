import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { ServiciosHero } from "@/components/sites/drivanibanez-com-46c7d469/servicios-a1b2c3d4/ServiciosHero";
import { ServiciosFaqSection } from "@/components/sites/drivanibanez-com-46c7d469/servicios-a1b2c3d4/ServiciosFaqSection";
import { CitaSection } from "@/components/sites/drivanibanez-com-46c7d469/cita-69e26383/CitaSection";

export const metadata: Metadata = {
  title: "Servicios | Evolución IA",
  description:
    "Automatización de procesos, chatbots y agentes de IA a medida. Miramos cómo funciona tu negocio antes de montar nada.",
};

export default function ServiciosPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ServiciosHero />
        <ServiciosFaqSection />
        <CitaSection />
      </main>
      <SiteFooter />
    </>
  );
}
