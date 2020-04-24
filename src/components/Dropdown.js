import React from "react";

function Dropdown({ data }) {
  const { label, options, defaultState } = data;
  return (
    <label>
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
