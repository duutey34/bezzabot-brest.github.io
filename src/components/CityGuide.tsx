import React, { useState, useMemo } from 'react';
import { Accordion } from './Accordion';
import { NEARBY_PLACES, CITY_PLACES, REGION_PLACES, TRAVEL_TIMES, GuidePlace } from '../data/guideData';
import { ExternalLink, Search, Car, Bus, MapPin, X } from 'lucide-react';

export const CityGuide: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'food' | 'walk' | 'sights' | 'trips'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allPlaces = useMemo(() => {
    return [
      ...NEARBY_PLACES.map(p => ({ ...p, locationGroup: 'Рядом с домом' })),
      ...CITY_PLACES.map(p => ({ ...p, locationGroup: 'В Бресте' })),
      ...REGION_PLACES.map(p => ({ ...p, locationGroup: 'За городом' })),
    ];
  }, []);

  const filteredPlaces = useMemo(() => {
    return allPlaces.filter(place => {
      const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allPlaces, selectedCategory, searchQuery]);

  const renderPlaceCard = (place: GuidePlace & { locationGroup?: string }) => {
    const yandexUrl = `https://maps.yandex.ru/?text=${encodeURIComponent(place.mapQuery || place.title)}`;

    return (
      <div
        key={place.id}
        className="p-3.5 bg-white hover:bg-[#fbf9f6] rounded-2xl border border-[#ede7df] transition-all duration-150 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] group"
      >
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="font-semibold text-[15px] text-[#2c221b] flex items-center gap-2 leading-snug">
              <span className="text-lg shrink-0">{place.icon}</span>
              <span>{place.title}</span>
            </div>
            <span
              className={`shrink-0 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                place.badgeType === 'accent'
                  ? 'bg-[#fbf3ea] text-[#c86c12] border border-[#ecd8c5]'
                  : 'bg-[#f0ede8] text-[#585047]'
              }`}
            >
              {place.badge}
            </span>
          </div>

          <p className="text-[13px] text-[#5f564d] leading-relaxed mt-1.5">
            {place.description}
          </p>
        </div>

        {/* Двойные кнопки действий: Карта и Яндекс Go */}
        <div className="place-actions mt-2.5 pt-2 border-t border-[#f0eae1] flex gap-2">
          <a
            href={place.mapUrl || yandexUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-9 inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-[#f0ece6] hover:bg-[#e8e2d8] border border-[#dfd8cf] text-[#3e2e23] rounded-lg transition-all active:scale-[0.98] whitespace-nowrap"
          >
            <span>🗺️ На карте</span>
          </a>
          <a
            href={place.taxiUrl || `https://3.redirect.appmetrica.yandex.com/route?app=taxi`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-9 inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-[#ffcc00] hover:bg-[#f5c300] border border-[#e6b800] text-[#1a1a1a] rounded-lg transition-all active:scale-[0.98] whitespace-nowrap shadow-xs"
          >
            <span>🚕 Яндекс Go</span>
          </a>
        </div>
      </div>
    );
  };

  const isFiltering = selectedCategory !== 'all' || searchQuery.trim() !== '';

  return (
    <div id="city" className="scroll-mt-6">
      <div className="flex items-center justify-between mt-8 mb-3">
        <div>
          <h2 className="text-xl sm:text-[22px] font-bold text-[#2c221b] flex items-center gap-2">
            <span>🗺️</span>
            <span>Гид по Бресту и району</span>
          </h2>
          <p className="text-xs text-[#786e64] mt-0.5">
            Проверенные места, вкусный кофе, прогулки и замки
          </p>
        </div>
      </div>

      {/* Специальный заметный блок: Такси в апартаменты (Домой) */}
      <div className="bg-gradient-to-br from-[#fffdf2] to-[#fff9e6] border-2 border-[#ffe066] rounded-2xl p-4 mb-3.5 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-lg">🚕</span>
          <span className="text-sm font-bold text-[#2c221b]">Такси в апартаменты (Домой)</span>
        </div>
        <p className="text-xs text-[#6b645c] mt-1 leading-relaxed">
          Быстрый заказ машины в Яндекс Go прямо к подъезду (ул. Петра Ивашутина, 6). Точка назначения уже забита:
        </p>
        <a
          href="https://3.redirect.appmetrica.yandex.com/route?end-lat=52.0622&end-lon=23.7483&app=taxi"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 w-full py-2.5 px-4 bg-[#ffcc00] hover:bg-[#f5c300] active:scale-[0.98] border border-[#e6b800] rounded-xl text-[#1a1a1a] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all whitespace-nowrap"
        >
          <span>🚕 Открыть Яндекс Go домой</span>
        </a>
      </div>

      {/* Modern Search and Filter Bar */}
      <div className="bg-white rounded-2xl border border-[#ede7df] p-2.5 mb-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-2">
        <div className="relative">
          <Search className="w-4 h-4 text-[#9c9186] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск мест (кофе, драники, крепость, замок)..."
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-[#faf8f5] rounded-xl border border-[#e8e2d8] text-[#2c221b] placeholder-[#9c9186] focus:outline-none focus:border-[#c86c12] focus:bg-white transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9c9186] hover:text-[#2c221b]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Categories scrollable pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none text-xs">
          {[
            { id: 'all', label: 'Все места' },
            { id: 'food', label: '☕ Кофе & еда' },
            { id: 'walk', label: '🌳 Прогулки' },
            { id: 'sights', label: '🏰 Достопримечательности' },
            { id: 'trips', label: '🚗 За город' },
          ].map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#2c221b] text-white shadow-xs'
                    : 'bg-[#f4efe8] text-[#6b6257] hover:bg-[#eadecf]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* When filtering / searching, show direct card list */}
      {isFiltering ? (
        <div className="space-y-2.5 mb-3.5">
          <div className="flex items-center justify-between text-xs text-[#786e64] px-1">
            <span>Найдено мест: {filteredPlaces.length}</span>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-[#c86c12] hover:underline font-medium"
            >
              Сбросить фильтр
            </button>
          </div>

          {filteredPlaces.length > 0 ? (
            filteredPlaces.map(renderPlaceCard)
          ) : (
            <div className="bg-white p-6 rounded-2xl text-center text-xs text-[#8b7e73] border border-[#ede7df]">
              Ничего не нашлось по вашему запросу. Попробуйте другое слово или выберите категорию «Все».
            </div>
          )}
        </div>
      ) : (
        /* Default Categorized View with Accordions */
        <div className="space-y-2.5">
          {/* РЯДОМ С ДОМОМ */}
          <Accordion
            title="Пешком рядом с домом (2–7 мин)"
            icon="🚶"
            defaultOpen={false}
          >
            <div className="space-y-2.5">
              {NEARBY_PLACES.map(p => renderPlaceCard({ ...p, locationGroup: 'Рядом с домом' }))}
            </div>
          </Accordion>

          {/* ДОСТОПРИМЕЧАТЕЛЬНОСТИ БРЕСТА */}
          <Accordion
            title="Главные места города (10–14 мин на авто)"
            icon="🏰"
            defaultOpen={false}
          >
            <div className="space-y-2.5">
              {CITY_PLACES.map(p => renderPlaceCard({ ...p, locationGroup: 'В городе' }))}
            </div>
          </Accordion>

          {/* ЗАГОРОДНЫЕ МАРШРУТЫ */}
          <Accordion
            title="Загородные маршруты на автомобиле"
            icon="🌲"
            defaultOpen={false}
          >
            <div className="space-y-2.5">
              {REGION_PLACES.map(p => renderPlaceCard({ ...p, locationGroup: 'За городом' }))}
            </div>
          </Accordion>
        </div>
      )}

      {/* ВРЕМЯ В ПУТИ И НАВИГАТОР */}
      <div className="mt-2.5">
        <Accordion
          title="Время в пути, такси и парковка"
          icon="⏱️"
          defaultOpen={false}
        >
          <div>
            <table className="w-full text-xs sm:text-sm border-collapse">
              <tbody>
                {TRAVEL_TIMES.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#ede7df] last:border-b-0 hover:bg-[#faf8f5] transition-colors"
                  >
                    <td className="py-2.5 px-1 text-[#443e38] font-medium">{row.destination}</td>
                    <td className="py-2.5 px-1 text-right font-semibold text-[#c86c12] whitespace-nowrap">
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Брест-Центральный ЖД вокзал двойные кнопки */}
            <div className="mt-3 p-3 bg-[#faf8f5] rounded-xl border border-[#ede7df]">
              <div className="font-semibold text-xs text-[#2c221b] mb-2 flex items-center gap-1.5">
                <span>🚆</span>
                <span>Ж/Д вокзал «Брест-Центральный»:</span>
              </div>
              <div className="place-actions flex gap-2">
                <a
                  href="https://maps.yandex.ru/?text=52.1001,23.6806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-9 inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-[#f0ece6] hover:bg-[#e8e2d8] border border-[#dfd8cf] text-[#3e2e23] rounded-lg transition-all active:scale-[0.98] whitespace-nowrap"
                >
                  <span>🗺️ На карте</span>
                </a>
                <a
                  href="https://3.redirect.appmetrica.yandex.com/route?end-lat=52.1001&end-lon=23.6806&app=taxi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-9 inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-[#ffcc00] hover:bg-[#f5c300] border border-[#e6b800] text-[#1a1a1a] rounded-lg transition-all active:scale-[0.98] whitespace-nowrap shadow-xs"
                >
                  <span>🚕 Яндекс Go</span>
                </a>
              </div>
            </div>

            <div className="mt-3.5 p-3.5 bg-[#fbf3ea] rounded-2xl border border-[#ecd8c5] text-xs sm:text-[13px] text-[#554b42] space-y-2.5 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-[#c86c12] shrink-0 mt-0.5" />
                <div>
                  <b className="text-[#2c221b]">Такси от Ж/Д вокзала:</b> 12–15 мин (~10–15 BYN). Отлично работают приложения Яндекс Go и городские диспетчеры 7220.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Bus className="w-4 h-4 text-[#c86c12] shrink-0 mt-0.5" />
                <div>
                  <b className="text-[#2c221b]">Общественный транспорт:</b> прямой городской автобус № 9 от вокзала до ост. «Кольцевая» или «4 Форт» (далее 3 мин пешком).
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c86c12] shrink-0 mt-0.5" />
                <div>
                  <b className="text-[#2c221b]">Бесплатная парковка:</b> просторная открытая парковка прямо во дворе дома (свободные места есть всегда, в любое время).
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
};
