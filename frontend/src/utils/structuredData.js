import { SITE_ORIGIN } from "../constants/seo";
import { localizePath } from "./language";

/**
 * Ensures trailing slash on canonical routes for consistent indexing
 */
export const withTrailingSlash = (path) => (path.endsWith("/") ? path : `${path}/`);

export const urlFor = (path = "/", lang = "uz") =>
  `${SITE_ORIGIN}${withTrailingSlash(localizePath(path, lang))}`;

/**
 * Generate Schema.org BreadcrumbList
 * @param {Array<{ name: string, path: string }>} crumbs
 * @param {string} lang
 */
export const buildBreadcrumbSchema = (crumbs, lang = "uz") => ({
  "@type": "BreadcrumbList",
  "itemListElement": crumbs.map((crumb, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "name": crumb.name,
    "item": urlFor(crumb.path, lang),
  })),
});

/**
 * Generate Schema.org FAQPage for Google & Search Engine Rich Snippets
 * @param {Array<{ q: Record<string, string>, a: Record<string, string> }>} faqItems
 * @param {string} lang
 */
export const buildFaqSchema = (faqItems, lang = "uz") => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${urlFor("/", lang)}#faq`,
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.q[lang] || item.q.uz,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a[lang] || item.a.uz,
    },
  })),
});

/**
 * Generate Schema.org MedicalProcedure for a specific treatment
 * @param {object} service
 * @param {string} lang
 * @param {Array<{ name: string, path: string }>} breadcrumbs
 */
export const buildMedicalProcedureSchema = (service, lang = "uz", breadcrumbs = []) => {
  const serviceUrl = urlFor(`/services/${service.id}`, lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const procedure = {
    "@type": "MedicalProcedure",
    "@id": `${serviceUrl}#procedure`,
    "name": service.title[lang] || service.title.uz,
    "description": service.shortDesc[lang] || service.shortDesc.uz,
    "procedureType": service.id === "xirurgiya" || service.id === "implantatsiya"
      ? "https://schema.org/SurgicalProcedure"
      : "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "https://en.wikipedia.org/wiki/Human_mouth",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Dentistry",
    },
    "provider": {
      "@id": `${SITE_ORIGIN}/#dentist`,
    },
    "performer": {
      "@id": `${SITE_ORIGIN}/#doctor`,
    },
    "offers": {
      "@type": "Offer",
      "url": serviceUrl,
      "priceCurrency": "UZS",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@id": `${SITE_ORIGIN}/#dentist`,
      },
    },
  };

  if (breadcrumbObj) {
    return {
      "@context": "https://schema.org",
      "@graph": [breadcrumbObj, procedure],
    };
  }

  return {
    "@context": "https://schema.org",
    ...procedure,
  };
};

/**
 * Generate Schema.org Services Catalog (OfferCatalog + Breadcrumbs)
 * @param {Array<object>} services
 * @param {string} lang
 * @param {Array<{ name: string, path: string }>} breadcrumbs
 */
export const buildServicesCatalogSchema = (services, lang = "uz", breadcrumbs = []) => {
  const catalogUrl = urlFor("/services", lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const catalogTitle = {
    uz: "Stomatologik Xizmatlar Katalogi — Dr. Nozima Baxtiyarovna",
    ru: "Каталог Стоматологических Услуг — Д-р Нозима Бахтияровна",
    en: "Dental Services Catalog — Dr. Nozima Baxtiyarovna",
  }[lang] || "Stomatologik Xizmatlar";

  const catalogObj = {
    "@type": "ItemList",
    "@id": `${catalogUrl}#catalog`,
    "name": catalogTitle,
    "description": {
      uz: "Andijon shahrida 100% og'riqsiz tish davolash, tsirkoniy karonka, E-max vinirlar va implantatsiya xizmatlari.",
      ru: "Полный спектр стоматологических услуг в Андижане: лечение без боли, циркониевые коронки, виниры и имплантация.",
      en: "Comprehensive dental services in Andijan: painless therapy, zirconia crowns, E-max veneers, and dental implants.",
    }[lang],
    "numberOfItems": services.length,
    "itemListElement": services.map((svc, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": svc.title[lang] || svc.title.uz,
      "url": urlFor(`/services/${svc.id}`, lang),
    })),
  };

  const graph = [];
  if (breadcrumbObj) graph.push(breadcrumbObj);
  graph.push(catalogObj);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

/**
 * Generate Schema.org About Page Schema (AboutPage + Physician + Breadcrumbs)
 */
export const buildAboutPageSchema = (lang = "uz", breadcrumbs = []) => {
  const pageUrl = urlFor("/about", lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const aboutPage = {
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
    "name": {
      uz: "Dr. Nozima Baxtiyarovna Haqida — Ayol Stomatolog va Ortoped Andijon",
      ru: "О Докторе Нозиме Бахтияровне — Врач-Стоматолог Женщина в Андижане",
      en: "About Dr. Nozima Baxtiyarovna — Female Dentist & Prosthodontist in Andijan",
    }[lang],
    "mainEntity": {
      "@id": `${SITE_ORIGIN}/#doctor`,
    },
  };

  const doctorEntity = {
    "@type": ["Person", "Physician"],
    "@id": `${SITE_ORIGIN}/#doctor`,
    "name": "Dr. Nozima Baxtiyarovna",
    "gender": "https://schema.org/Female",
    "jobTitle": {
      uz: "Vrach-stomatolog, ayol stomatolog-terapevt va ortoped",
      ru: "Врач-стоматолог, терапевт и ортопед (женщина-стоматолог)",
      en: "Dentist, Restorative Therapist & Prosthodontist (Female Dentist)",
    }[lang],
    "telephone": "+998916199500",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Andijon davlat tibbiyot instituti (ADTI)",
    },
    "worksFor": {
      "@type": ["Dentist", "MedicalClinic"],
      "@id": `${SITE_ORIGIN}/#dentist`,
      "name": "Sevdo Denta",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A.Fitrat 251B",
        "addressLocality": "Andijon",
        "addressRegion": "Andijon viloyati",
        "addressCountry": "UZ",
      },
    },
    "sameAs": [
      "https://t.me/Miss_Dentist_95",
      "https://www.instagram.com/sevdo_denta/",
      "https://maps.app.goo.gl/Ez79FP1W4oTHGGLn9",
      "https://yandex.uz/maps/-/CXBjjZ5d",
    ],
  };

  const graph = [];
  if (breadcrumbObj) graph.push(breadcrumbObj);
  graph.push(aboutPage);
  graph.push(doctorEntity);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

/**
 * Generate Schema.org Contact Page Schema (ContactPage + Dentist + Breadcrumbs)
 */
export const buildContactPageSchema = (lang = "uz", breadcrumbs = []) => {
  const pageUrl = urlFor("/contact", lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const contactPage = {
    "@type": "ContactPage",
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
    "name": {
      uz: "Aloqa va Manzil: A.Fitrat 251B — Dr. Nozima Baxtiyarovna (Sevdo Denta)",
      ru: "Контакты и Адрес: ул. А. Фитрата 251Б — Д-р Нозима Бахтияровна (Sevdo Denta)",
      en: "Contact & Location: 251B A. Fitrat St — Dr. Nozima Baxtiyarovna (Sevdo Denta)",
    }[lang],
    "mainEntity": {
      "@id": `${SITE_ORIGIN}/#dentist`,
    },
  };

  const clinicEntity = {
    "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
    "@id": `${SITE_ORIGIN}/#dentist`,
    "name": "Dr. Nozima Baxtiyarovna — Sevdo Denta",
    "telephone": "+998916199500",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A.Fitrat 251B",
      "addressLocality": "Andijon",
      "addressRegion": "Andijon viloyati",
      "addressCountry": "UZ",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.776788,
      "longitude": 72.352159,
    },
    "hasMap": [
      "https://maps.app.goo.gl/Ez79FP1W4oTHGGLn9",
      "https://yandex.uz/maps/-/CXBjjZ5d",
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00",
      },
    ],
    "sameAs": [
      "https://t.me/Miss_Dentist_95",
      "https://www.instagram.com/sevdo_denta/",
      "https://maps.app.goo.gl/Ez79FP1W4oTHGGLn9",
      "https://yandex.uz/maps/-/CXBjjZ5d",
    ],
  };

  const graph = [];
  if (breadcrumbObj) graph.push(breadcrumbObj);
  graph.push(contactPage);
  graph.push(clinicEntity);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

/**
 * Generate Breadcrumb-only schema wrapper for secondary pages like Booking
 */
export const buildPageWithBreadcrumbs = (pageType, pagePath, pageName, lang = "uz", breadcrumbs = []) => {
  const pageUrl = urlFor(pagePath, lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const pageObj = {
    "@type": pageType,
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
    "name": pageName,
  };

  const graph = [];
  if (breadcrumbObj) graph.push(breadcrumbObj);
  graph.push(pageObj);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

/**
 * Generate comprehensive Schema.org Graph for the Homepage.
 * Interconnects WebSite, Dentist/MedicalClinic/LocalBusiness, Physician,
 * FAQPage, and MedicalWebPage, fully localized for uz, ru, and en.
 */
export const buildHomepageSchema = (lang = "uz", faqItems = [], services = []) => {
  const pageUrl = urlFor("/", lang);

  const websiteName = {
    uz: "Dr. Nozima Baxtiyarovna — Ayol Stomatolog va Ortoped Andijon | Sevdo Denta",
    ru: "Д-р Нозима Бахтияровна — Женщина-Стоматолог и Ортопед в Андижане | Sevdo Denta",
    en: "Dr. Nozima Baxtiyarovna — Female Dentist & Prosthodontist in Andijan | Sevdo Denta",
  }[lang] || "Dr. Nozima Baxtiyarovna";

  const clinicName = {
    uz: "Dr. Nozima Baxtiyarovna — «Sevdo Denta» Stomatologiya Klinikasi",
    ru: "Д-р Нозима Бахтияровна — Стоматологическая Клиника «Sevdo Denta»",
    en: "Dr. Nozima Baxtiyarovna — «Sevdo Denta» Dental Clinic",
  }[lang];

  const clinicAlternateNames = {
    uz: [
      "Dr. Nozima Baxtiyarovna",
      "Ayol stomatolog Dr. Nozima",
      "Sevdo Denta Andijon",
      "A.Fitrat 251B stomatologiya",
      "Eski Shahar stomatologiya",
    ],
    ru: [
      "Д-р Нозима Бахтияровна",
      "Врач-стоматолог женщина Нозима Бахтияровна",
      "Женский стоматолог Андижан",
      "Клиника Севдо Дента Андижан",
      "Стоматология ул. Фитрата 251Б",
    ],
    en: [
      "Dr. Nozima Baxtiyarovna",
      "Female Dentist Dr. Nozima",
      "Sevdo Denta Dental Clinic Andijan",
      "Dental Clinic 251B A. Fitrat St",
    ],
  }[lang];

  const clinicDesc = {
    uz: "Andijon shahri A.Fitrat 251B «Sevdo Denta» klinikasida tajribali ayol stomatolog-terapevt va ortoped Dr. Nozima Baxtiyarovna. 7 yillik tajriba, ADTI bitiruvchisi, 100% og'riqsiz tish davolash, tsirkoniy karonka, E-max vinirlar va estetik restavratsiya. Tel: +998 (91) 619-95-00.",
    ru: "Квалифицированный врач-стоматолог женщина в Андижане Д-р Нозима Бахтияровна (клиника «Sevdo Denta», ул. А. Фитрата, 251Б). 7 лет опыта, выпускница АГМИ, 100% безболезненное лечение кариеса и каналов, циркониевые коронки, виниры E-max. Тел: +998 (91) 619-95-00.",
    en: "Certified female dentist Dr. Nozima Baxtiyarovna at «Sevdo Denta» Clinic, 251B A. Fitrat Street, Andijan. 7 years of clinical excellence, ADTI graduate, 100% painless restorative dental care, zirconia crowns, and E-max veneers. Tel: +998 (91) 619-95-00.",
  }[lang];

  const addressLocality = {
    uz: "Andijon",
    ru: "Андижан",
    en: "Andijan",
  }[lang];

  const addressRegion = {
    uz: "Andijon viloyati",
    ru: "Андижанская область",
    en: "Andijan Region",
  }[lang];

  const doctorJobTitle = {
    uz: "Vrach-stomatolog, ayol stomatolog-terapevt va ortoped",
    ru: "Врач-стоматолог, терапевт и ортопед (женщина-стоматолог)",
    en: "Dentist, Restorative Therapist & Prosthodontist (Female Dentist)",
  }[lang];

  const doctorDesc = {
    uz: "Andijon shahrida 7 yillik amaliy klinik tajribaga ega ayol stomatolog-terapevt va ortoped (Sevdo Denta klinikasi, A.Fitrat 251B).",
    ru: "Врач-стоматолог женщина в Андижане с 7-летним стажем, специалист по терапевтической и ортопедической стоматологии (клиника «Sevdo Denta», ул. А. Фитрата 251Б).",
    en: "Certified female dentist and prosthodontist in Andijan with 7 years of clinical excellence (Sevdo Denta Clinic, 251B A. Fitrat St).",
  }[lang];

  const availableServices = services.map((svc) => ({
    "@type": "MedicalProcedure",
    "name": svc.title[lang] || svc.title.uz,
    "description": svc.shortDesc[lang] || svc.shortDesc.uz,
    "url": urlFor(`/services/${svc.id}`, lang),
  }));

  const websiteObj = {
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    "url": `${SITE_ORIGIN}/`,
    "name": websiteName,
    "inLanguage": ["uz-UZ", "ru-RU", "en-US"],
    "publisher": {
      "@id": `${SITE_ORIGIN}/#dentist`,
    },
  };

  const clinicObj = {
    "@type": ["Dentist", "MedicalClinic", "LocalBusiness", "MedicalBusiness"],
    "@id": `${SITE_ORIGIN}/#dentist`,
    "name": clinicName,
    "alternateName": clinicAlternateNames,
    "description": clinicDesc,
    "url": pageUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_ORIGIN}/logo.png`,
      "width": 512,
      "height": 512,
    },
    "image": [
      `${SITE_ORIGIN}/dr_nozima_branded.webp`,
      `${SITE_ORIGIN}/dr_nozima_portrait.webp`,
      `${SITE_ORIGIN}/dr_nozima_clinic.webp`,
    ],
    "telephone": "+998916199500",
    "priceRange": "$$",
    "currenciesAccepted": "UZS",
    "paymentAccepted": "Cash, Uzcard, Humo, Visa, Mastercard, Payme, Click",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A.Fitrat 251B",
      "addressLocality": addressLocality,
      "addressRegion": addressRegion,
      "addressCountry": "UZ",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.776788,
      "longitude": 72.352159,
    },
    "hasMap": [
      "https://maps.app.goo.gl/Ez79FP1W4oTHGGLn9",
      "https://yandex.uz/maps/-/CXBjjZ5d",
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00",
      },
    ],
    "medicalSpecialty": ["Dentistry", "Prosthodontics", "Endodontics", "CosmeticDentistry"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "194",
      "bestRating": "5",
      "worstRating": "1",
    },
    "availableService": availableServices,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+998916199500",
      "contactType": "reservations",
      "areaServed": "UZ",
      "availableLanguage": ["uz", "ru", "en"],
    },
    "founder": {
      "@id": `${SITE_ORIGIN}/#doctor`,
    },
    "employee": [
      {
        "@id": `${SITE_ORIGIN}/#doctor`,
      },
    ],
    "sameAs": [
      "https://t.me/Miss_Dentist_95",
      "https://www.instagram.com/sevdo_denta/",
      "https://maps.app.goo.gl/Ez79FP1W4oTHGGLn9",
      "https://yandex.uz/maps/-/CXBjjZ5d",
    ],
  };

  const doctorObj = {
    "@type": ["Person", "Physician"],
    "@id": `${SITE_ORIGIN}/#doctor`,
    "name": "Dr. Nozima Baxtiyarovna",
    "gender": "https://schema.org/Female",
    "jobTitle": doctorJobTitle,
    "description": doctorDesc,
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Andijon davlat tibbiyot instituti (ADTI)",
    },
    "medicalSpecialty": ["Dentistry", "Prosthodontics", "Endodontics", "CosmeticDentistry"],
    "worksFor": {
      "@id": `${SITE_ORIGIN}/#dentist`,
    },
    "knowsLanguage": ["uz", "ru", "en"],
    "telephone": "+998916199500",
    "sameAs": [
      "https://t.me/Miss_Dentist_95",
      "https://www.instagram.com/sevdo_denta/",
      "https://maps.app.goo.gl/Ez79FP1W4oTHGGLn9",
      "https://yandex.uz/maps/-/CXBjjZ5d",
    ],
  };

  const faqObj =
    faqItems.length > 0
      ? {
          "@type": "FAQPage",
          "@id": `${pageUrl}#faq`,
          "mainEntity": faqItems.map((item) => ({
            "@type": "Question",
            "name": item.q[lang] || item.q.uz,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.a[lang] || item.a.uz,
            },
          })),
        }
      : null;

  const webpageObj = {
    "@type": "MedicalWebPage",
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
    "name": websiteName,
    "about": {
      "@id": `${SITE_ORIGIN}/#dentist`,
    },
    "specialty": "https://schema.org/Dentistry",
  };

  const graph = [websiteObj, clinicObj, doctorObj, webpageObj];
  if (faqObj) graph.push(faqObj);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

