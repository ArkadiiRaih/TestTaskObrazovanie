import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Header() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="header">
      <div className="container">
        <animated.form style={props} className="search-form">
          <input
            className="search-form__input text text_italic text_serif"
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
