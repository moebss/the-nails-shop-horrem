import { Check, ArrowRight, Sparkles } from 'lucide-react';
import imgNeumodellage from '../images/nail_neumodellage.jpg';
import imgRefill from '../images/hero_nails.jpg';
import imgBabyboomer from '../images/nail_babyboomer.jpg';
import imgNailArt from '../images/portfolio_nails.jpg';
import imgPedikuer from '../images/gallery_1.jpg';
import imgLifting from '../images/gallery_2.jpg';

interface ServicePricesProps {
  onOpenContact: () => void;
}

export default function ServicePrices({ onOpenContact }: ServicePricesProps) {
  const services = [
    {
      title: 'Neumodellage (Gel / Acryl)',
      price: 'ab 45 €',
      time: '60–75 Min',
      image: imgNeumodellage,
      desc: 'Inkl. Verlängerung mit Schablone/Tipps, Formgestaltung & Wunschfarbe.',
      highlights: ['Nagelhautpflege', 'Langanhaltender Glanz', 'Form nach Wunsch (Almond, Coffin, Square)']
    },
    {
      title: 'Auffüllen (Refill)',
      price: 'ab 35 €',
      time: '45–60 Min',
      image: imgRefill,
      desc: 'Professionelles Auffüllen des Rauswuchses mit frischer Versiegelung.',
      highlights: ['Altschicht abtragen', 'Farbe neu wählen', 'Nagelschonenende Technik']
    },
    {
      title: 'Babyboomer & French Ombré',
      price: 'ab 50 €',
      time: '60–75 Min',
      image: imgBabyboomer,
      desc: 'Der zeitlose Klassiker mit sanftem Farbverlauf für natürliche Eleganz.',
      highlights: ['Zarter Verlauf', 'Sehr natürlich', 'Perfekt für Hochzeit & Alltag']
    },
    {
      title: 'Nail Art & Glamour Akzente',
      price: 'ab 5 €',
      time: '15 Min',
      image: imgNailArt,
      desc: 'Glitzer, Blattgold, Steinchen, Marmorierung oder filigrane Malerei.',
      highlights: ['Handgemalt', 'Swarovski-Steine', 'Individuelles Unikat']
    },
    {
      title: 'Pediküre & Gel-Zehennägel',
      price: 'ab 38 €',
      time: '45 Min',
      image: imgPedikuer,
      desc: 'Verwöhnende Fußpflege mit pflegendem Fußbad & gelhärteter Farbe.',
      highlights: ['Fußbad & Peeling', 'Makellose Zehen', 'Wochenlanger Halt']
    },
    {
      title: 'Lash & Brow Lifting',
      price: 'ab 49 €',
      time: '45 Min',
      image: imgLifting,
      desc: 'Strahlender Blick ohne Mascara: Lash-Lifting inkl. Färben & Keratin-Serum.',
      highlights: ['Naturwimpern-Schwung', 'Inklusive Färben', 'Hält 6–8 Wochen']
    }
  ];

  return (
    <section id="preise" className="py-20 bg-[#fcfaf7] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-stone-700 uppercase bg-[#f4efe8] border border-[#e5d9c7] px-3.5 py-1.5 rounded-full inline-block">
            Verwöhnprogramm & Preisliste
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
            Unsere Behandlungen & Preise
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            Transparente Preise, hochwertige Markenprodukte und individuelle Beratung in Kerpen-Horrem.
          </p>
        </div>

        {/* Services Grid with Visual Impression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="group bg-[#f7f3ed] border border-[#e8ded1] rounded-3xl overflow-hidden hover:border-stone-400 transition-all duration-300 shadow-xs flex flex-col justify-between">
              
              <div>
                {/* Visual Header Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f7f3ed] via-transparent to-black/20" />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#fcfaf7]/95 backdrop-blur-md border border-[#e5d9c7] px-3.5 py-1 rounded-xl shadow-sm">
                    <span className="font-serif font-bold text-stone-900 text-lg">{s.price}</span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-3 left-3 bg-[#fcfaf7]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-stone-300/80 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-700" />
                    <span className="text-[11px] font-bold text-stone-800 uppercase tracking-wider">{s.time}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif font-semibold text-xl text-stone-900 leading-snug group-hover:text-amber-800 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>

                  <ul className="space-y-2 text-xs text-stone-700 font-medium pt-2 border-t border-stone-300/60">
                    {s.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-stone-800 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenContact}
                  aria-label={`Termin für ${s.title} buchen`}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs py-3.5 rounded-full transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer shadow-sm group-hover:shadow-md"
                >
                  <span>Termin Buchen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-200 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
