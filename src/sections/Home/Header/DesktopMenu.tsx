import type { Menu } from "../../../@types/Menu";

export function DesktopMenu(props: Menu) {
  return (
    <nav>
      <ul className="flex gap-8 text-white/70 w-full"
      >{
          props.options.map(opt => {
            return (
              <a
                className="
                transition-all duration-150
                hover:text-purple-400 
                border-b border-transparent
                pb-2
                " href={opt.refTo}>{opt.label}</a>
            );
          })
        }</ul>
    </nav>
  );
}