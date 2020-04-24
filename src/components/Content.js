import React, { useState } from "react";
import Sort from "./Sort";
import Cards from "./Cards";

const adv = "./images/adv_desktop.png";

const cardsData = [
  {
    tags: ["статьи", "новейшее время", "европа"],
    title: "Вытрезвитель - кошмар пролетария",
    img: "./images/1.png",
  },
  {
    tags: ["статьи", "новейшее время", "европа"],
    title: "Вытрезвитель - кошмар пролетария",
    img: "./images/1.png",
  },
  {
    tags: ["статьи", "новейшее время", "европа"],
    title: "Вытрезвитель - кошмар пролетария",
    img: "./images/1.png",
  },
  {
    tags: ["статьи", "новейшее время", "европа"],
    title: "Как Ельцин хотел забрать Крым",
    img: "./images/eltsyn.png",
    isMain: true,
  },
  {
    tags: ["статьи", "новейшее время", "европа"],
    title: "Вытрезвитель - кошмар пролетария",
    img: "./images/1.png",
  },
  {
    tags: ["статьи", "новейшее время", "европа"],
    title: "Вытрезвитель - кошмар пролетария",
    img: "./images/1.png",
  },
  {
    tags: ["статьи", "новейшее время", "европа"],
    title: "Вытрезвитель - кошмар пролетария",
    img: "./images/1.png",
  },
  {
    tags: ["статьи", "новейшее время", "европа"],
    title: "Вытрезвитель - кошмар пролетария",
    img: "./images/1.png",
  },
  {
    tags: ["статьи", "новейшее время", "европа"],
    title: "Вытрезвитель - кошмар пролетария",
    img: "./images/1.png",
  },
  {
    tags: ["статьи", "новейшее время", "европа"],
    title: "Вытрезвитель - кошмар пролетария",
    img: "./images/1.png",
  },
  {
    tags: ["статьи", "новейшее время", "европа"],
    title: "Вытрезвитель - кошмар пролетария",
    img: "./images/1.png",
  },
];

function Content() {
  const [cards, setcards] = useState(cardsData);
  return (
    <div>
      <Sort />
      <Cards cards={cards} adv={adv} />
    </div>
  );
}

export default Content;
