import { Award, CheckCircle2, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import studioImg from '../images/studio_interior.jpg';

export default function AboutUs() {
  return (
    <section id="ueber-uns" className="py-12 sm:py-16 bg-[#faf7f2] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Studio Image Column */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-100">
              <img
                src={studioImg}
                alt="The Nails Shop Horrem Studio Ambiente & Behandlungsplätze"
                loading="lazy"
                decoding="async"
                className="w-full h-[460px] object-cover filter brightness-[0.98]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white text-stone-900 p-5 rounded-2xl border border-[#ede4d6] shadow-xl max-w-xs backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#f4dedd] text-[#b36b67] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-900">Meisterbetrieb Horrem</p>
                  <p className="text-[11px] text-stone-500 font-normal mt-0.5">Höchste Hygiene & Premium Gele</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Column - 100% Authentic Local Language, No Corporate Slop */}
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest text-[#b36b67] uppercase bg-white border border-[#ede4d6] px-4 py-1.5 rounded-full inline-block shadow-xs">
              Ihr Fachstudio an der Bahnhofstraße
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
              Ihr Wohlfühlort für Entspannung & <span className="text-[#b36b67]">perfekte Nägel</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              Bei <strong className="text-stone-900 font-semibold">The Nails Shop</strong> in Kerpen-Horrem (Bahnhofstraße 2) dreht sich alles um Ihr Wohlbefinden. Bei uns gibt es keine Hektik, sondern erstklassiges Handwerk, ehrliche Beratung und eine entspannte Wohlfühlatmosphäre.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-medium text-stone-700">
              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-2xl border border-[#ede4d6]/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#b36b67] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900 text-xs font-bold">4 Wochen Haltbarkeit</strong>
                  <span className="text-[11px] text-stone-500">Splitterfrei & stoßfest garantiert</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-2xl border border-[#ede4d6]/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#b36b67] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900 text-xs font-bold">Schmerzfreie Fräsertechnik</strong>
                  <span className="text-[11px] text-stone-500">Sanft ohne Brennen oder Hitze</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-2xl border border-[#ede4d6]/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#b36b67] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900 text-xs font-bold">100% Medizinisch sterilisiert</strong>
                  <span className="text-[11px] text-stone-500">Autoklav-Aufbereitung für jedes Set</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-2xl border border-[#ede4d6]/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#b36b67] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900 text-xs font-bold">Wunschdesign nach Foto</strong>
                  <span className="text-[11px] text-stone-500">Instagram- & TikTok-Trends 1:1 umgesetzt</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#ede4d6] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f4dedd] flex items-center justify-center font-serif font-bold text-[#b36b67] text-xl border border-[#ede4d6]">
                  ✦
                </div>
                <div>
                  <span className="font-serif font-semibold text-stone-900 text-base block">Ihr Team von The Nails Shop</span>
                  <span className="text-xs text-stone-500 block">Bahnhofstraße 2 • 50169 Kerpen-Horrem</span>
                </div>
              </div>

              <a
                href="https://wa.me/4915129429936?text=Hallo!%20Ich%20habe%20eine%20Frage%20zu%20euren%20Behandlungen%20oder%20m%C3%B6chte%20einen%20Termin%20anfragen."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex text-xs font-bold text-[#b36b67] hover:underline"
              >
                Frage per WhatsApp stellen →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
