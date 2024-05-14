import "./projectCard.css";

import React from "react";

type StackItem = {
  name: string;
  icon: string;
};

type ProjectModel = {
  name?: string;
  description?: string;
  stack: StackItem[];
  sourceCode?: string;
  livePreview?: string;
  path: string;
  backGround: string;
};

type ProjecCardProps = {
  project: ProjectModel;
};

export const ProjectCard: React.FC<ProjecCardProps> = ({ project }) => {
  return (
    <div className="project" style={{ background: project.backGround }}>
      <img src={project.path} alt="Project Image" />
      <div className="project-content">
        <h2 className="project-title">{project.name}</h2>
        <p className="project-description">{project.description}</p>
        <ul className="stack-list">
          {project.stack.map((item, index) => (
            <li key={index} className="stack-item">
              {item.name}
            </li>
          ))}
        </ul>
        <div className="project-links">
          {project.sourceCode && <a href={project.sourceCode}>Source Code</a>}
          {project.livePreview && (
            <a href={project.livePreview}>Live Preview</a>
          )}
        </div>
      </div>
    </div>
  );
};
