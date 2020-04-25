import React from "react";

function Dropdown({ data }) {
  const { label, options, defaultState } = data;
  return (
    <label className="text text_bold text_sans text_16">
      {label && `${label}: `}
      <select>
        <option value={defaultState}>{defaultState}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Dropdown;
