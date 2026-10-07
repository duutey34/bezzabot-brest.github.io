import React, { useEffect, useState } from 'react';
import { Home, Tv, MapPin, MessageSquare } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'top', label: 'Главная', icon: Home },
  { id: 'tech', label: 'Техника', icon: Tv },
  { id: 'city', label: 'Город', icon: MapPin },
  { id: 'contacts', label: 'Связь', icon: MessageSquare },
];

export const BottomNav: React.FC = () => {
  const [activeId, setActiveId] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check sections from bottom to top
      const sections = ['contacts', 'city', 'tech', 'top'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.45) {
            setActiveId(sectionId);
            return;
          }
        }
      }
      setActiveId('top');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveId(id);
    if (id === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 20;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 w-full bg-[#181513]/96 backdrop-blur-2xl border-t border-white/10 pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      aria-label="Основная навигация"
    >
      <div className="w-full flex items-center justify-around h-16 max-w-lg mx-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-1/4 h-full flex flex-col items-center justify-center gap-1 transition-colors duration-150 cursor-pointer select-none active:opacity-70 ${
                isActive
                  ? 'text-[#f59e0b]'
                  : 'text-[#948b81] hover:text-[#e5dfd9]'
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-150 ${isActive ? 'scale-110 text-[#f59e0b]' : ''}`} />
              <span className={`text-[11px] font-medium tracking-tight ${isActive ? 'text-[#f59e0b] font-semibold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
