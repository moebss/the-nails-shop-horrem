import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Wie lange halten Gel-Nägel bei The Nails Shop Horrem?',
      a: 'Bei professioneller Modellage halten unsere Gel-Nägel typischerweise 3 bis 4 Wochen. Danach empfehlen wir ein Auffüllen, da der Naturnagel nachwächst.'
    },
    {
      q: 'Muss ich für einen Termin vorher anrufen oder schreiben?',
      a: 'Ja, da wir jedem Kunden volle Aufmerksamkeit schenken möchten, empfehlen wir eine kurze Terminvereinbarung per WhatsApp (0172 1234567) oder über unser Formular.'
    },
    {
      q: 'Werden meine eigenen Naturnägel unter dem Gel beschädigt?',
      a: 'Nein! Wir arbeiten mit nagelschonenden Feiltechniken und Marken-Gelen. Der Naturnagel bleibt intakt und wird durch das Gel vor Stößen geschützt.'
    },
    {
      q: 'Kann ich eigene Design-Ideen aus Instagram oder Pinterest mitbringen?',
      a: 'Sehr gerne! Zeigen Sie uns einfach Ihr Wunschfoto auf dem Smartphone und wir setzen Ihr individuelles Nail Art Motiv exakt um.'
    },
    {
      q: 'Welche Zahlungsmöglichkeiten gibt es im Studio?',
      a: 'Sie können bei uns bequem bar oder per EC-Karte / Kontaktlos (Apple Pay) bezahlen.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-[#fafbfc] via-[#f7f4ee] to-[#fafbfc] border-b border-amber-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full">
            Häufige Fragen
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
            Fragen & Antworten (FAQ)
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-amber-900/10 rounded-2xl overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between font-serif font-bold text-slate-900 text-base focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-amber-800 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
