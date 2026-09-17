import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { CitaSection } from "@/components/sites/drivanibanez-com-46c7d469/cita-69e26383/CitaSection";

export const metadata: Metadata = {
  title: "Contacto | Evolución IA",
  description: "Cuéntanos tu caso. Te respondemos en menos de 24 horas.",
};

export default function ContactoPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <CitaSection />
      </main>
      <SiteFooter />
    </>
  );
}
