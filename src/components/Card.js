import React from "react";

import { useSpring, animated } from "react-spring";

function Card({ data }) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const { tags, title, img, isMain, id } = data;
  return (
    <animated.div
      className={`${isMain ? "cards__item_main" : "cards__item"} card`}
    >
      <div
        className="card__bg"
        style={{ ...props, backgroundImage: `url(${img})` }}
      ></div>
      <ul className="card__tags text text_10 text_sans text_bold">
        {tags &&
          Object.values(tags).map((tag) => (
            <li key={`${id}-${tag}`} className="card__tag">
              {tag}
            </li>
          ))}
      </ul>
      <p
        className={`card__title text text_serif text_bold text_white ${
          isMain ? "text_30" : "text_20"
        }`}
      >
        {title}
      </p>
    </animated.div>
  );
}

export default Card;
