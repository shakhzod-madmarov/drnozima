import { useSearchParams, Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import Seo from "../components/Seo";
import InlineBookingSection from "../components/InlineBookingSection";
import { DOCTOR_INFO, OPENING_HOURS, getYearsOfExperience } from "../constants/doctor";
import { assets } from "../assets/assets";
import { buildPageWithBreadcrumbs } from "../utils/structuredData";

const T = {
  uz: {
    seoTitle: "Onlayn Qabulga Yozilish | Dr. Nozima Baxtiyarovna — Sevdo Denta Andijon",
    seoDesc:
      "Dr. Nozima Baxtiyarovna qabuliga onlayn yozilish. Andijon shahri, Eski Shahar, «Sevdo Denta» klinikasi. Bo'sh kun va soatni tanlang.",
    name: "Dr. Nozima Baxtiyarovna",
    specialty: "Vrach-Stomatolog, Terapevt va Ortoped",
    clinicLabel: "Klinika",
    clinicVal: "«Sevdo Denta» · Andijon, Eski Shahar (1-qavat)",
    expLabel: "Tajriba",
    expVal: (y) => `${y} yillik amaliyot · ADTI bitiruvchisi`,
    aboutLabel: "Shifokor haqida",
    aboutVal:
      "100% og'riqsiz terapevtik davolash, Germaniya va Yaponiya fotopolimer plombalari, tsirkoniy karonkalar, E-max vinirlar hamda badiiy restavratsiya bo'yicha mutaxassis.",
    onlineHours: "Onlayn qabul: Dushanba – Shanba, 08:00 – 18:00",
    lunch: "Tushlik: 12:00 – 13:00",
    sunday: "Yakshanba: oldindan yozilish bo'yicha",
    note: "Barcha ma'lumotlar to'g'ridan-to'g'ri shifokorning MedInson qabul taqvimiga yetkaziladi.",
    badge: "Dr. Nozima Baxtiyarovna · MedInson Qabul",
  },
  ru: {
    seoTitle: "Онлайн Запись | Д-р Нозима Бахтияровна — Клиника Sevdo Denta Андижан",
    seoDesc:
      "Онлайн запись к Д-ру Нозиме Бахтияровне. г. Андижан, Эски Шахар, клиника «Sevdo Denta». Выберите удобный день и свободное время.",
    name: "Д-р Нозима Бахтияровна",
    specialty: "Врач-Стоматолог, Терапевт и Ортопед",
    clinicLabel: "Клиника",
    clinicVal: "«Sevdo Denta» · г. Андижан, Эски Шахар (1-й этаж)",
    expLabel: "Опыт",
    expVal: (y) => `${y} лет практики · Выпускница АГМИ`,
    aboutLabel: "О враче",
    aboutVal:
      "Специалист по безболезненному лечению кариеса и каналов, протезированию циркониевыми коронками, винирам E-max и художественной реставрации.",
    onlineHours: "Онлайн приём: Понедельник – Суббота, 08:00 – 18:00",
    lunch: "Обед: 12:00 – 13:00",
    sunday: "Воскресенье: по предварительной записи",
    note: "Все данные передаются напрямую в календарь приёма MedInson.",
    badge: "Д-р Нозима Бахтияровна · Приём MedInson",
  },
  en: {
    seoTitle: "Book Online Appointment | Dr. Nozima Baxtiyarovna — Sevdo Denta Andijan",
    seoDesc:
      "Online appointment booking with Dr. Nozima Baxtiyarovna in Andijan at «Sevdo Denta» Clinic. Select an available date and time.",
    name: "Dr. Nozima Baxtiyarovna",
    specialty: "Restorative Dentist & Prosthodontist",
    clinicLabel: "Clinic",
    clinicVal: "«Sevdo Denta» · Andijan, Old City (1st Floor)",
    expLabel: "Experience",
    expVal: (y) => `${y} years clinical practice · ADTI Graduate`,
    aboutLabel: "About the Doctor",
    aboutVal:
      "Specialist in 100% painless restorative care, German & Japanese nano-fillings, zirconia crowns, E-max veneers, and cosmetic tooth preservation.",
    onlineHours: "Online hours: Monday – Saturday, 08:00 – 18:00",
    lunch: "Lunch break: 12:00 – 13:00",
    sunday: "Sunday: by prior appointment",
    note: "All requests are delivered straight to the doctor's MedInson calendar.",
    badge: "Dr. Nozima Baxtiyarovna · MedInson Booking",
  },
};

const Booking = () => {
  const [params] = useSearchParams();
  const preselectedService = params.get("service") || "";
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const t = T[lang] || T.uz;
  const years = getYearsOfExperience();

  const breadcrumbs = [
    {
      name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa",
      path: "/",
    },
    {
      name: lang === "ru" ? "Онлайн запись" : lang === "en" ? "Book Visit" : "Qabulga yozilish",
      path: "/booking",
    },
  ];
  const bookingSchema = buildPageWithBreadcrumbs(
    "ItemPage",
    "/booking",
    t.seoTitle,
    lang,
    breadcrumbs
  );

  return (
    <div className="py-4 sm:py-8 space-y-8 sm:space-y-10">
      <Seo
        title={t.seoTitle}
        description={t.seoDesc}
        schemaJson={bookingSchema}
      />

      {/* Semantic Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link
          to={to("/")}
          className="hover:text-[#086287] transition-colors"
        >
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <span className="text-[#086287] font-bold" aria-current="page">
          {lang === "ru" ? "Онлайн запись" : lang === "en" ? "Book Visit" : "Qabulga yozilish"}
        </span>
      </nav>

      {/* 1. Classic Doctor Profile Card */}
      <article className="bg-white rounded-2xl sm:rounded-3xl border border-[#cbe1ec] shadow-sm overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#086287] to-[#4d8db9]" />
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <figure className="lg:col-span-5 bg-[#f4f8fb] flex items-center justify-center p-4 sm:p-6 m-0">
            <img
              src={assets.dr_nozima_portrait}
              alt={t.name}
              width={420}
              height={520}
              className="w-full max-w-[280px] sm:max-w-[340px] h-auto max-h-[380px] sm:max-h-[420px] rounded-xl sm:rounded-2xl object-cover object-top border border-[#cbe1ec]"
              loading="eager"
              decoding="async"
            />
          </figure>

          <section className="lg:col-span-7 p-4 sm:p-8 flex flex-col justify-center gap-4 sm:gap-5 text-left">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4d8db9]">
                {t.badge}
              </p>
              <h1 className="font-serif-classic text-2xl sm:text-3xl md:text-4xl font-bold text-[#086287] mt-1">
                {t.name}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                {t.specialty}
              </p>
            </header>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-[#f4f8fb] border border-[#cbe1ec]">
                <dt className="text-[11px] font-bold uppercase tracking-wider text-[#4d8db9]">
                  {t.clinicLabel}
                </dt>
                <dd className="font-bold text-[#086287] mt-0.5">{t.clinicVal}</dd>
              </div>

              <div className="p-3 rounded-xl bg-[#f4f8fb] border border-[#cbe1ec]">
                <dt className="text-[11px] font-bold uppercase tracking-wider text-[#4d8db9]">
                  {t.expLabel}
                </dt>
                <dd className="font-bold text-[#086287] mt-0.5">
                  {t.expVal(years)}
                </dd>
              </div>
            </dl>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong className="text-[#086287]">{t.aboutLabel}: </strong>
              {t.aboutVal}
            </p>

            <footer className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <div className="space-y-0.5">
                <p className="font-medium text-slate-700">{t.onlineHours}</p>
                <p className="text-[11px] text-slate-400">
                  {t.lunch} · {t.sunday}
                </p>
              </div>
              <a
                href={DOCTOR_INFO.phoneHref}
                className="text-xs font-bold text-[#086287] hover:underline"
              >
                {DOCTOR_INFO.phone}
              </a>
            </footer>
          </section>
        </div>
      </article>

      {/* 2. Interactive Schedule & Booking Form */}
      <InlineBookingSection initialService={preselectedService} />

      <aside className="text-center text-xs text-slate-500 max-w-xl mx-auto">
        <p>{t.note}</p>
      </aside>
    </div>
  );
};

export default Booking;
