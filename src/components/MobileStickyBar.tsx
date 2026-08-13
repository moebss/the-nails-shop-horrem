import { Phone, Calendar, MessageSquare } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenContact: () => void;
}

export default function MobileStickyBar({ onOpenContact }: MobileStickyBarProps) {
  return (
    <aside
      aria-label="Mobile Schnellzugriff Leiste"
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#fcfaf7]/95 backdrop-blur-md border-t border-stone-200/90 p-3 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 text-center">
        
        {/* Call Button */}
        <a
          href="tel:015129429936"
          className="bg-[#f4efe8] active:bg-[#ece4d8] border border-[#e2d5c3] text-stone-800 py-3 rounded-xl flex flex-col items-center justify-center gap-1 shadow-xs"
        >
          <Phone className="w-4 h-4 text-stone-700" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Anrufen</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/4915129429936?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20bei%20The%20Nails%20Shop%20Horrem%20vereinbaren."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-700 active:bg-emerald-800 text-white py-3 rounded-xl flex flex-col items-center justify-center gap-1 shadow-xs"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Termin Buchen */}
        <button
          onClick={onOpenContact}
          className="bg-stone-900 active:bg-stone-800 text-stone-50 py-3 rounded-xl flex flex-col items-center justify-center gap-1 shadow-md font-bold cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-rose-300" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">Termin</span>
        </button>

      </div>
    </aside>
  );
}
