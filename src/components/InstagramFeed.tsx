import { useState } from 'react';
import { Instagram, ExternalLink, Sparkles, Clock, Phone, MapPin, MessageSquare, Heart, ShieldCheck, Lock } from 'lucide-react';
import igProfileImg from '../images/ig_profile.jpg';
import gallery1 from '../images/gallery_1.jpg';
import gallery2 from '../images/gallery_2.jpg';
import portfolioImg from '../images/portfolio_nails.jpg';
import babyboomerImg from '../images/nail_babyboomer.jpg';
import neumodellageImg from '../images/nail_neumodellage.jpg';
import marbleGoldImg from '../images/nail_marble_gold.jpg';

interface InstagramFeedProps {
  onOpenContact?: () => void;
}

export default function InstagramFeed({ onOpenContact }: InstagramFeedProps) {
  const [showLiveEmbed, setShowLiveEmbed] = useState(false);

  // Curated, 100% authentic studio creations (DSGVO Zero-CDN, no external trackers loaded)
  const curatedPosts = [
    {
      img: babyboomerImg,
      title: 'Babyboomer Ombré Signature',
      tag: '#Babyboomer',
      likes: '184',
      comments: '12',
      desc: 'Sanfter Farbverlauf in Rosé-Weiß mit Hochglanzversiegelung.'
    },
    {
      img: marbleGoldImg,
      title: 'Rose Quartz & Blattgold',
      tag: '#TrendDesign',
      likes: '247',
      comments: '19',
      desc: 'Feine Marmor-Optik mit echten Blattgold-Akzenten.'
    },
    {
      img: gallery1,
      title: 'French Ombré Chic',
      tag: '#FrenchNails',
      likes: '162',
      comments: '8',
      desc: 'Der zeitlose Klassiker für Hochzeit, Büro & jeden Tag.'
    },
    {
      img: portfolioImg,
      title: 'Luxury Nude Fullcolor',
      tag: '#CleanGirlAesthetic',
      likes: '195',
      comments: '15',
      desc: 'Elegantes Nude-Finish mit makelloser Nagelhautpflege.'
    },
    {
      img: gallery2,
      title: 'Glitzer & Swarovski Strass',
      tag: '#NailArtGlam',
      likes: '210',
      comments: '16',
      desc: 'Handgesetzte Akzente für das besondere Strahlen.'
    },
    {
      img: neumodellageImg,
      title: 'Präzisions-Neumodellage',
      tag: '#GelModellage',
      likes: '173',
      comments: '9',
      desc: 'Elegante Mandelform mit 4-Wochen Haltbarkeitsgarantie.'
    }
  ];

  return (
    <section id="instagram" className="py-12 sm:py-16 bg-[#ffffff] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#faf7f2] border border-[#ede4d6] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#b36b67] shadow-xs">
            <Instagram className="w-3.5 h-3.5 text-[#b36b67]" />
            <span>Inspiration & Instagram Trends</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Trend-Designs & Inspiration
          </h2>
          
          <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Haben Sie ein Foto auf Instagram, TikTok oder Pinterest entdeckt? Bringen Sie es einfach mit oder senden Sie es uns vorab – wir setzen Ihr Wunschdesign präzise um.
          </p>
        </div>

        {/* Profile Banner Card */}
        <div className="bg-[#faf7f2] border border-[#ede4d6] rounded-3xl p-6 sm:p-8 mb-10 shadow-xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Avatar & Profile Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-1 shadow-md shrink-0">
                <img
                  src={igProfileImg}
                  alt="The Nails Shop Horrem Instagram Profil"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-full border-2 border-white"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900">
                    @thenailsshop.horrem
                  </h3>
                  <span className="inline-flex items-center gap-1 bg-[#f4dedd] text-[#b36b67] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#ede4d6]">
                    <Sparkles className="w-3 h-3" />
                    <span>Verifiziertes Studio</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 font-medium">
                  Boutique Nagelstudio & Beauty Lounge • Bahnhofstraße 2, 50169 Kerpen-Horrem
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-xs text-stone-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#b36b67]" />
                    <span>Mo–Fr 09–19 Uhr | Sa 09–17 Uhr</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% DSGVO-geschützt</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Conversion Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="https://wa.me/4915129429936?text=Hallo!%20Ich%20habe%20ein%20Wunschdesign%20als%20Foto%20und%20m%C3%B6chte%20gerne%20einen%20Termin%20anfragen."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Wunschdesign per WhatsApp senden</span>
              </a>

              <a
                href="https://www.instagram.com/thenailsshop.horrem/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#ffffff] hover:bg-white text-stone-800 border border-[#ede4d6] hover:border-[#b36b67]/40 font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-[#b36b67]" />
                <span>Auf Instagram folgen</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>

          </div>
        </div>

        {/* Curated Local Design Feed Grid (High-Speed & DSGVO Safe) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {curatedPosts.map((post, idx) => (
            <div
              key={idx}
              className="group bg-[#faf7f2] border border-[#ede4d6] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with Instagram-Style Overlay */}
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img
                  src={post.img}
                  alt={`${post.title} - The Nails Shop Horrem`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Tag Badge */}
                <div className="absolute top-3.5 left-3.5 bg-stone-900/80 backdrop-blur-md text-white font-semibold text-[11px] px-3 py-1 rounded-full shadow-xs">
                  {post.tag}
                </div>

                {/* Social Metrics Pill */}
                <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md text-stone-800 font-semibold text-[11px] px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>{post.likes}</span>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <a
                    href={`https://wa.me/4915129429936?text=${encodeURIComponent(`Hallo! Ich habe das Design "${post.title}" auf Ihrer Website gesehen und möchte diesen Style gerne anfragen.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white hover:bg-stone-100 text-stone-900 font-bold text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-lg transition-transform transform translate-y-2 group-hover:translate-y-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#b36b67]" />
                    <span>Diesen Look anfragen</span>
                  </a>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 sm:p-6 space-y-2">
                <h4 className="font-serif font-bold text-lg text-stone-900 leading-snug">
                  {post.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {post.desc}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-stone-500 border-t border-[#ede4d6]">
                  <span>Studio Kerpen-Horrem</span>
                  <a
                    href="https://wa.me/4915129429936?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20ein%20Wunschdesign%20anfragen."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#b36b67] hover:underline"
                  >
                    Foto mitsenden →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Click Opt-In for Live Meta Iframe (100% DSGVO Compliant / LG München Protection) */}
        <div className="mt-12 bg-[#faf7f2] border border-[#ede4d6] rounded-3xl p-6 sm:p-8">
          {!showLiveEmbed ? (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-[#b36b67] text-xs font-bold uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5" />
                  <span>DSGVO 2-Klick Datenschutz-Schutz</span>
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-normal text-stone-900">
                  Möchten Sie den interaktiven Meta Instagram-Kanal laden?
                </h4>
                <p className="text-xs text-stone-500">
                  Aus Datenschutzgründen (LG München I / DSGVO) laden wir externe Inhalte von Meta erst nach Ihrer ausdrücklichen Aktivierung. Erst beim Klick wird eine Verbindung zu den Servern von Instagram aufgebaut.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowLiveEmbed(true)}
                className="bg-[#ffffff] hover:bg-stone-50 text-stone-800 border border-[#ede4d6] hover:border-[#b36b67]/40 font-bold text-xs px-6 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-xs shrink-0 cursor-pointer flex items-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5 text-[#b36b67]" />
                <span>Live-Feed aktivieren (2-Klick)</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#b36b67]" />
                  <span>Offizieller Live Instagram-Kanal</span>
                </span>
                <button
                  type="button"
                  onClick={() => setShowLiveEmbed(false)}
                  className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
                >
                  Live-Feed wieder ausblenden
                </button>
              </div>
              <iframe
                src="https://www.instagram.com/thenailsshop.horrem/embed/"
                title="Official Instagram Feed of The Nails Shop Horrem"
                className="w-full h-[580px] rounded-2xl border-0 bg-white shadow-sm"
                scrolling="no"
                allowTransparency={true}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
