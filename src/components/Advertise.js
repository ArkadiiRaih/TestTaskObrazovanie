import React from "react";

function Advertise({ img }) {
  return (
    <div className="advertisement">
      <div className="advertisement__content">
        <div className="container">
          <a
            href="/#"
            className="advertisement__link text text_16 text_bold text_sans"
          >
            реклама на diletant.media
          </a>
          <img src={img} alt="adv" />
        </div>
      </div>
    </div>
  );
}

export default Advertise;
