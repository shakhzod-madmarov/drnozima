import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://drnozima.uz";

const years = getYearsOfExperience();

/**
 * Per-page, per-language SEO copy optimized for Google, Yandex, and AI Search Engines.
 * Highlights: Female Dentist in Andijan, exact physical address (A.Fitrat 251B),
 * Sevdo Denta clinic, and 7 years of clinical experience.
 */
export const PAGE_SEO = {
  home: {
    uz: {
      title: "Dr. Nozima Baxtiyarovna — Ayol Stomatolog va Ortoped Andijon | Sevdo Denta",
      description: `Andijon shahri A.Fitrat 251B «Sevdo Denta» klinikasida tajribali ayol stomatolog-terapevt va ortoped Dr. Nozima Baxtiyarovna. ${years} yillik tajriba, ADTI bitiruvchisi, 100% og'riqsiz tish davolash, tsirkoniy karonka, E-max vinirlar va estetik restavratsiya. Tel: +998 (91) 619-95-00.`,
    },
    ru: {
      title: "Д-р Нозима Бахтияровна — Женщина-Стоматолог и Ортопед в Андижане | Sevdo Denta",
      description: `Квалифицированный врач-стоматолог женщина в Андижане Д-р Нозима Бахтияровна (клиника «Sevdo Denta», ул. А. Фитрата, 251Б). ${years} лет опыта, выпускница АГМИ, 100% безболезненное лечение кариеса и каналов, циркониевые коронки, виниры E-max. Тел: +998 (91) 619-95-00.`,
    },
    en: {
      title: "Dr. Nozima Baxtiyarovna — Female Dentist & Prosthodontist in Andijan | Sevdo Denta",
      description: `Certified female dentist Dr. Nozima Baxtiyarovna at «Sevdo Denta» Clinic, 251B A. Fitrat Street, Andijan. ${years} years of clinical excellence, ADTI graduate, 100% painless restorative dental care, zirconia crowns, and E-max veneers. Tel: +998 (91) 619-95-00.`,
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Ayol Stomatolog Dr. Nozima | Sevdo Denta Andijon",
      description:
        "Andijon A.Fitrat 251B «Sevdo Denta»da 100% og'riqsiz tish davolash, tsirkoniy karonka va ko'priklar, E-max vinirlar, badiiy kompozit restavratsiya, implantatsiya va tish oqartirish.",
    },
    ru: {
      title: "Стоматологические Услуги — Врач-Стоматолог Женщина Д-р Нозима | Андижан",
      description:
        "Полный спектр стоматологических услуг у врача-стоматолога женщины в Андижане (ул. А. Фитрата 251Б): лечение без боли, циркониевые коронки, виниры E-max, профессиональная гигиена и отбеливание.",
    },
    en: {
      title: "Dental Services in Andijan — Female Dentist Dr. Nozima Baxtiyarovna | Sevdo Denta",
      description:
        "Comprehensive painless dentistry in Andijan: restorative fillings, root canals, zirconia crowns, E-max veneers, implants, and oral prophylaxis at 251B A. Fitrat St.",
    },
  },
  about: {
    uz: {
      title: `Dr. Nozima Baxtiyarovna Haqida — Andijonda Yetakchi Ayol Stomatolog (${years} Yil Tajriba)`,
      description: `Dr. Nozima Baxtiyarovna — Andijon shahrida faoliyat yurituvchi yetakchi ayol stomatolog-terapevt va ortoped. ADTI bitiruvchisi, ${years} yillik klinik tajriba, A.Fitrat 251B «Sevdo Denta» klinikasi.`,
    },
    ru: {
      title: `О Докторе Нозиме Бахтияровне — Женщина-Стоматолог в Андижане (${years} Лет Опыта)`,
      description: `Д-р Нозима Бахтияровна — ведущий врач-стоматолог женщина в Андижане, терапевт и ортопед клиники Sevdo Denta (ул. А. Фитрата, 251Б). Выпускница АГМИ, ${years} лет успешной практики.`,
    },
    en: {
      title: `About Dr. Nozima Baxtiyarovna — Certified Female Dentist in Andijan (${years} Yrs Experience)`,
      description: `Meet Dr. Nozima Baxtiyarovna, prominent female restorative dentist and prosthodontist at «Sevdo Denta» Clinic in Andijan (251B A. Fitrat St) with ${years} years of clinical excellence.`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil: A.Fitrat 251B — Sevdo Denta Klinikasi Andijon | Dr. Nozima",
      description:
        "Andijon shahri, A.Fitrat ko'chasi 251B-uy (Eski Shahar, 1-qavat, «Sevdo Denta» klinikasi). Qabulga yozilish: +998 (91) 619-95-00, Telegram: @Miss_Dentist_95, Google va Yandex Xarita.",
    },
    ru: {
      title: "Контакты и Адрес: ул. А. Фитрата 251Б — Клиника Sevdo Denta Андижан | Д-р Нозима",
      description:
        "г. Андижан, ул. А. Фитрата, 251Б (район Эски Шахар, 1-й этаж, клиника «Sevdo Denta»). Запись к врачу-стоматологу женщине: +998 (91) 619-95-00, Telegram: @Miss_Dentist_95.",
    },
    en: {
      title: "Contact & Location: 251B A. Fitrat St — Sevdo Denta Clinic Andijan | Dr. Nozima",
      description:
        "Visit Dr. Nozima Baxtiyarovna at «Sevdo Denta» Clinic, 251B A. Fitrat Street, Andijan. Book by phone +998 (91) 619-95-00 or Telegram @Miss_Dentist_95. Google & Yandex Maps.",
    },
  },
  booking: {
    uz: {
      title: "Qabulga Yozilish — Ayol Stomatolog Dr. Nozima Baxtiyarovna | Sevdo Denta Andijon",
      description:
        "Dr. Nozima Baxtiyarovna qabuliga onlayn yozilish: bo'sh kunlar va soatlarni tanlang. Andijon, A.Fitrat 251B, «Sevdo Denta» klinikasi. Tel: +998 (91) 619-95-00.",
    },
    ru: {
      title: "Онлайн-Запись на Приём — Женщина-Стоматолог Д-р Нозима | Sevdo Denta Андижан",
      description:
        "Онлайн-запись к врачу-стоматологу женщине Д-ру Нозиме Бахтияровне: выберите свободный день и время приёма. Клиника «Sevdo Denta», г. Андижан, ул. А. Фитрата 251Б. +998 (91) 619-95-00.",
    },
    en: {
      title: "Book an Appointment — Female Dentist Dr. Nozima Baxtiyarovna | Sevdo Denta",
      description:
        "Direct online appointment booking with female dentist Dr. Nozima Baxtiyarovna in Andijan at «Sevdo Denta» Clinic, 251B A. Fitrat St. Phone: +998 (91) 619-95-00.",
    },
  },
  notFound: {
    uz: {
      title: "Sahifa topilmadi (404) — Dr. Nozima Baxtiyarovna",
      description: "Siz qidirgan sahifa topilmadi. Bosh sahifaga qayting yoki stomatologik xizmatlarimiz bilan tanishing.",
    },
    ru: {
      title: "Страница не найдена (404) — Д-р Нозима Бахтияровна",
      description: "Запрашиваемая страница не найдена. Вернитесь на главную или выберите нужную стоматологическую услугу.",
    },
    en: {
      title: "Page Not Found (404) — Dr. Nozima Baxtiyarovna",
      description: "The page you requested could not be found. Return to the homepage or browse our dental services.",
    },
  },

  /* ── Individual Service Routes SEO (Google & Yandex Snippet Optimized) ── */
  "tish-davolash": {
    uz: {
      title: "Og'riqsiz Tish Davolash va Plombalash Andijon — Dr. Nozima Baxtiyarovna",
      description:
        "Andijon A.Fitrat 251B «Sevdo Denta»da karies, pulpit va ildiz kanallarini 100% og'riqsiz davolash. Germaniya 3M Filtek va Yaponiya Estelite fotopolimerlari, 5 yilgacha kafolat. Tel: +998 (91) 619-95-00.",
    },
    ru: {
      title: "Безболезненное Лечение Кариеса и Каналов в Андижане — Д-р Нозима | Sevdo Denta",
      description:
        "Лечение кариеса, пульпита и периодонтита под контролем визиографа в Андижане (ул. А. Фитрата, 251Б). Двухэтапная анестезия, пломбы 3M Filtek (Германия) и Estelite (Япония). +998 (91) 619-95-00.",
    },
    en: {
      title: "Painless Cavity & Root Canal Treatment in Andijan — Dr. Nozima Baxtiyarovna",
      description:
        "100% painless tooth decay and endodontic root canal therapy at «Sevdo Denta» Clinic, 251B A. Fitrat St, Andijan. Premium German 3M Filtek & Japanese nano-composites. Tel: +998 (91) 619-95-00.",
    },
  },
  ortopediya: {
    uz: {
      title: "Tsirkoniy Karonka va Tish Ko'priklari Andijon — Dr. Nozima Baxtiyarovna",
      description:
        "Andijonda monolit tsirkoniy (Zirconia) va E-max keramik koronkalari bilan tishlarni mustahkam tiklash. CAD/CAM texnologiyasi, tabiiy estetika va chidamlilik. A.Fitrat 251B, «Sevdo Denta».",
    },
    ru: {
      title: "Циркониевые Коронки и Мостовидные Протезы в Андижане — Д-р Нозима | Sevdo Denta",
      description:
        "Протезирование зубов в Андижане: монолитный цирконий CAD/CAM и керамика E-max у врача-ортопеда Нозимы Бахтияровны. Идеальное прилегание, естественный цвет, гарантия. +998 (91) 619-95-00.",
    },
    en: {
      title: "Zirconia Crowns & Dental Bridges in Andijan — Dr. Nozima Baxtiyarovna",
      description:
        "High-strength monolithic CAD/CAM zirconia crowns and dental bridges in Andijan at «Sevdo Denta» (251B A. Fitrat St). Natural aesthetics and long-term durability. Tel: +998 (91) 619-95-00.",
    },
  },
  "estetik-stomatologiya": {
    uz: {
      title: "E-max Vinirlar va Gollivud Tabassumi Andijon — Dr. Nozima Baxtiyarovna",
      description:
        "Shveysariya Ivoclar E-max ultra-yupqa keramik vinirlari yordamida mukammal tabassum yaratish. Tishlarni charxlamasdan yoki minimal ishlov berish orqali. A.Fitrat 251B, «Sevdo Denta».",
    },
    ru: {
      title: "Керамические Виниры E-max и Голливудская Улыбка в Андижане — Д-р Нозима",
      description:
        "Эстетическая стоматология и виниры E-max (Ivoclar, Швейцария) в Андижане. Исправление формы, цвета и сколов зубов без обточки. Клиника «Sevdo Denta», ул. А. Фитрата 251Б.",
    },
    en: {
      title: "Ceramic E-max Veneers & Smile Makeovers in Andijan — Dr. Nozima",
      description:
        "Ultra-thin Swiss Ivoclar E-max porcelain veneers and aesthetic dental restorations in Andijan (251B A. Fitrat St). Hollywood smile design with minimal enamel preparation.",
    },
  },
  implantatsiya: {
    uz: {
      title: "Tish Implantatsiyasi Andijon (Osstem, Straumann) — Dr. Nozima Baxtiyarovna",
      description:
        "Yo'qotilgan tishlarni Janubiy Koreya va Shveysariya original biotitan implantlari yordamida qo'shni tishlarni charxlamasdan tiklash. 100% og'riqsiz, A.Fitrat 251B, «Sevdo Denta».",
    },
    ru: {
      title: "Имплантация Зубов в Андижане (Osstem, Straumann) — Клиника Sevdo Denta",
      description:
        "Восстановление утраченных зубов на титановых имплантах премиум-класса (Osstem, Straumann) в Андижане. Без обточки соседних зубов, 100% приживаемость. Тел: +998 (91) 619-95-00.",
    },
    en: {
      title: "Dental Implants in Andijan (Osstem, Straumann) — Sevdo Denta Clinic",
      description:
        "Permanent missing tooth replacement using premium biocompatible titanium implants in Andijan (251B A. Fitrat St). Painless procedure, lifetime implant integration.",
    },
  },
  "tish-oqartirish": {
    uz: {
      title: "Lazerli Tish Oqartirish va AirFlow Gigiyena Andijon — Dr. Nozima",
      description:
        "Tish emaliga zarar yetkazmasdan 3-6 tongacha professional lazerli oqartirish va ultratovushli AirFlow tozalash. Andijon, A.Fitrat 251B, «Sevdo Denta». Tel: +998 (91) 619-95-00.",
    },
    ru: {
      title: "Лазерное Отбеливание Зубов и AirFlow Чистка в Андижане — Д-р Нозима",
      description:
        "Безопасное профессиональное отбеливание зубов холодным светом и ультразвуковая чистка AirFlow в Андижане. Осветление на 3–6 тонов без боли и вреда для эмали. +998 (91) 619-95-00.",
    },
    en: {
      title: "Laser Teeth Whitening & AirFlow Prophylaxis in Andijan — Dr. Nozima",
      description:
        "Enamel-safe cold LED teeth whitening and ultrasonic AirFlow scaling in Andijan at «Sevdo Denta» (251B A. Fitrat St). Brighten your smile 3–6 shades in one session.",
    },
  },
  xirurgiya: {
    uz: {
      title: "Og'riqsiz Tish Olish va Jarrohlik Andijon — Dr. Nozima Baxtiyarovna",
      description:
        "Murakkab va aql tishlarini suyak to'qimasini asrab-avaylagan holda 100% og'riqsiz atravmatik olish. Andijon, A.Fitrat 251B, «Sevdo Denta» klinikasi. Tel: +998 (91) 619-95-00.",
    },
    ru: {
      title: "Безболезненное Удаление Зубов и Хирургия в Андижане — Д-р Нозима",
      description:
        "Атравматичное удаление зубов любой сложности и зубов мудрости без боли и отеков в Андижане (ул. А. Фитрата, 251Б). Современные безопасные анестетики. +998 (91) 619-95-00.",
    },
    en: {
      title: "Atraumatic Tooth Extraction in Andijan — Dr. Nozima Baxtiyarovna",
      description:
        "100% painless tooth and wisdom tooth removal preserving bone architecture in Andijan at «Sevdo Denta» Clinic (251B A. Fitrat St). Gentle clinical care.",
    },
  },
  "rentgen-diagnostika": {
    uz: {
      title: "Raqamli Tish Rentgeni va Viziografiya Andijon — Dr. Nozima",
      description:
        "90% kam nurlanishli zamonaviy raqamli 3D viziograf yordamida tish ildiz kanallari va yashirin kariesni 2 soniyada aniqlash. Andijon, A.Fitrat 251B, «Sevdo Denta».",
    },
    ru: {
      title: "Цифровой Рентген Зубов и Визиография в Андижане — Клиника Sevdo Denta",
      description:
        "Мгновенная цифровая радиовизиография зубов в Андижане с минимальной лучевой нагрузкой. Точная диагностика скрытого кариеса и каналов за 2 секунды. +998 (91) 619-95-00.",
    },
    en: {
      title: "Digital Dental X-Ray & Radiovisiography in Andijan — Dr. Nozima",
      description:
        "Ultra-low radiation digital dental imaging and root canal diagnostics in 2 seconds in Andijan at «Sevdo Denta» Clinic (251B A. Fitrat St). High-definition precision.",
    },
  },
};

export const PAGE_KEYWORDS = {
  uz: "ayol stomatolog andijon, tish shifokori ayol andijon, stomatolog ayol andijonda, dr nozima baxtiyarovna, nozima baxtiyarovna, stomatolog nozima, dentist nozima, miss dentist 95, sevdo denta andijon, fitrat 251b stomatolog, a fitrat 251b stomatologiya, eski shahar stomatolog, tish davolash andijon, tish ogriq andijon, karies davolash andijon, tish asabini olish ogriqsiz, pulpit davolash, fotopolimer plomba andijon, 3m filtek plomba, estelite plomba, old tish restavratsiyasi, tsirkoniy karonka andijon, tsirkon karonka narxi, tishga qoplama qoyish, ortoped stomatolog andijon, tish koprigi, chaynash tishini tiklash, vinirlar andijon, E-max vinir andijon narxi, gollivud tabassumi andijon, tish oqartirish andijon, lazerli tish oqartirish, airflow andijon, tish toshini tozalash, tish implantatsiyasi andijon, osstem implant andijon, straumann implant, ogriqsiz tish olish andijon, aql tishini olish, tish rentgeni andijon, 3d viziografiya andijon, adti stomatolog, аёл стоматолог андижон, тиш даволаш андижон, цирконий коронка андижон, винирлар андижон",
  ru: "женщина стоматолог андижан, стоматолог женщина в андижане, женский стоматолог андижан, доктор нозима бахтияровна, нозима бахтияровна стоматолог, стоматолог нозима андижан, клиника севдо дента андижан, фитрата 251б стоматология, ул а фитрата 251б, эски шахар стоматолог, лечение зубов андижан, лечение кариеса андижан, лечение пульпита без боли, удаление нерва зуба без боли, световая пломба андижан цена, пломбирование зубов андижан, композитные пломбы 3M Filtek, реставрация передних зубов андижан, зубная боль андижан, циркониевые коронки андижан, коронка из диоксида циркония цена андижан, протезирование зубов в андижане, мостовидные протезы андижан, керамические коронки, стоматолог ортопед андижан, виниры андижан, керамические виниры E-max андижан, голливудская улыбка андижан, виниры без обточки цена, отбеливание зубов андижан, лазерное отбеливание зубов, чистка зубов от камня AirFlow, удаление зубов андижан без боли, удаление зуба мудрости андижан, рентген зуба андижан, радиовизиография зубов, имплантация зубов андижан, стоматолог терапевт ортопед андижан, стоматологическая клиника андижан, детский и женский стоматолог андижан",
  en: "female dentist andijan, woman dentist andijan, lady dentist in andijan, dr nozima baxtiyarovna, dentist nozima baxtiyarovna, sevdo denta clinic andijan, 251b fitrat street andijan, dentist in andijan, painless dentistry andijan, toothache relief andijan, cavity filling andijan, root canal treatment andijan, composite dental fillings andijan, prosthodontist andijan, restorative dentist andijan, zirconia crowns andijan, dental bridges andijan, dental veneers andijan, E-max porcelain veneers andijan, hollywood smile makeover andijan, laser teeth whitening andijan, dental scaling airflow andijan, dental implants andijan, wisdom tooth extraction andijan, digital dental x-ray andijan, english speaking dentist in andijan uzbekistan",
};

export const getPageSeo = (page, lang) => {
  const entry = PAGE_SEO[page];
  if (!entry) return null;
  return entry[lang] || entry.uz;
};
