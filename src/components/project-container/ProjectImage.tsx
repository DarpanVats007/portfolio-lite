import "./ProjectImg.css";

import React from "react";

interface ProjectImageProps {
  path: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ path }) => {
  return (
    <div>
      <img className="img" src={path} alt="Parallax Layer" />
    </div>
  );
};

export default ProjectImage;
