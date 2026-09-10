import { Star, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';

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
      text: 'Pediküre mit Gel-Zehennägeln war einfach Traumurlaub für die Füße. Sehr schönes Boutique-Ambiente und absolute Hygiene auf höchstem Niveau.',
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
    <section id="bewertungen" className="py-12 sm:py-16 bg-[#faf7f2] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#ffffff] border border-[#ede4d6] px-4 py-1.5 rounded-full shadow-xs">
            <span className="text-[#b36b67] font-bold text-sm">G</span>
            <span className="text-xs font-semibold text-stone-700 uppercase tracking-widest">Google Kundenstimmen</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Begeisterte Kundinnen in Horrem
          </h2>

          <div className="flex items-center justify-center gap-2 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="font-serif font-bold text-stone-900 text-lg ml-1">4.9 von 5.0</span>
            <span className="text-xs text-stone-500">(über 100+ verifizierte Bewertungen)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] border border-[#ede4d6] rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-[#b36b67]/40 transition-all shadow-xs hover:shadow-md"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f4dedd] text-[#b36b67] font-serif font-bold flex items-center justify-center text-sm">
                      {r.name[0]}
                    </div>
                    <div>
                      <span className="font-serif font-bold text-stone-900 text-sm block">{r.name}</span>
                      <span className="text-[11px] text-stone-400 block">{r.time}</span>
                    </div>
                  </div>
                  {r.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Verifiziert</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  "{r.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Link CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="https://maps.google.com/?q=The+Nails+Shop+Bahnhofstraße+2+50169+Kerpen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#ffffff] hover:bg-[#faf7f2] text-stone-900 border border-[#ede4d6] hover:border-[#b36b67]/40 font-bold text-xs px-8 py-4 rounded-full transition-all uppercase tracking-wider shadow-xs hover:shadow-md cursor-pointer"
          >
            <span>Alle 100+ Bewertungen auf Google lesen</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#b36b67]" />
          </a>
        </div>

      </div>
    </section>
  );
}
