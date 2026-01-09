import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { Api } from "@/api/api";
import type { Project } from "@/types/Project";

export const ProjectsContext = createContext({
  getProjects: () => [] as Array<Project>,
  getTotal: () => Number(0),
  getProjectByTech: (_id: number) => ({} as Project | undefined),
  getProjectsByTech: (_id: number) => ([] as Array<Project>),
});

export function ProjectProvider(props: PropsWithChildren) {
  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    Api.fetchProjects(data => {
      setProjects(data);
    });
  }, []);


  function getProjects() {
    return [...projects];
  }

  function getTotal() {
    return projects.length;
  }

  function getProjectsByTech(techId: number) {
    return projects.filter(project => {
      return _hasTechnology(project, techId)
    })
  }

  function getProjectByTech(techId: number) {
    return projects.find(project => {
      return _hasTechnology(project, techId);
    });
  }

  function _hasTechnology(project: Project, techId: number) {
    return project
      .technologiesId.backend
      .some(id => id === techId) || project
        .technologiesId.frontend
        .some(id => id === techId);
  }

  return (
    <ProjectsContext.Provider value={{
      getProjects,
      getTotal,
      getProjectByTech,
      getProjectsByTech,
    }}>
      {props.children}
    </ProjectsContext.Provider>
  );
}