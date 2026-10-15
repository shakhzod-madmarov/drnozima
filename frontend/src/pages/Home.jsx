import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { PRIMARY_CLINIC } from "../constants/clinics";
import {
  DOCTOR_INFO,
  getYearsOfExperience,
  getExperienceBadge,
} from "../constants/doctor";
import { PAGE_SEO, PAGE_KEYWORDS } from "../constants/seo";
import Seo from "../components/Seo";
import InlineBookingSection from "../components/InlineBookingSection";
import ClinicLocationMap from "../components/ClinicLocationMap";
import FaqAccordion from "../components/FaqAccordion";
import DentalSticker from "../components/DentalSticker";
import { FAQ_ITEMS } from "../constants/faq";
import { buildFaqSchema } from "../utils/structuredData";
import {
  IconShieldCheck,
  IconLocationPin,
  IconSparkleStar,
  IconToothCrown,
  IconClock,
  IconPhone,
  IconCheckCircle,
  IconTherapeuticTooth,
  IconVeneerTooth,
  IconDentalImplant,
  IconLaserWhitening,
  IconDigitalXray,
  IconAward,
} from "../components/MedicalIcons";

const scrollToBooking = (serviceId = null, serviceTitle = "") => {
  if (typeof window !== "undefined") {
    if (serviceId || serviceTitle) {
      window.dispatchEvent(
        new CustomEvent("medinson-prefill-booking", {
          detail: {
            service: serviceId || undefined,
            note: serviceTitle || undefined,
          },
        }),
      );
    }
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

/* ═══════════════════════════════════════════════════════════════════
   1. EDITORIAL HERO — DR. NOZIMA BAXTIYAROVNA
   ═══════════════════════════════════════════════════════════════════ */
const HeroSection = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const [activePhoto, setActivePhoto] = useState("studio");

  const T = {
    uz: {
      badge: "Vrach-Stomatolog · Andijon",
      doctorName: "Dr. Nozima Baxtiyarovna",
      specialtyTitle: "Stomatolog-Terapevt · Ortoped",
      headline: "Tabiiy va Sog'lom Tabassum Uchun Ehtiyotkor va Og'riqsiz Stomatologiya",
      subtitle:
        "Andijon shahrida sifatli va og'riqsiz tish davolash, tishlarni plombalash, karonka qo'yish hamda har bir bemorga samimiy e'tibor va maslahat.",
      ctaBook: "Qabulga Yozilish",
      ctaServices: "Xizmatlar Bilan Tanishish",
      stat1Num: `${getYearsOfExperience()}+ yil`,
      stat1Label: "Klinik Tajriba",
      stat2Num: "1,000+",
      stat2Label: "Mamnun Bemorlar",
      stat3Num: "100%",
      stat3Label: "Toza va Og'riqsiz",
      photo1Tab: "Klinik Portret",
      photo2Tab: "Ish Jarayoni",
      clinicLocationText: "Andijon sh., Eski Shahar (Old City), 1-qavat",
    },
    ru: {
      badge: "Врач-Стоматолог · Андижан",
      doctorName: "Д-р Нозима Бахтияровна",
      specialtyTitle: "Стоматолог-Терапевт · Ортопед",
      headline: "Бережная и Безболезненная Стоматология для Здоровой Улыбки",
      subtitle:
        "Качественное и комфортное лечение зубов в Андижане, надёжное пломбирование, протезирование и внимательное отношение к каждому пациенту.",
      ctaBook: "Записаться на Приём",
      ctaServices: "Все Услуги",
      stat1Num: `${getYearsOfExperience()}+ лет`,
      stat1Label: "Клинического Опыта",
      stat2Num: "1,000+",
      stat2Label: "Пациентов",
      stat3Num: "100%",
      stat3Label: "Без Боли и Чисто",
      photo1Tab: "Портрет Врача",
      photo2Tab: "В Кабинете",
      clinicLocationText: "г. Андижан, Эски Шахар (Old City), 1-й этаж",
    },
    en: {
      badge: "Dental Surgeon · Andijan",
      doctorName: "Dr. Nozima Baxtiyarovna",
      specialtyTitle: "Restorative Dentist · Prosthodontist",
      headline: "Gentle & 100% Painless Dental Care for Your Natural Smile",
      subtitle:
        "Dedicated, attentive dental care in Andijan: cavity treatments, restorative crowns, and gentle dental checkups.",
      ctaBook: "Book Appointment",
      ctaServices: "Explore Services",
      stat1Num: `${getYearsOfExperience()}+ Yrs`,
      stat1Label: "Clinical Experience",
      stat2Num: "1,000+",
      stat2Label: "Treated Patients",
      stat3Num: "100%",
      stat3Label: "Clean & Painless",
      photo1Tab: "Studio Portrait",
      photo2Tab: "In Clinic",
      clinicLocationText: "Andijan, Old City (Eski Shahar), 1st Floor",
    },
  };
  const t = T[lang] || T.uz;

  return (
    <section className="relative overflow-hidden rounded-3xl bg-white border border-[#D1E4F0] shadow-sm mt-3">
      {/* Editorial Accent Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#086288] via-[#4D8DBA] to-[#086288]" />

      <div className="p-4 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Editorial Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#086288]/5 border border-[#086288]/15 text-xs font-bold uppercase tracking-wider text-[#086288]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {t.badge}
            </span>
            <a
              href={PRIMARY_CLINIC.maps.yandex}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F8FB] hover:bg-[#E6F1F7] border border-[#D1E4F0] text-xs font-medium text-slate-700 transition-colors"
            >
              <IconLocationPin className="w-3.5 h-3.5 text-[#4D8DBA] shrink-0" />
              <span>{t.clinicLocationText}</span>
            </a>
          </div>

          {/* Doctor Title & Headline */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#4D8DBA]">
              {t.specialtyTitle}
            </p>
            <h1 className="font-serif-classic text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#086288] leading-[1.12]">
              {t.doctorName}
            </h1>
            <p className="pt-1 text-base sm:text-xl font-bold text-slate-800 leading-snug max-w-2xl">
              {t.headline}
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
            {t.subtitle}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
            <button
              type="button"
              onClick={() => scrollToBooking("tish-davolash")}
              className="px-6 py-3.5 rounded-xl bg-[#086288] hover:bg-[#4D8DBA] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.ctaBook}</span>
              <span>↓</span>
            </button>

            <a
              href={DOCTOR_INFO.phoneHref}
              className="px-5 py-3.5 rounded-xl bg-[#F4F8FB] hover:bg-[#E6F1F7] border border-[#D1E4F0] text-[#086288] font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
            >
              <IconPhone className="w-4 h-4 text-[#4D8DBA] shrink-0" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>

            <Link
              to={to("/services")}
              className="px-4 py-3.5 rounded-xl text-[#4D8DBA] hover:text-[#086288] hover:bg-[#F4F8FB] font-semibold text-xs sm:text-sm transition-colors inline-flex items-center justify-center text-center"
            >
              {t.ctaServices} →
            </Link>
          </div>

          {/* Key Metrics Row */}
          <div className="pt-5 sm:pt-6 border-t border-[#D1E4F0] grid grid-cols-3 divide-x divide-[#D1E4F0] text-center sm:text-left max-w-xl">
            <div className="pr-2 sm:pr-6">
              <p className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold text-[#086288]">
                {t.stat1Num}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight">
                {t.stat1Label}
              </p>
            </div>
            <div className="px-2 sm:px-6">
              <p className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold text-[#086288]">
                {t.stat2Num}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight">
                {t.stat2Label}
              </p>
            </div>
            <div className="pl-2 sm:pl-6">
              <p className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold text-[#4D8DBA]">
                {t.stat3Num}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight">
                {t.stat3Label}
              </p>
            </div>
          </div>
        </div>

        {/* Right Portrait Column (5 cols) */}
        <div className="lg:col-span-5">
          <div className="max-w-[400px] mx-auto bg-[#f8fafc] p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl border border-[#D1E4F0]">
            {/* Image Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#D1E4F0] aspect-[4/4.4]">
              <img
                src={
                  activePhoto === "studio"
                    ? assets.dr_nozima_portrait
                    : assets.dr_nozima_clinic
                }
                alt="Dr. Nozima Baxtiyarovna — Stomatolog Andijon"
                width={780}
                height={840}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-top transition-opacity duration-300"
              />
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
                <DentalSticker
                  variant="tooth-sparkle"
                  color="primary"
                  size="sm"
                  sublabel="ADTI · 7 YIL"
                  label={
                    lang === "ru"
                      ? "100% Без Боли"
                      : lang === "en"
                      ? "100% Painless"
                      : "100% Og'riqsiz"
                  }
                />
              </div>
            </div>

            {/* Sub-bar with Doctor Name & Photo Switcher */}
            <div className="mt-3 pt-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <img
                  src="/logo.png"
                  alt="Logo"
                  width={34}
                  height={34}
                  className="w-8 h-8 object-contain shrink-0"
                />
                <div>
                  <p className="font-serif-classic text-base font-bold text-[#086288] leading-none">
                    Nozima Baxtiyarovna
                  </p>
                  <p className="text-[11px] font-medium text-[#4D8DBA] mt-0.5">
                    {getExperienceBadge(lang)}
                  </p>
                </div>
              </div>

              {/* Photo Switcher */}
              <div
                role="tablist"
                aria-label="Surat tanlash"
                className="inline-flex bg-white p-0.5 rounded-lg border border-[#D1E4F0]"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activePhoto === "studio"}
                  onClick={() => setActivePhoto("studio")}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-colors cursor-pointer ${
                    activePhoto === "studio"
                      ? "bg-[#086288] text-white"
                      : "text-slate-600 hover:text-[#086288]"
                  }`}
                >
                  {t.photo1Tab}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activePhoto === "clinic"}
                  onClick={() => setActivePhoto("clinic")}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-colors cursor-pointer ${
                    activePhoto === "clinic"
                      ? "bg-[#086288] text-white"
                      : "text-slate-600 hover:text-[#086288]"
                  }`}
                >
                  {t.photo2Tab}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   2. CLINICAL STANDARDS (3 CORE PILLARS)
   ═══════════════════════════════════════════════════════════════════ */
const ClinicalPillars = () => {
  const { lang } = useLanguage();

  const pillars = [
    {
      icon: <IconToothCrown className="w-6 h-6 text-[#086288]" />,
      badge: { uz: "EHTIYOTKOR YONDASHUV", ru: "БЕРЕЖНЫЙ ПОДХОД", en: "CARE & QUALITY" },
      title: {
        uz: "Tishlarni Maksimal Asrab Qolish",
        ru: "Сохранение Живых Зубов",
        en: "Tooth-Preserving Dentistry",
      },
      desc: {
        uz: "Har bir tishga alohida e'tibor berib, tabiiy tish to'qimasini iloji boricha asrash, mustahkam va sifatli plombalash.",
        ru: "Индивидуальный подход к каждому зубу: максимальное сохранение живых тканей и качественная надёжная реставрация.",
        en: "Focusing on conservative dentistry to preserve your natural teeth with durable, well-placed restorative care.",
      },
    },
    {
      icon: <IconShieldCheck className="w-6 h-6 text-[#086288]" />,
      badge: { uz: "TOZALIK VA GIGIYENA", ru: "ЧИСТОТА И ГИГИЕНА", en: "CLEAN & SAFE" },
      title: {
        uz: "Toza va Xavfsiz Muolaja",
        ru: "Чистота и Индивидуальный Набор",
        en: "Clean & Hygienic Standards",
      },
      desc: {
        uz: "Har bir bemor uchun maxsus tozalangan va sterillangan asboblar to'plami hamda gigiyena qoidalariga qat'iy rioya qilish.",
        ru: "Для каждого пациента используется индивидуально обработанный стерильный набор инструментов и строго соблюдается гигиена.",
        en: "Every patient is treated with thoroughly sanitized, sterile instruments adhering to rigorous hygiene standards.",
      },
    },
    {
      icon: <IconSparkleStar className="w-6 h-6 text-[#086288]" />,
      badge: { uz: "OG'RIQSIZ VA MULOYIM", ru: "БЕЗ БОЛИ И СТРАХА", en: "GENTLE & PAINLESS" },
      title: {
        uz: "Og'riqsiz va Xotirjam Qabul",
        ru: "Спокойный Приём Без Боли",
        en: "Gentle & Painless Experience",
      },
      desc: {
        uz: "Zamonaviy og'riqsizlantirish va muloyim muomala — stomatolog qabulida o'zingizni erkin va xotirjam his qilasiz.",
        ru: "Деликатное обезболивание и доброжелательное отношение, чтобы визит к стоматологу прошёл без страха и переживаний.",
        en: "Gentle local anesthesia and a reassuring, calm approach so you feel completely at ease throughout your visit.",
      },
    },
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4D8DBA]">
          {lang === "uz"
            ? "Klinik Standartlarimiz"
            : lang === "ru"
            ? "Клинические Стандарты"
            : "Clinical Standards"}
        </p>
        <h2 className="mt-2 font-serif-classic text-3xl sm:text-4xl font-bold text-[#086288]">
          {lang === "uz"
            ? "Yuqori Sifat, Halollik va Og'riqsiz Davolash"
            : lang === "ru"
            ? "Высокое Качество, Честность и Комфорт"
            : "Precision, Honesty & Painless Dentistry"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D1E4F0] shadow-sm flex flex-col justify-between hover:border-[#4D8DBA] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#F4F8FB] border border-[#D1E4F0] flex items-center justify-center">
                  {p.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F4F8FB] text-[#4D8DBA] border border-[#D1E4F0]">
                  {p.badge[lang]}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#086288] mb-2">
                {p.title[lang]}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {p.desc[lang]}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#4D8DBA]">
              <span>Dr. Nozima Baxtiyarovna</span>
              <IconCheckCircle className="w-4 h-4 text-[#4D8DBA]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   3. DENTAL SERVICES GRID
   ═══════════════════════════════════════════════════════════════════ */
const ServicesOverview = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const services = [
    {
      id: "tish-davolash",
      icon: <IconTherapeuticTooth className="w-5 h-5 text-[#086288]" />,
      image: assets.service_therapy,
      tag: { uz: "Terapiya", ru: "Терапия", en: "Restorative" },
      title: {
        uz: "Terapevtik Davolash (Karies va Kanal)",
        ru: "Терапевтическое Лечение (Кариес и Каналы)",
        en: "Restorative Care (Caries & Root Canal)",
      },
      desc: {
        uz: "Karies, pulpit va periodontitni 100% og'riqsiz davolash. Germaniya (3M Filtek) va Yaponiya (Estelite) plombalari bilan tiklash.",
        ru: "Бережное лечение кариеса и корневых каналов без боли с реставрацией композитами Германии и Японии.",
        en: "100% painless cavity and root canal treatment restored with German (3M Filtek) and Japanese (Estelite) composites.",
      },
      duration: { uz: "30–45 daqiqa", ru: "30–45 минут", en: "30–45 mins" },
    },
    {
      id: "implantatsiya",
      icon: <IconDentalImplant className="w-5 h-5 text-[#086288]" />,
      image: assets.service_implant,
      tag: { uz: "Implantologiya", ru: "Имплантация", en: "Implants" },
      title: {
        uz: "Tish Implantatsiyasi (Osstem va Straumann)",
        ru: "Имплантация Зубов (Osstem и Straumann)",
        en: "Titanium Dental Implants (Osstem & Straumann)",
      },
      desc: {
        uz: "Qo'shni sog'lom tishlarni charxlamasdan, Janubiy Koreya (Osstem) va Shveysariya (Straumann) implantlari yordamida tiklash.",
        ru: "Надёжное восстановление утраченных зубов корейскими и швейцарскими титановыми имплантатами.",
        en: "Replace missing teeth permanently without grinding adjacent teeth using Korean and Swiss implants.",
      },
      duration: { uz: "20 daqiqa", ru: "20 минут", en: "20 mins" },
    },
    {
      id: "ortopediya",
      icon: <IconToothCrown className="w-5 h-5 text-[#086288]" />,
      image: assets.service_crowns,
      tag: { uz: "Ortopediya", ru: "Ортопедия", en: "Prosthodontics" },
      title: {
        uz: "Tsirkoniy Karonkalar (Zirconia CAD/CAM)",
        ru: "Циркониевые Коронки (CAD/CAM)",
        en: "Metal-Free Zirconia Crowns",
      },
      desc: {
        uz: "Metall-siz, milkni qoraytirmaydigan, o'ta mustahkam va tabiiy tishdek nur o'tkazuvchan tsirkoniy karonkalar.",
        ru: "Высокоточные безметалловые коронки из диоксида циркония с идеальным прилеганием и естественной прозрачностью.",
        en: "Biocompatible metal-free zirconia crowns with lifelike light transmission and zero dark gum lines.",
      },
      duration: { uz: "2–3 kun", ru: "2–3 дня", en: "2–3 days" },
    },
    {
      id: "estetik-stomatologiya",
      icon: <IconVeneerTooth className="w-5 h-5 text-[#086288]" />,
      image: assets.service_veneers,
      tag: { uz: "Estetika", ru: "Виниры", en: "Veneers" },
      title: {
        uz: "E-max Keramik Vinirlar (Gollivud Tabassumi)",
        ru: "Керамические Виниры E-max",
        en: "E-max Porcelain Veneers",
      },
      desc: {
        uz: "0.3 mm ultra-yupqa keramik vinirlar orqali tishlar shakli, oqligi va simmetriyasini minimal charxlash bilan tiklash.",
        ru: "Ультратонкие виниры E-max для создания идеальной формы и оттенка зоны улыбки с минимальной обработкой.",
        en: "Ultra-thin 0.3mm ceramic veneers to harmonize tooth proportions, shade, and spacing with minimal prep.",
      },
      duration: { uz: "1–2 tashrif", ru: "1–2 визита", en: "1–2 visits" },
    },
    {
      id: "tish-oqartirish",
      icon: <IconLaserWhitening className="w-5 h-5 text-[#086288]" />,
      image: assets.service_whitening,
      tag: { uz: "Oqartirish", ru: "Отбеливание", en: "Whitening" },
      title: {
        uz: "Philips ZOOM 4 Xavfsiz Oqartirish",
        ru: "Отбеливание Philips ZOOM 4",
        en: "Philips ZOOM 4 Whitening",
      },
      desc: {
        uz: "Sovuq LED nuri ostida emalga zarar yetkazmasdan 45 daqiqada tishlarni 6–8 tonga xavfsiz oqartirish.",
        ru: "Бережное осветление эмали на 6–8 тонов за 45 минут с защитой от гиперчувствительности.",
        en: "Safe 6–8 shade brightening in 45 minutes using cold-LED technology with enamel remineralization.",
      },
      duration: { uz: "45 daqiqa", ru: "45 минут", en: "45 mins" },
    },
    {
      id: "rentgen-diagnostika",
      icon: <IconDigitalXray className="w-5 h-5 text-[#086288]" />,
      image: assets.service_xray,
      tag: { uz: "Diagnostika & Xirurgiya", ru: "3D Диагностика", en: "Diagnostics" },
      title: {
        uz: "3D Rentgen Diagnostika va Og'riqsiz Jarrohlik",
        ru: "3D Рентген-Диагностика и Удаление Зубов",
        en: "3D X-Ray Diagnostics & Atraumatic Surgery",
      },
      desc: {
        uz: "Kam nurlanishli raqamli 3D rentgen viziografiya orqali aniq tashxis qo'yish hamda aql tishlarini og'riqsiz olish.",
        ru: "Точная диагностика на цифровом рентген-визиографе и атравматичное удаление зубов мудрости без боли.",
        en: "Low-dose digital 3D X-ray diagnostics and gentle wisdom tooth extraction with zero pain.",
      },
      duration: { uz: "15–20 daqiqa", ru: "15–20 минут", en: "15–20 mins" },
    },
  ];

  return (
    <section className="py-6 sm:py-12 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-[#D1E4F0] shadow-sm">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 pb-5 sm:pb-6 border-b border-slate-100">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4D8DBA]">
            {lang === "uz"
              ? "Stomatologik Xizmatlar"
              : lang === "ru"
              ? "Стоматологические Услуги"
              : "Dental Services"}
          </p>
          <h2 className="mt-1.5 font-serif-classic text-2xl sm:text-3xl lg:text-4xl font-bold text-[#086288]">
            {lang === "uz"
              ? "Asosiy Davolash Yo'nalishlari"
              : lang === "ru"
              ? "Основные Направления Лечения"
              : "Core Clinical Specialties"}
          </h2>
        </div>

        <Link
          to={to("/services")}
          className="self-start md:self-auto px-4 sm:px-5 py-2.5 rounded-xl bg-[#F4F8FB] hover:bg-[#086288] text-[#086288] hover:text-white border border-[#D1E4F0] text-xs sm:text-sm font-semibold transition-colors inline-block text-center"
        >
          {lang === "uz"
            ? "Barcha xizmatlar va narxlar →"
            : lang === "ru"
            ? "Все услуги и калькулятор →"
            : "All services & calculator →"}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="group rounded-2xl bg-[#f8fafc] hover:bg-white border border-[#D1E4F0] hover:border-[#4D8DBA] transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md"
          >
            <Link
              to={to(`/services/${s.id}`)}
              className="block focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4D8DBA]"
              aria-label={`${s.title[lang]} - ${lang === "uz" ? "Batafsil ma'lumot" : lang === "ru" ? "Подробнее" : "Details"}`}
            >
              <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-900">
                <img
                  src={s.image}
                  alt={s.title[lang]}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f38]/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#086288]">
                  {s.tag[lang]}
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-[#086288] group-hover:text-[#4D8DBA] transition-colors">
                  {s.title[lang]}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {s.desc[lang]}
                </p>
              </div>
            </Link>

            <div className="px-4 sm:px-5 pb-3.5 sm:pb-4 pt-3 border-t border-[#D1E4F0] flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium flex items-center gap-1.5">
                <IconClock className="w-3.5 h-3.5 text-[#4D8DBA]" />
                <span>{s.duration[lang]}</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollToBooking(s.id, s.title[lang])}
                  className="px-3.5 py-1.5 rounded-lg bg-[#086288] hover:bg-[#4D8DBA] text-white font-semibold text-[11px] transition-colors cursor-pointer"
                >
                  {lang === "uz" ? "Yozilish" : lang === "ru" ? "Записаться" : "Book"}
                </button>
                <Link
                  to={to(`/services/${s.id}`)}
                  className="font-semibold text-[#4D8DBA] hover:text-[#086288] transition-colors"
                >
                  {lang === "uz" ? "Batafsil →" : lang === "ru" ? "Подробнее →" : "Details →"}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   4. DOCTOR BIO SPOTLIGHT
   ═══════════════════════════════════════════════════════════════════ */
const DoctorBioSpotlight = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const credentialsMap = {
    uz: [
      `Vrach-stomatolog, terapevt va ortoped (${getYearsOfExperience()}+ yillik uzluksiz klinik amaliyot, ADTI bitiruvchisi)`,
      "Germaniya (3M Filtek), Yaponiya (Estelite) va Shveysariya (Ivoclar) original materiallari bilan mikron aniqlikda restavratsiya",
      "Monolit tsirkoniy karonkalar (CAD/CAM) va E-max press-keramikasi bo'yicha maxsus sertifikatlangan mutaxassis",
      "Har bir bemor uchun individual avtoklavlangan steril kraft-paketlar va 100% og'riqsiz yondashuv",
    ],
    ru: [
      `Врач-стоматолог, терапевт и ортопед (${getYearsOfExperience()}+ лет клинической практики, выпускница АГМИ)`,
      "Художественная реставрация оригинальными материалами из Германии (3M Filtek) и Японии (Estelite)",
      "Сертифицированный специалист по безметалловым циркониевым коронкам CAD/CAM и ультратонким винирам E-max",
      "Индивидуальные крафт-пакеты, европейский автоклав класса B и 100% безболезненный протокол лечения",
    ],
    en: [
      `Restorative Dentist & Prosthodontist (${getYearsOfExperience()}+ years continuous clinical practice, ASMI graduate)`,
      "Micro-invasive composite artistry using authentic German (3M Filtek) & Japanese (Estelite) nano-hybrids",
      "Certified specialist in digital CAD/CAM monolithic zirconia crowns and E-max porcelain veneers",
      "Hospital-grade Class-B sterilization pouches and two-stage painless anesthesia for every patient",
    ],
  };
  const credentials = credentialsMap[lang] || credentialsMap.uz;

  return (
    <section className="py-6 sm:py-12">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 border border-[#D1E4F0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        {/* Portrait Column (5 cols) */}
        <div className="lg:col-span-5">
          <div className="max-w-sm mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-[#D1E4F0] bg-[#f8fafc] shadow-sm">
              <img
                src={assets.dr_nozima_clinic}
                alt="Dr. Nozima Baxtiyarovna — Stomatolog Andijon"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-[360px] sm:h-[420px] object-cover object-top"
              />
              <div className="absolute top-3 right-3 z-10">
                <DentalSticker
                  variant="doctor-badge"
                  color="gold"
                  size="sm"
                  sublabel="SEVDO DENTA"
                  label={getExperienceBadge(lang)}
                />
              </div>
            </div>

            <div className="mt-3 p-4 rounded-2xl bg-[#086288] text-white flex items-center justify-between shadow-xs">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#97D7FF] font-bold">
                  {lang === "uz"
                    ? "Stomatolog-Terapevt · Ortoped"
                    : lang === "ru"
                    ? "Стоматолог-Терапевт · Ортопед"
                    : "Dentist · Restorative & Prosthodontist"}
                </p>
                <p className="font-serif-classic text-xl font-bold mt-0.5">
                  Dr. Nozima Baxtiyarovna
                </p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-[#FFEFC4] text-[#086288] text-xs font-bold shadow-xs">
                {getExperienceBadge(lang)}
              </span>
            </div>
          </div>
        </div>

        {/* Copy Column (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4D8DBA]">
            {lang === "uz"
              ? "Shifokor Haqida"
              : lang === "ru"
              ? "О Вашем Враче"
              : "Meet Your Dentist"}
          </p>

          <h2 className="font-serif-classic text-3xl sm:text-4xl font-bold text-[#086288] leading-tight">
            {lang === "uz"
              ? "Nozima Baxtiyarovna — Har Bir Tishni Asrash va Mukammal Tabassum Ustasi"
              : lang === "ru"
              ? "Nozima Baxtiyarovna — Эксперт по Сохранению и Протезированию Зубов"
              : "Nozima Baxtiyarovna — Dedicated to Saving & Restoring Every Smile"}
          </h2>

          <blockquote className="pl-4 border-l-2 border-[#4D8DBA] text-sm sm:text-base text-slate-600 leading-relaxed italic">
            {lang === "uz"
              ? "«Mening asosiy maqsadim — bemor stomatolog kreslosiga o'tirgan ilk daqiqadanoq qo'rquv va og'riqni unutishi, har bir muolaja esa uzoq yillar davomida ishonchli xizmat qilishidir.»"
              : lang === "ru"
              ? "«Моя главная цель — чтобы каждый пациент с первой минуты в кресле забыл о страхе и боли, а каждая реставрация или коронка служила долгие годы.»"
              : "“My core philosophy is ensuring every patient feels completely relaxed and pain-free from the very first moment in the chair, while crafting restorations engineered to last.”"}
          </blockquote>

          <ul className="space-y-2.5 pt-1">
            {credentials.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium"
              >
                <IconCheckCircle className="w-4 h-4 text-[#4D8DBA] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3 flex flex-wrap gap-3">
            <Link
              to={to("/about")}
              className="px-6 py-3 rounded-xl bg-[#086288] hover:bg-[#4D8DBA] text-white font-semibold text-xs sm:text-sm transition-colors text-center inline-block"
            >
              {lang === "uz"
                ? "Shifokor haqida batafsil →"
                : lang === "ru"
                ? "Подробнее о враче →"
                : "Read Full Biography →"}
            </Link>
            <button
              type="button"
              onClick={() => scrollToBooking("tish-davolash")}
              className="px-6 py-3 rounded-xl bg-[#F4F8FB] hover:bg-[#E6F1F7] text-[#086288] border border-[#D1E4F0] font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              {lang === "uz"
                ? "Konsultatsiyaga yozilish ↓"
                : lang === "ru"
                ? "Записаться на консультацию ↓"
                : "Schedule Consultation ↓"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   MAIN HOME COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
const Home = () => {
  const { lang } = useLanguage();
  const seo = PAGE_SEO.home[lang] || PAGE_SEO.home.uz;
  const faqSchema = buildFaqSchema(FAQ_ITEMS, lang);

  return (
    <div className="space-y-4">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
        schemaJson={faqSchema}
      />
      <HeroSection />
      <ClinicalPillars />
      <ServicesOverview />
      <DoctorBioSpotlight />
      <div className="py-6">
        <InlineBookingSection sectionId="booking" />
      </div>
      <FaqAccordion />
      <ClinicLocationMap />
    </div>
  );
};

export default Home;
