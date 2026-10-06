import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  id?: string;
  title: string;
  icon?: string;
  defaultOpen?: boolean;
  borderHighlight?: boolean;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  id,
  title,
  icon,
  defaultOpen = false,
  borderHighlight = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      id={id}
      className={`bg-white rounded-2xl mb-2.5 transition-all duration-200 overflow-hidden ${
        borderHighlight
          ? 'border-2 border-[#ecd8c5] shadow-sm'
          : isOpen
          ? 'border border-[#d1c8bd] shadow-[0_4px_12px_rgba(0,0,0,0.04)]'
          : 'border border-[#e9e5de] shadow-[0_2px_6px_rgba(0,0,0,0.02)]'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-4.5 font-semibold text-[15px] sm:text-base text-left text-[#2c221b] flex items-center justify-between gap-3 cursor-pointer select-none hover:bg-[#faf8f5] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2.5 leading-snug">
          {icon && <span className="text-lg shrink-0">{icon}</span>}
          <span>{title}</span>
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#c86c12] shrink-0 transition-transform duration-250 ease-out ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 pt-3 text-[14px] sm:text-[14.5px] text-[#443e38] leading-relaxed border-t border-dashed border-[#ede7df] animate-in fade-in duration-200">
          {children}
        </div>
      )}
    </div>
  );
};
