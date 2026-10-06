import React, { useState } from 'react';
import { MapPin, Sun, Heart } from 'lucide-react';
import { APARTMENT_INFO } from '../data/guideData';

export const Hero: React.FC = () => {
  // Candidate image sources: user's uploaded filename, local sunset.jpg, and localStorage custom photo
  const defaultUserPhoto = 'изображение_viber_2026-10-06_08-54-31-290.jpg';
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    return localStorage.getItem('guestbook_hero_photo') || defaultUserPhoto;
  });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="top" className="relative w-full h-screen h-[100dvh] min-h-[580px] flex flex-col justify-end text-white overflow-hidden bg-[#141b2b]">
      {/* 1. Precise gradient matching the user's actual 9th floor balcony twilight photo */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700"
        style={{
          background: `
            linear-gradient(180deg, 
              rgba(18, 25, 38, 0.15) 0%, 
              rgba(23, 32, 50, 0.35) 35%, 
              rgba(45, 30, 25, 0.55) 55%, 
              rgba(215, 75, 15, 0.72) 68%, 
              rgba(20, 15, 12, 0.90) 82%, 
              rgba(16, 12, 10, 0.98) 100%
            ),
            radial-gradient(ellipse 120% 40% at 50% 65%, #ff521a 0%, #d44400 40%, transparent 80%),
            linear-gradient(180deg, #161e2e 0%, #202b3f 30%, #3a475d 50%, #b8621b 63%, #ff5500 68%, #14100d 80%, #0d0a08 100%)
          `,
        }}
      />

      {/* 2. Real user photo layer (stretched to fill the entire screen down to the menu) */}
      {!imageFailed && (
        <img
          src={photoSrc}
          alt="Закат с балкона 9 этажа, Брест"
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover object-center sm:object-bottom transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            // Try fallback to sunset.jpg or stay on the custom gradient
            if (photoSrc !== 'sunset.jpg' && photoSrc !== '/sunset.jpg') {
              setPhotoSrc('sunset.jpg');
            } else {
              setImageFailed(true);
            }
          }}
        />
      )}

      {/* Gradient dark scrim for high contrast typography legibility */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#14100e] via-[#14100e]/80 to-transparent pointer-events-none"
        style={{ height: '75%', top: '25%' }}
      />

      {/* Atmospheric sunset horizon line glow */}
      <div className="absolute top-[60%] left-0 right-0 h-32 bg-gradient-to-b from-orange-500/20 via-amber-600/10 to-transparent blur-2xl pointer-events-none" />

      {/* Main Content (positioned right above the bottom menu bar) */}
      <div className="relative z-10 w-full max-w-[560px] mx-auto px-5 pt-12 pb-[calc(68px+env(safe-area-inset-bottom,0px)+20px)] sm:pb-24">
        {/* Friendly host badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#c86c12] text-white shadow-md shadow-orange-950/40">
            <Sun className="w-3.5 h-3.5 text-amber-200" />
            <span>Книга гостя</span>
          </div>
          <span className="text-xs text-amber-200/95 font-medium flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Вадим & Наталья</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-none drop-shadow-md">
          {APARTMENT_INFO.name}
        </h1>

        {/* Address interactive button */}
        <a
          href={APARTMENT_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#f5eee6] bg-white/15 hover:bg-white/25 active:scale-[0.98] transition-all backdrop-blur-md px-3.5 py-2 rounded-xl mb-3 border border-white/20 shadow-sm group"
        >
          <MapPin className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
          <span className="font-medium underline-offset-2 group-hover:underline">
            {APARTMENT_INFO.address}
          </span>
        </a>

        <p className="text-sm sm:text-base text-[#e5ded6] leading-relaxed font-normal">
          {APARTMENT_INFO.description}
        </p>
      </div>
    </section>
  );
};
