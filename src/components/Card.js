import React from "react";

function Card({ data }) {
  const { tags, title, img, isMain, id } = data;
  return (
    <div
      className={`${isMain ? "cards__item_main" : "cards__item"} card`}
      style={{ backgroundImage: `url(${img})` }}
    >
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
    </div>
  );
}

export default Card;
