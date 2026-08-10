import { Star, CheckCircle2, ShieldCheck, ArrowRight, Calendar, Heart } from 'lucide-react';
import heroImg from '../images/hero_nails.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fafbfc] via-[#f7f4ee] to-[#fafbfc] border-b border-amber-900/10">
      
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-stretch">
        
        {/* Left 50% Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col justify-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100/90 border border-amber-300/60 px-4 py-1.5 rounded-full shadow-sm w-fit mb-6">
            <div className="flex items-center gap-1 text-amber-600">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-xs font-extrabold text-amber-950 tracking-wider">
              Exklusives Nagelstudio in Kerpen-Horrem
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance leading-[1.15] mb-6">
            Perfekte Gel-Nägel & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-800 to-amber-950">Boutique Maniküre</span>.
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg text-slate-600 text-pretty mb-8 max-w-xl font-normal leading-relaxed">
            Willkommen bei <strong className="text-slate-900 font-semibold">The Nails Shop Horrem</strong>. Wir zaubern Ihnen makellose Gel- & Acrylnägel, elegante French Ombré Designs, Babyboomer & Wimpernlifting in entspannter Atmosphäre.
          </p>

          {/* Primary CTA + WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenContact}
              aria-label="Wunschtermin vereinbaren"
              className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-amber-900/20 transition-all transform active:scale-95 flex items-center justify-center gap-3 cursor-pointer group uppercase tracking-wider"
            >
              <span>Wunschtermin Buchen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/491721234567?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20The%20Nails%20Shop%20Horrem%20vereinbaren."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-6 py-4 rounded-full shadow-md transition-colors text-center flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>WhatsApp Direkt</span>
            </a>
          </div>

          {/* Trust Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700 border-t border-amber-900/10 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Höchste Hygiene-Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Schonender Nagelschutz</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Qualitäts-Garantie</span>
            </div>
          </div>

        </div>

        {/* Right 50% Edge-to-Edge Hero Image */}
        <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-full overflow-hidden">
          <img
            src={heroImg}
            alt="The Nails Shop Horrem Luxus Maniküre & Gel Nageldesign"
            className="absolute inset-0 w-full h-full object-cover object-center shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafbfc] via-transparent to-transparent lg:hidden" />
          
          {/* Floating Glassmorphism Badge */}
          <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:max-w-xs bg-[#fafbfc]/90 backdrop-blur-md p-4 rounded-2xl border border-amber-300/60 shadow-2xl z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">
                <Heart className="w-5 h-5 fill-rose-600 text-rose-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Boutique Atmosphäre</p>
                <p className="text-[11px] text-amber-900 font-semibold mt-0.5">Erholung & Schönheit mitten in Horrem</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
