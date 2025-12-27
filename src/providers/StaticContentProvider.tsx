import { createContext, useState, type PropsWithChildren } from "react";
import ptContentJson from "@/data/pt_br.json";
import enContentJson from "@/data/en.json";
import type { Language } from "@/types/Language";
import type { StaticContent } from "@/types/StaticContent";

export const StaticContentContext = createContext({
  load: (_Language: Language) => { },
  content: {} as StaticContent,
});

const CONTENTS = {
  en: enContentJson,
  pt: ptContentJson,
};

export function StaticContentProvider(props: PropsWithChildren) {
  const [content, setContent] = useState<StaticContent>(CONTENTS.pt);

  function load(Language: Language) {
    let selected = CONTENTS.pt;

    if (Language === 'en') {
      selected = CONTENTS.en;
    }
    setContent(selected);
  }


  return (
    <StaticContentContext.Provider value={{
      content,
      load,
    }}>
      {props.children}
    </StaticContentContext.Provider>
  );
}