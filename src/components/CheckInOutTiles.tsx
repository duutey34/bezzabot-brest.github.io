import React from 'react';
import { LogIn, LogOut } from 'lucide-react';
import { APARTMENT_INFO } from '../data/guideData';

export const CheckInOutTiles: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2.5 mb-3.5">
      <div className="bg-white border border-[#e9e5de] rounded-xl p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
          <LogIn className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider font-semibold text-[#6b645c]">
            Заезд
          </div>
          <div className="text-base sm:text-lg font-bold text-[#2c221b]">
            {APARTMENT_INFO.checkIn}
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#e9e5de] rounded-xl p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
          <LogOut className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider font-semibold text-[#6b645c]">
            Выезд
          </div>
          <div className="text-base sm:text-lg font-bold text-[#2c221b]">
            {APARTMENT_INFO.checkOut}
          </div>
        </div>
      </div>
    </div>
  );
};
