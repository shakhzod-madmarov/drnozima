/**
 * Single source of truth for Dr. Nozima Baxtiyarovna's career facts, credentials, and clinic hours.
 *
 * Doctor: Dr. Nozima Baxtiyarovna (Female Dentist / Ayol Stomatolog)
 * Experience: 7 years of active clinical practice (since 2019).
 * University: Andijon davlat tibbiyot instituti (ADTI / АГМИ).
 * Specialities: Terapiya va ortopediya (100% og'riqsiz tish davolash, tsirkoniy karonka, vinirlar).
 */
export const DOCTOR_INFO = {
  name: "Dr. Nozima Baxtiyarovna",
  fullName: "Nozima Baxtiyarovna",
  legalName: "Kozimova Nozimabonu Baxtiyarovna",
  aliases: ["Kozimova Nozimabonu", "Kozimova Nozima", "Козимова Нозима", "Козимова Нозимабону"],
  gender: "Female",
  genderLabel: {
    uz: "Ayol stomatolog",
    ru: "Женщина-стоматолог",
    en: "Female Dentist",
  },
  careerStartYear: 2019,
  yearsOfExperience: 7,
  university: "Andijon davlat tibbiyot instituti (ADTI)",
  specialities: "Terapiya va Ortopediya",
  specialitiesList: ["Terapiya", "Ortopediya", "Estetik Stomatologiya", "Endodontiya"],
  specialtiesTitle: {
    uz: "Ayol Stomatolog-Terapevt va Ortoped",
    ru: "Врач-Стоматолог Женщина (Терапевт и Ортопед)",
    en: "Female Dentist, Restorative Specialist & Prosthodontist",
  },
  phone: "+998 (91) 619-95-00",
  phoneHref: "tel:+998916199500",
  phoneRaw: "+998916199500",
  email: "drnozima.medinson@gmail.com",
  telegramUrl: "https://t.me/Miss_Dentist_95",
  telegramHandle: "@Miss_Dentist_95",
  instagramUrl: "https://www.instagram.com/sevdo_denta/",
  instagramHandle: "@sevdo_denta",
  workplaceImage: "/dr_nozima_workplace.webp",
};

export const CERTIFICATES = [
  {
    id: "cert-composite-veneers",
    image: "/certificate_composite_veneers.webp",
    year: "2022",
    date: "2022-11-27",
    dateFormatted: {
      uz: "27-noyabr, 2022-yil",
      ru: "27 ноября 2022 года",
      en: "November 27, 2022",
    },
    city: {
      uz: "Toshkent shahri",
      ru: "г. Ташкент",
      en: "Tashkent",
    },
    recipient: "Kozimova Nozima (Козимова Нозима)",
    lecturer: "Ilxom Abbosov (Илхом Аббосов)",
    badge: {
      uz: "KOMPOZIT VINIRLAR",
      ru: "КОМПОЗИТНЫЕ ВИНИРЫ",
      en: "COMPOSITE VENEERS",
    },
    title: {
      uz: "«Composite Veneers» Frontal Tishlar Estetik Restavratsiyasi",
      ru: "«Composite Veneers» Реставрация Фронтальных Зубов",
      en: "«Composite Veneers» Anterior Teeth Aesthetic Restoration",
    },
    desc: {
      uz: "Old tishlarni zamonaviy kompozit vinirlar yordamida tabassum estetikasini tiklash, rang tanlash va biomimetik qatlamlash bo'yicha leksion-amaliy malaka kursi.",
      ru: "Лекционно-практический курс по высокоэстетичной реставрации фронтальных зубов композитными винирами, подбору оптических оттенков и биомиметике.",
      en: "Lecture and hands-on clinical masterclass in aesthetic restoration of anterior teeth using composite veneers and biomimetic layering.",
    },
    type: "certificate",
  },
  {
    id: "cert-crown-prep",
    image: "/certificate_crown_preparation.webp",
    year: "2022",
    date: "2022-12-24",
    dateFormatted: {
      uz: "24-dekabr, 2022-yil",
      ru: "24 декабря 2022 года",
      en: "December 24, 2022",
    },
    city: {
      uz: "Toshkent shahri",
      ru: "г. Ташкент",
      en: "Tashkent",
    },
    recipient: "Kozimova Nozimabonu (Козимова Нозимабону)",
    lecturer: "Mirxayidov M.M.",
    licenseNo: "019772",
    academy: "MARVA UNIVERSAL ACADEMY",
    partners: {
      uz: "Toshkent Davlat Stomatologiya Instituti & O'zbekiston Stomatologlar Assotsiatsiyasi",
      ru: "Ташкентский Государственный Стоматологический Институт и Ассоциация Стоматологов Узбекистана",
      en: "Tashkent State Dental Institute & Dental Association of Uzbekistan",
    },
    badge: {
      uz: "KORONKA VA ORTOPEDIYA",
      ru: "ПРЕПАРИРОВАНИЕ ПОД КОРОНКУ",
      en: "CROWN PREPARATION & PROSTHETICS",
    },
    title: {
      uz: "Tishni To'liq Koronka Uchun Charxlash (Crown Preparation)",
      ru: "Препарирование Зубов Под Полную Коронку",
      en: "Tooth Preparation for Full Crowns (Crown Prep)",
    },
    desc: {
      uz: "MARVA UNIVERSAL ACADEMY o'quv markazida tishlarni metall-keramika va tsirkoniy koronkalar uchun mikron aniqligida charxlash hamda tayyorlash kursi.",
      ru: "Специализированный практический курс по прецизионному препарированию зубов под полные циркониевые и керамические коронки с уступом.",
      en: "Professional clinical training course in precision tooth preparation for full ceramic and monolithic zirconia crowns.",
    },
    type: "certificate",
  },
  {
    id: "cert-adti-diploma",
    year: "2019",
    dateFormatted: {
      uz: "2019-yil",
      ru: "2019 год",
      en: "2019",
    },
    city: {
      uz: "Andijon shahri",
      ru: "г. Андижан",
      en: "Andijan",
    },
    recipient: "Kozimova Nozimabonu",
    badge: {
      uz: "OLIY TIBBIY DIPLOM",
      ru: "ВЫСШЕЕ ОБРАЗОВАНИЕ",
      en: "UNIVERSITY DEGREE",
    },
    title: {
      uz: "Vrach-Stomatolog Oliy Diplomi (ADTI)",
      ru: "Диплом Врача-Стоматолога (АГМИ)",
      en: "Doctor of Stomatology / DDS Diploma (ADTI)",
    },
    desc: {
      uz: "Andijon davlat tibbiyot instituti stomatologiya fakultetida umumiy stomatologiya, terapiya va ortopedik reabilitatsiya bo'yicha fundamental tibbiy ta'lim.",
      ru: "Фундаментальное медицинское образование на стоматологическом факультете Андижанского государственного медицинского института (АГМИ).",
      en: "Fundamental medical degree from the Faculty of Dentistry at Andijan State Medical Institute with clinical internship.",
    },
    type: "diploma",
  },
];

export const getYearsOfExperience = () => 7;

/**
 * Clinic opening hours in one place so the footer, contact page, booking page,
 * and schema.org JSON-LD cannot drift apart.
 */
export const OPENING_HOURS = {
  weekdays: { opens: "08:00", closes: "18:00" },
  labels: {
    uz: {
      days: "Dushanba – Shanba",
      hours: "08:00 – 18:00",
      full: "Dushanba – Shanba: 08:00 – 18:00",
      sunday: "Yakshanba — oldindan yozilish bo'yicha",
    },
    ru: {
      days: "Понедельник – Суббота",
      hours: "08:00 – 18:00",
      full: "Понедельник – Суббота: 08:00 – 18:00",
      sunday: "Воскресенье — по предварительной записи",
    },
    en: {
      days: "Monday – Saturday",
      hours: "08:00 – 18:00",
      full: "Monday – Saturday: 08:00 – 18:00",
      sunday: "Sunday — by prior appointment",
    },
  },
};

export const getExperienceText = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} лет клинического опыта`;
  if (lang === "en") return `${years} Years of Clinical Excellence`;
  return `${years} yillik klinik tajriba`;
};

export const getExperienceBadge = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} Лет Опыта`;
  if (lang === "en") return `${years} Years Experience`;
  return `${years} Yillik Tajriba`;
};

export const getHeroTag = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `Врач-стоматолог женщина в Андижане · ${years} лет опыта`;
  if (lang === "en") return `Certified Female Dentist in Andijan · ${years} Years Experience`;
  return `Andijondagi Tajribali Ayol Stomatolog-Terapevt va Ortoped · ${years} Yillik Tajriba`;
};

export const getServicesTag = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} ЛЕТ КЛИНИЧЕСКОГО ОПЫТА · АНДИЖАН`;
  if (lang === "en") return `${years} YEARS CLINICAL EXCELLENCE · ANDIJAN`;
  return `${years} YILLIK KLINIK TAJRIBA · ANDIJON`;
};
