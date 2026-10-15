import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://drnozima.uz";

const years = getYearsOfExperience();

/**
 * Per-page, per-language SEO copy.
 *
 * Every indexable route gets a distinct title and description in all three
 * languages so search engines see unique metadata on each URL rather than one
 * Uzbek string repeated across the whole site.
 */
export const PAGE_SEO = {
  home: {
    uz: {
      title: "Dr. Nozima Baxtiyarovna — Stomatolog va Ortoped Andijon | Sevdo Denta",
      description: `Andijon Eski Shahar «Sevdo Denta» klinikasida zamonaviy stomatolog-terapevt va ortoped Dr. Nozima Baxtiyarovna. ${years} yillik tajriba, 100% og'riqsiz tish davolash, tsirkoniy karonka, vinirlar va estetik restavratsiya. Tel: +998 (91) 619-95-00.`,
    },
    ru: {
      title: "Д-р Нозима Бахтияровна — Стоматолог-терапевт и ортопед в Андижане | Клиника Sevdo Denta",
      description: `Современный стоматолог-терапевт и ортопед в Андижане Д-р Нозима Бахтияровна (клиника «Sevdo Denta», Эски Шахар). ${years} лет опыта, выпускница АГМИ, лечение зубов без боли, циркониевые коронки, виниры E-max и художественная реставрация.`,
    },
    en: {
      title: "Dr. Nozima Baxtiyarovna — Modern Dentist & Prosthodontist in Andijan | Sevdo Denta",
      description: `Dr. Nozima Baxtiyarovna at «Sevdo Denta» Clinic in Andijan (Old City). ${years} years of clinical excellence, Andijan State Medical Institute graduate, 100% painless restorative care, zirconia crowns, and E-max veneers.`,
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. Nozima Baxtiyarovna | Sevdo Denta Andijon",
      description:
        "Andijonda 100% og'riqsiz tish davolash, tsirkoniy karonka va ko'priklar, E-max vinirlar, badiiy kompozit restavratsiya, tish tozalash va oqartirish.",
    },
    ru: {
      title: "Стоматологические Услуги — Д-р Нозима Бахтияровна | Андижан",
      description:
        "Полный спектр стоматологических услуг в Андижане: безболезненное лечение кариеса и каналов, циркониевые коронки, керамические виниры E-max, профессиональная гигиена и отбеливание.",
    },
    en: {
      title: "Dental Services in Andijan — Dr. Nozima Baxtiyarovna | Sevdo Denta",
      description:
        "Comprehensive painless dentistry in Andijan: restorative fillings, root canals, zirconia crowns, E-max veneers, and professional oral prophylaxis.",
    },
  },
  about: {
    uz: {
      title: `Dr. Nozima Baxtiyarovna Haqida — ${years} Yillik Tajribaga Ega Stomatolog va Ortoped`,
      description: `Dr. Nozima Baxtiyarovna — Andijondagi «Sevdo Denta» klinikasi stomatolog-terapevti va ortopedi. Andijon davlat tibbiyot instituti (ADTI) bitiruvchisi, ${years} yillik tajriba va xalqaro sertifikatlar.`,
    },
    ru: {
      title: `О Докторе Нозиме Бахтияровне — Стоматолог-терапевт и ортопед с ${years}-Летним Опытом`,
      description: `Д-р Нозима Бахтияровна — стоматолог-терапевт и ортопед клиники «Sevdo Denta» в Андижане. Выпускница АГМИ, ${years} лет клинической практики и высокое доверие пациентов.`,
    },
    en: {
      title: `About Dr. Nozima Baxtiyarovna — Dentist & Prosthodontist with ${years} Years Experience`,
      description: `Meet Dr. Nozima Baxtiyarovna, restorative dentist and prosthodontist at «Sevdo Denta» Clinic in Andijan with ${years} years of clinical experience and degree from Andijan State Medical Institute.`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — Sevdo Denta Klinikasi (Andijon, Eski Shahar) | Dr. Nozima",
      description:
        "Andijon shahri, Eski Shahar (Old City), 1-qavat, «Sevdo Denta» stomatologiya klinikasi. Qabulga yozilish: +998 (91) 619-95-00, Telegram: @Miss_Dentist_95.",
    },
    ru: {
      title: "Контакты и Адрес — Клиника Sevdo Denta (Андижан, Эски Шахар) | Д-р Нозима",
      description:
        "г. Андижан, Эски Шахар (Old City), 1-й этаж, стоматология «Sevdo Denta». Запись на приём: +998 (91) 619-95-00, Telegram: @Miss_Dentist_95.",
    },
    en: {
      title: "Contact & Clinic Location — Sevdo Denta Clinic Andijan | Dr. Nozima Baxtiyarovna",
      description:
        "Visit Dr. Nozima Baxtiyarovna at «Sevdo Denta» Clinic, Old City (Eski Shahar), 1st Floor, Andijan. Book by phone +998 (91) 619-95-00 or Telegram @Miss_Dentist_95.",
    },
  },
  booking: {
    uz: {
      title: "Uchrashuv Vaqtini Tanlang — Dr. Nozima Baxtiyarovna | Sevdo Denta Andijon",
      description:
        "Dr. Nozima Baxtiyarovna qabuliga onlayn yozilish: bo'sh kunlar va soatlarni tanlang. Andijon, Eski Shahar, «Sevdo Denta» klinikasi. Tel: +998 (91) 619-95-00.",
    },
    ru: {
      title: "Выберите Время Приёма — Д-р Нозима Бахтияровна | Sevdo Denta Андижан",
      description:
        "Онлайн-запись к Д-ру Нозиме Бахтияровне: выберите свободный день и время приёма. Клиника «Sevdo Denta», г. Андижан, Эски Шахар. +998 (91) 619-95-00.",
    },
    en: {
      title: "Select Appointment Time — Dr. Nozima Baxtiyarovna | Sevdo Denta Andijan",
      description:
        "Direct online appointment booking with Dr. Nozima Baxtiyarovna in Andijan at «Sevdo Denta» Clinic. Choose an available date and time slot. +998 (91) 619-95-00.",
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
  uz: "stomatolog andijon, tish shifokori andijon, dr nozima baxtiyarovna, nozima stomatolog, dentist nozima, sevdo denta andijon, eski shahar stomatolog, ortoped stomatolog andijon, tish davolash andijon, tsirkon karonka andijon, vinirlar andijon, adti stomatolog",
  ru: "стоматолог андижан, стоматолог терапевт андижан, стоматолог ортопед андижан, нозима бахтияровна, севдо дента андижан, эски шахар стоматолог, лечение зубов андижан, циркониевые коронки андижан, виниры андижан",
  en: "dentist in andijan, prosthodontist andijan, restorative dentist andijan, dr nozima baxtiyarovna, sevdo denta clinic andijan, zirconia crowns andijan, dental veneers andijan",
};

export const getPageSeo = (page, lang) => {
  const entry = PAGE_SEO[page];
  if (!entry) return null;
  return entry[lang] || entry.uz;
};
