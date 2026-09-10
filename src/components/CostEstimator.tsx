import { useState } from 'react';
import { ArrowRight, Calculator, MessageSquare, Check, RotateCcw } from 'lucide-react';

interface CostEstimatorProps {
  onOpenContact: () => void;
}

export default function CostEstimator({ onOpenContact }: CostEstimatorProps) {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('neumodellage');
  const [nailLength, setNailLength] = useState('mittel');
  const [designStyle, setDesignStyle] = useState('babyboomer');

  const serviceLabels: Record<string, string> = {
    neumodellage: 'Neumodellage (Gel / Acryl)',
    auffuellen: 'Auffüllen (Refill)',
    pedikuere: 'Pediküre & Zehengel'
  };

  const lengthLabels: Record<string, string> = {
    kurz: 'Kurz / Natürlich',
    mittel: 'Mittellang (Klassisch)',
    lang: 'Lang / Statement'
  };

  const designLabels: Record<string, string> = {
    french: 'Nude / Fullcolor',
    babyboomer: 'Babyboomer / French Ombré',
    nailart: 'Nail Art / Glitzer & Strass'
  };

  const calculateEstimate = () => {
    let base = 45;
    if (serviceType === 'auffuellen') base = 35;
    if (serviceType === 'pedikuere') base = 38;

    if (nailLength === 'lang') base += 5;
    if (designStyle === 'nailart') base += 10;
    if (designStyle === 'babyboomer') base += 5;

    return base;
  };

  const getWhatsAppEstimateUrl = () => {
    const est = calculateEstimate();
    const sName = serviceLabels[serviceType] || serviceType;
    const lName = lengthLabels[nailLength] || nailLength;
    const dName = designLabels[designStyle] || designStyle;
    const msg = `Hallo The Nails Shop Horrem! Ich habe meinen Wunschpreis im Online-Rechner ermittelt:\n• Behandlung: ${sName}\n• Länge: ${lName}\n• Design: ${dName}\n• Richtpreis: ca. ${est} €\n\nHaben Sie demnächst einen passenden Termin frei?`;
    return `https://wa.me/4915129429936?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="rechner" className="py-24 bg-[#faf7f2] border-b border-[#ede4d6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#ffffff] border border-[#ede4d6] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#b36b67] shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#b36b67]" />
            <span>Interaktiver Preisrechner</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Style & Richtpreis Rechner
          </h2>
          <p className="text-stone-600 text-base font-normal">
            Wählen Sie Wunsch-Behandlung, Nagellänge und Design – kalkulieren Sie in 15 Sekunden unverbindlich Ihren Richtpreis.
          </p>
        </div>

        {/* Container */}
        <div className="bg-[#ffffff] border border-[#ede4d6] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Step Indicator */}
          <div className="flex items-center justify-between border-b border-[#ede4d6] pb-4">
            <span className="text-xs font-bold uppercase text-stone-700 tracking-wider">
              Schritt {step} von 3: {step === 1 ? 'Behandlung' : step === 2 ? 'Nagellänge' : 'Design & Finish'}
            </span>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    step === i 
                      ? 'w-8 bg-[#b36b67]' 
                      : step > i 
                        ? 'w-4 bg-[#b36b67]/60' 
                        : 'w-4 bg-[#ede4d6]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step 1: Behandlung */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="font-serif text-2xl font-normal text-stone-900">
                1. Welche Behandlung wünschen Sie?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'neumodellage', label: 'Neumodellage (Gel/Acryl)', sub: 'Neuverlängerung & Formgebung', price: 'ab 45 €' },
                  { id: 'auffuellen', label: 'Auffüllen (Refill)', sub: 'Rauswuchs auffüllen & versiegeln', price: 'ab 35 €' },
                  { id: 'pedikuere', label: 'Pediküre & Zehengel', sub: 'Schöne Fußpflege & langanhaltend', price: 'ab 38 €' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setServiceType(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      serviceType === item.id 
                        ? 'bg-[#faf7f2] border-[#b36b67] shadow-sm ring-1 ring-[#b36b67]/20' 
                        : 'bg-[#ffffff] border-[#ede4d6] hover:border-[#b36b67]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#b36b67] uppercase tracking-wider">{item.price}</span>
                      {serviceType === item.id && <Check className="w-4 h-4 text-[#b36b67]" />}
                    </div>
                    <span className="font-serif font-bold text-stone-900 block text-base leading-snug">{item.label}</span>
                    <span className="text-xs text-stone-500 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs px-7 py-3.5 rounded-full flex items-center gap-2 uppercase tracking-wider cursor-pointer shadow-sm transition-colors"
                >
                  <span>Weiter zu Schritt 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Nagellänge */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="font-serif text-2xl font-normal text-stone-900">
                2. Wählen Sie Ihre bevorzugte Nagellänge:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'kurz', label: 'Kurz / Natürlich', sub: 'Bündig mit Fingerkuppe', add: 'Inklusive' },
                  { id: 'mittel', label: 'Mittellang (Klassisch)', sub: 'Elegante Mandel- oder Square-Form', add: 'Inklusive' },
                  { id: 'lang', label: 'Lang / Statement XL', sub: 'Extravagante Form & Stiletto / Coffin', add: '+5 €' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setNailLength(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      nailLength === item.id 
                        ? 'bg-[#faf7f2] border-[#b36b67] shadow-sm ring-1 ring-[#b36b67]/20' 
                        : 'bg-[#ffffff] border-[#ede4d6] hover:border-[#b36b67]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#b36b67] uppercase tracking-wider">{item.add}</span>
                      {nailLength === item.id && <Check className="w-4 h-4 text-[#b36b67]" />}
                    </div>
                    <span className="font-serif font-bold text-stone-900 block text-base leading-snug">{item.label}</span>
                    <span className="text-xs text-stone-500 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer uppercase tracking-wider"
                >
                  ← Zurück
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs px-7 py-3.5 rounded-full flex items-center gap-2 uppercase tracking-wider cursor-pointer shadow-sm transition-colors"
                >
                  <span>Weiter zu Schritt 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Design & Ergebnis */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="font-serif text-2xl font-normal text-stone-900">
                3. Welches Design bevorzugen Sie?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'french', label: 'Nude / Fullcolor', sub: 'Einfarbige Nuance aus 500+ Tönen', add: 'Inklusive' },
                  { id: 'babyboomer', label: 'Babyboomer / French', sub: 'Eleganter Farbverlauf von Rosé zu Weiß', add: '+5 €' },
                  { id: 'nailart', label: 'Nail Art / Glitzer & Strass', sub: 'Swarovski-Steine, Chrome oder Handmalerei', add: '+10 €' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDesignStyle(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      designStyle === item.id 
                        ? 'bg-[#faf7f2] border-[#b36b67] shadow-sm ring-1 ring-[#b36b67]/20' 
                        : 'bg-[#ffffff] border-[#ede4d6] hover:border-[#b36b67]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#b36b67] uppercase tracking-wider">{item.add}</span>
                      {designStyle === item.id && <Check className="w-4 h-4 text-[#b36b67]" />}
                    </div>
                    <span className="font-serif font-bold text-stone-900 block text-base leading-snug">{item.label}</span>
                    <span className="text-xs text-stone-500 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>

              {/* Result Container */}
              <div className="bg-[#faf7f2] border border-[#ede4d6] p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mt-6 shadow-xs">
                <div className="space-y-1 text-center md:text-left">
                  <span className="text-xs text-[#b36b67] font-bold uppercase tracking-widest block">
                    Ihr unverbindlicher Richtpreis:
                  </span>
                  <span className="font-serif font-normal text-4xl sm:text-5xl text-stone-900">
                    ca. {calculateEstimate()} €
                  </span>
                  <span className="text-xs text-stone-500 block mt-1">
                    Inklusive Beratung, Desinfektion & hochwertigem Pflegeöl. Keine versteckten Kosten.
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                  <a
                    href={getWhatsAppEstimateUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-4 rounded-full transition-all shadow-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Per WhatsApp buchen</span>
                  </a>

                  <button
                    onClick={onOpenContact}
                    className="w-full sm:w-auto bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs px-6 py-4 rounded-full transition-all shadow-md uppercase tracking-wider cursor-pointer"
                  >
                    Termin anfragen
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer uppercase tracking-wider"
                >
                  ← Zurück zu Schritt 2
                </button>
                <button
                  onClick={() => {
                    setStep(1);
                    setServiceType('neumodellage');
                    setNailLength('mittel');
                    setDesignStyle('babyboomer');
                  }}
                  className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Neu berechnen</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
