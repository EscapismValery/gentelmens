import styles from './Gallery.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/autoplay';

import row1img1 from '../../images/gallery/row1/1.jpg';
import row1img2 from '../../images/gallery/row1/2.jpg';

import row2img1 from '../../images/gallery/row2/1.jpg';
import row2img2 from '../../images/gallery/row2/2.jpg';
import row2img3 from '../../images/gallery/row2/3.jpg';

import row3img1 from '../../images/gallery/row3/1.jpg';
import row3img2 from '../../images/gallery/row3/2.jpg';
import row3img3 from '../../images/gallery/row3/3.jpg';

import row4img1 from '../../images/gallery/row4/1.jpg';
import row4img2 from '../../images/gallery/row4/2.jpg';

const Gallery = () => {
  return (
    <section className={`${styles.section} flex`}>
      <div className={`${styles.sliderRun}`}>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          speed={18000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row1img1} alt="1" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row1img2} alt="2" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row1img1} alt="1" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row1img2} alt="2" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={`${styles.sliderRun}`}>
        <Swiper
          spaceBetween={10}
          slidesPerView={3.2}
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
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row2img1} alt="1" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row2img2} alt="2" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row2img3} alt="3" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row2img1} alt="1" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row2img2} alt="2" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row2img3} alt="3" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={`${styles.sliderRun}`}>
        <Swiper
          spaceBetween={10}
          slidesPerView={3.3}
          loop={true}
          speed={18000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row3img1} alt="1" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row3img2} alt="2" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row3img3} alt="3" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row3img1} alt="1" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row3img2} alt="2" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row3img3} alt="3" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={`${styles.sliderRun}`}>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
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
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row4img1} alt="1" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row4img2} alt="2" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row4img1} alt="1" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row4img2} alt="2" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row4img1} alt="1" />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide}`}>
            <img className={`${styles.img}`} src={row4img2} alt="2" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export { Gallery };