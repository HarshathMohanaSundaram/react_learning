import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";


export default function Examples() {
  const [selectedTab, setSelectedTab] = useState();

  const handleClick = (selectedContent) => {
    setSelectedTab(selectedContent);
  };

  let tabContent = <p>Please select the topic</p>;

  if (selectedTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    );
  }
  
  return(
    <section id="examples">
        <h2>Examples</h2>
        <menu>
          {Object.keys(EXAMPLES).map((label, index) => (
            <TabButton key={index} isActive={label===selectedTab} handleClick={() => handleClick(label)}>
              {EXAMPLES[label].title}
            </TabButton>
          ))}
        </menu>
        {tabContent}
      </section>
  );
}