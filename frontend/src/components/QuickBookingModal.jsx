import { useState, useEffect, useCallback, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { assets } from "../assets/assets";
import {
  DentalToothMolar,
  DentalVeneerCrown,
  DentalImplantFixture,
  DentalWhiteningZoom,
  DentalSurgeryExtraction,
  IconCheckCircle,
  IconShieldCheck,
  IconPhone,
  IconTelegram,
  IconSparkleStar,
  IconClock,
} from "./MedicalIcons";
import { useModalA11y } from "../hooks/useModalA11y";
import { getA11yLabels } from "../constants/a11yLabels";
import { DOCTOR_INFO } from "../constants/doctor";
import {
  fetchAvailableSlots,
  submitMedinsonBooking,
} from "../lib/medinsonBooking";

const SERVICE_OPTIONS = [
  {
    id: "tish-davolash",
    title: { uz: "Og'riqsiz Tish Davolash & Plomba", ru: "Лечение Кариеса и Пломбы", en: "Painless Fillings & Therapy" },
    badge: { uz: "Terapiya", ru: "Терапия", en: "Therapy" },
    duration: { uz: "30–45 daqiqa", ru: "30–45 минут", en: "30–45 mins" },
    icon: <DentalToothMolar className="w-4 h-4" />,
  },
  {
    id: "ortopediya",
    title: { uz: "Old va Orqa Tish Karonkalari", ru: "Циркониевые и Керамические Коронки", en: "Zirconia & Ceramic Crowns" },
    badge: { uz: "Ortopediya", ru: "Ортопедия", en: "Prosthetics" },
    duration: { uz: "2 ta qabul", ru: "2 визита", en: "2 visits" },
    icon: <DentalVeneerCrown className="w-4 h-4" />,
  },
  {
    id: "estetik-stomatologiya",
    title: { uz: "E-max Vinirlar & Estetik Tabassum", ru: "Виниры E-max и Эстетика", en: "E-max Veneers & Smile Design" },
    badge: { uz: "Estetika", ru: "Эстетика", en: "Aesthetics" },
    duration: { uz: "1–2 qabul", ru: "1–2 визита", en: "1–2 visits" },
    icon: <IconSparkleStar className="w-4 h-4" />,
  },
  {
    id: "implantatsiya",
    title: { uz: "Biotitan Tish Implantatsiyasi", ru: "Титановая Имплантация (Osstem)", en: "Titanium Dental Implants" },
    badge: { uz: "Implantologiya", ru: "Имплантология", en: "Implantology" },
    duration: { uz: "20 daqiqa", ru: "20 минут", en: "20 mins" },
    icon: <DentalImplantFixture className="w-4 h-4" />,
  },
  {
    id: "tish-oqartirish",
    title: { uz: "Philips ZOOM 4 Oqartirish & AirFlow", ru: "Отбеливание ZOOM 4 и Чистка", en: "ZOOM 4 Whitening & AirFlow" },
    badge: { uz: "Profilaktika", ru: "Гигиена", en: "Whitening" },
    duration: { uz: "45 daqiqa", ru: "45 минут", en: "45 mins" },
    icon: <DentalWhiteningZoom className="w-4 h-4" />,
  },
  {
    id: "xirurgiya",
    title: { uz: "Og'riqsiz Mikroxirurgik Tish Olish", ru: "Бережное Удаление Зубов", en: "Painless Tooth Extraction" },
    badge: { uz: "Jarrohlik", ru: "Хирургия", en: "Surgery" },
    duration: { uz: "15–20 daqiqa", ru: "15–20 минут", en: "15–20 mins" },
    icon: <DentalSurgeryExtraction className="w-4 h-4" />,
  },
];

/* Fallback slots shown while the relay is loading or if it is unreachable */
const FALLBACK_TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

function buildFallbackDates() {
  const out = [];
  const base = new Date();
  for (let i = 0; out.length < 7 && i < 14; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    if (d.getDay() === 0) continue; // skip Sunday
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    out.push(`${yyyy}-${mm}-${dd}`);
  }
  return out;
}

function formatDateBadge(isoDate, lang) {
  if (!isoDate) return "";
  const [y, m, d] = isoDate.split("-").map(Number);
  const dt = new Date(y, (m || 1) - 1, d || 1);
  const locale = lang === "ru" ? "ru-RU" : lang === "en" ? "en-US" : "uz-UZ";
  try {
    return dt.toLocaleDateString(locale, {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  } catch {
    return isoDate;
  }
}

const QuickBookingModal = ({
  isOpen,
  onClose,
  initialService = null,
  initialName = "",
  initialPhone = "",
  initialNote = "",
}) => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const dialogRef = useModalA11y(isOpen, onClose);
  const [selectedService, setSelectedService] = useState(
    initialService || "tish-davolash"
  );
  const [name, setName] = useState(initialName || "");
  const [phone, setPhone] = useState(initialPhone || "");
  const [note, setNote] = useState(initialNote || "");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [bookingResponse, setBookingResponse] = useState(null);

  // Live slots state from MedInson relay
  const [slotsData, setSlotsData] = useState(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00");

  const [prevOpen, setPrevOpen] = useState(false);
  if (isOpen && !prevOpen) {
    setPrevOpen(true);
    setSelectedService(initialService || "tish-davolash");
    setName(initialName || "");
    setPhone(initialPhone || "");
    setNote(initialNote || "");
    setSubmitted(false);
    setErrorMsg(null);
    setBookingResponse(null);
  } else if (!isOpen && prevOpen) {
    setPrevOpen(false);
  }

  const applySlotsData = useCallback((data) => {
    setSlotsData(data);
    const firstOpenDay = data?.days?.find(
      (d) => !d.isClosed && Array.isArray(d.slots) && d.slots.length > 0
    );
    if (firstOpenDay) {
      setSelectedDate(firstOpenDay.date);
      setSelectedTime(firstOpenDay.slots[0]);
    } else {
      const fb = buildFallbackDates();
      setSelectedDate((prev) => prev || fb[0]);
    }
    setLoadingSlots(false);
  }, []);

  const loadSlots = useCallback(async () => {
    setLoadingSlots(true);
    try {
      const data = await fetchAvailableSlots({ days: 14 });
      applySlotsData(data);
    } catch {
      const fb = buildFallbackDates();
      setSelectedDate((prev) => prev || fb[0]);
      setLoadingSlots(false);
    }
  }, [applySlotsData]);

  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    fetchAvailableSlots({ days: 14 })
      .then((data) => {
        if (!cancelled) applySlotsData(data);
      })
      .catch(() => {
        if (cancelled) return;
        const fb = buildFallbackDates();
        setSelectedDate((prev) => prev || fb[0]);
        setLoadingSlots(false);
      });
    return () => {
      cancelled = true;
    };
  }, [isOpen, applySlotsData]);

  const availableDays = useMemo(() => {
    if (slotsData?.days?.length) {
      const open = slotsData.days.filter(
        (d) => !d.isClosed && Array.isArray(d.slots) && d.slots.length > 0
      );
      if (open.length > 0) return open;
    }
    return buildFallbackDates().map((date) => ({
      date,
      isClosed: false,
      slots: FALLBACK_TIME_SLOTS,
    }));
  }, [slotsData]);

  const activeDayObj = useMemo(() => {
    return (
      availableDays.find((d) => d.date === selectedDate) ||
      availableDays[0] || { date: "", slots: FALLBACK_TIME_SLOTS }
    );
  }, [availableDays, selectedDate]);

  const effectiveTime =
    activeDayObj?.slots?.length && !activeDayObj.slots.includes(selectedTime)
      ? activeDayObj.slots[0]
      : selectedTime;

  if (!isOpen) return null;

  const currentService =
    SERVICE_OPTIONS.find((s) => s.id === selectedService) || SERVICE_OPTIONS[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || submitting) return;

    setSubmitting(true);
    setErrorMsg(null);

    try {
      const result = await submitMedinsonBooking({
        name,
        phone,
        serviceTitle: currentService.title[lang],
        serviceId: currentService.id,
        preferredDate: activeDayObj.date || selectedDate,
        preferredTime: effectiveTime,
        note: note || `Tezkor modal orqali (${lang.toUpperCase()})`,
        lang,
      });

      setBookingResponse(result);
      setSubmitted(true);
    } catch (err) {
      if (err?.status === 409) {
        setErrorMsg(
          lang === "uz"
            ? "Kechirasiz, bu vaqt hozirgina band qilindi. Iltimos, boshqa vaqtni tanlang."
            : lang === "ru"
            ? "К сожалению, это время только что заняли. Выберите другое время."
            : "Sorry, this time slot was just taken. Please select another time."
        );
        loadSlots();
      } else {
        setErrorMsg(
          lang === "uz"
            ? "Server bilan bog'lanishda xatolik yuz berdi. Qayta urinib ko'ring yoki qo'ng'iroq qiling."
            : lang === "ru"
            ? "Ошибка соединения с сервером. Попробуйте снова или позвоните нам."
            : "Connection error. Please try again or call our clinic directly."
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={a11y.quickBookingModal}
        tabIndex={-1}
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Luxury Header Banner */}
        <div className="bg-gradient-to-r from-[#0a192f] via-[#086288] to-[#0c1f3a] p-4 sm:p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            aria-label={a11y.closeModal}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center font-bold cursor-pointer transition-colors"
          >
            ✕
          </button>

          <div className="flex items-center gap-3 sm:gap-3.5 pr-8">
            <img
              src={assets.dr_nozima_portrait}
              alt="Dr. Nozima Baxtiyarovna"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl object-cover object-top border-2 border-amber-300/80 shadow-md shrink-0"
            />
            <div>
              <span className="inline-flex items-center gap-1.5 text-[9.5px] sm:text-[10px] font-black uppercase tracking-widest text-amber-300">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>
                  {lang === "uz"
                    ? "ONLAYN QABUL · SEVDO DENTA"
                    : lang === "ru"
                    ? "ОНЛАЙН ЗАПИСЬ · SEVDO DENTA"
                    : "ONLINE BOOKING · SEVDO DENTA"}
                </span>
              </span>
              <h3 className="text-base sm:text-xl font-black tracking-tight leading-snug mt-0.5">
                {lang === "uz"
                  ? "Dr. Nozima Qabuliga Yozilish"
                  : lang === "ru"
                  ? "Запись к Д-ру Нозиме Бахтияровне"
                  : "Book Visit with Dr. Nozima"}
              </h3>
              <p className="text-[11px] sm:text-xs text-sky-100/90 leading-tight mt-0.5">
                {lang === "uz"
                  ? "Andijon sh., A.Fitrat 251B (Eski Shahar) · Sevdo Denta"
                  : lang === "ru"
                  ? "г. Андижан, ул. А. Фитрата 251Б (Эски Шахар) · Sevdo Denta"
                  : "251B A. Fitrat St, Andijan (Old City) · Sevdo Denta"}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 max-h-[85dvh] sm:max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <IconCheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mb-1.5">
                  {lang === "uz"
                    ? "QABUL TASDIQLANDI"
                    : lang === "ru"
                    ? "ЗАПИСЬ ПОДТВЕРЖДЕНА"
                    : "APPOINTMENT CONFIRMED"}
                </span>
                <h4 className="text-xl font-black text-slate-900">
                  {lang === "uz"
                    ? `Rahmat, ${name}!`
                    : lang === "ru"
                    ? `Спасибо, ${name}!`
                    : `Thank you, ${name}!`}
                </h4>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-left space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">
                    {lang === "uz" ? "Xizmat:" : lang === "ru" ? "Услуга:" : "Service:"}
                  </span>
                  <span className="font-bold text-slate-900 text-right">
                    {currentService.title[lang]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">
                    {lang === "uz" ? "Sana va vaqt:" : lang === "ru" ? "Дата и время:" : "Date & Time:"}
                  </span>
                  <span className="font-bold text-[#086288]">
                    {formatDateBadge(activeDayObj.date || selectedDate, lang)} · {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">
                    {lang === "uz" ? "Telefon:" : lang === "ru" ? "Телефон:" : "Phone:"}
                  </span>
                  <span className="font-bold text-slate-900">{phone}</span>
                </div>
                {bookingResponse?.bookingId && (
                  <div className="flex justify-between pt-1 border-t border-slate-200/70">
                    <span className="text-slate-400 font-medium">ID:</span>
                    <span className="font-mono text-[11px] text-slate-600">
                      #{String(bookingResponse.bookingId).slice(-6).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                {lang === "uz"
                  ? "So'rovingiz klinikamizning MedInson qabul tizimiga yetkazildi. Tez orada siz bilan bog'lanamiz."
                  : lang === "ru"
                  ? "Ваша заявка передана в систему приёма клиники MedInson. Мы свяжемся с вами в ближайшее время."
                  : "Your booking request has been delivered to our MedInson appointment system. We will contact you shortly."}
              </p>

              <div className="pt-1 flex flex-wrap justify-center gap-2.5">
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm"
                >
                  <IconPhone className="w-3.5 h-3.5 text-white" />
                  <span>{DOCTOR_INFO.phone}</span>
                </a>
                <a
                  href={DOCTOR_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#229ED9] hover:bg-[#1d8ec4] text-white text-xs font-bold shadow-sm"
                >
                  <IconTelegram className="w-3.5 h-3.5 text-white" />
                  <span>Telegram ({DOCTOR_INFO.telegramHandle})</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                >
                  {lang === "uz" ? "Yopish" : lang === "ru" ? "Закрыть" : "Close"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 1. Select Dental Procedure */}
              <div>
                <span id="qbm-service-label" className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2">
                  {lang === "uz"
                    ? "1. Kerakli xizmat yo'nalishini tanlang:"
                    : lang === "ru"
                    ? "1. Выберите нужное направление:"
                    : "1. Select dental treatment:"}
                </span>
                <div role="radiogroup" aria-labelledby="qbm-service-label" className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICE_OPTIONS.map((item) => {
                    const active = selectedService === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setSelectedService(item.id)}
                        className={`p-2 sm:p-2.5 rounded-xl border text-left flex items-center gap-2 sm:gap-2.5 transition-all cursor-pointer ${
                          active
                            ? "bg-blue-50/90 border-[#086288] text-[#086288] shadow-2xs ring-1 ring-[#086288]/30"
                            : "bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-white hover:border-slate-300"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            active
                              ? "bg-[#086288] text-white"
                              : "bg-white text-[#086288] border border-slate-200"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10.5px] sm:text-[11px] font-bold block leading-tight truncate">
                            {item.title[lang]}
                          </span>
                          <span className="text-[9.5px] sm:text-[10px] text-slate-500 font-medium block mt-0.5">
                            {item.badge[lang]} · {item.duration[lang]}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Date & Free Time Slot Picker */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span id="qbm-slot-label" className="text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                    <IconClock className="w-3.5 h-3.5 text-[#086288]" />
                    <span>
                      {lang === "uz"
                        ? "2. Qabul kuni va bo'sh vaqt:"
                        : lang === "ru"
                        ? "2. День и свободное время:"
                        : "2. Select date & available time:"}
                    </span>
                  </span>
                  {loadingSlots && (
                    <span className="text-[10px] font-semibold text-slate-400 animate-pulse">
                      {lang === "uz" ? "Yuklanmoqda..." : lang === "ru" ? "Загрузка..." : "Loading..."}
                    </span>
                  )}
                </div>

                {/* Days row */}
                <div className="flex gap-1 sm:gap-1.5 overflow-x-auto pb-1 scroll-touch">
                  {availableDays.slice(0, 7).map((d) => {
                    const isSelectedDay = d.date === activeDayObj.date;
                    return (
                      <button
                        key={d.date}
                        type="button"
                        onClick={() => setSelectedDate(d.date)}
                        className={`px-2.5 sm:px-3 py-2 sm:py-1.5 min-h-[36px] rounded-xl text-[10px] sm:text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer touch-manipulation border shrink-0 ${
                          isSelectedDay
                            ? "bg-[#086288] text-white border-[#086288] shadow-2xs"
                            : "bg-white text-slate-700 border-slate-200 hover:border-blue-300"
                        }`}
                      >
                        {formatDateBadge(d.date, lang)}
                      </button>
                    );
                  })}
                </div>

                {/* Time slots grid */}
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-1 sm:gap-1.5">
                  {(activeDayObj.slots || FALLBACK_TIME_SLOTS).map((slot) => {
                    const isSelectedSlot = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-1 sm:px-2 min-h-[38px] rounded-lg text-[11px] sm:text-xs font-extrabold transition-all cursor-pointer touch-manipulation border ${
                          isSelectedSlot
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                            : "bg-white text-slate-700 border-slate-200 hover:border-emerald-400"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="qbm-name" className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1">
                    {lang === "uz" ? "Ismingiz *" : lang === "ru" ? "Ваше Имя *" : "Your Name *"}
                  </label>
                  <input
                    id="qbm-name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={
                      lang === "uz"
                        ? "Masalan: Sardorbek"
                        : lang === "ru"
                        ? "Например: Сардорбек"
                        : "e.g., Sardorbek"
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#086288] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="qbm-phone" className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1">
                    {lang === "uz" ? "Telefon Raqamingiz *" : lang === "ru" ? "Номер Телефона *" : "Phone Number *"}
                  </label>
                  <input
                    id="qbm-phone"
                    name="tel"
                    autoComplete="tel"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+998 (90) 123-45-67"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#086288] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-red-800">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#086288] via-[#1d4ed8] to-[#0284c7] hover:brightness-110 disabled:opacity-60 text-white font-black text-sm shadow-lg shadow-blue-900/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
              >
                <span>
                  {submitting
                    ? lang === "uz"
                      ? "Yuborilmoqda..."
                      : lang === "ru"
                      ? "Отправка..."
                      : "Sending..."
                    : lang === "uz"
                    ? "Qabulga Yozilishni Tasdiqlash"
                    : lang === "ru"
                    ? "Подтвердить Запись на Приём"
                    : "Confirm Appointment Booking"}
                </span>
                <span>→</span>
              </button>

              {/* Bottom Guarantee & Direct Call */}
              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                  <IconShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>
                    {lang === "uz"
                      ? "100% og'riqsiz va steril muolaja kafolati"
                      : lang === "ru"
                      ? "100% гарантия стерильности и безболезненности"
                      : "100% Sterile & Painless Clinical Guarantee"}
                  </span>
                </span>
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="inline-flex items-center gap-1 font-extrabold text-[#086288] hover:underline"
                >
                  <IconPhone className="w-3.5 h-3.5 text-[#086288]" />
                  <span>{DOCTOR_INFO.phone}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickBookingModal;
