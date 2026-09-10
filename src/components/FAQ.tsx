import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Wie lange halten Gel-Nägel bei The Nails Shop Horrem?',
      a: 'Bei unserer meisterhaften Modellage halten Ihre Nägel in der Regel 3 bis 4 Wochen makellos ohne Absplittern oder Lifting. Danach empfehlen wir einen Auffülltermin (Refill), um die Nagelgesundheit und ein gleichmäßiges Erscheinungsbild zu bewahren.'
    },
    {
      q: 'Muss ich im Voraus einen Termin vereinbaren?',
      a: 'Um Wartezeiten zu vermeiden und Ihnen die volle Aufmerksamkeit widmen zu können, empfehlen wir eine vorherige Reservierung per WhatsApp (0151 29429936), Telefon oder über unser Kontaktformular. Spontane Walk-ins nehmen wir bei freier Kapazität ebenfalls gerne an!'
    },
    {
      q: 'Werden meine eigenen Naturnägel durch Gel oder Acryl beschädigt?',
      a: 'Nein! Wir arbeiten mit schonenden Feiltechniken ohne aggressives Fräsen des Naturnagels und setzen ausschließlich zertifizierte, hautfreundliche Premium-Gele ein. Vor jeder Neumodellage wird der Nagel fachgerecht gereinigt, desinfiziert und gepflegt.'
    },
    {
      q: 'Kann ich eigene Vorlagen von Instagram oder Pinterest mitbringen?',
      a: 'Unbedingt! Zeigen Sie uns einfach Ihr Wunschdesign oder Inspirationsfoto auf dem Smartphone. Wir besprechen gemeinsam Form, Farbe und Machbarkeit und setzen Ihr Motiv exakt nach Ihren Wünschen um.'
    },
    {
      q: 'Gibt es Parkplätze und wie ist die Anbindung in Horrem?',
      a: 'Die Anbindung ist ideal: Unser Studio befindet sich direkt an der Bahnhofstraße 2 im Herzen von Horrem. Der Bahnhof Horrem (S12, S19, RE1, RE9) liegt nur ca. 2 Gehminuten entfernt. Kostenlose P+R Parkplätze und Kurzzeitparkzonen stehen in direkter Nähe zur Verfügung.'
    },
    {
      q: 'Welche Zahlungsmöglichkeiten werden akzeptiert?',
      a: 'Sie können bei uns bequem in bar sowie bargeldlos per EC-Karte, Kreditkarte oder Smartphone (Apple Pay & Google Pay) bezahlen.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#faf7f2] border-b border-[#ede4d6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#ffffff] border border-[#ede4d6] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#b36b67] shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#b36b67]" />
            <span>Häufig Gestellte Fragen</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Fragen & Antworten
          </h2>
          
          <p className="text-stone-600 text-base font-normal">
            Alles Wissenswerte rund um Pflege, Haltbarkeit, Termine und Ihren Besuch bei The Nails Shop Horrem.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-[#ffffff] border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen 
                    ? 'border-[#b36b67]/40 shadow-md ring-1 ring-[#b36b67]/10' 
                    : 'border-[#ede4d6] hover:border-[#d48b88]/50 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-normal text-stone-900 pr-2">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#f4dedd] text-[#b36b67] rotate-180' : 'bg-[#faf7f2] text-stone-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-stone-600 leading-relaxed border-t border-[#ede4d6]/60 pt-4 font-normal animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Question Footer Card */}
        <div className="mt-12 bg-[#ffffff] border border-[#ede4d6] p-6 rounded-2xl text-center space-y-3 shadow-xs">
          <p className="font-serif text-lg font-normal text-stone-900">
            Haben Sie eine andere Frage oder speziellen Wunsch?
          </p>
          <p className="text-stone-500 text-xs sm:text-sm">
            Schreiben Sie uns jederzeit unkompliziert per WhatsApp oder rufen Sie uns direkt an.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/4915129429936?text=Hallo!%20Ich%20habe%20eine%20kurze%20Frage%20zu%20euren%20Behandlungen."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs px-5 py-3 rounded-full uppercase tracking-wider shadow-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="tel:015129429936"
              className="inline-flex items-center gap-2 bg-[#faf7f2] hover:bg-[#f5f0e6] text-stone-800 border border-[#ede4d6] font-bold text-xs px-5 py-3 rounded-full uppercase tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#b36b67]" />
              <span>0151 29429936</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
