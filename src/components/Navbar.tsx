import { useState } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fcfaf7]/95 backdrop-blur-md border-b border-stone-200/80 py-3.5 px-4 sm:px-8 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-full bg-[#f4efe8] border border-[#e8ded1] flex items-center justify-center text-stone-800 font-serif font-bold text-lg shadow-xs shrink-0 group-hover:border-stone-400 transition-colors">
            ✦
          </div>
          <div>
            <span className="font-serif font-semibold text-lg sm:text-xl tracking-tight text-stone-900 block leading-none group-hover:text-amber-800 transition-colors">
              The Nails Shop
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-stone-500 tracking-widest uppercase block mt-1">
              Boutique Studio Horrem
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-stone-600 uppercase tracking-widest">
          <a href="#preise" className="hover:text-stone-900 transition-colors">Behandlungen</a>
          <a href="#ueber-uns" className="hover:text-stone-900 transition-colors">Über Uns</a>
          <a href="#instagram" className="hover:text-stone-900 transition-colors">Instagram</a>
          <a href="#bewertungen" className="hover:text-stone-900 transition-colors">Bewertungen</a>
          <a href="#rechner" className="hover:text-stone-900 transition-colors">Style-Rechner</a>
          <a href="#faq" className="hover:text-stone-900 transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:015129429936"
            aria-label="Anrufen bei The Nails Shop Horrem"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-stone-800 bg-[#f4efe8] hover:bg-[#ece4d8] border border-[#e2d5c3] px-4 py-2.5 rounded-full transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-stone-700" />
            <span>0151 29429936</span>
          </a>

          <button
            onClick={onOpenContact}
            aria-label="Termin bei The Nails Shop Horrem buchen"
            className="hidden sm:flex bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs px-6 py-2.5 rounded-full shadow-sm transition-all items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5 text-rose-300" />
            <span>Termin Buchen</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
            className="md:hidden p-2.5 rounded-full bg-[#f4efe8] border border-[#e2d5c3] text-stone-800 hover:text-stone-950 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 border-t border-stone-200/80 bg-[#fcfaf7] space-y-3 mt-3 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-stone-800 uppercase tracking-wider">
            <a href="#preise" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-[#f4efe8] hover:text-amber-800">Behandlungen</a>
            <a href="#ueber-uns" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-[#f4efe8] hover:text-amber-800">Über Uns</a>
            <a href="#instagram" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-[#f4efe8] hover:text-amber-800">Instagram</a>
            <a href="#bewertungen" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-[#f4efe8] hover:text-amber-800">Bewertungen</a>
            <a href="#rechner" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-[#f4efe8] hover:text-amber-800">Style-Rechner</a>
            <a href="#faq" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-[#f4efe8] hover:text-amber-800">FAQ</a>
          </nav>
          
          <button
            onClick={() => { handleNavClick(); onOpenContact(); }}
            className="w-full bg-stone-900 text-stone-50 font-bold text-xs py-3.5 rounded-full uppercase tracking-wider flex items-center justify-center gap-2 mt-2 shadow-sm"
          >
            <Calendar className="w-4 h-4 text-rose-300" />
            <span>Termin Buchen</span>
          </button>
        </div>
      )}
    </header>
  );
}
