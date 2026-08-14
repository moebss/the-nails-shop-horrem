import { Instagram, ExternalLink, Sparkles, Heart } from 'lucide-react';
import imgPortfolio from '../images/portfolio_nails.jpg';
import imgBabyboomer from '../images/nail_babyboomer.jpg';
import imgNeumodellage from '../images/nail_neumodellage.jpg';
import imgGallery2 from '../images/gallery_2.jpg';

export default function InstagramFeed() {
  const posts = [
    {
      img: imgBabyboomer,
      title: 'Babyboomer Ombré Look',
      likes: '142',
      tag: '#BabyboomerNails'
    },
    {
      img: imgPortfolio,
      title: 'Klassisches French & Nude',
      likes: '98',
      tag: '#NudeElegance'
    },
    {
      img: imgGallery2,
      title: 'Custom Nail Art & Chrome',
      likes: '187',
      tag: '#ChromeNails'
    },
    {
      img: imgNeumodellage,
      title: 'Gel-Neumodellage Natur',
      likes: '115',
      tag: '#NailTransformation'
    }
  ];

  return (
    <section id="instagram" className="py-24 bg-[#ffffff] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#faf7f2] border border-[#ede4d6] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#b36b67] shadow-xs">
            <Instagram className="w-3.5 h-3.5 text-[#b36b67]" />
            <span>@thenailsshop.horrem auf Instagram</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Tägliche Nail-Inspirationen
          </h2>
          
          <p className="text-stone-600 text-base sm:text-lg font-normal">
            Entdecke unsere neuesten Arbeiten, Trends und Nagel-Designs frisch aus dem Studio in Kerpen-Horrem.
          </p>
        </div>

        {/* Curated Instagram Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/thenailsshop.horrem/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-3xl overflow-hidden bg-stone-100 border border-[#ede4d6] shadow-xs hover:shadow-xl transition-all duration-300 block"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.97]"
              />
              
              {/* Dark Rose Hover Overlay with Instagram Details */}
              <div className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white space-y-2">
                <Instagram className="w-7 h-7 text-white mb-1" />
                <span className="font-serif text-base font-normal text-white leading-snug">{post.title}</span>
                <span className="text-xs text-rose-200 font-semibold">{post.tag}</span>
                <div className="flex items-center gap-1 text-xs text-white/90 pt-1">
                  <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                  <span>{post.likes} Likes</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Global Instagram Profile Action Button */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/thenailsshop.horrem/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#faf7f2] hover:bg-[#f5f0e6] text-stone-800 font-bold text-xs px-8 py-4 rounded-full border border-[#ede4d6] hover:border-[#b36b67]/40 shadow-xs transition-all uppercase tracking-wider group"
          >
            <Instagram className="w-4 h-4 text-[#b36b67] group-hover:scale-110 transition-transform" />
            <span>Folge uns auf Instagram (@thenailsshop.horrem)</span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
