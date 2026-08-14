import { Instagram, ExternalLink, Sparkles, Clock, Phone, MapPin, Users, Image as ImageIcon } from 'lucide-react';
import igProfileImg from '../images/ig_profile.jpg';

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-24 bg-[#ffffff] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#faf7f2] border border-[#ede4d6] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#b36b67] shadow-xs">
            <Instagram className="w-3.5 h-3.5 text-[#b36b67]" />
            <span>Offizieller Live Instagram Feed</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Live-Einblicke auf Instagram
          </h2>
          
          <p className="text-stone-600 text-base sm:text-lg font-normal">
            Aktuelle Nagel-Kreationen, Vorher/Nachher-Ergebnisse und Trends direkt aus unserem Studio in Kerpen-Horrem.
          </p>
        </div>

        {/* Profile Card & Embedded Live Feed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Profile Card */}
          <div className="lg:col-span-5 bg-[#faf7f2] border border-[#ede4d6] p-7 sm:p-8 rounded-3xl shadow-xs space-y-6">
            
            <div className="flex items-center gap-4">
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-500 via-[#d97736] to-pink-500 p-1 shadow-md shrink-0">
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
                  <span>Verifiziertes Profil</span>
                </span>
                
                <div className="flex items-center gap-3 text-xs text-stone-600 font-medium mt-2.5">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-stone-400" />
                    <strong>630+</strong> Follower
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <ImageIcon className="w-3.5 h-3.5 text-stone-400" />
                    <strong>170+</strong> Beiträge
                  </span>
                </div>
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
                  <a href="tel:01721234567" className="hover:text-stone-900 font-semibold underline">
                    0172 1234567
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-stone-600">
                  <MapPin className="w-4 h-4 text-[#b36b67] shrink-0" />
                  <span>Hauptstraße 18, 50169 Kerpen-Horrem</span>
                </div>
              </div>
            </div>

            {/* Direct Link Action */}
            <a
              href="https://www.instagram.com/thenailsshop.horrem/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs py-4 rounded-full transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-sm hover:shadow-md cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>Auf Instagram Folgen</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

          </div>

          {/* Right Column: Live Embedded Instagram Frame */}
          <div className="lg:col-span-7 bg-[#faf7f2] border border-[#ede4d6] rounded-3xl overflow-hidden shadow-xs p-2 sm:p-4 min-h-[580px] flex flex-col justify-center items-center">
            <iframe
              src="https://www.instagram.com/thenailsshop.horrem/embed"
              title="Official Instagram Feed of The Nails Shop Horrem"
              className="w-full h-[540px] sm:h-[580px] rounded-2xl border-0 bg-white"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
