import { useState } from 'react';
import portfolioImg from '../images/portfolio_nails.jpg';
import heroImg from '../images/hero_nails.jpg';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="galerie" className="py-20 bg-gradient-to-b from-[#fafbfc] via-[#f7f4ee] to-[#fafbfc] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full">
            Ergebnis-Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
            Vorher / Nachher Maniküre-Vergleich
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Ziehen Sie den Schieberegler auf dem Smartphone, um den Unterschied zwischen beanspruchten Naturnägeln und perfektem Gel-Finish zu sehen.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-3xl mx-auto relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-[#fafbfc]">
          
          {/* After Image (Right Side) */}
          <img
            src={portfolioImg}
            alt="Nachher: Makellose Gel-Nägel"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute top-4 right-4 bg-emerald-600 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-md z-10">
            NACHHER: Perfektes Gel-Finish
          </span>

          {/* Before Image (Left Side clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={heroImg}
              alt="Vorher: Unbehandelte Naturnägel"
              className="absolute inset-0 w-full h-full object-cover filter contrast-75 brightness-90"
              style={{ width: '100%', maxWidth: 'none' }}
            />
            <span className="absolute top-4 left-4 bg-slate-900 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-md z-10">
              VORHER: Ungestaltete Nägel
            </span>
          </div>

          {/* Slider Handle Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-xl"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-800 text-white border-2 border-white flex items-center justify-center text-xs font-bold shadow-2xl">
              ↔
            </div>
          </div>

          {/* Invisible Range Input Control */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
        </div>

      </div>
    </section>
  );
}
