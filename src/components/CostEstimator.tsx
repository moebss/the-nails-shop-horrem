import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CostEstimatorProps {
  onOpenContact: () => void;
}

export default function CostEstimator({ onOpenContact }: CostEstimatorProps) {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('neumodellage');
  const [nailLength, setNailLength] = useState('mittel');
  const [designStyle, setDesignStyle] = useState('french');

  const calculateEstimate = () => {
    let base = 45;
    if (serviceType === 'auffuellen') base = 35;
    if (serviceType === 'pedikuere') base = 38;

    if (nailLength === 'lang') base += 5;
    if (designStyle === 'nailart') base += 10;
    if (designStyle === 'babyboomer') base += 5;

    return base;
  };

  return (
    <section id="rechner" className="py-20 bg-[#fcfaf7] border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-stone-700 uppercase bg-[#f4efe8] border border-[#e5d9c7] px-3.5 py-1.5 rounded-full">
            Style-Konfigurator
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mt-4">
            Nagel-Style & Richtpreis Rechnen
          </h2>
          <p className="text-stone-600 text-sm mt-2 font-normal">
            Wählen Sie Wunsch-Behandlung, Nagellänge und Design – berechnen Sie in 15 Sekunden Ihre ungefähren Kosten.
          </p>
        </div>

        <div className="bg-[#f7f3ed] border border-[#e8ded1] rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
          
          {/* Step Indicator */}
          <div className="flex items-center justify-between border-b border-stone-300/60 pb-4">
            <span className="text-xs font-bold uppercase text-stone-800 tracking-widest">Schritt {step} von 3</span>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${step >= i ? 'bg-stone-900' : 'bg-stone-300'}`} />
              ))}
            </div>
          </div>

          {/* Step 1: Behandlung */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-xl text-stone-900">1. Welche Behandlung wünschen Sie?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'neumodellage', label: 'Neumodellage (Gel/Acryl)', sub: 'Verlängerung & Form' },
                  { id: 'auffuellen', label: 'Auffüllen (Refill)', sub: 'Rauswuchs auffüllen' },
                  { id: 'pedikuere', label: 'Pediküre & Zehengel', sub: 'Fußpflege & Farbe' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setServiceType(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      serviceType === item.id 
                        ? 'bg-[#fcfaf7] border-stone-900 shadow-xs' 
                        : 'bg-[#fcfaf7]/50 border-stone-300/80 hover:border-stone-500'
                    }`}
                  >
                    <span className="font-bold text-stone-900 block text-sm">{item.label}</span>
                    <span className="text-xs text-stone-500 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-6 bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs px-6 py-3 rounded-full flex items-center gap-2 ml-auto uppercase tracking-wider cursor-pointer"
              >
                <span>Weiter zu Schritt 2</span>
                <ArrowRight className="w-4 h-4 text-rose-300" />
              </button>
            </div>
          )}

          {/* Step 2: Nagellänge */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-xl text-stone-900">2. Wählen Sie Ihre bevorzugte Nagellänge:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'kurz', label: 'Kurz / Natürlich', sub: 'Bündig mit Kuppe' },
                  { id: 'mittel', label: 'Mittellang', sub: 'Klassische Elegant-Form' },
                  { id: 'lang', label: 'Lang / Statement', sub: 'Almond & Coffin XL' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setNailLength(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      nailLength === item.id 
                        ? 'bg-[#fcfaf7] border-stone-900 shadow-xs' 
                        : 'bg-[#fcfaf7]/50 border-stone-300/80 hover:border-stone-500'
                    }`}
                  >
                    <span className="font-bold text-stone-900 block text-sm">{item.label}</span>
                    <span className="text-xs text-stone-500 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <button onClick={() => setStep(1)} className="text-xs font-bold text-stone-600 hover:underline">Zurück</button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs px-6 py-3 rounded-full flex items-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  <span>Weiter zu Schritt 3</span>
                  <ArrowRight className="w-4 h-4 text-rose-300" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Design & Ergebnis (Harmonized Warm Stone Box) */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="font-serif font-semibold text-xl text-stone-900">3. Welches Design bevorzugen Sie?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'french', label: 'Nude / Fullcolor', sub: 'Eine Wunschfarbe' },
                  { id: 'babyboomer', label: 'Babyboomer / French', sub: 'Klassischer Verlauf' },
                  { id: 'nailart', label: 'Nail Art / Glitzer', sub: 'Steine & Malerei' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDesignStyle(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      designStyle === item.id 
                        ? 'bg-[#fcfaf7] border-stone-900 shadow-xs' 
                        : 'bg-[#fcfaf7]/50 border-stone-300/80 hover:border-stone-500'
                    }`}
                  >
                    <span className="font-bold text-stone-900 block text-sm">{item.label}</span>
                    <span className="text-xs text-stone-500 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>

              {/* Warm Stone-900 Result Container (Matches Warm Background Law #1) */}
              <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div>
                  <span className="text-xs text-stone-300 font-bold uppercase tracking-widest block">Ihr voraussichtlicher Richtpreis:</span>
                  <span className="font-serif font-bold text-3xl text-white">ca. {calculateEstimate()} €</span>
                  <span className="text-[11px] text-stone-300 block mt-1">Unverbindlich • Exkl. Spezial-Steine • Inkl. Pflegeöl</span>
                </div>

                <button
                  onClick={onOpenContact}
                  className="bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs px-6 py-3.5 rounded-full transition-all shadow-md uppercase tracking-wider cursor-pointer"
                >
                  Wunschtermin Anfragen
                </button>
              </div>

              <button onClick={() => setStep(2)} className="text-xs font-bold text-stone-600 hover:underline">Zurück zu Schritt 2</button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
