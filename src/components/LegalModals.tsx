import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface LegalModalsProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalsProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (type) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-md" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-[#ffffff] border border-[#ede4d6] text-stone-800 rounded-3xl shadow-2xl flex flex-col z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <h2 id="modal-title" className="font-serif text-2xl font-normal text-stone-900">
            {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 sm:p-8 overflow-y-auto overscroll-contain text-stone-600 text-sm leading-relaxed space-y-4">
          {type === 'impressum' ? (
            <>
              <h3 className="font-serif font-bold text-stone-900 text-lg">Angaben gemäß § 5 DDG</h3>
              <p>
                The Nails Shop Horrem<br />
                Inhaberin: The Nails Shop Team<br />
                Hauptstraße 18<br />
                50169 Kerpen-Horrem
              </p>
              
              <h3 className="font-serif font-bold text-stone-900 text-lg pt-2">Kontakt</h3>
              <p>
                Telefon: 0172 1234567<br />
                E-Mail: kontakt@the-nails-shop-horrem.de
              </p>
              
              <h3 className="font-serif font-bold text-stone-900 text-lg pt-2">Aufsichtsbehörde & Berufsbezeichnung</h3>
              <p>
                Handwerkskammer zu Köln / Gewerbeamt Kerpen<br />
                Berufsbezeichnung: Nageldesignerin & Kosmetikerin<br />
                Verliehen in: Bundesrepublik Deutschland
              </p>
              
              <h3 className="font-serif font-bold text-stone-900 text-lg pt-2">Streitbeilegung</h3>
              <p className="text-xs text-stone-500">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </>
          ) : (
            <>
              <h3 className="font-serif font-bold text-stone-900 text-lg">1. Datenschutz auf einen Blick</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              
              <h3 className="font-serif font-bold text-stone-900 text-lg pt-2">2. Verantwortliche Stelle</h3>
              <p>
                The Nails Shop Horrem<br />
                Hauptstraße 18<br />
                50169 Kerpen-Horrem<br />
                Telefon: 0172 1234567
              </p>
              
              <h3 className="font-serif font-bold text-stone-900 text-lg pt-2">3. Datenerfassung auf dieser Website</h3>
              <p>
                <strong>Kontakt & Terminanfragen:</strong> Wenn Sie uns per Anfrageformular oder WhatsApp kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage bei uns gespeichert.
              </p>
              <p>
                <strong>Schriftarten (Self-Hosted):</strong> Diese Seite nutzt lokal gehostete Schriftarten (@fontsource) ohne Verbindungen zu Drittanbietern wie Google Fonts.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
