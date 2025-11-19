import type { Project } from "../../../@types/Project";
import { ImageContainer } from "../../../components/ImageContainer";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const { project } = props;

  return (
    <div>
      <ImageContainer src={project.previewUrl} />
    </div>

  );
}