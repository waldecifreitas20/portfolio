import { sectionsId } from "../../shared/SectionsId";
import type { MenuOption } from "../../@types/MenuOption";
import { useMediaQuery } from "react-responsive";
import { MobileMenu } from "./Mobile";


const menuOptions: Array<MenuOption> = [
  { label: 'Home', refTo: sectionsId.hero },
  { label: 'Sobre', refTo: sectionsId.about },
  { label: 'Habilidades', refTo: sectionsId.skills },
  { label: 'Projetos', refTo: sectionsId.projects },
  { label: 'Serviços', refTo: sectionsId.services },
  { label: 'Contato', refTo: sectionsId.contact },
];



export function Menu() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });



  return (
    <header className="text-white relative">
      {isMobile && <MobileMenu options={menuOptions} />}
    </header >
  );
}