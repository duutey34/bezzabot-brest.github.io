import React from 'react';
import { Accordion } from './Accordion';
import { Tv, Flame, Bath, Wind, Lock, Sparkles, CheckCircle2 } from 'lucide-react';

export const AppliancesGuide: React.FC = () => {
  return (
    <div id="tech" className="scroll-mt-6">
      <h2 className="text-xl sm:text-[22px] font-bold text-[#2c221b] mt-8 mb-3.5 flex items-center gap-2">
        <span>🍳</span>
        <span>Бытовая техника & TV</span>
      </h2>

      {/* Smart TV */}
      <Accordion
        title="Smart TV и приложения"
        icon="📺"
        defaultOpen={false}
      >
        <div className="space-y-3">
          <p className="font-medium text-[#2c221b] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Телевизор оснащен атмосферной подсветкой. Для вас уже настроены:</span>
          </p>

          <ul className="space-y-2.5 pl-1">
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#c86c12] mt-2 shrink-0" />
              <div>
                <b className="text-[#2c221b]">OTT Player:</b> эфирные телеканалы, фильмы и спортивные трансляции в прямом эфире.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#c86c12] mt-2 shrink-0" />
              <div>
                <b className="text-[#2c221b]">NUM / Кинопоиск:</b> огромная библиотека любимых фильмов, сериалов и новинок в отличном HD качестве.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#c86c12] mt-2 shrink-0" />
              <div>
                <b className="text-[#2c221b]">YouTube:</b> видеоролики, клипы и фоновая музыка (при любом зависании просто закройте и перезапустите приложение).
              </div>
            </li>
          </ul>
        </div>
      </Accordion>

      {/* Cooktop & Oven & Microwave */}
      <Accordion
        title="Варочная панель, духовка и СВЧ"
        icon="🍳"
        defaultOpen={false}
      >
        <div className="space-y-3">
          <div className="bg-[#fffbf6] border border-[#f3e3ce] rounded-xl p-3.5 space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span>Удерживайте сенсорную кнопку включения питания в течение <b className="text-[#2c221b]">2 секунд</b>.</span>
            </div>

            <div className="flex items-start gap-2 pt-1 border-t border-amber-100">
              <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
              <div>
                <b className="text-[#c86c12] inline-flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" /> Если горит символ «L» (Child Lock):
                </b>
                <p className="mt-0.5">
                  Зажмите кнопку с иконкой замка 🔒 на <b className="text-[#2c221b]">3 секунды</b> до короткого звукового сигнала — плита мгновенно разблокируется!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1 border-t border-amber-100">
              <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span>
                На кухне для вас подготовлены микроволновая СВЧ-печь, духовой шкаф, электрочайник, сковороды и кастрюли, а также свежий чай, кофе, сахар, соль и подсолнечное масло.
              </span>
            </div>
          </div>
        </div>
      </Accordion>

      {/* Bathroom & Washing machine */}
      <Accordion
        title="Ванная комната и стиральная машина"
        icon="🧺"
        defaultOpen={false}
      >
        <div className="space-y-2.5 text-sm">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <b className="text-[#2c221b]">Стиральная машина:</b> для быстрой освежающей стирки рекомендуем удобную и бережную программу <b className="text-[#c86c12]">«Быстро 30 мин»</b>.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              В ванной для вас установлен расслабляющий тропический душ, электрический полотенцесушитель, фен, гигиенические принадлежности и комплект свежих чистых полотенец.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              Санузел в квартире комфортный раздельный. Паровой утюг и гладильная доска находятся в гардеробной зоне / спальне.
            </div>
          </div>
        </div>
      </Accordion>

      {/* Balcony & Air Conditioner */}
      <Accordion
        title="Балкон и кондиционер"
        icon="🌿"
        defaultOpen={false}
      >
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-[#fbf3ea] rounded-xl border border-[#ecd8c5]">
            <b className="text-[#c86c12] block mb-1">🌅 Балкон (9 этаж):</b>
            <p className="text-[#443e38]">
              Панорамный вдохновляющий вид на закатный вечерний Брест, дизайнерский столик из натурального массива карагача со слэбом для чашечки кофе или бокала вина, а также удобная складная сушилка для белья.
            </p>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#e9e5de]">
            <b className="text-[#2c221b] block mb-1">❄️ Кондиционер:</b>
            <ul className="space-y-1 text-[#443e38]">
              <li>• Значок <span className="font-semibold text-sky-600">❄️ (Cool)</span> — приятное охлаждение в жаркие дни.</li>
              <li>• Значок <span className="font-semibold text-amber-600">☀️ (Heat)</span> — уютный обогрев в прохладную погоду.</li>
              <li>• Рекомендуемая наиболее комфортная температура: <b className="text-[#2c221b]">22–23°C</b>.</li>
            </ul>
          </div>
        </div>
      </Accordion>
    </div>
  );
};
