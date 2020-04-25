import React from "react";

function Social() {
  return (
    <div className="social">
      <p className="social__header text text_16 text_bold text_sans">
        Мы в соцсетях:
      </p>
      <div className="social__buttons">
        <a className="footer__link social__button" href="/#">
          <i className="icon icon_twitter"></i>
        </a>
        <a className="footer__link social__button" href="/#">
          <i className="icon icon_vk"></i>
        </a>
        <a className="footer__link social__button" href="/#">
          <i className="icon icon_fb"></i>
        </a>
        <a className="footer__link social__button" href="/#">
          <i className="icon icon_ok"></i>
        </a>
      </div>
    </div>
  );
}

export default Social;
