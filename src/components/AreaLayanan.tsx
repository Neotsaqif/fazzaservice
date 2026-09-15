import React from "react";
import { MapPin } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export const AreaLayanan: React.FC = () => {
  return (
    <section className="py-8 bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-accent">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-semibold text-foreground">
                Cakupan Area Layanan:
              </span>
              <p className="text-xs text-muted-foreground">
                Siap datang langsung ke alamat Anda
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {SITE_CONFIG.areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-foreground text-xs sm:text-sm font-medium border border-border shadow-xs hover:border-accent transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
