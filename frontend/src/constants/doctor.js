/**
 * Single source of truth for Dr. Nozima Baxtiyarovna's career facts and clinic hours.
 *
 * Experience years: 7 years of clinical practice.
 * University: Andijon davlat tibbiyot instituti (ADTI).
 * Specialities: Terapiya va ortopediya.
 */
export const DOCTOR_INFO = {
  name: "Dr. Nozima Baxtiyarovna",
  fullName: "Nozima Baxtiyarovna",
  careerStartYear: 2019,
  yearsOfExperience: 7,
  university: "Andijon davlat tibbiyot instituti (ADTI)",
  specialities: "Terapiya va Ortopediya",
  specialitiesList: ["Terapiya", "Ortopediya", "Estetik Stomatologiya", "Endodontiya"],
  phone: "+998 (91) 619-95-00",
  phoneHref: "tel:+998916199500",
  phoneRaw: "+998916199500",
  email: "dr@nozima.com",
  telegramUrl: "https://t.me/Miss_Dentist_95",
  telegramHandle: "@Miss_Dentist_95",
  instagramUrl: "https://www.instagram.com/sevdo_denta/",
  instagramHandle: "@sevdo_denta",
};

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
  if (lang === "ru") return `Стоматолог-терапевт и ортопед в Андижане · ${years} лет опыта`;
  if (lang === "en") return `Dentist & Prosthodontist in Andijan · ${years} Years Experience`;
  return `Andijondagi Zamonaviy Stomatolog-Terapevt va Ortoped · ${years} Yillik Tajriba`;
};

export const getServicesTag = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} ЛЕТ КЛИНИЧЕСКОГО ОПЫТА · АНДИЖАН`;
  if (lang === "en") return `${years} YEARS CLINICAL EXCELLENCE · ANDIJAN`;
  return `${years} YILLIK KLINIK TAJRIBA · ANDIJON`;
};
