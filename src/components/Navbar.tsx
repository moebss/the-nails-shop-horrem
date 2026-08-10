import { Phone, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#fafbfc]/90 backdrop-blur-md border-b border-amber-900/10 py-3.5 px-4 sm:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 via-rose-200 to-amber-300 border border-amber-400/40 flex items-center justify-center text-amber-900 font-serif font-bold text-lg shadow-sm">
            ✨
          </div>
          <div>
            <span className="font-serif font-bold text-xl tracking-tight text-slate-900 block leading-none">The Nails Shop</span>
            <span className="text-[10px] font-semibold text-amber-800 tracking-widest uppercase block mt-1">Boutique Studio Horrem</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600 uppercase tracking-wider">
          <a href="#preise" className="hover:text-amber-900 transition-colors">Leistungen & Preise</a>
          <a href="#galerie" className="hover:text-amber-900 transition-colors">Vorher / Nachher</a>
          <a href="#rechner" className="hover:text-amber-900 transition-colors">Style-Rechner</a>
          <a href="#faq" className="hover:text-amber-900 transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:01721234567"
            aria-label="Anrufen bei The Nails Shop Horrem"
            className="hidden sm:flex items-center gap-2 text-xs font-bold text-amber-950 bg-amber-100/80 hover:bg-amber-200/80 border border-amber-300/50 px-3.5 py-2 rounded-full transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-amber-800" />
            <span>0172 1234567</span>
          </a>

          <button
            onClick={onOpenContact}
            aria-label="Termin bei The Nails Shop Horrem buchen"
            className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Termin Buchen</span>
          </button>
        </div>

      </div>
    </header>
  );
}
