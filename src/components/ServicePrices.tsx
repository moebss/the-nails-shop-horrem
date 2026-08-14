import { Clock, Sparkles, Check, ArrowRight, Heart } from 'lucide-react';
import imgNeumodellage from '../images/nail_neumodellage.jpg';
import imgBabyboomer from '../images/nail_babyboomer.jpg';
import imgPortfolio from '../images/portfolio_nails.jpg';
import imgGallery1 from '../images/gallery_1.jpg';
import imgGallery2 from '../images/gallery_2.jpg';
import imgStudio from '../images/studio_interior.jpg';

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
      badge: null,
      desc: 'Komplette Neuverlängerung mit Schablone oder Tips, Formgebung nach Wunsch & Farbgel.',
      features: ['Individuelle Längen- & Formanpassung', 'Freie Farbwahl aus 500+ Nuancen', 'Inkl. Nagelhautpflege & Nagelöl']
    },
    {
      title: 'Babyboomer & French Ombré',
      price: 'ab 38 €',
      time: '60 Min',
      image: imgBabyboomer,
      badge: 'Signature Look',
      desc: 'Der zeitlose Klassiker: Sanfter, natürlicher Farbverlauf von zartem Rosé zu strahlendem Weiß.',
      features: ['Fließender, natürlicher Übergang', 'Matt oder Hochglanz-Versiegelung', 'Perfekt für jeden Anlass & Alltag']
    },
    {
      title: 'Auffüllen & Farb-Refresh',
      price: 'ab 35 €',
      time: '45–60 Min',
      image: imgPortfolio,
      badge: null,
      desc: 'Professionelles Nachfüllen des herausgewachsenen Nagels inkl. Kürzen, Feilen & neuer Farbe.',
      features: ['Altes Material schonend abtragen', 'Stabilisierung des Naturnagels', 'Neue Trendfarbe oder Glitzer']
    },
    {
      title: 'Spa Maniküre & Handpflege',
      price: 'ab 25 €',
      time: '30–45 Min',
      image: imgGallery1,
      badge: null,
      desc: 'Verwöhnprogramm für Hände & Naturnägel: Handbad, Peeling, Nagelpolitur & Handmassage.',
      features: ['Entspannendes Aroma-Handbad', 'Sanftes Entfernen der Nagelhaut', 'Wohltuende Feuchtigkeitsmassage']
    },
    {
      title: 'Nail Art, Strass & Chrome',
      price: 'ab 5 €',
      time: '15 Min',
      image: imgGallery2,
      badge: null,
      desc: 'Individuelle Akzentnägel mit Swarovski-Kristallen, Chrome-Effekt, Cat-Eye oder Handmalerei.',
      features: ['Kreative Hand-Paintings & Muster', 'Hochwertige Kristalle & Glitzer', 'Pro Nagel oder Komplett-Set']
    },
    {
      title: 'Wimpernlifting & Brow Styling',
      price: 'ab 45 €',
      time: '45 Min',
      image: imgStudio,
      badge: null,
      desc: 'Natürlicher Schwung für deine eigenen Wimpern & typgerechte Augenbrauen-Korrektur.',
      features: ['Lifting-Effekt für bis zu 6–8 Wochen', 'Inkl. Wimpernfärben & Keratin-Booster', 'Exaktes Formen der Augenbrauen']
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#faf7f2] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#b36b67] uppercase bg-[#ffffff] border border-[#ede4d6] px-3.5 py-1.5 rounded-full inline-block">
            Behandlungen & Preise
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Schöne Nägel & Beauty Spa
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-normal">
            Erstklassige Produkte, schonende Arbeitsweise und transparente Festpreise ohne versteckte Kosten.
          </p>
        </div>

        {/* Cohesive 3x2 Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group bg-[#ffffff] border rounded-3xl overflow-hidden shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                service.badge 
                  ? 'border-[#b36b67]/50 ring-1 ring-[#b36b67]/20' 
                  : 'border-[#ede4d6] hover:border-[#d48b88]/60'
              }`}
            >
              <div>
                {/* Visual Header with Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Optional Featured Badge */}
                  {service.badge && (
                    <div className="absolute top-4 left-4 bg-[#b36b67] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      <span>{service.badge}</span>
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#ffffff]/95 backdrop-blur-md border border-[#ede4d6] px-3.5 py-1 rounded-xl shadow-xs">
                    <span className="font-serif font-bold text-[#b36b67] text-lg sm:text-xl">{service.price}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#b36b67]" />
                      <span>{service.time}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-stone-900 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-[#ede4d6] text-xs text-stone-700">
                    {service.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#b36b67] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Footer per card */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={onOpenContact}
                  className={`w-full py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    service.badge
                      ? 'bg-[#b36b67] hover:bg-[#9c5955] text-white shadow-md'
                      : 'bg-[#faf7f2] hover:bg-[#f5f0e6] text-stone-800 border border-[#ede4d6] hover:border-[#b36b67]/40'
                  }`}
                >
                  <span>Termin anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-current opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Consultation Banner */}
        <div className="mt-14 bg-[#ffffff] border border-[#ede4d6] p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-stone-900">
              Spontan Zeit für schöne Nägel? <span className="text-[#b36b67]">Walk-In Termine möglich!</span>
            </h4>
            <p className="text-stone-500 text-xs sm:text-sm">
              Kommen Sie einfach in der Hauptstraße 18 in Horrem vorbei oder reservieren Sie bequem online.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:01721234567"
              className="bg-[#faf7f2] hover:bg-[#f5f0e6] text-stone-800 border border-[#ede4d6] px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              0172 1234567
            </a>
            <button
              onClick={onOpenContact}
              className="bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
            >
              Termin anfragen
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
