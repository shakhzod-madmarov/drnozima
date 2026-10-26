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
import CertificatesShowcase from "../components/CertificatesShowcase";
import DentalSticker from "../components/DentalSticker";
import { FAQ_ITEMS } from "../constants/faq";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import { buildHomepageSchema } from "../utils/structuredData";
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

  const T = {
    uz: {
      kicker: "Ayol Stomatolog-Terapevt · Ortoped",
      doctorName: "Dr. Nozima Baxtiyarovna",
      tagline:
        "Andijonda og'riqsiz tish davolash, zamonaviy plombalash va estetik tsirkoniy karonkalar. Bemorlar uchun 100% qulay, xavfsiz va samimiy muhit.",
      ctaBook: "Qabulga Yozilish",
      stat1Num: `${getYearsOfExperience()}+ yil`,
      stat1Label: "Klinik Tajriba",
      stat2Num: "1,000+",
      stat2Label: "Mamnun Bemorlar",
      stat3Num: "100%",
      stat3Label: "Toza va Og'riqsiz",
      clinicBadge: "Sevdo Denta Klinikasi",
    },
    ru: {
      kicker: "Врач-Стоматолог Женщина · Терапевт и Ортопед",
      doctorName: "Д-р Нозима Бахтияровна",
      tagline:
        "Бережное лечение кариеса без боли, эстетическая реставрация и циркониевые коронки в Андижане. Комфортный индивидуальный приём.",
      ctaBook: "Записаться на Приём",
      stat1Num: `${getYearsOfExperience()}+ лет`,
      stat1Label: "Клинического Опыта",
      stat2Num: "1,000+",
      stat2Label: "Пациентов",
      stat3Num: "100%",
      stat3Label: "Без Боли и Чисто",
      clinicBadge: "Клиника Sevdo Denta",
    },
    en: {
      kicker: "Female Dentist · Restorative & Prosthodontics",
      doctorName: "Dr. Nozima Baxtiyarovna",
      tagline:
        "Gentle painless dental fillings, advanced therapy, and aesthetic zirconia crowns in Andijan. Reassuring and safe patient care.",
      ctaBook: "Book Appointment",
      stat1Num: `${getYearsOfExperience()}+ Yrs`,
      stat1Label: "Clinical Experience",
      stat2Num: "1,000+",
      stat2Label: "Treated Patients",
      stat3Num: "100%",
      stat3Label: "Clean & Painless",
      clinicBadge: "Sevdo Denta Clinic",
    },
  };
  const t = T[lang] || T.uz;

  return (
    <section className="relative overflow-hidden rounded-3xl bg-white border border-[#D1E4F0] shadow-sm mt-3">
      {/* Editorial Accent Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#086288] via-[#4D8DBA] to-[#086288]" />

      <div className="p-5 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Editorial Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-5 text-left">
          {/* Single Clean Kicker Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#086288]/5 border border-[#086288]/15 text-xs font-bold uppercase tracking-wider text-[#086288]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.kicker}</span>
          </div>

          {/* Doctor Title & Clear Tagline */}
          <div className="space-y-3">
            <h1 className="font-serif-classic text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#086288] leading-[1.12]">
              {t.doctorName}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              {t.tagline}
            </p>
          </div>

          {/* Primary Action Buttons (Only 2 clear actions) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => scrollToBooking("tish-davolash")}
              className="px-7 py-3.5 rounded-xl bg-[#086288] hover:bg-[#4D8DBA] text-white font-semibold text-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <IconClock className="w-4 h-4 text-white" />
              <span>{t.ctaBook}</span>
              <span>↓</span>
            </button>

            <a
              href={DOCTOR_INFO.phoneHref}
              className="px-5 py-3.5 rounded-xl bg-[#F4F8FB] hover:bg-[#E6F1F7] border border-[#D1E4F0] text-[#086288] font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <IconPhone className="w-4 h-4 text-[#4D8DBA] shrink-0" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>
          </div>

          {/* Key Metrics Row */}
          <div className="pt-6 border-t border-[#D1E4F0] grid grid-cols-3 divide-x divide-[#D1E4F0] text-left max-w-lg">
            <div className="pr-4 sm:pr-6">
              <p className="font-serif-classic text-xl sm:text-2xl font-bold text-[#086288]">
                {t.stat1Num}
              </p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {t.stat1Label}
              </p>
            </div>
            <div className="px-4 sm:px-6">
              <p className="font-serif-classic text-xl sm:text-2xl font-bold text-[#086288]">
                {t.stat2Num}
              </p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {t.stat2Label}
              </p>
            </div>
            <div className="pl-4 sm:pl-6">
              <p className="font-serif-classic text-xl sm:text-2xl font-bold text-[#4D8DBA]">
                {t.stat3Num}
              </p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {t.stat3Label}
              </p>
            </div>
          </div>
        </div>

        {/* Right Portrait Column (5 cols) — Clean, Simple, Single Photo Card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D1E4F0] shadow-sm aspect-[4/4.8] max-w-[420px] mx-auto bg-slate-100">
            <img
              src={assets.dr_nozima_clinic}
              alt="Dr. Nozima Baxtiyarovna — Stomatolog Andijon"
              width={780}
              height={936}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle frosted glass badge */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/70 shadow-sm flex items-center justify-between">
              <div>
                <p className="font-serif-classic text-xs sm:text-sm font-bold text-[#086288] leading-none">
                  {t.clinicBadge}
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Andijon · A.Fitrat 251B
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#086288] bg-[#086288]/10 px-2.5 py-1 rounded-lg shrink-0">
                {getExperienceBadge(lang)}
              </span>
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
      "«Composite Veneers» frontal tishlar restavratsiyasi bo'yicha maxsus sertifikatlangan mutaxassis (Toshkent, 2022)",
      "MARVA UNIVERSAL ACADEMY va Toshkent Davlat Stomatologiya Instituti sertifikati: «Tishni to'liq koronka uchun charxlash»",
      "«Sevdo Denta» klinikasida shaxsiy jihozlangan kabinet, yapon & nemis materiallari va 100% og'riqsiz yondashuv",
    ],
    ru: [
      `Врач-стоматолог, терапевт и ортопед (${getYearsOfExperience()}+ лет клинической практики, выпускница АГМИ)`,
      "Сертифицированный специалист по фронтальной реставрации «Composite Veneers» (г. Ташкент, 2022)",
      "Сертификат MARVA UNIVERSAL ACADEMY и ТашГСИ: «Препарирование зубов под полную коронку» (Лицензия № 019772)",
      "Оснащённый личный кабинет в клинике «Sevdo Denta», материалы 3M и Estelite, 100% протокол без боли",
    ],
    en: [
      `Restorative Dentist & Prosthodontist (${getYearsOfExperience()}+ years continuous clinical practice, ASMI graduate)`,
      "Certified specialist in «Composite Veneers» anterior aesthetic tooth restoration (Tashkent, 2022)",
      "Formally certified by MARVA UNIVERSAL ACADEMY & Tashkent State Dental Institute in precision crown preparation",
      "Dedicated operatory room at «Sevdo Denta» Clinic, genuine 3M & Estelite nano-hybrids, 100% painless care",
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

            <div className="mt-3 p-3.5 sm:p-4 rounded-2xl bg-[#086288] text-white flex flex-wrap items-center justify-between gap-2.5 shadow-xs">
              <div className="min-w-0">
                <p className="text-[10.5px] sm:text-[11px] uppercase tracking-wider text-[#97D7FF] font-bold truncate">
                  {lang === "uz"
                    ? "Stomatolog-Terapevt · Ortoped"
                    : lang === "ru"
                    ? "Стоматолог-Терапевт · Ортопед"
                    : "Dentist · Restorative & Prosthodontist"}
                </p>
                <p className="font-serif-classic text-lg sm:text-xl font-bold mt-0.5 truncate">
                  Dr. Nozima Baxtiyarovna
                </p>
              </div>
              <span className="px-3 sm:px-3.5 py-1.5 rounded-full bg-[#FFEFC4] text-[#086288] text-[11px] sm:text-xs font-bold shadow-xs shrink-0">
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
  const homepageSchema = buildHomepageSchema(lang, FAQ_ITEMS, SERVICES_CATALOG);

  return (
    <div className="space-y-4">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
        schemaJson={homepageSchema}
      />
      <HeroSection />
      <ClinicalPillars />
      <ServicesOverview />
      <DoctorBioSpotlight />
      <div className="py-2">
        <CertificatesShowcase />
      </div>
      <div className="py-6">
        <InlineBookingSection sectionId="booking" />
      </div>
      <FaqAccordion />
      <ClinicLocationMap />
    </div>
  );
};

export default Home;
