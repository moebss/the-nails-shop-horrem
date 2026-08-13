import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles, Users, Image as ImageIcon } from 'lucide-react';
import igProfileImg from '../images/ig_profile.jpg';
import imgNeumodellage from '../images/nail_neumodellage.jpg';
import imgBabyboomer from '../images/nail_babyboomer.jpg';
import imgNailArt from '../images/portfolio_nails.jpg';
import imgHero from '../images/hero_nails.jpg';
import imgStudio from '../images/studio_interior.jpg';
import imgGallery1 from '../images/gallery_1.jpg';

export default function InstagramFeed() {
  const posts = [
    {
      image: imgNeumodellage,
      likes: '142',
      comments: '18',
      caption: 'Nude Almond Gel Extensions mit langanhaltendem Glanz ✨ #horrem #nails'
    },
    {
      image: imgBabyboomer,
      likes: '198',
      comments: '24',
      caption: 'Klassischer Babyboomer Verlauf – Perfekt für jeden Anlass 💅'
    },
    {
      image: imgNailArt,
      likes: '230',
      comments: '31',
      caption: 'Handgemalte Marble Details & Blattgold Akzente 💫'
    },
    {
      image: imgHero,
      likes: '165',
      comments: '19',
      caption: 'Frisches Refill in der Trendfarbe der Saison 🌸'
    },
    {
      image: imgStudio,
      likes: '210',
      comments: '27',
      caption: 'Willkommen in unserem Wohlfühl-Salon in Kerpen-Horrem! ☕'
    },
    {
      image: imgGallery1,
      likes: '175',
      comments: '22',
      caption: 'Verwöhnende Spa-Pediküre & makellose Gel-Zehennägel 🦶✨'
    }
  ];

  return (
    <section id="instagram" className="py-20 bg-[#f7f3ed] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Authentic Instagram Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-[#fcfaf7] border border-[#e5d9c7] p-8 rounded-3xl shadow-xs">
          
          <div className="flex items-center gap-5 text-center md:text-left">
            {/* Real Instagram Profile Avatar */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 via-[#d97736] to-pink-500 p-1 shadow-md shrink-0">
              <img
                src={igProfileImg}
                alt="The Nails Shop Horrem Instagram Profilbild"
                className="w-full h-full object-cover rounded-full border-2 border-white"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h2 className="font-serif font-bold text-2xl text-stone-900">@thenailsshop.horrem</h2>
                <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-200">
                  <Sparkles className="w-3 h-3 text-amber-700" />
                  <span>Offizielles Profil</span>
                </span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-stone-600 font-medium">
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-stone-500" />
                  <strong>636</strong> Follower
                </span>
                <span className="flex items-center gap-1">
                  <ImageIcon className="w-3.5 h-3.5 text-stone-500" />
                  <strong>171</strong> Beiträge
                </span>
              </div>
            </div>
          </div>

          <a
            href="https://www.instagram.com/thenailsshop.horrem/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs px-6 py-3.5 rounded-full transition-all flex items-center gap-2 uppercase tracking-wider whitespace-nowrap shadow-sm hover:shadow-md shrink-0"
          >
            <Instagram className="w-4 h-4 text-amber-300" />
            <span>Auf Instagram Ansehen</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/thenailsshop.horrem/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-200 shadow-xs block"
            >
              <img
                src={post.image}
                alt="The Nails Shop Horrem Instagram Post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-end">
                  <Instagram className="w-4 h-4 text-amber-300" />
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] font-normal leading-snug line-clamp-2 text-stone-200">
                    {post.caption}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs font-semibold pt-1 border-t border-stone-700/60">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-stone-300" />
                      <span>{post.comments}</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
