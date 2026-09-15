import React from "react";
import { MessageCircle, ShieldCheck, Clock, Award } from "lucide-react";
import { SITE_CONFIG, getWhatsAppLink } from "../config/site";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-24 bg-background border-b border-border">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Service AC Purwokerto Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/45 sm:bg-white/30 bg-gradient-to-r from-white/70 via-white/60 to-white/15" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center w-full">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-foreground tracking-tight leading-[1.2] mb-5">
              Jasa Service &amp; Bongkar Pasang AC{" "}
              <span className="text-sky-600">Purwokerto &amp; Sekitarnya</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Solusi tuntas untuk AC rumah &amp; kantor Anda. Cuci AC, isi
              freon, bongkar pasang, dan perbaikan kerusakan dengan teknisi
              berpengalaman, respon cepat, dan harga transparan.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href={getWhatsAppLink(
                  "Halo fazzaservice, saya ingin bertanya dan konsultasi mengenai service AC.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-bold text-white bg-[var(--color-cta-wa)] hover:bg-[var(--color-cta-wa-hover)] shadow-lg shadow-green-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                style={{ minHeight: "52px", minWidth: "44px" }}
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>Chat via WhatsApp</span>
              </a>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full text-sm sm:text-base font-semibold text-foreground bg-muted hover:bg-slate-100 border border-border transition-colors text-center"
                style={{ minHeight: "52px", minWidth: "44px" }}
              >
                Lihat Layanan
              </a>
            </div>

            {/* Trust highlights */}
            <div className="mt-10 w-full max-w-2xl rounded-full border border-white/80 bg-white/85 py-3.5 px-6 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center justify-center gap-2.5">
                  <Clock className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    Respon Cepat
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    Ada Garansi
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2.5">
                  <Award className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    Pengerjaan Rapi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
