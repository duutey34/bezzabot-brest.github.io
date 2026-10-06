import React from 'react';
import { Phone, MessageCircle, Heart, Send, ShieldAlert, Sparkles } from 'lucide-react';
import { APARTMENT_INFO } from '../data/guideData';

export const ContactsCard: React.FC = () => {
  return (
    <div id="contacts" className="scroll-mt-6 mt-8 mb-6">
      <div className="flex items-center justify-between mb-3.5">
        <div>
          <h2 className="text-xl sm:text-[22px] font-bold text-[#2c221b] flex items-center gap-2">
            <span>💬</span>
            <span>Мы всегда на связи</span>
          </h2>
          <p className="text-xs text-[#786e64] mt-0.5">
            По любым бытовым вопросам и советам по городу
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#e9e5de] rounded-3xl p-4.5 sm:p-5 shadow-[0_4px_20px_rgba(44,34,27,0.04)]">
        {/* Host Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#f0ece5]">
          <div>
            <div className="text-lg sm:text-xl font-bold text-[#2c221b]">
              {APARTMENT_INFO.hosts.names}
            </div>
            <div className="text-xs text-[#8b7e73] font-medium mt-0.5">
              Хозяева апартаментов «Без забот»
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#fbf3ea] text-[#c86c12] flex items-center justify-center shrink-0 border border-[#ecd8c5]">
            <Heart className="w-5 h-5 fill-[#c86c12]" />
          </div>
        </div>

        <p className="text-xs sm:text-[13.5px] text-[#554c42] mt-3 leading-relaxed">
          Не стесняйтесь звонить или писать в любое время, если возникнет вопрос по технике, понадобится дополнительное полотенце или рекомендация, куда пойти на ужин:
        </p>

        {/* Быстрые телефонные кнопки с именами */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3.5">
          {APARTMENT_INFO.hosts.phones.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone.raw}`}
              className="flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee8] active:scale-[0.98] p-3 rounded-2xl border border-[#e8e2d8] text-[#2c221b] transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/60">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs text-[#8b7e73] font-semibold uppercase tracking-wider">
                    {phone.name || 'Хозяин'}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#2c221b]">
                    {phone.display}
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#c86c12] group-hover:underline">
                Вызов
              </span>
            </a>
          ))}
        </div>

        {/* Мессенджеры */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <a
            href={APARTMENT_INFO.hosts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#229ED9] hover:bg-[#1d8bc0] active:scale-[0.98] transition shadow-xs"
          >
            <Send className="w-4 h-4" />
            <span>Telegram</span>
          </a>

          <a
            href={APARTMENT_INFO.hosts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] transition shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <a
            href={APARTMENT_INFO.hosts.viber}
            className="col-span-2 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#7360f2] hover:bg-[#624ee4] active:scale-[0.98] transition shadow-xs"
          >
            <span className="text-sm">🟣</span>
            <span>Написать в Viber</span>
          </a>
        </div>

        {/* Экстренные службы и службы города */}
        <div className="mt-4 pt-3.5 border-t border-dashed border-[#ede7df] text-xs text-[#786e64]">
          <div className="font-semibold text-[#2c221b] mb-1.5 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
            <span>Экстренные службы и вызов такси</span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Единая служба: <b className="text-[#2c221b]">112</b></span>
            <span>Скорая помощь: <b className="text-[#2c221b]">103</b></span>
            <span>Милиция: <b className="text-[#2c221b]">102</b></span>
            <span>Городское такси: <b className="text-[#2c221b]">7220</b></span>
          </div>
        </div>
      </div>
    </div>
  );
};
