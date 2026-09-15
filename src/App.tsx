import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AreaLayanan } from './components/AreaLayanan';
import { ServiceCatalog } from './components/ServiceCatalog';
import { WhyUs } from './components/WhyUs';
import { HowToOrder } from './components/HowToOrder';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { FloatingWA } from './components/FloatingWA';

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AreaLayanan />
        <ServiceCatalog />
        <WhyUs />
        <HowToOrder />
        <Testimonials />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}

export default App;
