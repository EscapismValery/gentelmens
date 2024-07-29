import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../logo.svg';

const Footer = () => {
  return (
    <header className={styles.footer}>
      <div className={`${styles.footer__container} container flex`}>
        <div className={`${styles.footer__left}`}>
          <Link to={"/"} className={styles.footer__logo}>
            <img src={logo} alt="logo" />
          </Link>
          <p className={`${styles.footer__copy} text-primary`}>© Все права защищены 2024</p>
        </div>
        <div className={`${styles.footer__info} flex`}>
          <nav className={`${styles.nav}`}>
            <h3 className={`${styles.footer__title} title`}>Навигация</h3>
            <ul className={`${styles.footer__list} list-reset flex`}>
              <li className={styles.nav__item}>
                <Link to={"/about-us"} className={`${styles.nav__link} text-primary`}>О нас</Link>
              </li>
              <li className={styles.nav__item}>
                <Link to={"/services"} className={`${styles.nav__link} text-primary`}>Услуги</Link>
              </li>
              <li className={styles.nav__item}>
                <Link to={"/masters"} className={`${styles.nav__link} text-primary`}>Мастера</Link>
              </li>
              <li className={styles.nav__item}>
                <Link to={"/portfolio"} className={`${styles.nav__link} text-primary`}>Портфолио</Link>
              </li>
              <li className={styles.nav__item}>
                <Link to={"/shop"} className={`${styles.nav__link} text-primary`}>Магазин</Link>
              </li>
              <li className={styles.nav__item}>
                <Link to={"/certificates"} className={`${styles.nav__link} text-primary`}>Сертификаты</Link>
              </li>
              <li className={styles.nav__item}>
                <Link to={"/contacts"} className={`${styles.nav__link} text-primary`}>Контакты</Link>
              </li>
            </ul>
          </nav>
          <nav className={`${styles.nav}`}>
            <h3 className={`${styles.footer__title} title`}>Поддержка</h3>
            <ul className={`${styles.footer__list} list-reset flex`}>
              <li className={styles.nav__item}>
                <Link to={"/about-us"} className={`${styles.nav__link} text-primary`}>Политика конфиденциальности</Link>
              </li>
              <li className={styles.nav__item}>
                <Link to={"/about-us"} className={`${styles.nav__link} text-primary`}>Правила посещения</Link>
              </li>
              <li className={styles.nav__item}>
                <Link to={"/about-us"} className={`${styles.nav__link} text-primary`}>Договор оферты</Link>
              </li>
              <li className={styles.nav__item}>
                <Link to={"/about-us"} className={`${styles.nav__link} text-primary`}>Реквизиты</Link>
              </li>
            </ul>
          </nav>
          <nav className={`${styles.nav}`}>
            <h3 className={`${styles.footer__title} title`}>Свяжитесь с нами</h3>
            <ul className={`${styles.footer__list} list-reset flex`}>
              <li className={styles.nav__item}>
                <a href='tel:+79005555554' className={`${styles.nav__link} text-primary`}>+7 ( 900 ) 555 55 54</a>
              </li>
              <li className={styles.nav__item}>
                <a href='mailto:info@gentelments.ru' className={`${styles.nav__link} text-primary`}>info@gentelments.ru</a>
              </li>
              <li className={styles.nav__item}>
                <p className={`text-primary`}>Россия, Пермь, ул.<br></br> Николая островского, 59</p>
              </li>
            </ul>
          </nav>
          <nav className={`${styles.nav}`}>
            <h3 className={`${styles.footer__title} title`}>Cледите за нами</h3>
            <ul className={`${styles.socials} list-reset flex`}>
              <li className={`${styles.socials__item}`}>
                <a href="#" className={`${styles.socials__link} ${styles.socials__link_telegram}`}>
                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="46" height="46" rx="23" fill="white"/>
                    <path d="M30.0513 16.1236C30.0513 16.1236 31.6237 15.5176 31.4922 16.9892C31.4489 17.5952 31.0559 19.7164 30.7499 22.0104L29.7015 28.8064C29.7015 28.8064 29.6141 29.8019 28.8277 29.9751C28.0416 30.1479 26.8622 29.3692 26.6436 29.196C26.4688 29.066 23.3675 27.118 22.2755 26.166C21.9695 25.906 21.6198 25.3868 22.3192 24.7808L26.9055 20.452C27.4296 19.9328 27.9538 18.7208 25.7697 20.1924L19.6539 24.3044C19.6539 24.3044 18.9549 24.7376 17.6447 24.348L14.8049 23.482C14.8049 23.482 13.7566 22.8328 15.5476 22.1836C19.9162 20.1492 25.2893 18.0716 30.0504 16.1236H30.0513Z" fill="#151515"/>
                  </svg>
                </a>
              </li>
              <li className={`${styles.socials__item}`}>
                <a href="#" className={`${styles.socials__link} ${styles.socials__link_vk}`}>
                  <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="47" height="46" rx="23" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.6922 25.4118C31.6922 25.4118 33.3901 27.0878 33.8101 27.8634C33.8182 27.8746 33.8246 27.887 33.829 27.9001C34.0001 28.1866 34.0421 28.4112 33.9581 28.5771C33.8164 28.851 33.3365 28.9885 33.1738 29H30.1729C29.9639 29 29.5292 28.9454 29 28.5802C28.5958 28.2979 28.1936 27.833 27.8041 27.3785C27.2224 26.7037 26.7194 26.1181 26.2102 26.1181C26.1458 26.1179 26.082 26.1286 26.0212 26.1496C25.6358 26.2713 25.1465 26.8202 25.1465 28.2821C25.1465 28.7397 24.7853 29 24.5323 29H23.1578C22.6895 29 20.2514 28.8363 18.0895 26.5578C15.4403 23.7682 13.061 18.1723 13.0379 18.123C12.8898 17.7609 13.2006 17.5636 13.5366 17.5636H16.5669C16.9733 17.5636 17.1056 17.8092 17.198 18.0296C17.3051 18.2825 17.702 19.2942 18.353 20.4308C19.4072 22.28 20.0551 23.0325 20.5727 23.0325C20.67 23.0328 20.7656 23.0075 20.8499 22.9591C21.5261 22.5875 21.4001 20.1737 21.3686 19.6762C21.3686 19.5797 21.3676 18.5984 21.0211 18.124C20.7733 17.784 20.3512 17.6517 20.096 17.6035C20.1643 17.5048 20.3092 17.3537 20.495 17.2645C20.9581 17.0336 21.7949 17 22.6255 17H23.0864C23.9873 17.0126 24.2204 17.0703 24.548 17.1532C25.2074 17.3107 25.22 17.7378 25.1623 19.1924C25.1455 19.608 25.1276 20.0761 25.1276 20.6271C25.1276 20.7446 25.1224 20.8758 25.1224 21.0091C25.1024 21.7553 25.0762 22.5959 25.6033 22.9412C25.6716 22.9838 25.7506 23.0063 25.8311 23.0063C26.0138 23.0063 26.5609 23.0063 28.0445 20.4613C28.6955 19.3372 29.1995 18.0117 29.2342 17.912C29.2636 17.8564 29.3518 17.7 29.4589 17.637C29.535 17.5965 29.6204 17.5763 29.7067 17.5783H33.2714C33.6599 17.5783 33.9235 17.637 33.9749 17.784C34.061 18.0222 33.9581 18.7495 32.3306 20.9493C32.0566 21.3155 31.8161 21.6325 31.6051 21.9096C30.1298 23.8448 30.1298 23.9425 31.6922 25.4118Z" fill="#151515"/>
                  </svg>
                </a>
              </li>
              <li className={`${styles.socials__item}`}>
                <a href="#" className={`${styles.socials__link} ${styles.socials__link_youtube}`}>
                  <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="47" height="46" rx="23" fill="white"/>
                    <path d="M33.95 16.7321C33.675 15.6071 32.9875 14.8036 32.025 14.4821C30.375 14 23.3625 14 23.3625 14C23.3625 14 16.4875 14 14.7 14.4821C13.7375 14.8036 13.05 15.6071 12.775 16.7321C12.5 18.8214 12.5 23 12.5 23C12.5 23 12.5 27.1786 12.9125 29.2679C13.1875 30.3929 13.875 31.1964 14.8375 31.5179C16.4875 32 23.5 32 23.5 32C23.5 32 30.375 32 32.1625 31.5179C33.125 31.1964 33.8125 30.3929 34.0875 29.2679C34.5 27.1786 34.5 23 34.5 23C34.5 23 34.5 18.8214 33.95 16.7321ZM21.3 26.8571V19.1429L27.075 23L21.3 26.8571Z" fill="#151515"/>
                  </svg>
                </a>
              </li>
              <li className={`${styles.socials__item}`}>
                <a href="#" className={`${styles.socials__link} ${styles.socials__link_dzen}`}>
                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="46" height="46" rx="23" fill="white"/>
                    <path d="M33.0366 22.5128C33.0384 22.5128 33.0398 22.5128 33.0416 22.5128C33.1695 22.5128 33.2914 22.4566 33.3781 22.3582C33.4661 22.2583 33.5096 22.1243 33.4982 21.9888C33.0379 16.6852 29.03 12.4847 23.9673 12.0015C23.8389 11.991 23.7096 12.0347 23.6143 12.1274C23.5189 12.2196 23.4657 12.3497 23.4671 12.4857C23.5469 19.5342 24.4344 22.4144 33.0366 22.5128ZM33.0366 23.4868C24.4344 23.5853 23.5473 26.4655 23.4676 33.514C23.4662 33.6499 23.5194 33.78 23.6147 33.8722C23.7 33.9544 23.8114 34 23.926 34C23.9397 34 23.954 33.9995 23.9677 33.9981C29.0305 33.5149 33.0384 29.3149 33.4982 24.0108C33.5096 23.8754 33.4666 23.7414 33.3781 23.6415C33.2896 23.5416 33.1663 23.4921 33.0366 23.4868ZM22.002 12.0039C16.9553 12.501 12.9602 16.7005 12.5023 21.9898C12.4908 22.1252 12.5339 22.2592 12.6224 22.3591C12.709 22.4576 12.8314 22.5133 12.9588 22.5133C12.9607 22.5133 12.9625 22.5133 12.9643 22.5133C21.5381 22.41 22.4233 19.5313 22.504 12.4876C22.5054 12.3517 22.4517 12.221 22.3564 12.1288C22.2601 12.0366 22.1313 11.9915 22.002 12.0039ZM12.9639 23.4863C12.8213 23.4695 12.7095 23.5406 12.6219 23.6405C12.5339 23.7404 12.4903 23.8744 12.5018 24.0098C12.9598 29.2991 16.9553 33.4986 22.002 33.9957C22.0162 33.9971 22.0309 33.9976 22.0451 33.9976C22.1597 33.9976 22.2707 33.9525 22.3559 33.8703C22.4513 33.7781 22.5049 33.6475 22.5035 33.5116C22.4228 26.4684 21.5381 23.5896 12.9639 23.4863Z" fill="#151515"/>
                  </svg>
                </a>
              </li>
              <li className={`${styles.socials__item}`}>
                <a href="#" className={`${styles.socials__link} ${styles.socials__link_odnoklass}`}>
                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="46" height="46" rx="23" fill="white"/>
                    <path d="M25.3572 27.9847C26.6341 27.695 27.7612 27.2239 28.7739 26.5933L28.7299 26.619C29.1965 26.3175 29.5 25.806 29.5 25.2258C29.5 24.3065 28.7383 23.5614 27.7986 23.5614C27.4726 23.5614 27.1681 23.6512 26.9096 23.8061L26.9171 23.8015C25.8078 24.4899 24.4578 24.8977 23.0103 24.8977C21.5628 24.8977 20.2119 24.4889 19.0736 23.7841L19.1036 23.8015C18.8469 23.6411 18.5339 23.5458 18.1976 23.5458C17.5961 23.5458 17.0677 23.8519 16.7651 24.313L16.7614 24.3194C16.7614 24.3194 16.7614 24.3194 16.7614 24.324C16.5974 24.5751 16.5 24.8812 16.5 25.2103C16.5 25.7996 16.8139 26.3165 17.286 26.6117L17.2926 26.6153C18.2613 27.2212 19.3884 27.6914 20.5922 27.9654L20.6653 27.9792L17.4153 31.155C17.1043 31.4547 16.9113 31.8708 16.9113 32.3319C16.9113 32.7801 17.094 33.1861 17.3891 33.4831L17.4172 33.5106C17.7226 33.8103 18.1451 33.9954 18.6117 33.9954C19.0783 33.9954 19.5008 33.8103 19.8062 33.5106L23.0112 30.3906L26.1966 33.5124C26.5039 33.813 26.9292 34 27.3986 34C28.3373 34 29.0981 33.2558 29.0981 32.3374C29.0981 31.8782 28.9079 31.463 28.6006 31.1614L25.3572 27.9847ZM23.0103 23.3542C26.2125 23.3515 28.8077 20.8108 28.8077 17.6771C28.8077 14.5416 26.2097 12 23.0047 12C19.7997 12 17.2017 14.5416 17.2017 17.6771V17.6826C17.2083 20.8163 19.8062 23.3542 23.0103 23.3542ZM23.0103 15.3271C24.3378 15.3271 25.4134 16.3793 25.4134 17.678C25.4134 18.9768 24.3378 20.029 23.0103 20.029C21.6846 20.029 20.6091 18.9786 20.6072 17.6817C20.6072 17.6808 20.6072 17.6808 20.6072 17.6799C20.6072 16.3811 21.6828 15.328 23.0103 15.3271Z" fill="#151515"/>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Footer };