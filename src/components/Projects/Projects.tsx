import "./Projects.css";

import { ProjectCard } from "../card/projectCard";
// import { ProjectContainer } from "../project-container/projectContainer";
import { projects } from "../../assets/portfolio";

export const Projects = () => {
  if (!projects.length) return null;

  return (
    <section className="section section__padding border__radius" id="projects">
      <div className="projects">
        <h2 className="section__title border__radius">Projects</h2>

        <div className="projects__grid no-glass">
          {projects.map((project, index) => (
            // <ProjectContainer key={index} project={project} />
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
