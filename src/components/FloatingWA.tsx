import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink } from "../config/site";

export const FloatingWA: React.FC = () => {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <aside
      aria-label="WhatsApp Floating Button"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Speech Bubble */}
      {showBubble && (
        <div className="relative flex items-center bg-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none shadow-[0_0_15px_5px_rgba(0,0,0,0.15)] px-4 py-3 max-w-[220px] animate-bounce">
          <p className="text-sm font-medium text-gray-800 leading-snug pr-2">
            Pesan Sekarang!
          </p>
          <button
            onClick={() => setShowBubble(false)}
            className="flex-shrink-0 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
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
