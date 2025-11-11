import { createContext, useState, type PropsWithChildren } from "react";
import ptContentJson from "../data/pt_br.json";
import enContentJson from "../data/en.json";
import type { LanguageLabel } from "../@types/Language";
import type { Content } from "../@types/Content";

export const ContentContext = createContext({
  load: (_languageLabel: LanguageLabel) => { },
  content: {} as Content,
});

const CONTENTS = {
  en: enContentJson,
  pt: ptContentJson,
};

export function ContentProvider(props: PropsWithChildren) {
  const [content, setContent] = useState<Content>(CONTENTS.pt);

  function load(languageLabel: LanguageLabel) {
    let selected = CONTENTS.pt;

    if (languageLabel === 'en') {
      selected = CONTENTS.en;
    }
    setContent(selected);
  }


  return (
    <ContentContext.Provider value={{
      content,
      load,
    }}>
      {props.children}
    </ContentContext.Provider>
  );
}