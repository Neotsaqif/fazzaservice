import React, { useState, useEffect } from "react";
import { MessageCircle, CalendarCheck, Home } from "lucide-react";
import { SITE_CONFIG, getWhatsAppLink } from "../config/site";

export const HowToOrder: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    // Sequence: null (1s) -> 1 (1s) -> 2 (1s) -> 3 (1s) -> repeat
    const sequence = [null, 1, 2, 3];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % sequence.length;
      setActiveStep(sequence[currentIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const stepIcons = [
    <MessageCircle className="w-5 h-5 text-accent" key="1" />,
    <CalendarCheck className="w-5 h-5 text-accent" key="2" />,
    <Home className="w-5 h-5 text-accent" key="3" />,
  ];

  return (
    <section
      id="cara-pesan"
      className="py-16 sm:py-24 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2 block">
            Proses Pemesanan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Cara Pesan Mudah dalam 3 Langkah
          </h2>

          <p className="text-base text-muted-foreground">
            Tanpa perlu install aplikasi atau registrasi. Cukup dengan WhatsApp,
            teknisi kami siap meluncur.
          </p>
        </div>

        {/* Single card with all 3 steps as a vertical list */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto divide-y divide-border relative z-10">
          {SITE_CONFIG.orderSteps.map((step, index) => (
            <div
              key={step.step}
              className={`flex items-start gap-4 sm:gap-5 ${
                index === 0
                  ? "pb-6 sm:pb-8"
                  : index === SITE_CONFIG.orderSteps.length - 1
                    ? "pt-6 sm:pt-8"
                    : "py-6 sm:py-8"
              }`}
            >
              {/* Numbered badge */}
              <div
                className={`w-10 h-10 shrink-0 rounded-full bg-sky-100 text-accent font-heading font-bold text-base flex items-center justify-center border border-sky-200 transition-opacity duration-300 ${
                  activeStep === step.step
                    ? "animate-pulse ring-4 ring-sky-300 opacity-75"
                    : ""
                }`}
              >
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 shrink-0 rounded-xl bg-sky-50 flex items-center justify-center">
                {stepIcons[index]}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-foreground text-lg mb-0 sm:mb-1">
                  {step.title}
                </h3>
                <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppLink(
              "Halo fazzaservice, saya ingin memesan service AC sekarang.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[var(--color-cta-wa)] hover:bg-[var(--color-cta-wa-hover)] shadow-md transition-all transform hover:scale-[1.02]"
            style={{ minHeight: "48px" }}
          >
            <span>Pesan Sekarang via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
