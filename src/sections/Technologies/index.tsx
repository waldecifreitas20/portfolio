import { useState } from "react";
import type { Technology } from "../../@types/Technology";
import { ContentArea } from "../../components/ContentArea";
import { SectionTitle } from "../../components/SectionTitle";
import { useLanguage } from "../../hooks/useLanguage";
import { Theme } from "../../shared/Theme";
import { TechnologiesView } from "./TechnologiesView";
import { ColoredLabel } from "./ColoredLabel";

export function Technologies() {
  const { title } = useLanguage().content.tech;
  const [selectedTech, setSelectedTech] = useState<Technology>();

  function handleSelection(tech: Technology) {
    setSelectedTech(tech);
  }

  return (
    <section
      className="py-10"
      style={{
        background: `linear-gradient(
        ${Theme.background.bgDark}, 
        ${Theme.background.bgDarker})`
      }}>
      <ContentArea>
        <SectionTitle text={title} />
        <div className="md:flex gap-4">
          <TechnologiesView onSelectedTech={handleSelection} />
          {selectedTech && (
            <article
              className="
              block border border-white/50 rounded-lg 
              h-max w-full
              text-white/70
              p-4
              ">
              <h3 className="text-xl text-white mb-4 size-10 flex gap-4 items-center">
                <img src={selectedTech.iconUrl} alt="" />
                {selectedTech.name}
              </h3>

              <p className="mb-2 text-sm">{selectedTech.description}</p>

              <ColoredLabel
                isBackend={selectedTech.isBackend}
                textSize="text-base">
                Habilidades
              </ColoredLabel>

              <ul className="list-disc text-sm px-4 mt-2">
                {selectedTech.skills.map(skill => {
                  return <li>{skill.name}</li>
                })}
              </ul>
            </article>
          )}
        </div>
      </ContentArea>
    </section >
  );
}