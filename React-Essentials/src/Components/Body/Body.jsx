import CoreConcept from "../CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "../../data";
import "./Body.css";
import TabButton from "../TabButton";
import { useState } from "react";

function Body() {
  const [selectedTab, setSelectedTab] = useState()

  const handleClick = (selectedContent) => {
    setSelectedTab(selectedContent)
  };

  let tabContent = <p>Please select the topic</p>;

  if(selectedTab){
    tabContent = (<div id="tab-content">
                  <h3>{EXAMPLES[selectedTab].title}</h3>
                  <p>{EXAMPLES[selectedTab].description}</p>
                  <pre>
                    <code>
                      {EXAMPLES[selectedTab].code}
                    </code>
                  </pre>
                </div>);
  }

  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept {...concept} />
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {Object.keys(EXAMPLES).map((label) => (
            <TabButton handleClick={() => handleClick(label)}>
              {EXAMPLES[label].title}
            </TabButton>
          ))}
        </menu>
        {tabContent}
      </section>
    </main>
  );
}

export default Body;
