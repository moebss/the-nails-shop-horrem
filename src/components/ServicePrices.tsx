import { Check, ArrowRight } from 'lucide-react';

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
      desc: 'Professionelles Auffüllen des Rauswuchses mit frischer Versiegelung.',
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
    <section id="preise" className="py-20 bg-[#fcfaf7] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-stone-700 uppercase bg-[#f4efe8] border border-[#e5d9c7] px-3.5 py-1.5 rounded-full">
            Verwöhnprogramm & Preisliste
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 mt-4 text-balance">
            Unsere Behandlungen & Preise
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 text-pretty font-normal">
            Transparente Preise, hochwertige Markenprodukte und individuelle Beratung in Kerpen-Horrem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-[#f7f3ed] border border-[#e8ded1] rounded-3xl p-7 hover:border-stone-400 transition-all shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-stone-300/60 pb-3">
                  <h3 className="font-serif font-semibold text-xl text-stone-900 leading-snug">{s.title}</h3>
                  <span className="font-serif font-bold text-stone-900 text-lg shrink-0 ml-2">{s.price}</span>
                </div>

                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-widest block">Dauer: {s.time}</span>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">{s.desc}</p>

                <ul className="space-y-2 text-xs text-stone-700 font-medium pt-2">
                  {s.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-stone-800 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenContact}
                aria-label={`Termin für ${s.title} buchen`}
                className="w-full bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs py-3 rounded-full transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                <span>Termin Buchen</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose-300" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
