import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { FormacionSection } from "@/components/sites/drivanibanez-com-46c7d469/formacion-421230b9/FormacionSection";

export const metadata: Metadata = {
  title: "Formación - Dr Iván Ibáñez",
  description:
    "Formaciones para profesionales de la salud: metabolismo, calorimetría indirecta e hipoxia intermitente con criterio y aplicación clínica real.",
};

export default function FormacionPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <FormacionSection />
      </main>
      <SiteFooter />
    </>
  );
}
