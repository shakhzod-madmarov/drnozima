import { useParams, Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import { DOCTOR_INFO, getExperienceBadge } from "../constants/doctor";
import { PAGE_KEYWORDS, SITE_ORIGIN, getPageSeo } from "../constants/seo";
import Seo from "../components/Seo";
import { buildMedicalProcedureSchema } from "../utils/structuredData";
import {
  IconCheckCircle,
  IconClock,
  IconShieldCheck,
  IconPhone,
  IconTelegram,
  IconAward,
} from "../components/MedicalIcons";

const ServiceDetail = () => {
  const { serviceId, slug } = useParams();
  const activeServiceId = serviceId || slug;
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const service =
    SERVICES_CATALOG.find((s) => s.id === activeServiceId) || SERVICES_CATALOG[0];

  const steps = {
    uz: [
      {
        num: "01",
        title: "Ko'rik va Raqamli Rentgen Diagnostika",
        desc: "Dr. Nozima Baxtiyarovna tish holatini diqqat bilan tekshiradi, zarur bo'lsa raqamli rentgen orqali ildiz kanallari ko'riladi va aniq davolash rejasi tuziladi.",
      },
      {
        num: "02",
        title: "2 Bosqichli Og'riqsiz Anesteziya",
        desc: "Avval milk maxsus muzlatuvchi gel bilan og'riqsizlantiriladi, so'ng Yevropa anestetigi yuboriladi — bemor hatto igna sanchilishini ham sezmaydi.",
      },
      {
        num: "03",
        title: "Mikroskopik Aniqlikda Asosiy Muolaja",
        desc: "Germaniya, Yaponiya va Janubiy Koreyaning original sertifikatlangan materiallari yordamida tish funksiyasi va estetikasi tiklanadi.",
      },
      {
        num: "04",
        title: "Sifat Nazorati va Kafolat",
        desc: "Muolaja yakunida tishning chaynash balansi tekshiriladi, sayqallanadi va uzoq muddatli kafolat hamda parvarish tavsiyalari beriladi.",
      },
    ],
    ru: [
      {
        num: "01",
        title: "Осмотр и Цифровая Рентген-Диагностика",
        desc: "Д-р Нозима Бахтияровна проводит детальный осмотр, при необходимости делает прицельный цифровой снимок и составляет прозрачный план лечения.",
      },
      {
        num: "02",
        title: "Двухэтапная Анестезия Без Боли",
        desc: "Десна предварительно обрабатывается обезболивающим гелем, после чего мягко вводится европейский анестетик.",
      },
      {
        num: "03",
        title: "Основной Этап Лечения / Реставрации",
        desc: "Работа выполняется с использованием сертифицированных материалов из Германии, Японии и Южной Кореи в условиях 100% стерильности.",
      },
      {
        num: "04",
        title: "Финальная Полировка и Гарантия",
        desc: "Проверка прикуса, полировка до естественного блеска эмали и выдача рекомендаций с официальной гарантией.",
      },
    ],
    en: [
      {
        num: "01",
        title: "Consultation & Digital X-Ray Diagnostics",
        desc: "Dr. Nozima Baxtiyarovna performs a thorough exam and digital X-ray imaging to create a transparent treatment plan.",
      },
      {
        num: "02",
        title: "Two-Stage Painless Anesthesia",
        desc: "Topical numbing gel is applied to the gum before gentle European anesthesia so you never feel the needle.",
      },
      {
        num: "03",
        title: "Precision Restorative Procedure",
        desc: "Treatment is carried out in a 100% sterile suite using genuine German, Japanese, and South Korean dental materials.",
      },
      {
        num: "04",
        title: "Quality Verification & Warranty",
        desc: "Bite calibration, high-gloss enamel polishing, and formal clinical warranty with personalized aftercare guidance.",
      },
    ],
  }[lang];

  const seoSuffix = {
    uz: "Ayol Stomatolog Dr. Nozima | Sevdo Denta Andijon",
    ru: "Врач-Стоматолог Женщина Д-р Нозима | Sevdo Denta Андижан",
    en: "Female Dentist Dr. Nozima | Sevdo Denta Andijan",
  }[lang];
  const serviceImageUrl = service.image?.startsWith("http")
    ? service.image
    : `${SITE_ORIGIN}${service.image}`;

  const breadcrumbs = [
    {
      name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa",
      path: "/",
    },
    {
      name: lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar",
      path: "/services",
    },
    {
      name: service.title[lang] || service.title.uz,
      path: `/services/${service.id}`,
    },
  ];
  const procedureSchema = buildMedicalProcedureSchema(service, lang, breadcrumbs);
  const serviceSeo = getPageSeo(service.id, lang);

  return (
    <div className="py-6 sm:py-10 space-y-12">
      <Seo
        title={serviceSeo?.title || `${service.title[lang]} — ${seoSuffix}`}
        description={serviceSeo?.description || service.shortDesc[lang]}
        keywords={PAGE_KEYWORDS[lang]}
        ogImage={serviceImageUrl}
        schemaJson={procedureSchema}
      />

      {/* Semantic Breadcrumbs & Back Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2 flex-wrap">
          <Link
            to={to("/")}
            className="hover:text-[#086288] transition-colors"
          >
            {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
          </Link>
          <span>/</span>
          <Link
            to={to("/services")}
            className="hover:text-[#086288] transition-colors"
          >
            {lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar"}
          </Link>
          <span>/</span>
          <span className="text-[#086288] font-bold" aria-current="page">
            {service.title[lang]}
          </span>
        </nav>

        <Link
          to={to("/services")}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#086288] transition-colors"
        >
          <span>←</span>
          <span>
            {lang === "uz"
              ? "Barcha xizmatlarga qaytish"
              : lang === "ru"
              ? "Назад ко всем услугам"
              : "Back to all services"}
          </span>
        </Link>
      </div>

      {/* Hero Card */}
      <div className="bg-[#086288] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-sm border border-[#4D8DBA]/30 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#97D7FF] text-xs font-bold uppercase tracking-wider">
            {service.category[lang]}
          </span>
          <h1 className="font-serif-classic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {service.title[lang]}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl">
            {service.shortDesc[lang]}
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-semibold">
              <IconClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#97D7FF]" />
              <span>{service.duration[lang]}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-[11px] sm:text-xs font-semibold">
              <IconShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
              <span>{service.warranty[lang]}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#4D8DBA]/50 border border-white/15 text-white text-[11px] sm:text-xs font-semibold">
              <IconAward className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#97D7FF]" />
              <span>Dr. Nozima Baxtiyarovna · {getExperienceBadge(lang)}</span>
            </span>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
            <Link
              to={`${to("/booking")}?service=${service.id}`}
              className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-white text-[#086288] hover:bg-[#F4F8FB] font-bold text-xs sm:text-sm shadow-sm transition-colors text-center inline-block"
            >
              {lang === "uz"
                ? "Ushbu Muolajaga Yozilish →"
                : lang === "ru"
                ? "Записаться на Процедуру →"
                : "Book This Procedure →"}
            </Link>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="w-full sm:w-auto justify-center px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <IconPhone className="w-4 h-4 text-[#97D7FF]" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>
            <a
              href={DOCTOR_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-[#4D8DBA] hover:bg-[#326c9c] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <IconTelegram className="w-4 h-4 text-white" />
              <span>Telegram</span>
            </a>
          </div>
        </div>

        {/* Service Photo Frame (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-white/20 shadow-md bg-slate-900">
            <img
              src={service.image}
              alt={service.title[lang]}
              width={900}
              height={600}
              fetchPriority="high"
              decoding="async"
              className="w-full h-52 sm:h-72 lg:h-80 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Advantages & Procedure Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#D1E4F0] shadow-sm space-y-4 sm:space-y-5">
          <h2 className="font-serif-classic text-xl sm:text-2xl font-bold text-[#086288]">
            {lang === "uz"
              ? "Asosiy Ustunliklar va Texnologiya"
              : lang === "ru"
              ? "Преимущества и Технология Лечения"
              : "Key Clinical Advantages"}
          </h2>

          <ul className="space-y-3">
            {service.highlights[lang].map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-[#D1E4F0] text-xs sm:text-sm text-slate-800 font-medium"
              >
                <IconCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#4D8DBA] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Step-by-Step Procedure */}
        <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#D1E4F0] shadow-sm space-y-4 sm:space-y-5">
          <h2 className="font-serif-classic text-xl sm:text-2xl font-bold text-[#086288]">
            {lang === "uz"
              ? "Muolaja Qanday Bosqichlarda O'tadi?"
              : lang === "ru"
              ? "Этапы Проведения Процедуры"
              : "Step-by-Step Treatment Process"}
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {steps.map((st) => (
              <div
                key={st.num}
                className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-[#D1E4F0]"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#086288] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {st.num}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#086288]">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 sm:mt-1 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Services Navigation */}
      <div className="pt-4">
        <h2 className="font-serif-classic text-xl font-bold text-[#086288] mb-4">
          {lang === "uz"
            ? "Boshqa Stomatologik Xizmatlar:"
            : lang === "ru"
            ? "Другие Стоматологические Услуги:"
            : "Explore Other Dental Services:"}
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {SERVICES_CATALOG.filter((s) => s.id !== service.id).map((other) => (
            <Link
              key={other.id}
              to={to(`/services/${other.id}`)}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#F4F8FB] text-[#086288] border border-[#D1E4F0] text-xs font-semibold transition-colors inline-block"
            >
              {other.title[lang]} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
