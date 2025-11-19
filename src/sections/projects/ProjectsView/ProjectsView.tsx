
import { useProjects } from "../../../hooks/useProjects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsView() {
  const { getProjects } = useProjects();

  return (
    <ul
      className="
      flex flex-col gap-8
      justify-center
      sm:grid
      sm:grid-cols-2
      
      lg:grid-cols-3
      
      
      ">
      {
        getProjects()
          .map((project, i) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
    </ul>
  );
}