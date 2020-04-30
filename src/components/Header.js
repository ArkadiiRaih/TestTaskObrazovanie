import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { CHANGE_SEARCH_TERM } from "../App";

function Header({ dispatch }) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  const [searchTerm, setSearchTerm] = useState("");

  const changeSearchTerm = () =>
    dispatch({ type: CHANGE_SEARCH_TERM, payload: searchTerm });

  const onSubmit = (e) => {
    e.preventDefault();
    changeSearchTerm();
  };

  return (
    <div className="header">
      <div className="container">
        <animated.form
          style={props}
          className="search-form"
          onSubmit={onSubmit}
        >
          <input
            className="search-form__input text text_style-italic text_serif textstyle-_bold"
            data-filled={!!searchTerm}
            type="text"
            placeholder="Поиск"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="search-form__button"
            type="button"
            onClick={() => setSearchTerm("")}
          >
            <i className="icon icon_close"></i>
          </button>
        </animated.form>
      </div>
    </div>
  );
}

export default Header;
