import { createContext, useContext, useCallback } from "react";
import { DEFAULT_LANG, localizePath } from "../utils/language";

export const LanguageContext = createContext();


export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) return { lang: DEFAULT_LANG, changeLanguage: () => {} };
  return ctx;
};

/** Prefixes a path with the active language. Use for every internal link. */
export const useLocalizedPath = () => {
  const { lang } = useLanguage();
  return useCallback((path) => localizePath(path, lang), [lang]);
};
