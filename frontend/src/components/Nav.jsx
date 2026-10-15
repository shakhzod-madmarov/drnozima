import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { stripLangPrefix } from "../utils/language";
import { IconPhone } from "./MedicalIcons";
import { useModalA11y } from "../hooks/useModalA11y";
import { getA11yLabels } from "../constants/a11yLabels";
import { DOCTOR_INFO } from "../constants/doctor";

const Nav = ({ topOffset = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, changeLanguage } = useLanguage();
  const to = useLocalizedPath();
  const a11y = getA11yLabels(lang);
  const closeDrawer = () => setShowMenu(false);
  const drawerRef = useModalA11y(showMenu, closeDrawer);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: { uz: "Bosh Sahifa", ru: "Главная", en: "Home" } },
    { path: "/services", label: { uz: "Xizmatlar", ru: "Услуги", en: "Services" } },
    { path: "/about", label: { uz: "Shifokor Haqida", ru: "О Враче", en: "About Doctor" } },
    { path: "/contact", label: { uz: "Aloqa", ru: "Контакты", en: "Contact" } },
  ];

  const isBookingActive =
    stripLangPrefix(location.pathname) === "/booking" ||
    stripLangPrefix(location.pathname) === "/qabul";

  return (
    <>
      <header
        style={{ top: `${topOffset}px` }}
        className={`fixed left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-xs border-b border-[#cbe1ec] py-2.5"
            : "bg-white border-b border-[#dce8f0] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-1.5 sm:gap-3">
          {/* Brand Logo */}
          <NavLink
            to={to("/")}
            aria-label={
              lang === "ru"
                ? "Dr. Nozima Baxtiyarovna — На главную"
                : lang === "en"
                ? "Dr. Nozima Baxtiyarovna — Go to homepage"
                : "Dr. Nozima Baxtiyarovna — Bosh sahifaga o'tish"
            }
            className="flex items-center gap-1.5 sm:gap-3 shrink-0 min-w-0"
          >
            <Logo className="h-8 sm:h-11" />
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav
            aria-label={a11y.mainNavigation}
            className="hidden lg:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={to(link.path)}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors duration-150 ${
                    isActive
                      ? "bg-[#086287] text-white"
                      : "text-slate-700 hover:text-[#086287] hover:bg-[#e6f1f7]"
                  }`
                }
              >
                {link.label[lang]}
              </NavLink>
            ))}
          </nav>

          {/* Right Side Actions: Language Switcher + Phone + Book CTA */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <div
              role="group"
              aria-label={a11y.languageSwitcher}
              className="flex items-center bg-[#f4f8fb] p-0.5 rounded-lg border border-[#cbe1ec]"
            >
              {["uz", "ru", "en"].map((l) => (
                <button
                  key={l}
                  onClick={() => changeLanguage(l)}
                  aria-pressed={lang === l}
                  aria-label={l === "uz" ? "O'zbek tili" : l === "ru" ? "Русский язык" : "English"}
                  className={`px-1.5 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold uppercase transition-colors cursor-pointer ${
                    lang === l
                      ? "bg-[#086287] text-white"
                      : "text-slate-600 hover:text-[#086287]"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Direct Phone Link (XL Screens) */}
            <a
              href={DOCTOR_INFO.phoneHref}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#f4f8fb] border border-[#cbe1ec] text-[#086287] hover:bg-[#e6f1f7] transition-colors text-xs font-bold"
            >
              <IconPhone className="w-3.5 h-3.5 text-[#4d8db9] shrink-0" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>

            {/* Primary CTA Button */}
            <button
              onClick={() => {
                const el = document.getElementById("booking");
                if (el && stripLangPrefix(location.pathname) === "/") {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                  navigate(to("/booking"));
                }
              }}
              aria-current={isBookingActive ? "page" : undefined}
              className={`hidden sm:inline-flex items-center gap-2 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer ${
                isBookingActive
                  ? "bg-[#064863] ring-2 ring-[#4d8db9]/40"
                  : "bg-[#086287] hover:bg-[#064863]"
              }`}
            >
              <span>
                {lang === "uz"
                  ? "Qabulga Yozilish"
                  : lang === "ru"
                  ? "Записаться"
                  : "Book Visit"}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setShowMenu(true)}
              aria-label={a11y.openMenu}
              aria-expanded={showMenu}
              aria-controls="mobile-nav-drawer"
              className="lg:hidden w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#f4f8fb] hover:bg-[#e6f1f7] flex flex-col items-center justify-center gap-1 sm:gap-1.5 transition-colors border border-[#cbe1ec] cursor-pointer touch-manipulation"
            >
              <span className="w-4 sm:w-5 h-0.5 bg-[#086287] rounded-full" />
              <span className="w-3.5 sm:w-4 h-0.5 bg-[#4d8db9] rounded-full" />
              <span className="w-4 sm:w-5 h-0.5 bg-[#086287] rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {showMenu && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            onClick={closeDrawer}
            className="fixed inset-0 bg-[#063c54]/50 backdrop-blur-xs transition-opacity"
          />

          <div
            id="mobile-nav-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label={a11y.mobileNavigation}
            tabIndex={-1}
            className="fixed inset-y-0 right-0 w-full max-w-[280px] sm:max-w-xs bg-white shadow-2xl flex flex-col justify-between p-5 sm:p-6 z-10 overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <Logo className="h-8" />
                <button
                  onClick={closeDrawer}
                  aria-label={a11y.closeMenu}
                  className="w-11 h-11 rounded-xl bg-[#f4f8fb] hover:bg-[#e6f1f7] text-[#086287] flex items-center justify-center font-bold text-base cursor-pointer touch-manipulation"
                >
                  ✕
                </button>
              </div>

              <ul className="mt-6 space-y-1.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={to(link.path)}
                      end={link.path === "/"}
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-[#086287] text-white"
                            : "text-slate-800 hover:bg-[#e6f1f7]"
                        }`
                      }
                    >
                      <span>{link.label[lang]}</span>
                      <span className="text-xs opacity-60">→</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-3">
              <div className="p-4 rounded-xl bg-[#f4f8fb] border border-[#cbe1ec]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#4d8db9]">
                  {lang === "uz"
                    ? "Dr. Nozima Baxtiyarovna · Andijon"
                    : lang === "ru"
                    ? "Д-р Нозима Бахтияровна · Андижан"
                    : "Dr. Nozima Baxtiyarovna · Andijan"}
                </p>
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="mt-1 inline-flex items-center gap-1.5 text-base font-bold text-[#086287]"
                >
                  <IconPhone className="w-4 h-4 text-[#4d8db9]" />
                  <span>{DOCTOR_INFO.phone}</span>
                </a>
                <p className="text-xs text-slate-600 mt-0.5">
                  {lang === "uz"
                    ? "Eski Shahar (Old City), 1-qavat, «Sevdo Denta»"
                    : lang === "ru"
                    ? "Эски Шахар (Old City), 1-й этаж, «Sevdo Denta»"
                    : "Old City (Eski Shahar), 1st Floor, «Sevdo Denta»"}
                </p>
              </div>

              <button
                onClick={() => {
                  setShowMenu(false);
                  navigate(to("/booking"));
                }}
                aria-current={isBookingActive ? "page" : undefined}
                className="w-full py-3.5 rounded-xl bg-[#086287] hover:bg-[#064863] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>
                  {lang === "uz"
                    ? "Onlayn Qabulga Yozilish"
                    : lang === "ru"
                    ? "Онлайн Запись на Приём"
                    : "Book Online Appointment"}
                </span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
