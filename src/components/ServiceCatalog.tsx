import React from "react";
import {
  Fan,
  Sparkles,
  Gauge,
  Wrench,
  ShieldAlert,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppLink } from "../config/site";

const iconMap: Record<string, React.ReactNode> = {
  Fan: <Fan className="w-6 h-6 text-accent" />,
  Sparkles: <Sparkles className="w-6 h-6 text-accent" />,
  Gauge: <Gauge className="w-6 h-6 text-accent" />,
  Wrench: <Wrench className="w-6 h-6 text-accent" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-accent" />,
  MessageCircle: <MessageCircle className="w-6 h-6 text-sky-800" />,
};

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  isConsultation?: boolean;
}

export const ServiceCatalog: React.FC = () => {
  const allServices: ServiceItem[] = [
    ...SITE_CONFIG.services,
    {
      id: "consultation",
      title: "Konsultasi Kerusakan AC",
      description:
        "Bingung dengan kendala AC Anda? Tanyakan langsung kepada teknisi kami secara gratis via WhatsApp.",
      iconName: "MessageCircle",
      isConsultation: true,
    },
  ];

  const duplicatedServices = [...allServices, ...allServices];

  return (
    <section
      id="layanan"
      className="py-16 sm:py-24 bg-background border-b border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2 block">
            Pilihan Layanan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Layanan Service AC Terlengkap
          </h2>
          <p className="text-base text-muted-foreground">
            Kami melayani berbagai kebutuhan AC perumahan, perkantoran, toko,
            dan instansi dengan standar pengerjaan profesional.
          </p>
        </div>
      </div>

      {/* Auto-scrolling Horizontal Carousel */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-4 sm:gap-6 px-4 sm:px-6">
          {duplicatedServices.map((service, index) => {
            const isConsultation = service.isConsultation;
            return (
              <div
                key={`${service.id}-${index}`}
                className={`w-[280px] sm:w-[320px] lg:w-[360px] shrink-0 rounded-2xl p-4 sm:p-6 flex flex-col justify-between transition-all group ${
                  isConsultation
                    ? "bg-sky-50/70 border border-sky-200"
                    : "bg-card border border-border hover:border-sky-300 hover:shadow-md"
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      isConsultation
                        ? "bg-sky-200/70 text-sky-800"
                        : "bg-sky-50 border border-sky-100 group-hover:bg-sky-100"
                    }`}
                  >
                    {iconMap[service.iconName] || (
                      <Wrench className="w-6 h-6 text-accent" />
                    )}
                  </div>
                  <h3
                    className={`font-heading font-semibold text-base sm:text-lg mb-2 ${
                      isConsultation
                        ? "text-foreground"
                        : "text-foreground group-hover:text-accent transition-colors"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {isConsultation ? (
                  <a
                    href={getWhatsAppLink(
                      "Halo fazzaservice, saya ingin berkonsultasi mengenai masalah AC saya.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[var(--color-cta-wa)] hover:bg-[var(--color-cta-wa-hover)] transition-colors shadow-xs"
                    style={{ minHeight: "44px" }}
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Tanya Sekarang</span>
                  </a>
                ) : (
                  <div className="pt-2 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs text-muted-foreground">
                      [PLACEHOLDER: Ikon Layanan]
                    </span>
                    <a
                      href={getWhatsAppLink(
                        `Halo fazzaservice, saya berminat dengan layanan: ${service.title}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-sky-700 transition-colors"
                    >
                      <span>Pesan</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
