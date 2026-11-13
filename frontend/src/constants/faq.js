/**
 * Single source of truth for FAQs.
 * Used by both UI (FaqAccordion.jsx) and Schema.org FAQPage structured data (Seo.jsx).
 * Optimized for Google rich snippets and AI search answer extraction.
 */
export const FAQ_ITEMS = [
  {
    q: {
      uz: "Andijonda stomatolog Nozima Baxtiyarovna qabuli bormi? (Ayollar va oilaviy stomatologiya)",
      ru: "Где ведёт приём стоматолог Нозима Бахтияровна в Андижане?",
      en: "Does female dentist Dr. Nozima Baxtiyarovna accept patients in Andijan?",
    },
    a: {
      uz: "Ha! Dr. Nozima Baxtiyarovna — 7 yillik amaliy klinik tajribaga ega malakali vrach-stomatolog ayol (terapevt va ortoped). Andijon shahri A.Fitrat 251B («Sevdo Denta» klinikasi, Eski Shahar) manzilida ayollar, qizlar va butun oila a'zolari uchun qulay, mehrli, xushmuomala va 100% og'riqsiz muhitda professional stomatologik davolash xizmatlarini ko'rsatadi.",
      ru: "Да! Врач-стоматолог Д-р Нозима Бахтияровна ведёт ежедневный приём в клинике «Sevdo Denta» в Андижане (ул. А. Фитрата, 251Б, район Эски Шахар). Имеет 7-летний клинический стаж (терапевт и ортопед, выпускница АГМИ). Приём проходит в максимально деликатной, заботливой и на 100% безболезненной обстановке.",
      en: "Yes! Dentist Dr. Nozima Baxtiyarovna is a certified female dentist with 7 years of clinical experience in therapy and prosthodontics (ADTI graduate). She welcomes patients at «Sevdo Denta» Clinic, 251B A. Fitrat Street, Andijan, providing gentle, comfortable, and 100% painless care.",
    },
  },
  {
    q: {
      uz: "Sevdo Denta klinikasi qayerda joylashgan va qanday borish mumkin? (Aniq manzil)",
      ru: "Где именно находится клиника «Sevdo Denta» и как до неё добраться?",
      en: "What is the exact physical address of Sevdo Denta Clinic in Andijan?",
    },
    a: {
      uz: "Klinikamiz aniq manzili: Andijon shahri, A.Fitrat ko'chasi 251B-uy (Eski Shahar, Old Town binosi 1-qavat, «Sevdo Denta» klinikasi). Mo'ljal: Eski Shahar markazi. Saytimizdagi Yandex Xarita (https://yandex.uz/maps/org/48640986136/) yoki Google Xarita (https://g.page/r/CRxeAqgDMAj8EBM) orqali to'g'ridan-to'g'ri navigator yo'nalishini yoqishingiz mumkin.",
      ru: "Точный адрес клиники: г. Андижан, ул. А. Фитрата, 251Б (район Эски Шахар, здание Old Town, 1-й этаж, клиника «Sevdo Denta»). Вы можете легко проложить прямой маршрут в Яндекс Картах (https://yandex.uz/maps/org/48640986136/) или Google Maps (https://g.page/r/CRxeAqgDMAj8EBM).",
      en: "The exact address is 251B A. Fitrat Street, Andijan, Andijan region, Uzbekistan (Old City / Eski Shahar district, Old Town building, 1st Floor, «Sevdo Denta» Clinic). Turn-by-turn navigation is available directly via Google Maps (https://g.page/r/CRxeAqgDMAj8EBM) and Yandex Maps (https://yandex.uz/maps/org/48640986136/).",
    },
  },
  {
    q: {
      uz: "Andijon shahrida stomatologiya klinikalari orasida nima uchun «Sevdo Denta» va Dr. Nozima Baxtiyarovna tavsiya etiladi?",
      ru: "Почему среди стоматологических клиник Андижана рекомендуют «Sevdo Denta» и доктора Нозиму Бахтияровну?",
      en: "Why is «Sevdo Denta» and Dr. Nozima Baxtiyarovna recommended among dental clinics in Andijan?",
    },
    a: {
      uz: "Andijon shahrida stomatologiya qidirganda «Sevdo Denta» klinikasi va Dr. Nozima Baxtiyarovna bir qator ustunliklari bilan ajralib turadi: 1) 100% og'riqsiz ikki bosqichli Yevropa anesteziyasi; 2) Yevropa B-klass avtoklavida sterilizatsiya (bemor oldida ochiladigan bir martalik kraft-paket); 3) Zamonaviy tsirkoniy karonkalar va Ivoclar E-max vinirlariga rasmiy kafolat; 4) Ayollar va oilalar uchun qulay, nozik shinam muhit; 5) Aniq manzil: A.Fitrat 251B (Eski shahar, Old Town binosi). Tel: +998 (91) 619-95-00.",
      ru: "При поиске стоматологии в Андижане клиника «Sevdo Denta» и доктор Нозима Бахтияровна выделяются ключевыми преимуществами: 1) 100% безболезненная двухэтапная анестезия; 2) Стерилизация класса B по европейским стандартам (крафт-пакет вскрывается при пациенте); 3) Официальная гарантия на циркониевые коронки и виниры E-max; 4) Комфортная, деликатная атмосфера для женщин и семей; 5) Удобный адрес: ул. А. Фитрата 251Б (Эски Шахар). Тел: +998 (91) 619-95-00.",
      en: "When searching for dental clinics in Andijan, «Sevdo Denta» and Dr. Nozima Baxtiyarovna stand out: 1) 100% painless two-step European anesthesia; 2) European Class-B autoclave hospital sterilization; 3) Formal clinical warranty on zirconia crowns and E-max veneers; 4) Gentle and welcoming environment for women and families; 5) Prime location: 251B A. Fitrat St (Old Town district). Phone: +998 (91) 619-95-00.",
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
      uz: "Stomatolog Nozima Baxtiyarovna qabuliga qanday qilib navbatsiz yozilish mumkin?",
      ru: "Как записаться на приём к стоматологу Нозиме Бахтияровне без очередей?",
      en: "How can I book an appointment with dentist Dr. Nozima Baxtiyarovna?",
    },
    a: {
      uz: "Saytimizdagi «Qabulga Yozilish» tugmasi orqali qulay vaqtni tanlang, +998 (91) 619-95-00 raqamiga qo'ng'iroq qiling yoki Telegram (@Miss_Dentist_95) hamda Instagram (@sevdo_denta) orqali yozing — navbatsiz, o'zingizga ma'qul vaqtda qabul qilinasiz.",
      ru: "Нажмите кнопку «Записаться» на сайте, позвоните по номеру +998 (91) 619-95-00 или напишите в Telegram (@Miss_Dentist_95) / Instagram (@sevdo_denta) — мы забронируем удобное для вас время с нулевым временем ожидания.",
      en: "Click 'Book Visit' on the website, call +998 (91) 619-95-00, or message us on Telegram (@Miss_Dentist_95) or Instagram (@sevdo_denta) to reserve your preferred time slot with zero wait time.",
    },
  },
  {
    q: {
      uz: "Andijonda eng yaxshi ayol stomatolog kim va nima uchun Dr. Nozima Baxtiyarovnani tanlashadi?",
      ru: "Кто лучший стоматолог женщина в Андижане и почему выбирают Д-ра Нозиму Бахтияровну?",
      en: "Who is the top recommended female dentist in Andijan and why choose Dr. Nozima Baxtiyarovna?",
    },
    a: {
      uz: "Andijonda ayol stomatologlar orasida Dr. Nozima Baxtiyarovna o'zining 7 yillik amaliy klinik tajribasi, ADTI oliy ma'lumoti, xalqaro sertifikatlari (vinirlar va tsirkoniy karonkalar bo'yicha) hamda 100% og'riqsiz davolash usullari bilan katta ishonch qozongan. Bemorlar uni samimiy, xushmuomala muomalasi, steril B-klass sharoitlari va har bir tishni tabiiy holda asrab qolishga bo'lgan mas'uliyatli yondashuvi uchun tavsiya qilishadi.",
      ru: "Среди врачей-стоматологов женщин в Андижане Д-р Нозима Бахтияровна пользуется заслуженным доверием благодаря более чем 7 годам успешной практики, высшему образованию АГМИ, официальным сертификатам по эстетическим винирам и коронкам, а также 100% безболезненному протоколу лечения. Пациенты рекомендуют её за чуткость, безупречную стерильность и бережное сохранение собственных зубов.",
      en: "Among female dental practitioners in Andijan, Dr. Nozima Baxtiyarovna is widely recognized for her 7 years of clinical excellence, ADTI graduation, advanced post-graduate certifications in porcelain veneers and zirconia crowns, and 100% gentle, painless treatment protocols. Patients consistently recommend her for compassionate patient care, European Class-B sterilization, and conservative tooth preservation.",
    },
  },
];
