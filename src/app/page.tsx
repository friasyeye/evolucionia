import { SiteHeader } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteHeader";
import { HeroSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/HeroSection";
import { WorkTransformSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/WorkTransformSection";
import { WorkTransformImagesSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/WorkTransformImagesSection";
import { MedicinaRealSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/MedicinaRealSection";
import { BioSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/BioSection";
import { MetodoSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/MetodoSection";
import { EspecialidadesSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/EspecialidadesSection";
import { IntegracionesSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/IntegracionesSection";
import { LeadMagnetSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/LeadMagnetSection";
import { FaqSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/FaqSection";
import { ClosingCtaSection } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/ClosingCtaSection";
import { SiteFooter } from "@/components/sites/drivanibanez-com-46c7d469/root-8a5edab2/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WorkTransformSection />
        <WorkTransformImagesSection />
        <EspecialidadesSection />
        <MedicinaRealSection />
        <BioSection />
        <IntegracionesSection />
        <MetodoSection />
        <LeadMagnetSection />
        <FaqSection />
        <ClosingCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
