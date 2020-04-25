import React, { useState } from "react";
import Dropdown from "./Dropdown";

const sortData = {
  orderDropdown: {
    label: "Сортировка",
    defaultState: "Новое",
    options: ["Лучшее"],
  },
  whatDropdown: {
    label: "",
    defaultState: "Что",
    options: ["статьи", "егэ", "тесты"],
  },
  whereDropdown: {
    label: "",
    defaultState: "Где",
    options: ["Европа", "Азия", "Южная Америка"],
  },
  whenDropdown: {
    label: "",
    defaultState: "Когда",
    options: ["новейшее время", "средние века", "новое время", "XII век"],
  },
};

function Sort() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggle = () => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };
  return (
    // <div className="container">
    <form className={`sort-form ${isCollapsed ? "sort-form_collapse" : ""}`}>
      <div className="sort-form__item">
        <Dropdown data={sortData.orderDropdown} />
      </div>
      <div
        className={`sort-form__item sort-form__group sort-form__item_collapse`}
      >
        <Dropdown data={sortData.whatDropdown} />
        <Dropdown data={sortData.whenDropdown} />
        <Dropdown data={sortData.whereDropdown} />
      </div>
      <button
        type="button"
        className="sort-form__collapse-button"
        onClick={toggle}
      >
        M
      </button>
    </form>
    // </div>
  );
}

export default Sort;
