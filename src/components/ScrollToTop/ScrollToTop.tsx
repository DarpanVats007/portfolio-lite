import "./ScrollToTop.css";

import { FC, useEffect, useState } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top">
        <ArrowUpwardIcon fontSize="large" />
      </a>
    </div>
  ) : null;
};
