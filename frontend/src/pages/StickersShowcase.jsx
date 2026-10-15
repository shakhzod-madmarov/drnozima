import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, getExperienceBadge } from "../constants/doctor";
import Seo from "../components/Seo";
import DentalSticker from "../components/DentalSticker";
import { IconSparkleStar, IconPhone } from "../components/MedicalIcons";

const QUALITY_SEALS = [
  {
    id: "qs-1",
    variant: "tooth-sparkle",
    color: "primary",
    sublabel: "SEVDO DENTA · NOZIMA BAXTIYAROVNA",
    label: {
      uz: "Kafolatlangan Tabassum",
      ru: "Фирменный Знак Качества",
      en: "Signature Smile Seal",
    },
    desc: {
      uz: "Dr. Nozima Baxtiyarovnaning shaxsiy tibbiy standarti: tabiiy tish shakli, yorug'lik o'tkazuvchanligi va benuqson estetika.",
      ru: "Персональный стандарт Д-ра Нозимы Бахтияровны: естественная анатомия, микропрозрачность и безупречная эстетика.",
      en: "Dr. Nozima Baxtiyarovna's signature clinical standard: lifelike dental anatomy and natural light transmission.",
    },
  },
  {
    id: "qs-2",
    variant: "painless-heart",
    color: "sky",
    sublabel: "2-STEP ANESTHESIA",
    label: {
      uz: "100% Og'riqsiz Muolaja",
      ru: "100% Без Боли",
      en: "100% Painless Protocol",
    },
    desc: {
      uz: "Ikki bosqichli mikro-anesteziya: avval milk xushbo'y gel bilan to'liq og'riqsizlantiriladi, so'ngra in'ektsiya sezilmaydi.",
      ru: "Двухэтапная анестезия с предварительным аппликационным гелем — абсолютно комфортный визит без боли и страха.",
      en: "Two-stage micro-anesthesia with topical pre-numbing gel for gentle, completely painless treatment.",
    },
  },
  {
    id: "qs-3",
    variant: "tooth-crown",
    color: "gold",
    sublabel: "E-MAX & ZIRCONIA CAD/CAM",
    label: {
      uz: "Estetik Restavratsiya & Protez",
      ru: "Эстетическое Протезирование",
      en: "Aesthetic Prosthodontics",
    },
    desc: {
      uz: "Germaniya tsirkoniy karonkalari va Shveysariya E-max press-keramikasi — metall-siz, milkni qoraytirmaydigan yechim.",
      ru: "Безметалловые циркониевые коронки и прессованная керамика E-max — безупречное прилегание без темного края десны.",
      en: "Metal-free zirconia crowns and E-max pressed ceramics ensuring zero dark gum lines and lifelike clarity.",
    },
  },
  {
    id: "qs-4",
    variant: "laser-diamond",
    color: "cerulean",
    sublabel: "PHILIPS ZOOM® 4 LED",
    label: {
      uz: "Brilliant Oqlik & Gigiyena",
      ru: "Бриллиантовое Осветление",
      en: "Diamond Brightening",
    },
    desc: {
      uz: "Sovuq LED nuri ostida emalga zarar yetkazmasdan 1 seansda tishlarni 6–8 tonga xavfsiz va uzoq muddatga oqartirish.",
      ru: "Безопасное холодное LED-осветление эмали на 6–8 тонов за 45 минут с укреплением эмали фтором.",
      en: "Safe cold-LED brightening up to 8 shades in 45 minutes with enamel remineralization protection.",
    },
  },
  {
    id: "qs-5",
    variant: "doctor-badge",
    color: "primary",
    sublabel: "ADTI BITIRUVCHISI · 7 YIL",
    label: {
      uz: `Dr. Nozima · ${getExperienceBadge("uz")}`,
      ru: `Д-р Нозима · ${getExperienceBadge("ru")}`,
      en: `Dr. Nozima · ${getExperienceBadge("en")}`,
    },
    desc: {
      uz: "Andijon davlat tibbiyot instituti diplomi, doimiy malaka oshirish va 1,000+ dan ortiq mamnun bemorlar ishonchi.",
      ru: "Диплом Андижанского медицинского института, регулярные курсы повышения квалификации и доверие более 1 000 пациентов.",
      en: "Andijan State Medical Institute graduate with 7+ years of clinical excellence and 1,000+ satisfied smiles.",
    },
  },
  {
    id: "qs-6",
    variant: "sterile-shield",
    color: "porcelain",
    sublabel: "ANTI-SPID · B-CLASS AUTOCLAVE",
    label: {
      uz: "100% Steril Kraft-Paket",
      ru: "100% Стерильность",
      en: "100% Sterile Protocol",
    },
    desc: {
      uz: "Har bir bemor uchun alohida vakuumli avtoklavda sterillangan bittalik kraft-paket ko'z oldingizda ochiladi.",
      ru: "Индивидуальный стерильный крафт-пакет, обработанный в европейском автоклаве класса B, вскрывается при пациенте.",
      en: "Every instrument set is vacuum-sterilized in European Class-B autoclaves and opened directly in front of you.",
    },
  },
];

const StickersShowcase = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const [selectedSize, setSelectedSize] = useState("md");

  const seo = {
    uz: {
      title: "Stomatologik Sifat va Kafolat Standartlari — Dr. Nozima Baxtiyarovna | Sevdo Denta",
      description:
        "Dr. Nozima Baxtiyarovna («Sevdo Denta» klinikasi) stomatologik sifat, 100% sterillik va og'riqsiz davolash kafolati belgilari.",
    },
    ru: {
      title: "Клинические Стандарты и Знаки Качества — Д-р Нозима Бахтияровна | Sevdo Denta",
      description:
        "Фирменные стоматологические стандарты и гарантии качества клиники «Sevdo Denta» Д-ра Нозимы Бахтияровны в Андижане.",
    },
    en: {
      title: "Clinical Standards & Quality Seals — Dr. Nozima Baxtiyarovna | Sevdo Denta",
      description:
        "Signature clinical quality standards and guarantees by Dr. Nozima Baxtiyarovna at «Sevdo Denta» Clinic in Andijan.",
    },
  }[lang] || {
    title: "Clinical Standards — Dr. Nozima Baxtiyarovna",
    description: "Quality seals and clinical standards.",
  };

  return (
    <div className="py-6 sm:py-10 space-y-10">
      <Seo title={seo.title} description={seo.description} noindex />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#086288]/5 text-[#086288] border border-[#086288]/15">
          <IconSparkleStar className="w-4 h-4 text-[#4D8DBA]" />
          <span>
            {lang === "uz"
              ? "SEVDO DENTA · SIFAT STANDARTLARI"
              : lang === "ru"
              ? "SEVDO DENTA · СТАНДАРТЫ КАЧЕСТВА"
              : "SEVDO DENTA · CLINICAL STANDARDS"}
          </span>
        </span>

        <h1 className="font-serif-classic text-3xl sm:text-5xl font-bold text-[#086288] tracking-tight">
          {lang === "uz"
            ? "Klinikamiz Sifat va Kafolat Belgilari"
            : lang === "ru"
            ? "Фирменные Знаки Качества и Безопасности"
            : "Clinical Quality & Safety Standards"}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {lang === "uz"
            ? "Har bir belgi Dr. Nozima Baxtiyarovna amaliyotining asosiy qadriyatlarini — 100% sterillik, og'riqsiz muolaja, estetik aniqlik va xalqaro materiallarni ifodalaydi."
            : lang === "ru"
            ? "Каждый знак отражает ключевые принципы практики Д-ра Нозимы Бахтияровны: 100% стерильность, лечение без боли, эстетическую точность и европейские материалы."
            : "Each seal embodies the core values of Dr. Nozima Baxtiyarovna's dental practice in Andijan: sterile safety, gentle painless touch, and artistic precision."}
        </p>

        {/* Size Switcher */}
        <div className="pt-2 flex items-center justify-center gap-2">
          <span className="text-xs font-bold text-slate-500">
            {lang === "uz" ? "O'lcham:" : lang === "ru" ? "Размер:" : "Badge Size:"}
          </span>
          {["sm", "md", "lg"].map((sz) => (
            <button
              key={sz}
              type="button"
              onClick={() => setSelectedSize(sz)}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase cursor-pointer transition-all ${
                selectedSize === sz
                  ? "bg-[#086288] text-white shadow-xs"
                  : "bg-white text-slate-600 border border-[#D1E4F0] hover:border-[#4D8DBA]"
              }`}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>

      {/* Quality Seals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {QUALITY_SEALS.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D1E4F0] shadow-sm hover:shadow-md hover:border-[#4D8DBA] transition-all flex flex-col items-center text-center justify-between gap-5"
          >
            {/* Display Plate */}
            <div className="w-full py-7 px-4 rounded-2xl bg-[#F4F8FB] border border-[#D1E4F0]/60 flex items-center justify-center min-h-[110px]">
              <DentalSticker
                variant={item.variant}
                color={item.color}
                size={selectedSize}
                sublabel={item.sublabel}
                label={item.label[lang]}
              />
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-[#086288]">
                {item.label[lang]}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="rounded-3xl bg-[#086288] text-white p-7 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <h3 className="font-serif-classic text-xl sm:text-2xl font-bold">
            {lang === "uz"
              ? "Dr. Nozima Baxtiyarovna qabuliga navbatsiz yoziling"
              : lang === "ru"
              ? "Запишитесь на приём к Д-ру Нозиме без очереди"
              : "Book a Priority Visit with Dr. Nozima Baxtiyarovna"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200">
            {lang === "uz"
              ? "Andijon shahri, Eski Shahar (Old City), 1-qavat — «Sevdo Denta» stomatologiya klinikasi"
              : lang === "ru"
              ? "г. Андижан, Эски Шахар (Old City), 1-й этаж — клиника «Sevdo Denta»"
              : "Old City (Eski Shahar), 1st Floor, Andijan — «Sevdo Denta» Dental Clinic"}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              navigate(to("/booking"));
              window.scrollTo(0, 0);
            }}
            className="px-6 py-3.5 rounded-xl bg-[#FFEFC4] text-[#086288] font-bold text-xs sm:text-sm shadow-sm hover:bg-white cursor-pointer transition-colors"
          >
            {lang === "uz" ? "Qabulga Yozilish →" : lang === "ru" ? "Записаться →" : "Book Visit →"}
          </button>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
          >
            <IconPhone className="w-4 h-4 text-[#97D7FF]" />
            <span>{DOCTOR_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickersShowcase;
