import React from "react";

function Card({ data }) {
  const { tags, title, img, isMain } = data;
  return (
    <div
      className={`${isMain ? "cards__item_main" : "cards__item"} card`}
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* <img className="card__image" src={img} alt={title} /> */}
      <ul className="card__tags text text_10 text_sans text_bold">
        {tags && tags.map((tag) => <li className="card__tag">{tag}</li>)}
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
