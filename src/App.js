import React, { useState, useReducer, useEffect, useCallback } from "react";
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
  time: ""
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
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
      setCards(cardsData);
    }, 1000);
  }, []);

  const getMoreCards = () => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      setCards(filterCards([...cards, ...cardsData], filter));
    }, 700);
  };

  useEffect(() => {
    setCards(null);
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      setCards(filterCards(cardsData, filter));
    }, 700);
  }, [filter, setCards]);

  const Loader = useCallback(
    () => (
      <>
        {isLoading && (
          <h1
            className="text text_white text_bold text_upper text_xxl text_sans"
            style={{ textAlign: "center", margin: "50px auto" }}
          >
            Loading...
          </h1>
        )}
      </>
    ),
    [isLoading]
  );

  return (
    <div className="app">
      <Header dispatch={dispatch} />
      {/* <Content /> */}
      <Sort dispatch={dispatch} />
      <Cards
        cards={cards}
        adv={adv}
        getMoreCards={getMoreCards}
        Loader={Loader}
      />

      <Footer />
    </div>
  );
}

export default App;
