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
                href="#layanan"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full text-sm sm:text-base font-semibold text-foreground bg-muted hover:bg-slate-100 border border-border transition-colors text-center"
                style={{ minHeight: "52px", minWidth: "44px" }}
              >
                Lihat Layanan
              </a>
            </div>

            {/* Trust highlights */}
            <div className="mt-8 w-full max-w-sm sm:max-w-2xl rounded-2xl sm:rounded-full border border-white/80 bg-white/85 py-3 px-3.5 sm:py-3.5 sm:px-6 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
              <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2.5 sm:gap-4">
                <div className="flex items-center justify-center gap-2 sm:gap-2.5">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                  <span className="text-[11px] sm:text-sm font-medium text-foreground">
                    Respon Cepat
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 sm:gap-2.5">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                  <span className="text-[11px] sm:text-sm font-medium text-foreground">
                    Ada Garansi
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 sm:gap-2.5">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                  <span className="text-[11px] sm:text-sm font-medium text-foreground">
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
