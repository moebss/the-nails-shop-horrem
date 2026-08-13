import { Instagram, ExternalLink } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-20 bg-[#f7f3ed] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-stone-700 uppercase bg-[#f4efe8] border border-[#e5d9c7] px-3.5 py-1.5 rounded-full inline-block">
            Live Instagram Feed
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
            Folge Uns auf Instagram
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            Aktuelle Nail-Art Inspirationen & Studio-Einblicke live aus unserem Salon in Kerpen-Horrem.
          </p>
        </div>

        {/* Clean Centered Live Embedded Instagram Frame */}
        <div className="max-w-2xl mx-auto bg-[#fcfaf7] border border-[#e5d9c7] rounded-3xl overflow-hidden shadow-xs p-2 sm:p-4">
          <iframe
            src="https://www.instagram.com/thenailsshop.horrem/embed"
            title="Official Instagram Feed of The Nails Shop Horrem"
            className="w-full h-[540px] sm:h-[580px] rounded-2xl border-0"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
          />

          {/* Single Clean Footer Action */}
          <div className="pt-4 pb-2 px-2 text-center">
            <a
              href="https://www.instagram.com/thenailsshop.horrem/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs px-8 py-3.5 rounded-full transition-all uppercase tracking-wider shadow-sm hover:shadow-md"
            >
              <Instagram className="w-4 h-4 text-amber-300" />
              <span>@thenailsshop.horrem auf Instagram Öffnen</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
