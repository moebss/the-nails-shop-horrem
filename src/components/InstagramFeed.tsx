import { useState } from 'react';
import { Sparkles, Heart, MessageSquare, ZoomIn, X, ArrowRight } from 'lucide-react';
import heroImg from '../images/hero_nails.jpg';
import portfolioImg from '../images/portfolio_nails.jpg';
import nailBabyboomer from '../images/nail_babyboomer.jpg';
import nailNeumodellage from '../images/nail_neumodellage.jpg';
import gallery1 from '../images/gallery_1.jpg';
import gallery2 from '../images/gallery_2.jpg';

interface LookbookItem {
  id: number;
  title: string;
  category: 'all' | 'babyboomer' | 'gel' | 'nailart' | 'spa';
  categoryLabel: string;
  img: string;
  desc: string;
  likes: number;
  tag: string;
}

export default function InstagramFeed() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null);

  const items: LookbookItem[] = [
    {
      id: 1,
      title: 'Babyboomer Signature Ombré',
      category: 'babyboomer',
      categoryLabel: 'Babyboomer',
      img: nailBabyboomer,
      desc: 'Sanfter, fließender Übergang von Rosé in milchiges Weiß. Unser beliebtestes Design für Alltag und feierliche Anlässe.',
      likes: 184,
      tag: 'Bestseller'
    },
    {
      id: 2,
      title: 'Luxury Nude Gel-Neumodellage',
      category: 'gel',
      categoryLabel: 'Gel & Modellage',
      img: nailNeumodellage,
      desc: 'Schlanke Mandelform mit natürlichem Camouflage-Gel und hochglänzendem Versiegelungslack.',
      likes: 142,
      tag: 'Neumodellage'
    },
    {
      id: 3,
      title: 'French Glanz & Zartes Rosé',
      category: 'babyboomer',
      categoryLabel: 'French Nails',
      img: gallery1,
      desc: 'Klassische Eleganz neu interpretiert: Präzise gezogene Smile-Line mit dezentem Schimmer.',
      likes: 198,
      tag: 'Klassiker'
    },
    {
      id: 4,
      title: 'Rosegold Shimmer & Nail Art',
      category: 'nailart',
      categoryLabel: 'Nail Art',
      img: gallery2,
      desc: 'Filigrane Handmalerei veredelt mit funkelnden Akzenten für den besonderen Glamour-Look.',
      likes: 215,
      tag: 'Glamour'
    },
    {
      id: 5,
      title: 'Gepflegte Naturnägel & Spa-Finish',
      category: 'spa',
      categoryLabel: 'Spa & Pflege',
      img: portfolioImg,
      desc: 'Intensive Nagelhautpflege, Formfeilen und seidiges Finish für rundum gesunde, kräftige Hände.',
      likes: 129,
      tag: 'Natürlich schön'
    },
    {
      id: 6,
      title: 'Statement Nails & Perfekte Kanten',
      category: 'gel',
      categoryLabel: 'Gel & Modellage',
      img: heroImg,
      desc: 'Exakte Formgebung und splitterfester Halt für anspruchsvolle Beanspruchung bis zu 4 Wochen.',
      likes: 176,
      tag: 'Studio Liebling'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Alle Designs' },
    { id: 'babyboomer', label: 'Babyboomer & French' },
    { id: 'gel', label: 'Gel & Modellage' },
    { id: 'nailart', label: 'Nail Art & Glitzer' },
    { id: 'spa', label: 'Spa & Pflege' }
  ];

  return (
    <section id="instagram" className="py-24 bg-[#ffffff] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#faf7f2] border border-[#ede4d6] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#b36b67] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#b36b67]" />
            <span>Lookbook & Nagel-Inspiration</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Aktuelle Designs & Kreationen
          </h2>
          
          <p className="text-stone-600 text-base sm:text-lg font-normal">
            Lassen Sie sich von unseren Studio-Arbeiten inspirieren. Jedes Design passen wir individuell an Ihren Typ und Ihre Wunschform an.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#b36b67] text-white shadow-xs'
                    : 'bg-[#faf7f2] text-stone-700 hover:bg-[#f5f0e6] border border-[#ede4d6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-[#faf7f2] border border-[#ede4d6] hover:border-[#b36b67]/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.97]"
                />
                
                {/* Tag Badge */}
                <div className="absolute top-3 left-3 bg-[#ffffff]/90 backdrop-blur-md border border-[#ede4d6] text-stone-800 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  {item.tag}
                </div>

                {/* Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <div className="bg-white/90 text-stone-900 p-3 rounded-full shadow-lg">
                    <ZoomIn className="w-5 h-5 text-[#b36b67]" />
                  </div>
                </div>

                {/* Likes indicator */}
                <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                  <span className="tabular-nums">{item.likes}</span>
                </div>
              </div>

              {/* Card Caption */}
              <div className="p-5 sm:p-6 space-y-2">
                <span className="text-[11px] font-bold text-[#b36b67] uppercase tracking-wider block">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-normal text-stone-900 group-hover:text-[#b36b67] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-2 flex items-center text-xs font-bold text-[#b36b67] group-hover:translate-x-1 transition-transform gap-1">
                  <span>Details & Termin anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bring Your Own Design Banner */}
        <div className="mt-14 bg-[#faf7f2] border border-[#ede4d6] p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b36b67]">
              <Sparkles className="w-4 h-4" />
              <span>Individuelle Nagel-Wünsche</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
              Haben Sie ein eigenes Wunschdesign auf Pinterest oder Instagram?
            </h3>
            <p className="text-stone-600 text-sm max-w-2xl">
              Senden Sie uns Ihr Foto einfach vorab per WhatsApp. Wir prüfen Form und Machbarkeit und beraten Sie unverbindlich!
            </p>
          </div>

          <a
            href="https://wa.me/4915129429936?text=Hallo!%20Ich%20habe%20ein%20Wunschdesign%20als%20Foto%20und%20m%C3%B6chte%20fragen%2C%20ob%20Sie%20das%20umsetzen%20k%C3%B6nnen."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs px-7 py-4 rounded-full uppercase tracking-wider shadow-md transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Design per WhatsApp Senden</span>
          </a>
        </div>

      </div>

      {/* Lightbox / Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white border border-[#ede4d6] rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-stone-700 hover:text-stone-950 border border-stone-200 shadow-md cursor-pointer"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
              <img
                src={selectedItem.img}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#b36b67] uppercase tracking-wider">
                {selectedItem.tag}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs font-bold text-[#b36b67] uppercase tracking-wider">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mt-1">
                  {selectedItem.title}
                </h3>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed">
                {selectedItem.desc}
              </p>

              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/4915129429936?text=Hallo!%20Ich%20interessiere%20mich%20f%C3%BCr%20das%20Design%20%22${encodeURIComponent(selectedItem.title)}%22%20aus%20Ihrem%20Lookbook.%20Haben%20Sie%20einen%20Termin%20frei%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs py-3.5 px-5 rounded-full text-center uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Dieses Design anfragen</span>
                </a>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="bg-[#faf7f2] hover:bg-[#f5f0e6] text-stone-800 border border-[#ede4d6] font-bold text-xs py-3.5 px-6 rounded-full uppercase tracking-wider cursor-pointer"
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
