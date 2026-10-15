import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { PRIMARY_CLINIC } from "../constants/clinics";
import { IconTelegram, IconInstagram, IconYandex, IconPhone } from "./MedicalIcons";
import { getA11yLabels } from "../constants/a11yLabels";

const FloatingActionHub = () => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expanded]);

  return (
    <div
      role="region"
      aria-label={a11y.quickActions}
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom,0px))] sm:bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(0.75rem,env(safe-area-inset-right,0px))] sm:right-[max(1.25rem,env(safe-area-inset-right,0px))] z-40 flex flex-col items-end gap-2 no-print"
    >
      {expanded && (
        <div
          id="floating-action-menu"
          className="flex flex-col items-end gap-2 mb-1 transition-all duration-200 max-w-[calc(100vw-1.5rem)]"
        >
          <a
            href={PRIMARY_CLINIC.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#086288] hover:bg-[#064b69] text-white px-3.5 py-2.5 rounded-xl shadow-md text-xs font-semibold transition-colors max-w-full"
          >
            <IconTelegram className="w-4 h-4 text-white shrink-0" />
            <span className="truncate">
              {lang === "uz"
                ? "Telegram (@Miss_Dentist_95)"
                : lang === "ru"
                ? "Telegram (@Miss_Dentist_95)"
                : "Telegram (@Miss_Dentist_95)"}
            </span>
          </a>

          <a
            href={PRIMARY_CLINIC.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#4D8DBA] hover:bg-[#086288] text-white px-3.5 py-2.5 rounded-xl shadow-md text-xs font-semibold transition-colors max-w-full"
          >
            <IconInstagram className="w-4 h-4 text-white shrink-0" />
            <span className="truncate">Instagram (@sevdo_denta)</span>
          </a>

          <a
            href={PRIMARY_CLINIC.maps.yandex}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white hover:bg-[#f4f8fb] text-[#086288] border border-[#D1E4F0] px-3.5 py-2.5 rounded-xl shadow-md text-xs font-semibold transition-colors max-w-full"
          >
            <IconYandex className="w-4 h-4 shrink-0" />
            <span className="truncate">
              {lang === "uz"
                ? "Yandex Xarita (Sevdo Denta)"
                : lang === "ru"
                ? "Яндекс Карты (Маршрут)"
                : "Yandex Maps Directions"}
            </span>
          </a>

          <a
            href={`tel:${PRIMARY_CLINIC.phoneRaw}`}
            className="flex items-center gap-2.5 bg-[#086288] hover:bg-[#064b69] text-white px-3.5 py-2.5 rounded-xl shadow-md text-xs font-semibold transition-colors max-w-full"
          >
            <IconPhone className="w-4 h-4 text-white shrink-0" />
            <span className="truncate">{PRIMARY_CLINIC.phone}</span>
          </a>
        </div>
      )}

      <div className="flex items-center gap-2">
        <a
          href={`tel:${PRIMARY_CLINIC.phoneRaw}`}
          className="hidden sm:flex items-center gap-2 bg-white text-[#086288] hover:bg-[#f4f8fb] px-4 py-2.5 rounded-xl shadow-luxury border border-[#D1E4F0] text-xs font-bold transition-colors"
        >
          <IconPhone className="w-3.5 h-3.5 text-[#4D8DBA]" />
          <span>{PRIMARY_CLINIC.phone}</span>
        </a>

        <button
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? a11y.closeQuickActions : a11y.openQuickActions}
          aria-expanded={expanded}
          aria-controls="floating-action-menu"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-[#086288] hover:bg-[#064b69] text-white shadow-lg flex items-center justify-center text-lg font-bold cursor-pointer transition-colors border border-white/20"
        >
          {expanded ? "✕" : <IconPhone className="w-5 h-5 text-white" />}
        </button>
      </div>
    </div>
  );
};

export default FloatingActionHub;
