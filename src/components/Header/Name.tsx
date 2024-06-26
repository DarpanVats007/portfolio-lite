import "./Name.css";

import { FC } from "react";

export const Name: FC = () => (
  <svg className="name" width="80px" height="80px" viewBox="5 -14 150 150">
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
