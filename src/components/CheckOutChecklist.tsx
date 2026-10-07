import React, { useState } from 'react';
import { Check, Send, Sparkles } from 'lucide-react';

export const CheckOutChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    windows: false,
    ac: false,
    trash: false,
    keys: false,
  });

  const items = [
    { id: 'windows', text: '🪟 Окна закрыты' },
    { id: 'ac', text: '❄️ Кондиционер и свет выключены' },
    { id: 'trash', text: '🗑️ Мусор вынесен в контейнеры' },
    { id: 'keys', text: '🔑 Ключи оставлены на столе' },
  ];

  const doneCount = Object.values(checkedItems).filter(Boolean).length;
  const isAllDone = doneCount === items.length;
  const progressPercent = (doneCount / items.length) * 100;

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const messageText = 'Добрый день! Мы выехали, ключи оставили на столе, всё в порядке. Спасибо за гостеприимство!';
  const encodedText = encodeURIComponent(messageText);

  const whatsappUrl = `https://wa.me/375297977070?text=${encodedText}`;
  const telegramUrl = 'https://t.me/duutey';

  const [tgCopied, setTgCopied] = useState(false);

  const handleTelegramClick = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(messageText).then(() => {
        setTgCopied(true);
        setTimeout(() => setTgCopied(false), 4000);
      }).catch(() => {
        // ignore clipboard error, still proceed to open link
      });
    }
  };

  return (
    <div className="bg-white border border-[#e9e5de] rounded-2xl p-4 my-3.5 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-[#2c221b] text-sm sm:text-base flex items-center gap-1.5">
          <span>🕒</span>
          <span>Чек-лист быстрого выезда (до 12:00)</span>
        </h3>
        <span className="text-xs text-[#6b645c] font-medium shrink-0">
          Выполнено: <b className="text-[#c86c12]">{doneCount}</b> из {items.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-[#eee8e0] rounded-full overflow-hidden mb-3.5">
        <div
          className="h-full bg-gradient-to-r from-[#c86c12] to-[#059669] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Items list */}
      <div className="space-y-2 mb-3.5">
        {items.map(item => {
          const isChecked = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-center gap-3 p-2.5 rounded-xl border cursor-pointer select-none transition-all active:scale-[0.99] ${
                isChecked
                  ? 'bg-emerald-50/70 border-emerald-200 text-[#166534]'
                  : 'bg-[#faf8f5] border-[#ede7df] text-[#2c221b] hover:bg-[#f5f1eb]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                  isChecked
                    ? 'bg-[#059669] border-[#059669] text-white'
                    : 'bg-white border-[#c9c0b5]'
                }`}
              >
                {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <span
                className={`text-xs sm:text-[13.5px] font-medium transition-all ${
                  isChecked ? 'line-through opacity-75' : ''
                }`}
              >
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* All done message */}
      {isAllDone && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold px-3 py-2 rounded-xl mb-3 text-center flex items-center justify-center gap-1.5 animate-in fade-in duration-200">
          <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Всё готово! Нажмите кнопку ниже, чтобы предупредить нас:</span>
        </div>
      )}

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] transition-all shadow-sm ${
            isAllDone ? 'ring-2 ring-emerald-400 ring-offset-1 animate-pulse' : ''
          }`}
        >
          <span>💬 В WhatsApp</span>
        </a>
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTelegramClick}
          className={`flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#229ED9] hover:bg-[#1e8ec3] active:scale-[0.98] transition-all shadow-sm ${
            isAllDone ? 'ring-2 ring-sky-400 ring-offset-1 animate-pulse' : ''
          }`}
        >
          <Send className="w-3.5 h-3.5" />
          <span>В Telegram (@duutey)</span>
        </a>
      </div>

      {tgCopied && (
        <div className="mt-2 text-center text-xs font-semibold text-[#0369a1] bg-[#e0f2fe] border border-[#bae6fd] py-1.5 px-3 rounded-xl animate-in fade-in">
          ✅ Текст скопирован! Открываем чат @duutey для отправки.
        </div>
      )}
    </div>
  );
};
