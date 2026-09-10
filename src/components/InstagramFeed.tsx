import { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles, X } from 'lucide-react';
import heroImg from '../images/hero_nails.jpg';
import portfolioImg from '../images/portfolio_nails.jpg';
import nailBabyboomer from '../images/nail_babyboomer.jpg';
import nailNeumodellage from '../images/nail_neumodellage.jpg';
import gallery1 from '../images/gallery_1.jpg';
import gallery2 from '../images/gallery_2.jpg';
import igProfileImg from '../images/ig_profile.jpg';

interface InstaPost {
  id: number;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  tag: string;
  time: string;
}

export default function InstagramFeed() {
  const [selectedPost, setSelectedPost] = useState<InstaPost | null>(null);

  const posts: InstaPost[] = [
    {
      id: 1,
      image: nailBabyboomer,
      caption: 'Zarter Babyboomer-Verlauf mit samtigem Glanz-Versiegler ✨ Der zeitlose Liebling unserer Horremer Kundinnen!',
      likes: 184,
      comments: 14,
      tag: '#Babyboomer',
      time: 'vor 1 Tag'
    },
    {
      id: 2,
      image: nailNeumodellage,
      caption: 'Neumodellage in eleganter Mandelform mit natürlichem Camouflage-Gel. Hält bis zu 4 Wochen splitterfrei 💅',
      likes: 142,
      comments: 9,
      tag: '#GelModellage',
      time: 'vor 3 Tagen'
    },
    {
      id: 3,
      image: gallery1,
      caption: 'Classic French Nails mit modernem Twist und zartem Rosé-Ton. Perfekt für Büro & Alltag 💕',
      likes: 198,
      comments: 18,
      tag: '#FrenchNails',
      time: 'vor 4 Tagen'
    },
    {
      id: 4,
      image: gallery2,
      caption: 'Rosegold Shimmer & handgemalte Akzente für das Wochenende! Jedes Design wird individuell gestaltet 🌸',
      likes: 215,
      comments: 23,
      tag: '#NailArt',
      time: 'vor 5 Tagen'
    },
    {
      id: 5,
      image: portfolioImg,
      caption: 'Spa-Maniküre & schonende Naturnagelpflege. Intensive Feuchtigkeit für gesunde Hände 🌿',
      likes: 129,
      comments: 8,
      tag: '#NailCare',
      time: 'vor 1 Woche'
    },
    {
      id: 6,
      image: heroImg,
      caption: 'Statement Nails in Nude & Gold. Termine könnt ihr bequem per WhatsApp oder online anfragen! ✨',
      likes: 176,
      comments: 12,
      tag: '#KerpenHorrem',
      time: 'vor 1 Woche'
    }
  ];

  return (
    <section id="instagram" className="py-12 sm:py-16 bg-[#ffffff] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Profile Header */}
        <div className="bg-[#faf7f2] border border-[#ede4d6] rounded-3xl p-6 sm:p-8 mb-8 sm:mb-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4 sm:gap-5 text-center sm:text-left">
            {/* Story Gradient Ring around Avatar */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.75 shrink-0 shadow-md">
              <img
                src={igProfileImg}
                alt="The Nails Shop Horrem Instagram"
                className="w-full h-full object-cover rounded-full border-2 border-white"
              />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900">
                  @thenailsshop.horrem
                </h3>
                <span className="inline-flex items-center gap-1 bg-[#f4dedd] text-[#b36b67] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#ede4d6]">
                  <Sparkles className="w-3 h-3" />
                  <span>Verifiziert</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 font-normal">
                The Nails Shop • Boutique Studio Kerpen-Horrem • Bahnhofstraße 2
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-stone-500 pt-1 font-medium">
                <span><strong className="text-stone-900">170+</strong> Beiträge</span>
                <span>•</span>
                <span><strong className="text-stone-900">630+</strong> Follower</span>
                <span>•</span>
                <span className="text-[#b36b67]">Täglich neue Stories</span>
              </div>
            </div>
          </div>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>Auf Instagram Folgen</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

        </div>

        {/* Instagram 6-Post Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-[#ede4d6] cursor-pointer shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.98]"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-white">
                <div className="flex justify-between items-center text-[10px] font-bold">
                  <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full">{post.tag}</span>
                  <Instagram className="w-3.5 h-3.5" />
                </div>

                <div className="flex items-center justify-center gap-4 text-xs font-bold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    {post.comments}
                  </span>
                </div>

                <span className="text-[10px] text-stone-300 text-center">{post.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-stone-500">
            Zeigen Sie uns Ihr Wunschdesign einfach auf dem Smartphone oder senden Sie es uns vorab per WhatsApp!
          </p>
        </div>

      </div>

      {/* Post Modal / Lightbox */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white border border-[#ede4d6] rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-stone-700 hover:text-stone-950 border border-stone-200 shadow-md cursor-pointer"
              aria-label="Schließen"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-square bg-stone-100 overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.caption}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span className="font-bold text-[#b36b67]">{selectedPost.tag}</span>
                <span>{selectedPost.time}</span>
              </div>

              <p className="text-stone-800 text-sm leading-relaxed">
                {selectedPost.caption}
              </p>

              <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-stone-600 font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    {selectedPost.likes} Gefällt mir
                  </span>
                </div>

                <a
                  href={`https://wa.me/4915129429936?text=Hallo!%20Ich%20habe%20dieses%20Design%20aus%20Ihrem%20Instagram-Feed%20gesehen%20(${selectedPost.tag})%20und%20m%C3%B6chte%20fragen%2C%20ob%20Sie%20einen%20Termin%20dafür%20frei%20haben.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <span>Termin anfragen</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
