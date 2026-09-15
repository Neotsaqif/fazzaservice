import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-accent flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
            Pertanyaan Umum (FAQ)
          </h2>

          <p className="text-base text-muted-foreground">
            Jawaban untuk pertanyaan yang paling sering ditanyakan mengenai layanan kami.
          </p>
        </div>

        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                  aria-expanded={isOpen}
                  style={{ minHeight: '48px' }}
                >
                  <span className="font-heading font-semibold text-foreground text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/50 bg-muted/40">
                    {faq.answer}
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
