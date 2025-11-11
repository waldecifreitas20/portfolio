import type { MenuOption } from "./MenuOption"

export type Content = {
  menu: {
    options: Array<MenuOption>
  },
  hero: {
    title: string,
    intro: string,
  }
}