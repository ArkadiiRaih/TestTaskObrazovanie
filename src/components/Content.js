import React, { useState, useReducer, useEffect } from "react";
import Sort from "./Filter";
import Cards from "./Cards";
import { cardsData, adv } from "../devData";

export const CHANGE_ORDER = "CHANGE_ORDER";
export const CHANGE_TYPE = "CHANGE_TYPE";
export const CHANGE_PLACE = "CHANGE_PLACE";
export const CHANGE_TIME = "CHANGE_TIME";

const defaultFilter = {
  order: "",
  type: "",
  place: "",
  time: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_ORDER:
      return { ...state, order: action.payload };
    case CHANGE_TYPE:
      return { ...state, type: action.payload };
    case CHANGE_PLACE:
      return { ...state, place: action.payload };
    case CHANGE_TIME:
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

function Content() {
  const [cards, setcards] = useState(null);
  const [filter, dispatchFilter] = useReducer(reducer, defaultFilter);
  useEffect(() => {
    setTimeout(() => setcards(cardsData), 1000);
  }, []);

  useEffect(() => {
    console.log("filter");
  }, [filter]);

  return (
    <>
      <Sort dispatchFilter={dispatchFilter} />
      {cards ? <Cards cards={cards} adv={adv} /> : null}
    </>
  );
}

export default Content;
