import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Logo = ({ className = "h-10", inverted = false, showText = true }) => {
  const { lang } = useLanguage();

  const subtitle =
    lang === "ru"
      ? "Стоматолог-Терапевт · Ортопед"
      : lang === "en"
      ? "Dentist · Restorative & Prosthodontics"
      : "Stomatolog-Terapevt · Ortoped";

  const altText =
    lang === "ru"
      ? "Д-р Нозима Бахтияровна — Стоматолог в Андижане"
      : lang === "en"
      ? "Dr. Nozima Baxtiyarovna — Dentist in Andijan"
      : "Dr. Nozima Baxtiyarovna — Stomatolog Andijon";

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 select-none">
      <img
        src="/logo-symbol.png"
        alt={altText}
        width={48}
        height={48}
        decoding="async"
        className={`${className} w-auto object-contain shrink-0`}
      />
      {showText && (
        <div className="flex flex-col leading-none text-left min-w-0">
          <span
            className={`font-serif-classic text-[13.5px] sm:text-lg lg:text-xl font-bold tracking-tight truncate ${
              inverted ? "text-white" : "text-[#086288]"
            }`}
          >
            Dr. Nozima Baxtiyarovna
          </span>
          <span
            className={`text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] mt-0.5 sm:mt-1 truncate ${
              inverted ? "text-[#97D7FF]" : "text-[#4D8DBA]"
            }`}
          >
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
