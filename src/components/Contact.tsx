import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Navigation, Sparkles } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Neumodellage (Gel/Acryl)',
    note: ''
  });

  const generateWhatsAppUrl = () => {
    let msg = `Hallo The Nails Shop Horrem! Ich möchte gerne einen Termin anfragen:\n`;
    if (formData.name) msg += `• Name: ${formData.name}\n`;
    if (formData.phone) msg += `• Telefon: ${formData.phone}\n`;
    msg += `• Behandlung: ${formData.service}\n`;
    if (formData.note) msg += `• Wunschtermin / Notiz: ${formData.note}\n`;
    return `https://wa.me/4915129429936?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-[#faf7f2] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#b36b67] uppercase bg-[#ffffff] border border-[#ede4d6] px-4 py-1.5 rounded-full shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#b36b67]" />
                <span>Kontakt & Anfahrt</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
                Ihr Termin bei <br />
                <span className="text-[#b36b67]">The Nails Shop</span>
              </h2>

              <p className="text-stone-600 text-base font-normal leading-relaxed">
                Wir freuen uns darauf, Ihre Hände und Nägel zu verwöhnen. Wählen Sie Ihren bevorzugten Kontaktweg – ob telefonisch, per WhatsApp oder über unser Anfrageformular.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-3.5">
              {/* Address & Route */}
              <div className="bg-[#ffffff] border border-[#ede4d6] p-5 rounded-2xl shadow-xs space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#faf7f2] border border-[#ede4d6] flex items-center justify-center text-[#b36b67] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-stone-900 block text-base">Studio-Adresse</span>
                    <span className="text-stone-600 text-sm block">Bahnhofstraße 2, 50169 Kerpen-Horrem</span>
                    <span className="text-xs text-stone-500 block mt-1">
                      Nur 2 Gehminuten vom Bahnhof Horrem (S12 / S19 / RE1 / RE9) • Kostenfreie P+R Parkplätze in direkter Nähe
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Bahnhofstraße+2,+50169+Kerpen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#b36b67] hover:text-[#9c5955] uppercase tracking-wider transition-colors pt-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Route in Google Maps planen</span>
                </a>
              </div>

              {/* Phone & WhatsApp */}
              <div className="bg-[#ffffff] border border-[#ede4d6] p-5 rounded-2xl shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#faf7f2] border border-[#ede4d6] flex items-center justify-center text-[#b36b67] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-stone-900 block text-base">Telefon & WhatsApp</span>
                    <a href="tel:015129429936" className="text-stone-700 hover:text-[#b36b67] font-semibold text-sm tabular-nums">
                      0151 29429936
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/4915129429936?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20The%20Nails%20Shop%20Horrem%20vereinbaren."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-full flex items-center gap-1.5 uppercase tracking-wider transition-colors shadow-xs shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Opening Hours */}
              <div className="bg-[#ffffff] border border-[#ede4d6] p-5 rounded-2xl shadow-xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#faf7f2] border border-[#ede4d6] flex items-center justify-center text-[#b36b67] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-bold text-stone-900 block text-base">Öffnungszeiten</span>
                  <div className="text-stone-600 text-xs sm:text-sm space-y-0.5 mt-0.5">
                    <p>Montag – Freitag: <strong className="text-stone-800">09:00 – 19:00 Uhr</strong></p>
                    <p>Samstag: <strong className="text-stone-800">09:00 – 17:00 Uhr</strong></p>
                    <p className="text-stone-400 text-xs">Sonntag & Feiertage: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#ede4d6] rounded-3xl p-7 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-14 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#f4dedd] text-[#b36b67] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-normal text-3xl text-stone-900">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                  Wir haben Ihre Terminanfrage erhalten und melden uns schnellstmöglich telefonisch oder per WhatsApp bei Ihnen zur Bestätigung.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs px-6 py-3.5 rounded-full uppercase tracking-wider shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Zusätzlich per WhatsApp senden</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#faf7f2] hover:bg-[#f5f0e6] text-stone-800 border border-[#ede4d6] font-bold text-xs px-6 py-3.5 rounded-full uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Neue Anfrage stellen
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif font-normal text-2xl sm:text-3xl text-stone-900">
                    Wunschtermin Unverbindlich Anfragen
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm mt-1">
                    Füllen Sie kurz die Felder aus oder senden Sie die Anfrage direkt per WhatsApp.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="z. B. Julia Becker"
                    className="w-full bg-[#faf7f2] border border-[#ede4d6] focus:border-[#b36b67] rounded-xl px-4 py-3.5 text-stone-900 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Telefon / Mobil *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0171 1234567"
                      className="w-full bg-[#faf7f2] border border-[#ede4d6] focus:border-[#b36b67] rounded-xl px-4 py-3.5 text-stone-900 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Gewünschte Behandlung
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#faf7f2] border border-[#ede4d6] focus:border-[#b36b67] rounded-xl px-4 py-3.5 text-stone-900 text-sm focus:outline-none transition-colors"
                    >
                      <option value="Neumodellage (Gel/Acryl)">Neumodellage (Gel / Acryl)</option>
                      <option value="Babyboomer & French Ombré">Babyboomer & French Ombré</option>
                      <option value="Auffüllen & Farb-Refresh">Auffüllen (Refill)</option>
                      <option value="Spa Maniküre & Handpflege">Spa Maniküre & Handpflege</option>
                      <option value="Nail Art & Glitzer">Nail Art & Strass</option>
                      <option value="Wimpernlifting & Brow Styling">Wimpernlifting & Brow Styling</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Wunschtermin, Uhrzeit oder Notiz
                  </label>
                  <textarea
                    rows={3}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="z. B. Gerne Donnerstag ab 16:30 Uhr oder Samstag Vormittag..."
                    className="w-full bg-[#faf7f2] border border-[#ede4d6] focus:border-[#b36b67] rounded-xl px-4 py-3 text-stone-900 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  {/* WhatsApp Direct Option */}
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Per WhatsApp Anfragen (Sofort)</span>
                  </a>

                  {/* Web Form Submit */}
                  <button
                    type="submit"
                    className="flex-1 bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Formular Senden</span>
                  </button>
                </div>

                <p className="text-[11px] text-stone-400 text-center pt-2">
                  100% unverbindlich • Schnelle Rückmeldung garantiert • Ihre Daten werden nicht weitergegeben.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
