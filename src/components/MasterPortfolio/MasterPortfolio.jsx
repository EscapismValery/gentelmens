import styles from './MasterPortfolio.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/autoplay';

const MasterPortfolio = ({images}) => {
  return (
    <section className={`${styles.section}`}>
      <div className='container'>
        <h2 className={`${styles.section__title} subtitle`}>Портфолио</h2>
      </div>
      <div className={`${styles.sliders} flex`}>
        <div className={`${styles.sliderRun}`}>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            speed={18000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {images.slider1.map(item => 
              <SwiperSlide className={`${styles.slide}`}>
                <img className={`${styles.img}`} src={item} alt="Работа" />
              </SwiperSlide>
            )}
            {images.slider1.map(item => 
              <SwiperSlide className={`${styles.slide}`}>
                <img className={`${styles.img}`} src={item} alt="Работа" />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <div className={`${styles.sliderRun}`}>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            speed={18000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            modules={[Autoplay]}
          >
            {images.slider2.map(item => 
              <SwiperSlide className={`${styles.slide}`}>
                <img className={`${styles.img}`} src={item} alt="Работа" />
              </SwiperSlide>
            )}
            {images.slider2.map(item => 
              <SwiperSlide className={`${styles.slide}`}>
                <img className={`${styles.img}`} src={item} alt="Работа" />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export { MasterPortfolio };