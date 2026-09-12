import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { CitaSection } from "@/components/sites/drivanibanez-com-46c7d469/cita-69e26383/CitaSection";

export const metadata: Metadata = {
  title: "Cita - Dr Iván Ibáñez",
  description:
    "Solicita tu consulta con el Dr. Iván Ibáñez. Recibirás una llamada para confirmar la cita en 24/48 horas. Online o presencial.",
};

export default function CitaPage() {
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
