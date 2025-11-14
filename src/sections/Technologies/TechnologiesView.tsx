import { useEffect, useState } from "react";
import { Theme } from "../../shared/Theme";
import { Tab } from "./Tab";
import { Api } from "../../api/api";
import { TechViewItem } from "./TechViewItem";
import type { Technology } from "../../@types/Tecnology";

enum tabs {
  frontend, backend
}

export function TechnologiesView() {
  const [activeTab, setActiveTab] = useState(tabs.frontend);
  const [techs, setTechs] = useState<Array<Technology>>([]);

  useEffect(() => {
    Api
      .fetchData()
      .then(data => {
        setTechs(data.technologies as Array<Technology>);
      });
  }, []);


  function handleTabClick(tabId: number) {
    setActiveTab(tabId);
  }

  return (
    <div>
      {/*controlers */}
      <article className="flex">
        <Tab
          id={tabs.frontend}
          activeColor={Theme.accent}
          isActive={activeTab === tabs.frontend}
          text="Front-end"
          onClick={handleTabClick}
        />
        <Tab
          id={tabs.backend}
          activeColor={Theme.primary}
          isActive={activeTab === tabs.backend}
          text="Back-end"
          onClick={handleTabClick}
        />
      </article>

      <ul>
        {techs.map(tech => {
          return <TechViewItem tech={tech} />
        })}
      </ul>

    </div>
  );
}