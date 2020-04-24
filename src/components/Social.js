import React from "react";

function Social() {
  return (
    <div className="social">
      <p className="social__header">Мы в соцсетях:</p>
      <div className="social__buttons">
        <a href="/#" alt="twitter">
          <i className="icon icon_twitter"></i>
        </a>
        <a href="/#" alt="vk">
          <i className="icon icon_vk"></i>
        </a>
        <a href="/#" alt="fb">
          <i className="icon icon_fb"></i>
        </a>
        <a href="/#" alt="ok">
          <i className="icon icon_ok"></i>
        </a>
      </div>
    </div>
  );
}

export default Social;
