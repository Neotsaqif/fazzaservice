import React, { useEffect, useRef } from "react";
import { MessageCircle, ShieldCheck, Clock, Award } from "lucide-react";
import { SITE_CONFIG, getWhatsAppLink } from "../config/site";

const WALLPAPER_IMAGES = [
  "/wallpaper/WhatsApp Image 2026-09-14 at 16.46.53.jpeg",
  "/wallpaper/WhatsApp Image 2026-09-14 at 16.42.04.jpeg",
  "/wallpaper/WhatsApp Image 2026-09-14 at 16.42.02.jpeg",
  "/wallpaper/WhatsApp Image 2026-09-14 at 16.40.55.jpeg",
];

export const Hero: React.FC = () => {
  const duplicatedWallpapers = [
    ...WALLPAPER_IMAGES,
    ...WALLPAPER_IMAGES,
    ...WALLPAPER_IMAGES,
    ...WALLPAPER_IMAGES,
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimestampRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 70; // Increased speed

    const step = (timestamp: number) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
      const delta = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      container.scrollLeft += speed * delta;

      const singleSetWidth = container.scrollWidth / 4;
      if (container.scrollLeft >= singleSetWidth * 3) {
        container.scrollLeft -= singleSetWidth * 3;
      }

      requestAnimationFrame(step);
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-24 bg-background border-b border-border">
      {/* Background Sliding Wallpaper Strip & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={containerRef}
          className="no-scrollbar flex h-full overflow-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {duplicatedWallpapers.map((img, index) => (
            <div
              key={`${img}-${index}`}
              className="h-full w-[80vw] sm:w-[600px] lg:w-[800px] shrink-0"
            >
              <img
                src={img}
                alt={`Service AC Purwokerto Wallpaper ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-white/50 sm:bg-white/35 bg-gradient-to-r from-white/75 via-white/65 to-white/20 z-10 pointer-events-none" />
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
