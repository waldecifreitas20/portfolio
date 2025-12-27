import type { Language } from "@/types/Language";
import { useContext } from "react";
import { StaticContentContext } from "@providers/StaticContentProvider";
import ptFlag from "@assets/pt-flag.png";
import enFlag from "@assets/en-flag.png";
import { LanguageContext } from "@/providers/LanguageProvider";



const FLAGS = {
  en: enFlag,
  pt: ptFlag,
}

export function useLanguage() {
  const contentProvider = useContext(StaticContentContext);
  const langProvider = useContext(LanguageContext);


  function switchTo(lang: Language) {
    langProvider.switchTo(lang);
    contentProvider.load(lang);
  }


  return {
    flags: { ...FLAGS },
    content: contentProvider.content,
    getActiveLanguage: langProvider.getCurrent,
    languages: langProvider.languages,
    switchTo,
  }
}