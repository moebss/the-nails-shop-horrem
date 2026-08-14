interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-[#ffffff] text-stone-600 py-14 px-4 sm:px-8 border-t border-[#ede4d6] text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* Col 1 */}
        <div className="space-y-3">
          <span className="font-serif font-bold text-lg text-stone-900 block">The Nails Shop Horrem</span>
          <p className="text-stone-500 leading-relaxed text-xs">
            Exklusives Boutique Nagelstudio in Kerpen-Horrem. Neumodellage, Babyboomer, French Nails, Spa-Maniküre & Wimpernlifting.
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-2">
          <span className="font-bold text-stone-900 uppercase tracking-wider text-xs block">Behandlungen</span>
          <ul className="space-y-1.5 text-stone-500">
            <li>Neumodellage (Gel & Acryl)</li>
            <li>Babyboomer & French Ombré</li>
            <li>Auffüllen & Pflege-Refresh</li>
            <li>Spa Maniküre & Handmassage</li>
            <li>Wimpernlifting & Brow Styling</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-2">
          <span className="font-bold text-stone-900 uppercase tracking-wider text-xs block">Studio & Zeiten</span>
          <p className="text-stone-500">Hauptstraße 18, 50169 Kerpen-Horrem</p>
          <p className="text-stone-500">Tel: <a href="tel:01721234567" className="text-stone-800 hover:text-[#b36b67] underline">0172 1234567</a></p>
          <p className="text-stone-500">Mo – Fr: 09:00 – 19:00 Uhr<br />Sa: 09:00 – 17:00 Uhr</p>
        </div>

        {/* Col 4 */}
        <div className="space-y-2">
          <span className="font-bold text-stone-900 uppercase tracking-wider text-xs block">Rechtliches</span>
          <ul className="space-y-1.5 text-stone-500">
            <li>
              <button 
                onClick={() => onOpenLegal('impressum')}
                className="hover:text-stone-900 cursor-pointer transition-colors underline"
              >
                Impressum
              </button>
            </li>
            <li>
              <button 
                onClick={() => onOpenLegal('datenschutz')}
                className="hover:text-stone-900 cursor-pointer transition-colors underline"
              >
                Datenschutzerklärung
              </button>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-[#ede4d6] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-xs">
        <div>
          © {new Date().getFullYear()} The Nails Shop Horrem • Alle Rechte vorbehalten.
        </div>
        <div className="flex items-center gap-4">
          <span className="text-stone-500">Hauptstraße 18 • 50169 Kerpen</span>
        </div>
      </div>
    </footer>
  );
}
