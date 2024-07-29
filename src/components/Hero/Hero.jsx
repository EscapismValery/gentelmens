import styles from './Hero.module.scss';
import circle from '../../images/circle.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <h1 className={`${styles.section__title} title-main`}>Салон, где рождаются джентельмены</h1>
        <div className={`${styles.wrap}`}>
          <div className={`${styles.top} flex`}>
            <div className={`${styles.top__content} flex`}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="#F2F2F2"/>
                <g clip-path="url(#clip0_170_3036)">
                <path d="M37.57 34.4601V56.9501C37.57 57.4401 37.01 57.8301 36.31 57.8301H27.25C26.56 57.8301 26 57.4401 26 56.9501V34.4601C26 33.9801 26.56 33.5901 27.25 33.5901H36.31C37.01 33.5901 37.57 33.9801 37.57 34.4601Z" fill="#57A8FF"/>
                <path d="M53.0722 23.88V56.95C53.0722 57.44 52.5122 57.83 51.8122 57.83H42.7522C42.0622 57.83 41.4922 57.44 41.4922 56.95V23.88C41.4922 23.39 42.0622 23 42.7522 23H51.8122C52.5122 23 53.0722 23.39 53.0722 23.88Z" fill="#57A8FF"/>
                <path d="M26 50.28C28.99 49.79 33.02 49.06 37.57 48.03V56.94C37.57 57.43 37.01 57.82 36.31 57.82H27.25C26.56 57.82 26 57.43 26 56.94V50.28Z" fill="#D9D9D9"/>
                <path d="M41.4922 46.4201C45.2622 45.4201 49.2022 44.2301 53.0722 42.8401V56.9401C53.0722 57.4301 52.5122 57.8201 51.8122 57.8201H42.7522C42.0622 57.8201 41.4922 57.4301 41.4922 56.9401V46.4201Z" fill="#D9D9D9"/>
                </g>
                <defs>
                <clipPath id="clip0_170_3036">
                <rect width="27.07" height="34.82" fill="white" transform="translate(26 23)"/>
                </clipPath>
                </defs>
              </svg>
              <h2 className={`${styles.top__title} title`}>Сертификаты для наших клиентов</h2>
              <p className={`${styles.top__descr} text-primary`}>Тут будет наш текст, который</p>
            </div>
            <p className={`${styles.top__sert} title`}>Сертификат</p>
          </div>
          <div className={`${styles.top} flex`}>
            <div className={`${styles.top__content} flex`}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="#F2F2F2"/>
                <g clip-path="url(#clip0_170_3036)">
                <path d="M37.57 34.4601V56.9501C37.57 57.4401 37.01 57.8301 36.31 57.8301H27.25C26.56 57.8301 26 57.4401 26 56.9501V34.4601C26 33.9801 26.56 33.5901 27.25 33.5901H36.31C37.01 33.5901 37.57 33.9801 37.57 34.4601Z" fill="#57A8FF"/>
                <path d="M53.0722 23.88V56.95C53.0722 57.44 52.5122 57.83 51.8122 57.83H42.7522C42.0622 57.83 41.4922 57.44 41.4922 56.95V23.88C41.4922 23.39 42.0622 23 42.7522 23H51.8122C52.5122 23 53.0722 23.39 53.0722 23.88Z" fill="#57A8FF"/>
                <path d="M26 50.28C28.99 49.79 33.02 49.06 37.57 48.03V56.94C37.57 57.43 37.01 57.82 36.31 57.82H27.25C26.56 57.82 26 57.43 26 56.94V50.28Z" fill="#D9D9D9"/>
                <path d="M41.4922 46.4201C45.2622 45.4201 49.2022 44.2301 53.0722 42.8401V56.9401C53.0722 57.4301 52.5122 57.8201 51.8122 57.8201H42.7522C42.0622 57.8201 41.4922 57.4301 41.4922 56.9401V46.4201Z" fill="#D9D9D9"/>
                </g>
                <defs>
                <clipPath id="clip0_170_3036">
                <rect width="27.07" height="34.82" fill="white" transform="translate(26 23)"/>
                </clipPath>
                </defs>
              </svg>
              <h2 className={`${styles.top__title} title`}>Сертификаты для наших клиентов</h2>
              <p className={`${styles.top__descr} text-primary`}>Тут будет наш текст, который</p>
            </div>
            <p className={`${styles.top__sert} title`}>Сертификат</p>
          </div>
          <div className={`${styles.center}`}>
            <div className={`${styles.center__head}`}>
              {/* ТУТ АНИМАЦИЯ С ГОЛОВОЙ */}
            </div>
            <div className={`${styles.center__bottom} flex`}>
              <p className={`${styles.center__descr} text-primary`}>Тут будет наш текст, который будет призывать к стрижке, уникальный текст для пользователей</p>
              <Link to={'/services'} className={`${styles.center__btn} btn-reset btn text-primary`}>Подобрать&nbsp;услугу</Link>
              {/* <button className={`${styles.center__btn} btn-reset btn text-primary`}>Подобрать&nbsp;услугу</button> */}
            </div>
          </div>
          <div className={`${styles.bottom} flex`}>
            <img src={circle} alt="circle" />
            <h2 className={`${styles.bottom__title} title`}>Стрижка, больше, чем реинкарнация</h2>
          </div>
          <div className={`${styles.bottom} flex`}>
            <img src={circle} alt="circle" />
            <h2 className={`${styles.bottom__title} title`}>Стрижка, больше, чем реинкарнация</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };