import { Star, CheckCircle2, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import heroImg from '../images/hero_nails.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#fcfaf7] border-b border-stone-200/80">
      
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-stretch">
        
        {/* Left 50% Content Column */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col justify-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#f4efe8] border border-[#e5d9c7] px-4 py-1.5 rounded-full shadow-xs w-fit mb-6">
            <div className="flex items-center gap-1 text-stone-700">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-stone-800 text-stone-800" />
              ))}
            </div>
            <span className="text-xs font-semibold text-stone-800 tracking-wider uppercase">
              Boutique Nagelstudio Kerpen-Horrem
            </span>
          </div>

          {/* Headline - Editorial Fraunces Serif */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-900 text-balance leading-[1.12] mb-6">
            Perfekte Maniküre & <span className="italic font-light text-stone-700">sinnvolle Eleganz</span> für Ihre Nägel.
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg text-stone-600 text-pretty mb-8 max-w-xl font-normal leading-relaxed">
            Bei <strong className="text-stone-900 font-semibold">The Nails Shop Horrem</strong> erwarten Sie makellose Gel- & Acrylnägel, zartes Babyboomer-Design und wohltuende Handpflege in entspannter Spa-Atmosphäre.
          </p>

          {/* Primary CTA + WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenContact}
              aria-label="Wunschtermin vereinbaren"
              className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-base px-8 py-4 rounded-full shadow-md transition-all transform active:scale-98 flex items-center justify-center gap-3 cursor-pointer group uppercase tracking-wider"
            >
              <span>Wunschtermin Buchen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-rose-300" />
            </button>

            <a
              href="https://wa.me/491721234567?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20The%20Nails%20Shop%20Horrem%20vereinbaren."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f4efe8] hover:bg-[#eae0d2] text-stone-800 font-semibold text-base px-6 py-4 rounded-full border border-[#e2d5c3] shadow-xs transition-colors text-center flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>WhatsApp Direkt</span>
            </a>
          </div>

          {/* Trust Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-stone-700 border-t border-stone-200/80 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0" />
              <span>Sterile Instrumente</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0" />
              <span>Schonender Nagelschutz</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-stone-800 shrink-0" />
              <span>Qualitäts-Garantie</span>
            </div>
          </div>

        </div>

        {/* Right 50% Clean Image Column */}
        <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-full overflow-hidden bg-[#f4efe8]">
          <img
            src={heroImg}
            alt="The Nails Shop Horrem Luxus Maniküre"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf7] via-transparent to-transparent lg:hidden" />
          
          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:max-w-xs bg-[#fcfaf7]/95 backdrop-blur-md p-4 rounded-2xl border border-stone-200 shadow-xl z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f4efe8] text-stone-800 flex items-center justify-center font-bold text-lg shrink-0">
                <Heart className="w-4 h-4 text-rose-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900 uppercase tracking-wider">Erholung & Schönheit</p>
                <p className="text-[11px] text-stone-600 font-normal mt-0.5">Zentral gelegen in Kerpen-Horrem</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
