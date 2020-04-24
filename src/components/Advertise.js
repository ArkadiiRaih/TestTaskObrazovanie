import React from "react";

function Advertise({ img }) {
  return (
    <div className="advertisement">
      <a href="/#">advertisement on diletant.media</a>
      <img src={img} alt="adv" />
    </div>
  );
}

export default Advertise;
