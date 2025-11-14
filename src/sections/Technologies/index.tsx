import { ContentArea } from "../../components/ContentArea";
import { SectionTitle } from "../../components/SectionTitle";
import { Theme } from "../../shared/Theme";
import { TechnologiesView } from "./TechnologiesView";

export function Technologies() {
  return (
    <section
      className="py-10"
      style={{
        background: `linear-gradient(
        ${Theme.background.bgDark}, 
        ${Theme.background.bgDarker})`
      }}>
      <ContentArea>
        <SectionTitle text="Tecnologias" />
        <TechnologiesView />
      </ContentArea>
    </section>
  );
}