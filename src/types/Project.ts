import type { DualLanguageField } from "./DualLanguageField";

export type Project = {
  id: number,
  name: string,
  category: DualLanguageField,
  deployUrl: string,
  repositoryUrl: string,
  thumbnailUrl: string,
  technologiesId: {
    backend: Array<number>,
    frontend: Array<number>
  },
  description: DualLanguageField,
  concepts: Array<DualLanguageField>,
}
