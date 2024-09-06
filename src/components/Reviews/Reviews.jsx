import styles from './Reviews.module.scss';
import reviewsInfo from '../../database/reviews';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/mousewheel';

const Reviews = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__top} flex`}>
        <h2 className={`${styles.section__title} subtitle`}>Отзывы наших клиентов</h2>
        <p className={`${styles.section__descr} text-primary`}>За 3 года работы мы подстригли более 100 000 мужчин и обзавелись большим количеством отзывов </p>
        <button className={`${styles.section__btn} btn-reset btn text-primary`}>Записаться к нам</button>
      </div>
      <Swiper
        spaceBetween={10}
        modules={[Mousewheel, FreeMode]}
        mousewheel={true}
        freeMode={true}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 1.4,
          },
          1440: {
            slidesPerView: 4.2,
          }
        }}
      >
        {reviewsInfo.map((item, index) => 
          <SwiperSlide> 
            <div className={`${styles.review}`} id={index}>
              <div className={`${styles.review__top} flex`}>
                <img src={item.img} alt='отзыв о барбершопе Gentelmens' />
                <h3 className={`${styles.review__name} title`}>{item.name}</h3>
              </div>
              <p className={`${styles.review__text} text-primary`}>{item.text}</p>
              <a href={item.href} className={`${styles.review__link} text-primary flex`}>
                Flamp {item.assesFlamp}
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.82353 1H14.1765M14.1765 1V13.3529M14.1765 1L1 14.1765" stroke="url(#paint0_linear_2267_4268)" stroke-width="2" stroke-miterlimit="10"/>
                  <defs>
                  <linearGradient id="paint0_linear_2267_4268" x1="-4.96264" y1="-9.38914" x2="23.1942" y2="-3.87926" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#171111"/>
                  <stop offset="0.663849" stop-color="#B07B58"/>
                  </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  );
};

export { Reviews };