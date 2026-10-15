import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IconAward, IconCheckCircle } from "./MedicalIcons";
import { useModalA11y } from "../hooks/useModalA11y";
import { getA11yLabels } from "../constants/a11yLabels";

const certificates = [
  {
    id: "cert-adti",
    year: "2019",
    org: "Andijon Davlat Tibbiyot Instituti (ADTI)",
    badge: { uz: "OLIY TIBBIY MA'LUMOT", ru: "ВЫСШЕЕ МЕДИЦИНСКОЕ ОБРАЗОВАНИЕ", en: "MEDICAL UNIVERSITY DEGREE" },
    title: {
      uz: "Vrach-Stomatolog Mutaxassisligi Diplomi",
      ru: "Диплом Врача-Стоматолога (АГМИ)",
      en: "Doctor of Stomatology / Dental Medicine Diploma",
    },
    desc: {
      uz: "Andijon davlat tibbiyot instituti stomatologiya fakulteti diplomi. Umumiy stomatologiya, terapiya, ortopediya va jarrohlik bo'yicha fundamental klinik ta'lim.",
      ru: "Диплом стоматологического факультета Андижанского государственного медицинского института по специальности «Врач-стоматолог».",
      en: "Graduation diploma from Andijan State Medical Institute (ADTI) Faculty of Dentistry with formal clinical residency honors.",
    },
    serial: "ADTI-DENT-2019-NB",
  },
  {
    id: "cert-terapiya",
    year: "2024",
    org: "O'zbekiston Stomatologlar Assotsiatsiyasi & 3M Health Care",
    badge: { uz: "ZAMONAVIY TERAPIYA", ru: "СОВРЕМЕННАЯ ТЕРАПИЯ", en: "RESTORATIVE EXCELLENCE" },
    title: {
      uz: "Og'riqsiz Endodontiya va Fotopolimer Restavratsiya",
      ru: "Безболезненная Эндодонтия и Нанокомпозитная Реставрация",
      en: "Painless Endodontics & Nano-Composite Restoration",
    },
    desc: {
      uz: "Germaniya (3M Filtek) va Yaponiya (Estelite) materiallari yordamida tish kanallarini 3D apeks-lokator nazoratida og'riqsiz davolash va tish tojini to'liq tiklash.",
      ru: "Клинический сертификат по микро-эндодонтии и послойной реставрации кариозных полостей немецкими и японскими нано-композитами.",
      en: "Clinical masterclass certificate in microscopic root canal obturation and biomimetic direct tooth restorations.",
    },
    serial: "UZ-THERAPY-2024-NB",
  },
  {
    id: "cert-ortopediya",
    year: "2023",
    org: "Xalqaro Estetik Stomatologiya Akademiyasi",
    badge: { uz: "ORTOPEDIK STOMATOLOGIYA", ru: "ОРТОПЕДИЧЕСКАЯ СТОМАТОЛОГИЯ", en: "ADVANCED PROSTHODONTICS" },
    title: {
      uz: "CAD/CAM Tsirkoniy va E-max Keramik Koronkalar",
      ru: "Протезирование Диоксидом Циркония и E-max Керамикой",
      en: "Digital CAD/CAM Zirconia & E-max Ceramic Prosthodontics",
    },
    desc: {
      uz: "Yemirilgan yoki sinib ketgan tishlarni metall-siz, milkka 100% moslashuvchan monolit tsirkoniy hamda E-max keramikasi yordamida mukammal qayta tiklash.",
      ru: "Сертификат специалиста по безметалловому протезированию монолитным диоксидом циркония и винирами E-max.",
      en: "Specialist certification in biocompatible monolithic zirconia restorations and micro-invasive smile design.",
    },
    serial: "UZ-PROSTHO-2023-NB",
  },
  {
    id: "cert-aesthetic",
    year: "2022",
    org: "Ivoclar Vivadent · European Dental Education",
    badge: { uz: "ESTETIK TABASSUM DIZAYNI", ru: "ХУДОЖЕСТВЕННАЯ РЕСТАВРАЦИЯ", en: "AESTHETIC SMILE DESIGN" },
    title: {
      uz: "Old Tishlar Badiiy Restavratsiyasi va Gollivud Tabassumi",
      ru: "Художественная Реставрация Фронтальных Зубов",
      en: "Anterior Aesthetic Composite Layering & Smile Makeover",
    },
    desc: {
      uz: "Tishlar orasidagi yoriqlar (diastema) va nuqsonlarni tabiiy emal optikasi bilan og'riqsiz va tish to'qimasini minimal charxlab tiklash master-klassi.",
      ru: "Диплом европейского мастер-класса по высокоэстетичной реставрации зоны улыбки с сохранением живых тканей зуба.",
      en: "Hands-on European masterclass diploma in minimally invasive anterior aesthetic enhancements and natural shade matching.",
    },
    serial: "IVOCLAR-2022-7712",
  },
];

const CertificatesShowcase = () => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const [activeCert, setActiveCert] = useState(null);
  const closeCert = () => setActiveCert(null);
  const modalRef = useModalA11y(Boolean(activeCert), closeCert);

  return (
    <section className="py-10 sm:py-16 bg-[#f4f8fb] border-t border-[#D1E4F0]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-[#e6f1f7] text-[#086288] border border-[#086288]/20">
            <IconAward className="w-4 h-4 text-[#086288]" />
            <span>
              {lang === "uz"
                ? "DIPLOM VA KLINIK SERTIFIKATLAR"
                : lang === "ru"
                ? "ДИПЛОМЫ И СЕРТИФИКАТЫ"
                : "DIPLOMAS & CLINICAL CERTIFICATIONS"}
            </span>
          </span>
          <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-serif-classic">
            {lang === "uz"
              ? "Tasdiqlangan Tibbiy Malaka & 7 Yillik Tajriba"
              : lang === "ru"
              ? "Подтверждённая Квалификация и 7 Лет Опыта"
              : "Verified Medical Credentials & 7 Years Experience"}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600">
            {lang === "uz"
              ? "Dr. Nozima Baxtiyarovna Andijon davlat tibbiyot institutining bitiruvchisi bo'lib, terapiya va ortopediya sohalarida 7 yillik amaliy tajribaga ega."
              : lang === "ru"
              ? "Д-р Нозима Бахтияровна — выпускница Андижанского государственного медицинского института с 7-летним стажем в терапии и ортопедии."
              : "Dr. Nozima Baxtiyarovna is a graduate of Andijan State Medical Institute with 7 years of specialized practice in restorative dentistry and prosthodontics."}
          </p>
        </div>

        {/* 4 Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveCert(cert);
                }
              }}
              className="group bg-white rounded-2xl p-5 sm:p-6 border border-[#D1E4F0] hover:border-[#086288] shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#e6f1f7] text-[#086288] border border-[#086288]/20">
                    {cert.badge[lang]}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#086288] transition-colors leading-snug">
                  {cert.title[lang]}
                </h3>

                <p className="mt-2 text-xs font-medium text-slate-500">
                  {cert.org}
                </p>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {cert.desc[lang]}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-slate-400">
                  {cert.serial}
                </span>
                <span className="font-bold text-[#086288] group-hover:translate-x-0.5 transition-transform">
                  {lang === "uz" ? "Ko'rish →" : lang === "ru" ? "Открыть →" : "View →"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing certificate details */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
            <div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={activeCert.title[lang]}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-[#D1E4F0] relative animate-in fade-in zoom-in-95 duration-200 max-h-[90dvh] overflow-y-auto my-auto"
            >
              <button
                onClick={closeCert}
                aria-label={a11y.closeModal}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-base cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#e6f1f7] text-[#086288] border border-[#086288]/20">
                  {activeCert.badge[lang]}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {activeCert.year}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-classic">
                {activeCert.title[lang]}
              </h3>

              <p className="mt-1 text-xs font-semibold text-[#086288]">
                {activeCert.org}
              </p>

              <div className="mt-4 p-4 rounded-xl bg-[#f4f8fb] border border-[#D1E4F0] text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeCert.desc[lang]}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono">Seriya: {activeCert.serial}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                  <IconCheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>
                    {lang === "uz"
                      ? "Rasmiy tasdiqlangan"
                      : lang === "ru"
                      ? "Официально подтверждён"
                      : "Formally Verified"}
                  </span>
                </span>
              </div>

              <button
                onClick={closeCert}
                className="mt-6 w-full py-2.5 rounded-xl bg-[#086288] hover:bg-[#064b69] text-white font-bold text-xs transition-colors cursor-pointer"
              >
                {lang === "uz" ? "Yopish" : lang === "ru" ? "Закрыть" : "Close"}
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CertificatesShowcase;
