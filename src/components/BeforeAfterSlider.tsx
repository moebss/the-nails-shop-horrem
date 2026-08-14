import { useState } from 'react';
import imgNeumodellage from '../images/nail_neumodellage.jpg';
import imgBabyboomer from '../images/nail_babyboomer.jpg';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="transformation" className="py-24 bg-[#faf7f2] border-b border-[#ede4d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#b36b67] uppercase bg-[#ffffff] border border-[#ede4d6] px-3.5 py-1.5 rounded-full inline-block">
            Nail-Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900">
            Vorher / Nachher Nageldesign
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Ziehen Sie den Schieberegler, um den Unterschied einer meisterhaften Neumodellage & Babyboomer-Veredelung zu sehen.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-3xl mx-auto relative aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-xl border border-[#ede4d6]">
          
          {/* After Image (Right Side) */}
          <img
            src={imgBabyboomer}
            alt="Nachher: Perfektes Babyboomer Nageldesign"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute top-4 right-4 bg-[#b36b67] text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md z-10 uppercase tracking-wider">
            Nachher: Babyboomer Ombré
          </span>

          {/* Before Image (Left Side clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={imgNeumodellage}
              alt="Vorher: Ausgangszustand"
              className="absolute inset-0 w-full h-full object-cover filter contrast-90 brightness-95"
              style={{ width: '100%', maxWidth: 'none' }}
            />
            <span className="absolute top-4 left-4 bg-stone-900/90 text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md z-10 uppercase tracking-wider border border-stone-700">
              Vorher: Neumodellage
            </span>
          </div>

          {/* Slider Handle Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#b36b67] cursor-ew-resize z-20 shadow-xl"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#b36b67] text-white border-2 border-white flex items-center justify-center text-xs font-bold shadow-2xl">
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
            aria-label="Vorher Nachher Slider Nagelstudio"
          />
        </div>

      </div>
    </section>
  );
}
