import React, { useState, useReducer, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/app.scss";
import Cards from "./components/Cards";
import { cardsData, adv } from "./devData";
import Sort from "./components/Filter";
import { filterCards } from "./utils";

export const CHANGE_ORDER = "CHANGE_ORDER";
export const CHANGE_TYPE = "CHANGE_TYPE";
export const CHANGE_PLACE = "CHANGE_PLACE";
export const CHANGE_TIME = "CHANGE_TIME";
export const CHANGE_SEARCH_TERM = "CHANGE_SEARCH_TERM";

const defaultFilter = {
  searchTerm: "",
  order: "Новое",
  type: "",
  place: "",
  time: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return { ...defaultFilter, searchTerm: action.payload };
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

function App() {
  const [cards, setCards] = useState(null);
  const [filter, dispatch] = useReducer(reducer, defaultFilter);

  useEffect(() => {
    setTimeout(() => setCards(cardsData), 1000);
  }, []);

  const getMoreCards = () => {
    console.log(123);
    setTimeout(
      () => setCards(filterCards([...cardsData, ...cardsData], filter)),
      700
    );
  };

  useEffect(() => {
    setCards(null);
    setTimeout(() => setCards(filterCards(cardsData, filter)), 700);
  }, [filter, setCards]);
  return (
    <div className="app">
      <Header />
      {/* <Content /> */}
      <Sort dispatch={dispatch} />
      {cards ? (
        <Cards cards={cards} adv={adv} getMoreCards={getMoreCards} />
      ) : (
        <h1
          className="text text_white text_bold text_upper text_30 text_sans"
          style={{ textAlign: "center", margin: "50px auto" }}
        >
          Loading...
        </h1>
      )}
      <Footer />
    </div>
  );
}

export default App;
