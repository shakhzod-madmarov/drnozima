import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { PRIMARY_CLINIC } from "../constants/clinics";
import { PAGE_SEO, PAGE_KEYWORDS } from "../constants/seo";
import Seo from "../components/Seo";
import { buildContactPageSchema } from "../utils/structuredData";
import ClinicLocationMap from "../components/ClinicLocationMap";
import {
  IconPhone,
  IconTelegram,
  IconInstagram,
  IconClock,
  IconLocationPin,
  IconYandex,
  IconGoogle,
} from "../components/MedicalIcons";

const Contact = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const { openBooking } = useBooking();
  const c = PRIMARY_CLINIC;
  const seo = PAGE_SEO.contact[lang] || PAGE_SEO.contact.uz;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [message, setMessage] = useState("");

  const handleQuickSend = (e) => {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 7) return;

    openBooking({
      name,
      phone,
      note: message,
    });
  };

  const breadcrumbs = [
    {
      name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa",
      path: "/",
    },
    {
      name: lang === "ru" ? "Контакты" : lang === "en" ? "Contact" : "Aloqa va Manzil",
      path: "/contact",
    },
  ];
  const contactSchema = buildContactPageSchema(lang, breadcrumbs);

  return (
    <div className="py-4 sm:py-8 space-y-10">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={PAGE_KEYWORDS[lang]}
        schemaJson={contactSchema}
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
          {lang === "ru" ? "Контакты" : lang === "en" ? "Contact" : "Aloqa va Manzil"}
        </span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4D8DBA]">
          {lang === "uz"
            ? "Andijon · Eski Shahar (Old City) · Sevdo Denta"
            : lang === "ru"
            ? "Андижан · Эски Шахар (Old City) · Sevdo Denta"
            : "Andijan · Old City (Eski Shahar) · Sevdo Denta"}
        </p>
        <h1 className="font-serif-classic text-3xl sm:text-4xl md:text-5xl font-bold text-[#086288]">
          {lang === "uz"
            ? "Aloqa va Klinika Manzili"
            : lang === "ru"
            ? "Контакты и Адрес Клиники"
            : "Contact & Clinic Location"}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-600">
          {lang === "uz"
            ? "Dr. Nozima Baxtiyarovna qabuliga telefon, Telegram, Instagram yoki onlayn shakl orqali yozilishingiz mumkin."
            : lang === "ru"
            ? "Свяжитесь с нами по телефону, в Telegram, Instagram или оставьте заявку онлайн."
            : "Reach Dr. Nozima Baxtiyarovna by phone, Telegram, Instagram, or our online request form."}
        </p>
      </div>

      {/* Contact Cards + Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Contact Channels (6 cols) */}
        <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#D1E4F0] shadow-luxury flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4D8DBA]">
                {lang === "uz" ? "To'g'ridan-to'g'ri Qo'ng'iroq" : lang === "ru" ? "Прямой Телефон" : "Direct Phone"}
              </span>
              <p className="font-serif-classic text-xl sm:text-2xl md:text-3xl font-bold text-[#086288]">
                {c.phone}
              </p>
              <p className="text-xs text-slate-500">{c.hours[lang]}</p>
            </div>
            <a
              href={`tel:${c.phoneRaw}`}
              className="px-5 py-3 rounded-xl bg-[#086288] hover:bg-[#4D8DBA] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 transition-colors w-full sm:w-auto"
            >
              <IconPhone className="w-4 h-4 text-white" />
              <span>
                {lang === "uz" ? "Qo'ng'iroq" : lang === "ru" ? "Позвонить" : "Call Now"}
              </span>
            </a>
          </div>

          {/* Telegram Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#D1E4F0] shadow-luxury flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4D8DBA]">
                {lang === "uz"
                  ? "Telegram Kanal va Konsultatsiya"
                  : lang === "ru"
                  ? "Telegram-канал и консультация"
                  : "Telegram Channel & Inquiries"}
              </span>
              <p className="text-base sm:text-lg md:text-xl font-bold text-[#086288]">
                {c.telegramHandle}
              </p>
              <p className="text-xs text-slate-500">
                {lang === "uz"
                  ? "Rentgen suratini yuborish va tezkor javob olish"
                  : lang === "ru"
                  ? "Отправьте снимок зуба и получите быстрый ответ"
                  : "Send dental X-rays and get quick answers"}
              </p>
            </div>
            <a
              href={c.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#4D8DBA] hover:bg-[#086288] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 transition-colors w-full sm:w-auto"
            >
              <IconTelegram className="w-4 h-4 text-white" />
              <span>Telegram</span>
            </a>
          </div>

          {/* Instagram Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#D1E4F0] shadow-luxury flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4D8DBA]">
                {lang === "uz"
                  ? "Instagram Portfolio"
                  : lang === "ru"
                  ? "Портфолио в Instagram"
                  : "Instagram Portfolio"}
              </span>
              <p className="text-base sm:text-lg md:text-xl font-bold text-[#086288]">
                {c.instagramHandle}
              </p>
              <p className="text-xs text-slate-500">
                {lang === "uz"
                  ? "Klinik amaliyot, foydali stomatologik maslahatlar va yangiliklar"
                  : lang === "ru"
                  ? "Клиническая практика, советы стоматолога и новости"
                  : "Clinical cases, oral health guidance & daily updates"}
              </p>
            </div>
            <a
              href={c.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#086288] hover:bg-[#4D8DBA] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 transition-colors w-full sm:w-auto"
            >
              <IconInstagram className="w-4 h-4 text-white" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Address & Navigator Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#D1E4F0] shadow-luxury space-y-3.5 sm:space-y-4">
            <div className="flex items-start gap-3">
              <IconLocationPin className="w-5 h-5 text-[#086288] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-base font-bold text-[#086288]">
                  {c.name[lang]}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{c.address[lang]}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <IconClock className="w-4 h-4 text-[#4D8DBA] shrink-0" />
              <span className="font-semibold">{c.hours[lang]}</span>
              <span>·</span>
              <span>{c.sundayNote[lang]}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              <a
                href={c.maps.yandex}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#086288] hover:bg-[#4D8DBA] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <IconYandex className="w-4 h-4" />
                <span>Yandex Maps</span>
              </a>
              <a
                href={c.maps.google}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#F4F8FB] hover:bg-[#E6F1F7] text-[#086288] border border-[#D1E4F0] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <IconGoogle className="w-4 h-4" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Quick Message Form (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-4 sm:p-8 border border-[#D1E4F0] shadow-luxury">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#4D8DBA]">
            {lang === "uz"
              ? "Tezkor So'rov"
              : lang === "ru"
              ? "Быстрое Обращение"
              : "Quick Inquiry"}
          </span>
          <h2 className="font-serif-classic text-xl sm:text-2xl md:text-3xl font-bold text-[#086288] mt-1">
            {lang === "uz"
              ? "Dr. Nozimaga Savol Yoki Qabul So'rovi Yuborish"
              : lang === "ru"
              ? "Задать Вопрос или Записаться на Консультацию"
              : "Send a Question or Consultation Request"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-5 sm:mb-6">
            {lang === "uz"
              ? "Ma'lumotlaringizni qoldiring — keyingi oynada o'zingizga qulay bo'sh vaqtni tanlaysiz."
              : lang === "ru"
              ? "Оставьте контакты — на следующем шаге вы сможете выбрать удобное свободное время."
              : "Leave your details — on the next step you'll pick a free time that suits you."}
          </p>

          <form onSubmit={handleQuickSend} className="space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-bold text-[#086288] mb-1.5"
              >
                {lang === "uz" ? "Ismingiz *" : lang === "ru" ? "Ваше имя *" : "Your Name *"}
              </label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={
                  lang === "uz"
                    ? "Ismingizni kiriting"
                    : lang === "ru"
                    ? "Введите ваше имя"
                    : "Enter your name"
                }
                className="w-full px-4 py-3 rounded-xl bg-[#f7f9fc] border border-[#D1E4F0] text-sm focus:outline-none focus:border-[#086288] focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="block text-xs font-bold text-[#086288] mb-1.5"
              >
                {lang === "uz"
                  ? "Telefon raqamingiz *"
                  : lang === "ru"
                  ? "Номер телефона *"
                  : "Phone Number *"}
              </label>
              <input
                id="contact-phone"
                name="tel"
                autoComplete="tel"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#f7f9fc] border border-[#D1E4F0] text-sm focus:outline-none focus:border-[#086288] focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-bold text-[#086288] mb-1.5"
              >
                {lang === "uz"
                  ? "Savolingiz yoki murojaat mazmuni"
                  : lang === "ru"
                  ? "Ваш вопрос или комментарий"
                  : "Your Question or Message"}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  lang === "uz"
                    ? "Masalan: tish davolash, karonka yoki implantatsiya bo'yicha maslahat olmoqchiman..."
                    : lang === "ru"
                    ? "Например: хочу записаться на осмотр и узнать о циркониевых коронках..."
                    : "e.g., I would like to schedule a checkup and ask about zirconia crowns..."
                }
                className="w-full px-4 py-3 rounded-xl bg-[#f7f9fc] border border-[#D1E4F0] text-sm focus:outline-none focus:border-[#086288] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#086288] hover:bg-[#4D8DBA] text-white font-semibold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>
                {lang === "uz"
                  ? "Bo'sh vaqtni tanlash"
                  : lang === "ru"
                  ? "Выбрать свободное время"
                  : "Choose a free time"}
              </span>
              <span>→</span>
            </button>
          </form>
        </div>
      </div>

      {/* Full Interactive Map */}
      <ClinicLocationMap compact />
    </div>
  );
};

export default Contact;
