import { Shield, Sparkles, Award, Heart, CheckCircle2 } from 'lucide-react';
import studioImg from '../images/studio_interior.jpg';

export default function AboutUs() {
  return (
    <section id="ueber-uns" className="py-20 bg-[#f7f3ed] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Studio Image Column */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#fcfaf7]">
              <img
                src={studioImg}
                alt="The Nails Shop Horrem Studio Ambiente"
                className="w-full h-[450px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-stone-900 text-stone-50 p-5 rounded-2xl border border-stone-800 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-rose-300 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider">Zertifiziertes Studio</p>
                  <p className="text-[11px] text-stone-300 font-normal mt-0.5">Höchste Hygiene & Marken-Gele</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Column */}
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest text-stone-700 uppercase bg-[#fcfaf7] border border-[#e5d9c7] px-3.5 py-1.5 rounded-full">
              Über Das Studio
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
              Ihr Ort für Entspannung & <span className="italic text-stone-700">perfekte Nägel</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              Bei <strong className="text-stone-900 font-semibold">The Nails Shop Horrem</strong> steht Ihre persönliche Auszeit im Mittelpunkt. Wir verbinden meisterhaftes Handwerk mit schonender Nagelpflege und modernen Trends.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-medium text-stone-800">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                <span>100% Medizinische Sterilisation aller Instrumente</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                <span>Schonende Feiltechnik ohne Naturnagelschaden</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                <span>Individuelle Beratung für jede Nagelform</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                <span>Zentral in Horrem mit bequemer Anfahrt</span>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-300/60 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f4efe8] flex items-center justify-center font-serif font-bold text-[#6d5b52] text-xl border border-stone-300">
                ✦
              </div>
              <div>
                <span className="font-serif font-semibold text-stone-900 text-base block">Team The Nails Shop</span>
                <span className="text-xs text-stone-500 block">Kerpen-Horrem</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
