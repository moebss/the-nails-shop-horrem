export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 px-4 sm:px-8 border-t border-amber-900/20 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Col 1 */}
        <div className="space-y-3">
          <span className="font-serif font-bold text-lg text-white block">The Nails Shop</span>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            Ihr Boutique Nagelstudio & Beauty Salon in Kerpen-Horrem. Professionelle Maniküre, Gel-Modellagen & Lash-Lifting.
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-[11px] block">Behandlungen</span>
          <ul className="space-y-1 text-slate-400">
            <li>Neumodellage Gel & Acryl</li>
            <li>Auffüllen & Refill</li>
            <li>Babyboomer & French Ombré</li>
            <li>Pediküre & Zehengel</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-[11px] block">Kontakt & Studio</span>
          <p className="text-slate-400">Hauptstraße, 50169 Kerpen-Horrem</p>
          <p className="text-slate-400">Tel: 0172 1234567</p>
          <p className="text-slate-400">Mo – Sa: 09:00 – 19:00 Uhr</p>
        </div>

        {/* Col 4 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-[11px] block">Rechtliches</span>
          <ul className="space-y-1 text-slate-400">
            <li><a href="#kontakt" className="hover:text-white">Impressum</a></li>
            <li><a href="#kontakt" className="hover:text-white">Datenschutzerklärung</a></li>
            <li><a href="#kontakt" className="hover:text-white">Cookie-Einstellungen</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-6 text-center text-slate-500 text-[11px]">
        © {new Date().getFullYear()} The Nails Shop Horrem • Umgesetzt mit Rheindorf Digital WebGen OS
      </div>
    </footer>
  );
}
