import { Shield, Sparkles, Clock, MapPin } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="bg-[#f7f4ee] border-b border-amber-900/10 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div className="flex flex-col items-center gap-1.5">
          <MapPin className="w-5 h-5 text-amber-800" />
          <span className="text-xs font-bold text-slate-900">Zentral in Horrem</span>
          <span className="text-[11px] text-slate-500">Hauptstraße, 50169 Kerpen</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <Clock className="w-5 h-5 text-amber-800" />
          <span className="text-xs font-bold text-slate-900">Mo – Sa Geöffnet</span>
          <span className="text-[11px] text-slate-500">09:00 – 19:00 Uhr</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <Sparkles className="w-5 h-5 text-amber-800" />
          <span className="text-xs font-bold text-slate-900">100% Premium Gel</span>
          <span className="text-[11px] text-slate-500">Langanhaltender Glanz</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <Shield className="w-5 h-5 text-amber-800" />
          <span className="text-xs font-bold text-slate-900">Sterile Instrumente</span>
          <span className="text-[11px] text-slate-500">Medizinische Sauberkeit</span>
        </div>

      </div>
    </div>
  );
}
