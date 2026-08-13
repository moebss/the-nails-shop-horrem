import { Instagram, ExternalLink, Sparkles, Phone, Clock, MapPin } from 'lucide-react';
import igProfileImg from '../images/ig_profile.jpg';

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-20 bg-[#f7f3ed] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-stone-700 uppercase bg-[#f4efe8] border border-[#e5d9c7] px-3.5 py-1.5 rounded-full inline-block">
            Live Instagram Feed
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
            Folge Uns auf Instagram
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            Aktuelle Nail-Art Inspirationen, Trends & Studio-Einblicke live aus unserem Salon in Kerpen-Horrem.
          </p>
        </div>

        {/* Profile Card & Embedded Live Feed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Profile Card */}
          <div className="lg:col-span-5 bg-[#fcfaf7] border border-[#e5d9c7] p-8 rounded-3xl shadow-xs space-y-6">
            
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 via-[#d97736] to-pink-500 p-1 shadow-md shrink-0">
                <img
                  src={igProfileImg}
                  alt="The Nails Shop Horrem Instagram Profilbild"
                  className="w-full h-full object-cover rounded-full border-2 border-white"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-xl text-stone-900">@thenailsshop.horrem</h3>
                </div>
                <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-200 mt-1">
                  <Sparkles className="w-3 h-3 text-amber-700" />
                  <span>Official Instagram Page</span>
                </span>
                
                <div className="flex items-center gap-4 text-xs text-stone-600 font-medium mt-3">
                  <span><strong>636</strong> Follower</span>
                  <span>•</span>
                  <span><strong>171</strong> Beiträge</span>
                </div>
              </div>
            </div>

            {/* Bio Info Box */}
            <div className="p-5 bg-[#f4efe8] rounded-2xl border border-[#e8ded1] space-y-3 text-xs text-stone-700">
              <p className="font-serif font-semibold text-stone-900 text-sm">The Nails Shop Horrem</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-600">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Mo.-Fr.: 9:00 – 19:00 Uhr | Sa.: 9:00 – 17:00 Uhr</span>
                </div>
                <div className="flex items-center gap-2 text-stone-600">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                  <a href="tel:015129429936" className="hover:text-stone-900 font-semibold underline">0151 29429936</a>
                </div>
                <div className="flex items-center gap-2 text-stone-600">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Mitteleichen 1, 50169 Kerpen-Horrem (Mit / ohne Termin)</span>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <a
              href="https://www.instagram.com/thenailsshop.horrem/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs py-4 rounded-full transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-sm hover:shadow-md cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-amber-300" />
              <span>Profil auf Instagram Öffnen</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

          </div>

          {/* Right Column: Live Embedded Instagram Frame */}
          <div className="lg:col-span-7 bg-[#fcfaf7] border border-[#e5d9c7] rounded-3xl overflow-hidden shadow-xs p-2 sm:p-4 min-h-[580px] flex flex-col justify-center items-center">
            <iframe
              src="https://www.instagram.com/thenailsshop.horrem/embed"
              title="Official Instagram Feed of The Nails Shop Horrem"
              className="w-full h-[540px] sm:h-[580px] rounded-2xl border-0"
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
