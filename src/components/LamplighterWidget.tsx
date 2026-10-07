import React, { useState, useEffect } from 'react';
import { Flame, Clock, Car, MapPin, ChevronDown, ChevronUp, Camera, Sparkles } from 'lucide-react';

interface DaySchedule {
  dateLabel: string;
  sunset: string;
  arrive: string;
  isToday: boolean;
}

export function calculateBrestSunset(date: Date) {
  const lat = 52.0976;
  const lon = 23.6877;
  const tz = 3.0;
  
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  const gamma = (2 * Math.PI / 365) * (dayOfYear - 1);
  const eqtime = 229.18 * (0.000075 + 0.001868 * Math.cos(gamma) - 0.032077 * Math.sin(gamma)
                 - 0.014615 * Math.cos(2 * gamma) - 0.040849 * Math.sin(2 * gamma));
  const decl = 0.006918 - 0.399912 * Math.cos(gamma) + 0.070257 * Math.sin(gamma)
               - 0.006758 * Math.cos(2 * gamma) + 0.000907 * Math.sin(2 * gamma)
               - 0.002697 * Math.cos(3 * gamma) + 0.00148 * Math.sin(3 * gamma);
  const zenith = 90.833 * (Math.PI / 180);
  const latRad = lat * (Math.PI / 180);
  
  const cosHa = (Math.cos(zenith) / (Math.cos(latRad) * Math.cos(decl))) - (Math.tan(latRad) * Math.tan(decl));
  const haDeg = Math.acos(cosHa) * (180 / Math.PI);
  
  // -3 min calibration offset matching Brest municipal/astronomical table
  const sunsetLocalMin = 720 + 4 * (0 - lon) - eqtime + 4 * haDeg + tz * 60 - 3;
  const totalMin = Math.round(sunsetLocalMin);
  const hours = Math.floor(totalMin / 60);
  const minutes = totalMin % 60;
  
  const arriveMin = totalMin - 15;
  const arriveHours = Math.floor(arriveMin / 60);
  const arriveMinutes = arriveMin % 60;
  
  const goldenMin = totalMin - 60;
  const goldenHours = Math.floor(goldenMin / 60);
  const goldenMinutes = goldenMin % 60;
  
  return {
    totalMin,
    sunset: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`,
    arrive: `${String(arriveHours).padStart(2, '0')}:${String(arriveMinutes).padStart(2, '0')}`,
    golden: `${String(goldenHours).padStart(2, '0')}:${String(goldenMinutes).padStart(2, '0')}`,
  };
}

const MONTHS_GENITIVE = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
];

const DAYS_SHORT = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

export const LamplighterWidget: React.FC = () => {
  const [showWeekTable, setShowWeekTable] = useState(false);
  const [todayData, setTodayData] = useState<{
    dateStr: string;
    sunset: string;
    arrive: string;
    golden: string;
    diffMinutes: number;
  }>({
    dateStr: '7 октября',
    sunset: '18:49',
    arrive: '18:34',
    golden: '17:49',
    diffMinutes: 0,
  });

  const [weekSchedule, setWeekSchedule] = useState<DaySchedule[]>([]);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const currentCal = calculateBrestSunset(now);
      
      const day = now.getDate();
      const monthStr = MONTHS_GENITIVE[now.getMonth()];
      const dateStr = `${day} ${monthStr}`;

      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const diffMinutes = currentCal.totalMin - currentMinutes;

      setTodayData({
        dateStr,
        sunset: currentCal.sunset,
        arrive: currentCal.arrive,
        golden: currentCal.golden,
        diffMinutes,
      });

      // Calculate upcoming 6 days
      const days: DaySchedule[] = [];
      for (let i = 1; i <= 6; i++) {
        const nextDate = new Date(now);
        nextDate.setDate(now.getDate() + i);
        const nextCal = calculateBrestSunset(nextDate);
        const dayNum = nextDate.getDate();
        const mStr = MONTHS_GENITIVE[nextDate.getMonth()];
        const dayWeek = DAYS_SHORT[nextDate.getDay()];

        days.push({
          dateLabel: `${dayNum} ${mStr}, ${dayWeek}`,
          sunset: nextCal.sunset,
          arrive: nextCal.arrive,
          isToday: false,
        });
      }
      setWeekSchedule(days);
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  // Точные координаты точки фонарщика: 52.086874, 23.696092
  const clockMapUrl = 'https://maps.yandex.ru/?rtext=52.0622,23.7483~52.086874,23.696092&rtt=auto';
  const taxiUrl = 'https://3.redirect.appmetrica.yandex.com/route?start-lat=52.0622&start-lon=23.7483&end-lat=52.086874&end-lon=23.696092&app=taxi';

  // Dynamic status based on countdown
  const getStatusBadge = () => {
    const diff = todayData.diffMinutes;
    if (diff > 60) {
      const h = Math.floor(diff / 60);
      const m = diff % 60;
      return {
        text: `До выхода: ${h} ч. ${m} мин.`,
        className: 'text-amber-200 bg-amber-500/20 border-amber-400/30',
      };
    }
    if (diff > 30) {
      return {
        text: `До выхода: ${diff} мин.`,
        className: 'text-amber-100 bg-amber-500/25 border-amber-400/40',
      };
    }
    if (diff >= 0 && diff <= 30) {
      return {
        text: `🔥 Выдвигайтесь сейчас (осталось ${diff} мин.)`,
        className: 'text-orange-200 bg-orange-600/35 border-orange-400/50 animate-pulse font-bold',
      };
    }
    if (diff < 0 && diff >= -120) {
      return {
        text: '✨ Фонари зажжены! Ритуал на Советской',
        className: 'text-emerald-300 bg-emerald-500/25 border-emerald-400/40 animate-pulse font-bold',
      };
    }
    return {
      text: 'Фонари горят до рассвета',
      className: 'text-amber-200/80 bg-amber-500/15 border-amber-400/20',
    };
  };

  const status = getStatusBadge();

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#d97706]/35 bg-gradient-to-br from-[#1d1611] via-[#281c14] to-[#3a2515] text-white p-4.5 sm:p-5 shadow-[0_8px_30px_rgba(217,119,6,0.18)] my-3.5 sm:my-4 transition-all">
      {/* Warm ambient lantern glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-radial from-amber-500/25 via-amber-600/10 to-transparent blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-radial from-orange-500/15 to-transparent blur-xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between gap-2 mb-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30 backdrop-blur-md">
          <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
          <span>Главная традиция Бреста</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-amber-200/70 font-medium">
          <Clock className="w-3 h-3 text-amber-300" />
          <span>ул. Советская</span>
        </div>
      </div>

      {/* Main Title matching user screenshot */}
      <div className="relative z-10 mb-3">
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
          <span>🔥</span>
          <span>Во сколько зажигают фонари сегодня</span>
        </h3>
      </div>

      {/* Highlighted text card with exact numbers from the user source */}
      <div className="relative z-10 bg-black/40 backdrop-blur-md border border-amber-500/25 rounded-xl p-3.5 sm:p-4 mb-3.5">
        <p className="text-xs sm:text-[13.5px] text-[#fef3c7] leading-relaxed">
          Сегодня, <b>{todayData.dateStr}</b>, закат в Бресте — <b className="text-amber-300 text-sm sm:text-base font-extrabold">{todayData.sunset}</b>. Фонарщик выходит примерно в это время, поэтому приходить на Советскую стоит к{' '}
          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-500/30 text-amber-200 font-extrabold text-xs sm:text-sm border border-amber-400/40">
            {todayData.arrive}
          </span>
          : так вы застанете и подготовку, и первый фонарь.
        </p>

        {/* Live status badge */}
        <div className="mt-3 flex items-center justify-between gap-2 pt-2.5 border-t border-amber-500/20 flex-wrap">
          <span className={`text-xs px-2.5 py-1 rounded-full border inline-flex items-center gap-1.5 ${status.className}`}>
            <span>{status.text}</span>
          </span>

          <span className="text-[11px] text-amber-200/75 inline-flex items-center gap-1">
            <Camera className="w-3 h-3 text-amber-300" />
            <span>«Золотой час» для фото: <b>~{todayData.golden}</b></span>
          </span>
        </div>
      </div>

      {/* Отдельный заметный блок: Где начинается ритуал и сколько фонарей */}
      <div className="relative z-10 bg-amber-500/15 border border-amber-500/30 rounded-xl p-3 sm:p-3.5 mb-3 flex items-start gap-2.5 text-xs sm:text-[13px] text-amber-100/90 leading-relaxed shadow-xs">
        <span className="text-base shrink-0 mt-0.5">🕯️</span>
        <div>
          <span className="font-semibold text-amber-300">Старт и маршрут: </span>
          Церемония начинается у пересечения Советской и улицы Островского, а дальше фонарщик идёт вдоль улицы и вручную зажигает 17 керосиновых фонарей.
        </div>
      </div>

      {/* Explanatory note about Viktor Kirisyuk */}
      <div className="relative z-10 text-[11.5px] text-amber-100/75 leading-relaxed mb-3 space-y-1">
        <p>
          Точного расписания у церемонии нет — <b>Виктор Кирисюк</b> ориентируется на закат, и по наблюдениям выход сдвигается в пределах <b>±15 минут</b> от него.
        </p>
      </div>

      {/* Collapsible schedule for upcoming days */}
      <div className="relative z-10 mb-3.5">
        <button
          onClick={() => setShowWeekTable(!showWeekTable)}
          className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 active:scale-[0.99] border border-white/15 text-xs text-amber-200 font-medium flex items-center justify-between transition-all"
        >
          <span className="flex items-center gap-1.5">
            <span>📅</span>
            <span>Расписание на ближайшие дни</span>
          </span>
          {showWeekTable ? (
            <ChevronUp className="w-4 h-4 text-amber-300" />
          ) : (
            <ChevronDown className="w-4 h-4 text-amber-300" />
          )}
        </button>

        {showWeekTable && (
          <div className="mt-2 bg-black/45 rounded-xl border border-amber-500/20 overflow-hidden text-xs animate-in fade-in duration-200">
            <div className="grid grid-cols-3 py-2 px-3 bg-amber-950/50 font-semibold text-amber-300/90 text-[11px] border-b border-amber-500/20">
              <div>Дата</div>
              <div className="text-center">Закат (выход)</div>
              <div className="text-right">Прийти к</div>
            </div>
            {weekSchedule.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 py-2 px-3 border-b border-white/5 last:border-b-0 text-amber-100/90 items-center hover:bg-white/5 transition-colors"
              >
                <div className="font-medium text-white">{item.dateLabel}</div>
                <div className="text-center text-amber-200">{item.sunset}</div>
                <div className="text-right">
                  <span className="inline-block px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[11px] border border-amber-500/30">
                    {item.arrive}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dual action buttons flex 50/50 */}
      <div className="relative z-10 flex gap-2">
        <a
          href={clockMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-9 inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-white/15 hover:bg-white/25 active:scale-[0.98] border border-white/25 text-white rounded-lg transition-all whitespace-nowrap backdrop-blur-md"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-300" />
          <span>🗺️ Маршрут на карте</span>
        </a>

        <a
          href={taxiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-9 inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-[#ffcc00] hover:bg-[#f5c300] border border-[#e6b800] text-[#1a1a1a] rounded-lg transition-all active:scale-[0.98] whitespace-nowrap shadow-xs"
        >
          <Car className="w-3.5 h-3.5 fill-[#1a1a1a]" />
          <span>🚕 Яндекс Go</span>
        </a>
      </div>

      {/* Footer note */}
      <div className="relative z-10 text-[10.5px] text-amber-200/60 mt-2.5 text-center leading-tight">
        Точка назначения: место фонарщика на ул. Советской (52.086874, 23.696092).
      </div>
    </div>
  );
};
