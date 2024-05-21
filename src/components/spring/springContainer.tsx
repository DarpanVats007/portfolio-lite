import "./springContainer.css";

import React, { useEffect, useState } from "react";

import { animated } from "react-spring";
import classNames from "classnames";

export const SpringContainer: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setToggle((prevToggle) => !prevToggle);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerClass = classNames("container", {
    row: toggle,
    column: !toggle,
  });

  const itemClass = classNames("item", {
    row: toggle,
    column: !toggle,
  });

  return (
    <div className={containerClass}>
      <animated.div className={itemClass}>Item 1</animated.div>
      <animated.div className={itemClass}>Item 2</animated.div>
      <animated.div className={itemClass}>Item 3</animated.div>
    </div>
  );
};
