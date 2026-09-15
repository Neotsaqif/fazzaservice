import React from "react";
import { Star, User } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2 block">
            Testimoni Pelanggan
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
            Apa Kata Mereka tentang fazzaservice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONFIG.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-background border border-border rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed italic mb-6">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-accent font-semibold text-sm">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
