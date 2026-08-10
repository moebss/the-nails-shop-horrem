import { Check, Sparkles, ArrowRight } from 'lucide-react';
import portfolioImg from '../images/portfolio_nails.jpg';

interface ServicePricesProps {
  onOpenContact: () => void;
}

export default function ServicePrices({ onOpenContact }: ServicePricesProps) {
  const services = [
    {
      title: 'Neumodellage (Gel / Acryl)',
      price: 'ab 45 €',
      time: '60–75 Min',
      desc: 'Inkl. Verlängerung mit Schablone/Tipps, Formgestaltung & Wunschfarbe.',
      highlights: ['Nagelhautpflege', 'Langanhaltender Glanz', 'Form nach Wunsch (Almond, Coffin, Square)']
    },
    {
      title: 'Auffüllen (Refill)',
      price: 'ab 35 €',
      time: '45–60 Min',
      desc: 'Professionelles Auffüllen der Rauswuchses mit frischer Versiegelung.',
      highlights: ['Altschicht abtragen', 'Farbe neu wählen', 'Nagelschonenende Technik']
    },
    {
      title: 'Babyboomer & French Ombré',
      price: 'ab 50 €',
      time: '60–75 Min',
      desc: 'Der zeitlose Klassiker mit sanftem Farbverlauf für natürliche Eleganz.',
      highlights: ['Zarter Verlauf', 'Sehr natürlich', 'Perfekt für Hochzeit & Alltag']
    },
    {
      title: 'Nail Art & Glamour Akzente',
      price: 'ab 5 €',
      time: '15 Min',
      desc: 'Glitzer, Blattgold, Steinchen, Marmorierung oder filigrane Malerei.',
      highlights: ['Handgemalt', 'Swarovski-Steine', 'Individuelles Unikat']
    },
    {
      title: 'Pediküre & Gel-Zehennägel',
      price: 'ab 38 €',
      time: '45 Min',
      desc: 'Verwöhnende Fußpflege mit pflegendem Fußbad & gelhärteter Farbe.',
      highlights: ['Fußbad & Peeling', 'Makellose Zehen', 'Wochenlanger Halt']
    },
    {
      title: 'Lash & Brow Lifting',
      price: 'ab 49 €',
      time: '45 Min',
      desc: 'Strahlender Blick ohne Mascara: Lash-Lifting inkl. Färben & Keratin-Serum.',
      highlights: ['Naturwimpern-Schwung', 'Inklusive Färben', 'Hält 6–8 Wochen']
    }
  ];

  return (
    <section id="preise" className="py-20 bg-[#fafbfc] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full">
            Verwöhnprogramm & Preisliste
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 text-balance">
            Unsere Behandlungen & Preise
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 text-pretty font-normal">
            Transparente Preise, hochwertige Markenprodukte und individuelle Beratung in Kerpen-Horrem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-[#f7f4ee] border border-amber-900/10 rounded-3xl p-6 hover:border-amber-400 transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-amber-900/10 pb-3">
                  <h3 className="font-serif font-bold text-xl text-slate-900 leading-snug">{s.title}</h3>
                  <span className="font-serif font-extrabold text-amber-900 text-lg shrink-0 ml-2">{s.price}</span>
                </div>

                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">Dauer: {s.time}</span>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{s.desc}</p>

                <ul className="space-y-1.5 text-xs text-slate-700 font-medium pt-2">
                  {s.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenContact}
                aria-label={`Termin für ${s.title} buchen`}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-2xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Termin Buchen</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
