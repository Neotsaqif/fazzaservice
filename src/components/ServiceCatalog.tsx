import React, { useEffect, useRef } from "react";
import { Fan, Sparkles, Gauge, Wrench, ShieldAlert } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

const iconMap: Record<string, React.ReactNode> = {
  Fan: <Fan className="w-6 h-6 text-accent" />,
  Sparkles: <Sparkles className="w-6 h-6 text-accent" />,
  Gauge: <Gauge className="w-6 h-6 text-accent" />,
  Wrench: <Wrench className="w-6 h-6 text-accent" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-accent" />,
};

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const ServiceCatalog: React.FC = () => {
  const allServices: ServiceItem[] = SITE_CONFIG.services;
  const duplicatedServices = [...allServices, ...allServices];

  const containerRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<number>(1); // 1 = right, -1 = left
  const isPausedRef = useRef<boolean>(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastTimestampRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 35; // pixels per second

    const step = (timestamp: number) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
      const delta = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      if (!isPausedRef.current) {
        container.scrollLeft += directionRef.current * speed * delta;

        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft <= 0) {
          container.scrollLeft = 0;
          directionRef.current = 1;
        } else if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = maxScroll;
          directionRef.current = -1;
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

      {/* Ping-Pong Auto-scrolling Carousel */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={containerRef}
          className="no-scrollbar overflow-x-auto flex gap-4 sm:gap-6 px-4 sm:px-6 select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {duplicatedServices.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="w-[280px] sm:w-[320px] lg:w-[360px] shrink-0 rounded-2xl p-4 sm:p-6 flex flex-col justify-between transition-all group bg-card border border-border hover:border-sky-300 hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors bg-sky-50 border border-sky-100 group-hover:bg-sky-100">
                  {iconMap[service.iconName] || (
                    <Wrench className="w-6 h-6 text-accent" />
                  )}
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg mb-2 text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
