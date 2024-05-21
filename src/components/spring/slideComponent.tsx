import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

import styles from "./slideComponent.module.css";
import { useRef } from "react";

interface PageProps {
  offset: number;
  gradient: string;
  onClick: () => void;
}

const Page = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
);

export const SlideContainer = () => {
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <section className="section section__padding border__radius" id="sections">
      <div style={{ background: "#dfdfdf" }}>
        <Parallax
          className={styles.container}
          ref={parallax}
          pages={3}
          horizontal
        >
          <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
          <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
          <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
        </Parallax>
      </div>
    </section>
  );
};