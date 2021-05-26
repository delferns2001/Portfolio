import "bootstrap/dist/css/bootstrap.min.css";

import PageSwitch from "./Navigation/PageSwitch";
import HomePage from "./Pages/HomePage";
import Projects from "./Sections/Projects";
import WorkExperience from "./Sections/WorkExperience";

function App() {
  return (
    <>
      <div class="pimg1">
        <div class="ptext">
          <span class="border">Delton Fernandes</span>
        </div>
      </div>

      <section class="section section-dark">
        <Projects></Projects>
      </section>

      <div class="pimg2">
        <div class="ptext">
          <span class="border trans">Image 2</span>
        </div>
      </div>

      <section class="section section-dark">
        <WorkExperience></WorkExperience>
      </section>

      <div class="pimg3">
        <div class="ptext">
          <span class="border trans">Image 3</span>
        </div>
      </div>

      <section class="section section-dark">
        <h2>Section Under Construction</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          reiciendis quo molestias eum fugit in soluta praesentium dolor!
          Impedit modi optio tempora. Debitis reiciendis doloribus odio
          voluptatibus excepturi delectus sint natus perspiciatis modi itaque,
          fuga, aspernatur, rerum repudiandae tempora dicta quae. Nisi
          recusandae, vero praesentium totam quam magni, distinctio quia optio
          fugit, quos labore similique. Nulla ducimus pariatur accusantium unde
          minima officia soluta corrupti! Quia similique, cum ipsum iste ab
          commodi quod modi dolorum illo dolor inventore culpa eveniet dolorem
          ratione perspiciatis vitae maxime possimus neque deleniti a expedita.
          Ullam quis sapiente unde quia dolores eos consequuntur earum vero
          cupiditate!
        </p>
      </section>

      <div class="pimg1">
        <div class="ptext">
          <span class="border">Contact Me</span>
        </div>
      </div>
    </>
  );
}

export default App;
