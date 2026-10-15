/**
 * MedInson Stomatolog Relay Server configuration for Dr. Nozima Baxtiyarovna (Sevdo Denta).
 *
 *   GET  `${API_URL}/api/public/booking/availability?site=5nedbuut4h`
 *   POST `${API_URL}/api/public/booking/request?site=5nedbuut4h`
 */

export const MEDINSON_API_URL = (
  import.meta.env.VITE_MEDINSON_API_URL || "https://dentist-medinson-license.uz"
).replace(/\/+$/, "");

export const MEDINSON_SITE_ID =
  import.meta.env.VITE_MEDINSON_SITE_ID || "5nedbuut4h";

export const MEDINSON_DOMAIN =
  import.meta.env.VITE_MEDINSON_DOMAIN || "drnozima.uz";
