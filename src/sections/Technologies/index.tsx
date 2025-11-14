import { ContentArea } from "../../components/ContentArea";
import { SectionTitle } from "../../components/SectionTitle";
import { useLanguage } from "../../hooks/useLanguage";
import { Theme } from "../../shared/Theme";
import { TechnologiesView } from "./TechnologiesView";

export function Technologies() {
  const {title} = useLanguage().content.tech;
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
        <TechnologiesView />
      </ContentArea>
    </section>
  );
}