import React from "react";
// import Logo from "./Logo";
import Social from "./Social";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__section footer__section_column footer__socials">
          <a className="footer__link footer__logo" href="/#" target="_blank">
            <i className="icon icon_logo"></i>
          </a>
          <Social />
        </div>
        <div className="footer__section">
          <div className="footer__column">
            <h6 className="footer__title footer__title_uppercase text text_m text_style-bold text_sans">
              рубрикатор
            </h6>
            <ul className="text text_s text_style-regular text_sans">
              <li>
                <a className="footer__link" href="/#" target="_blank">
                  <i className="icon icon_s icon_book"></i>
                  <span>cборники</span>
                </a>
              </li>
              <li>
                <i className="icon icon_s icon_page"></i>
                <span>
                  <a className="footer__link" href="/#" target="_blank">
                    статьи
                  </a>
                </span>
              </li>
              <li>
                <i className="icon icon_s icon_crown"></i>
                <span>
                  <a className="footer__link" href="/#" target="_blank">
                    тесты
                  </a>
                </span>
              </li>
              <li>
                <i className="icon icon_s icon_journal"></i>
                <span>
                  <a className="footer__link" href="/#" target="_blank">
                    журнал
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h6 className="footer__title footer__title_uppercase text text_m text_style-bold text_sans">
              Контакты
            </h6>
            <ul className="text text_s text_style-regular text_sans">
              <li>
                <span>по вопросам подписки</span>
                <br />
                <a
                  className="footer__mail"
                  href="mailto:podpiska@diletant.media"
                >
                  podpiska@diletant.media
                </a>
              </li>
              <li>
                <span>по общим вопросам</span>
                <br />
                <a className="footer__mail" href="mailto:info@diletnant.media">
                  info@diletnant.media
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h6 className="footer__title footer__title_uppercase text text_m text_style-bold text_sans">
              Инфо
            </h6>
            <ul className="text text_s text_style-regular text_sans">
              <li>
                <a className="footer__link" href="/#" target="_blank">
                  правила комментирования
                </a>
              </li>
              <li>
                <a className="footer__link" href="/#" target="_blank">
                  cookie policy / GDPR
                </a>
              </li>
              <li>
                <a className="footer__link" href="/#" target="_blank">
                  реклама на сайте
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__notice">
        <div className="footer__section footer__section_optional">
          <h6 className="footer__title text text_m text_style-bold text_sans">
            Нашли ошибку или опечатку ?<br /> Выделите ее и нажмите Ctrl+Enter
          </h6>
        </div>
      </div>
      <div className="footer__copyrights">
        <div className="container">
          <div className="footer__section">
            <div className="footer__credits">
              <p className="text text_xs text_style-regular text_sans">
                Свидетельство о&nbsp;регистрации СМИ Эл №ФС77-62623 выдано
                федеральной службой по&nbsp;надзору в&nbsp;сфере связи,
                информационных технологий и&nbsp;массовых коммуникаций
                (Роскомнадзор) 31.07.2015 При полном или частичном использовании
                материалов ссылка на&nbsp;«Дилетант» обязательна. Для сетевых
                изданий обязательна гиперссылка на&nbsp;сайт «Дилетант»&nbsp;—
                diletant.media.
              </p>
              <p className="text text_xs text_style-regular text_sans">
                Главный редактор: Алексей Соломин
              </p>
            </div>
            <div className="footer__age">
              <i className="icon icon_age"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
