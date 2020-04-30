import React from "react";

import { useSpring, animated } from "react-spring";
import Tag from "./Tag";

function Card({ data }) {
  const { tags, title, img, isMain, id, description } = data;

  const animationStyle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }
  });

  const bgStyle = () => {
    if (window.innerWidth < 768) {
      return {
        background: `linear-gradient(180deg, rgba(39, 43, 47, 0.1) 18.34%, #1B2026 98.36%), url(${img}) center center`,
        backgroundSize: "cover"
      };
    }
    return {
      background: `linear-gradient(180.17deg, rgba(39, 43, 47, 0.2) 10%, rgba(39, 43, 47, 0) 39.33%, rgba(39, 43, 47, 0.6) 67.63%), url(${img}) center center`,
      backgroundSize: "cover"
    };
  };

  return (
    <animated.div
      style={animationStyle}
      className={`${isMain ? "cards__item_main" : "cards__item"} card`}
    >
      <div className="card__bg" style={bgStyle()}>
        <p
          className={`card__title text text_serif text_style-bold text_white ${
            isMain ? "text_xxl" : "text_l"
          }`}
        >
          {title}
        </p>
      </div>
      <ul className="card__tags text text_xxs text_sans text_style-bold">
        {tags &&
          Object.values(tags).map((tag) => (
            <li key={`${id}-${tag}`} className="card__tag">
              {tag}
            </li>
          ))}
      </ul>
      <p className="card__description  text text_m text_serif text_white">
        {description}
      </p>
    </animated.div>
  );
}

export default Card;
