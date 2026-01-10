import { ExternalLinkIcon, MoveLeft } from "lucide-react";

import type { Project } from "@/types/Project";

import { ImageContainer } from "@components/ImageContainer";
import { Button } from "@components/Button";
import { ColoredLabel } from "@components/ColoredLabel";
import { GithubIcon } from "@components/GitHubIcon";

import { useLanguage } from "@hooks/useLanguage";

import { TechSubsection } from "./TechSubSection";
import { useContext, } from "react";
import { TechnologyContext } from "@/providers/TechnologyProvider";



interface ProjectDetailsProps {
  project: Project;
  onDismiss: (project: Project) => void;
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const { content, getActiveLanguage } = useLanguage();
  const { buttons, concepts } = content.projects;
  const { project } = props;
  const { getTechnologyById } = useContext(TechnologyContext);


  const techs = getTechs();

  function getTechs() {
    const { frontend, backend } = project.technologiesId

    return {
      frontend: frontend.map(techId => getTechnologyById(techId)),
      backend: backend.map(techId => getTechnologyById(techId)),
    }

  }

  return (
    <div
      className=" 
      text-white 
      px-4 pb-4 md:px-6 md:pb-6
      bg-[#140F14]
      
      w-full 
      border border-(--primary) rounded-lg">
      <button
        className="flex items-center gap-2 leading-10"
        onClick={() => props.onDismiss(props.project)}
      >
        <MoveLeft /> {buttons.close}
      </button>
      <ImageContainer src={project.thumbnailUrl} />
      <p className="font-bold text-xl lg:text-2xl my-4">
        {project.name}
        <span className="w-10 mt-2 block border-b-3 border-(--primary)"></span>
      </p>

      <p className="text-white/70">{project.description[getActiveLanguage()]}</p>

      <div className="my-4 pb-4 flex flex-col md:flex-row gap-2 md:gap-4 border-b border-white/5">
        <a className="block w-full h-full" href={project.repositoryUrl} target="_blank">
          <Button style="flex justify-center gap-2 font-bold md:py-3" >
            <span className="h-6">
              <GithubIcon />
            </span>
            {buttons.repository}
          </Button>
        </a>
        <a className="block w-full h-full" href={project.deployUrl} target="_blank">
          <Button accent style="flex justify-center gap-2 font-bold md:py-3">
            <span className=" h-6">
              <ExternalLinkIcon />
            </span>
            {buttons.deploy}
          </Button>
        </a>
      </div>


      <TechSubsection
        techs={techs.frontend}
        title="Front-end"
      />
      <TechSubsection
        techs={techs.backend}
        title="Back-end"
        isBackend
      />

      <ColoredLabel isBackend textSize="text-lg">{concepts}</ColoredLabel>
      <div className="text-sm text-white/70">
        {props.project.concepts.map((skill, i) => {
          const isLastOne = props.project.concepts.length === (i + 1);

          return <span
            key={`skill?${skill[getActiveLanguage()]}`}
          >{skill[getActiveLanguage()]}{!isLastOne && ", "}</span>;
        })}
      </div>

    </div>

  );
}