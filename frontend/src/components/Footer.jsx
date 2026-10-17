import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { PRIMARY_CLINIC } from "../constants/clinics";
import { DOCTOR_INFO, getExperienceBadge, getExperienceText } from "../constants/doctor";
import { fetchDentistAvailability } from "../lib/medinsonBooking";
import {
  IconShieldCheck,
  IconAward,
  IconLocationPin,
  IconClock,
  IconPhone,
  IconTelegram,
  IconInstagram,
  IconGoogle,
  IconYandex,
  IconMail,
} from "./MedicalIcons";

const Footer = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const [workingHours, setWorkingHours] = useState({ start: "08:00", end: "18:00" });

  useEffect(() => {
    let active = true;
    fetchDentistAvailability()
      .then((data) => {
        if (active && data?.dentist?.workingHours?.start && data?.dentist?.workingHours?.end) {
          setWorkingHours(data.dentist.workingHours);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const daysLabel =
    lang === "uz"
      ? "Dushanba - Shanba"
      : lang === "ru"
      ? "Понедельник - Суббота"
      : "Monday - Saturday";
  const hoursDisplay = `${workingHours.start} - ${workingHours.end}, ${daysLabel}`;

  const quickLinks = [
    { path: "/", label: { uz: "Bosh Sahifa", ru: "Главная", en: "Home" } },
    { path: "/services", label: { uz: "Stomatologik Xizmatlar", ru: "Стоматологические Услуги", en: "Dental Services" } },
    { path: "/about", label: { uz: "Dr. Nozima Haqida", ru: "О Докторе Нозиме", en: "About Dr. Nozima" } },
    { path: "/booking", label: { uz: "Onlayn Qabulga Yozilish", ru: "Онлайн Запись на Приём", en: "Book Appointment" } },
    { path: "/contact", label: { uz: "Aloqa va Manzil", ru: "Контакты и Адрес", en: "Contact & Location" } },
  ];

  const specialtyLinks = [
    { path: "/services/tish-davolash", label: { uz: "Og'riqsiz Tish Davolash va Plomba", ru: "Лечение Кариеса и Каналов", en: "Painless Caries & Root Canal" } },
    { path: "/services/ortopediya", label: { uz: "Tsirkoniy Karonka va Ortopediya", ru: "Циркониевые Коронки и Протезы", en: "Zirconia Crowns & Prosthetics" } },
    { path: "/services/estetik-stomatologiya", label: { uz: "E-max Vinirlar va Restavratsiya", ru: "Виниры E-max и Реставрация", en: "E-max Veneers & Smile Design" } },
    { path: "/services/implantatsiya", label: { uz: "Tish Implantatsiyasi (Osstem)", ru: "Имплантация Зубов (Osstem)", en: "Dental Implants (Osstem)" } },
    { path: "/services/tish-oqartirish", label: { uz: "Lazerli Oqartirish va AirFlow", ru: "Отбеливание Зубов и AirFlow", en: "Laser Whitening & AirFlow" } },
    { path: "/services/xirurgiya", label: { uz: "Atravmatik Tish Olish", ru: "Безболезненное Удаление Зубов", en: "Atraumatic Tooth Extraction" } },
    { path: "/services/rentgen-diagnostika", label: { uz: "Raqamli Rentgen Diagnostika", ru: "Цифровая Рентген-Диагностика", en: "Digital X-Ray Diagnostics" } },
  ];

  return (
    <footer className="bg-[#042433] text-slate-300 pt-10 sm:pt-14 pb-[max(2rem,env(safe-area-inset-bottom,0px))] border-t border-[#086288]/40 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to={to("/")}
              aria-label="Dr. Nozima Baxtiyarovna - Bosh sahifa"
              className="inline-block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#97D7FF] rounded-lg"
            >
              <Logo className="h-10" inverted={true} />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed">
              {lang === "uz"
                ? `Andijon shahri A.Fitrat 251B «Sevdo Denta» klinikasida tajribali ayol stomatolog Dr. Nozima Baxtiyarovna tomonidan 100% og'riqsiz davolash, zamonaviy terapiya va ortopediya. ${getExperienceText("uz")} va Andijon davlat tibbiyot instituti bitiruvchisi.`
                : lang === "ru"
                ? `Современная стоматология без боли в клинике «Sevdo Denta» (Андижан, ул. А. Фитрата, 251Б). Приём ведёт врач-стоматолог женщина Д-р Нозима Бахтияровна — ${getExperienceText("ru").toLowerCase()}, выпускница Андижанского государственного медицинского института.`
                : `Modern painless restorative dentistry and prosthodontics at «Sevdo Denta» Clinic in Andijan (251B A. Fitrat St). Certified female dentist Dr. Nozima Baxtiyarovna — ${getExperienceText("en")} and graduate of Andijan State Medical Institute.`}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-md bg-white/10 text-white border border-white/15">
                <IconShieldCheck className="w-3.5 h-3.5 text-[#97D7FF]" />
                <span>
                  {lang === "uz" ? "100% Steril va Og'riqsiz" : lang === "ru" ? "100% Стерильно и Без Боли" : "100% Sterile & Painless"}
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-md bg-[#086288]/40 text-white border border-[#086288]/60">
                <IconAward className="w-3.5 h-3.5 text-[#97D7FF]" />
                <span>{getExperienceBadge(lang)}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#97D7FF]">
              {lang === "uz" ? "Sahifalar" : lang === "ru" ? "Навигация" : "Navigation"}
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={to(item.path)}
                    className="text-slate-300/85 hover:text-white transition-colors inline-block py-0.5 sm:py-1"
                  >
                    {item.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Main Dental Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#97D7FF]">
              {lang === "uz" ? "Asosiy Xizmatlar" : lang === "ru" ? "Основные Услуги" : "Core Specialties"}
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {specialtyLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={to(item.path)}
                    className="text-slate-300/85 hover:text-white transition-colors inline-block py-0.5 sm:py-1"
                  >
                    {item.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Clinic Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#97D7FF]">
              {lang === "uz" ? "Manzil va Aloqa" : lang === "ru" ? "Адрес и Контакты" : "Clinic & Contact"}
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300/90">
              <p className="flex items-start gap-2.5">
                <IconLocationPin className="w-4 h-4 text-[#97D7FF] shrink-0 mt-0.5" />
                <span>{PRIMARY_CLINIC.address[lang]}</span>
              </p>
              <p className="flex items-start gap-2.5">
                <IconClock className="w-4 h-4 text-[#97D7FF] shrink-0 mt-0.5" />
                <span>{hoursDisplay}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <IconPhone className="w-4 h-4 text-[#97D7FF] shrink-0" />
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="text-white font-bold hover:text-[#97D7FF] transition-colors"
                >
                  {DOCTOR_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <IconMail className="w-4 h-4 text-[#97D7FF] shrink-0" />
                <a
                  href={`mailto:${DOCTOR_INFO.email}`}
                  className="text-slate-300 hover:text-white transition-colors text-xs break-all"
                >
                  {DOCTOR_INFO.email}
                </a>
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#086288] text-xs font-semibold text-white border border-white/15 transition-colors"
              >
                <IconTelegram className="w-3.5 h-3.5 text-white" />
                <span>Telegram</span>
              </a>
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#086288] text-xs font-semibold text-white border border-white/15 transition-colors"
              >
                <IconInstagram className="w-3.5 h-3.5 text-white" />
                <span>Instagram</span>
              </a>
              <a
                href={PRIMARY_CLINIC.maps.yandex}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#086288] text-xs font-semibold text-white border border-white/15 transition-colors"
              >
                <IconYandex className="w-3.5 h-3.5" />
                <span>Yandex Map</span>
              </a>
              <a
                href={PRIMARY_CLINIC.maps.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#086288] text-xs font-semibold text-white border border-white/15 transition-colors"
              >
                <IconGoogle className="w-3.5 h-3.5" />
                <span>Google Map</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Dr. Nozima Baxtiyarovna (drnozima.uz).{" "}
            {lang === "uz"
              ? "Barcha huquqlar himoyalangan."
              : lang === "ru"
              ? "Все права защищены."
              : "All rights reserved."}
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-slate-400">
            <a
              href="/qr-stand.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#97D7FF] hover:underline flex items-center gap-1 font-medium"
            >
              <span>⭐ Resepshin QR Stendi</span>
            </a>
            <span>·</span>
            <span>
              {lang === "uz"
                ? "Andijon shahri · «Sevdo Denta» Stomatologiya Klinikasi"
                : lang === "ru"
                ? "г. Андижан · Стоматологическая клиника «Sevdo Denta»"
                : "Andijan · «Sevdo Denta» Dental Clinic"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
