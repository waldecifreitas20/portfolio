import type { MenuOption } from "../../@types/MenuOption";
import { Theme } from "../../shared/Theme";

interface MenuOptionProps {
  option: MenuOption
}

export function MenuOpt(props: MenuOptionProps) {
  return (
    <li key={`opt-${props.option.refTo}`} style={{
      color: Theme.texts.dimmed,
    }}>
      <a
        href={props.option.refTo}
        className="
        block w-full
        py-4
        border-l-8 border-transparent  
        hover:border-white
        hover:bg-purple-600
        px-4 
        text-xl
        font-light

        ">{props.option.label}</a>
    </li>
  );
}