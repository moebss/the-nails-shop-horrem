import { useState } from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import imgNaturnagelBefore from '../images/nail_before_natural.jpg';
import imgBabyboomerAfter from '../images/nail_babyboomer.jpg';

interface BeforeAfterSliderProps {
  onOpenContact?: () => void;
}

export default function BeforeAfterSlider({ onOpenContact }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);

  const guarantees = [
    {
      icon: ShieldCheck,
      title: '4 Wochen Haltbarkeits-Garantie',
      desc: 'Kein vorzeitiges Absplittern, kein lästiges Lifting. Garantiert stoßfester Glanz bis zum nächsten Auffülltermin.'
    },
    {
      icon: Sparkles,
      title: 'Schmerzfreie Fräsertechnik',
      desc: 'Sanfte Nagelhautbehandlung ohne Hitzeentwicklung oder Brennen. Ihr Naturnagel bleibt kräftig & unversehrt.'
    },
    {
      icon: HeartHandshake,
      title: '100% Medizinisch sterilisierte Instrumente',
      desc: 'Höchste Hygiene: Alle Feilen & Zangen werden im Autoklaven aufbereitet und für jede Kundin frisch versiegelt geöffnet.'
    }
  ];

  return (
    <section id="transformation" className="py-12 sm:py-16 bg-[#faf7f2] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#ffffff] border border-[#ede4d6] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#b36b67] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#b36b67]" />
            <span>Haltbarkeits-Garantie & Wunschdesign</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Echte Transformation & Haltbarkeit
          </h2>
          
          <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Sehen Sie den Unterschied: Vom unbehandelten Naturnagel zur meisterhaft modellierten Maniküre. Ziehen Sie den Regler, um die Veredelung zu vergleichen.
          </p>
        </div>

        {/* 3 Hard USPs & Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#ffffff] border border-[#ede4d6] rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#b36b67]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#faf7f2] border border-[#ede4d6] flex items-center justify-center text-[#b36b67] shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#ede4d6]/70 flex items-center gap-2 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Garantiert bei jeder Behandlung</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Before / After Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#ede4d6] select-none bg-stone-100">
            
            {/* After Image (Right Side / Full Canvas) */}
            <img
              src={imgBabyboomerAfter}
              alt="Nachher: Perfektionierte Neumodellage & Babyboomer Ombré"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* After Label Badge */}
            <div className="absolute top-4 right-4 bg-[#b36b67] text-white font-bold text-xs px-4 py-2 rounded-full shadow-lg z-10 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nachher: Neumodellage (4 Wochen haltbar)</span>
            </div>

            {/* Before Image (Left Side clipped cleanly via clipPath) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={imgNaturnagelBefore}
                alt="Vorher: Unbehandelter Naturnagel vor der Modellage"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              {/* Before Label Badge */}
              <div className="absolute top-4 left-4 bg-stone-900/90 text-white font-bold text-xs px-4 py-2 rounded-full shadow-lg z-10 uppercase tracking-wider border border-stone-700">
                <span>Vorher: Naturnagel</span>
              </div>
            </div>

            {/* Vertical Divider Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#b36b67] text-white border-2 border-white flex items-center justify-center text-xs font-bold shadow-2xl transition-transform active:scale-110">
                ↔
              </div>
            </div>

            {/* Native Touch & Mouse Range Control */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 touch-none"
              aria-label="Vergleichs-Schieberegler Naturnagel vor der Behandlung und fertige Neumodellage"
            />
          </div>

          <p className="text-center text-xs text-stone-500 mt-3">
            Tipp: Ziehen Sie den Regler nach links und rechts, um die Verwandlung im Detail zu betrachten.
          </p>
        </div>

        {/* Wunschdesign Conversion Banner */}
        <div className="mt-10 max-w-4xl mx-auto bg-[#ffffff] border border-[#ede4d6] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs font-bold text-[#b36b67] uppercase tracking-wider block">
              100% Wunschdesign-Garantie
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-stone-900">
              Haben Sie ein Foto von TikTok oder Instagram?
            </h4>
            <p className="text-stone-600 text-xs sm:text-sm">
              Zeigen Sie uns beim Termin einfach Ihr Wunschfoto auf dem Smartphone – wir setzen die Form, Farbe & Nail Art detailgetreu um.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/4915129429936?text=Hallo!%20Ich%20habe%20ein%20Foto%20f%C3%BCr%20mein%20Wunschdesign%20und%20m%C3%B6chte%20gerne%20einen%20Termin%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Foto per WhatsApp senden</span>
            </a>

            {onOpenContact && (
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full sm:w-auto bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span>Termin anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
