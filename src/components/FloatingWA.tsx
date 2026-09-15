import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../config/site";

export const FloatingWA: React.FC = () => {
  return (
    <aside
      aria-label="WhatsApp Floating Button"
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={getWhatsAppLink(
          "Halo fazzaservice, saya ingin bertanya tentang layanan AC.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-cta-wa)] hover:bg-[var(--color-cta-wa-hover)] text-white shadow-xl shadow-green-600/30 transition-all transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
        style={{ minWidth: "56px", minHeight: "56px" }}
        aria-label="Chat kami langsung via WhatsApp"
      >
        <img src="/whatsapp-logo.png" alt="WhatsApp" className="rounded-2xl" />
      </a>
    </aside>
  );
};
