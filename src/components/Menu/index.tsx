import { TextAlignJustifyIcon } from "lucide-react";
import { sectionsId } from "../../shared/SectionsId";
import type { MenuOption } from "../../@types/MenuOption";
import { MenuOpt } from "./MenuOption";


const menuOptions: Array<MenuOption> = [
  { label: 'Home', refTo: sectionsId.hero },
  { label: 'Sobre', refTo: sectionsId.about },
  { label: 'Habilidades', refTo: sectionsId.skills },
  { label: 'Projetos', refTo: sectionsId.projects },
  { label: 'Serviços', refTo: sectionsId.services },
  { label: 'Contato', refTo: sectionsId.services },
];

export function Menu() {
  return (
    <header className="text-white relative">
      <TextAlignJustifyIcon />
      
      <nav className="fixed h-screen w-[80%] max-w-[300px] top-0 py-10 bg-black/20">
        <ul>
          {menuOptions.map(opt => {
            return <MenuOpt option={opt} />
          })}
        </ul>
      </nav>
    </header>
  );
}