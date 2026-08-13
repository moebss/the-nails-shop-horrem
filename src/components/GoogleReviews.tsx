import { Star, CheckCircle, ExternalLink } from 'lucide-react';

export default function GoogleReviews() {
  const reviews = [
    {
      name: 'Jennifer K.',
      time: 'vor 2 Wochen',
      rating: 5,
      text: 'Ich gehe seit Monaten zu The Nails Shop in Horrem. Meine Gel-Neumodellage hält super lange ohne Abplatzen. Das Team ist extrem lieb, arbeitet präzise und sauber!',
      verified: true
    },
    {
      name: 'Sarah M.',
      time: 'vor 1 Monat',
      rating: 5,
      text: 'Wunderschöner Babyboomer Verlauf! Habe so viele Komplimente im Büro dafür bekommen. Terminvergabe klappt auch spontan immer unkompliziert.',
      verified: true
    },
    {
      name: 'Christina R.',
      time: 'vor 3 Wochen',
      rating: 5,
      text: 'Pediküre mit Gel-Zehennägeln war einfach Traumurlaub für die Füße. Sehr schönes Boutique-Ambiente und absolut Hygiene auf höchstem Niveau.',
      verified: true
    },
    {
      name: 'Vanessa T.',
      time: 'vor 2 Monaten',
      rating: 5,
      text: 'Lash Lifting und Nail Art aus einer Hand. Die Mädels haben mein Wunschdesign exakt wie auf der Fotovorlage umgesetzt. 5 von 5 Sternen!',
      verified: true
    }
  ];

  return (
    <section id="bewertungen" className="py-20 bg-[#fcfaf7] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#f4efe8] border border-[#e5d9c7] px-4 py-1.5 rounded-full">
            <span className="text-[#d97736] font-bold text-sm">G</span>
            <span className="text-xs font-semibold text-stone-700 uppercase tracking-widest">Google Rezensionen</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
            Das Sagen Unsere Kundinnen
          </h2>

          <div className="flex items-center justify-center gap-2 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="font-serif font-bold text-stone-900 text-lg ml-1">4.8 von 5.0</span>
            <span className="text-xs text-stone-500">(über 100+ verifizierte Bewertungen)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-[#f7f3ed] border border-[#e8ded1] rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-amber-400/60 transition-colors shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-200 text-amber-900 font-bold flex items-center justify-center text-sm font-serif">
                      {r.name[0]}
                    </div>
                    <div>
                      <span className="font-serif font-bold text-stone-900 text-sm block">{r.name}</span>
                      <span className="text-[10px] text-stone-500 block">{r.time}</span>
                    </div>
                  </div>
                  {r.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-800 font-semibold bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3 text-emerald-700" />
                      <span>Verifiziert</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-stone-700 leading-relaxed italic font-normal">
                  "{r.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Link CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?q=The+Nails+Shop+Horrem+Mitteleichen+1+Kerpen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs px-6 py-3 rounded-full transition-all uppercase tracking-wider shadow-xs"
          >
            <span>Alle 100+ Bewertungen auf Google lesen</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
