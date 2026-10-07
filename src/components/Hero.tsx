import React, { useState, useRef } from 'react';
import { MapPin, Sun, Heart } from 'lucide-react';
import { APARTMENT_INFO } from '../data/guideData';
import sunsetImg from '../assets/sunset.jpg';

export const Hero: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    return localStorage.getItem('apartment_sunset_image') || sunsetImg;
  });

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setPhotoSrc(dataUrl);
        try {
          localStorage.setItem('apartment_sunset_image', dataUrl);
        } catch {
          // ignore quota limits
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <section 
      id="top" 
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-end text-white overflow-hidden bg-[#10141e]"
      style={{ minHeight: '100dvh' }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {/* Hidden file picker for sunset photo */}
      <input 
        type="file" 
        ref={fileInputRef} 
        accept="image/*" 
        className="hidden" 
        onChange={(e) => {
          if (e.target.files?.[0]) handleFile(e.target.files[0]);
        }} 
      />

      {/* 1. Real photo layer - ultra sharp, stretches across full viewport, eager loaded for Safari */}
      <img
        src={photoSrc}
        alt="Закат с балкона 9 этажа, Брест (нажмите, чтобы выбрать своё фото)"
        title="Кликните или перетащите файл, чтобы обновить фото заката"
        loading="eager"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover object-center contrast-[1.02] brightness-[1.01] cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
        onError={() => {
          if (photoSrc !== '/sunset.jpg') {
            setPhotoSrc('/sunset.jpg');
          }
        }}
      />

      {/* 2. Delicate bottom gradient strictly behind text for perfect readability (no blur, 100% sharp photo above) */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0e0b09]/95 via-[#0e0b09]/55 to-transparent pointer-events-none"
        style={{ height: '60%' }}
      />

      {/* Main Content (positioned comfortably higher up above the bottom menu and address toolbar) */}
      <div className="relative z-10 w-full max-w-[560px] mx-auto px-5 pt-8 pb-[calc(64px+env(safe-area-inset-bottom,0px)+38px)] sm:pb-32">
        {/* Friendly host badge */}
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide bg-[#c86c12] text-white shadow-md shadow-orange-950/40">
            <Sun className="w-3.5 h-3.5 text-amber-200" />
            <span>Книга гостя</span>
          </div>
          <span className="text-[11px] sm:text-xs text-amber-200/95 font-medium flex items-center gap-1">
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
            <span>Вадим & Наталья</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-1.5 sm:mb-2 leading-none drop-shadow-md">
          {APARTMENT_INFO.name}
        </h1>

        {/* Address interactive button */}
        <a
          href={APARTMENT_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#f5eee6] bg-white/15 hover:bg-white/25 active:scale-[0.98] transition-all backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl mb-2 sm:mb-3 border border-white/20 shadow-sm group"
        >
          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
          <span className="font-medium underline-offset-2 group-hover:underline">
            {APARTMENT_INFO.address}
          </span>
        </a>

        <p className="text-xs sm:text-sm md:text-base text-[#e5ded6] leading-snug sm:leading-relaxed font-normal">
          {APARTMENT_INFO.description}
        </p>
      </div>
    </section>
  );
};
