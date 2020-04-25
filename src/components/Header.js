import React, { useState } from "react";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="header">
      <div className="container">
        <form className="search-form">
          <input
            className="search-form__input text text_italic text_serif text_25"
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
        </form>
      </div>
    </div>
  );
}

export default Header;
