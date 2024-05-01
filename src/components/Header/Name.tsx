import "./Name.css";

import { FC } from "react";

export const Name: FC = () => (
  <svg id="name" width="80%" height="60%" viewBox="5 -14 150 150">
    <text
      id="text"
      x="60%"
      y="60%"
      dy="calc(0.50rem + 2vw);"
      textAnchor="middle"
    >
      DV
    </text>
  </svg>
);
