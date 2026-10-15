import { useLanguage } from "../context/LanguageContext";
import { PRIMARY_CLINIC } from "../constants/clinics";
import {
  IconLocationPin,
  IconClock,
  IconPhone,
  IconTelegram,
  IconInstagram,
  IconGoogle,
  IconYandex,
} from "./MedicalIcons";

const ClinicLocationMap = ({ compact = false }) => {
  const { lang } = useLanguage();
  const c = PRIMARY_CLINIC;

  const yandexEmbedUrl =
    c?.maps?.yandexEmbed ||
    "https://yandex.uz/map-widget/v1/?ll=72.352159%2C40.776788&mode=search&oid=157971592658&ol=biz&z=14.92";
  const yandexOrgUrl =
    c?.maps?.yandexOrg ||
    "https://yandex.uz/maps/org/sevdo_denta/157971592658/?utm_medium=mapframe&utm_source=maps";
  const yandexCategoryUrl =
    c?.maps?.yandexCategory ||
    "https://yandex.uz/maps/10329/andijan/category/dental_clinic/184106132/?utm_medium=mapframe&utm_source=maps";

  return (
    <section className={compact ? "py-4" : "py-10 sm:py-14"}>
      {!compact && (
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086288]">
            {lang === "uz"
              ? "Klinikamiz Manzili"
              : lang === "ru"
              ? "Адрес Клиники"
              : "Clinic Location"}
          </p>
          <h2 className="mt-1.5 font-serif-classic text-2xl sm:text-3xl md:text-4xl font-bold text-[#086288]">
            {lang === "uz"
              ? "Andijon sh., «Sevdo Denta» Klinikasi"
              : lang === "ru"
              ? "г. Андижан, Клиника «Sevdo Denta»"
              : "«Sevdo Denta» Dental Clinic, Andijan"}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            {lang === "uz"
              ? "Qabulga tashrif buyurishdan oldin onlayn yozilishni tavsiya qilamiz."
              : lang === "ru"
              ? "Рекомендуем предварительно записаться на приём онлайн."
              : "We recommend booking an appointment online before your visit."}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border border-[#D1E4F0] shadow-sm">
        {/* Left Info Column */}
        <div className="lg:col-span-5 flex flex-col justify-between p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-[#063c54] text-white">
          <div className="space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#086288] text-xs font-semibold text-white">
              <IconLocationPin className="w-3.5 h-3.5 text-[#97D7FF] shrink-0" />
              <span>{c.badge[lang]}</span>
            </div>

            <div>
              <h3 className="font-serif-classic text-xl sm:text-2xl md:text-3xl font-bold">
                {c.name[lang]}
              </h3>
              <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                {c.address[lang]}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-white/15 text-sm">
              <div className="flex items-start gap-3">
                <IconClock className="w-4 h-4 text-[#97D7FF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{c.hours[lang]}</p>
                  <p className="text-xs text-slate-300 mt-0.5">{c.sundayNote[lang]}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <IconPhone className="w-4 h-4 text-[#97D7FF] shrink-0" />
                <a
                  href={`tel:${c.phoneRaw}`}
                  className="font-bold text-base text-white hover:text-[#97D7FF] transition-colors"
                >
                  {c.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="pt-6 mt-6 border-t border-white/15 space-y-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#97D7FF]">
              {lang === "uz"
                ? "Navigator orqali yo'nalish:"
                : lang === "ru"
                ? "Построить маршрут:"
                : "Open in navigation:"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={c.maps.yandex}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-[#086288] hover:bg-[#f4f8fb] font-bold text-xs transition-colors"
              >
                <IconYandex className="w-4 h-4" />
                <span>
                  {lang === "uz"
                    ? "Yandex Xarita"
                    : lang === "ru"
                    ? "Яндекс Карты"
                    : "Yandex Maps"}
                </span>
              </a>
              <a
                href={c.maps.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#086288] hover:bg-[#064b69] text-white font-bold text-xs transition-colors"
              >
                <IconGoogle className="w-4 h-4" />
                <span>
                  {lang === "uz"
                    ? "Google Xarita"
                    : lang === "ru"
                    ? "Google Карты"
                    : "Google Maps"}
                </span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={c.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-colors"
              >
                <IconTelegram className="w-3.5 h-3.5 text-[#97D7FF]" />
                <span>Telegram</span>
              </a>
              <a
                href={c.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-colors"
              >
                <IconInstagram className="w-3.5 h-3.5 text-[#97D7FF]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Map Embed Column — Provided Yandex Maps Widget */}
        <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#D1E4F0] min-h-[360px] sm:min-h-[440px] relative bg-slate-100">
          <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%", minHeight: "360px" }}>
            <a
              href={yandexOrgUrl}
              style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px", zIndex: 1 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sevdo denta
            </a>
            <a
              href={yandexCategoryUrl}
              style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px", zIndex: 1 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Стоматологическая клиника в Андижане
            </a>
            <iframe
              title="Sevdo denta — Стоматологическая клиника в Андижане (Yandex Maps)"
              src={yandexEmbedUrl}
              width="100%"
              height="100%"
              frameBorder="1"
              allowFullScreen={true}
              style={{ position: "relative", width: "100%", height: "100%", minHeight: "360px", border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicLocationMap;
