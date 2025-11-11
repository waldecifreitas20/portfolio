import type { Language } from "../@types/Language";
import { useContext, useState } from "react";
import { ContentContext } from "../providers/ContentProvider";
import ptFlag from "../assets/pt-flag.png";
import enFlag from "../assets/en-flag.png";


const languages = {
  en: { label: 'en', imgPath: enFlag } as Language,
  pt: { label: 'pt', imgPath: ptFlag } as Language
};

export function useLanguage() {
  const contentProvider = useContext(ContentContext);
  const [activeLanguage, setActive] = useState<Language>(languages.pt);


  function switchTo(lang: Language) {
    setActive(lang);
    contentProvider.load(lang.label);
  }


  return {
    availableLanguages: [...Object.values(languages)],
    content: contentProvider.content,
    activeLanguage,
    switchTo,
  }
}