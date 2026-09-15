import React from 'react';
import { Award, Clock, Tag, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-7 h-7 text-accent" />,
  Clock: <Clock className="w-7 h-7 text-accent" />,
  Tag: <Tag className="w-7 h-7 text-accent" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-accent" />,
};

export const WhyUs: React.FC = () => {
  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2 block">
            Kenapa Pilih Kami
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Komitmen Layanan Terbaik untuk Anda
          </h2>

          <p className="text-base text-muted-foreground">
            Kepercayaan dan kepuasan pelanggan adalah prioritas utama dalam setiap pengerjaan service AC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.whyUs.map((item, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-sm transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto mb-5">
                {iconMap[item.iconName]}
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
