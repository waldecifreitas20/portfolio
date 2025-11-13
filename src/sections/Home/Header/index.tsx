import { useMediaQuery } from "react-responsive";
import { MobileMenu } from "./Mobile";
import { LanguageMode } from "./LanguageMode";
import { useLanguage } from "../../../hooks/useLanguage";
import { DesktopMenu } from "./DesktopMenu";


export function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { content } = useLanguage();

  return (
    <header
      className="
      text-white relative flex items-center justify-between 
      md:justify-center
      ">
      {isMobile && <MobileMenu options={content.menu.options} />}
      {!isMobile && <DesktopMenu options={content.menu.options} />}

      <LanguageMode />
    </header >
  );
}