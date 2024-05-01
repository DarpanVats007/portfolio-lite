import "./Projects.css";

import { MediaCard } from "../project-container/mediaCard";
import { projects } from "../../assets/portfolio";

export const Projects = () => {
  if (!projects.length) return null;

  return (
    <section className="section section__padding border__radius" id="projects">
      <div className="projects glass border__radius">
        <h2 className="section__title border__radius">Projects</h2>

        <div className="projects__grid no-glass">
          {projects.map((project, index) => (
            // <Project/>
            <MediaCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
