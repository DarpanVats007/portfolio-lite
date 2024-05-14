import "./About.css";

import { FC } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Working from "./Working";
import { about } from "../../assets/portfolio";
import { saveAs } from "file-saver";

const About: FC = () => {
  const { name, role, description, resume, social } = about;

  const saveFile = () => {
    //TODO fix this
    saveAs(
      "http://www.darpanvats.in/Darpan_Vats_Resume.pdf",
      "DarpanVatsResume.pdf"
    );
  };

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
              <button
                type="button"
                className="btn btn--color"
                onClick={saveFile}
              >
                RESUME
              </button>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link social-media"
              >
                <LinkedInIcon />
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
