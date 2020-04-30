import React from "react";
import Card from "./Card";
import Advertisement from "./Advertisement";

function Cards({ cards = [], adv, getMoreCards, Loader }) {
  if (!cards) return <Loader />;
  return (
    <>
      <div className="container cards">
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
        <Advertisement img={adv} />
      </div>
      <Loader />
      <div className="more">
        <p className="text text_secondary text_xs text_style-bold text_sans text_upper">
          Показано {cards.length} из 2600 карточек
        </p>
        <button className="btn btn_light more__btn" onClick={getMoreCards}>
          Больше материалов
        </button>
      </div>
    </>
  );
}

export default Cards;
