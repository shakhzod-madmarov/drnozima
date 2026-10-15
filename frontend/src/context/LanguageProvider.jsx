import { useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import { LANGS, DEFAULT_LANG, langFromPath, localizePath, stripLangPrefix } from "../utils/language";

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const lang = langFromPath(location.pathname);

  /* Switching language moves to the same page in that language, so the choice
     is shareable and indexable rather than hidden in the visitor's browser. */
  const changeLanguage = useCallback(
    (newLang) => {
      if (!LANGS.includes(newLang) || newLang === lang) return;
      const canonical = stripLangPrefix(location.pathname);
      navigate(localizePath(canonical, newLang) + location.search + location.hash);
    },
    [lang, location.pathname, location.search, location.hash, navigate]
  );

  const value = useMemo(() => ({ lang, changeLanguage }), [lang, changeLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
