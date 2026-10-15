import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, getYearsOfExperience, getExperienceBadge } from "../constants/doctor";
import { PAGE_SEO, PAGE_KEYWORDS, SITE_ORIGIN } from "../constants/seo";
import Seo from "../components/Seo";
import { buildAboutPageSchema } from "../utils/structuredData";
import ClinicLocationMap from "../components/ClinicLocationMap";
import CertificatesShowcase from "../components/CertificatesShowcase";
import {
  IconAward,
  IconShieldCheck,
  IconSparkleStar,
  IconPhone,
  IconTelegram,
  IconInstagram,
  IconCheckCircle,
} from "../components/MedicalIcons";

const About = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.about[lang] || PAGE_SEO.about.uz;
  const years = getYearsOfExperience();

  const timeline = [
    {
      year: {
        uz: "2019 – Hozirgacha",
        ru: "2019 – По настоящее время",
        en: "2019 – Present",
      },
      title: {
        uz: `Vrach-Stomatolog, Terapevt va Ortoped (${years} Yillik Klinik Tajriba)`,
        ru: `Врач-Стоматолог, Терапевт и Ортопед (${years} Лет Клинической Практики)`,
        en: `Restorative Dentist & Prosthodontist (${years} Years Clinical Practice)`,
      },
      desc: {
        uz: "Andijon shahri «Sevdo Denta» klinikasida minglab bemorlarning tishlarini 100% og'riqsiz davolash, zamonaviy tsirkoniy karonka, E-max vinirlar va estetik restavratsiya bilan tiklash.",
        ru: "Успешная клиническая практика в клинике «Sevdo Denta» в Андижане: безболезненная терапия, циркониевые коронки, виниры E-max и художественная реставрация.",
        en: "Extensive clinical practice at «Sevdo Denta» Clinic in Andijan across restorative endodontics, zirconia crowns, E-max porcelain veneers, and cosmetic smile designs.",
      },
    },
    {
      year: {
        uz: "2019",
        ru: "2019",
        en: "2019",
      },
      title: {
        uz: "Andijon Davlat Tibbiyot Instituti (ADTI) — Oliy Ma'lumot",
        ru: "Андижанский Государственный Медицинский Институт (АГМИ)",
        en: "Andijan State Medical Institute (ADTI) — Graduation",
      },
      desc: {
        uz: "Stomatologiya yo'nalishi bo'yicha oliy tibbiy ta'limni a'lo baholarga tamomlab, umumiy stomatologiya, terapiya va ortopedik reabilitatsiya bo'yicha chuqur amaliy bilimga ega bo'ldi.",
        ru: "Успешное окончание стоматологического факультета АГМИ, фундаментальная подготовка по терапевтической и ортопедической стоматологии.",
        en: "Graduated with honors from the Faculty of Dentistry at Andijan State Medical Institute with intensive residency in restorative and prosthodontic protocols.",
      },
    },
    {
      year: {
        uz: "2021 – 2025",
        ru: "2021 – 2025",
        en: "2021 – 2025",
      },
      title: {
        uz: "Zamonaviy CAD/CAM Tsirkoniy, E-max Vinirlar va Badiiy Restavratsiya",
        ru: "CAD/CAM Цирконий, Виниры E-max и Нанокомпозитная Реставрация",
        en: "CAD/CAM Zirconia, E-max Veneers & Advanced Composite Layering",
      },
      desc: {
        uz: "Xalqaro va respublika master-klasslarida Germaniya (3M Filtek), Yaponiya (Estelite) va Ivoclar Vivadent materiallari yordamida tishlarni og'riqsiz va mikron aniqlikda restavratsiya qilish sertifikatlari.",
        ru: "Повышение квалификации по биомиметической реставрации композитами 3M Filtek и Estelite, а также микропротезированию коронками из диоксида циркония.",
        en: "Advanced masterclasses in biomimetic composite layering using German (3M Filtek) & Japanese (Estelite) materials and monolithic zirconia crowns.",
      },
    },
    {
      year: {
        uz: "Klinik Standart",
        ru: "Стандарт Качества",
        en: "Clinical Standard",
      },
      title: {
        uz: "100% Og'riqsiz, Ehtiyotkor va Steril Stomatologik Yondashuv",
        ru: "100% Безболезненный, Бережный и Стерильный Подход",
        en: "100% Painless, Gentle & Hospital-Grade Sterile Standard",
      },
      desc: {
        uz: "Har bir bemor uchun individual sterillangan kraft-paketlar, 2 bosqichli og'riqsiz mikro-anesteziya va sertifikatlangan original materiallar.",
        ru: "Индивидуальные крафт-пакеты, бережная двухэтапная анестезия без боли от укола и заботливое отношение к каждому пациенту.",
        en: "Individual autoclaved instrument pouches, two-stage painless anesthesia, and gentle personalized patient care.",
      },
    },
  ];

  const values = [
    {
      icon: <IconShieldCheck className="w-6 h-6 text-[#086288]" />,
      title: {
        uz: "100% Sterillik (Anti-SPID / Anti-Gepatit)",
        ru: "100% Стерильность (Анти-СПИД / Гепатит)",
        en: "100% Sterility (Anti-HIV / Hepatitis)",
      },
      desc: {
        uz: "Har bir bemor uchun alohida kraft-paketda avtoklavlangan steril asboblar ko'z oldingizda ochiladi.",
        ru: "Индивидуальный крафт-пакет со стерильными инструментами вскрывается прямо перед пациентом.",
        en: "Autoclaved sterile instrument pouches are unsealed right in front of every patient.",
      },
    },
    {
      icon: <IconSparkleStar className="w-6 h-6 text-[#086288]" />,
      title: {
        uz: "Ikki Bosqichli Og'riqsiz Anesteziya",
        ru: "Двухэтапная Анестезия Без Боли",
        en: "Two-Stage Painless Anesthesia",
      },
      desc: {
        uz: "Avval milk maxsus gel bilan muzlatiladi, so'ng anestetik yuboriladi — ukol og'rig'i mutlaqo sezilmaydi.",
        ru: "Десна предварительно обезболивается гелем, поэтому вы не почувствуете даже укола.",
        en: "Topical numbing gel is applied before gentle anesthesia so you never feel the needle.",
      },
    },
    {
      icon: <IconAward className="w-6 h-6 text-[#086288]" />,
      title: {
        uz: "Germaniya, Yaponiya va Shveysariya Materiallari",
        ru: "Материалы из Германии, Японии и Швейцарии",
        en: "German, Japanese & Swiss Materials",
      },
      desc: {
        uz: "3M Filtek (Germaniya), Estelite (Yaponiya), Ivoclar (Shveysariya) original mahsulotlari bilan ishlash.",
        ru: "Оригинальные сертифицированные материалы 3M Filtek (Германия), Estelite (Япония) и Ivoclar (Швейцария).",
        en: "Authentic 3M Filtek, Tokuyama Estelite, and Ivoclar materials with formal clinical warranty.",
      },
    },
  ];

  const breadcrumbs = [
    {
      name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa",
      path: "/",
    },
    {
      name: lang === "ru" ? "О докторе" : lang === "en" ? "About Doctor" : "Dr. Nozima haqida",
      path: "/about",
    },
  ];
  const aboutSchema = buildAboutPageSchema(lang, breadcrumbs);

  return (
    <div className="py-4 sm:py-8 space-y-12">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
        ogImage={`${SITE_ORIGIN}/dr_nozima_portrait.webp`}
        schemaJson={aboutSchema}
      />

      {/* Semantic Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link
          to={to("/")}
          className="hover:text-[#086288] transition-colors"
        >
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <span className="text-[#086288] font-bold" aria-current="page">
          {lang === "ru" ? "О докторе" : lang === "en" ? "About Doctor" : "Dr. Nozima haqida"}
        </span>
      </nav>

      {/* Hero Bio Card */}
      <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 border border-[#D1E4F0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left Dual Portrait Showcase (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative max-w-sm mx-auto space-y-3">
            <div className="rounded-2xl overflow-hidden border border-[#D1E4F0] bg-[#f4f8fb]">
              <img
                src={assets.dr_nozima_portrait}
                alt="Dr. Nozima Baxtiyarovna — Stomatolog va Ortoped Andijon"
                width={760}
                height={760}
                fetchPriority="high"
                decoding="async"
                className="w-full h-[320px] sm:h-[420px] object-cover object-top"
              />
            </div>

            {/* In Clinic Card */}
            <div className="grid grid-cols-12 gap-3 items-center bg-[#f4f8fb] p-2.5 sm:p-3 rounded-2xl border border-[#D1E4F0]">
              <img
                src={assets.dr_nozima_clinic}
                alt="Dr. Nozima Baxtiyarovna qabulda"
                width={160}
                height={160}
                loading="lazy"
                decoding="async"
                className="col-span-4 w-full h-20 sm:h-24 rounded-xl object-cover object-top border border-[#D1E4F0]"
              />
              <div className="col-span-8 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#4D8DBA] block">
                  Andijon · Eski Shahar
                </span>
                <p className="text-xs font-bold text-[#086288] leading-snug">
                  {lang === "uz"
                    ? "Old City (Eski Shahar), 1-qavat"
                    : lang === "ru"
                    ? "Эски Шахар (Old City), 1-й этаж"
                    : "Old City (Eski Shahar), 1st Floor"}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5">
                  <a
                    href={DOCTOR_INFO.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4D8DBA] hover:text-[#086288]"
                  >
                    <IconTelegram className="w-3.5 h-3.5 text-[#4D8DBA]" />
                    <span>{DOCTOR_INFO.telegramHandle}</span>
                  </a>
                  <span className="text-slate-300">·</span>
                  <a
                    href={DOCTOR_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#086288] hover:text-[#4D8DBA]"
                  >
                    <IconInstagram className="w-3.5 h-3.5 text-[#086288]" />
                    <span>{DOCTOR_INFO.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Biography Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4D8DBA]">
            {lang === "uz"
              ? `Stomatolog-Terapevt · Ortoped · ${years} Yillik Tajriba`
              : lang === "ru"
              ? `Стоматолог-Терапевт · Ортопед · ${years} Лет Опыта`
              : `Restorative Dentist & Prosthodontist · ${years} Years Experience`}
          </p>

          <h1 className="font-serif-classic text-3xl sm:text-4xl md:text-5xl font-bold text-[#086288] leading-tight">
            Dr. Nozima Baxtiyarovna
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#4D8DBA]">
            {lang === "uz"
              ? "Andijon davlat tibbiyot instituti bitiruvchisi · Vrach-stomatolog, terapevt va ortoped"
              : lang === "ru"
              ? "Выпускница АГМИ · Врач-стоматолог, терапевт и ортопед (г. Андижан)"
              : "Graduate of Andijan State Medical Institute · Dentist & Prosthodontist, Andijan"}
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            {lang === "uz"
              ? `Dr. Nozima Baxtiyarovna 7 yillik amaliy klinik faoliyati davomida Andijon shahridagi «Sevdo Denta» klinikasida yuzlab oilalar va bemorlarga 100% og'riqsiz terapevtik davolash, zamonaviy plomba, tsirkoniy karonkalar hamda E-max vinirlar bilan xizmat ko'rsatib kelmoqda. Uning asosiy maqsadi har bir bemorga individual mehr va e'tibor qaratish, tishlarni tabiiy go'zalligi va mustahkamligini saqlagan holda davolashdir.`
              : lang === "ru"
              ? `Д-р Нозима Бахтияровна имеет 7-летний клинический опыт и ведёт приём в клинике «Sevdo Denta» в Андижане. Специализируется на безболезненном терапевтическом лечении зубов, высокоэстетичных пломбах, протезировании циркониевыми коронками и винирами E-max с чутким отношением к каждому пациенту.`
              : `Dr. Nozima Baxtiyarovna brings 7 years of clinical excellence at «Sevdo Denta» Dental Clinic in Andijan. Specializing in restorative dental therapy, painless root canal treatments, and lifelike zirconia crowns, she is dedicated to gentle, compassionate patient care.`}
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
            <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f4f8fb] border border-[#D1E4F0] text-center min-w-0">
              <p className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold text-[#086288]">{years}</p>
              <p className="text-[9.5px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight break-words">
                {lang === "uz" ? "Yil Tajriba" : lang === "ru" ? "Лет Опыта" : "Years Exp."}
              </p>
            </div>
            <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f4f8fb] border border-[#D1E4F0] text-center min-w-0">
              <p className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold text-[#086288]">ADTI</p>
              <p className="text-[9.5px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight break-words">
                {lang === "uz" ? "Diplomi" : lang === "ru" ? "Диплом АГМИ" : "Medical Degree"}
              </p>
            </div>
            <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f4f8fb] border border-[#D1E4F0] text-center min-w-0">
              <p className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold text-[#086288]">100%</p>
              <p className="text-[9.5px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight break-words">
                {lang === "uz" ? "Og'riqsiz" : lang === "ru" ? "Без Боли" : "Painless"}
              </p>
            </div>
            <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f4f8fb] border border-[#D1E4F0] text-center min-w-0">
              <p className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold text-[#4D8DBA]">100%</p>
              <p className="text-[9.5px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight break-words">
                {lang === "uz" ? "Steril Asboblar" : lang === "ru" ? "Стерильно" : "Sterile Standard"}
              </p>
            </div>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
            <Link
              to={to("/booking")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#086288] hover:bg-[#064b69] text-white font-semibold text-xs sm:text-sm transition-colors text-center inline-block cursor-pointer"
            >
              {lang === "uz"
                ? "Dr. Nozima Qabuliga Yozilish →"
                : lang === "ru"
                ? "Записаться к Д-ру Нозиме →"
                : "Book Appointment with Dr. Nozima →"}
            </Link>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-[#f4f8fb] hover:bg-[#e6f1f7] border border-[#D1E4F0] text-[#086288] font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <IconPhone className="w-4 h-4 text-[#4D8DBA]" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Core Clinical Guarantees */}
      <section>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4D8DBA]">
            {lang === "uz" ? "Kafolat va Xavfsizlik" : lang === "ru" ? "Гарантия и Безопасность" : "Safety & Warranty"}
          </p>
          <h2 className="mt-1.5 font-serif-classic text-2xl sm:text-3xl md:text-4xl font-bold text-[#086288]">
            {lang === "uz"
              ? "Klinikamizning 3 Asosiy Qoidasi"
              : lang === "ru"
              ? "3 Главных Стандарта Нашей Клиники"
              : "3 Core Standards of Our Clinic"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#D1E4F0] shadow-sm space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f4f8fb] border border-[#D1E4F0] flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#086288]">
                {v.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {v.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Career & Education Timeline */}
      <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-[#D1E4F0] shadow-sm">
        <h2 className="font-serif-classic text-2xl sm:text-3xl font-bold text-[#086288] mb-5 sm:mb-6">
          {lang === "uz"
            ? "Kasbiy Faoliyat va Malaka Bosqichlari"
            : lang === "ru"
            ? "Профессиональный Путь и Квалификация"
            : "Clinical Experience & Qualifications"}
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#f4f8fb] border border-[#D1E4F0]"
            >
              <span className="inline-block px-3 py-1 rounded-lg bg-[#086288] text-white text-xs font-semibold shrink-0 self-start">
                {typeof item.year === "object" ? item.year[lang] : item.year}
              </span>
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#086288]">
                  {item.title[lang]}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Diplomas & Clinical Certificates */}
      <CertificatesShowcase />

      {/* Location Map */}
      <ClinicLocationMap compact />
    </div>
  );
};

export default About;
