import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  DentalToothMolar,
  DentalVeneerCrown,
  DentalImplantFixture,
  DentalWhiteningZoom,
  DentalSurgeryExtraction,
  IconShieldCheck,
  IconSparkleStar,
  IconClock,
} from "./MedicalIcons";
import { getA11yLabels } from "../constants/a11yLabels";
import { useBooking } from "../context/BookingContext";

const BOOKING_SERVICE_BY_CONCERN = {
  pain: "tish-davolash",
  aesthetic: "estetik-stomatologiya",
  missing: "implantatsiya",
  yellow: "tish-oqartirish",
  wisdom: "xirurgiya",
};

const concerns = [
  {
    id: "pain",
    icon: <DentalToothMolar className="w-5 h-5" />,
    tag: { uz: "Terapiya", ru: "Терапия", en: "Restorative" },
    title: {
      uz: "Tish og'rig'i, karies yoki eski plomba tushishi",
      ru: "Острая боль, кариес или выпала пломба",
      en: "Toothache, cavity, or broken filling",
    },
    recommendation: {
      uz: "Mikroskopik Kanal Davolash & Fotopolimer Restavratsiya",
      ru: "Эндодонтическое Лечение и Нано-Композитная Реставрация",
      en: "Microscopic Root Canal & Photopolymer Restoration",
    },
    summary: {
      uz: "Karies va nerv shamollashini 100% og'riqsiz tozalab, Germaniya (3M Filtek) yoki Yaponiya (Estelite) nano-keramik plombasi bilan tishning tabiiy anatomiyasini tiklaymiz.",
      ru: "Полное обезболивание с аппликационным гелем и восстановление анатомии зуба сертифицированными пломбами из Германии (3M Filtek) и Японии (Estelite).",
      en: "100% painless root therapy and natural tooth rebuilding using authentic German (3M Filtek) and Japanese (Estelite) nano-hybrid composites.",
    },
    duration: { uz: "30–45 daqiqa (1 qabul)", ru: "30–45 минут (1 визит)", en: "30–45 mins (1 visit)" },
    anesthesia: { uz: "2 bosqichli gel + kompyuter anesteziya", ru: "Гель + компьютерная анестезия", en: "Topical gel + micro-anesthesia" },
    warranty: { uz: "5–10 yil rasmiy kafolat", ru: "Гарантия 5–10 лет", en: "5–10 Years Warranty" },
  },
  {
    id: "aesthetic",
    icon: <DentalVeneerCrown className="w-5 h-5" />,
    tag: { uz: "Estetika", ru: "Эстетика", en: "Aesthetics" },
    title: {
      uz: "Old tishlar shakli, rangi yoki orasi ochiqligi",
      ru: "Неровные передние зубы, сколы или щели",
      en: "Front tooth shape, gaps, or discoloration",
    },
    recommendation: {
      uz: "E-max Keramik Vinirlar yoki Badiiy Restavratsiya",
      ru: "Керамические Виниры E-max или Художественная Реставрация",
      en: "E-max Porcelain Veneers or Artistic Bonding",
    },
    summary: {
      uz: "Yuz tuzilishingizga mos tabiiy yorqin tabassum yaratish. Tishlarni minimal silliqlash orqali ultra-yupqa E-max vinirlar yoki Germaniya tsirkoniy koronkalari o'rnatiladi.",
      ru: "Индивидуальный дизайн улыбки: ультратонкие керамические виниры E-max или циркониевые коронки с естественной полупрозрачностью эмали.",
      en: "Bespoke smile architecture using ultra-thin E-max ceramic veneers or German zirconia crowns with natural enamel translucency.",
    },
    duration: { uz: "1–2 ta tashrif", ru: "1–2 визита", en: "1–2 visits" },
    anesthesia: { uz: "100% og'riqsiz va qulay", ru: "100% без боли и дискомфорта", en: "100% painless & gentle" },
    warranty: { uz: "10–15 yil kafolat", ru: "Срок службы 10–15+ лет", en: "10–15+ Years Lifespan" },
  },
  {
    id: "missing",
    icon: <DentalImplantFixture className="w-5 h-5" />,
    tag: { uz: "Implantologiya", ru: "Имплантология", en: "Implantology" },
    title: {
      uz: "Bir yoki bir nechta tish yo'qolgan (tish qo'yish)",
      ru: "Отсутствует один или несколько зубов",
      en: "One or more missing teeth",
    },
    recommendation: {
      uz: "Biotitan Implantatsiya (Osstem / Straumann) yoki Tsirkoniy Ko'prik",
      ru: "Имплантация (Osstem / Straumann) или Циркониевый Мост",
      en: "Titanium Implant (Osstem / Straumann) or Zirconia Bridge",
    },
    summary: {
      uz: "Qo'shni sog'lom tishlarni charxlamasdan, Janubiy Koreya yoki Shveysariya titan implantini 20 daqiqada og'riqsiz o'rnatish hamda ustiga mustahkam tsirkoniy karonka qo'yish.",
      ru: "Восстановление утраченного зуба за 20 минут без обточки соседних здоровых зубов с установкой корейского (Osstem) или швейцарского (Straumann) имплантата.",
      en: "Restore missing teeth in 20 minutes without grinding adjacent healthy teeth using Korean (Osstem) or Swiss (Straumann) titanium implants.",
    },
    duration: { uz: "20 daqiqa (o'rnatish)", ru: "20 минут (установка)", en: "20 mins (placement)" },
    anesthesia: { uz: "Kuchaytirilgan xavfsiz anesteziya", ru: "Усиленная безопасная анестезия", en: "Deep local surgical block" },
    warranty: { uz: "Umrbod implant kafolati", ru: "Пожизненная гарантия на имплант", en: "Lifetime Implant Warranty" },
  },
  {
    id: "yellow",
    icon: <DentalWhiteningZoom className="w-5 h-5" />,
    tag: { uz: "Oqartirish & Gigiyena", ru: "Отбеливание", en: "Whitening" },
    title: {
      uz: "Tish sarg'ayishi, tish toshlari yoki milk qonashi",
      ru: "Желтизна эмали, зубной камень или кровоточивость",
      en: "Stained enamel, tartar, or bleeding gums",
    },
    recommendation: {
      uz: "AirFlow Kompleks Tozalash + Philips ZOOM 4 Lazer Oqartirish",
      ru: "Чистка AirFlow + Лазерное Отбеливание Philips ZOOM 4",
      en: "AirFlow Prophylaxis + Philips ZOOM 4 Cold LED Whitening",
    },
    summary: {
      uz: "Ultratovush va Shveysariya AirFlow kukuni bilan tish toshlarini tozalash hamda sovuq LED nuri yordamida emalga zarar yetkazmasdan tishlarni tabiiy yorqin oqartirish.",
      ru: "Бережное снятие зубного камня и налёта по швейцарскому протоколу AirFlow и безопасное осветление эмали холодным светом Philips ZOOM 4.",
      en: "Swiss AirFlow tartar removal followed by cold LED Philips ZOOM 4 whitening with zero thermal stress on tooth enamel.",
    },
    duration: { uz: "40–45 daqiqa (1 seans)", ru: "40–45 минут (1 сеанс)", en: "40–45 mins (1 session)" },
    anesthesia: { uz: "Emal himoyalovchi remineral gel", ru: "Реминерализирующий гель", en: "Desensitizing enamel gel" },
    warranty: { uz: "1.5–2 yil yorqin natija", ru: "Эффект на 1.5–2 года", en: "1.5–2 Years Radiant Smile" },
  },
  {
    id: "wisdom",
    icon: <DentalSurgeryExtraction className="w-5 h-5" />,
    tag: { uz: "Mikroxirurgiya", ru: "Хирургия", en: "Oral Surgery" },
    title: {
      uz: "Aql tishi bezovta qilishi yoki yaroqsiz ildizni olish",
      ru: "Беспокоит зуб мудрости или разрушенный корень",
      en: "Painful wisdom tooth or damaged root extraction",
    },
    recommendation: {
      uz: "Atravmatik Mikroxirurgik Tish Olish Protokoli",
      ru: "Атравматичное Микрохирургическое Удаление",
      en: "Atraumatic Microsurgical Tooth Extraction",
    },
    summary: {
      uz: "Milk va suyak to'qimasini shikastlamasdan, maxsus mikroxirurgik elevatorlar yordamida 100% og'riqsiz tish olish. Shishsiz va asoratsiz 1–2 kunda tez bitish.",
      ru: "Бережное удаление зубов мудрости и сложных корней без боли и отёков с полным сохранением костной ткани.",
      en: "Gentle extraction of wisdom teeth and complex roots with zero pain, preserving bone architecture for rapid 1–2 day healing.",
    },
    duration: { uz: "10–20 daqiqa", ru: "10–20 минут", en: "10–20 mins" },
    anesthesia: { uz: "To'liq blokada (0% og'riq)", ru: "Полная блокада (0% боли)", en: "Complete nerve block (0% pain)" },
    warranty: { uz: "Shishsiz tez tiklanish", ru: "Быстрое заживление без отёка", en: "Rapid Swelling-Free Healing" },
  },
];

const SmileAssessmentWizard = () => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const { openBooking } = useBooking();
  const [selectedConcern, setSelectedConcern] = useState("pain");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");

  const active = concerns.find((c) => c.id === selectedConcern) || concerns[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    openBooking({
      service: BOOKING_SERVICE_BY_CONCERN[selectedConcern] || null,
      name: patientName,
      phone: patientPhone,
      note: `${active.title[lang]} → ${active.recommendation[lang]}`,
    });
  };

  return (
    <section className="py-10 sm:py-16 bg-white relative overflow-hidden border-t border-slate-100" aria-label={a11y.smileWizard}>
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#086287] px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 mb-2.5">
            <IconSparkleStar className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>
              {lang === "uz"
                ? "ONLAYN STOMATOLOGIK DIAGNOSTIKA"
                : lang === "ru"
                ? "ОНЛАЙН ПОДБОР ЛЕЧЕНИЯ"
                : "INTERACTIVE DENTAL ASSESSMENT"}
            </span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {lang === "uz"
              ? "Sizni Qanday Muammo Bezovta Qilmoqda?"
              : lang === "ru"
              ? "Какая Проблема Вас Беспокоит?"
              : "What Dental Concern Can We Solve For You?"}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2">
            {lang === "uz"
              ? "Holatingizni tanlang va Dr. Nozima Baxtiyarovnaning klinik tavsiyasi hamda davolash vaqti bilan tanishing."
              : lang === "ru"
              ? "Выберите вашу ситуацию и получите персональную клиническую рекомендацию от Д-ра Нозимы Мурзажанова."
              : "Select your symptom below to see Dr. Nozima Baxtiyarovna's clinical protocol and expected visit duration."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left: 5 Symptom Selection Buttons */}
          <div
            role="tablist"
            aria-label={lang === "uz" ? "Shikoyatlar ro'yxati" : lang === "ru" ? "Список симптомов" : "List of symptoms"}
            className="lg:col-span-5 flex flex-col gap-2 sm:gap-2.5"
          >
            {concerns.map((item) => {
              const isSelected = item.id === selectedConcern;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  id={`concern-tab-${item.id}`}
                  aria-controls="concern-panel"
                  onClick={() => setSelectedConcern(item.id)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 flex items-center gap-2.5 sm:gap-3.5 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-[#086287] to-[#0284c7] text-white border-transparent shadow-lg shadow-blue-950/20"
                      : "bg-slate-50/80 hover:bg-blue-50/40 text-slate-800 border-slate-200/90 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-white text-[#086287] border border-slate-200/80 shadow-2xs"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span
                      className={`text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider block ${
                        isSelected ? "text-amber-300" : "text-[#0284c7]"
                      }`}
                    >
                      {item.tag[lang]}
                    </span>
                    <span className="text-xs sm:text-sm font-bold block leading-snug mt-0.5">
                      {item.title[lang]}
                    </span>
                  </div>
                  <span className={`text-xs sm:text-sm font-bold ${isSelected ? "text-white" : "text-slate-400"}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Doctor's Instant Clinical Recommendation & Direct Booking */}
          <div
            id="concern-panel"
            role="tabpanel"
            aria-labelledby={`concern-tab-${selectedConcern}`}
            className="lg:col-span-7 bg-slate-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200/90 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200/80">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#086287] bg-blue-100/80 px-3 py-1 rounded-full">
                  {lang === "uz"
                    ? "DR. NOZIMA TAVSIYASI"
                    : lang === "ru"
                    ? "РЕКОМЕНДАЦИЯ Д-РА ОЛИМЖОНА"
                    : "DR. NOZIMA'S RECOMMENDATION"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <IconShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{active.warranty[lang]}</span>
                </span>
              </div>

              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
                {active.recommendation[lang]}
              </h3>

              <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                {active.summary[lang]}
              </p>

              {/* 2 Protocol Pills */}
              <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <IconClock className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>
                      {lang === "uz" ? "Muolaja davomiyligi" : lang === "ru" ? "Длительность" : "Procedure Duration"}
                    </span>
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 block mt-1">
                    {active.duration[lang]}
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <IconShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>
                      {lang === "uz" ? "Og'riqsizlantirish" : lang === "ru" ? "Обезболивание" : "Pain Control"}
                    </span>
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 block mt-1">
                    {active.anesthesia[lang]}
                  </span>
                </div>
              </div>
            </div>

            {/* Mini Inline Form */}
            <form onSubmit={handleSubmit} className="mt-6 pt-5 border-t border-slate-200/80">
              <p className="text-xs font-extrabold text-slate-800 mb-3">
                {lang === "uz"
                  ? "Ushbu yo'nalish bo'yicha navbatsiz qabulga yozilish:"
                  : lang === "ru"
                  ? "Записаться на приём по данному направлению:"
                  : "Book a priority consultation for this treatment:"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <label htmlFor="wizard-name" className="sr-only">
                  {lang === "uz" ? "Ismingiz" : lang === "ru" ? "Ваше имя" : "Your name"}
                </label>
                <input
                  id="wizard-name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder={lang === "uz" ? "Ismingiz" : lang === "ru" ? "Ваше имя" : "Your name"}
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#086287]"
                />
                <label htmlFor="wizard-phone" className="sr-only">
                  {lang === "uz" ? "Telefon raqamingiz" : lang === "ru" ? "Номер телефона" : "Phone number"}
                </label>
                <input
                  id="wizard-phone"
                  name="tel"
                  autoComplete="tel"
                  type="tel"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="+998 (94) ..."
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#086287]"
                />
                <button
                  type="submit"
                  className="py-2.5 px-4 rounded-xl bg-[#086287] hover:bg-[#064863] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  {lang === "uz" ? "Vaqt tanlash →" : lang === "ru" ? "Выбрать время →" : "Pick Time →"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmileAssessmentWizard;
