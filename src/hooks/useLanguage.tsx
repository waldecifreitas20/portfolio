import type { Language } from "@/types/Language";
import { useContext, useState } from "react";
import { StaticContentContext } from "@providers/StaticContentProvider";
import ptFlag from "@assets/pt-flag.png";
import enFlag from "@assets/en-flag.png";


const LANGUAGES = {
  en: 'en' as Language,
  pt: 'pt' as Language,
}
const FLAGS = {
  en: enFlag,
  pt: ptFlag,
}


export function useLanguage() {
  const contentProvider = useContext(StaticContentContext);
  const [activeLanguage, setActive] = useState<Language>(LANGUAGES.pt);


  function switchTo(lang: Language) {
    setActive(lang);
    contentProvider.load(lang);
  }


  return {
    flags: { ...FLAGS },
    languages: { ...LANGUAGES },
    content: contentProvider.content,
    activeLanguage,
    switchTo,
  }
}