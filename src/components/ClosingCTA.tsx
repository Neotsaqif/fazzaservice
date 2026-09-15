import React from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { getWhatsAppLink } from "../config/site";

export const ClosingCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted border-b border-border text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-green-100 text-[var(--color-cta-wa)] flex items-center justify-center mx-auto mb-6 shadow-sm">
          <img
            src="/whatsapp-logo.png"
            alt="WhatsApp"
            className="w-16 h-16 rounded-2xl"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
          Butuh Servis atau Bongkar Pasang AC Hari Ini?
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Jangan tunggu AC Anda semakin bermasalah. Konsultasikan keluhannya
          sekarang dan jadwalkan kedatangan teknisi kami.
        </p>

        <a
          href={getWhatsAppLink(
            "Halo fazzaservice, saya ingin memesan layanan AC sekarang.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-bold text-white bg-[var(--color-cta-wa)] hover:bg-[var(--color-cta-wa-hover)] shadow-lg shadow-green-500/20 transition-all transform hover:scale-[1.02]"
          style={{ minHeight: "52px" }}
        >
          <span>Chat via WhatsApp Sekarang</span>
        </a>
      </div>
    </section>
  );
};
