import React from 'react';
import { Wifi, Phone, MapPin, Heart, Sparkles } from 'lucide-react';
import { APARTMENT_INFO } from '../data/guideData';

interface WelcomeBannerProps {
  onCopyWifi: () => void;
  wifiCopied: boolean;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ onCopyWifi, wifiCopied }) => {
  return (
    <div className="bg-gradient-to-br from-white to-[#fbf8f4] border border-[#ede7df] rounded-2xl p-4 sm:p-5 mb-4 shadow-[0_4px_16px_rgba(44,34,27,0.04)]">
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c86c12] bg-[#fbf3ea] px-2.5 py-0.5 rounded-md border border-[#ecd8c5]">
              Добро пожаловать
            </span>
            <span className="text-xs text-[#8b7e73] font-medium flex items-center gap-1">
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              От Вадима и Натальи
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#2c221b] tracking-tight">
            Уютного отдыха в Бресте!
          </h2>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-[#5c544d] leading-relaxed mb-4">
        {APARTMENT_INFO.hosts.greeting} Нажмите на быстрые кнопки ниже для мгновенного доступа к Wi-Fi или навигации:
      </p>

      {/* Быстрые действия в 1 клик */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={onCopyWifi}
          className={`py-2.5 px-2 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer border ${
            wifiCopied
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
              : 'bg-[#2c221b] text-white hover:bg-[#3f3127] border-[#2c221b] shadow-sm'
          }`}
        >
          <Wifi className="w-4 h-4" />
          <span className="truncate max-w-full">
            {wifiCopied ? 'Скопирован!' : 'Wi-Fi пароль'}
          </span>
        </button>

        <a
          href="#taxi-home"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('taxi-home');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              try {
                history.pushState(null, '', '#taxi-home');
              } catch (_) {}
            }
          }}
          className="py-2.5 px-2 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1 bg-[#fffdfa] text-[#2c221b] hover:bg-[#f5ede3] border border-[#e2d9cd] transition-all active:scale-95 shadow-sm"
        >
          <span className="text-sm leading-none">🚕</span>
          <span className="truncate max-w-full">Такси домой</span>
        </a>

        <a
          href="#contacts"
          className="py-2.5 px-2 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1 bg-[#fffdfa] text-[#2c221b] hover:bg-[#f5ede3] border border-[#e2d9cd] transition-all active:scale-95 shadow-sm"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span className="truncate max-w-full">Связь</span>
        </a>
      </div>
    </div>
  );
};
