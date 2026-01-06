import { Api } from "@/api/api";
import type { Technology } from "@/types/Technology";
import { useEffect, useState } from "react";

export function useTechnology() {
  const [techs, setTechs] = useState<Array<Technology>>([]);

  useEffect(() => {
    Api.fetchTechnologies(data => setTechs(data));
    alert("sad")
  }, []);


  function getTechnologyById(techId: number) {
    return techs.find((tech) => techId === tech.id);
  }


  return {
    getTechnologyById,
  }
}