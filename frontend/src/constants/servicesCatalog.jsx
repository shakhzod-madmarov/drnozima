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
    materials: {
      uz: "Germaniya 3M Filtek Z250/Z550, Yaponiya Tokuyama Estelite, Woodpecker Apeks-lokator, Raqamli viziograf",
      ru: "Фотополимеры 3M Filtek (Германия), Estelite Sigma Quick (Япония), апекслокатор Woodpecker, цифровой радиовизиограф",
      en: "Genuine 3M Filtek (Germany), Tokuyama Estelite (Japan), Woodpecker Apex Locator, High-Definition Digital Sensor",
    },
    symptoms: {
      uz: [
        "Tishda o'tkir yoki simillagan og'riq",
        "Issiq, sovuq yoki shirin narsalarga qattiq sezuvchanlik",
        "Tish emalining qorayishi yoki karies teshigi paydo bo'lishi",
        "Eski plomba tushib ketishi yoki sinishi",
        "Tish asabi yallig'lanishi (pulpit va periodontit)",
      ],
      ru: [
        "Острая или ноющая зубная боль при жевании и в покое",
        "Резкая реакция на холодное, горячее и сладкое",
        "Потемнение эмали или видимая кариозная полость",
        "Выпадение старой пломбы или скол стенки зуба",
        "Воспаление зубного нерва (пульпит, периодонтит)",
      ],
      en: [
        "Acute or throbbing toothache during chewing or at rest",
        "Sharp sensitivity to hot, cold, or sugary drinks",
        "Visible enamel darkening or cavity holes",
        "Loose, cracked, or dislodged dental fillings",
        "Root canal pulp inflammation (pulpitis or periodontitis)",
      ],
    },
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
    serviceFaq: [
      {
        q: {
          uz: "Tish asabini (nervini) olish og'riqlimi?",
          ru: "Больно ли удалять нерв (чистить каналы) зуба?",
          en: "Is root canal treatment (nerve removal) painful?",
        },
        a: {
          uz: "Mutlaqo og'riqsiz! Biz zamonaviy ikki bosqichli anesteziya qo'llaymiz. Dastlab milkka muzlatuvchi gel surtiladi, shuning uchun ukol sanchilishi ham sezilmaydi, so'ng kanal to'liq og'riqsiz tozalanadi.",
          ru: "Абсолютно безболезненно! Мы используем двухэтапную анестезию: сначала десна обезболивается гелем, а затем мягко вводится безопасный анестетик. Вы не почувствуете боли.",
          en: "Completely painless! We apply a gentle numbing topical gel prior to computerized micro-injection, ensuring complete anesthesia throughout the procedure.",
        },
      },
      {
        q: {
          uz: "Qo'yilgan plombaga qancha vaqt kafolat beriladi?",
          ru: "Какая гарантия предоставляется на световую пломбу?",
          en: "What warranty is provided on composite dental fillings?",
        },
        a: {
          uz: "Biz faqat 3M Filtek (Germaniya) va Estelite (Yaponiya) kabi jahon yetakchilari materiallaridan foydalanamiz va 5 yilgacha rasmiy klinik kafolat beramiz.",
          ru: "Мы работаем исключительно с оригинальными нано-композитами 3M Filtek и Estelite и предоставляем официальную клиническую гарантию до 5 лет.",
          en: "We exclusively utilize premium nano-hybrids from 3M Filtek (Germany) and Tokuyama Estelite (Japan), backed by up to a 5-year clinical warranty.",
        },
      },
    ],
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
    materials: {
      uz: "CAD/CAM Monolit Tsirkoniy (Germaniya/Yaponiya), Ivoclar IPS E-max Press, 3M RelyX mustahkam sement",
      ru: "Монолитный диоксид циркония CAD/CAM, стеклокерамика Ivoclar IPS E-max, фиксирующий цемент 3M RelyX",
      en: "CAD/CAM High-Translucency Monolithic Zirconia, Swiss Ivoclar IPS E-max, 3M RelyX Luting Cements",
    },
    symptoms: {
      uz: [
        "Tish toj qismining 50% dan ko'prog'i sinishi yoki yemirilishi",
        "Chaynash tishlarining yo'qligi yoki qattiq shikastlanishi",
        "Eski qoraygan metall qoplamalarni zamonaviy oq tsirkoniyga almashtirish",
        "Milk qorayishi va noqulay temir ta'mini bartaraf qilish",
        "Tishlarning tabiiy balandligi va chaynash qobiliyatini tiklash",
      ],
      ru: [
        "Разрушение коронковой части зуба более чем на 50%",
        "Отсутствие одного или нескольких жевательных зубов",
        "Замена старых неэстетичных металлокерамических коронок на цирконий",
        "Посинение десны и металлический привкус во рту",
        "Восстановление правильного прикуса и жевательной функции",
      ],
      en: [
        "Severe tooth crown destruction exceeding 50%",
        "Missing or fractured chewing molars and premolars",
        "Replacing outdated dark metal-fused crowns with monolithic zirconia",
        "Dark gum lines or allergic reactions caused by old metal alloys",
        "Restoring proper bite height and natural masticatory chewing balance",
      ],
    },
    highlights: {
      uz: [
        "Milk ko'karishi va temir ta'mi mutlaqo bo'lmaydi (100% biomoslashuvchan)",
        "CAD/CAM 3D raqamli frezalash orqali mikron aniqlikda tayyorlash",
        "Vaqtinchalik estetik karonka o'rnatib beriladi",
        "Yuqori chaynash bosimiga chidamli monolit tsirkoniy",
      ],
      ru: [
        "Никакого посинения десны и металлического привкуса (100% биосовместимость)",
        "Цифровое CAD/CAM фрезерование с микронной точностью прилегания",
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
    serviceFaq: [
      {
        q: {
          uz: "Tsirkoniy karonka metallokeramikadan nimasi bilan yaxshiroq?",
          ru: "Чем коронки из циркония лучше металлокерамики?",
          en: "Why are zirconia crowns superior to metal-fused ceramic?",
        },
        a: {
          uz: "Tsirkoniyda metall umuman yo'q. U tabiiy tish kabi yorug'lik o'tkazadi, milkni qoraytirmaydi, allergiya chaqirmaydi va ancha mustahkamroq (1200 MPa).",
          ru: "Диоксид циркония не содержит металла, пропускает свет как живая эмаль, не вызывает аллергии и потемнения десны и обладает прочностью свыше 1200 МПа.",
          en: "Zirconia is completely metal-free and biocompatible. It mimics natural enamel translucency, eliminates dark gum shadows, and delivers exceptional 1200+ MPa durability.",
        },
      },
      {
        q: {
          uz: "Tsirkon karonka tayyor bo'lishi qancha vaqt oladi?",
          ru: "Сколько времени занимает установка циркониевой коронки?",
          en: "How long does it take to make and fit a zirconia crown?",
        },
        a: {
          uz: "Zamonaviy CAD/CAM 3D laboratoriyasi yordamida karonkalar atigi 2-3 kunda tayyor bo'ladi. Shu vaqt ichida sizga estetik vaqtinchalik karonka qo'yib beriladi.",
          ru: "Благодаря цифровому CAD/CAM сканированию и фрезеровке коронка изготавливается всего за 2–3 дня с установкой временной коронки.",
          en: "Thanks to digital CAD/CAM milling, custom crowns are completed in just 2–3 business days with aesthetic temporaries provided.",
        },
      },
    ],
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
    materials: {
      uz: "Shveysariya Ivoclar Vivadent IPS E-max Press (disilikat litiy), Estelite Asteria badiiy emali",
      ru: "Стеклокерамика IPS E-max Ivoclar Vivadent (Швейцария), нанокомпозиты Estelite Asteria (Япония)",
      en: "Swiss Ivoclar Vivadent IPS E-max Lithium Disilicate Glass-Ceramic, Tokuyama Estelite Asteria",
    },
    symptoms: {
      uz: [
        "Old tishlar orasidagi noestetik ochiqliklar (diastema va trema)",
        "Oqartirish vositalariga berilmaydigan tish sarg'ayishi yoki emal dog'lari",
        "Old tish emalining sinishi, darz ketishi yoki notekis qirralar",
        "Breketsiz kichik egriliklar va tish o'lchamlarini tekislash",
        "Mutlaqo tabiiy va jozibali «Gollivud tabassumi»ga ega bo'lish",
      ],
      ru: [
        "Щели и промежутки между передними зубами (диастема, тремы)",
        "Стойкое потемнение эмали, устойчивое к отбеливанию",
        "Сколы, трещины и неровный режущий край передних зубов",
        "Незначительная кривизна зубного ряда без ношения брекетов",
        "Желание обрести безупречную, естественную «голливудскую улыбку»",
      ],
      en: [
        "Gaps and spaces between front incisors (diastema and trema)",
        "Deep intrinsic enamel staining resistant to chemical whitening",
        "Chipped, worn-down, fractured, or uneven front tooth edges",
        "Minor misalignment or shape irregularities without braces",
        "Desire for a dazzling, natural, camera-ready Hollywood smile",
      ],
    },
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
    serviceFaq: [
      {
        q: {
          uz: "Vinir qo'yish uchun tishlar qattiq charxlanadimi?",
          ru: "Сильно ли обтачиваются зубы под виниры E-max?",
          en: "Are natural teeth heavily ground down for E-max veneers?",
        },
        a: {
          uz: "Yo'q! Biz ultra-yupqa (0.3 mm) Ivoclar E-max vinirlarini qo'llaymiz. Emal yuzasiga faqat minimal ishlov beriladi yoki ko'p hollarda charxlamasdan o'rnatiladi.",
          ru: "Нет! Мы используем ультратонкие виниры E-max толщиной всего 0.3 мм, что требует лишь микро-обработки в пределах поверхностного слоя эмали.",
          en: "No! Ultra-thin 0.3mm E-max ceramics require minimal micro-preparation strictly confined to the enamel layer, preserving tooth vitality.",
        },
      },
      {
        q: {
          uz: "Vinirlar vaqt o'tishi bilan sarg'ayadimi?",
          ru: "Темнеют ли керамические виниры со временем?",
          en: "Do porcelain veneers stain or discolor over time?",
        },
        a: {
          uz: "Mutlaqo sarg'aymaydi! E-max shisha-keramikasi g'ovaksiz shaffof tuzilishga ega bo'lib, qahva, choy yoki tamakidan o'z rangini hech qachon yo'qotmaydi.",
          ru: "Абсолютно нет! Стеклокерамика E-max не имеет микропор и не впитывает красители от кофе, чая или табака на протяжении десятилетий.",
          en: "Never! Non-porous lithium disilicate glass-ceramic is impervious to staining agents like coffee, red wine, and tea throughout its lifetime.",
        },
      },
    ],
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
    materials: {
      uz: "Osstem TS III SA (Janubiy Koreya), Straumann SLActive (Shveysariya), Biotitan qotishmasi",
      ru: "Имплантаты Osstem TS III (Южная Корея), Straumann (Швейцария), биосовместимый титан Grade 4/5",
      en: "Osstem TS III (South Korea), Straumann SLActive (Switzerland), Medical Grade Biocompatible Titanium",
    },
    symptoms: {
      uz: [
        "Bir yoki bir nechta tishlarning yo'qotilishi",
        "Qo'shni sog'lom tishlarni ko'prik protez uchun charxlashni istamaslik",
        "Olinadigan sun'iy protezlar o'rniga o'z tishingizdek mustahkam tishlar",
        "Jag' suyagi yemirilishining oldini olish va chaynashni tiklash",
      ],
      ru: [
        "Отсутствие одного или нескольких зубов",
        "Нежелание обтачивать соседние здоровые зубы под мостовидный протез",
        "Замена неудобных съёмных челюстей на несъёмные комфортные зубы",
        "Предотвращение атрофии челюстной кости и восстановление овала лица",
      ],
      en: [
        "Loss of a single tooth or multiple consecutive teeth",
        "Refusal to compromise and grind down adjacent healthy teeth for a bridge",
        "Upgrading from loose, uncomfortable removable dentures to permanent teeth",
        "Preventing jawbone shrinkage and restoring youthful facial support",
      ],
    },
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
    serviceFaq: [
      {
        q: {
          uz: "Implant qo'yish jarayoni og'riqlimi?",
          ru: "Больно ли устанавливать зубной имплантат?",
          en: "Is surgical dental implant placement painful?",
        },
        a: {
          uz: "Mutlaqo og'riqsiz! Jag' suyagida nerv retseptorlari juda kam bo'ladi. Mahalliy anesteziya ostida implant qo'yish oddiy tish olishdan ham osonroq va og'riqsizroq o'tadi.",
          ru: "Процедура абсолютно безболезненна. В костной ткани практически нет болевых рецепторов, поэтому под местной анестезией установка импланта проходит комфортнее обычного удаления.",
          en: "Completely painless! Bone tissue has few sensory nerve endings. Under effective local anesthesia, implant placement is often gentler than standard tooth extraction.",
        },
      },
      {
        q: {
          uz: "Implant tushib qolmaydimi, birikadimi?",
          ru: "Приживется ли имплантат? Каков процент успеха?",
          en: "What is the osseointegration success rate for implants?",
        },
        a: {
          uz: "Biz faqat Osstem va Straumann biotitan implantlarini o'rnatamiz, ularning suyakka birikish ko'rsatkichi 99.2% dan yuqori va ishlab chiqaruvchi tomonidan umrbod kafolatlanadi.",
          ru: "Успешная приживаемость оригинальных титановых имплантатов Osstem и Straumann составляет более 99.2% с пожизненной гарантией от производителя.",
          en: "Original Osstem and Straumann titanium implants feature exceptional osseointegration exceeding 99.2%, backed by lifetime manufacturer warranties.",
        },
      },
    ],
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
    materials: {
      uz: "Philips ZOOM 4 WhiteSpeed sovuq LED nuri, Relief ACP ftorli himoya geli, EMS AirFlow Plus kukunlari",
      ru: "Аппарат холодного света Philips ZOOM 4 WhiteSpeed, гель Relief ACP, оригинальный порошок EMS AirFlow",
      en: "Philips ZOOM 4 WhiteSpeed Cold-LED, Relief ACP Remineralizing Gel, Swiss EMS AirFlow Plus Erythritol Powder",
    },
    symptoms: {
      uz: [
        "Qahva, choy, tamaki va oziq-ovqat bo'yoqlaridan tishlarning sarg'ayishi",
        "Tish toshlari, qattiq karashlar va milk qonashi",
        "Og'izdan noxush hid kelishi (bakterial karashlar sababli)",
        "To'y yoki muhim tadbir oldidan yorqin oppoq tabassumga ega bo'lish",
      ],
      ru: [
        "Пожелтение эмали от частого употребления кофе, чая, курения",
        "Образование зубного камня и кровоточивость десен",
        "Неприятный запах изо рта, вызванный бактериальным налётом",
        "Желание быстро осветлить зубы перед свадьбой, фотосессией или событием",
      ],
      en: [
        "Yellowish or darkened enamel from coffee, tea, berries, or smoking",
        "Hardened dental calculus (tartar) and gingival bleeding",
        "Persistent halitosis (bad breath) resulting from plaque accumulation",
        "Desire for an instantly brighter, whiter smile before a wedding or milestone",
      ],
    },
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
    serviceFaq: [
      {
        q: {
          uz: "Lazerli oqartirish tish emaliga zarar yetkazmaydimi?",
          ru: "Вредит ли лазерное отбеливание ZOOM 4 эмали зубов?",
          en: "Does cold-LED teeth whitening damage tooth enamel?",
        },
        a: {
          uz: "Mutlaqo zarar yetkazmaydi! Philips ZOOM 4 sovuq LED nuri bilan ishlaydi, emalni qizdirmaydi. Muolaja so'ngida Relief ACP geli surtilib, emal yanada mustahkamlanadi.",
          ru: "Совершенно безопасно! Система ZOOM 4 использует холодный свет и не перегревает зубные ткани, а минерализующий гель укрепляет структуру эмали.",
          en: "Completely safe! Philips ZOOM 4 uses cold LED light preventing pulp heating, followed by Relief ACP gel that remineralizes and hardens enamel.",
        },
      },
      {
        q: {
          uz: "Oqartirish natijasi qancha vaqt saqlanadi?",
          ru: "Как долго сохраняется результат отбеливания?",
          en: "How long does the teeth whitening result last?",
        },
        a: {
          uz: "Natija 1 yildan 3 yilgacha saqlanadi. To'g'ri gigiyena va muolajadan keyingi dastlabki kunlarda «oq parhez»ga rioya qilish tavsiya etiladi.",
          ru: "Эффект сохраняется от 1 до 3 лет при соблюдении базовой гигиены и «белой диеты» в первые дни после процедуры.",
          en: "The radiant white shade typically lasts 1 to 3 years with standard oral hygiene and avoiding staining agents during the first 48 hours.",
        },
      },
    ],
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
    materials: {
      uz: "Septanest / Ubistesin (Fransiya / Germaniya) anestetiklari, Atravmatik luxatorlar, Kollagen gemostatik gubka",
      ru: "Анестетики Ubistesin (Германия) и Septanest (Франция), атравматичные люксаторы, коллагеновая гемостатическая губка",
      en: "Premium Articaine 4% Anesthetics (Ubistesin & Septanest), Atraumatic Periotomes, Collagen Hemostatic Plugs",
    },
    symptoms: {
      uz: [
        "Aql tishi (8-tish) milk ostida qolib yallig'lanishi va og'rishi (perikoronarit)",
        "Qo'shni 7-tishni surib, tishlar qatorini buzayotgan aql tishlari",
        "Terapevtik usulda tiklab bo'lmaydigan darajada chirigan tish ildizlari",
        "Ildiz uchida kista yoki surunkali yiringli yallig'lanish o'choqlari",
      ],
      ru: [
        "Боль, отек десны и воспаление вокруг режущегося зуба мудрости",
        "Давление восьмёрки на соседний зуб и скученность зубного ряда",
        "Сильно разрушенные корни зуба, не подлежащие реставрации",
        "Хроническое воспаление, гранулема или киста на верхушке корня",
      ],
      en: [
        "Painful swelling around partially erupted wisdom teeth (pericoronitis)",
        "Impacted third molar crowding and damaging adjacent second molars",
        "Severely decayed or fractured roots unsuitable for crown restoration",
        "Persistent root tip infection, granuloma, or odontogenic bone cyst",
      ],
    },
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
    serviceFaq: [
      {
        q: {
          uz: "Aql tishini olish og'riqlimi?",
          ru: "Больно ли удалять зуб мудрости?",
          en: "Is wisdom tooth extraction painful?",
        },
        a: {
          uz: "Mutlaqo og'riqsiz! Biz kuchaytirilgan Yevropa anestetiklaridan foydalanamiz. Siz hech qanday og'riq sezmaysiz, faqat yengil teginish seziladi.",
          ru: "Совершенно безболезненно. Современные анестетики полностью отключают чувствительность на время всей манипуляции.",
          en: "Zero pain! Deep local anesthesia completely desensitizes the surgical site; you will only feel minor gentle pressure.",
        },
      },
      {
        q: {
          uz: "Tish olingan joy qancha vaqtda bitadi?",
          ru: "Как быстро заживает лунка после удаления?",
          en: "How quickly does the extraction socket heal?",
        },
        a: {
          uz: "Atravmatik uslub va maxsus kollagen gubka qo'llashimiz sababli shish bo'lmaydi va milkingiz 2-3 kunda qulay holatga qaytadi.",
          ru: "Благодаря атравматичной методике и гемостатической губке заживление проходит без выраженного отека за 2–3 дня.",
          en: "Thanks to our bone-preserving atraumatic technique and collagen plug, the socket heals comfortably without heavy swelling within 2–3 days.",
        },
      },
    ],
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
    materials: {
      uz: "Raqamli CMOS viziograf sensori, 0.02 sek ultra-qisqa ekspozitsiya, Yuqori aniqlikdagi ekran",
      ru: "Цифровой CMOS сенсор высокого разрешения, время экспозиции 0.02 секунды, снижение дозы на 90%",
      en: "Ultra-High Sensitivity CMOS Digital Sensor, 0.02s Ultra-Short Pulse, 90% Lower Dose Than Analog Film",
    },
    symptoms: {
      uz: [
        "Tashqi ko'rinishda ko'rinmaydigan yashirin va kontakt karies shubhasi",
        "Ildiz kanallarining aniq uzunligi va tuzilishini aniqlash zarurati",
        "Ildiz atrofidagi suyak to'qimasi yallig'lanishi va kistalarni tekshirish",
        "Muolajadan keyingi plomba va karonkaning aniq o'rnashishini nazorat qilish",
      ],
      ru: [
        "Подозрение на скрытый кариес между зубами (контактный кариес)",
        "Необходимость точного измерения длины и кривизны корневых каналов",
        "Диагностика кист, гранулем и воспалений в околокорневой кости",
        "Контроль качества пломбировки каналов и прилегания коронок",
      ],
      en: [
        "Suspected hidden or interproximal contact cavities between teeth",
        "Need for precise working length measurement of curved root canals",
        "Evaluating bone density, periapical cysts, and asymptomatic infections",
        "Post-procedure verification of filling depth and crown margin seal",
      ],
    },
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
    serviceFaq: [
      {
        q: {
          uz: "Raqamli viziograf nurlanishi xavflimi?",
          ru: "Опасна ли лучевая нагрузка при цифровом визиографе?",
          en: "Is the radiation exposure from a digital radiovisiograph harmful?",
        },
        a: {
          uz: "Mutlaqo xavfsiz! Raqamli datchik oddiy plyonkali rentgenga nisbatan 90% kam nurlanish beradi (atigi 0.02 soniya). Bu kun davomida quyoshdan olinadigan tabiiy nurlanishdan ham kamroq.",
          ru: "Абсолютно безопасно. Цифровой датчик снижает лучевую нагрузку на 90% по сравнению с пленочным аппаратом, экспозиция длится доли секунды.",
          en: "Extremely safe! Digital CMOS sensors require 90% less radiation than conventional analog film, equivalent to less than a few minutes of natural sunlight.",
        },
      },
      {
        q: {
          uz: "Surat natijasi darhol chiqadimi?",
          ru: "Как быстро я получу снимок зуба?",
          en: "How quickly are the digital imaging results ready?",
        },
        a: {
          uz: "Ha, surat atigi 2 soniyada monitorda yuqori aniqlikda ko'rinadi va shifokor bilan birga tish holatini bevosita tahlil qilishingiz mumkin.",
          ru: "Снимок появляется на мониторе за 2 секунды, и доктор сразу подробно разъяснит вам состояние каждого зуба.",
          en: "The high-definition digital image appears on the diagnostic monitor in 2 seconds for immediate real-time review with Dr. Nozima.",
        },
      },
    ],
  },
];
