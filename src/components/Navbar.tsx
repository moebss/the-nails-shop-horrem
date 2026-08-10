import { Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#fcfaf7]/95 backdrop-blur-md border-b border-stone-200/80 py-4 px-4 sm:px-8 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#f4efe8] border border-[#e8ded1] flex items-center justify-center text-stone-800 font-serif font-bold text-lg shadow-xs shrink-0">
            ✦
          </div>
          <div>
            <span className="font-serif font-semibold text-xl tracking-tight text-stone-900 block leading-none">The Nails Shop</span>
            <span className="text-[10px] font-semibold text-stone-500 tracking-widest uppercase block mt-1">Boutique Studio Horrem</span>
          </div>
        </div>

        {/* Navigation Links with Über Uns & Portfolio Gallery */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-stone-600 uppercase tracking-widest">
          <a href="#preise" className="hover:text-stone-900 transition-colors">Behandlungen</a>
          <a href="#ueber-uns" className="hover:text-stone-900 transition-colors">Über Uns</a>
          <a href="#galerie-grid" className="hover:text-stone-900 transition-colors">Portfolio</a>
          <a href="#galerie" className="hover:text-stone-900 transition-colors">Vorher / Nachher</a>
          <a href="#rechner" className="hover:text-stone-900 transition-colors">Style-Rechner</a>
          <a href="#faq" className="hover:text-stone-900 transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:01721234567"
            aria-label="Anrufen bei The Nails Shop Horrem"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-stone-800 bg-[#f4efe8] hover:bg-[#ece4d8] border border-[#e2d5c3] px-4 py-2.5 rounded-full transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-stone-700" />
            <span>0172 1234567</span>
          </a>

          <button
            onClick={onOpenContact}
            aria-label="Termin bei The Nails Shop Horrem buchen"
            className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs px-6 py-2.5 rounded-full shadow-sm transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5 text-rose-300" />
            <span>Termin Buchen</span>
          </button>
        </div>

      </div>
    </header>
  );
}
