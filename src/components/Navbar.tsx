import React, { useState } from "react";
import { MessageCircle, Menu, X, Wrench } from "lucide-react";
import { SITE_CONFIG, getWhatsAppLink } from "../config/site";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Layanan", href: "#layanan" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Cara Pesan", href: "#cara-pesan" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div>
            <span className="font-heading font-bold text-xl sm:text-2xl text-foreground tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href={getWhatsAppLink(
              "Halo fazzaservice, saya ingin memesan layanan AC.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[var(--color-cta-wa)] hover:bg-[var(--color-cta-wa-hover)] shadow-sm transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            <span>Chat via WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl text-foreground hover:bg-muted transition-colors"
          style={{ minHeight: "44px", minWidth: "44px" }}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-foreground py-2 border-b border-border/50 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={getWhatsAppLink(
                  "Halo fazzaservice, saya ingin memesan layanan AC.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-[var(--color-cta-wa)] hover:bg-[var(--color-cta-wa-hover)] shadow-sm"
                style={{ minHeight: "48px" }}
              >
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
