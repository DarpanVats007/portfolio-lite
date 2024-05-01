import "./ProjectContainer.css";

import { FC } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import ProjectImage from "./ProjectImage";

type ProjectModel = {
  name?: string;
  description?: string;
  stack: string[];
  sourceCode?: string;
  livePreview?: string;
  path: string;
  backGround: string;
};

type ProjectContainerProps = {
  project: ProjectModel;
};

export const ProjectContainer: FC<ProjectContainerProps> = ({ project }) => {
  return (
    <div className={project.backGround}>
      <div className="project__desc__stack no-glass">
        <div className="project__desc__stack-item-1">
          <h3>{project.name}</h3>
          <p className="project__description glass border__radius">
            {project.description}
          </p>
          {project.stack && (
            <ul className="project__stack">
              {project.stack.map((item, index) => (
                <li key={index} className="project__stack-item btn btn--plain">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="project__desc__stack-item">
          <div>
            <ProjectImage path={project.path} />
          </div>
        </div>
      </div>

      {project.livePreview && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.livePreview}
          aria-label="live preview"
          className="link link--icon no-glass"
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  );
};
