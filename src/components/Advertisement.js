import React from "react";
import { useSpring, animated } from "react-spring";

function Advertisement({ img }) {
  const animationStyle = useSpring({
    opacity: 1,
    maxHeight: 1000,
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <animated.div style={animationStyle} className="advertisement">
      <div className="advertisement__content">
        <div className="container">
          <a
            href="/#"
            className="advertisement__link text text_m text_style-bold text_sans"
          >
            реклама на diletant.media
          </a>
          <img className="advertisement__img" src={img} alt="adv" />
        </div>
      </div>
    </animated.div>
  );
}

export default Advertisement;
