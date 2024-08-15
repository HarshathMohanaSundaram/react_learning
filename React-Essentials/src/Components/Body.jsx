import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from "../data";
import './Body.css';

function Body() {
  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {
            CORE_CONCEPTS.map( (concept) => <CoreConcept {...concept} />)
          }
        </ul>
      </section>
    </main>
  );
}

export default Body;