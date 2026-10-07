/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { WelcomeBanner } from './components/WelcomeBanner';
import { CheckInOutTiles } from './components/CheckInOutTiles';
import { WifiCard } from './components/WifiCard';
import { TrashGuide } from './components/TrashGuide';
import { HouseRules } from './components/HouseRules';
import { CheckOutChecklist } from './components/CheckOutChecklist';
import { AppliancesGuide } from './components/AppliancesGuide';
import { CityGuide } from './components/CityGuide';
import { ContactsCard } from './components/ContactsCard';
import { BottomNav } from './components/BottomNav';
import { APARTMENT_INFO } from './data/guideData';
import { Check } from 'lucide-react';

export default function App() {
  const [wifiCopied, setWifiCopied] = useState(false);

  const handleCopyWifi = () => {
    navigator.clipboard.writeText(APARTMENT_INFO.wifi.password).then(() => {
      setWifiCopied(true);
      setTimeout(() => setWifiCopied(false), 2400);
    }).catch(() => {
      setWifiCopied(true);
      setTimeout(() => setWifiCopied(false), 2400);
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#1f1b18] pb-24 selection:bg-amber-200 selection:text-amber-950 font-sans">
      {/* 1. Главный экран (Hero с закатом и балконом 9 этажа) */}
      <Hero />

      {/* Основной контент */}
      <main className="max-w-[540px] mx-auto px-4 py-4 sm:py-5">
        {/* Приветственный блок от хозяев с быстрыми действиями */}
        <WelcomeBanner
          onCopyWifi={handleCopyWifi}
          wifiCopied={wifiCopied}
        />

        {/* Заезд и выезд */}
        <CheckInOutTiles />

        {/* Быстрый Wi-Fi с копированием и QR-кодом */}
        <WifiCard
          copied={wifiCopied}
          onCopy={handleCopyWifi}
        />

        {/* Схема выноса мусора */}
        <TrashGuide />

        {/* Правила проживания и тишина (запрет курения на балконе и в апартаментах) */}
        <HouseRules />

        {/* Интерактивный чек-лист быстрого выезда с отправкой сообщения */}
        <CheckOutChecklist />

        {/* Бытовая техника, Smart TV и балкон с кондиционером */}
        <AppliancesGuide />

        {/* Интерактивный гид по Бресту и району */}
        <CityGuide />

        {/* Контакты хозяев */}
        <ContactsCard />

        {/* Тёплая подпись в конце страницы */}
        <footer className="text-center pt-4 pb-8 text-xs text-[#8a8176] space-y-1">
          <p className="font-semibold text-[#544b41]">
            «Без забот» • Брест, ул. Петра Ивашутина, 6
          </p>
          <p className="pt-0.5 text-[#9c9186]">
            Желаем вам самого уютного и приятного отдыха в Бресте! ❤️
          </p>
        </footer>
      </main>

      {/* Всплывающее уведомление о копировании пароля */}
      {wifiCopied && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#059669] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg shadow-emerald-900/20 flex items-center gap-2 animate-in fade-in slide-in-from-top-3 duration-200">
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Пароль Wi-Fi скопирован в буфер обмена!</span>
        </div>
      )}

      {/* Современный парящий нижний таббар */}
      <BottomNav />
    </div>
  );
}
