import { sectionsId } from "../../shared/SectionsId";
import type { MenuOption } from "../../@types/MenuOption";
import { useMediaQuery } from "react-responsive";
import { MobileMenu } from "./Mobile";
import { LanguageMode } from "./LanguageMode";
import { ContentArea } from "../ContentArea";
import { useLanguage } from "../../hooks/useLanguage";


export function Menu() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const { content } = useLanguage();

  return (
    <ContentArea tailwindCss="py-2">
      <header className="text-white relative flex items-center justify-between">
        {isMobile && <MobileMenu options={content.menu.options} />}

        <LanguageMode />
      </header >
    </ContentArea>
  );
}