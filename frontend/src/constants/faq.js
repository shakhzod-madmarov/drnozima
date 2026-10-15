/**
 * Single source of truth for FAQs.
 * Used by both UI (FaqAccordion.jsx) and Schema.org FAQPage structured data (Seo.jsx).
 * Optimized for Google rich snippets and AI search answer extraction.
 */
export const FAQ_ITEMS = [
  {
    q: {
      uz: "Andijonda ayol stomatolog qabuli bormi? (Ayollar va qizlar uchun qulaylik)",
      ru: "Ведёт ли приём врач-стоматолог женщина в Андижане?",
      en: "Is Dr. Nozima Baxtiyarovna a certified female dentist in Andijan?",
    },
    a: {
      uz: "Ha! Dr. Nozima Baxtiyarovna — 7 yillik amaliy klinik tajribaga ega malakali vrach-stomatolog ayol (terapevt va ortoped). Andijon shahrida ayollar, qizlar va butun oila a'zolari uchun qulay, mehrli, xushmuomala va 100% og'riqsiz muhitda professional stomatologik davolash xizmatlarini ko'rsatadi.",
      ru: "Да! Д-р Нозима Бахтияровна — квалифицированный врач-стоматолог женщина со стажем более 7 лет (терапевт и ортопед, выпускница АГМИ). Для женщин, девушек и всей семьи приём проходит в максимально деликатной, заботливой и на 100% безболезненной обстановке.",
      en: "Yes! Dr. Nozima Baxtiyarovna is a certified female dentist with 7 years of clinical experience in therapy and prosthodontics (ADTI graduate). She provides gentle, comfortable, and 100% painless care tailored for women, girls, and families in Andijan.",
    },
  },
  {
    q: {
      uz: "Sevdo Denta klinikasi qayerda joylashgan va qanday borish mumkin? (Aniq manzil)",
      ru: "Где именно находится клиника «Sevdo Denta» и как до неё добраться?",
      en: "What is the exact physical address of Sevdo Denta Clinic in Andijan?",
    },
    a: {
      uz: "Klinikamiz aniq manzili: Andijon shahri, A.Fitrat ko'chasi 251B-uy (Eski Shahar hududi, 1-qavat, «Sevdo Denta» klinikasi). Mo'ljal: Eski Shahar markazi. Saytimizdagi Yandex Xarita (https://yandex.uz/maps/-/CXBjjZ5d) yoki Google Xarita (https://maps.app.goo.gl/Ez79FP1W4oTHGGLn9) tugmasi orqali to'g'ridan-to'g'ri navigator yo'nalishini yoqishingiz mumkin.",
      ru: "Точный адрес клиники: г. Андижан, ул. А. Фитрата, 251Б (район Эски Шахар, 1-й этаж, клиника «Sevdo Denta»). Вы можете легко проложить прямой маршрут в Яндекс Картах (https://yandex.uz/maps/-/CXBjjZ5d) или Google Maps (https://maps.app.goo.gl/Ez79FP1W4oTHGGLn9).",
      en: "The exact address is 251B A. Fitrat Street, Andijan, Andijan region, Uzbekistan (Old City / Eski Shahar district, 1st Floor, «Sevdo Denta» Clinic). Turn-by-turn navigation is available directly via Google Maps (https://maps.app.goo.gl/Ez79FP1W4oTHGGLn9) and Yandex Maps (https://yandex.uz/maps/-/CXBjjZ5d).",
    },
  },
  {
    q: {
      uz: "Tish davolash va tish olish jarayoni rostdan ham 100% og'riqsiz bo'ladimi?",
      ru: "Действительно ли лечение и удаление зубов проходит абсолютно без боли?",
      en: "Are dental treatments and tooth extractions truly 100% painless?",
    },
    a: {
      uz: "Ha, 100% og'riqsiz! Biz ikki bosqichli zamonaviy anesteziya qo'llaymiz: avval milkka maxsus muzlatuvchi gel surtiladi (shuning uchun hatto igna sanchilishi ham sezilmaydi), so'ng Yevropa va Koreyaning eng xavfsiz anestetiklari yuboriladi.",
      ru: "Да, 100% без боли! Мы применяем двухэтапную анестезию: сначала десна замораживается специальным аппликационным гелем (вы даже не почувствуете укола), а затем мягко вводится сертифицированный анестетик.",
      en: "Yes, 100% painless! We use a two-step anesthesia protocol: first, a topical numbing gel is applied to the gum so you don't even feel the needle pinch, followed by gentle European or Korean local anesthesia.",
    },
  },
  {
    q: {
      uz: "Asboblar sterilligi va xavfsizligi qanday nazorat qilinadi?",
      ru: "Как обеспечивается стерильность инструментов и безопасность пациента?",
      en: "How do you guarantee instrument sterilization and patient safety?",
    },
    a: {
      uz: "Klinikamizda xalqaro Anti-SPID va Anti-Gepatit protokollari qat'iy amal qiladi. Barcha asboblar Yevropa B-klass avtoklavlarida to'liq zararsizlantiriladi. Har bir bemor uchun alohida muhrlangan (kraft-paketdagi) steril to'plam faqat sizning ko'z oldingizda ochiladi.",
      ru: "В клинике действует строгий международный протокол Анти-СПИД и Анти-Гепатит. Инструменты стерилизуются в автоклавах класса B, а индивидуальный крафт-пакет со стерильным набором вскрывается непосредственно в присутствии пациента.",
      en: "We enforce strict international Anti-HIV and Anti-Hepatitis sterilization protocols. Every instrument kit is autoclaved in European Class-B sterilizers and unsealed from its individual kraft pouch right in front of you.",
    },
  },
  {
    q: {
      uz: "Qo'yilgan plomba va tsirkoniy karonkalarga kafolat beriladimi?",
      ru: "Предоставляется ли гарантия на пломбы и коронки из циркония?",
      en: "Do you provide a warranty on fillings and zirconia crowns?",
    },
    a: {
      uz: "Albatta. Biz faqat Germaniya (3M Filtek), Yaponiya (Estelite) va Shveysariya hamda Janubiy Koreya original sertifikatlangan materiallaridan foydalanamiz. Barcha terapevtik plombalar, tsirkoniy karonkalar va vinirlarga rasmiy klinik kafolat beriladi.",
      ru: "Безусловно. Мы работаем только с оригинальными сертифицированными материалами из Германии (3M Filtek), Японии (Estelite) и Южной Кореи и предоставляем официальную клиническую гарантию на все виды работ.",
      en: "Absolutely. We use only genuine materials from Germany (3M Filtek), Japan (Tokuyama Estelite), and South Korea, backed by a formal clinical warranty on all restorations and crowns.",
    },
  },
  {
    q: {
      uz: "Dr. Nozima qabuliga qanday qilib navbatsiz yozilish mumkin?",
      ru: "Как записаться на приём к Д-ру Нозиме без ожидания в очереди?",
      en: "How can I book an appointment with Dr. Nozima without waiting in line?",
    },
    a: {
      uz: "Saytimizdagi «Qabulga Yozilish» tugmasi orqali qulay vaqtni tanlang, +998 (91) 619-95-00 raqamiga qo'ng'iroq qiling yoki Telegram (@Miss_Dentist_95) hamda Instagram (@sevdo_denta) orqali yozing — navbatsiz, o'zingizga ma'qul vaqtda qabul qilinadi.",
      ru: "Нажмите кнопку «Записаться» на сайте, позвоните по номеру +998 (91) 619-95-00 или напишите в Telegram (@Miss_Dentist_95) / Instagram (@sevdo_denta) — мы забронируем удобное для вас время с нулевым временем ожидания.",
      en: "Click 'Book Visit' on the website, call +998 (91) 619-95-00, or message us on Telegram (@Miss_Dentist_95) or Instagram (@sevdo_denta) to reserve your preferred time slot with zero wait time.",
    },
  },
];
