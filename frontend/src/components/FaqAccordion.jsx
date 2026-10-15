import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getA11yLabels } from "../constants/a11yLabels";
import { FAQ_ITEMS } from "../constants/faq";

const FaqAccordion = () => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section
      className="py-8 sm:py-14 bg-white rounded-2xl sm:rounded-3xl border border-[#d5e0ec] shadow-luxury px-3.5 sm:px-8"
      aria-label={a11y.faqSection}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#285983]">
            {lang === "uz"
              ? "Ko'p Beriladigan Savollar"
              : lang === "ru"
              ? "Частые Вопросы"
              : "Frequently Asked Questions"}
          </p>
          <h2 className="mt-1.5 font-serif-classic text-2xl sm:text-3xl md:text-4xl font-bold text-[#132e53]">
            {lang === "uz"
              ? "Bemorlarimizni Qiziqtirgan Savollar"
              : lang === "ru"
              ? "Ответы на Важные Вопросы Пациентов"
              : "Answers to Common Patient Questions"}
          </h2>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-btn-${idx}`;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors duration-150 ${
                  isOpen
                    ? "bg-[#f2f6fa] border-[#285983]"
                    : "bg-white border-[#d5e0ec] hover:bg-[#f7f9fc]"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full px-3.5 sm:px-5 py-3 sm:py-4 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                >
                  <span className="text-xs sm:text-sm md:text-base font-bold text-[#132e53]">
                    {item.q[lang]}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#132e53] text-white rotate-45"
                        : "bg-[#f2f6fa] text-[#132e53] border border-[#d5e0ec]"
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-3.5 sm:px-5 pb-3.5 sm:pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#d5e0ec] pt-2.5 sm:pt-3"
                  >
                    {item.a[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
