import { Api } from "@/api/api";
import type { Technology } from "@/types/Technology";
import { createContext, useEffect, useState, type PropsWithChildren } from "react";

export const TechnologyContext = createContext({
  getTechnologyById: (_techId: number) => ({} as Technology),
});

export function TechnologyProvider(props: PropsWithChildren) {
  const [techs, setTechs] = useState<Array<Technology>>([]);

  useEffect(() => {
    Api.fetchTechnologies(data => setTechs(data));
  }, []);

  function getTechnologyById(techId: number) {
    return techs.find(tech => tech.id === techId) as Technology ?? {};
  }


  return (
    <TechnologyContext.Provider value={{ getTechnologyById }}>
      {props.children}
    </TechnologyContext.Provider>
  );
}