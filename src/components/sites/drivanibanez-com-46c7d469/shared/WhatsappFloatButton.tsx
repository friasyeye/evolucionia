import Image from "next/image";

const WHATSAPP_NUMBER = "34684175224";

export function WhatsappFloatButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
    >
      <Image
        src="/images/logos/whatsapp_definitivo.png"
        alt="WhatsApp"
        width={28}
        height={28}
        className="h-7 w-7"
      />
    </a>
  );
}
