import type { Technology } from "@/types/Technology";
import { ColoredLabel } from "@components/ColoredLabel";

interface TechSubsectionProps {
  title: string;
  isBackend?: boolean;
  techs: Array<Technology>;
}

export function TechSubsection(props: TechSubsectionProps) {

  return (
    <div className="my-4 ">
      <ColoredLabel textSize="text-lg" isBackend={props.isBackend}>{props.title}</ColoredLabel>

      <ul className="w-full flex flex-wrap gap-1 mt-2">{
        props.techs
          .map(tech => {
            return <p
              className=" 
              py-1 px-3 
              text-sm 
              bg-[#282328] 
              
              border border-white/10 
              w-fit rounded-md
              "
              style={{ 
                borderColor: tech.hexColor,
                color: tech.hexColor
              }}>{tech.name}</p>;
          })
      }</ul>
    </div>
  );
}