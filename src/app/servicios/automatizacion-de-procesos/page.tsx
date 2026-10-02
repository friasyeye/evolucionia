import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";
import { AutomatizacionHero } from "@/components/sites/drivanibanez-com-46c7d469/automatizacion-de-procesos-e5f6a7b8/AutomatizacionHero";
import { ComoTrabajamosSection } from "@/components/sites/drivanibanez-com-46c7d469/automatizacion-de-procesos-e5f6a7b8/ComoTrabajamosSection";
import { SoporteSection } from "@/components/sites/drivanibanez-com-46c7d469/automatizacion-de-procesos-e5f6a7b8/SoporteSection";
import { AutomatizacionFaqSection } from "@/components/sites/drivanibanez-com-46c7d469/automatizacion-de-procesos-e5f6a7b8/AutomatizacionFaqSection";
import { CitaSection } from "@/components/sites/drivanibanez-com-46c7d469/cita-69e26383/CitaSection";

export const metadata: Metadata = {
  title: "Automatización de procesos | Agencia de automatización con IA | Evolución IA",
  description:
    "Automatizamos las tareas que se repiten siempre igual en tu negocio. Miramos cómo funciona tu empresa y construimos un sistema a medida, sin tocar lo que ya funciona bien.",
};

export default function AutomatizacionDeProcesosPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AutomatizacionHero />
        <ComoTrabajamosSection />
        <SoporteSection />
        <AutomatizacionFaqSection />
        <CitaSection />
      </main>
      <SiteFooter />
    </>
  );
}
