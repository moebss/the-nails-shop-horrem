import { Phone, Calendar, MessageSquare } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenContact: () => void;
}

export default function MobileStickyBar({ onOpenContact }: MobileStickyBarProps) {
  return (
    <aside
      aria-label="Mobile Schnellkontakt Leiste"
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#ffffff]/95 backdrop-blur-md border-t border-[#ede4d6] px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="grid grid-cols-3 gap-2 text-center max-w-md mx-auto">
        
        {/* Call Direct */}
        <a
          href="tel:015129429936"
          aria-label="Studio jetzt anrufen"
          className="bg-[#faf7f2] active:bg-[#f5f0e6] border border-[#ede4d6] text-stone-800 py-2.5 px-1 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-xs transition-colors"
        >
          <Phone className="w-4 h-4 text-[#b36b67]" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Anrufen</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/4915129429936?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20bei%20The%20Nails%20Shop%20Horrem%20vereinbaren."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Termin oder Wunschdesign per WhatsApp anfragen"
          className="bg-emerald-600 active:bg-emerald-700 text-white py-2.5 px-1 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-xs transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Termin Buchen (Modal/Scroll) */}
        <button
          type="button"
          onClick={onOpenContact}
          aria-label="Wunschtermin anfragen"
          className="bg-[#b36b67] active:bg-[#9c5955] text-white py-2.5 px-1 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-md font-bold cursor-pointer transition-colors"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Termin</span>
        </button>

      </div>
    </aside>
  );
}
