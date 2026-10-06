export interface GuidePlace {
  id: string;
  category: 'food' | 'walk' | 'sights' | 'trips';
  title: string;
  badge: string;
  badgeType: 'accent' | 'time';
  description: string;
  mapQuery?: string;
  icon?: string;
}

export const APARTMENT_INFO = {
  name: 'БЕЗ ЗАБОТ',
  tagline: 'книга гостя',
  address: 'Брест, ул. Петра Ивашутина, 6',
  mapsUrl: 'https://maps.yandex.ru/?text=Брест,+ул.+Петра+Ивашутина,+6',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Брест,+ул.+Петра+Ивашутина,+6',
  description: 'Уютное пространство для отдыха всей семьи со столиком из слэба на балконе и панорамным видом на закат. Все подсказки по квартире и городу собраны ниже 👇',
  checkIn: 'с 14:00',
  checkOut: 'до 12:00',
  wifi: {
    ssid: 'Home_WiFi_5g',
    password: 'qwer1234',
    qrPayload: 'WIFI:T:WPA;S:Home_WiFi_5g;P:qwer1234;;',
  },
  hosts: {
    names: 'Вадим и Наталья',
    greeting: 'Рады приветствовать вас в Бресте! Мы всегда рядом, чтобы ваш отдых прошёл без лишних забот.',
    phones: [
      { display: '+375 (29) 797-70-70', raw: '+375297977070', name: 'Вадим' },
      { display: '+375 (29) 722-15-51', raw: '+375297221551', name: 'Наталья' },
    ],
    telegram: 'https://t.me/+375297977070',
    whatsapp: 'https://wa.me/375297977070',
    viber: 'viber://chat?number=%2B375297977070',
  },
};

export const NEARBY_PLACES: GuidePlace[] = [
  {
    id: 'brasileiro',
    category: 'food',
    title: 'Кафе «Brasileiro» (Бразильяно)',
    badge: '2 мин пешком',
    badgeType: 'accent',
    description: 'Прямо в нашем квартале (ул. Ивашутина). Свежий ароматный кофе, круассаны и сытные завтраки.',
    mapQuery: 'кафе Brasileiro Брест ул Ивашутина',
    icon: '☕',
  },
  {
    id: 'productochka',
    category: 'food',
    title: 'Магазин «Продукточка»',
    badge: '1–2 мин пешком',
    badgeType: 'time',
    description: 'Буквально через дорогу: фермерская молочка, свежий хлеб, питьевая вода, бакалея и снеки.',
    mapQuery: 'магазин Продукточка Брест ул Ивашутина',
    icon: '🛒',
  },
  {
    id: 'papa-pizza',
    category: 'food',
    title: 'Пиццерия «Папа Пицца» & супермаркет «Санта»',
    badge: '5–7 мин пешком',
    badgeType: 'time',
    description: 'Ул. Рябиновая, 1А. Горячая пицца из печи (на вынос или в зале), кулинария, свежая выпечка.',
    mapQuery: 'Папа Пицца Брест Рябиновая 1А',
    icon: '🍕',
  },
  {
    id: 'park-1000',
    category: 'walk',
    title: 'Парк 1000-летия Бреста',
    badge: '5–7 мин пешком',
    badgeType: 'time',
    description: 'Через дорогу (ул. Екельчика): зелёные аллеи для утренних прогулок, храм и открытые теннисные корты.',
    mapQuery: 'Парк 1000-летия Бреста',
    icon: '🌳',
  },
  {
    id: 'fort-4',
    category: 'walk',
    title: 'Форт № 4 Брестской крепости',
    badge: '15 мин пешком / 4 мин авто',
    badgeType: 'time',
    description: 'Исторические земляные валы и капониры внешнего пояса крепости. Спокойный природный парк.',
    mapQuery: 'Форт 4 Брест',
    icon: '🛡️',
  },
];

export const CITY_PLACES: GuidePlace[] = [
  {
    id: 'sovetskaya',
    category: 'sights',
    title: 'Пешеходная ул. Советская (фонарщик)',
    badge: '12–14 мин на авто',
    badgeType: 'time',
    description: 'Главный променад города. Каждый вечер в сумерках фонарщик вручную зажигает керосиновые фонари. Парковка: ул. Гоголя / Орджоникидзе.',
    mapQuery: 'Брест ул Советская пешеходная',
    icon: '🕯️',
  },
  {
    id: 'fortress',
    category: 'sights',
    title: 'Брестская крепость-герой & музей «Берестье»',
    badge: '12–14 мин на авто',
    badgeType: 'time',
    description: 'Монумент «Мужество», Холмские ворота и уникальный археологический музей XIII века. Бесплатная удобная парковка — у Северных ворот (ул. Зубачева).',
    mapQuery: 'Мемориальный комплекс Брестская крепость-герой',
    icon: '⭐',
  },
  {
    id: 'gogol-allee',
    category: 'sights',
    title: 'Аллея кованых фонарей (ул. Гоголя)',
    badge: '12–14 мин на авто',
    badgeType: 'time',
    description: 'Десятки уникальных авторских кованых скульптур по мотивам повестей Гоголя («Нос», «Вечера на хуторе близ Диканьки»).',
    mapQuery: 'Аллея фонарей Брест ул Гоголя',
    icon: '🎨',
  },
  {
    id: 'mukhavets',
    category: 'walk',
    title: 'Набережная Мухавца и теплоход «Гродно»',
    badge: '10–12 мин на авто',
    badgeType: 'time',
    description: 'Ивовые тенистые аллеи вдоль реки, прокат велосипедов и самокатов. В сезон от Городского сада (ул. Ленина, 2) отправляется прогулочный теплоход.',
    mapQuery: 'Набережная Франциска Скорины Брест',
    icon: '🚢',
  },
  {
    id: 'park-1may',
    category: 'food',
    title: 'Парк 1 Мая & Трактир «У озера»',
    badge: '12–14 мин на авто',
    badgeType: 'time',
    description: 'Аттракционы, лебединые пруды и знаменитый деревянный сруб с горячими белорусскими драниками в глиняных горшочках.',
    mapQuery: 'Парк культуры и отдыха 1 Мая Брест',
    icon: '🎡',
  },
];

export const REGION_PLACES: GuidePlace[] = [
  {
    id: 'pushcha',
    category: 'trips',
    title: 'Беловежская пуща & Каменецкая вежа',
    badge: '65 км • ~55 мин',
    badgeType: 'accent',
    description: 'Реликтовый первобытный лес Европы, просторные вольеры с зубрами, Музей природы и Поместье Деда Мороза. По пути — старинная башня XIII века в Каменце («Белая вежа»).',
    mapQuery: 'Национальный парк Беловежская пуща Каменюки',
    icon: '🌲',
  },
  {
    id: 'kossovo-ruzhany',
    category: 'trips',
    title: 'Коссовский замок & Ружанский дворец',
    badge: '135 км • 1 ч 30 мин',
    badgeType: 'accent',
    description: 'Неоготический дворец Пусловских с 12 башнями и романтичные руины дворцового комплекса магнатов Сапег («Белорусский Версаль»).',
    mapQuery: 'Коссовский замок дворец Пусловских',
    icon: '🏰',
  },
  {
    id: 'dipriz',
    category: 'trips',
    title: 'Парк животных в Барановичах («Диприз»)',
    badge: '205 км • 2 ч (трасса М1)',
    badgeType: 'accent',
    description: 'Огромный современный ландшафтный сафари-парк: ламы, альпаки, кенгуру и олени свободно подходят к посетителям. Рекомендуем закладывать от 4–5 часов.',
    mapQuery: 'Парк животных Диприз Барановичи',
    icon: '🦙',
  },
];

export const TRAVEL_TIMES = [
  { destination: 'Погранпереход «Брест» (Варшавский мост)', time: '~11 мин' },
  { destination: 'Центр города (ул. Советская, ЦУМ)', time: '~12–14 мин' },
  { destination: 'Мемориал «Брестская крепость»', time: '~13 мин' },
  { destination: 'Центральный Ж/Д вокзал Бреста', time: '~15 мин' },
  { destination: 'Аэропорт «Брест»', time: '~27 мин' },
  { destination: 'Беловежская пуща (аг. Каменюки)', time: '~55–60 мин' },
];
