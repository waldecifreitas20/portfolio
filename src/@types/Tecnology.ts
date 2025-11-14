import type { Skill } from "./Skill"

export type Technology = {
  name: string,
  iconUrl: string,
  description: string,
  isBackend?: boolean,
  skills: Array<Skill>,
  color: string,
}