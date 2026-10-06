import React from 'react';
import { Accordion } from './Accordion';
import { CigaretteOff, VolumeX, Moon, Key, Accessibility } from 'lucide-react';

export const HouseRules: React.FC = () => {
  return (
    <Accordion
      id="rules"
      title="Правила проживания и тишина"
      icon="📜"
      defaultOpen={false}
    >
      <div className="flex flex-col gap-3 py-1">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
            <CigaretteOff className="w-4.5 h-4.5" />
          </div>
          <div>
            <div className="font-semibold text-[#2c221b]">Курение строго запрещено 🚭</div>
            <div className="text-xs sm:text-sm text-[#6b645c] mt-0.5">
              В квартире, на балконе и в подъезде курить нельзя. Места для курения отведены только на улице.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
            <VolumeX className="w-4.5 h-4.5" />
          </div>
          <div>
            <div className="font-semibold text-[#2c221b]">Без шумных вечеринок 🚫</div>
            <div className="text-xs sm:text-sm text-[#6b645c] mt-0.5">
              Квартира создана для спокойного, комфортного семейного отдыха и не сдаётся для шумных мероприятий.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
            <Moon className="w-4.5 h-4.5" />
          </div>
          <div>
            <div className="font-semibold text-[#2c221b]">Режим тишины (Закон РБ) 🤫</div>
            <div className="text-xs sm:text-sm text-[#6b645c] mt-0.5">
              Просим соблюдать тишину с <b className="text-[#2c221b]">23:00 до 07:00</b>, уважая сон и покой соседей.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
            <Key className="w-4.5 h-4.5" />
          </div>
          <div>
            <div className="font-semibold text-[#2c221b]">При выходе из дома 🔑</div>
            <div className="text-xs sm:text-sm text-[#6b645c] mt-0.5">
              Пожалуйста, закрывайте окна, запирайте входную дверь на ключ, выключайте освещение и мощные электроприборы (плиту, утюг).
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
            <Accessibility className="w-4.5 h-4.5" />
          </div>
          <div>
            <div className="font-semibold text-[#2c221b]">Безбарьерный вход ♿</div>
            <div className="text-xs sm:text-sm text-[#6b645c] mt-0.5">
              Подъезд дома оборудован плавным заездом без ступеней — удобно с детскими колясками и чемоданами прямо до скоростного лифта.
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
};
