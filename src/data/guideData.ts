export interface GuidePlace {
  id: string;
  category: 'food' | 'walk' | 'sights' | 'trips';
  title: string;
  badge: string;
  badgeType: 'accent' | 'time';
  description: string;
  mapQuery?: string;
  mapUrl?: string;
  taxiUrl?: string;
  icon?: string;
}

export const APARTMENT_INFO = {
  name: 'БЕЗ ЗАБОТ',
  tagline: 'книга гостя',
  address: 'Брест, ул. Петра Ивашутина, 6 • эт. 9, кв. 80',
  mapsUrl: 'https://maps.yandex.ru/?text=Брест,+ул.+Петра+Ивашутина,+6',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Брест,+ул.+Петра+Ивашутина,+6',
  homeTaxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.0622&end-lon=23.7483&app=taxi',
  description: 'Уютное пространство для отдыха всей семьи со столиком из слэба на балконе и панорамным видом на закат. Все подсказки по апартаментам и городу собраны ниже 👇',
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
    telegram: 'https://t.me/duutey',
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
    mapUrl: 'https://maps.yandex.ru/?text=Брест,+кафе+Brasileiro',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.0634&end-lon=23.7185&app=taxi',
    icon: '☕',
  },
  {
    id: 'productochka',
    category: 'food',
    title: 'Магазин «Продукточка»',
    badge: '1–2 мин пешком',
    badgeType: 'time',
    description: 'Буквально через дорогу: фермерская молочка, свежий хлеб, питьевая вода, бакалея и снеки.',
    mapUrl: 'https://maps.yandex.ru/?text=Брест,+ул.+Петра+Ивашутина',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.0625&end-lon=23.7190&app=taxi',
    icon: '🛒',
  },
  {
    id: 'papa-pizza',
    category: 'food',
    title: 'Пиццерия «Папа Пицца» & супермаркет «Санта»',
    badge: '5–7 мин пешком',
    badgeType: 'time',
    description: 'Ул. Рябиновая, 1А. Горячая пицца из печи (на вынос или в зале), кулинария, свежая выпечка.',
    mapUrl: 'https://maps.yandex.ru/?text=Брест,+ул.+Рябиновая,+1А',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.0645&end-lon=23.7258&app=taxi',
    icon: '🍕',
  },
  {
    id: 'park-1000',
    category: 'walk',
    title: 'Парк 1000-летия Бреста',
    badge: '5–7 мин пешком',
    badgeType: 'time',
    description: 'Через дорогу (ул. Екельчика): зелёные аллеи для утренних прогулок, храм и открытые теннисные корты.',
    mapUrl: 'https://maps.yandex.ru/?text=Брест,+парк+1000-летия',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.0610&end-lon=23.7250&app=taxi',
    icon: '🌳',
  },
  {
    id: 'fort-4',
    category: 'walk',
    title: 'Форт № 4 Брестской крепости',
    badge: '15 мин пешком / 4 мин авто',
    badgeType: 'time',
    description: 'Исторические земляные валы и капониры внешнего пояса крепости. Спокойный природный парк.',
    mapUrl: 'https://maps.yandex.ru/?text=Брест,+Форт+4',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.0722&end-lon=23.7088&app=taxi',
    icon: '🛡️',
  },
];

export const CITY_PLACES: GuidePlace[] = [
  {
    id: 'fortress',
    category: 'sights',
    title: 'Брестская крепость-герой & музей «Берестье»',
    badge: '12–14 мин на авто',
    badgeType: 'time',
    description: 'Монумент «Мужество», Холмские ворота и уникальный археологический музей XIII века. Бесплатная удобная парковка — у Северных ворот (ул. Зубачева).',
    mapUrl: 'https://maps.yandex.ru/?text=52.0882,23.6601',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.0882&end-lon=23.6601&app=taxi',
    icon: '⭐',
  },
  {
    id: 'sovetskaya',
    category: 'sights',
    title: 'Пешеходная ул. Советская (фонарщик)',
    badge: '12–14 мин на авто',
    badgeType: 'time',
    description: 'Главный променад города. Каждый вечер в сумерках фонарщик вручную зажигает керосиновые фонари. Парковка: ул. Гоголя / Орджоникидзе.',
    mapUrl: 'https://maps.yandex.ru/?text=52.086874,23.696092',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.086874&end-lon=23.696092&app=taxi',
    icon: '🕯️',
  },
  {
    id: 'gogol-allee',
    category: 'sights',
    title: 'Аллея кованых фонарей (ул. Гоголя)',
    badge: '12–14 мин на авто',
    badgeType: 'time',
    description: 'Десятки уникальных авторских кованых скульптур по мотивам повестей Гоголя («Нос», «Вечера на хуторе близ Диканьки»).',
    mapUrl: 'https://maps.yandex.ru/?text=52.0911,23.6936',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.0911&end-lon=23.6936&app=taxi',
    icon: '🎨',
  },
  {
    id: 'mukhavets',
    category: 'walk',
    title: 'Набережная Мухавца и теплоход «Гродно»',
    badge: '10–12 мин на авто',
    badgeType: 'time',
    description: 'Ивовые тенистые аллеи вдоль реки, прокат велосипедов и самокатов. В сезон от Городского сада (ул. Ленина, 2) отправляется прогулочный теплоход.',
    mapUrl: 'https://maps.yandex.ru/?text=52.0838,23.6874',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.0838&end-lon=23.6874&app=taxi',
    icon: '🚢',
  },
  {
    id: 'park-1may',
    category: 'food',
    title: 'Парк 1 Мая & Трактир «У озера»',
    badge: '12–14 мин на авто',
    badgeType: 'time',
    description: 'Аттракционы, лебединые пруды и знаменитый деревянный сруб с горячими белорусскими драниками в глиняных горшочках.',
    mapUrl: 'https://maps.yandex.ru/?text=52.0945,23.6811',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.0945&end-lon=23.6811&app=taxi',
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
    mapUrl: 'https://maps.yandex.ru/?text=52.5564,23.7997',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.5564&end-lon=23.7997&app=taxi',
    icon: '🌲',
  },
  {
    id: 'kossovo-ruzhany',
    category: 'trips',
    title: 'Коссовский замок & Ружанский дворец',
    badge: '135 км • 1 ч 30 мин',
    badgeType: 'accent',
    description: 'Неоготический дворец Пусловских с 12 башнями и романтичные руины дворцового комплекса магнатов Сапег («Белорусский Версаль»).',
    mapUrl: 'https://maps.yandex.ru/?text=52.7656,25.1216',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=52.7656&end-lon=25.1216&app=taxi',
    icon: '🏰',
  },
  {
    id: 'dipriz',
    category: 'trips',
    title: 'Парк животных в Барановичах («Диприз»)',
    badge: '205 км • 2 ч (трасса М1)',
    badgeType: 'accent',
    description: 'Огромный современный ландшафтный сафари-парк: ламы, альпаки, кенгуру и олени свободно подходят к посетителям. Рекомендуем закладывать от 4–5 часов.',
    mapUrl: 'https://maps.yandex.ru/?text=53.0984,26.0428',
    taxiUrl: 'https://3.redirect.appmetrica.yandex.com/route?end-lat=53.0984&end-lon=26.0428&app=taxi',
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
