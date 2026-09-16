import React, { useEffect, useRef } from "react";
import { Star, User } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export const Testimonials: React.FC = () => {
  const testimonials = SITE_CONFIG.testimonials;
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimestampRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 40; // pixels per second

    const step = (timestamp: number) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
      const delta = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      container.scrollLeft += speed * delta;

      const singleSetWidth = container.scrollWidth / 4;
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft -= singleSetWidth;
      }

      requestAnimationFrame(step);
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section id="testimoni" className="py-16 sm:py-24 bg-muted overflow-hidden">
      {/* Header - constrained container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2 block">
            Testimoni Pelanggan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Apa Kata Mereka tentang fazzaservice
          </h2>
        </div>
      </div>

      {/* Carousel - full width with border */}
      <div className="relative w-full overflow-hidden py-4 border-t border-border">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />

        <div
          ref={containerRef}
          tabIndex={-1}
          onWheel={(e) => e.preventDefault()}
          onTouchStart={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
          className="no-scrollbar overflow-x-hidden flex gap-6 px-4 sm:px-6 select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            touchAction: "none",
          }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-none w-[280px] sm:w-[350px] bg-background border border-border rounded-2xl p-6 flex flex-col justify-between"
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
