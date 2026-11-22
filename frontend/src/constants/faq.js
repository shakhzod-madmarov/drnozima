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
  {
    q: {
      uz: "Andijonda stomatologik xizmatlar narxi qanday va konsultatsiya qanday o'tadi? (Shaffof narxlar va to'lov turlari)",
      ru: "Каковы цены на стоматологические услуги в Андижане и как формируется стоимость лечения в Sevdo Denta?",
      en: "What are the dental treatment prices and payment methods at Sevdo Denta Clinic in Andijan?",
    },
    a: {
      uz: "Konsultatsiya va ko'rik jarayonida Dr. Nozima Baxtiyarovna tish holatini viziografiya yordamida aniqlab, har bir bemorga individual va shaffof davolash rejasini tuzib beradi. Yashirin xarajatlarsiz: karies davolash va Germaniya (3M Filtek) hamda Yaponiya (Estelite) fotopolimer plombalari, monolit tsirkoniy karonkalar, E-max vinirlar va AirFlow tozalash xizmatlari shahar bo'yicha eng maqbul va adolatli narxlarda ko'rsatiladi. To'lovlar naqd pul, Uzcard, Humo, Visa, Mastercard, shuningdek Payme va Click orqali qabul qilinadi.",
      ru: "На первичном приёме Д-р Нозима Бахтияровна проводит детальный осмотр (при необходимости с цифровой радиовизиографией) и составляет прозрачный план лечения без скрытых наценок. Лечение кариеса оригинальными пломбами 3M Filtek (Германия) и Estelite (Япония), циркониевые коронки CAD/CAM, виниры E-max и чистка AirFlow предоставляются по доступным и обоснованным ценам. Принимаются все формы оплаты: наличные, Uzcard, Humo, Visa, Mastercard, Payme и Click.",
      en: "During your initial consultation, Dr. Nozima Baxtiyarovna conducts a comprehensive evaluation (including low-dose digital radiovisiography if needed) and creates a completely transparent, itemized treatment plan with no hidden fees. We provide premium restorations with genuine German 3M Filtek and Japanese Tokuyama Estelite composites, CAD/CAM monolithic zirconia crowns, Swiss E-max porcelain veneers, and AirFlow prophylaxis at fair and competitive rates. Payments accepted: Cash, Uzcard, Humo, Visa, Mastercard, Payme, and Click.",
    },
  },
  {
    q: {
      uz: "«Sevdo Denta» klinikasi asoschisi va bosh shifokori kim? (Klinika egasi va shifokorlari)",
      ru: "Кто является основателем и главным врачом клиники «Sevdo Denta» в Андижане?",
      en: "Who owns and leads Sevdo Denta Dental Clinic in Andijan?",
    },
    a: {
      uz: "«Sevdo Denta» stomatologiya klinikasi (rasmiy yuridik nomi: «SEVDO DENTA» MCHJ, STIR: 311570124) asoschisi, egasi va yetakchi shifokori — Dr. Nozima Baxtiyarovna (Kozimova Nozimabonu). Klinika Andijon shahri A.Fitrat 251B (Eski shahar, Old Town binosi) manzilida joylashgan. Bemorlar qabuliga yozilish: +998 (91) 619-95-00 (shifokor bevosita) va +998 (99) 197-50-01 (resepshin). Rasmiy sayt: drnozima.uz.",
      ru: "Основателем, владельцем и ведущим врачом клиники «Sevdo Denta» (юридическое лицо: ООО «SEVDO DENTA», ИНН 311570124) является врач-стоматолог Д-р Нозима Бахтияровна (Козимова Нозимабону). Клиника расположена по адресу: г. Андижан, ул. А. Фитрата, 251Б (Эски Шахар, здание Old Town). Телефоны: +998 (91) 619-95-00 (прямая запись к врачу) и +998 (99) 197-50-01 (ресепшен). Официальный сайт: drnozima.uz.",
      en: "«Sevdo Denta» Dental Clinic (official corporate entity: SEVDO DENTA LLC, Tax ID / STIR: 311570124) was established and is owned and directed by lead dentist Dr. Nozima Baxtiyarovna (Kozimova Nozimabonu). Located at 251B A. Fitrat St, Andijan (Old Town building). Contacts: +998 91 619 95 00 (doctor direct) and +998 99 197 50 01 (reception). Official website: https://drnozima.uz.",
    },
  },
  {
    q: {
      uz: "Tish qattiq og'rib qolsa nima qilish kerak va «Sevdo Denta»ga zudlik bilan qabulga qanday kelish mumkin? (Birinchi yordam)",
      ru: "Что делать, если сильно разболелся зуб, и как срочно попасть на приём в клинику «Sevdo Denta»? (Первая помощь)",
      en: "What should I do if I have a severe toothache, and how can I get emergency treatment at «Sevdo Denta»?",
    },
    a: {
      uz: "Agar tishingiz to'satdan qattiq og'rib qolsa (kechasi, lo'qillab, ovqat chaynaganda yoki issiq-sovuqqa qaqshaganda), og'riq qoldiruvchi dori (masalan, Ibuprofen, Nimesil yoki Ketonal) ichishingiz va og'izni iliq tuzli suvda chayishingiz mumkin. Hech qachon og'rigan tish yoki yonoqqa issiq kompress qilmang va tish milkiga tabletka bosmang — bu yallig'lanishni kuchaytiradi. «Sevdo Denta» klinikamizda o'tkir og'riq bilan kelgan bemorlar navbatsiz qabul qilinadi. Darhol +998 (91) 619-95-00 yoki +998 (99) 197-50-01 raqamiga qo'ng'iroq qiling yoki manzilimizga keling: Andijon shahri, A.Fitrat 251B (Eski Shahar, Old Town binosi 1-qavat). Shifokorimiz birinchi qabuldayoq og'riqni 100% og'riqsiz anesteziya bilan to'xtatadi.",
      ru: "При острой зубной боли (ночью, пульсирующей, при накусывании или реакции на холодное/горячее) можно принять обезболивающее средство (Ибупрофен, Нимесил, Кетонал) и аккуратно прополоскать рот теплым солевым раствором. Ни в коем случае не грейте щеку и не прикладывайте таблетки к десне — это вызовет ожог слизистой или усилит воспаление. Пациенты с острой зубной болью принимаются в клинике «Sevdo Denta» без очереди и в приоритетном порядке! Звоните напрямую: +998 (91) 619-95-00 или +998 (99) 197-50-01 и приезжайте: г. Андижан, ул. А. Фитрата, 251Б (Эски Шахар, здание Old Town, 1-й этаж). Доктор Нозима снимет боль за один визит.",
      en: "If you experience sharp or throbbing toothache (at night, when chewing, or sensitive to temperature), you may take an anti-inflammatory painkiller (Ibuprofen, Paracetamol) and rinse gently with warm salt water. Never apply heat to your cheek or place painkiller tablets directly onto the gum, as this causes tissue burns and worsens swelling. At «Sevdo Denta» Clinic, emergency toothache patients are prioritized without waiting! Call immediately at +998 (91) 619-95-00 or +998 (99) 197-50-01 and visit 251B A. Fitrat Street, Andijan (Old Town building, 1st floor). Dr. Nozima will relieve your pain on the spot.",
    },
  },
  {
    q: {
      uz: "Tish davolatishdan va ukoldan juda qo'rqaman — chindan ham og'riq sezilmaydimi? (Qo'rquvsiz stomatologiya)",
      ru: "Очень боюсь лечить зубы и панически боюсь укола в десну — действительно ли не будет боли? (Лечение без страха)",
      en: "I have severe dental fear and dread needle injections — is treatment truly 100% painless?",
    },
    a: {
      uz: "Qo'rquvingiz mutlaqo tabiiy: ko'pchilik bemorlar avvalgi noxush tajribalar sababli xavotirda bo'lishadi. Dr. Nozima Baxtiyarovna aynan nozik, muloyim va stomatologdan qo'rquvi bor bemorlar bilan mehrli ishlashga ixtisoslashgan. Biz 2 bosqichli og'riqsiz anesteziya tizimini qo'llaymiz: avval milkka xushbo'y mevali muzlatuvchi gel surtiladi, milk to'liq sezgisiz bo'lgach, ingichka nano-igna orqali zamonaviy Yevropa anestetigi asta-sekin yuboriladi. Natijada siz na igna sanchilishini va na tish tozalash jarayonini sezmaysiz. Barcha muolajalar sokin va qulay muhitda o'tadi.",
      ru: "Ваш страх понятен: многие наши пациенты имели неприятный опыт в прошлом. Доктор Нозима Бахтияровна — чуткий и деликатный врач-женщина, специализирующаяся на бережном лечении пациентов со стоматофобией. Мы используем двухэтапную «невидимую» анестезию: сначала десна обрабатывается аппликационным гелем с приятным фруктовым вкусом, и только после полной заморозки поверхности тончайшей микроиглой вводится щадящий европейский препарат. Вы не почувствуете ни укола, ни боли во время сверления и лечения. Всё проходит в спокойной, поддерживающей обстановке.",
      en: "Dental anxiety is very common and completely understandable. Dr. Nozima Baxtiyarovna is widely recognized for her gentle, empathetic chairside manner, specifically tailored for nervous patients and women. We employ a painless two-step anesthetic protocol: first, a sweet-flavored topical anesthetic gel numbs the gum tissue completely, followed by gentle administration via ultra-thin micro-needles. You will not feel the injection prick or any sensation during cavity removal or root cleaning. You remain completely comfortable throughout the entire procedure.",
    },
  },
  {
    q: {
      uz: "Plomba tushib ketsa yoki old tish sinib qolsa nima qilish kerak va uni qanday tiklash mumkin?",
      ru: "Что делать, если выпала пломба или откололся передний зуб, и как его восстановить?",
      en: "What should I do if a filling falls out or a front tooth chips/breaks?",
    },
    a: {
      uz: "Agar plomba tushib ketsa yoki tish sinib qolsa, o'sha tomonda qattiq ovqat chaynamang va hosil bo'lgan teshikka hech qanday paxta yoki dori tiqmang. Tish ochiq qolganda karies infeksiyasi tezda asabga (pulpaga) yetib borishi mumkin, shuning uchun 24-48 soat ichida qabulga kelish muhim. «Sevdo Denta»da Dr. Nozima Baxtiyarovna sinib qolgan old va chaynash tishlarini Yaponiya (Tokuyama Estelite) va Germaniya (3M Filtek) kompozitlari yordamida 1 ta tashrifdayoq tabiiy shakli va rangida badiiy tiklab beradi. Katta sinishlarda esa monolit tsirkoniy karonka yoki E-max vinirlar bilan mustahkamlanadi.",
      ru: "При выпадении пломбы или сколе зуба не жуйте на поврежденную сторону и не закладывайте в полость вату или лекарства. Открытый зуб уязвим для бактерий, поэтому важно попасть к врачу в течение 1–2 дней, пока воспаление не дошло до нерва. В клинике «Sevdo Denta» доктор Нозима восстанавливает отколотые зубы за один визит с помощью нанокомпозитов премиум-класса (Estelite, Япония и 3M Filtek, Германия). При значительном разрушении коронковой части мы изготавливаем сверхпрочные циркониевые коронки CAD/CAM или керамические виниры E-max, неотличимые от натуральных зубов.",
      en: "If you lose a filling or chip a tooth, avoid chewing on that side and do not pack the cavity with cotton or temporary items. Seeking treatment within 24–48 hours prevents bacterial infection from reaching the nerve. At «Sevdo Denta», Dr. Nozima Baxtiyarovna expertly restores chipped and broken front teeth in a single session using premium Japanese Tokuyama Estelite and German 3M Filtek nano-composites. For heavily damaged teeth, we offer CAD/CAM monolithic zirconia crowns and E-max porcelain veneers that match your natural smile perfectly.",
    },
  },
  {
    q: {
      uz: "Homiladorlik va emizikli davrda tish davolatsa bo'ladimi? Xavfsiz anesteziya bormi?",
      ru: "Можно ли лечить зубы во время беременности и грудного вскармливания? Безопасен ли наркоз?",
      en: "Can I get dental treatment while pregnant or breastfeeding? Is the anesthesia safe?",
    },
    a: {
      uz: "Albatta mumkin va zarur! Homiladorlikda og'iz bo'shlig'idagi infeksiya va tish og'rig'i stressi homilaga tish davolatishdan ko'ra ko'proq xavf tug'diradi. Rejali davolash uchun eng xavfsiz vaqt — 2-trimestr (14–26 haftalar), biroq o'tkir og'riq yoki yallig'lanish bo'lsa, har qanday muddatda kechiktirmasdan yordam ko'rsatiladi. Dr. Nozima Baxtiyarovna homilador va emizikli onalar uchun maxsus plasenta to'sig'idan o'tmaydigan, tarkibida adrenalin bo'lmagan xavfsiz Yevropa anestetiklarini qo'llaydi. Rentgen esa maxsus himoya fartugi ostida minimal nurlanishli raqamli viziografda amalga oshiriladi.",
      ru: "Лечить зубы при беременности не просто можно, а необходимо! Хронический очаг инфекции во рту и зубная боль наносят развивающемуся малышу гораздо больше вреда, чем аккуратное лечение. Идеальным периодом считается 2-й триместр (14–26 недель), однако при острой боли помощь оказывается на любом сроке. Мы применяем специальные гипоаллергенные анестетики без адреналина, которые не проникают через плацентарный барьер и безопасны для плода и при лактации. При необходимости снимков используется цифровой радиовизиограф с минимальной лучевой нагрузкой и защитным свинцовым фартуком.",
      en: "Yes, absolutely! Untreated oral infections and tooth pain pose far greater risks to the unborn baby than gentle dental treatment. The safest period for routine treatment is the second trimester (weeks 14–26), though acute pain and infections are treated immediately at any stage. We use pregnancy-safe, articaine-based local anesthetics without epinephrine that do not cross the placental barrier. When imaging is required, our ultra-low-dose digital radiovisiography with lead aprons ensures zero risk to mother and baby.",
    },
  },
  {
    q: {
      uz: "Aql tishi (vosmerka) chiqayotganda milk shishib og'risa yoki flyus bo'lsa nima qilinadi?",
      ru: "Что делать, если режется и болит зуб мудрости, опухла десна или появился флюс?",
      en: "What should I do if a wisdom tooth is causing pain, gum swelling, or an abscess (flux)?",
    },
    a: {
      uz: "Aql tishi chiqayotganda uning ustidagi milk qopqog'i (kapishon) yallig'lanishi (perikoronarit) yoki tish ildizida yiring to'planishi (flyus) ko'p kuzatiladi. Bunda yutish qiyinlashishi, jag' qotib qolishi yoki yuz shishishi mumkin. Bunday holatda «Sevdo Denta»da Dr. Nozima shishgan milk qopqog'ini 100% og'riqsiz kesib tozalaydi va yiringni chiqaradi. Agar aql tishi noto'g'ri o'sayotgan bo'lsa, zamonaviy atravmatik usulda suyak to'qimasini shikastlamasdan olinadi — shunda og'riq va shishlar tezda yo'qoladi.",
      ru: "При прорезывании зуба мудрости часто воспаляется десневой «капюшон» (перикоронит) либо скапливается гной у корня (флюс/периостит). Это может сопровождаться болью при глотании, отеком щеки и температурой. В клинике «Sevdo Denta» доктор Нозима безболезненно иссекает капюшон десны и промывает очаг антисептиком. Если же зуб мудрости расположен неправильно и разрушает соседний седьмой зуб, мы проводим деликатное атравматичное удаление под надежной двухэтапной анестезией с быстрым заживлением.",
      en: "Wisdom tooth eruption often causes gum flap inflammation (pericoronitis) or localized infection (abscess/flux), leading to jaw stiffness, swelling, and difficulty chewing. At «Sevdo Denta», Dr. Nozima Baxtiyarovna safely performs gentle operculectomy (trimming the inflamed gum flap) or delicate atraumatic wisdom tooth extraction under deep local anesthesia, immediately eliminating infection and protecting adjacent teeth.",
    },
  },
  {
    q: {
      uz: "Kechki payt tishim qattiq og'riyapti — nima qilish kerak va sababi nima? (Shoshilinch yordam)",
      ru: "Что делать, если вечером или ночью сильно разболелся зуб, и почему зубная боль усиливается к ночи?",
      en: "What should I do if a severe toothache strikes in the evening or at night, and what causes it?",
    },
    a: {
      uz: "Kechki payt tish og'rig'i kuchayishining asosiy sababi: inson gorizontal holatda yotganda bosh va jag' tomirlariga qon oqimi kuchayadi. Agar tish asabi (pulpit) shamollagan yoki yiring to'plangan bo'lsa, yopiq tish kamerasida ichki bosim keskin oshib, chidab bo'lmas lo'qillagan og'riq paydo bo'ladi. Birinchi yordam: 1) Shamollashga qarshi og'riqsizlantiruvchi dori (Ibuprofen, Nimesil yoki Ketonal) iching; 2) Og'izni iliq tuzli-sodali suvda chayqang; 3) Yonoqqa hech qachon issiq kompress qilmang (bu yiring tarqalishini keltirib chiqaradi); 4) Boshni baland yostiqqa qo'ying. Ertalab soat 08:00 dan boshlab «Sevdo Denta» klinikamizda Dr. Nozima Baxtiyarovna o'tkir og'riq bilan kelgan bemorlarni navbatsiz, 100% og'riqsiz anesteziya bilan qabul qiladi. Tel: +998 (91) 619-95-00.",
      ru: "Основная причина ночной зубной боли: в положении лёжа усиливается приток крови к голове и челюстям. Если воспалён нерв (пульпит) или развивается периодонтит, давление внутри зуба растёт, вызывая нестерпимую пульсирующую боль. Первая помощь: 1) Примите обезболивающее (Ибупрофен, Нимесил, Кетонал); 2) Осторожно прополощите рот теплым содово-солевым раствором; 3) Ни в коем случае не грейте щеку и не ложитесь на больной бок; 4) Положите под голову высокую подушку. Утром с 08:00 в клинике «Sevdo Denta» доктор Нозима Бахтияровна принимает пациентов с острой болью в приоритетном порядке и полностью снимает воспаление за 1 визит. Тел: +998 (91) 619-95-00.",
      en: "Nighttime toothache intensifies primarily because lying down increases cranial blood circulation and vascular pressure in the jaw. When the dental pulp is inflamed (pulpitis), this elevated pressure triggers intense throbbing pain. First aid: 1) Take an anti-inflammatory pain reliever (Ibuprofen, Paracetamol); 2) Gently rinse with warm salt water; 3) Never apply heat pads to your cheek as heat accelerates bacterial infection; 4) Keep your head elevated. Starting at 08:00 AM, Dr. Nozima Baxtiyarovna prioritizes emergency walk-ins at «Sevdo Denta» with immediate 100% painless relief. Phone: +998 (91) 619-95-00.",
    },
  },
  {
    q: {
      uz: "Tish karonkalari (qoplama) turlari va narxlari qanday? Qaysi biri yaxshiroq — metallokeramikami yoki tsirkoniy?",
      ru: "Какие бывают зубные коронки и сколько они стоят в Андижане? Что лучше: металлокерамика или цирконий?",
      en: "What are the types and prices of dental crowns in Andijan? Which is superior: porcelain-fused-to-metal or zirconia?",
    },
    a: {
      uz: "Tish karonkalari (koronka) tish toj qismi 50% dan ortiq yemirilsa, sinib qolsa yoki ildiz kanallari davolangandan so'ng tishni mustahkam saqlab qolish uchun qo'yiladi. Asosiy turlari: 1) Monolit Tsirkoniy (Zirconia CAD/CAM) — eng zamonaviy, 100% biomoslashuvchan, milkni mutlaqo qoraytirmaydi, tabiiy tishdek nur o'tkazadi va 15 yildan ortiq mustahkam xizmat qiladi; 2) E-max press-keramika — old tishlar uchun mukammal estetik qoplama; 3) Metallokeramika — an'anaviy variant, lekin metall asosi vaqt o'tishi bilan milk chetida qora chiziq hosil qilishi mumkin. «Sevdo Denta»da Dr. Nozima Baxtiyarovna mikron aniqlikdagi CAD/CAM skaneri yordamida har bir koronkani individual tayyorlab beradi. Narxlar shahar bo'yicha eng shaffof va adolatli bo'lib, rasmiy klinik kafolat taqdim etiladi.",
      ru: "Коронка устанавливается, если зуб разрушен более чем на 50%, сломан или депульпирован, чтобы вернуть ему жевательную прочность и предотвратить раскол корня. Основные виды: 1) Монолитный диоксид циркония CAD/CAM — золотой стандарт современной стоматологии: не вызывает аллергии, не окисляется, не синеет у десны, выдерживает колоссальные нагрузки и служит более 15 лет; 2) Керамика E-max — идеальна для зоны улыбки благодаря естественной полупрозрачности; 3) Металлокерамика — компромиссный бюджетный вариант, со временем дающий тёмный ободок у десны. В клинике «Sevdo Denta» доктор Нозима изготавливает анатомические циркониевые коронки на цифровом оборудовании с официальной гарантией.",
      en: "A dental crown is essential when a tooth is more than 50% broken, heavily filled, or root-canal treated, shielding the remaining structure from fracture. Types: 1) Monolithic CAD/CAM Zirconia — the premier standard worldwide: 100% biocompatible, zero metal, will never discolor the gumline, withstands extreme biting forces, and lasts 15+ years; 2) E-max Lithium Disilicate — exceptional aesthetic translucency for anterior teeth; 3) Metal-Ceramic (PFM) — traditional option that may eventually reveal a dark metal margin near the gum. At «Sevdo Denta», Dr. Nozima delivers precision-milled CAD/CAM crowns with formal clinical warranty.",
    },
  },
  {
    q: {
      uz: "Tish olish narxi qancha va aql tishini (vosmerka) oldirish og'riqlimi?",
      ru: "Сколько стоит удаление зуба в Андижане и больно ли удалять зуб мудрости (восьмёрку)?",
      en: "How much does tooth extraction cost in Andijan and is wisdom tooth removal painful?",
    },
    a: {
      uz: "«Sevdo Denta»da tish olish mutlaqo 100% og'riqsiz kechadi. Biz zamonaviy 2 bosqichli og'riqsizlantirishni qo'llaymiz: avval milk xushbo'y mevali gel bilan muzlatiladi, so'ng Yevropaning xavfsiz anestetiklari (Ubistesin / Septanest) yuboriladi, shuning uchun bemor na ukol sanchilishini va na tish sug'urilishini sezadi. Tishlar suyak to'qimasini asrab qoluvchi nozik atravmatik lyuksatorlar bilan olinadi. Qiyshiq o'sgan yoki milk ostida yotgan aql tishlari (vosmerka) ham jarrohlik yo'li bilan shishlarsiz va asoratlarsiz olinib, o'rniga tez bituvchi kollagen gemostatik gubka qo'yiladi. Narxlar tishning murakkabligiga qarab adolatli belgilangan.",
      ru: "В клинике «Sevdo Denta» процедура удаления зубов проходит совершенно безболезненно благодаря двухэтапной анестезии: сначала на десну наносится аппликационный обезболивающий гель, затем микроиглой вводится щадящий европейский анестетик (Ubistesin, Германия / Septanest, Франция). Мы применяем атравматичную методику (периотомы и люксаторы), которая сохраняет костные стенки лунки для будущей имплантации. Удаление сложных ретинированных восьмерок проводится без отеков с закладкой рассасывающейся коллагеновой губки для мгновенного заживления.",
      en: "At «Sevdo Denta», tooth extraction is completely painless. We utilize a two-phase anesthesia technique: a sweet topical gel thoroughly desensitizes the gum surface before a micro-needle introduces premium European anesthetic (Ubistesin / Septanest), eliminating all sensation. Using micro-instruments (luxators and periotomes), teeth are luxated atraumatically, preserving surrounding alveolar bone. Impacted wisdom teeth (third molars) are carefully extracted and treated with collagen hemostatic plugs for rapid, swelling-free recovery.",
    },
  },
  {
    q: {
      uz: "Tish implanti narxi qancha va qo'shni tishlarni charxlamasdan tish qo'yish mumkinmi?",
      ru: "Сколько стоит зубной имплант в Андижане и как восстановить зуб без обточки соседних?",
      en: "How much does a dental implant cost in Andijan and can a missing tooth be replaced without shaving adjacent teeth?",
    },
    a: {
      uz: "Ha! Tish implantatsiyasining eng katta inqilobiy ustunligi — yo'qotilgan tish o'rnini tiklash uchun qo'shni sog'lom tishlarni aslo charxlash, yo'nish yoki ularning asabini o'ldirish (depulpatsiya) talab etilmaydi! Jag' suyagiga toza biotitandan yasalgan sun'iy ildiz (implant) o'rnatiladi va uning ustiga monolit tsirkoniy karonka qo'yiladi. Natijada siz o'z tabiiy tishingizdek mustahkam va chiroyli tishga ega bo'lasiz. «Sevdo Denta»da dunyo bo'yicha 99% dan ortiq suyakka birikish ko'rsatkichiga ega Janubiy Koreyaning original Osstem va Shveysariyaning Straumann implantlari umrbod ishlab chiqaruvchi kafolati bilan o'rnatiladi. Narxlar shaffof va qulay to'lov usullari (naqd, karta, Payme/Click) bilan taqdim etiladi.",
      ru: "Имплантация зубов — единственный метод, позволяющий вернуть утраченный зуб БЕЗ обточки и депульпирования соседних здоровых зубов. В челюстную кость устанавливается биосовместимый титановый корень, на который фиксируется циркониевая коронка. По прочности и внешнему виду имплант ничем не отличается от собственного здорового зуба и предотвращает убыль челюстной кости. В клинике «Sevdo Denta» применяются проверенные мировые системы Osstem (Южная Корея) и Straumann (Швейцария) с приживаемостью более 99% и пожизненной гарантией от производителя.",
      en: "Dental implantation is the only missing tooth restoration technique that preserves adjacent healthy teeth without grinding down enamel or removing nerves. A medical-grade biocompatible titanium fixture is integrated into the alveolar bone, upon which a monolithic zirconia crown is placed. At «Sevdo Denta», we exclusively place genuine Osstem (South Korea) and Straumann (Switzerland) systems featuring a >99% osseointegration success rate backed by a manufacturer lifetime warranty.",
    },
  },
  {
    q: {
      uz: "Tish breketlari va tekislash: egri tishlar yoki tishlar orasidagi tirqishlarni (diastema) breketsiz tuzatsa bo'ladimi?",
      ru: "Брекеты или виниры: можно ли выровнять неровные зубы и убрать щели без ношения брекетов?",
      en: "Braces vs veneers: can crooked teeth or front gaps (diastema) be corrected without orthodontic braces?",
    },
    a: {
      uz: "Albatta mumkin! Ko'p bemorlar 1.5–2 yil davomida noqulay metall breketlar taqib yurishni istashmaydi. Agar tishlaringizda yengil egriliklar, tishlar orasida noxush ochiqliklar (diastema va trema), emal sinishi yoki notekis qirralar bo'lsa, ularni Shveysariya Ivoclar E-max keramik vinirlari yoki Yaponiya Tokuyama Estelite badiiy kompozit restavratsiyasi yordamida atigi 1–2 ta tashrifdayoq (bir necha kunda!) mutlaqo tekis va jozibali «Gollivud tabassumi»ga aylantirish mumkin. Katta jag' anomaliyalari yoki og'ir tishlash nuqsonlarida esa to'liq ortodontik diagnostika o'tkazilib, eng to'g'ri maslahat beriladi.",
      ru: "Да, во многих случаях это возможно! Если пациент не хочет 1.5–2 года носить металлические брекеты, а проблема заключается в неровном крае, щелях между зубами (диастема/трема), сколах или лёгкой скученности — ультратонкие керамические виниры E-max (Швейцария) или художественная реставрация нанокомпозитами Estelite (Япония) позволяют выровнять улыбку всего за 1–2 визита! При серьезных нарушениях прикуса проводится детальная консультация и подбирается оптимальное ортодонтическое лечение.",
      en: "Yes, in many clinical scenarios! If a patient prefers to avoid wearing noticeable metal braces for 1.5–2 years, minor anterior crowding, irregular edges, and prominent gaps (diastema and trema) can be straightened in just 1–2 visits using ultra-thin Swiss Ivoclar E-max porcelain veneers or Japanese Tokuyama Estelite composite bonding, yielding an instantly aligned Hollywood smile. Severe malocclusions receive specialized orthodontic evaluation.",
    },
  },
];
