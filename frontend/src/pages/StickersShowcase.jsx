import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, getExperienceBadge } from "../constants/doctor";
import Seo from "../components/Seo";
import DentalSticker from "../components/DentalSticker";
import { IconSparkleStar, IconPhone } from "../components/MedicalIcons";

const STICKER_PACK = [
  {
    id: "st-1",
    variant: "tooth-crown",
    color: "navy",
    rotate: "-rotate-2",
    sublabel: "SEVDO DENTA · ANDIJON",
    label: {
      uz: "Qirollik Tabassumi",
      ru: "Королевская Улыбка",
      en: "Royal Smile Design",
    },
    desc: {
      uz: "E-max press-keramika vinirlari va Germaniya tsirkoniy koronkalari uchun maxsus sifat stiker belgisi.",
      ru: "Фирменный стикер для эстетического протезирования винирами E-max и циркониевыми коронками.",
      en: "Signature die-cut badge for E-max ceramic veneers and zirconia prosthodontics.",
    },
  },
  {
    id: "st-2",
    variant: "painless-heart",
    color: "sky",
    rotate: "rotate-2",
    sublabel: "2-STEP ANESTHESIA",
    label: {
      uz: "100% Og'riqsiz",
      ru: "100% Без Боли",
      en: "100% Painless Care",
    },
    desc: {
      uz: "Ikki bosqichli mikro-anesteziya: avval milk muzlatuvchi gel bilan og'riqsizlantiriladi, ukol sezilmaydi.",
      ru: "Двухэтапная анестезия с предварительным обезболивающим гелем — без страха и боли.",
      en: "Two-stage micro-anesthesia with topical pre-numbing gel for zero needle discomfort.",
    },
  },
  {
    id: "st-3",
    variant: "implant-shield",
    color: "emerald",
    rotate: "-rotate-1",
    sublabel: "OSSTEM & STRAUMANN",
    label: {
      uz: "Biotitan Implant",
      ru: "Титановый Имплант",
      en: "Bio-Titanium Implant",
    },
    desc: {
      uz: "Janubiy Koreya va Shveysariya sertifikatlangan implantlari — 99.2% suyakka muvaffaqiyatli integratsiya.",
      ru: "Сертифицированные корейские и швейцарские имплантаты с приживаемостью 99.2%.",
      en: "Certified South Korean and Swiss titanium root fixtures with 99.2% osseointegration.",
    },
  },
  {
    id: "st-4",
    variant: "laser-diamond",
    color: "slate",
    rotate: "rotate-2",
    sublabel: "PHILIPS ZOOM® 4 LED",
    label: {
      uz: "Brilliant Oqlik",
      ru: "Бриллиантовая Белизна",
      en: "Diamond Whitening",
    },
    desc: {
      uz: "Sovuq LED nuri yordamida tish emaliga zarar yetkazmasdan 1 seansda 8 tonga oqartirish.",
      ru: "Безопасное холодное LED-отбеливание эмали на 8 тонов за один сеанс.",
      en: "Cold-LED enamel brightening up to 8 shades in a single 45-minute session.",
    },
  },
  {
    id: "st-5",
    variant: "doctor-badge",
    color: "gold",
    rotate: "-rotate-2",
    sublabel: "SEVDO DENTA · CERTIFIED",
    label: {
      uz: `Dr. Nozima · ${getExperienceBadge("uz")}`,
      ru: `Д-р Олимжон · ${getExperienceBadge("ru")}`,
      en: `Dr. Nozima · ${getExperienceBadge("en")}`,
    },
    desc: {
      uz: "Andijon shahri Eski Shahar «Sevdo Denta» klinikasida 1,000+ dan ortiq mamnun bemorlar ishonchi.",
      ru: "Более 1 000 довольных пациентов в современной клинике «Sevdo Denta» в Андижане.",
      en: "Trusted by over 1,000 happy patients at «Sevdo Denta» Clinic in Andijan Old City.",
    },
  },
  {
    id: "st-6",
    variant: "sterile-shield",
    color: "indigo",
    rotate: "rotate-1",
    sublabel: "ANTI-SPID · B-CLASS",
    label: {
      uz: "100% Steril Paket",
      ru: "100% Стерильность",
      en: "100% Sterile Pouch",
    },
    desc: {
      uz: "Har bir bemor uchun alohida vakuumli avtoklavda sterillangan kraft-paket ko'z oldingizda ochiladi.",
      ru: "Индивидуальный стерильный крафт-пакет вскрывается непосредственно перед пациентом.",
      en: "Every instrument kit is autoclaved in B-class sterilizers and unsealed in front of you.",
    },
  },
];

const StickersShowcase = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const [selectedSize, setSelectedSize] = useState("lg");

  const seo = {
    uz: {
      title: "Stomatologik Sifat Stikerlari — Dr. Nozima Baxtiyarovna | Sevdo Denta",
      description:
        "Dr. Nozima Baxtiyarovna («Sevdo Denta» klinikasi) stomatologik sifat, 100% sterillik va og'riqsiz davolash kafolati belgilari.",
    },
    ru: {
      title: "Фирменные Стикеры Качества — Д-р Нозима Бахтияровна | Sevdo Denta",
      description:
        "Фирменные стоматологические стикеры и гарантии качества клиники «Sevdo Denta» Д-ра Нозимы Мурзажанова в Андижане.",
    },
    en: {
      title: "Dental Quality Sticker Pack — Dr. Nozima Baxtiyarovna | Sevdo Denta",
      description:
        "Signature die-cut dental quality badges and clinical guarantees by Dr. Nozima Baxtiyarovna at «Sevdo Denta» Clinic in Andijan.",
    },
  }[lang];

  return (
    <div className="py-6 sm:py-10 space-y-12">
      <Seo title={seo.title} description={seo.description} noindex />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#086287]/5 text-[#086287] border border-[#086287]/15">
          <IconSparkleStar className="w-4 h-4 text-[#4d8db9]" />
          <span>
            {lang === "uz"
              ? "SEVDO DENTA · MAXSUS DIZAYN STIKERLAR"
              : lang === "ru"
              ? "SEVDO DENTA · ФИРМЕННЫЙ СТИКЕРПАК"
              : "SEVDO DENTA · DIE-CUT STICKER PACK"}
          </span>
        </span>
        <h1 className="font-serif-classic text-3xl sm:text-5xl font-bold text-[#086287] tracking-tight">
          {lang === "uz"
            ? "Klinikamiz Sifat va Kafolat Stikerlari"
            : lang === "ru"
            ? "Фирменные Стикеры Качества и Гарантии"
            : "Signature Dental Quality Sticker Pack"}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {lang === "uz"
            ? "Har bir stiker Dr. Nozima Baxtiyarovna klinikasining asosiy tibbiy standartlari — 100% sterillik, og'riqsiz anesteziya va xalqaro kafolatni ifodalaydi."
            : lang === "ru"
            ? "Каждый стикер отражает ключевые стандарты клиники Д-ра Нозимы Мурзажанова: 100% стерильность, лечение без боли и международную гарантию."
            : "Each die-cut vinyl badge represents a core clinical standard at Dr. Nozima Baxtiyarovna's practice in Andijan."}
        </p>

        {/* Size Switcher */}
        <div className="pt-2 flex items-center justify-center gap-2">
          <span className="text-xs font-bold text-slate-500">
            {lang === "uz" ? "O'lcham:" : lang === "ru" ? "Размер:" : "Sticker Size:"}
          </span>
          {["sm", "md", "lg"].map((sz) => (
            <button
              key={sz}
              type="button"
              onClick={() => setSelectedSize(sz)}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase cursor-pointer transition-all ${
                selectedSize === sz
                  ? "bg-[#086287] text-white shadow-xs"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#4d8db9]"
              }`}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>

      {/* Sticker Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STICKER_PACK.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#cbe1ec] shadow-sm hover:shadow-md hover:border-[#4d8db9] transition-all flex flex-col items-center text-center justify-between gap-6"
          >
            {/* Die-Cut Sticker Render Area */}
            <div className="w-full py-8 rounded-2xl bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] bg-slate-50/80 border border-slate-200/60 flex items-center justify-center">
              <DentalSticker
                variant={item.variant}
                color={item.color}
                rotate={item.rotate}
                size={selectedSize}
                sublabel={item.sublabel}
                label={item.label[lang]}
              />
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-[#086287]">
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
      <div className="rounded-3xl bg-[#086287] text-white p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
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
            className="px-6 py-3.5 rounded-xl bg-white text-[#086287] font-bold text-xs sm:text-sm shadow-sm hover:bg-[#f2f6fa] cursor-pointer transition-colors"
          >
            {lang === "uz" ? "Qabulga Yozilish →" : lang === "ru" ? "Записаться →" : "Book Visit →"}
          </button>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
          >
            <IconPhone className="w-4 h-4 text-[#9cb8d4]" />
            <span>{DOCTOR_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickersShowcase;
