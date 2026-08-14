import { ArrowRight, Phone, Star, MapPin, Sparkles, ChevronDown, ShieldCheck } from 'lucide-react';
import heroImg from '../images/hero_nails.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#faf7f2] pt-20 pb-16 lg:py-0 border-b border-[#ede4d6]">
      
      {/* 100vh Full Bleed Boutique Photography with Soft Warm Linen Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="The Nails Shop Horrem Atmosphäre"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] opacity-35 scale-105"
        />
        {/* Soft Warm Linen Gradient Overlay & Rose Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2] via-[#faf7f2]/75 to-[#faf7f2]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f4dedd]/50 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-8 pt-12">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 bg-[#ffffff]/90 border border-[#ede4d6] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-[#b36b67] shadow-xs backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#b36b67]" />
          <span>BOUTIQUE NAGELSTUDIO • HAUPTSTRASSE 18 • KERPEN-HORREM</span>
        </div>

        {/* Massive Fraunces Display Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-stone-900 tracking-tight leading-[1.05] max-w-5xl mx-auto">
          Perfekte Maniküre & <br />
          <span className="text-[#b36b67]">sinnliche Eleganz</span>.
        </h1>

        {/* Atmospheric Subtitle */}
        <p className="text-stone-600 text-base sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl mx-auto">
          Willkommen bei <strong className="text-stone-900 font-semibold">The Nails Shop</strong> in Kerpen-Horrem. Wir zaubern makellose Neumodellagen, zartes Babyboomer-Design, langanhaltende Gel-Nägel & wohltuende Spa-Maniküre.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenContact}
            aria-label="Wunschtermin anfragen"
            className="bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-[0_8px_30px_rgba(179,107,103,0.3)] transition-all transform active:scale-98 flex items-center gap-3 cursor-pointer group uppercase tracking-wider"
          >
            <span>Wunschtermin Anfragen</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:01721234567"
            className="bg-[#ffffff]/90 hover:bg-[#ffffff] text-stone-800 font-semibold text-base sm:text-lg px-7 py-4 sm:py-5 rounded-full border border-[#ede4d6] hover:border-[#b36b67]/40 shadow-xs backdrop-blur-md transition-all flex items-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-[#b36b67]" />
            <span className="tabular-nums">0172 1234567</span>
          </a>

          <a
            href="https://wa.me/491721234567?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20The%20Nails%20Shop%20Horrem%20vereinbaren."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffffff]/90 hover:bg-[#ffffff] text-stone-700 hover:text-stone-900 font-semibold text-base sm:text-lg px-6 py-4 sm:py-5 rounded-full border border-[#ede4d6] shadow-xs backdrop-blur-md transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#b36b67]" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* High-Impact Metric Strip */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-[#ede4d6] max-w-4xl mx-auto">
          <div className="bg-[#ffffff]/80 backdrop-blur-sm p-4 rounded-2xl border border-[#ede4d6] shadow-xs">
            <div className="flex items-center justify-center gap-1 text-[#b36b67] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#b36b67]" />
              ))}
            </div>
            <span className="font-serif text-2xl font-bold text-stone-900 block">4.9 / 5.0</span>
            <span className="text-[11px] text-stone-500 font-semibold uppercase tracking-wider">100+ Bewertungen</span>
          </div>

          <div className="bg-[#ffffff]/80 backdrop-blur-sm p-4 rounded-2xl border border-[#ede4d6] shadow-xs">
            <span className="font-serif text-2xl font-bold text-[#b36b67] block">500+ Farben</span>
            <span className="text-[11px] text-stone-500 font-semibold uppercase tracking-wider">Riesige Farbauswahl</span>
          </div>

          <div className="bg-[#ffffff]/80 backdrop-blur-sm p-4 rounded-2xl border border-[#ede4d6] shadow-xs">
            <span className="font-serif text-2xl font-bold text-stone-900 block flex items-center justify-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#b36b67]" />
              <span>Hygiene</span>
            </span>
            <span className="text-[11px] text-stone-500 font-semibold uppercase tracking-wider">Sterile Einzelwerkzeuge</span>
          </div>

          <div className="bg-[#ffffff]/80 backdrop-blur-sm p-4 rounded-2xl border border-[#ede4d6] shadow-xs">
            <span className="font-serif text-2xl font-bold text-stone-900 block flex items-center justify-center gap-1">
              <MapPin className="w-4 h-4 text-[#b36b67]" />
              <span>Horrem</span>
            </span>
            <span className="text-[11px] text-stone-500 font-semibold uppercase tracking-wider">Hauptstraße 18</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToServices}
          className="pt-6 inline-flex flex-col items-center gap-1 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
          aria-label="Zu den Behandlungen scrollen"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold">Behandlungen entdecken</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#b36b67]" />
        </button>

      </div>
    </section>
  );
}
