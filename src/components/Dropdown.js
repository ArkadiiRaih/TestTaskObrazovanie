import React, { useState } from "react";

function Dropdown({ data, changeFilter }) {
  const { label, options, defaultState } = data;
  let [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const [currentOption, setCurrentOption] = useState(defaultState);

  const changeOption = (e) => {
    const newOption = e.target.dataset.option;
    const text = e.target.textContent;
    changeFilter(newOption);
    toggle();
    setCurrentOption(text);
  };

  return (
    <div
      className="select-wrapper"
      onBlur={() => isOpen && toggle()}
      onClick={toggle}
    >
      {label ? (
        <p className="select-label text text_bold text_sans text_16">
          {label}:&nbsp;
        </p>
      ) : null}
      <div className={`select ${isOpen ? "select_opened" : ""}`}>
        <button className="select__trigger text text_13 text_primary text_bold text_sans text_center">
          {currentOption}
          <i className="select__open-icon">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9.89949L9.94975 4.94975H0.0502526L5 9.89949Z"
                fill="currentColor"
              />
            </svg>
          </i>
        </button>
        <div className="select__options" onClick={changeOption}>
          <span
            key={defaultState}
            data-option=""
            className="select__option text text_13 text_secondary text_bold text_sans text_center"
          >
            {defaultState}
          </span>
          {options.map((option) => (
            <span
              key={option}
              data-option={option}
              className={`select__option text text_13 ${
                option == currentOption ? "text_white" : "text_secondary"
              } text_bold text_sans text_center`}
            >
              {option}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
  // return (
  //   <>
  //     {label ? (
  //       <p className="text text_bold text_sans text_16">{label}:&nbsp;</p>
  //     ) : null}
  //     <div className={`dropdown ${open ? "dropdown_open" : ""}`}>
  //       <div className="dropdown__input">
  //         <p className="text text_13 text_primary text_bold text_sans text_center">
  //           {defaultState}
  //         </p>
  //         <button className="dropdown__toggler" onClick={toggle}>
  //           <i className="icon icon_open">+</i>
  //         </button>
  //         <ul className="dropdown__options">
  //           {options.map((option) => (
  //             <li className="dropdow__option" key={option}>
  //               {option}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default Dropdown;
