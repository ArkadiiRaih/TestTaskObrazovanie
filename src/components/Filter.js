import React, { useState, useCallback } from "react";
import Dropdown from "./Dropdown";
import {
  CHANGE_ORDER,
  CHANGE_TYPE,
  CHANGE_PLACE,
  CHANGE_TIME,
} from "./Content";
import { sortData } from "../devData";

function Sort({ dispatchFilter: dispatch }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const changeOrder = useCallback(
    (order) => {
      dispatch({ type: CHANGE_ORDER, payload: order });
    },
    [dispatch]
  );
  const changeType = useCallback(
    (type) => {
      dispatch({ type: CHANGE_TYPE, payload: type });
    },
    [dispatch]
  );
  const changePlace = useCallback(
    (place) => {
      dispatch({ type: CHANGE_PLACE, payload: place });
    },
    [dispatch]
  );
  const changeTime = useCallback(
    (time) => {
      dispatch({ type: CHANGE_TIME, payload: time });
    },
    [dispatch]
  );

  const toggle = () => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };
  return (
    <div className={`sort-form ${isCollapsed ? "sort-form_collapse" : ""}`}>
      <div className="sort-form__item">
        <Dropdown data={sortData.orderDropdown} changeFilter={changeOrder} />
      </div>
      <div
        className={`sort-form__item sort-form__group sort-form__item_collapse`}
      >
        <Dropdown data={sortData.whatDropdown} changeFilter={changeType} />
        <Dropdown data={sortData.whenDropdown} changeFilter={changeTime} />
        <Dropdown data={sortData.whereDropdown} changeFilter={changePlace} />
      </div>
      <button
        type="button"
        className="sort-form__collapse-button"
        onClick={toggle}
      >
        <i className="icon icon_filter"></i>
      </button>
    </div>
    // </div>
  );
}

export default Sort;
