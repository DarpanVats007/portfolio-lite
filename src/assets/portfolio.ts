// import MyIcon from "./icons/react.svg";
// import { ReactIcon } from "../components/svgComponents/reactIcon";
// import { ReduxIcon } from "../components/svgComponents/reduxIcon";
// import { TypeScriptIcon } from "../components/svgComponents/typescriptIcon";
// Redux iconimport project1 from "./projects/project1.gif";
import project1 from "./projects/project1.gif";
import project2 from "./projects/project2.gif";
import project3 from "./projects/project3.gif";

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "http://darpanvats.in",
  title: "DV",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Darpan Vats",
  role: "Front End Engineer",
  description: "Who loves to code, develop and design for the Web.",
  resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/darpan-vats-40b8b496/",
    github: "https://github.com",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Job Posting Application",
    description: "Website for job listing, with job description panel",
    stack: [
      { name: "React", icon: "" },
      { name: "TypeScript", icon: "" },
      { name: "Redux", icon: "" },
    ],
    sourceCode: "https://github.com",
    livePreview: "https://codesandbox.io/s/eager-bartik-psu5g?file=/Readme.md",
    path: project1,
    backGround: "project project__1",
  },
  {
    name: "Sensor Data Visualization",
    description:
      "Interactive website with 400 sample size data from 10 sensors",
    stack: [
      { name: "React", icon: "" },
      { name: "TypeScript", icon: "" },
      { name: "Redux", icon: "" },
    ],
    sourceCode: "https://github.com",
    livePreview:
      "https://codesandbox.io/s/nostalgic-cache-vl5fi?file=/src/Readme.md",
    path: project2,
    backGround: "project project__3",
  },
  {
    name: "Quiz app",
    description:
      "Trivia quiz app presents user with 10 questions and shows the result in the end",
    stack: [
      { name: "React", icon: "" },
      { name: "TypeScript", icon: "" },
      { name: "Redux", icon: "" },
    ],
    sourceCode: "https://github.com",
    livePreview: "https://codesandbox.io/s/sad-christian-fnn6ox",
    path: project3,
    backGround: "project project__2",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "SASS",
  "Material UI",
  "Git",
  "CI/CD",
  "Jest",
  "Enzyme",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "darpan.vats21@gmail.com",
};

export { header, about, projects, skills, contact };
