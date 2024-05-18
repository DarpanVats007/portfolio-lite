import "./About.css";

import { FC } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Pdf from "./Darpan_Vats_Resume.pdf";
import Working from "./Working";
import { about } from "../../assets/portfolio";

const About: FC = () => {
  const { name, role, description, resume, social } = about;

  return (
    <section className="section section__padding border__radius" id="sections">
      <div className="about__div glass border__radius">
        <div className="description">
          {name && (
            <h2 className="about__me">
              Hi, I am <span className="about__name">{name}.</span>
            </h2>
          )}
          {role && <h2 className="about__role">A {role}.</h2>}
          <p className="about__description">{description}</p>
          <div className="about__contact">
            {resume && (
              <a className="btn btn--color" href={Pdf} target="_blank">
                RESUME
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
                className="link social-media"
              >
                <LinkedInIcon />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
                className="link social-media"
              >
                <GitHubIcon />
              </a>
            )}
          </div>
        </div>
        <div className="about__stack-item">
          <Working />
        </div>
      </div>
    </section>
  );
};

export default About;
