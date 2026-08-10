import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ServicePrices from './components/ServicePrices';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import CostEstimator from './components/CostEstimator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 flex flex-col font-sans selection:bg-amber-200 selection:text-slate-900">
      <Navbar onOpenContact={scrollToContact} />
      <main className="flex-grow">
        <Hero onOpenContact={scrollToContact} />
        <TrustStrip />
        <ServicePrices onOpenContact={scrollToContact} />
        <BeforeAfterSlider />
        <CostEstimator onOpenContact={scrollToContact} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
