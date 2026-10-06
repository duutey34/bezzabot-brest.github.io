import React from 'react';
import { Accordion } from './Accordion';
import { AlertCircle, MapPin, ExternalLink } from 'lucide-react';

export const TrashGuide: React.FC = () => {
  const yandexTrashUrl = 'https://maps.yandex.ru/?rtext=~52.063463,23.719237&rtt=pd';

  return (
    <Accordion
      id="trash"
      title="Вынос мусора (где контейнеры)"
      icon="🗑️"
      defaultOpen={true}
      borderHighlight={true}
    >
      <div>
        <p className="font-medium text-[#2c221b] mb-3">
          Как быстро дойти до площадки с контейнерами:
        </p>

        <div className="flex flex-col gap-3 my-2.5">
          <div className="flex items-start gap-3">
            <div className="w-6.5 h-6.5 min-w-[26px] bg-[#c86c12] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              1
            </div>
            <div className="text-[14px]">
              Выйдите из подъезда и поверните <b className="text-[#2c221b]">налево</b> в сторону соседнего дома № 8.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6.5 h-6.5 min-w-[26px] bg-[#c86c12] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              2
            </div>
            <div className="text-[14px]">
              Пройдите по благоустроенной пешеходной дорожке между домами.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6.5 h-6.5 min-w-[26px] bg-[#c86c12] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              3
            </div>
            <div className="text-[14px]">
              Контейнеры расположены у дороги на небольшом комфортном удалении от жилого дома.
            </div>
          </div>
        </div>

        {/* Точка на Яндекс.Картах */}
        <div className="my-3 pt-1">
          <a
            href={yandexTrashUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3.5 bg-[#fbf3ea] hover:bg-[#f5e7d6] text-[#c86c12] border border-[#ecd8c5] rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-between transition-all active:scale-[0.98] shadow-xs group"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c86c12] shrink-0 group-hover:scale-110 transition-transform" />
              <span>Точка на Яндекс.Картах</span>
            </span>
            <span className="text-xs font-bold inline-flex items-center gap-1 group-hover:underline">
              <span>Открыть пеший маршрут</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        <div className="bg-[#fef2f2] border-l-4 border-[#dc2626] p-3 rounded-r-xl text-[13px] text-[#991b1b] mt-3 flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
          <div>
            <b>Важно:</b> Пожалуйста, не оставляйте пакеты с мусором на этаже или у крыльца подъезда. Спасибо за чистоту и уважение к соседям!
          </div>
        </div>
      </div>
    </Accordion>
  );
};
