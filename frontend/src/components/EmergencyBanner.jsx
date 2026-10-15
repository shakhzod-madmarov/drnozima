import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IconPhone } from "./MedicalIcons";
import { getA11yLabels } from "../constants/a11yLabels";
import { DOCTOR_INFO } from "../constants/doctor";

const EmergencyBanner = ({ onHeightChange }) => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const barRef = useRef(null);
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return sessionStorage.getItem("emergency_banner_dismissed") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const el = barRef.current;
    if (!el) {
      onHeightChange?.(0);
      return;
    }
    const report = () => onHeightChange?.(el.offsetHeight);
    report();
    const observer = new ResizeObserver(report);
    observer.observe(el);
    return () => observer.disconnect();
  }, [dismissed, lang, onHeightChange]);

  const handleDismiss = () => {
    try {
      sessionStorage.setItem("emergency_banner_dismissed", "true");
    } catch {
      /* Dismissal will not survive a reload. */
    }
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div ref={barRef} className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-[#042838] via-[#086288] to-[#042838] text-white px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold border-b border-[#97D7FF]/30 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#FFEFC4] animate-ping shrink-0" />
          <span className="text-[#FFEFC4] font-bold uppercase tracking-wider text-[9.5px] sm:text-[10px]">
            {lang === "uz" ? "Shoshilinch Yordam" : lang === "ru" ? "Срочная Помощь" : "Emergency"}
          </span>
          <span className="hidden sm:inline text-sky-100 font-normal">
            {lang === "uz"
              ? "Tishingiz to'satdan bezovta qilyaptimi? Dr. Nozima Baxtiyarovna qabuliga navbatsiz yoziling:"
              : lang === "ru"
              ? "Острая зубная боль? Запишитесь на срочный приём к Д-ру Нозиме без очереди:"
              : "Acute tooth pain? Book an urgent same-day consultation with Dr. Nozima:"}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={DOCTOR_INFO.phoneHref}
            className="flex items-center gap-1.5 bg-[#FFEFC4] hover:bg-white text-[#086288] px-2.5 sm:px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] font-bold transition-colors shadow-xs"
          >
            <IconPhone className="w-3 h-3 text-[#086288]" />
            <span>{DOCTOR_INFO.phone}</span>
          </a>

          <button
            onClick={handleDismiss}
            aria-label={a11y.close}
            className="text-white/70 hover:text-white text-base leading-none px-1 cursor-pointer"
          >
            ✕
          </button>
        </div>

      </div>
    </div>
  );
};

export default EmergencyBanner;
