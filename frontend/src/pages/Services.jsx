import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, getServicesTag } from "../constants/doctor";
import { PAGE_SEO, PAGE_KEYWORDS } from "../constants/seo";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import Seo from "../components/Seo";
import { buildServicesCatalogSchema } from "../utils/structuredData";
import Interactive3DCostCalculator from "../components/Interactive3DCostCalculator";
import SmileAssessmentWizard from "../components/SmileAssessmentWizard";
import PatientCareGuides from "../components/PatientCareGuides";
import {
  IconCheckCircle,
  IconClock,
  IconShieldCheck,
  IconPhone,
} from "../components/MedicalIcons";


const Services = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.services[lang] || PAGE_SEO.services.uz;

  const breadcrumbs = [
    {
      name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa",
      path: "/",
    },
    {
      name: lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar",
      path: "/services",
    },
  ];
  const catalogSchema = buildServicesCatalogSchema(SERVICES_CATALOG, lang, breadcrumbs);

  return (
    <div className="py-6 sm:py-10 space-y-10">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
        schemaJson={catalogSchema}
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
          {lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar"}
        </span>
      </nav>

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#086288]/5 text-[#086288] border border-[#086288]/15">
          <IconShieldCheck className="w-4 h-4 text-[#4D8DBA]" />
          <span>{getServicesTag(lang)}</span>
        </span>
        <h1 className="font-serif-classic text-3xl sm:text-5xl font-bold text-[#086288] tracking-tight">
          {lang === "uz"
            ? "Stomatologik Xizmatlar Katalogi"
            : lang === "ru"
            ? "Каталог Стоматологических Услуг"
            : "Dental Services & Specialties"}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {lang === "uz"
            ? "Andijonda tajribali ayol stomatolog Dr. Nozima Baxtiyarovna tomonidan Germaniya, Yaponiya va Janubiy Koreya texnologiyalari asosida 100% og'riqsiz va kafolatli muolajalar."
            : lang === "ru"
            ? "Все виды современного безболезненного лечения, протезирования и эстетической стоматологии у квалифицированного врача-стоматолога женщины Д-ра Нозимы Бахтияровны в Андижане."
            : "Comprehensive dental treatments in Andijan performed by certified female dentist Dr. Nozima Baxtiyarovna using German, Japanese, and South Korean clinical protocols."}
        </p>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {SERVICES_CATALOG.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl sm:rounded-3xl border border-[#D1E4F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Service Photo Banner */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title[lang]}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 sm:px-3.5 py-1 rounded-full bg-white/95 text-[#086288] shadow-xs">
                    {service.category[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-white bg-slate-950/75 backdrop-blur-xs px-2.5 sm:px-3 py-1 rounded-full border border-white/20">
                    <IconClock className="w-3.5 h-3.5 text-[#97D7FF]" />
                    <span>{service.duration[lang]}</span>
                  </span>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 flex items-center gap-2.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white text-[#086288] shadow-md flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-emerald-300 bg-slate-950/70 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-400/30">
                    {service.warranty[lang]}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#086288]">
                  {service.title[lang]}
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc[lang]}
                </p>

                <ul className="mt-4 sm:mt-5 space-y-2.5">
                  {service.highlights[lang].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <IconCheckCircle className="w-4 h-4 text-[#4D8DBA] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <Link
                to={to(`/services/${service.id}`)}
                className="text-xs sm:text-sm font-bold text-[#4D8DBA] hover:text-[#086288] hover:underline"
              >
                {lang === "uz"
                  ? "Batafsil ma'lumot →"
                  : lang === "ru"
                  ? "Подробно об услуге →"
                  : "Read full procedure guide →"}
              </Link>

              <Link
                to={`${to("/booking")}?service=${service.id}`}
                className="px-5 py-2.5 rounded-xl bg-[#086288] hover:bg-[#4D8DBA] text-white text-xs font-semibold shadow-xs transition-colors inline-block text-center w-full sm:w-auto"
              >
                {lang === "uz"
                  ? "Qabulga Yozilish"
                  : lang === "ru"
                  ? "Записаться"
                  : "Book Visit"}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Treatment Blueprint & Booking */}
      <Interactive3DCostCalculator />

      {/* Interactive Smile Diagnostic Wizard */}
      <SmileAssessmentWizard />

      {/* Post-Treatment Care Instructions */}
      <PatientCareGuides />

      {/* Bottom Consultation Card */}
      <div className="rounded-2xl sm:rounded-3xl bg-[#086288] text-white p-5 sm:p-8 lg:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif-classic text-xl sm:text-2xl lg:text-3xl font-bold">
            {lang === "uz"
              ? "Qaysi muolaja sizga mos kelishini bilmayapsizmi?"
              : lang === "ru"
              ? "Не знаете, какая процедура подойдёт именно вам?"
              : "Not sure which dental treatment is right for you?"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200">
            {lang === "uz"
              ? "Dastlabki ko'rik va diagnostikaga yoziling — Dr. Nozima Baxtiyarovna siz uchun aniq davolash rejasini tuzib beradi."
              : lang === "ru"
              ? "Запишитесь на первичный осмотр — Д-р Нозима Бахтияровна составит индивидуальный план лечения."
              : "Book an initial consultation — Dr. Nozima Baxtiyarovna will create a personalized treatment plan for your smile."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
          <Link
            to={to("/booking")}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#086288] hover:bg-[#F4F8FB] font-bold text-xs sm:text-sm shadow-sm transition-colors text-center inline-block"
          >
            {lang === "uz" ? "Konsultatsiyaga Yozilish →" : lang === "ru" ? "Записаться на Осмотр →" : "Book Consultation →"}
          </Link>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <IconPhone className="w-4 h-4 text-[#97D7FF]" />
            <span>{DOCTOR_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
