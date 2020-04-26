import React from "react";
import Card from "./Card";
import Advertise from "./Advertise";

function Cards({ cards = [], adv, getMoreCards }) {
  return (
    <>
      <div className="container cards">
        {cards && cards.map((card) => <Card key={card.id} data={card} />)}
        <Advertise img={adv} />
      </div>
      <div className="more">
        <p className="text text_secondary text_12 text_bold text_sans text_upper">
          Показано {cards.length} из 2600 карточек
        </p>
        <button className="btn btn_light" onClick={getMoreCards}>
          Больше материалов
        </button>
      </div>
    </>
  );
}

export default Cards;
