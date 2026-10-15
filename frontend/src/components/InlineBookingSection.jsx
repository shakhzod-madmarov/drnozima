import { useState, useEffect, useCallback, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";
import {
  IconClock,
  IconCheckCircle,
  IconPhone,
  IconTelegram,
  IconLocationPin as IconMapPin,
} from "./MedicalIcons";
import { DOCTOR_INFO } from "../constants/doctor";
import {
  fetchDentistAvailability,
  submitDentistBooking,
  buildWorkingHoursSchedule,
} from "../lib/medinsonBooking";
import {
  formatUzPhone,
  PHONE_PLACEHOLDER,
  isUzPhoneComplete,
  handleUzPhonePaste,
} from "../utils/phone";
import { CLASSIC_SERVICES } from "../constants/bookingServices";

/* ── Helpers ─────────────────────────────────────────────────────────── */

const pad2 = (n) => String(n).padStart(2, "0");

const WEEKDAY_SHORT = {
  uz: ["Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh"],
  ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

const todayYmd = () => {
  const d = new Date();
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
};

const parseYmd = (s) => {
  const [y, m, d] = String(s || "").split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
};

const formatDayPill = (ymd, lang) => {
  const date = parseYmd(ymd);
  if (!date) return ymd;
  const wds = WEEKDAY_SHORT[lang] || WEEKDAY_SHORT.uz;
  return `${wds[date.getDay()]} ${pad2(date.getDate())}.${pad2(date.getMonth() + 1)}`;
};

const formatDmy = (ymd) => {
  const [y, m, d] = String(ymd || "").split("-");
  if (!y || !m || !d) return ymd;
  return `${d}.${m}.${y}`;
};

const TEXT = {
  uz: {
    kicker: "Onlayn qabul · MedInson Stomatolog",
    heading: "Uchrashuv vaqtini tanlang",
    sub: "Bo'sh kun va soatni tanlab, Dr. Nozima Baxtiyarovna («Sevdo Denta» klinikasi) qabuliga navbatsiz yoziling.",
    defaultDaysLabel: "Dushanba - Shanba",
    lunchLabel: "Tushlik 12:00–13:00",
    serviceLabel: "Xizmat yo'nalishi",
    dayGroupLabel: "1-qadam: Qabul kunini tanlang",
    timeGroupLabel: "2-qadam: Bo'sh vaqtni tanlang",
    selectedSlotLabel: "Tanlangan vaqt:",
    nameLabel: "Ism-sharif *",
    phoneLabel: "Telefon raqami *",
    dobLabel: "Tug'ilgan sana",
    optional: "ixtiyoriy",
    dobHint: "Klinikadagi tibbiy kartangizni aniq topishga yordam beradi",
    noteLabel: "Shikoyat yoki tanlangan xizmat",
    namePlaceholder: "Masalan: Sardorbek Karimov",
    phonePlaceholder: "+998 94 001 01 56",
    notePlaceholder: "Tish og'rig'i, karonka, implant yoki ko'rik bo'yicha izoh...",
    submit: "Tasdiqlash va Qabulga Yozilish",
    submitting: "Yuborilmoqda...",
    needName: "Iltimos, ism-sharifingiz va telefon raqamingizni kiriting",
    needTime: "Iltimos, sana va vaqtni tanlang",
    invalidPhone: "Iltimos, to'liq telefon raqamini kiriting (kamida 9 ta raqam)",
    taken: "Bu vaqt hozirgina band qilindi. Iltimos, boshqa bo'sh soatni tanlang.",
    tooMany: "So'rovlar juda ko'p. Biroz kutib qayta urinib ko'ring.",
    failed: "So'rovni yuborib bo'lmadi. Iltimos, telefon orqali bog'laning.",
    orCall: "Klinika telefoni:",
    successBadge: "Qabul so'rovi tasdiqlandi",
    successTitle: "Navbatingiz muvaffaqiyatli ro'yxatga olindi",
    successBody:
      "So'rovingiz Dr. Nozima Baxtiyarovnaning «Sevdo Denta» MedInson tizimiga yetkazildi.",
    summaryPatient: "Bemor",
    summaryPhone: "Telefon",
    summaryService: "Xizmat",
    summaryWhen: "Sana va soat",
    botTitle: "📲 1-Bosishda Telegram Eslatmani Yoqing",
    botDesc:
      "Qabul vaqti yaqinlashganda Telegram orqali avtomatik eslatma olish uchun quyidagi tugmani bosing yoki QR-kodni skanerlab START tugmasini bosing.",
    botBtn: "Telegram Eslatmani Faollashtirish ↗",
    newBooking: "Yangi vaqt tanlash",
  },
  ru: {
    kicker: "Онлайн запись · MedInson Stomatolog",
    heading: "Выберите время приёма",
    sub: "Выберите свободный день и время для записи к Д-ру Нозиме Бахтияровне (клиника «Sevdo Denta»).",
    defaultDaysLabel: "Понедельник - Суббота",
    lunchLabel: "Обед 12:00–13:00",
    serviceLabel: "Направление лечения",
    dayGroupLabel: "Шаг 1: Выберите дату приёма",
    timeGroupLabel: "Шаг 2: Выберите свободное время",
    selectedSlotLabel: "Выбранное время:",
    nameLabel: "Ф.И.О. пациента *",
    phoneLabel: "Номер телефона *",
    dobLabel: "Дата рождения",
    optional: "необязательно",
    dobHint: "Помогает точно идентифицировать вашу медицинскую карту",
    noteLabel: "Жалоба или выбранная услуга",
    namePlaceholder: "Например: Сардорбек Каримов",
    phonePlaceholder: "+998 94 001 01 56",
    notePlaceholder: "Зубная боль, коронка, имплантация или плановый осмотр...",
    submit: "Подтвердить Запись на Приём",
    submitting: "Отправка...",
    needName: "Пожалуйста, укажите имя и номер телефона",
    needTime: "Пожалуйста, выберите дату и время",
    invalidPhone: "Введите корректный номер телефона (минимум 9 цифр)",
    taken: "Это время только что заняли. Пожалуйста, выберите другой час.",
    tooMany: "Слишком много попыток. Попробуйте чуть позже.",
    failed: "Не удалось отправить запрос. Пожалуйста, позвоните нам.",
    orCall: "Телефон клиники:",
    successBadge: "Заявка отправлена",
    successTitle: "Ваша запись принята в MedInson",
    successBody:
      "Ваш запрос передан в календарь Д-ра Нозимы Бахтияровны (клиника «Sevdo Denta»).",
    summaryPatient: "Пациент",
    summaryPhone: "Телефон",
    summaryService: "Услуга",
    summaryWhen: "Дата и время",
    botTitle: "📲 Включите напоминания в Telegram в 1 клик",
    botDesc:
      "Нажмите кнопку ниже или отсканируйте QR-код и запустите бота (START), чтобы автоматически получать напоминания о приёме.",
    botBtn: "Подключить Telegram-напоминания ↗",
    newBooking: "Выбрать другое время",
  },
  en: {
    kicker: "Online Booking · MedInson Stomatolog",
    heading: "Select an Appointment Time",
    sub: "Choose an available date and time slot with Dr. Nozima Baxtiyarovna at «Sevdo Denta» Clinic.",
    defaultDaysLabel: "Monday - Saturday",
    lunchLabel: "Lunch 12:00–13:00",
    serviceLabel: "Dental Service",
    dayGroupLabel: "Step 1: Choose Date",
    timeGroupLabel: "Step 2: Choose Free Time",
    selectedSlotLabel: "Selected slot:",
    nameLabel: "Full Name *",
    phoneLabel: "Phone Number *",
    dobLabel: "Date of Birth",
    optional: "optional",
    dobHint: "Helps match your clinical patient record accurately",
    noteLabel: "Symptom or Selected Service",
    namePlaceholder: "e.g. Sardorbek Karimov",
    phonePlaceholder: "+998 94 001 01 56",
    notePlaceholder: "Toothache, zirconia crown, implant consultation...",
    submit: "Confirm Appointment Booking",
    submitting: "Submitting...",
    needName: "Please enter your name and phone number",
    needTime: "Please select a date and time",
    invalidPhone: "Please enter a valid phone number (at least 9 digits)",
    taken: "That slot was just taken. Please select another available time.",
    tooMany: "Too many attempts. Please wait a moment.",
    failed: "Could not send request. Please call us directly.",
    orCall: "Clinic phone:",
    successBadge: "Booking Confirmed",
    successTitle: "Your Appointment Request is Registered",
    successBody:
      "Your request has been delivered to Dr. Nozima Baxtiyarovna's MedInson calendar at «Sevdo Denta».",
    summaryPatient: "Patient",
    summaryPhone: "Phone",
    summaryService: "Service",
    summaryWhen: "Date & Time",
    botTitle: "📲 Activate 1-Click Telegram Reminders",
    botDesc:
      "Tap the button below or scan the QR code and press START in Telegram to receive automatic appointment reminders.",
    botBtn: "Activate Telegram Reminders ↗",
    newBooking: "Book another time",
  },
};

const InlineBookingSection = ({
  initialService = null,
  initialName = "",
  initialPhone = "",
  initialNote = "",
  sectionId = "booking",
  compact = false,
  onWorkingHoursLoaded = null,
}) => {
  const { lang } = useLanguage();
  const t = TEXT[lang] || TEXT.uz;

  const initialSchedule = useMemo(() => buildWorkingHoursSchedule({}, 10), []);

  const [days, setDays] = useState(initialSchedule);
  const [liveMeta, setLiveMeta] = useState(null);
  const [selectedDate, setSelectedDate] = useState(initialSchedule[0]?.date || "");
  const [selectedTime, setSelectedTime] = useState(initialSchedule[0]?.times?.[0] || "");

  const [service, setService] = useState(() => {
    if (initialService && CLASSIC_SERVICES.some((s) => s.id === initialService)) {
      return initialService;
    }
    if (typeof window !== "undefined") {
      try {
        const qService = new URLSearchParams(window.location.search).get("service");
        if (qService && CLASSIC_SERVICES.some((s) => s.id === qService)) {
          return qService;
        }
      } catch {
        /* ignore */
      }
    }
    return CLASSIC_SERVICES[0].id;
  });
  const [name, setName] = useState(initialName || "");
  const [phone, setPhone] = useState(initialPhone ? formatUzPhone(initialPhone) : "");
  const [dob, setDob] = useState("");
  const [note, setNote] = useState(() => {
    if (initialNote) return initialNote;
    if (typeof window !== "undefined") {
      try {
        const qNote = new URLSearchParams(window.location.search).get("note");
        if (qNote) return qNote;
      } catch {
        /* ignore */
      }
    }
    return "";
  });
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [botLink, setBotLink] = useState("");
  const [botQr, setBotQr] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPrefill = (e) => {
      const detail = e?.detail || {};
      if (detail.service && CLASSIC_SERVICES.some((s) => s.id === detail.service)) {
        setService(detail.service);
      }
      if (detail.name) setName(detail.name);
      if (detail.phone) setPhone(formatUzPhone(detail.phone));
      if (detail.note) setNote(detail.note);
    };
    window.addEventListener("medinson-prefill-booking", onPrefill);
    return () => window.removeEventListener("medinson-prefill-booking", onPrefill);
  }, []);

  const loadAvailability = useCallback(() => {
    fetchDentistAvailability()
      .then((data) => {
        setLiveMeta({
          clinic: data?.clinic || null,
          dentist: data?.dentist || null,
          botUsername: data?.botUsername || data?.dentist?.botUsername || null,
        });
        if (onWorkingHoursLoaded && data?.dentist?.workingHours) {
          onWorkingHoursLoaded(data.dentist.workingHours);
        }
        const fetchedDays =
          Array.isArray(data?.days) && data.days.length > 0
            ? data.days
            : buildWorkingHoursSchedule(data, 10);

        setDays(fetchedDays);
        setSelectedDate((cur) => {
          const match = fetchedDays.find((d) => d.date === cur) || fetchedDays[0];
          const nextDate = match ? match.date : "";
          if (match) {
            setSelectedTime((curTime) =>
              match.times.includes(curTime) ? curTime : match.times[0] || "",
            );
          }
          return nextDate;
        });
      })
      .catch(() => {
        /* Keep initial schedule */
      });
  }, [onWorkingHoursLoaded]);

  useEffect(() => {
    loadAvailability();
  }, [loadAvailability]);

  const activeDay = useMemo(
    () => days.find((d) => d.date === selectedDate) || days[0] || null,
    [days, selectedDate],
  );

  const serviceObj = CLASSIC_SERVICES.find((s) => s.id === service) || CLASSIC_SERVICES[0];
  const serviceLabel = serviceObj[lang] || serviceObj.uz;

  const clinicName =
    liveMeta?.clinic?.name || liveMeta?.dentist?.clinicName || DOCTOR_INFO.clinicName;
  const clinicAddress =
    liveMeta?.clinic?.address ||
    liveMeta?.dentist?.address ||
    "Andijon sh., Eski Shahar (Old City), 1-qavat";

  const dynamicWorkingHours = useMemo(() => {
    const start = liveMeta?.dentist?.workingHours?.start || "08:00";
    const end = liveMeta?.dentist?.workingHours?.end || "18:00";
    return `${start} - ${end}, ${t.defaultDaysLabel}`;
  }, [liveMeta, t.defaultDaysLabel]);

  const handlePhoneChange = (e) => {
    const formatted = formatUzPhone(e.target.value, phone);
    setPhone(formatted);
    if (errors.phone && isUzPhoneComplete(formatted)) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handlePhoneBlur = () => {
    if (phone.trim() && !isUzPhoneComplete(phone)) {
      setErrors((prev) => ({
        ...prev,
        phone:
          lang === "uz"
            ? "Telefon formati noto‘g‘ri. Masalan: +998 (94) 001-01-56"
            : lang === "ru"
            ? "Неверный формат. Например: +998 (94) 001-01-56"
            : "Invalid format. Example: +998 (94) 001-01-56",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = t.needName;
    }
    if (!phone.trim() || !isUzPhoneComplete(phone)) {
      nextErrors.phone =
        lang === "uz"
          ? "Telefon formati noto‘g‘ri. Masalan: +998 (94) 001-01-56"
          : lang === "ru"
          ? "Неверный формат. Например: +998 (94) 001-01-56"
          : "Invalid format. Example: +998 (94) 001-01-56";
    }
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast.error(nextErrors.name || nextErrors.phone);
      return;
    }
    if (!selectedDate || !selectedTime) {
      toast.error(t.needTime);
      return;
    }

    setIsSubmitting(true);
    try {
      const combinedNote = note.trim()
        ? `${serviceLabel} — ${note.trim()}`
        : serviceLabel;

      const result = await submitDentistBooking({
        date: selectedDate,
        time: selectedTime,
        name: name.trim(),
        phone: phone.trim(),
        dob: dob.trim(),
        note: combinedNote,
      });

      const activeTelegramUrl =
        result.telegramUrl || DOCTOR_INFO.telegramUrl;

      if (activeTelegramUrl) {
        setBotLink(activeTelegramUrl);
        import("qrcode")
          .then((mod) =>
            (mod.default || mod).toDataURL(activeTelegramUrl, {
              margin: 2,
              width: 180,
              color: {
                dark: "#086288",
                light: "#ffffff",
              },
            }),
          )
          .then(setBotQr)
          .catch(() => setBotQr(""));
      }

      setIsSuccess(true);
      loadAvailability();
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#086288", "#4D8DBA", "#97D7FF"],
      });
    } catch (err) {
      if (err?.status === 409) {
        toast.error(t.taken);
        setSelectedTime("");
        loadAvailability();
      } else if (err?.status === 429) {
        toast.error(t.tooMany);
      } else {
        toast.error(t.failed);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setBotLink("");
    setBotQr("");
    setName("");
    setPhone("");
    setDob("");
    setNote("");
    setErrors({});
  };

  return (
    <section
      id={sectionId}
      aria-labelledby={`${sectionId}-title`}
      className="scroll-mt-24 bg-white rounded-2xl sm:rounded-3xl border border-[#D1E4F0] shadow-sm p-4 sm:p-8 lg:p-10"
    >
      {/* ── Classic Professional Header ──────────────────────────────── */}
      <div className="border-b border-[#D1E4F0] pb-4 sm:pb-5 mb-5 sm:mb-6 text-left sm:text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4D8DBA] mb-1.5">
          {t.kicker}
        </p>
        <h2
          id={`${sectionId}-title`}
          className="font-serif-classic text-2xl sm:text-3xl md:text-4xl font-bold text-[#086288]"
        >
          {t.heading}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-xl sm:mx-auto">
          {t.sub}
        </p>

        {/* Live Clinic Metadata Line */}
        <div className="mt-3.5 flex flex-wrap items-center sm:justify-center gap-x-4 gap-y-1.5 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#086288]">
            <span className="w-2 h-2 rounded-full bg-[#4D8DBA]" />
            <span>{clinicName}</span>
          </span>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-1.5 text-slate-700">
            <IconClock className="w-3.5 h-3.5 text-[#4D8DBA] shrink-0" />
            <span>
              {dynamicWorkingHours} ({t.lunchLabel})
            </span>
          </span>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-1 text-slate-600">
            <IconMapPin className="w-3.5 h-3.5 text-[#4D8DBA] shrink-0" />
            <span>{clinicAddress}</span>
          </span>
        </div>
      </div>

      {isSuccess ? (
        /* ══════════ STEP 5: CONFIRMATION + 1-CLICK TELEGRAM REMINDER ══════════ */
        <div className="max-w-lg mx-auto py-4 text-center space-y-4 sm:space-y-5">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F4F8FB] border border-[#D1E4F0] flex items-center justify-center mx-auto">
            <IconCheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#086288]" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#4D8DBA] mb-1">
              {t.successBadge}
            </p>
            <h3 className="font-serif-classic text-xl sm:text-2xl md:text-3xl font-bold text-[#086288]">
              {t.successTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              {t.successBody}
            </p>
          </div>

          <dl className="bg-[#f7f9fc] border border-[#D1E4F0] rounded-xl p-3.5 sm:p-4 text-left text-xs space-y-2.5 text-slate-700">
            <div className="flex justify-between border-b border-[#D1E4F0] pb-2">
              <dt className="text-slate-500">{t.summaryPatient}:</dt>
              <dd className="font-bold text-[#086288]">{name}</dd>
            </div>
            <div className="flex justify-between border-b border-[#D1E4F0] pb-2">
              <dt className="text-slate-500">{t.summaryPhone}:</dt>
              <dd className="font-bold text-[#086288]">{phone}</dd>
            </div>
            <div className="flex justify-between border-b border-[#D1E4F0] pb-2">
              <dt className="text-slate-500">{t.summaryService}:</dt>
              <dd className="font-semibold text-slate-900">{serviceLabel}</dd>
            </div>
            <div className="flex justify-between pt-0.5">
              <dt className="text-slate-500">{t.summaryWhen}:</dt>
              <dd className="font-bold text-[#4D8DBA]">
                {formatDmy(selectedDate)} · {selectedTime}
              </dd>
            </div>
          </dl>

          {botLink && (
            <div className="rounded-xl border border-[#D1E4F0] bg-[#F4F8FB] p-4 sm:p-5 space-y-3 text-left">
              <p className="text-xs sm:text-sm font-bold text-[#086288]">{t.botTitle}</p>
              {botQr && (
                <img
                  src={botQr}
                  alt={t.botTitle}
                  width={160}
                  height={160}
                  className="mx-auto rounded-xl bg-white p-2 border border-[#D1E4F0] block"
                />
              )}
              <p className="text-xs text-slate-600 leading-relaxed">{t.botDesc}</p>
              <a
                href={botLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[46px] bg-[#086288] hover:bg-[#4D8DBA] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <IconTelegram className="w-4 h-4 text-white" />
                <span>{t.botBtn}</span>
              </a>
            </div>
          )}

          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-2.5 rounded-xl bg-[#F4F8FB] hover:bg-[#E6F1F7] text-[#086288] border border-[#D1E4F0] font-semibold text-xs transition-colors cursor-pointer"
          >
            {t.newBooking}
          </button>
        </div>
      ) : (
        /* ══════════ STEPS 1–4: DATE, TIME, PATIENT INFO & E2EE SUBMIT ══════════ */
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
          {/* Step 1: Date Picker */}
          <div>
            <p className="text-xs font-bold text-[#086288] mb-2 sm:mb-2.5 text-left sm:text-center">
              {t.dayGroupLabel}
            </p>
            <div
              className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 justify-start sm:justify-center snap-x snap-mandatory scroll-touch"
              role="group"
              aria-label={t.dayGroupLabel}
            >
              {days.map((day) => {
                const isActive = day.date === selectedDate;
                return (
                  <button
                    key={day.date}
                    type="button"
                    onClick={() => {
                      setSelectedDate(day.date);
                      setSelectedTime((curTime) =>
                        day.times.includes(curTime) ? curTime : day.times[0] || "",
                      );
                    }}
                    aria-pressed={isActive}
                    className={`shrink-0 snap-start px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-colors cursor-pointer touch-manipulation ${
                      isActive
                        ? "bg-[#086288] text-white border-[#086288]"
                        : "bg-[#f7f9fc] text-slate-700 border-[#D1E4F0] hover:bg-[#eef3f8] hover:border-[#4D8DBA]"
                    }`}
                  >
                    {formatDayPill(day.date, lang)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Free Time Slots */}
          <div>
            <p className="text-xs font-bold text-[#086288] mb-2 sm:mb-2.5 text-left sm:text-center">
              {t.timeGroupLabel}
            </p>
            {activeDay && activeDay.times.length > 0 && (
              <div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-2.5"
                role="group"
                aria-label={t.timeGroupLabel}
              >
                {activeDay.times.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      aria-pressed={isSelected}
                      className={`py-2.5 sm:py-3 min-h-[42px] rounded-xl border text-xs sm:text-sm font-semibold transition-colors cursor-pointer touch-manipulation ${
                        isSelected
                          ? "bg-[#4D8DBA] text-white border-[#4D8DBA]"
                          : "bg-white text-[#086288] border-[#D1E4F0] hover:bg-[#F4F8FB] hover:border-[#4D8DBA]"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Service Selection Pills */}
          <div className="pt-3 border-t border-[#D1E4F0]">
            <p className="text-xs font-bold text-[#086288] mb-2.5">
              {t.serviceLabel}
            </p>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
              role="group"
              aria-label={t.serviceLabel}
            >
              {CLASSIC_SERVICES.map((item) => {
                const isSelected = service === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setService(item.id)}
                    aria-pressed={isSelected}
                    className={`px-3.5 py-2.5 rounded-xl border text-xs font-semibold text-left transition-colors cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-[#086288] text-white border-[#086288]"
                        : "bg-[#f7f9fc] text-slate-700 border-[#D1E4F0] hover:bg-[#eef3f8]"
                    }`}
                  >
                    <span>{item[lang] || item.uz}</span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#97D7FF] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Patient Information Form */}
          <div className="pt-3 border-t border-[#D1E4F0] grid grid-cols-1 sm:grid-cols-2 gap-4 text-left items-start">
            <div>
              <label
                htmlFor={`${sectionId}-name`}
                className="block text-xs font-bold text-[#086288] mb-1.5"
              >
                {t.nameLabel}
              </label>
              <input
                id={`${sectionId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                placeholder={t.namePlaceholder}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name && e.target.value.trim().length >= 2) {
                    setErrors((prev) => ({ ...prev, name: "" }));
                  }
                }}
                required
                className={`w-full h-[48px] px-4 rounded-xl border text-sm text-slate-800 placeholder:text-slate-400 bg-[#f7f9fc] focus:bg-white outline-none transition ${
                  errors.name
                    ? "border-red-500 ring-2 ring-red-500/10"
                    : "border-[#D1E4F0] focus:border-[#086288]"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600 font-semibold">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor={`${sectionId}-phone`}
                className="block text-xs font-bold text-[#086288] mb-1.5"
              >
                {t.phoneLabel}
              </label>
              <input
                id={`${sectionId}-phone`}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                maxLength={19}
                placeholder={PHONE_PLACEHOLDER}
                value={phone}
                onChange={handlePhoneChange}
                onBlur={handlePhoneBlur}
                onPaste={(e) => handleUzPhonePaste(e, setPhone)}
                required
                className={`w-full h-[48px] px-4 rounded-xl border text-sm font-medium tracking-wide text-slate-800 placeholder:text-slate-400 bg-[#f7f9fc] focus:bg-white outline-none transition ${
                  errors.phone
                    ? "border-red-500 ring-2 ring-red-500/10"
                    : "border-[#D1E4F0] focus:border-[#086288]"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 font-semibold">{errors.phone}</p>
              )}
            </div>

            {!compact && (
              <div>
                <label
                  htmlFor={`${sectionId}-dob`}
                  className="block text-xs font-bold text-[#086288] mb-1.5"
                >
                  {t.dobLabel}{" "}
                  <span className="font-normal text-slate-400">({t.optional})</span>
                </label>
                <input
                  id={`${sectionId}-dob`}
                  name="bday"
                  type="date"
                  autoComplete="bday"
                  max={todayYmd()}
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full h-[48px] px-4 rounded-xl border border-[#D1E4F0] focus:border-[#086288] outline-none text-sm text-slate-800 bg-[#f7f9fc] focus:bg-white transition"
                />
                <p className="mt-1 text-[11px] text-slate-500">{t.dobHint}</p>
              </div>
            )}

            <div className={compact ? "sm:col-span-2" : ""}>
              <label
                htmlFor={`${sectionId}-note`}
                className="block text-xs font-bold text-[#086288] mb-1.5"
              >
                {t.noteLabel}{" "}
                <span className="font-normal text-slate-400">({t.optional})</span>
              </label>
              <input
                id={`${sectionId}-note`}
                name="note"
                type="text"
                maxLength={500}
                placeholder={t.notePlaceholder}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full h-[48px] px-4 rounded-xl border border-[#D1E4F0] focus:border-[#086288] outline-none text-sm text-slate-800 placeholder:text-slate-400 bg-[#f7f9fc] focus:bg-white transition"
              />
            </div>
          </div>

          {/* Step 4: Selected Slot Summary & E2EE Submit CTA */}
          <div className="pt-4 border-t border-[#D1E4F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-left space-y-1">
              <p className="text-xs text-slate-600">
                {t.selectedSlotLabel}{" "}
                <strong className="text-[#086288] font-bold text-sm">
                  {formatDmy(selectedDate)} / {selectedTime}
                </strong>{" "}
                <span className="text-slate-300">·</span>{" "}
                <span className="text-[#4D8DBA] font-semibold">{serviceLabel}</span>
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#086288] transition-colors font-medium"
                >
                  <IconPhone className="w-3.5 h-3.5 text-[#4D8DBA]" />
                  <span>
                    {t.orCall} {DOCTOR_INFO.phone}
                  </span>
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-xl bg-[#086288] hover:bg-[#4D8DBA] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  <span>{t.submitting}</span>
                </>
              ) : (
                <>
                  <IconClock className="w-4 h-4 text-white" />
                  <span>{t.submit}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default InlineBookingSection;
