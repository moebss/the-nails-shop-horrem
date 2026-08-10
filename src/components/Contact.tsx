import { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 bg-[#fafbfc] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full">
              Kontakt & Anfahrt
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Vereinbaren Sie jetzt Ihren <span className="italic text-amber-800">Verwöhn-Termin</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Wir freuen uns darauf, Ihre Nägel zum Strahlen zu bringen! Rufen Sie uns an, schreiben Sie per WhatsApp oder nutzen Sie unser Online-Formular.
            </p>

            <div className="space-y-4 pt-4 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-3 bg-[#f7f4ee] p-4 rounded-2xl border border-amber-900/10">
                <MapPin className="w-5 h-5 text-amber-800 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Adresse:</span>
                  <span>Hauptstraße, 50169 Kerpen-Horrem</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#f7f4ee] p-4 rounded-2xl border border-amber-900/10">
                <Phone className="w-5 h-5 text-amber-800 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Telefon / WhatsApp:</span>
                  <span>0172 1234567</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#f7f4ee] p-4 rounded-2xl border border-amber-900/10">
                <Clock className="w-5 h-5 text-amber-800 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Öffnungszeiten:</span>
                  <span>Mo – Sa: 09:00 – 19:00 Uhr (Sonntag geschlossen)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Warm Container Form (Law #9 & Law #14) */}
          <div className="bg-[#f7f4ee] border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif font-bold text-2xl text-slate-900">Vielen Dank!</h3>
                <p className="text-xs text-slate-600">Ihre Termin-Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 2 Stunden bei Ihnen!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="font-serif font-bold text-2xl text-slate-900 mb-2">Termin-Anfrage Senden</h3>
                
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Ihr Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="z. B. Anna Müller"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-700"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Telefon / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0171 1234567"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-700"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Wunsch-Behandlung</label>
                    <select className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-700">
                      <option>Neumodellage (Gel/Acryl)</option>
                      <option>Auffüllen (Refill)</option>
                      <option>Babyboomer / French</option>
                      <option>Pediküre & Zehengel</option>
                      <option>Lash & Brow Lifting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Wunschtermin & Notiz</label>
                  <textarea
                    rows={3}
                    placeholder="Wann passt es Ihnen am besten? (z. B. Donnerstag Nachmittag)"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-amber-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Unverbindlich Anfragen</span>
                </button>

                <p className="text-[10px] text-slate-500 text-center pt-2">
                  100% Kostenlos & Unverbindlich • Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
