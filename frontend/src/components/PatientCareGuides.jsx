import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  DentalImplantFixture,
  DentalVeneerCrown,
  DentalWhiteningZoom,
  DentalSurgeryExtraction,
  IconCheckCircle,
  IconShieldCheck,
  IconClock,
} from "./MedicalIcons";

const guides = [
  {
    id: "implant-care",
    icon: <DentalImplantFixture className="w-5 h-5" />,
    tab: { uz: "Implantdan Keyin", ru: "После Имплантации", en: "Post-Implant Care" },
    title: {
      uz: "Tish Implantatsiyasidan Keyingi Parvarish Qoidalari",
      ru: "Памятка Пациенту После Установки Имплантата",
      en: "Post-Implant Placement Recovery Guidelines",
    },
    dos: {
      uz: [
        "Dastlabki 2–3 soat davomida yonoq sohasiga 15 daqiqadan sovuq kompress qo'ying",
        "Shifokor yozib bergan antibiotik va og'riq qoldiruvchi vositalarni o'z vaqtida iching",
        "Yumshoq va iliq taomlar (sho'rva, pyure, tvorog) iste'mol qiling",
        "Og'iz bo'shlig'ini antiseptik eritma (Xlorgeksidin 0.05%) bilan ohista vanna qiling",
      ],
      ru: [
        "Прикладывайте холодный компресс к щеке по 15 минут в первые 2–3 часа",
        "Принимайте назначенные врачом препараты строго по схеме",
        "Употребляйте мягкую тёплую пищу в первые 3–5 дней",
        "Делайте аккуратные ротовые ванночки раствором Хлоргексидина 0.05%",
      ],
      en: [
        "Apply a cold pack to the outer cheek for 15-minute intervals during the first 3 hours",
        "Take prescribed medications and antibiotics strictly on schedule",
        "Stick to soft, lukewarm foods for the first 3–5 days",
        "Use gentle antiseptic mouth baths (Chlorhexidine 0.05%) without vigorous rinsing",
      ],
    },
    donts: {
      uz: [
        "3–5 kun davomida issiq hammom, sauna va og'ir jismoniy mashqlardan saqlaning",
        "Implant o'rnatilgan tomonda qattiq ovqat chaynamang",
        "Yarani til yoki qo'l bilan tekshirmang",
      ],
      ru: [
        "Исключите баню, сауну и тяжёлые физические нагрузки на 3–5 дней",
        "Не жуйте твёрдую пищу на стороне установленного имплантата",
        "Не трогайте область швов языком или руками",
      ],
      en: [
        "Avoid hot baths, saunas, and heavy physical workouts for 3–5 days",
        "Do not chew hard foods on the implant side during initial healing",
        "Do not touch or disturb the suture site with your tongue or fingers",
      ],
    },
  },
  {
    id: "crown-veneer-care",
    icon: <DentalVeneerCrown className="w-5 h-5" />,
    tab: { uz: "Karonka & Vinirlar", ru: "Коронки и Виниры", en: "Crowns & Veneers" },
    title: {
      uz: "Tsirkoniy Karonka va E-max Vinirlarni Uzoq Yillar Asrash",
      ru: "Уход за Циркониевыми Коронками и Винирами E-max",
      en: "Long-Term Care for Zirconia Crowns & E-max Veneers",
    },
    dos: {
      uz: [
        "Kuniga 2 marta yumshoq (Soft) cho'tka va abraziv bo'lmagan pasta bilan yuving",
        "Tishlar orasini tozalash uchun irrigator (suv purkagich) ishlating",
        "Har 6 oyda Dr. Nozima ko'rigidan va professional gigiyenadan o'ting",
      ],
      ru: [
        "Чистите зубы 2 раза в день мягкой щёткой и неабразивной пастой",
        "Используйте ирригатор для бережного очищения межзубных промежутков",
        "Проходите профилактический осмотр и профгигиену каждые 6 месяцев",
      ],
      en: [
        "Brush twice daily with a soft-bristle brush and non-abrasive toothpaste",
        "Use a water flosser (irrigator) daily to keep gum margins pristine",
        "Schedule a routine checkup and gentle polish every 6 months",
      ],
    },
    donts: {
      uz: [
        "Old vinirlar bilan pista, yong'oq po'chog'i yoki qattiq suyaklarni chaqmang",
        "Tishlarni ip yoki qadoq ochish uchun ishlatmang",
      ],
      ru: [
        "Не разгрызайте передними зубами орехи, семечки или леденцы",
        "Не перекусывайте нитки и твёрдые предметы",
      ],
      en: [
        "Never crack nutshells, ice, or hard candy with front veneers",
        "Avoid using teeth to tear packaging or threads",
      ],
    },
  },
  {
    id: "whitening-care",
    icon: <DentalWhiteningZoom className="w-5 h-5" />,
    tab: { uz: "Oqartirishdan So'ng", ru: "После Отбеливания", en: "After Whitening" },
    title: {
      uz: "Philips ZOOM 4 Oqartirishdan Keyin «Oq Parhez» (48 Soat)",
      ru: "«Белая Диета» После Лазерного Отбеливания ZOOM 4",
      en: "48-Hour 'White Diet' After Philips ZOOM 4 Whitening",
    },
    dos: {
      uz: [
        "Dastlabki 48 soatda oq rangli mahsulotlar: sut, tvorog, tovuq go'shti, guruch iste'mol qiling",
        "Sezuvchanlikni kamaytiruvchi maxsus remineral pasta ishlating",
        "Ko'proq toza suv iching",
      ],
      ru: [
        "В первые 48 часов соблюдайте «белую диету»: молочные продукты, курица, рис, вода",
        "Используйте укрепляющую пасту для чувствительной эмали",
        "Пейте больше чистой воды",
      ],
      en: [
        "Follow the 'White Diet' for 48 hours: dairy, chicken, rice, bananas, and water",
        "Brush with remineralizing toothpaste for enamel comfort",
        "Drink plenty of pure water after meals",
      ],
    },
    donts: {
      uz: [
        "48 soat davomida qahva, qora choy, kola, shokolad va rangli sharbatlar ichmang",
        "Juda issiq va juda sovuq ichimliklarni bir vaqtda ichmang",
      ],
      ru: [
        "На 48 часов исключите крепкий чай, кофе, колу, ягоды и красящие соусы",
        "Избегайте резких перепадов температур пищи",
      ],
      en: [
        "Avoid coffee, black tea, cola, dark berries, and soy sauce for 48 hours",
        "Avoid extreme hot-and-cold temperature shocks",
      ],
    },
  },
  {
    id: "extraction-care",
    icon: <DentalSurgeryExtraction className="w-5 h-5" />,
    tab: { uz: "Tish Olingandan So'ng", ru: "После Удаления", en: "Post-Extraction" },
    title: {
      uz: "Tish Olingandan Keyin Tez va Shishsiz Bitish Qoidalari",
      ru: "Рекомендации После Атравматичного Удаления Зуба",
      en: "Smooth Healing After Atraumatic Tooth Extraction",
    },
    dos: {
      uz: [
        "Shifokor qo'ygan steril tamponni 20–30 daqiqa ushlab turing",
        "2 soatdan so'ng qarama-qarshi tomonda iliq va yumshoq ovqat yeng",
        "Yostiqni biroz balandroq qilib uxlang",
      ],
      ru: [
        "Удерживайте стерильный марлевый тампон 20–30 минут",
        "Принимайте пищу через 2 часа на противоположной стороне",
        "Спите на чуть приподнятой подушке в первую ночь",
      ],
      en: [
        "Keep gentle pressure on the sterile gauze pad for 20–30 minutes",
        "Eat soft lukewarm food on the opposite side after 2 hours",
        "Rest with your head slightly elevated the first evening",
      ],
    },
    donts: {
      uz: [
        "Birinchi sutkada og'izni kuch bilan chayqamang (qon laxtasi tushib ketmasligi uchun!)",
        "2–3 kun issiq ovqat va issiq ichimlik ichmang",
      ],
      ru: [
        "Категорически не полощите рот активно в первые сутки, чтобы сохранить кровяной сгусток!",
        "Не пейте горячие напитки в течение 2–3 дней",
      ],
      en: [
        "Do NOT rinse vigorously or spit for 24 hours so the protective blood clot stays intact!",
        "Avoid hot drinks and strenuous exercise for 2–3 days",
      ],
    },
  },
];

const PatientCareGuides = () => {
  const { lang } = useLanguage();
  const [activeId, setActiveId] = useState("implant-care");

  const current = guides.find((g) => g.id === activeId) || guides[0];

  return (
    <section className="py-10 sm:py-16 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#086288] px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 mb-2.5">
            <IconShieldCheck className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>
              {lang === "uz"
                ? "BEMORLAR UCHUN TIBBIY ESLATMA"
                : lang === "ru"
                ? "ПАМЯТКА ПАЦИЕНТУ"
                : "POST-TREATMENT CARE GUIDES"}
            </span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {lang === "uz"
              ? "Muolajadan Keyingi To'g'ri Parvarish"
              : lang === "ru"
              ? "Рекомендации Врача После Процедур"
              : "Doctor's Post-Procedure Care Instructions"}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2">
            {lang === "uz"
              ? "Dr. Nozima Baxtiyarovna tomonidan tayyorlangan muolajadan keyingi tez bitish va uzoq yillik natija qoidalari."
              : lang === "ru"
              ? "Клинические рекомендации Д-ра Нозимы Бахтияровны для быстрого заживления и сохранения результата на долгие годы."
              : "Clinical instructions prepared by Dr. Nozima Baxtiyarovna for rapid recovery and lasting dental results."}
          </p>
        </div>

        {/* 4 Tab Buttons */}
        <div
          role="tablist"
          aria-label={lang === "uz" ? "Parvarish qo'llanmalari" : lang === "ru" ? "Памятки по уходу" : "Care guides"}
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8"
        >
          {guides.map((g) => {
            const isSelected = g.id === activeId;
            return (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                id={`guide-tab-${g.id}`}
                aria-controls={`guide-panel-${g.id}`}
                onClick={() => setActiveId(g.id)}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#086288] text-white border-[#086288] shadow-md shadow-blue-950/20"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-300 hover:text-[#086288]"
                }`}
              >
                {g.icon}
                <span>{g.tab[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div
          id={`guide-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`guide-tab-${current.id}`}
          className="bg-slate-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200/90"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-slate-200/80">
            <h3 className="text-base sm:text-xl md:text-2xl font-black text-slate-900">
              {current.title[lang]}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#086288] bg-blue-50 px-2.5 sm:px-3 py-1 rounded-full border border-blue-200">
              <IconClock className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Dr. Nozima Baxtiyarovna · Sevdo Denta</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* DOs */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-emerald-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700 flex items-center gap-2 mb-3">
                <IconCheckCircle className="w-4 h-4 text-emerald-600" />
                <span>
                  {lang === "uz"
                    ? "Tavsiya etiladi (Bajarish shart):"
                    : lang === "ru"
                    ? "Рекомендуется делать:"
                    : "Recommended Do's:"}
                </span>
              </span>
              <ul className="space-y-2.5">
                {current.dos[lang].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DONTs */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700 flex items-center gap-2 mb-3">
                <span className="w-4 h-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px] font-black">
                  ✕
                </span>
                <span>
                  {lang === "uz"
                    ? "Mumkin emas (Cheklovlar):"
                    : lang === "ru"
                    ? "Чего делать нельзя:"
                    : "Important Restrictions:"}
                </span>
              </span>
              <ul className="space-y-2.5">
                {current.donts[lang].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-5 h-5 rounded-full bg-red-50 text-red-600 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      !
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PatientCareGuides;
