import styles from './SalonReviews.module.scss';
import img1 from '../../images/salon/1.jpg';
import img2 from '../../images/salon/2.jpg';
import img3 from '../../images/salon/3.jpg';
import img4 from '../../images/salon/4.jpg';
import img5 from '../../images/salon/5.jpg';
import img6 from '../../images/salon/6.jpg';
import img10 from '../../images/salon/10.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

const SalonReviews = () => {
  return (
    <section className={styles.section}>
      <h2 className={`${styles.section__title} subtitle`}>наш салон</h2>
      <Swiper
        className={`${styles.salonSlider}`}
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        modules={[EffectCoverflow]}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            coverflowEffect: {
              rotate: -50,
              stretch: 20,
              depth: 240,
              modifier: 1,
              slideShadows: true,
            }
          },
          768: {
            slidesPerView: 2,
            coverflowEffect: {
              rotate: -40,
              stretch: 20,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }
          },
          1440: {
            slidesPerView: 2.2,
            coverflowEffect: {
              rotate: -25,
              stretch: 0,
              depth: 220,
              modifier: 1,
              slideShadows: true,
            }
          },
          1921: {
            slidesPerView: 2.5,
            coverflowEffect: {
              rotate: -25,
              stretch: 0,
              depth: 220,
              modifier: 1,
              slideShadows: true,
            }
          }
        }}
      >
        <SwiperSlide className={`${styles.salonSlide} salonSlide`}>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide className={`${styles.salonSlide} salonSlide`}>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide className={`${styles.salonSlide} salonSlide`}>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide className={`${styles.salonSlide} salonSlide`}>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide className={`${styles.salonSlide} salonSlide`}>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide className={`${styles.salonSlide} salonSlide`}>
          <img src={img6} />
        </SwiperSlide>
      </Swiper>
      <div className={`container`}>
        <div className={`${styles.wrap} flex`}>
          <ul className={`${styles.reviews} list-reset flex`}>
            <li className={`${styles.reviews__item} flex`}>
              <span className={`${styles.reviews__number} flex`}>5.0</span>
              <h4 className={`${styles.reviews__company} title`}>2ГИС</h4>
            </li>
            <li className={`${styles.reviews__item} flex`}>
              <span className={`${styles.reviews__number} flex`}>5.0</span>
              <h4 className={`${styles.reviews__company} title`}>Яндекс</h4>
            </li>
            <li className={`${styles.reviews__item} flex`}>
              <span className={`${styles.reviews__number} flex`}>5.0</span>
              <h4 className={`${styles.reviews__company} title`}>Flamp</h4>
            </li>
            <li className={`${styles.reviews__item} flex`}>
              <span className={`${styles.reviews__number} flex`}>5.0</span>
              <h4 className={`${styles.reviews__company} title`}>Zoon</h4>
            </li>
            <li className={`${styles.reviews__item} flex`}>
              <span className={`${styles.reviews__number} flex`}>5.0</span>
              <h4 className={`${styles.reviews__company} title`}>Google</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { SalonReviews };