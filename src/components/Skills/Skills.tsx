import "./Skills.css";

import { FC } from "react";
import { skills } from "../../assets/portfolio";

export const Skills: FC = () => {
  if (!skills.length) return null;

  return (
    <section
      className="section section__padding glass border__radius"
      id="skills"
    >
      <div className="skills">
        <h2 className="section__title no-glass">Skills</h2>
        <ul className="skills__list">
          {skills.map((skill, index) => (
            <li key={index} className="skills__list-item btn btn--plain">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
