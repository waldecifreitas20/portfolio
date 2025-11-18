import { useProjects } from "../../../hooks/useProjects";
import { Card } from "./ProjectCard";

export function ProjectsView() {
  const { getProjects } = useProjects();

  return (
    <ul>
      {getProjects().map(project => {
        return (
          <Card>
            
          </Card>
        );
      })}
    </ul>
  );
}