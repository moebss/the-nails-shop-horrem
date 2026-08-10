import { useState } from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

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
    <section id="rechner" className="py-20 bg-[#fafbfc] border-b border-amber-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full">
            Interaktiver 3-Schritt Konfigurator
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
            Nagel-Style & Richtpreis Rechnen
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Wählen Sie Wunsch-Behandlung, Nagellänge und Design – berechnen Sie in 15 Sekunden Ihre ungefähren Kosten.
          </p>
        </div>

        <div className="bg-[#f7f4ee] border border-amber-900/15 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
          
          {/* Step Indicator */}
          <div className="flex items-center justify-between border-b border-amber-900/10 pb-4">
            <span className="text-xs font-extrabold uppercase text-amber-900 tracking-wider">Schritt {step} von 3</span>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${step >= i ? 'bg-amber-800' : 'bg-slate-300'}`} />
              ))}
            </div>
          </div>

          {/* Step 1: Behandlung */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-slate-900">1. Welche Behandlung wünschen Sie?</h3>
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
                        ? 'bg-amber-100 border-amber-700 shadow-sm' 
                        : 'bg-white border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <span className="font-bold text-slate-900 block text-sm">{item.label}</span>
                    <span className="text-xs text-slate-500 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-6 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3 rounded-full flex items-center gap-2 ml-auto uppercase tracking-wider"
              >
                <span>Weiter zu Schritt 2</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          )}

          {/* Step 2: Nagellänge */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-slate-900">2. Wählen Sie Ihre bevorzugte Nagellänge:</h3>
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
                        ? 'bg-amber-100 border-amber-700 shadow-sm' 
                        : 'bg-white border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <span className="font-bold text-slate-900 block text-sm">{item.label}</span>
                    <span className="text-xs text-slate-500 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <button onClick={() => setStep(1)} className="text-xs font-bold text-slate-600 hover:underline">Zurück</button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3 rounded-full flex items-center gap-2 uppercase tracking-wider"
                >
                  <span>Weiter zu Schritt 3</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Design & Ergebnis */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-xl text-slate-900">3. Welches Design bevorzugen Sie?</h3>
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
                        ? 'bg-amber-100 border-amber-700 shadow-sm' 
                        : 'bg-white border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <span className="font-bold text-slate-900 block text-sm">{item.label}</span>
                    <span className="text-xs text-slate-500 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>

              {/* Estimate Box */}
              <div className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white p-6 rounded-2xl border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div>
                  <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">Ihr voraussichtlicher Richtpreis:</span>
                  <span className="font-serif font-extrabold text-3xl text-white">ca. {calculateEstimate()} €</span>
                  <span className="text-[11px] text-slate-300 block mt-1">Unverbindlich • Exkl. Spezial-Steine • Inkl. Pflegeöl</span>
                </div>

                <button
                  onClick={onOpenContact}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs px-6 py-3.5 rounded-full transition-all shadow-md uppercase tracking-wider"
                >
                  Wunschtermin Anfragen
                </button>
              </div>

              <button onClick={() => setStep(2)} className="text-xs font-bold text-slate-600 hover:underline">Zurück zu Schritt 2</button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
