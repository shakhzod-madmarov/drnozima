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
