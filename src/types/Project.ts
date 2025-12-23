import type { Technology } from "./Technology";

export type Project = {
  id: number,
  category: string,
  deployUrl: string,
  name: string,
  repositoryUrl: string,
  thumbnailUrl: string,
  technologies: Array<Technology>,
  skills: Array<{
    en: string,
    pt: string,
  }>
  description: {
    en: string,
    pt: string,
  },
}
