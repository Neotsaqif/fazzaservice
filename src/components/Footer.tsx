import React from "react";
import { MapPin, Phone } from "lucide-react";
import { SITE_CONFIG, getWhatsAppLink } from "../config/site";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Business Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-heading font-bold text-foreground">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-start gap-2 pt-2">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-muted-foreground">
                <strong>Area Layanan:</strong> {SITE_CONFIG.areas.join(", ")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span className="text-xs sm:text-sm text-muted-foreground">
                WhatsApp: +{SITE_CONFIG.whatsappNumber}
              </span>
            </div>
            <div className="text-xs text-muted-foreground pt-1">
              <strong>Jam Operasional:</strong> {SITE_CONFIG.workingHours}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-semibold text-foreground">
              Navigasi
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#layanan"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Layanan Kami
                </a>
              </li>
              <li>
                <a
                  href="#keunggulan"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kenapa Pilih Kami
                </a>
              </li>
              <li>
                <a
                  href="#cara-pesan"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cara Memesan
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pertanyaan Umum (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="space-y-3 md:text-right flex flex-col md:items-end">
            <h4 className="text-sm font-heading font-semibold text-foreground">
              Hubungi
            </h4>
            <p className="text-xs text-muted-foreground max-w-xs">
              Respon cepat untuk area Purwokerto, Banyumas, Purbalingga,
              Cilacap, dan Banjarnegara.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink(
                  "Halo fazzaservice, saya ingin bertanya tentang layanan AC.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[var(--color-cta-wa)] hover:bg-[var(--color-cta-wa-hover)] shadow-sm transition-colors"
                style={{ minHeight: "44px" }}
              >
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/70 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Jasa Service
            &amp; Bongkar Pasang AC.
          </p>
        </div>
      </div>
    </footer>
  );
};
