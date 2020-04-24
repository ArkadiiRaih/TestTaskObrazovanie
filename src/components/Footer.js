import React from "react";
import Logo from "./Logo";
import Social from "./Social";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__section">
          <Logo />
          <Social />
        </div>
        <div className="footer__section">
          <div className="footer__column">
            <h6 className="footer__title footer__title_uppercase">
              рубрикатор
            </h6>
            <ul className="list">
              <li className="list__item list__item_iconed">
                <i className="icon icon_book"></i>
                <span>cборники</span>
              </li>
              <li className="list__item list__item_iconed">
                <i className="icon icon_page"></i>
                <span>статьи</span>
              </li>
              <li className="list__item list__item_iconed">
                <i className="icon icon_crown"></i>
                <span>тесты</span>
              </li>
              <li className="list__item list__item_iconed">
                <i className="icon icon_journal"></i>
                <span>журнал</span>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h6 className="footer__title footer__title_uppercase">Контакты</h6>
            <ul className="list">
              <li className="list__item">
                <span>по вопросам подписки</span>
                <a
                  className="footer__link"
                  href="mailto:podpiska@diletant.media"
                >
                  podpiska@diletant.media
                </a>
              </li>
              <li className="list__item">
                <span>по общим вопросам</span>
                <a className="footer__link" href="mailto:info@diletnant.media">
                  info@diletnant.media
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h6 className="footer__title footer__title_uppercase">Инфо</h6>
            <ul>
              <li>правила комментирования</li>
              <li>cookie policy / GDPR</li>
              <li>реклама на сайте</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__notice">
        <div className="footer__section footer__section_optional">
          <h6 className="footer__title">
            Нашли ошибку или опечатку ?<br /> Выделите ее и нажмите Ctrl+Enter
          </h6>
        </div>
      </div>
      <div className="footer__copyrights">
        <div className="footer__section">
          <div className="footer__credits">
            <p>
              Свидетельство о&nbsp;регистрации СМИ Эл №ФС77-62623 выдано
              федеральной службой по&nbsp;надзору в&nbsp;сфере связи,
              информационных технологий и&nbsp;массовых коммуникаций
              (Роскомнадзор) 31.07.2015 При полном или частичном использовании
              материалов ссылка на&nbsp;«Дилетант» обязательна. Для сетевых
              изданий обязательна гиперссылка на&nbsp;сайт «Дилетант»&nbsp;—
              diletant.media. Разработанно в{" "}
            </p>
            <p>Главный редактор: Алексей Соломин</p>
          </div>
          <div className="footer__age">
            <i className="icon icon_age"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
