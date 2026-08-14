import { useState } from 'react';
import { Phone, Calendar, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#ede4d6] py-3.5 px-4 sm:px-8 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-full bg-[#ffffff] border border-[#ede4d6] flex items-center justify-center text-[#b36b67] font-bold text-lg shadow-xs shrink-0 group-hover:border-[#b36b67] transition-colors">
            <Sparkles className="w-4 h-4 text-[#b36b67]" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-stone-900 block leading-none group-hover:text-[#b36b67] transition-colors">
              The Nails Shop
            </span>
            <span className="text-[10px] font-semibold text-[#b36b67] tracking-widest uppercase block mt-1">
              Boutique Studio • Horrem
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-stone-700 uppercase tracking-wider">
          <a href="#services" className="hover:text-[#b36b67] transition-colors whitespace-nowrap">Behandlungen</a>
          <a href="#ueber-uns" className="hover:text-[#b36b67] transition-colors whitespace-nowrap">Über Uns</a>
          <a href="#transformation" className="hover:text-[#b36b67] transition-colors whitespace-nowrap">Vorher / Nachher</a>
          <a href="#instagram" className="hover:text-[#b36b67] transition-colors whitespace-nowrap">Instagram</a>
          <a href="#bewertungen" className="hover:text-[#b36b67] transition-colors whitespace-nowrap">Bewertungen</a>
          <a href="#rechner" className="hover:text-[#b36b67] transition-colors whitespace-nowrap">Preis-Rechner</a>
          <a href="#faq" className="hover:text-[#b36b67] transition-colors whitespace-nowrap">FAQ</a>
        </nav>

        {/* Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:01721234567"
            aria-label="Anrufen bei The Nails Shop Horrem"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-stone-800 bg-[#ffffff] hover:bg-stone-100 border border-[#ede4d6] px-4 py-2.5 rounded-full transition-all whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#b36b67]" />
            <span>0172 1234567</span>
          </a>

          <button
            onClick={onOpenContact}
            aria-label="Termin bei The Nails Shop buchen"
            className="hidden sm:flex bg-[#b36b67] hover:bg-[#9c5955] text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-xs transition-all items-center gap-2 cursor-pointer uppercase tracking-wider whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Termin Buchen</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
            className="lg:hidden p-2 rounded-xl bg-[#ffffff] border border-[#ede4d6] text-stone-700 hover:text-stone-900 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf7f2] border-t border-[#ede4d6] px-4 py-6 space-y-4 font-semibold text-sm uppercase tracking-wider text-stone-800 mt-3 animate-in fade-in slide-in-from-top-2">
          <a href="#services" onClick={handleNavClick} className="block py-2 hover:text-[#b36b67]">Behandlungen</a>
          <a href="#ueber-uns" onClick={handleNavClick} className="block py-2 hover:text-[#b36b67]">Über Uns</a>
          <a href="#transformation" onClick={handleNavClick} className="block py-2 hover:text-[#b36b67]">Vorher / Nachher</a>
          <a href="#instagram" onClick={handleNavClick} className="block py-2 hover:text-[#b36b67]">Instagram</a>
          <a href="#bewertungen" onClick={handleNavClick} className="block py-2 hover:text-[#b36b67]">Bewertungen</a>
          <a href="#rechner" onClick={handleNavClick} className="block py-2 hover:text-[#b36b67]">Preis-Rechner</a>
          <a href="#faq" onClick={handleNavClick} className="block py-2 hover:text-[#b36b67]">FAQ</a>

          <div className="pt-4 border-t border-[#ede4d6] flex flex-col gap-3">
            <button
              onClick={() => {
                handleNavClick();
                onOpenContact();
              }}
              className="w-full bg-[#b36b67] text-white font-bold text-xs py-3 rounded-full uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Termin Buchen</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
