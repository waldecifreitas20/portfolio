import { useState } from "react";
import { Theme } from "../../shared/Theme";
import { Tab } from "./Tab";

enum tabs {
  frontend, backend
}

export function TechnologiesView() {
  const [activeTab, setActiveTab] = useState(tabs.frontend);

  function handleTabClick(tabId: number) {
    setActiveTab(tabId);
  }

  return (
    <div>
      {/*controlers */}
      <div className="flex">
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
      </div>

      <article>

      </article>

    </div>
  );
}