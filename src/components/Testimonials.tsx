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
  const isPausedRef = useRef<boolean>(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastTimestampRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 40; // pixels per second

    const step = (timestamp: number) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
      const delta = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      if (!isPausedRef.current) {
        container.scrollLeft += speed * delta;

        const singleSetWidth = container.scrollWidth / 4;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        }
      }

      requestAnimationFrame(step);
    };

    const animId = requestAnimationFrame(step);

    const triggerPause = () => {
      isPausedRef.current = true;
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => {
        isPausedRef.current = false;
      }, 3000);
    };

    const handleWheel = () => {
      triggerPause();
    };

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      startX = "touches" in e ? e.touches[0].clientX : e.clientX;
      scrollStart = container.scrollLeft;
      triggerPause();
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const dx = startX - x;
      container.scrollLeft = scrollStart + dx;
      triggerPause();
    };

    const handlePointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      triggerPause();
    };

    container.addEventListener("wheel", handleWheel, { passive: true });
    container.addEventListener("mousedown", handlePointerDown as EventListener);
    window.addEventListener("mousemove", handlePointerMove as EventListener);
    window.addEventListener("mouseup", handlePointerUp);

    container.addEventListener(
      "touchstart",
      handlePointerDown as EventListener,
      { passive: true },
    );
    container.addEventListener(
      "touchmove",
      handlePointerMove as EventListener,
      { passive: true },
    );
    container.addEventListener("touchend", handlePointerUp);

    return () => {
      cancelAnimationFrame(animId);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener(
        "mousedown",
        handlePointerDown as EventListener,
      );
      window.removeEventListener(
        "mousemove",
        handlePointerMove as EventListener,
      );
      window.removeEventListener("mouseup", handlePointerUp);

      container.removeEventListener(
        "touchstart",
        handlePointerDown as EventListener,
      );
      container.removeEventListener(
        "touchmove",
        handlePointerMove as EventListener,
      );
      container.removeEventListener("touchend", handlePointerUp);
    };
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
          className="no-scrollbar overflow-x-auto flex gap-6 px-4 sm:px-6 select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
