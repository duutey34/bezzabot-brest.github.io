import React, { useState } from 'react';
import { Wifi, Copy, Check, QrCode, X, Sparkles, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { APARTMENT_INFO } from '../data/guideData';

interface WifiCardProps {
  copied: boolean;
  onCopy: () => void;
}

export const WifiCard: React.FC<WifiCardProps> = ({ copied, onCopy }) => {
  const [showQr, setShowQr] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // High-res QR code generated for Wi-Fi direct connection
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(
    APARTMENT_INFO.wifi.qrPayload
  )}&bgcolor=ffffff&color=2c221b&margin=1`;

  return (
    <div id="wifi" className="bg-[#fffdfa] border-2 border-[#ecd8c5] rounded-3xl p-4.5 sm:p-5 shadow-[0_4px_20px_rgba(44,34,27,0.04)] mb-4 transition-all">
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-[#fbf3ea] text-[#c86c12] flex items-center justify-center shrink-0 border border-[#ecd8c5]">
            <Wifi className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[#8b7e73]">
              Домашняя сеть
            </div>
            <div className="text-lg sm:text-xl font-bold text-[#2c221b] tracking-tight">
              {APARTMENT_INFO.wifi.ssid}
            </div>
          </div>
        </div>

        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/70 inline-flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Быстрый 5G</span>
        </span>
      </div>

      {/* Password display container */}
      <div className="mb-4 bg-white p-3.5 rounded-2xl border border-[#ede7df] shadow-xs flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-wider font-semibold text-[#8b7e73]">
            Пароль от сети
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xl sm:text-2xl font-mono font-bold text-[#2c221b] tracking-wider select-all">
              {showPassword ? APARTMENT_INFO.wifi.password : '••••••••'}
            </span>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-1.5 rounded-lg text-[#8b7e73] hover:text-[#2c221b] hover:bg-[#f5efe6] active:scale-95 transition-all cursor-pointer"
              title={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
              aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-[#c86c12]" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowQr(!showQr)}
          className="text-xs text-[#c86c12] font-semibold hover:text-[#9e540b] flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#fbf3ea] hover:bg-[#f5e9da] border border-[#ecd8c5] transition cursor-pointer active:scale-95 shrink-0"
          title="Показать QR-код для подключения"
        >
          <QrCode className="w-4 h-4" />
          <span>{showQr ? 'Скрыть QR' : 'QR-код'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <button
          onClick={onCopy}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-sm ${
            copied
              ? 'bg-[#059669] text-white ring-2 ring-emerald-300'
              : 'bg-[#2c221b] hover:bg-[#3f3127] text-white active:bg-[#c86c12]'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4.5 h-4.5" />
              <span>Пароль скопирован!</span>
            </>
          ) : (
            <>
              <Copy className="w-4.5 h-4.5" />
              <span>Скопировать пароль</span>
            </>
          )}
        </button>

        <button
          onClick={() => setShowQr(!showQr)}
          className="w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-[#fbf3ea] hover:bg-[#f5e7d6] text-[#c86c12] border border-[#ecd8c5] transition-all cursor-pointer active:scale-[0.98]"
        >
          <QrCode className="w-4.5 h-4.5" />
          <span>Подключиться по QR</span>
        </button>
      </div>

      {/* QR Code toggle card */}
      {showQr && (
        <div className="mt-4 pt-4 border-t border-dashed border-[#ecd8c5] flex flex-col items-center animate-in fade-in slide-in-from-top-2 duration-200">
          <p className="text-xs text-[#6b645c] mb-3 text-center max-w-[280px]">
            Наведите камеру любого телефона на QR-код — он предложит подключиться без ввода пароля:
          </p>
          <div className="p-3 bg-white rounded-2xl border-2 border-[#ecd8c5] shadow-md">
            <img
              src={qrUrl}
              alt="Wi-Fi QR Code"
              className="w-44 h-44 object-contain rounded-lg"
              loading="lazy"
            />
          </div>
          <button
            onClick={() => setShowQr(false)}
            className="mt-3 text-xs text-[#8b7e73] hover:text-[#2c221b] inline-flex items-center gap-1 cursor-pointer font-medium"
          >
            <X className="w-3.5 h-3.5" /> Закрыть окно QR
          </button>
        </div>
      )}
    </div>
  );
};
