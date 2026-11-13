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
      title: "Andijonda Stomatologiya — Dr. Nozima Baxtiyarovna | Sevdo Denta Klinikasi",
      description: `Andijonda zamonaviy stomatologiya va tajribali ayol stomatolog-terapevt Dr. Nozima Baxtiyarovna (A.Fitrat 251B, «Sevdo Denta» klinikasi). ${years} yillik tajriba, ADTI bitiruvchisi, 100% og'riqsiz tish davolash, tsirkoniy karonka, E-max vinirlar va estetik restavratsiya. Tel: +998 (91) 619-95-00.`,
    },
    ru: {
      title: "Стоматология в Андижане — Доктор Нозима Бахтияровна | Клиника Sevdo Denta",
      description: `Стоматология в Андижане: квалифицированный врач-стоматолог женщина Д-р Нозима Бахтияровна (клиника «Sevdo Denta», ул. А. Фитрата, 251Б). ${years} лет опыта, выпускница АГМИ, 100% безболезненное лечение кариеса и каналов, циркониевые коронки, виниры E-max. Тел: +998 (91) 619-95-00.`,
    },
    en: {
      title: "Dentistry in Andijan — Dr. Nozima Baxtiyarovna | Sevdo Denta Clinic",
      description: `Premier dental care in Andijan: certified female dentist Dr. Nozima Baxtiyarovna at «Sevdo Denta» Clinic, 251B A. Fitrat Street. ${years} years of clinical excellence, ADTI graduate, 100% painless restorative dental care, zirconia crowns, and E-max veneers. Tel: +998 (91) 619-95-00.`,
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Stomatolog Nozima | Sevdo Denta Andijon",
      description:
        "Andijon A.Fitrat 251B «Sevdo Denta»da 100% og'riqsiz tish davolash, tsirkoniy karonka va ko'priklar, E-max vinirlar, badiiy kompozit restavratsiya, implantatsiya va tish oqartirish.",
    },
    ru: {
      title: "Стоматологические Услуги — Стоматолог Нозима | Андижан Sevdo Denta",
      description:
        "Полный спектр стоматологических услуг у врача-стоматолога женщины в Андижане (ул. А. Фитрата 251Б): лечение без боли, циркониевые коронки, виниры E-max, профессиональная гигиена и отбеливание.",
    },
    en: {
      title: "Dental Services in Andijan — Dentist Dr. Nozima | Sevdo Denta",
      description:
        "Comprehensive painless dentistry in Andijan: restorative fillings, root canals, zirconia crowns, E-max veneers, implants, and oral prophylaxis at 251B A. Fitrat St.",
    },
  },
  about: {
    uz: {
      title: `Stomatolog Nozima Baxtiyarovna Haqida — Andijon (${years} Yil Tajriba)`,
      description: `Stomatolog Nozima Baxtiyarovna — Andijon shahrida faoliyat yurituvchi yetakchi ayol stomatolog-terapevt va ortoped. ADTI bitiruvchisi, ${years} yillik klinik tajriba, A.Fitrat 251B «Sevdo Denta» klinikasi.`,
    },
    ru: {
      title: `Стоматолог Нозима Бахтияровна — О Враче в Андижане (${years} Лет Опыта)`,
      description: `Стоматолог Нозима Бахтияровна — ведущий врач-стоматолог женщина в Андижане, терапевт и ортопед клиники Sevdo Denta (ул. А. Фитрата, 251Б). Выпускница АГМИ, ${years} лет успешной практики.`,
    },
    en: {
      title: `About Dentist Dr. Nozima Baxtiyarovna — Andijan (${years} Yrs Experience)`,
      description: `Meet dentist Dr. Nozima Baxtiyarovna, prominent female restorative dentist and prosthodontist at «Sevdo Denta» Clinic in Andijan (251B A. Fitrat St) with ${years} years of clinical excellence.`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil: A.Fitrat 251B — Stomatolog Nozima | Sevdo Denta Andijon",
      description:
        "Andijon shahri, A.Fitrat ko'chasi 251B-uy (Eski Shahar, 1-qavat, «Sevdo Denta» klinikasi). Qabulga yozilish: +998 (91) 619-95-00, Telegram: @Miss_Dentist_95, Google va Yandex Xarita.",
    },
    ru: {
      title: "Контакты и Адрес: ул. А. Фитрата 251Б — Стоматолог Нозима | Sevdo Denta",
      description:
        "г. Андижан, ул. А. Фитрата, 251Б (район Эски Шахар, 1-й этаж, клиника «Sevdo Denta»). Запись к врачу-стоматологу женщине: +998 (91) 619-95-00, Telegram: @Miss_Dentist_95.",
    },
    en: {
      title: "Contact & Location: 251B A. Fitrat St — Dentist Dr. Nozima | Sevdo Denta",
      description:
        "Visit Dr. Nozima Baxtiyarovna at «Sevdo Denta» Clinic, 251B A. Fitrat Street, Andijan. Book by phone +998 (91) 619-95-00 or Telegram @Miss_Dentist_95. Google & Yandex Maps.",
    },
  },
  booking: {
    uz: {
      title: "Qabulga Yozilish — Stomatolog Nozima Baxtiyarovna | Sevdo Denta Andijon",
      description:
        "Dr. Nozima Baxtiyarovna qabuliga onlayn yozilish: bo'sh kunlar va soatlarni tanlang. Andijon, A.Fitrat 251B, «Sevdo Denta» klinikasi. Tel: +998 (91) 619-95-00.",
    },
    ru: {
      title: "Запись на Приём — Стоматолог Нозима Бахтияровна | Sevdo Denta Андижан",
      description:
        "Онлайн-запись к врачу-стоматологу женщине Д-ру Нозиме Бахтияровне: выберите свободный день и время приёма. Клиника «Sevdo Denta», г. Андижан, ул. А. Фитрата 251Б. +998 (91) 619-95-00.",
    },
    en: {
      title: "Book Appointment — Dentist Dr. Nozima Baxtiyarovna | Sevdo Denta",
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
  uz: "andijonda stomatologiya, stomatologiya andijon, andijon stomatologiya klinikalari, tish klinikasi andijon, eng yaxshi stomatolog andijon, yaxshi stomatolog andijon, stomatolog nozima, nozima stomatolog, stomatolog nozima baxtiyarovna, dr nozima baxtiyarovna, dr nozima andijon, ayollar stomatologi andijon, ayol stomatolog andijon, ayollar uchun stomatologiya andijon, qizlar uchun stomatolog andijon, homilador ayollar uchun tish davolash, nozik stomatologiya, shinam stomatologiya, kozimova nozimabonu baxtiyarovna, kozimova nozima, adti stomatolog, sevdo denta andijon, sevdo denta klinikasi, a fitrat 251b stomatologiya, fitrat 251b, eski shahar stomatologiya, old town stomatologiya, chorsu stomatologiya, ogriqsiz tish davolash andijon, tish ogriq qoldirish, karies davolash andijon, tish qorayishi, tish kavagi, tish asabini olish ogriqsiz, tish nervini olish, depulpatsiya, pulpit davolash, periodontit davolash, fotopolimer plomba andijon, nurli plomba, 3m filtek plomba andijon, tokuyama estelite plomba, old tish restavratsiyasi, tish sinishi davolash, tish yemirilishi, apeks lokator tish tozalash, vinirlar andijon, e-max vinirlar andijon narxi, keramik vinir andijon, kompozit vinir andijon, tishlar orasidagi ochiqlikni yopish, diastema yopish, trema yopish, tabassumni gozallashtirish, gollivud tabassumi andijon, tish charxlamasdan vinir, tsirkoniy karonka andijon, tsirkon karonka narxi andijon, monolit tsirkoniy, e-max karonka, keramik koprik andijon, tishga qoplama qoyish, tish protezi andijon, ortoped stomatolog andijon, chaynash tishini tiklash, metallokeramika almashtirish, cad cam tish qoplama, tish implantatsiyasi andijon, tish implant narxi andijon, osstem implant andijon, straumann implant andijon, koreyskiy implant andijon, shveysariya implant, biotitan tish implant, ogriqsiz tish olish andijon, murakkab tish olish, aql tishini oldirish andijon, donolik tishi oldirish, vosmerka tish oldirish, 8 tish oldirish, perikoronarit, retinirlangan tish olish, tish oqartirish andijon, lazerli tish oqartirish andijon, sovuq nurli oqartirish, philips zoom 4 andijon, tish toshini tozalash andijon, airflow tozalash andijon, ultratovushli tish tozalash, ogizdan hid kelishi davolash, milk qonashi davolash, tish rentgeni andijon, 3d viziografiya andijon, raqamli rentgen andijon, kompyuter tish rentgeni, 2 bosqichli ogriqsiz anesteziya, b-klass avtoklav sterilizatsiya, kraft paket steril toplam, anti spid anti gepatit, tish davolash kafolati, stomatologiya narxlari andijon, navbatsiz stomatolog, onlayn yozilish stomatolog andijon, андижонда стоматология, стоматология андижон, стоматолог нозима, стоматолог нозима бахтияровна, аёл стоматолог андижон, аёллар стоматологи, севдо дента андижон, эски шаҳар стоматология, тиш даволаш андижон, оғриқсиз тиш даволаш, цирконий коронка андижон, винирлар андижон, тиш олиш андижон, ақл тиши олдириш, тиш оқартириш андижон, тиш имплантацияси андижон, тиш рентгени андижон",
  ru: "стоматология в андижане, стоматология андижан, стоматологические клиники андижан, стоматологии андижана адреса и цены, лучшая стоматология в андижане, хороший стоматолог в андижане, зубной врач андижан, зубная клиника андижан, стоматолог нозима, стоматолог нозима андижан, нозима стоматолог, нозима стоматолог андижан, доктор нозима бахтияровна, женщина стоматолог андижан, стоматолог женщина в андижане, женский стоматолог андижан, стоматология для женщин андижан, стоматолог козимова нозима, козимова нозимабону, клиника севдо дента андижан, севдо дента, фитрата 251б стоматология, ул а фитрата 251б, эски шахар стоматолог, старый город андижан стоматология, здание old town стоматолог, лечение зубов в андижане, лечение кариеса андижан, лечение пульпита без боли, удаление нерва зуба без боли, лечение каналов зуба андижан, световая пломба андижан цена, пломбирование зубов андижан, фотополимерная пломба, композитные пломбы 3M Filtek, Estelite Sigma Quick, реставрация передних зубов андижан, зубная боль андижан, скол зуба лечение, чувствительность зубов на холодное горячее, циркониевые коронки андижан, циркониевые коронки в андижане цена, коронка из диоксида циркония цена андижан, протезирование зубов в андижане, мостовидные протезы андижан, керамические коронки E-max, стоматолог ортопед андижан, безметалловая керамика, коронки CAD CAM, виниры андижан, керамические виниры E-max андижан, виниры в андижане цена, голливудская улыбка андижан, виниры без обточки цена, исправление диастемы зубов, щель между зубами убрать, эстетическая стоматология андижан, имплантация зубов андижан, зубные импланты андижан цена, корейские импланты Osstem, швейцарские импланты Straumann, титановые импланты андижан, вживление зуба без обточки, отбеливание зубов андижан, лазерное отбеливание зубов холодным светом, Philips ZOOM 4 Андижан, чистка зубов от камня AirFlow, ультразвуковая чистка зубов, удаление зубного камня андижан, неприятный запах изо рта лечение, кровоточивость десен, удаление зубов андижан без боли, удаление зуба мудрости андижан, сложное удаление восьмерки, атравматичное удаление зубов, ретинированный зуб мудрости, рентген зуба андижан, радиовизиография зубов, цифровой 3D рентген, снимок зуба андижан, двухэтапная анестезия без боли, автоклав класса B стерилизация, крафт пакет при пациенте, протокол анти-спид анти-гепатит, 100% безболезненное лечение, гарантия на лечение зубов, запись к стоматологу онлайн андижан, стоматолог без очередей",
  en: "dentistry in andijan, dental clinic in andijan, dental clinics andijan, best dentist in andijan, top rated dental clinic andijan, dentist in andijan uzbekistan, dentist nozima, dentist nozima andijan, female dentist andijan, woman dentist andijan, lady dentist in andijan, gentle dentistry for women andijan, dr nozima baxtiyarovna, dentist nozima baxtiyarovna, kozimova nozimabonu dentist, kozimova nozima, sevdo denta clinic andijan, sevdo denta, 251b fitrat street andijan, old town dental clinic andijan, old town building andijan dentistry, painless dentistry andijan, acute toothache treatment andijan, cavity filling andijan, root canal therapy andijan, dental nerve extraction painless, composite dental fillings 3M Filtek andijan, Tokuyama Estelite, anterior aesthetic tooth restoration, cosmetic dentist andijan, broken tooth repair, tooth sensitivity treatment, zirconia crowns andijan, monolithic zirconia crowns price andijan, ceramic dental bridges andijan, metal free crowns, CAD CAM dental crowns andijan, prosthodontist in andijan, dental veneers andijan, E-max porcelain veneers andijan, hollywood smile makeover andijan, diastema gap closure, composite veneers andijan, minimal prep veneers, dental implants andijan, Osstem implants andijan, Straumann implants andijan, titanium dental fixtures, tooth replacement without shaving adjacent teeth, teeth whitening andijan, cold light laser teeth whitening andijan, Philips ZOOM 4 whitening andijan, professional teeth cleaning airflow andijan, ultrasonic dental calculus scaling, tartar removal andijan, atraumatic tooth extraction andijan, wisdom tooth removal andijan, painless dental surgery andijan, impacted third molar extraction, digital dental x-ray andijan, 3d radiovisiography andijan, low dose dental sensor, class-b hospital autoclave sterilization, sterile single use kraft pouch, dental treatment warranty, 100% painless local anesthesia, online dentist booking andijan, english speaking dentist in andijan uzbekistan",
};

export const getPageSeo = (page, lang) => {
  const entry = PAGE_SEO[page];
  if (!entry) return null;
  return entry[lang] || entry.uz;
};
