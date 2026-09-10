import { useState } from 'react';
import { Instagram, ExternalLink, Sparkles, Clock, Phone, MapPin, MessageSquare } from 'lucide-react';
import igProfileImg from '../images/ig_profile.jpg';

export default function InstagramFeed() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="instagram" className="py-12 sm:py-16 bg-[#ffffff] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#faf7f2] border border-[#ede4d6] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#b36b67] shadow-xs">
            <Instagram className="w-3.5 h-3.5 text-[#b36b67]" />
            <span>Offizieller Live Instagram Feed</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Live-Einblicke auf Instagram
          </h2>
          
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Aktuelle Nagel-Kreationen, Vorher/Nachher-Transformationen und Trends direkt aus unserem Studio in Kerpen-Horrem.
          </p>
        </div>

        {/* Profile Card & Embedded Live Feed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Profile Card */}
          <div className="lg:col-span-5 bg-[#faf7f2] border border-[#ede4d6] p-6 sm:p-8 rounded-3xl shadow-xs space-y-6">
            
            <div className="flex items-center gap-4">
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.75 shadow-md shrink-0">
                <img
                  src={igProfileImg}
                  alt="The Nails Shop Horrem Instagram Profilbild"
                  className="w-full h-full object-cover rounded-full border-2 border-white"
                />
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 leading-tight">
                  @thenailsshop.horrem
                </h3>
                <span className="inline-flex items-center gap-1 bg-[#f4dedd] text-[#b36b67] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#ede4d6] mt-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Offizielles Profil</span>
                </span>
                
                <p className="text-xs text-stone-500 font-medium mt-2">
                  Nagelstudio & Beauty Spa • Kerpen-Horrem
                </p>
              </div>
            </div>

            {/* Studio Info Details */}
            <div className="p-5 bg-[#ffffff] rounded-2xl border border-[#ede4d6] space-y-3 text-xs text-stone-700">
              <p className="font-serif font-semibold text-stone-900 text-sm">The Nails Shop Horrem</p>
              
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-stone-600">
                  <Clock className="w-4 h-4 text-[#b36b67] shrink-0" />
                  <span>Mo – Fr: 09:00 – 19:00 | Sa: 09:00 – 17:00 Uhr</span>
                </div>
                <div className="flex items-center gap-2.5 text-stone-600">
                  <Phone className="w-4 h-4 text-[#b36b67] shrink-0" />
                  <a href="tel:015129429936" className="hover:text-stone-900 font-semibold underline tabular-nums">
                    0151 29429936
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-stone-600">
                  <MapPin className="w-4 h-4 text-[#b36b67] shrink-0" />
                  <span>Bahnhofstraße 2, 50169 Kerpen-Horrem</span>
                </div>
              </div>
            </div>

            {/* Direct Link Action */}
            <div className="space-y-2.5">
              <a
                href="https://www.instagram.com/thenailsshop.horrem/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white font-bold text-xs py-4 rounded-full transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-sm hover:shadow-md cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Auf Instagram Folgen</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href="https://wa.me/4915129429936?text=Hallo!%20Ich%20habe%20ein%20Design%20auf%20Instagram%20gesehen%20und%20m%C3%B6chte%20gerne%20einen%20Termin%20anfragen."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#ffffff] hover:bg-[#faf7f2] text-stone-800 border border-[#ede4d6] hover:border-[#b36b67]/40 font-bold text-xs py-3.5 rounded-full transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#b36b67]" />
                <span>Design per WhatsApp anfragen</span>
              </a>
            </div>

          </div>

          {/* Right Column: Live Embedded Instagram Frame Widget */}
          <div className="lg:col-span-7 bg-[#faf7f2] border border-[#ede4d6] rounded-3xl overflow-hidden shadow-xs p-2 sm:p-4 min-h-[560px] sm:min-h-[620px] flex flex-col justify-center items-center relative">
            <iframe
              src="https://www.instagram.com/thenailsshop.horrem/embed/"
              title="Official Instagram Feed of The Nails Shop Horrem"
              className="w-full h-[540px] sm:h-[600px] rounded-2xl border-0 bg-white shadow-sm"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              onLoad={() => setIframeLoaded(true)}
            />

            {/* Fallback button in case iframe is blocked by cookie banners / privacy add-ons */}
            <div className="mt-2 text-center">
              <a
                href="https://www.instagram.com/thenailsshop.horrem/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-stone-500 hover:text-stone-900 transition-colors"
              >
                <span>Wird der Feed nicht geladen? Direkt auf Instagram ansehen</span>
                <ExternalLink className="w-3 h-3 text-[#b36b67]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
