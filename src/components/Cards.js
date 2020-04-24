import React from "react";
import Card from "./Card";
import Advertise from "./Advertise";

function Cards({ cards = [], adv }) {
  return (
    <>
      <div className="container cards">
        {cards && cards.map((card) => <Card data={card} />)}
        <Advertise img={adv} />
      </div>
      <div className="more">
        <p className="text text_secondary">
          Showed {cards.length} from 2600 cards
        </p>
        <button className="btn btn_light">More materials</button>
      </div>
    </>
  );
}

export default Cards;
