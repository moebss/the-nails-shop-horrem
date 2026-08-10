import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

import heroImg from '../images/hero_nails.jpg';
import portfolioImg from '../images/portfolio_nails.jpg';
import gallery1 from '../images/gallery_1.jpg';
import gallery2 from '../images/gallery_2.jpg';

interface PortfolioGalleryProps {
  onOpenContact: () => void;
}

export default function PortfolioGallery({ onOpenContact }: PortfolioGalleryProps) {
  const [filter, setFilter] = useState('all');

  const items = [
    {
      title: 'French Ombré Elegance',
      category: 'french',
      img: gallery1,
      tag: 'Klassiker',
      desc: 'Sanfter Übergang in zartem Rosé für Hochzeiten & Alltag.'
    },
    {
      title: 'Babyboomer mit Blattgold',
      category: 'babyboomer',
      img: gallery2,
      tag: 'Nail Art',
      desc: 'Feiner Verlauf mit edlen Akzenten in Blattgold.'
    },
    {
      title: 'Luxury Nude Gel-Finish',
      category: 'gel',
      img: portfolioImg,
      tag: 'Neumodellage',
      desc: 'Makellose Modellage in Nude mit hochglänzendem Versiegler.'
    },
    {
      title: 'Rose Gold Glitzer Akzente',
      category: 'nailart',
      img: heroImg,
      tag: 'Glamour',
      desc: 'Handgemalte Details mit Glitzer-Highlights.'
    }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.category === filter);

  return (
    <section id="galerie-grid" className="py-20 bg-[#fcfaf7] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-stone-700 uppercase bg-[#f4efe8] border border-[#e5d9c7] px-3.5 py-1.5 rounded-full">
            Portfolio & Inspiration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mt-4">
            Unsere schönsten Nagel-Designs
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 font-normal">
            Lassen Sie sich von unseren echten Arbeiten inspirieren. Jedes Design wird individuell nach Ihren Wünschen angefertigt.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Alle Designs' },
              { id: 'french', label: 'French & Ombré' },
              { id: 'babyboomer', label: 'Babyboomer' },
              { id: 'gel', label: 'Gel Neumodellage' },
              { id: 'nailart', label: 'Nail Art & Glitzer' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-stone-900 text-stone-50 shadow-xs'
                    : 'bg-[#f7f3ed] text-stone-700 hover:bg-stone-200/80 border border-stone-300/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="bg-[#f7f3ed] border border-[#e8ded1] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-stone-900/90 text-stone-50 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
                  {item.tag}
                </span>
              </div>

              <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-semibold text-lg text-stone-900">{item.title}</h3>
                  <p className="text-xs text-stone-600 font-normal leading-relaxed mt-1">{item.desc}</p>
                </div>

                <button
                  onClick={onOpenContact}
                  className="mt-4 w-full bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs py-2.5 rounded-full transition-all flex items-center justify-center gap-1.5 uppercase tracking-wider cursor-pointer"
                >
                  <span>Design Anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-rose-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
