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
      title: "Sevdo Denta — Dr. Nozima Baxtiyarovna | Andijonda Stomatologiya Klinikasi",
      description: `«Sevdo Denta» stomatologiya klinikasi (Andijon, A.Fitrat 251B) — asoschi va yetakchi ayol stomatolog-terapevt Dr. Nozima Baxtiyarovna (Kozimova Nozimabonu). ${years} yillik tajriba, ADTI bitiruvchisi, 100% og'riqsiz tish davolash, tsirkoniy karonka, E-max vinirlar, implantatsiya. Tel: +998 (91) 619-95-00, +998 (99) 197-50-01.`,
    },
    ru: {
      title: "Sevdo Denta — Доктор Нозима Бахтияровна | Стоматология в Андижане",
      description: `Стоматологическая клиника «Sevdo Denta» в Андижане (ул. А. Фитрата, 251Б) — основатель и ведущий врач-стоматолог женщина Д-р Нозима Бахтияровна (Козимова Нозимабону). ${years} лет опыта, выпускница АГМИ, 100% безболезненное лечение кариеса и каналов, циркониевые коронки, виниры E-max. Тел: +998 (91) 619-95-00, +998 (99) 197-50-01.`,
    },
    en: {
      title: "Sevdo Denta — Dr. Nozima Baxtiyarovna | Dental Clinic in Andijan",
      description: `«Sevdo Denta» Dental Clinic in Andijan (251B A. Fitrat St) — founded and led by certified female dentist Dr. Nozima Baxtiyarovna (Kozimova Nozimabonu). ${years} years of clinical excellence, ADTI graduate, 100% painless restorative dental care, zirconia crowns, and E-max veneers. Tel: +998 (91) 619-95-00, +998 (99) 197-50-01.`,
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
      title: "Kechki Tish Og'rig'ini Qoldirish va Karies Davolash Andijon — Dr. Nozima",
      description:
        "Kechki payt yoki to'satdan tish qattiq og'rib qolsa nima qilish kerak? Andijon A.Fitrat 251B «Sevdo Denta»da 100% og'riqsiz karies, pulpit va nerv davolash. 3M Filtek plomba kafolati. Tel: +998 (91) 619-95-00.",
    },
    ru: {
      title: "Острая Зубная Боль и Лечение Кариеса в Андижане — Д-р Нозима | Sevdo Denta",
      description:
        "Что делать если сильно болит зуб вечером или ночью? Клиника «Sevdo Denta» в Андижане (ул. А. Фитрата, 251Б): срочная помощь, 100% безболезненное лечение каналов и кариеса. +998 (91) 619-95-00.",
    },
    en: {
      title: "Painless Cavity & Emergency Toothache Treatment in Andijan — Dr. Nozima",
      description:
        "Severe toothache relief at night and 100% painless root canal therapy at «Sevdo Denta» Clinic, 251B A. Fitrat St, Andijan. Premium German 3M Filtek & Japanese composites. Tel: +998 (91) 619-95-00.",
    },
  },
  ortopediya: {
    uz: {
      title: "Tish Karonkalari Narxi va Tsirkoniy Qoplamalar Andijon — Dr. Nozima",
      description:
        "Andijonda tish karonkalari turlari va narxlari: CAD/CAM monolit tsirkoniy va E-max keramik koronkalari bilan tishlarni mustahkam tiklash. A.Fitrat 251B, «Sevdo Denta». Tel: +998 (91) 619-95-00.",
    },
    ru: {
      title: "Зубные Коронки Цены и Цирконий в Андижане — Д-р Нозима | Sevdo Denta",
      description:
        "Виды и цены зубных коронок в Андижане: монолитный цирконий CAD/CAM и E-max коронки под ключ у врача-ортопеда Нозимы Бахтияровны. Гарантия, естественный вид. +998 (91) 619-95-00.",
    },
    en: {
      title: "Dental Crowns Cost & Zirconia Bridges in Andijan — Dr. Nozima",
      description:
        "CAD/CAM monolithic zirconia and E-max ceramic dental crowns in Andijan at «Sevdo Denta» (251B A. Fitrat St). Maximum bite strength and natural aesthetics. Tel: +998 (91) 619-95-00.",
    },
  },
  "estetik-stomatologiya": {
    uz: {
      title: "E-max Vinirlar va Tishlarni Breketsiz Tekislash Andijon — Dr. Nozima",
      description:
        "Egri tishlar, oraliq tirqishlar (diastema) va sarg'aygan tishlarni breketsiz 1-2 tashrifda Shveysariya Ivoclar E-max vinirlari bilan tekislash. Gollivud tabassumi. A.Fitrat 251B, «Sevdo Denta».",
    },
    ru: {
      title: "Керамические Виниры E-max и Выравнивание Зубов без Брекетов Андижан",
      description:
        "Исправление кривизны зубов, сколов и щелей (диастемы) без брекетов за 1–2 визита с помощью швейцарских виниров E-max в Андижане (ул. А. Фитрата 251Б, Sevdo Denta).",
    },
    en: {
      title: "Ceramic E-max Veneers & Teeth Alignment Without Braces in Andijan",
      description:
        "Correct crooked teeth, gaps (diastema), and chips without long orthodontic braces using Swiss Ivoclar E-max porcelain veneers in Andijan (251B A. Fitrat St).",
    },
  },
  implantatsiya: {
    uz: {
      title: "Tish Implanti va Implantatsiya Narxi Andijon (Osstem) — Dr. Nozima",
      description:
        "Tish implanti narxi va turlari: qo'shni sog'lom tishlarni charxlamasdan yo'qotilgan tishni Osstem va Straumann biotitan implantlari bilan umrbod tiklash. A.Fitrat 251B, «Sevdo Denta».",
    },
    ru: {
      title: "Зубные Импланты Цены и Установка в Андижане (Osstem) — Sevdo Denta",
      description:
        "Имплантация зубов в Андижане без обточки соседних зубов на оригинальных системах Osstem и Straumann. Пожизненная гарантия приживаемости. Тел: +998 (91) 619-95-00.",
    },
    en: {
      title: "Dental Implants Cost in Andijan (Osstem, Straumann) — Sevdo Denta",
      description:
        "Missing tooth replacement without shaving adjacent teeth using genuine Osstem and Straumann biocompatible titanium implants in Andijan (251B A. Fitrat St).",
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
      title: "Tish Olish Narxi va Og'riqsiz Aql Tishini Oldirish Andijon — Dr. Nozima",
      description:
        "Andijonda og'riqsiz tish olish narxi: murakkab va aql tishlarini (vosmerka) suyak to'qimasini asrab 100% og'riqsiz atravmatik olish. A.Fitrat 251B, «Sevdo Denta». Tel: +998 (91) 619-95-00.",
    },
    ru: {
      title: "Удаление Зубов Цены и Удаление Восьмерки Без Боли в Андижане — Д-р Нозима",
      description:
        "Сколько стоит удалить зуб в Андижане: атравматичное безболезненное удаление зубов любой сложности и зубов мудрости под надежной анестезией. Клиника Sevdo Denta. +998 (91) 619-95-00.",
    },
    en: {
      title: "Painless Tooth Extraction Cost & Wisdom Teeth in Andijan — Dr. Nozima",
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
  uz: "andijonda stomatologiya, stomatologiya andijon, andijon stomatologiya klinikalari, tish klinikasi andijon, eng yaxshi stomatolog andijon, yaxshi stomatolog andijon, stomatolog nozima, nozima stomatolog, stomatolog nozima baxtiyarovna, dr nozima baxtiyarovna, dr nozima andijon, ayollar stomatologi andijon, ayol stomatolog andijon, ayollar uchun stomatologiya andijon, qizlar uchun stomatolog andijon, homilador ayollar uchun tish davolash, nozik stomatologiya, shinam stomatologiya, kozimova nozimabonu baxtiyarovna, kozimova nozima, adti stomatolog, sevdo denta andijon, sevdo denta klinikasi, a fitrat 251b stomatologiya, fitrat 251b, eski shahar stomatologiya, old town stomatologiya, chorsu stomatologiya, ogriqsiz tish davolash andijon, tish ogriq qoldirish, karies davolash andijon, tish qorayishi, tish kavagi, tish asabini olish ogriqsiz, tish nervini olish, depulpatsiya, pulpit davolash, periodontit davolash, fotopolimer plomba andijon, nurli plomba, 3m filtek plomba andijon, tokuyama estelite plomba, old tish restavratsiyasi, tish sinishi davolash, tish yemirilishi, apeks lokator tish tozalash, vinirlar andijon, e-max vinirlar andijon narxi, keramik vinir andijon, kompozit vinir andijon, tishlar orasidagi ochiqlikni yopish, diastema yopish, trema yopish, tabassumni gozallashtirish, gollivud tabassumi andijon, tish charxlamasdan vinir, tsirkoniy karonka andijon, tsirkon karonka narxi andijon, monolit tsirkoniy, e-max karonka, keramik koprik andijon, tishga qoplama qoyish, tish protezi andijon, ortoped stomatolog andijon, chaynash tishini tiklash, metallokeramika almashtirish, cad cam tish qoplama, tish implantatsiyasi andijon, tish implant narxi andijon, osstem implant andijon, straumann implant andijon, koreyskiy implant andijon, shveysariya implant, biotitan tish implant, ogriqsiz tish olish andijon, murakkab tish olish, aql tishini oldirish andijon, donolik tishi oldirish, vosmerka tish oldirish, 8 tish oldirish, perikoronarit, retinirlangan tish olish, tish oqartirish andijon, lazerli tish oqartirish andijon, sovuq nurli oqartirish, philips zoom 4 andijon, tish toshini tozalash andijon, airflow tozalash andijon, ultratovushli tish tozalash, ogizdan hid kelishi davolash, milk qonashi davolash, tish rentgeni andijon, 3d viziografiya andijon, raqamli rentgen andijon, kompyuter tish rentgeni, 2 bosqichli ogriqsiz anesteziya, b-klass avtoklav sterilizatsiya, kraft paket steril toplam, anti spid anti gepatit, tish davolash kafolati, stomatologiya narxlari andijon, navbatsiz stomatolog, onlayn yozilish stomatolog andijon, tishim qattiq ogriyapti, tish ogriq qoldirish nima qilish kerak, tish ogriyapti nima qilsa boladi, kechasi tish ogrib qoldi, tish simillab ogriyapti, tish loqillab ogriyapti, tish qaqshab ogriyapti, bosganda tish ogriydi, chaynaganda tish ogriydi, sovuq suv ichganda tish qaqshashi, issiqqa tish ogriydi, shirinlik yeganda tish ogriydi, tish asabi ochilib qolishi, tish nervi shamollashi, milk shishishi, tish tagi shishib ketdi, yuz shishishi tishdan, tishdan yiring oqishi, flyus davolash andijon, flus tish davolash, milk qonashi davolash, tish yuvganda milk qonashi, ogizdan hid kelishi davolash, ogiz hidlanishi, milk yalliglanishi, tish qimirlab qolishi, tish tebranishi, plomba tushib ketdi nima qilish kerak, tish teshilib qoldi, tishda teshik, tishda qora dog, tish qorayib ketishi, tish kavagi, tish sinib qoldi, old tish sinishi tiklash, old tish darz ketishi, tish yorilishi, tish chirishi davolash, tish yemirilishi, plomba narxi andijon, aql tishi ogriyapti, donolik tishi chiqishi shishishi, aql tishi oldirish narxi andijon, 8 tish ogriydi, vosmerka tish oldirish, ogriqsiz aql tishi olish, tish oldirishdan qorqaman, stomatologdan qorqish, ukolsiz tish davolash, ogriqsiz stomatolog andijon, tushunadigan muloyim stomatolog, ayol tish shifokori andijon, ayollar uchun stomatologiya, homiladorlikda tish ogriydi nima qilish kerak, homiladorlikda tish davolasa boladimi, homilador ayolga tish ukoli mumkinmi, emizikli ayol tish davolatishi, tish davolash narxi andijon, andijonda qaysi stomatolog yaxshi, arzon va sifatli stomatolog andijon, tish qoydirish narxi andijon, tish qoplama narxlari andijon, stomatolog maslahati andijon, qabulga yozilish stomatolog andijon, tish karonkalari, tish koronkasi, tish koronkasi narxi, tish qoplamasi narxi andijon, tish qoplamalari, tish protezi andijon narxlari, kechki payt tishim ogriyapti, kechki payt ogriyapti, kechasi tish ogriydi nima qilish kerak, kechki tish ogriq qoldirish, tish ogriq sababi va davolash, tish olish, tish olish narxi andijon, tish oldirish narxi, ogriqsiz tish olish andijon narxi, murakkab tish olish narxi, tish implanti, tish implanti narxi andijon, tish implantatsiyasi narxi ozbekiston, implant tish turlari va narxlari, qoshni tishlarni charxlamasdan tish qoyish, tish breketlari, tish briketi, breket turlari va narxlari 2026, breket narxi andijon, tish tekislash, egri tishlarni togirlash, tishlar orasidagi tirqishlarni tuzatish, tishlar orasidagi ochiqlik, breketsiz tish tekislash, андижонда стоматология, стоматология андижон, стоматолог нозима, стоматолог нозима бахтияровна, аёл стоматолог андижон, аёллар стоматологи, севдо дента андижон, эски шаҳар стоматология, тиш даволаш андижон, оғриқсиз тиш даволаш, цирконий коронка андижон, винирлар андижон, тиш олиш андижон, ақл тиши олдириш, тиш оқартириш андижон, тиш имплантацияси андижон, тиш рентгени андижон, тишим қаттиқ оғрияпти, тиш оғриғига нима қилиш керак, тиш оғриғини қолдириш, кечаси тиш оғриши, тиш қақшаши, тиш лоқиллаб оғриши, милк шишиши, юз шишиб кетди, флюс даволаш, милк қонаши, оғиз ҳидланиши, пломба тушиб кетди, тишим тешилиб қолди, тишда қора доғ, тиш синиб қолди, олд тиш синиши, ақл тиши оғриғи, донолик тиши олдириш, тиш олдиришдан қўрқаман, ҳомиладорликда тиш оғриши, тиш даволаш нархи андижон, арзон ва яхши стоматолог андижон, қайси стоматолог яхши андижонда, тиш каронкалари, тиш коронкаси нархи, кечки пайт тишим оғрияпти, кечки пайт оғрияпти, кечаси тиш оғриғини қолдириш, тиш олиш нархи андижон, тиш импланти нархи, тиш брекетлари нархи",
  ru: "стоматология в андижане, стоматология андижан, стоматологические клиники андижан, стоматологии андижана адреса и цены, лучшая стоматология в андижане, хороший стоматолог в андижане, зубной врач андижан, зубная клиника андижан, стоматолог нозима, стоматолог нозима андижан, нозима стоматолог, нозима стоматолог андижан, доктор нозима бахтияровна, женщина стоматолог андижан, стоматолог женщина в андижане, женский стоматолог андижан, стоматология для женщин андижан, стоматолог козимова нозима, козимова нозимабону, клиника севдо дента андижан, севдо дента, фитрата 251б стоматология, ул а фитрата 251б, эски шахар стоматолог, старый город андижан стоматология, здание old town стоматолог, лечение зубов в андижане, лечение кариеса андижан, лечение пульпита без боли, удаление нерва зуба без боли, лечение каналов зуба андижан, световая пломба андижан цена, пломбирование зубов андижан, фотополимерная пломба, композитные пломбы 3M Filtek, Estelite Sigma Quick, реставрация передних зубов андижан, зубная боль андижан, скол зуба лечение, чувствительность зубов на холодное горячее, циркониевые коронки андижан, циркониевые коронки в андижане цена, коронка из диоксида циркония цена андижан, протезирование зубов в андижане, мостовидные протезы андижан, керамические коронки E-max, стоматолог ортопед андижан, безметалловая керамика, коронки CAD CAM, виниры андижан, керамические виниры E-max андижан, виниры в андижане цена, голливудская улыбка андижан, виниры без обточки цена, исправление диастемы зубов, щель между зубами убрать, эстетическая стоматология андижан, имплантация зубов андижан, зубные импланты андижан цена, корейские импланты Osstem, швейцарские импланты Straumann, титановые импланты андижан, вживление зуба без обточки, отбеливание зубов андижан, лазерное отбеливание зубов холодным светом, Philips ZOOM 4 Андижан, чистка зубов от камня AirFlow, ультразвуковая чистка зубов, удаление зубного камня андижан, неприятный запах изо рта лечение, кровоточивость десен, удаление зубов андижан без боли, удаление зуба мудрости андижан, сложное удаление восьмерки, атравматичное удаление зубов, ретинированный зуб мудрости, рентген зуба андижан, радиовизиография зубов, цифровой 3D рентген, снимок зуба андижан, двухэтапная анестезия без боли, автоклав класса B стерилизация, крафт пакет при пациенте, протокол анти-спид анти-гепатит, 100% безболезненное лечение, гарантия на лечение зубов, запись к стоматологу онлайн андижан, стоматолог без очередей, болит зуб что делать, острая зубная боль ночью, как снять зубную боль дома, зуб ноет и пульсирует, больно жевать на зуб, больно нажимать на зуб, зуб реагирует на холодное и горячее, зуб реагирует на сладкое, воспалился нерв зуба, воспаление зубного нерва, ноющая зубная боль, зубная боль отдает в висок или ухо, опухла десна что делать, опухла щека от зуба, нарыв на десне, флюс на десне лечение андижан, гной из десны, кровоточат десны при чистке зубов, воспаление десен лечение, шатается зуб что делать, неприятный запах изо рта от зуба, выпала пломба что делать, дырка в зубе лечение, черная точка на зубе, откололся зуб что делать, откололся передний зуб как восстановить, сломался зуб под корень, трещина на зубе, сколько стоит поставить пломбу в андижане, восстановление сколотого зуба, болит зуб мудрости что делать, режется зуб мудрости опухла десна, удаление зуба мудрости без боли андижан, нужно ли удалять зуб мудрости, сложное удаление восьмерки, боюсь стоматолога как лечить зубы без боли, дентофобия лечение зубов, боюсь укола в десну, безопасная анестезия для зубов, лечение зубов при беременности андижан, болит зуб во время беременности что делать, анестезия для беременных, лечение зубов при грудном вскармливании, сколько стоит вылечить зуб в андижане, цены на стоматологию в андижане, где хорошо лечат зубы в андижане отзывы, хороший и недорогой стоматолог андижан, клиника севдо дента отзывы, частная стоматология андижан, коронка на зуб цена андижан, зубные коронки виды и цены, циркониевые коронки на зубы, металлокерамика или цирконий что лучше, болит зуб вечером что делать, острая зубная боль ночью как снять, почему зуб болит ночью, удаление зуба цена андижан, сколько стоит удалить зуб в андижане, безболезненное удаление зуба мудрости, зубные импланты цена андижан, имплантация зубов виды и цены 2026, вживление зуба без обточки соседних, брекеты или виниры что выбрать, исправление кривых зубов без брекетов, щели между зубами как убрать, выравнивание зубов андижан",
  en: "dentistry in andijan, dental clinic in andijan, dental clinics andijan, best dentist in andijan, top rated dental clinic andijan, dentist in andijan uzbekistan, dentist nozima, dentist nozima andijan, female dentist andijan, woman dentist andijan, lady dentist in andijan, gentle dentistry for women andijan, dr nozima baxtiyarovna, dentist nozima baxtiyarovna, kozimova nozimabonu dentist, kozimova nozima, sevdo denta clinic andijan, sevdo denta, 251b fitrat street andijan, old town dental clinic andijan, old town building andijan dentistry, painless dentistry andijan, acute toothache treatment andijan, cavity filling andijan, root canal therapy andijan, dental nerve extraction painless, composite dental fillings 3M Filtek andijan, Tokuyama Estelite, anterior aesthetic tooth restoration, cosmetic dentist andijan, broken tooth repair, tooth sensitivity treatment, zirconia crowns andijan, monolithic zirconia crowns price andijan, ceramic dental bridges andijan, metal free crowns, CAD CAM dental crowns andijan, prosthodontist in andijan, dental veneers andijan, E-max porcelain veneers andijan, hollywood smile makeover andijan, diastema gap closure, composite veneers andijan, minimal prep veneers, dental implants andijan, Osstem implants andijan, Straumann implants andijan, titanium dental fixtures, tooth replacement without shaving adjacent teeth, teeth whitening andijan, cold light laser teeth whitening andijan, Philips ZOOM 4 whitening andijan, professional teeth cleaning airflow andijan, ultrasonic dental calculus scaling, tartar removal andijan, atraumatic tooth extraction andijan, wisdom tooth removal andijan, painless dental surgery andijan, impacted third molar extraction, digital dental x-ray andijan, 3d radiovisiography andijan, low dose dental sensor, class-b hospital autoclave sterilization, sterile single use kraft pouch, dental treatment warranty, 100% painless local anesthesia, online dentist booking andijan, english speaking dentist in andijan uzbekistan, severe toothache relief andijan, what to do for severe tooth pain, emergency dentist in andijan, throbbing tooth pain at night, tooth sensitive to hot and cold, pain when biting down or chewing, inflamed tooth nerve pain, root canal emergency, swollen gum around tooth, tooth abscess treatment andijan, swollen cheek from infected tooth, bleeding gums treatment, bad breath from tooth decay, loose tooth adult, lost filling emergency fix, chipped front tooth repair andijan, cracked tooth restoration, broken tooth pain, hole in tooth treatment, composite filling price andijan, painful wisdom tooth extraction, gentle dentist for dental anxiety andijan, painless dental injection, dental care during pregnancy andijan, best female dentist in andijan, affordable dental clinic andijan, dental crowns cost andijan, zirconia tooth crowns andijan, dental crown vs bridge, severe toothache at night relief, night tooth pain remedy, tooth extraction cost andijan, painless wisdom tooth removal price, dental implant cost andijan uzbekistan, missing tooth replacement without shaving adjacent teeth, braces vs porcelain veneers andijan, crooked teeth alignment without braces, diastema closure andijan",
};

export const getPageSeo = (page, lang) => {
  const entry = PAGE_SEO[page];
  if (!entry) return null;
  return entry[lang] || entry.uz;
};
