
import type { Project } from "../../../@types/Project";
import { useProjects } from "../../../hooks/useProjects";
import { ProjectCard } from "./ProjectCard";


interface ProjectsViewProps {
  onSeeDetails: (project: Project) => void;
}

export function ProjectsView(props: ProjectsViewProps) {
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
            return <ProjectCard
              key={project.id}
              project={project}
              onClickSeeMore={props.onSeeDetails}
            />;
          })}
    </ul>
  );
}