import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { WhatsappFloatButton } from "@/components/sites/drivanibanez-com-46c7d469/shared/WhatsappFloatButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agencia de Inteligencia Artificial para empresas | Evolución IA",
  description:
    "Desarrollamos automatizaciones de procesos, chatbots y agentes de IA a medida para que tu negocio escale y se posicione por delante de su competencia. ¡Pide tu Auditoría!",
  icons: {
    icon: "/seo/favicon.png",
    apple: "/seo/favicon.png",
  },
  // TEMPORAL: web en construcción, no debe indexarse todavía.
  // Ver docs/NOINDEX-PENDIENTE.md antes del lanzamiento definitivo.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "none",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsappFloatButton />
      </body>
    </html>
  );
}
