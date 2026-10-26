import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { CERTIFICATES } from "../constants/doctor";
import { IconAward, IconCheckCircle, IconSparkleStar } from "./MedicalIcons";
import { useModalA11y } from "../hooks/useModalA11y";
import { getA11yLabels } from "../constants/a11yLabels";

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
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-[#e6f1f7] text-[#086288] border border-[#086288]/20">
            <IconAward className="w-4 h-4 text-[#086288]" />
            <span>
              {lang === "uz"
                ? "DIPLOM VA RASMIY MALAKA SERTIFIKATLARI"
                : lang === "ru"
                ? "ДИПЛОМ И ОФИЦИАЛЬНЫЕ СЕРТИФИКАТЫ"
                : "DIPLOMA & OFFICIAL CERTIFICATIONS"}
            </span>
          </span>
          <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-serif-classic">
            {lang === "uz"
              ? "Tasdiqlangan Tibbiy Malaka & Klinik Sertifikatlar"
              : lang === "ru"
              ? "Подтверждённая Квалификация и Клинические Сертификаты"
              : "Verified Medical Credentials & Clinical Certificates"}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600">
            {lang === "uz"
              ? "Dr. Nozima Baxtiyarovna (Kozimova Nozimabonu) — ADTI bitiruvchisi hamda zamonaviy vinirlar va ortopedik charxlash bo'yicha maxsus sertifikatlangan mutaxassis."
              : lang === "ru"
              ? "Д-р Нозима Бахтияровна (Козимова Нозима) — выпускница АГМИ с официальными сертификатами по композитным винирам и препарированию под коронки."
              : "Dr. Nozima Baxtiyarovna (Kozimova Nozimabonu) — ADTI medical graduate with verified certifications in composite veneers and crown preparation."}
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert) => (
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
              className="group bg-white rounded-2xl overflow-hidden border border-[#D1E4F0] hover:border-[#086288] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview / Banner */}
              <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden border-b border-[#D1E4F0]">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title[lang]}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#086288] to-[#042433] text-white">
                    <IconAward className="w-12 h-12 text-[#FFEFC4] mb-2" />
                    <span className="text-xs font-mono tracking-wider uppercase text-[#97D7FF]">
                      ADTI · 2019
                    </span>
                    <p className="font-serif-classic text-sm font-bold mt-1 text-[#FFEFC4]">
                      {cert.title[lang]}
                    </p>
                  </div>
                )}
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#086288] text-white shadow-sm">
                    {cert.badge[lang]}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/90 text-slate-700 shadow-xs backdrop-blur-xs">
                    {cert.year}
                  </span>
                </div>

                {cert.image && (
                  <div className="absolute inset-0 bg-[#086288]/0 group-hover:bg-[#086288]/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#086288] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 duration-200">
                      <span>🔍</span>
                      <span>{lang === "uz" ? "Kattalashtirib ko'rish" : lang === "ru" ? "Увеличить" : "Enlarge"}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#086288] transition-colors leading-snug">
                    {cert.title[lang]}
                  </h3>

                  <div className="mt-2.5 flex items-center gap-1.5 text-xs text-[#086288] font-semibold">
                    <IconSparkleStar className="w-3.5 h-3.5 text-[#4D8DBA] shrink-0" />
                    <span className="line-clamp-1">
                      {cert.lecturer
                        ? `${lang === "uz" ? "Lektor" : "Лектор"}: ${cert.lecturer}`
                        : cert.city[lang]}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {cert.desc[lang]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium text-slate-500">
                    {cert.dateFormatted[lang]}
                  </span>
                  <span className="font-bold text-[#086288] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>{lang === "uz" ? "Batafsil" : lang === "ru" ? "Подробнее" : "Details"}</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing certificate in high resolution */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={activeCert.title[lang]}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full p-4 sm:p-7 shadow-2xl border border-[#D1E4F0] relative animate-in fade-in zoom-in-95 duration-200 max-h-[92dvh] overflow-y-auto my-auto space-y-4"
            >
              <button
                onClick={closeCert}
                aria-label={a11y.closeModal}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-base cursor-pointer z-10 transition-colors"
              >
                ✕
              </button>

              {/* Certificate Image in Modal */}
              {activeCert.image ? (
                <div className="rounded-xl overflow-hidden border border-[#D1E4F0] bg-slate-100 shadow-inner">
                  <img
                    src={activeCert.image}
                    alt={activeCert.title[lang]}
                    className="w-full h-auto max-h-[50vh] object-contain mx-auto"
                  />
                </div>
              ) : null}

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#e6f1f7] text-[#086288] border border-[#086288]/20">
                    {activeCert.badge[lang]}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {activeCert.dateFormatted[lang]}
                  </span>
                  {activeCert.licenseNo && (
                    <span className="text-xs font-mono bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                      Litsenziya № {activeCert.licenseNo}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 font-serif-classic">
                  {activeCert.title[lang]}
                </h3>

                <div className="mt-3 space-y-1.5 text-xs sm:text-sm">
                  {activeCert.recipient && (
                    <p className="text-slate-700">
                      <strong className="text-[#086288]">
                        {lang === "uz" ? "Sertifikat egasi: " : lang === "ru" ? "Выдан на имя: " : "Awarded to: "}
                      </strong>
                      {activeCert.recipient}
                    </p>
                  )}
                  {activeCert.lecturer && (
                    <p className="text-slate-700">
                      <strong className="text-[#086288]">
                        {lang === "uz" ? "Kurs lektori: " : lang === "ru" ? "Лектор курса: " : "Course Lecturer: "}
                      </strong>
                      {activeCert.lecturer}
                    </p>
                  )}
                  {activeCert.academy && (
                    <p className="text-slate-700">
                      <strong className="text-[#086288]">
                        {lang === "uz" ? "Ta'lim markazi: " : lang === "ru" ? "Учебный центр: " : "Academy: "}
                      </strong>
                      {activeCert.academy}
                    </p>
                  )}
                  {activeCert.partners && (
                    <p className="text-slate-600 text-xs">
                      <strong className="text-slate-700">
                        {lang === "uz" ? "Hamkor tashkilotlar: " : lang === "ru" ? "При поддержке: " : "Partners: "}
                      </strong>
                      {activeCert.partners[lang]}
                    </p>
                  )}
                </div>

                <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-[#f4f8fb] border border-[#D1E4F0] text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeCert.desc[lang]}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-600">
                    <IconCheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>
                      {lang === "uz"
                        ? "Hujjat tekshirildi va tasdiqlandi"
                        : lang === "ru"
                        ? "Документ проверен и подтверждён"
                        : "Formally Verified Credential"}
                    </span>
                  </span>
                  <span className="text-slate-400 font-medium">
                    {activeCert.city[lang]}
                  </span>
                </div>
              </div>

              <button
                onClick={closeCert}
                className="w-full py-3 rounded-xl bg-[#086288] hover:bg-[#064b69] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
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
