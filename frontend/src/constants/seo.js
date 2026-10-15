import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://drnozima.uz";

const years = getYearsOfExperience();

/**
 * Per-page, per-language SEO copy optimized for Google, Yandex, and AI Search Engines.
 * Highlights: Female Dentist in Andijan, exact physical address (A.Fitrat 251B, 170100),
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
        "Andijon shahri, A.Fitrat ko'chasi 251B-uy, 170100 (Eski Shahar, 1-qavat, «Sevdo Denta» klinikasi). Qabulga yozilish: +998 (91) 619-95-00, Telegram: @Miss_Dentist_95, Google va Yandex Xarita.",
    },
    ru: {
      title: "Контакты и Адрес: ул. А. Фитрата 251Б — Клиника Sevdo Denta Андижан | Д-р Нозима",
      description:
        "г. Андижан, ул. А. Фитрата, 251Б, 170100 (район Эски Шахар, 1-й этаж, клиника «Sevdo Denta»). Запись к врачу-стоматологу женщине: +998 (91) 619-95-00, Telegram: @Miss_Dentist_95.",
    },
    en: {
      title: "Contact & Location: 251B A. Fitrat St — Sevdo Denta Clinic Andijan | Dr. Nozima",
      description:
        "Visit Dr. Nozima Baxtiyarovna at «Sevdo Denta» Clinic, 251B A. Fitrat Street, 170100, Andijan. Book by phone +998 (91) 619-95-00 or Telegram @Miss_Dentist_95. Google & Yandex Maps.",
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
};

export const PAGE_KEYWORDS = {
  uz: "ayol stomatolog andijon, tish shifokori ayol andijon, stomatolog ayol andijonda, dr nozima baxtiyarovna, nozima stomatolog, dentist nozima, sevdo denta andijon, fitrat 251b stomatolog, a fitrat 251b stomatologiya, eski shahar stomatolog, ortoped stomatolog andijon, tish davolash andijon, tsirkon karonka andijon, vinirlar andijon, adti stomatolog",
  ru: "женщина стоматолог андижан, стоматолог женщина в андижане, женский стоматолог андижан, нозима бахтияровна, севдо дента андижан, фитрата 251б стоматология, ул а фитрата 251б, эски шахар стоматолог, лечение зубов андижан, циркониевые коронки андижан, виниры андижан, стоматолог терапевт ортопед андижан",
  en: "female dentist andijan, woman dentist andijan, lady dentist in andijan, dr nozima baxtiyarovna, sevdo denta clinic andijan, 251b fitrat street andijan, dentist in andijan, prosthodontist andijan, restorative dentist andijan, zirconia crowns andijan, dental veneers andijan",
};

export const getPageSeo = (page, lang) => {
  const entry = PAGE_SEO[page];
  if (!entry) return null;
  return entry[lang] || entry.uz;
};
