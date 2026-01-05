import type { DualLanguageField } from "./DualLanguageField"

export type Technology = {
  id: number,
  name: string,
  description: DualLanguageField,
  hexColor: string,
  officialWebsite: string,
  logoUrl: string,
  isBackend: boolean,
  isFrontend: boolean,
  skills: Array<DualLanguageField>,
  isMainStack: boolean,
}









