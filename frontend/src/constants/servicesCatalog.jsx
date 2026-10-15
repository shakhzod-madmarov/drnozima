import {
  IconTherapeuticTooth,
  IconVeneerTooth,
  IconToothCrown,
  IconDentalImplant,
  IconLaserWhitening,
  IconAtraumaticSurgery,
  IconDigitalXray,
} from "../components/MedicalIcons";
import { assets } from "../assets/assets";

export const SERVICES_CATALOG = [
  {
    id: "tish-davolash",
    icon: <IconTherapeuticTooth className="w-7 h-7" />,
    image: assets.service_therapy,
    category: { uz: "Terapiya va Endodontiya", ru: "Терапия и Эндодонтия", en: "Restorative & Endodontics" },
    title: {
      uz: "Og'riqsiz Tish Davolash va Fotopolimer Plombalar",
      ru: "Безболезненное Лечение Зубов и Нано-Пломбы",
      en: "Painless Tooth Decay & Root Canal Therapy",
    },
    shortDesc: {
      uz: "O'tkir tish og'rig'ini 1-qabuldayoq bartaraf etish, karies, pulpit va periodontitni mikroskopik aniqlikda davolash.",
      ru: "Снятие острой боли за 1 визит, лечение кариеса, пульпита и периодонтита с японскими и немецкими пломбами.",
      en: "Immediate toothache relief and precision treatment of cavities, pulpitis, and root canals using German & Japanese composites.",
    },
    duration: { uz: "30 – 50 daqiqa", ru: "30 – 50 минут", en: "30 – 50 mins" },
    warranty: { uz: "5 yilgacha kafolat", ru: "Гарантия до 5 лет", en: "Up to 5-year warranty" },
    highlights: {
      uz: [
        "Germaniya (3M Filtek) va Yaponiya (Estelite) fotopolimer plombalari",
        "2 bosqichli anesteziya: ukol og'rig'i ham sezilmaydi",
        "Apeks-lokator va raqamli rentgen nazorati ostida kanal tozalash",
        "Tishning tabiiy chaynash yuzasi va rangini 100% tiklash",
      ],
      ru: [
        "Оригинальные фотополимеры 3M Filtek (Германия) и Estelite (Япония)",
        "Двухэтапное обезболивание: гель + анестетик без боли от укола",
        "Пломбировка корневых каналов под контролем апекслокатора и рентгена",
        "Полное восстановление анатомической формы и цвета зуба",
      ],
      en: [
        "Genuine 3M Filtek (Germany) & Estelite (Japan) nano-composites",
        "Two-step anesthesia: numbing gel + painless micro-injection",
        "Root canal therapy guided by electronic apex locator & digital X-ray",
        "Seamless restoration of natural tooth anatomy and shade",
      ],
    },
  },
  {
    id: "ortopediya",
    icon: <IconToothCrown className="w-7 h-7 text-[#086288]" />,
    image: assets.service_crowns,
    category: { uz: "Ortopedik Stomatologiya", ru: "Ортопедия и Протезирование", en: "Prosthodontics" },
    title: {
      uz: "Tsirkoniy (Zirconia) Karonkalar va Ko'prik Protezlar",
      ru: "Циркониевые Коронки и Современное Протезирование",
      en: "Zirconia Crowns & Modern Dental Bridges",
    },
    shortDesc: {
      uz: "Sinib ketgan yoki kuchli yemirilgan tishlarni metall-siz, allergiya chaqirmaydigan mustahkam tsirkoniy va E-max qoplamalar bilan tiklash.",
      ru: "Надёжное восстановление разрушенных зубов биосовместимыми безметалловыми коронками из диоксида циркония.",
      en: "Biocompatible, metal-free zirconia and E-max crowns engineered for strength and natural aesthetics.",
    },
    duration: { uz: "2 – 3 kun", ru: "2 – 3 дня", en: "2 – 3 days" },
    warranty: { uz: "10 yilgacha kafolat", ru: "Гарантия до 10 лет", en: "Up to 10-year warranty" },
    highlights: {
      uz: [
        "Milk ko'karishi va temir ta'mi mutlaqo bo'lmaydi (100% biomoslashuvchan)",
        "CAD/CAM 3D raqamli skanerlash orqali mikron aniqlikda tayyorlash",
        "Vaqtinchalik estetik karonka o'rnatib beriladi",
        "Yuqori chaynash bosimiga chidamli monolit tsirkoniy",
      ],
      ru: [
        "Никакого посинения десны и металлического привкуса (100% биосовместимость)",
        "Цифровое CAD/CAM моделирование с микронной точностью прилегания",
        "Временные эстетические коронки на период изготовления",
        "Высокая прочность для жевательных и передних зубов",
      ],
      en: [
        "Zero dark gum lines or metallic taste (100% biocompatible zirconia)",
        "Digital CAD/CAM 3D milling for micron-level margin precision",
        "Temporary aesthetic crowns provided during fabrication",
        "High flexural strength suitable for both front and molar teeth",
      ],
    },
  },
  {
    id: "estetik-stomatologiya",
    icon: <IconVeneerTooth className="w-7 h-7" />,
    image: assets.service_veneers,
    category: { uz: "Estetik Stomatologiya", ru: "Эстетическая Стоматология", en: "Cosmetic Dentistry" },
    title: {
      uz: "E-max Keramik Vinirlar va Badiiy Restavratsiya",
      ru: "Керамические Виниры E-max и Художественная Реставрация",
      en: "E-max Porcelain Veneers & Smile Makeover",
    },
    shortDesc: {
      uz: "Old tishlar shaklini, rangi va tishlar orasidagi ochiqliklarni (diastema) 1–2 tashrifda tabiiy «Gollivud tabassumi» darajasiga keltirish.",
      ru: "Идеальная зона улыбки за 1–2 визита: ультратонкие керамические виниры E-max и эстетическая реставрация передних зубов.",
      en: "Achieve a natural Hollywood smile in 1–2 visits with ultra-thin E-max ceramic veneers and artistic composite bonding.",
    },
    duration: { uz: "1 – 2 tashrif", ru: "1 – 2 визита", en: "1 – 2 visits" },
    warranty: { uz: "10+ yil xizmat muddati", ru: "Срок службы 10+ лет", en: "10+ years durability" },
    highlights: {
      uz: [
        "0.3 mm ultra-yupqa E-max press-keramika vinirlari",
        "Tabiiy tish emalidek shaffoflik va yorug'lik o'tkazuvchanlik",
        "Qahva va choydan rangini o'zgartirmaydi",
        "Yuz tuzilishiga mos individual tabassum dizayni",
      ],
      ru: [
        "Ультратонкие виниры E-max (0.3 мм) с минимальной обработкой эмали",
        "Естественная светопроницаемость и блеск живых зубов",
        "Устойчивость к окрашиванию от кофе и чая на долгие годы",
        "Индивидуальный подбор формы и оттенка под черты лица",
      ],
      en: [
        "Ultra-thin 0.3mm E-max press-ceramic veneers with minimal prep",
        "Natural enamel translucency and lifelike light reflection",
        "Permanent stain resistance against coffee, tea, and berries",
        "Personalized smile design tailored to your facial proportions",
      ],
    },
  },
  {
    id: "implantatsiya",
    icon: <IconDentalImplant className="w-7 h-7" />,
    image: assets.service_implant,
    category: { uz: "Xirurgik Implantologiya", ru: "Дентальная Имплантация", en: "Dental Implantology" },
    title: {
      uz: "Tish Implantatsiyasi (Osstem Koreya / Straumann Shveysariya)",
      ru: "Имплантация Зубов (Osstem Корея / Straumann Швейцария)",
      en: "Titanium Dental Implants (Osstem & Straumann)",
    },
    shortDesc: {
      uz: "Yo'qotilgan bir yoki bir nechta tishlarni qo'shni sog'lom tishlarni charxlamasdan 20 daqiqada og'riqsiz qayta tiklash.",
      ru: "Восстановление одного или нескольких утраченных зубов за 20 минут без боли и без обточки соседних зубов.",
      en: "Replace single or multiple missing teeth in 20 minutes without grinding adjacent healthy teeth.",
    },
    duration: { uz: "20 – 30 daqiqa", ru: "20 – 30 минут", en: "20 – 30 mins" },
    warranty: { uz: "Umrbod implant kafolati", ru: "Пожизненная гарантия", en: "Lifetime implant warranty" },
    highlights: {
      uz: [
        "99.2% suyakka muvaffaqiyatli birikish ko'rsatkichi",
        "Qo'shni sog'lom tishlar charxlanmaydi va asrab qolinadi",
        "Original Osstem (Janubiy Koreya) va Straumann (Shveysariya) sertifikati",
        "Jag' suyagi yemirilishining oldini oladi",
      ],
      ru: [
        "99.2% успешная приживаемость титановых имплантатов",
        "Соседние здоровые зубы остаются полностью нетронутыми",
        "Оригинальный паспорт имплантата Osstem (Корея) / Straumann (Швейцария)",
        "Предотвращает атрофию костной ткани челюсти",
      ],
      en: [
        "99.2% clinical osseointegration success rate",
        "Adjacent healthy teeth remain completely untouched",
        "Official serial passport for Osstem (Korea) & Straumann (Switzerland)",
        "Preserves natural jawbone volume and facial contour",
      ],
    },
  },
  {
    id: "tish-oqartirish",
    icon: <IconLaserWhitening className="w-7 h-7" />,
    image: assets.service_whitening,
    category: { uz: "Oqartirish va Profilaktika", ru: "Отбеливание и Гигиена", en: "Whitening & Prophylaxis" },
    title: {
      uz: "Philips ZOOM 4 Lazerli Oqartirish va AirFlow Gigiyena",
      ru: "Лазерное Отбеливание Philips ZOOM 4 и Чистка AirFlow",
      en: "Philips ZOOM 4 Laser Whitening & AirFlow Cleaning",
    },
    shortDesc: {
      uz: "Sovuq LED texnologiyasi yordamida emalga zarar yetkazmasdan tishlarni 8–10 tongacha oqartirish va ultratovushli tozalash.",
      ru: "Безопасное осветление эмали на 8–10 тонов холодным светом Philips ZOOM 4 и удаление зубного камня AirFlow.",
      en: "Cold-LED Philips ZOOM 4 whitening up to 8–10 shades brighter plus ultrasonic AirFlow tartar removal.",
    },
    duration: { uz: "45 daqiqa", ru: "45 минут", en: "45 mins" },
    warranty: { uz: "1–3 yil natija", ru: "Эффект 1–3 года", en: "1–3 years brightness" },
    highlights: {
      uz: [
        "Emalni qizdirmaydigan sovuq LED nuri va ACP himoya geli",
        "Ultratovush + AirFlow orqali milk osti va usti toshlarini tozalash",
        "Muolajadan so'ng ftorli remineralizatsiya (sezuvchanlik bo'lmaydi)",
        "1 seansda yorqin va toza nafas",
      ],
      ru: [
        "Холодный LED-свет без перегрева нерва и укрепляющий гель ACP",
        "Ультразвуковой скейлинг + швейцарский порошок AirFlow",
        "Глубокое фторирование эмали после процедуры против чувствительности",
        "Видимый результат сразу после первого визита",
      ],
      en: [
        "Cold-LED light activation with ACP enamel-protecting gel",
        "Ultrasonic scaling + gentle Swiss AirFlow stain polishing",
        "Post-treatment fluoride remineralization for zero sensitivity",
        "Instant radiant results in a single 45-minute appointment",
      ],
    },
  },
  {
    id: "xirurgiya",
    icon: <IconAtraumaticSurgery className="w-7 h-7" />,
    image: assets.service_surgery,
    category: { uz: "Jarrohlik Stomatologiyasi", ru: "Хирургическая Стоматология", en: "Oral Surgery" },
    title: {
      uz: "Atravmatik Og'riqsiz Tish Olish (Aql Tishlari)",
      ru: "Атравматичное Удаление Зубов и Зубов Мудрости",
      en: "Atraumatic Painless Tooth & Wisdom Tooth Extraction",
    },
    shortDesc: {
      uz: "Oddiy, murakkab va noto'g'ri o'sgan aql tishlarini (8-tish) suyak to'qimasini shikastlamasdan og'riqsiz olish.",
      ru: "Бережное удаление сложных и ретинированных зубов мудрости без боли, страха и послеоперационных отёков.",
      en: "Gentle microsurgical extraction of damaged teeth and impacted wisdom teeth with rapid, swelling-free healing.",
    },
    duration: { uz: "15 – 30 daqiqa", ru: "15 – 30 минут", en: "15 – 30 mins" },
    warranty: { uz: "Tez va shishsiz bitish", ru: "Быстрое заживление", en: "Rapid healing protocol" },
    highlights: {
      uz: [
        "Kuchaytirilgan anesteziya — jarayon davomida 0% og'riq",
        "Kelajakda implant qo'yish uchun suyak devorlarini asrab qolish",
        "Tez bitiruvchi kollagen gubka va o'z-o'zidan so'riluvchi choklar",
        "Shifokorning shaxsiy nazorati va parvarish bo'yicha yo'riqnoma",
      ],
      ru: [
        "Усиленная анестезия — полное отсутствие боли во время процедуры",
        "Сохранение костной лунки для возможной будущей имплантации",
        "Коллагеновая гемостатическая губка для быстрого заживления",
        "Послеоперационное сопровождение и рекомендации врача",
      ],
      en: [
        "Complete local anesthesia ensuring 0% pain during extraction",
        "Socket bone preservation for future implant readiness",
        "Collagen healing plug placement for smooth, swelling-free recovery",
        "Direct post-op follow-up care from Dr. Nozima",
      ],
    },
  },
  {
    id: "rentgen-diagnostika",
    icon: <IconDigitalXray className="w-7 h-7 text-[#086288]" />,
    image: assets.service_xray,
    category: { uz: "Raqamli Diagnostika", ru: "Цифровая Диагностика", en: "Digital Diagnostics" },
    title: {
      uz: "Raqamli Viziografiya va Tish Rentgen Diagnostikasi",
      ru: "Цифровая Рентген-Диагностика (Радиовизиограф)",
      en: "Low-Dose Digital Dental X-Ray & Diagnostics",
    },
    shortDesc: {
      uz: "Oddiy rentgenga qaraganda 90% kam nurlanishli zamonaviy raqamli sensor yordamida ildiz kanallari va yashirin kariesni 2 soniyada aniqlash.",
      ru: "Мгновенный прицельный снимок на цифровом визиографе с лучевой нагрузкой на 90% ниже плёночного рентгена.",
      en: "High-resolution digital X-ray sensor with 90% lower radiation for instant root canal and bone assessment.",
    },
    duration: { uz: "2 daqiqa", ru: "2 минуты", en: "2 mins" },
    warranty: { uz: "100% xavfsiz", ru: "100% безопасно", en: "90% lower radiation" },
    highlights: {
      uz: [
        "Tasvir 2 soniyada kompyuter ekraniga yuqori aniqlikda chiqadi",
        "Kanal uzunligi va plomba sifatini 100% nazorat qilish",
        "Bolalar va kattalar uchun minimal xavfsiz nurlanish",
        "Yashirin karies va ildiz kistasini erta bosqichda topish",
      ],
      ru: [
        "Снимок высокой чёткости появляется на экране за 2 секунды",
        "100% контроль качества пломбировки корневых каналов",
        "Минимальная безопасная доза излучения",
        "Точное выявление скрытого кариеса и воспалений у корня",
      ],
      en: [
        "Crystal-clear diagnostic image on screen in 2 seconds",
        "100% precision verification of root canal filling depth",
        "Ultra-low radiation safe for routine diagnostics",
        "Early detection of hidden interproximal cavities and cysts",
      ],
    },
  },
];
