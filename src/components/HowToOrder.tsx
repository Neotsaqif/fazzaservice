import React from 'react';
import { MessageCircle, CalendarCheck, Home } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';

export const HowToOrder: React.FC = () => {
  const stepIcons = [
    <MessageCircle className="w-6 h-6 text-accent" key="1" />,
    <CalendarCheck className="w-6 h-6 text-accent" key="2" />,
    <Home className="w-6 h-6 text-accent" key="3" />
  ];

  return (
    <section id="cara-pesan" className="py-16 sm:py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2 block">
            Proses Pemesanan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Cara Pesan Mudah dalam 3 Langkah
          </h2>

          <p className="text-base text-muted-foreground">
            Tanpa perlu install aplikasi atau registrasi. Cukup dengan WhatsApp, teknisi kami siap meluncur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {SITE_CONFIG.orderSteps.map((step, index) => (
            <div
              key={step.step}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center relative z-10"
            >
              {/* Step Badge */}
              <div className="w-10 h-10 rounded-full bg-sky-100 text-accent font-heading font-bold text-base flex items-center justify-center mb-6 border border-sky-200">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                {stepIcons[index]}
              </div>

              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppLink('Halo fazzaservice, saya ingin memesan service AC sekarang.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[var(--color-cta-wa)] hover:bg-[var(--color-cta-wa-hover)] shadow-md transition-all transform hover:scale-[1.02]"
            style={{ minHeight: '48px' }}
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Pesan Sekarang via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
