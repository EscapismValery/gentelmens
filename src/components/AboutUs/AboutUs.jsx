import { useEffect, useState } from 'react';
import styles from './AboutUs.module.scss';

import lineIcon1 from '../../icons/run-line/icon1.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/autoplay';


const defaultValues = {
  length: 0,
  step: 1,
};

const AboutUs = ({title, descr, benefits}) => {
  const [state, setState] = useState(null);
  const delay = 50;

  useEffect(() => {
    setState(() => ({...defaultValues}));
  }, title);

  useEffect(() => {
    const timeoutId = setTimeout(setState, delay, ({...state}) => {
      state.length += state.step;
      if (state.length === 0) {
        state.step = 1;
      } else if (state.length === title.length) {
        state.length = 0 
      } 
      return state;
    });

    return () => clearTimeout(timeoutId);
  });
  

  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container flex`}>
        <h2 className={`${styles.section__title} title-main`}>{title?.slice(0, state?.length)}</h2>
        <div className={`${styles.section__content} flex`}>
          {descr && 
            Array.isArray(descr) 
            ?
            <div className={`${styles.section__descrs} flex`}>
              {descr.map((item, index) => 
                <p className={`${styles.section__descr} text-primary`} id={index}>{item}</p>
              )}
            </div>
            :
            <p className={`${styles.section__descr} text-primary`}>{descr}</p>
          }
          {benefits &&
            <ul className={`${styles.benefits} list-reset flex`}>
              {benefits.map(item => 
                <li className={`${styles.benefits__item} flex`}>
                  <h3 className={`${styles.benefits__title} title`}>{item.title}</h3>
                  <span className={styles.benefits__value}>{item.value}</span>
                </li>
              )}
            </ul>
          }
        </div>
      </div>
      <div className={`${styles.sliderRun}`}>
        <Swiper
          spaceBetween={10}
          loop={true}
          speed={6000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 7,
            }
          }}
        >
          <SwiperSlide>
            <div className={`${styles.slideRun} flex`}>
              <img src={lineIcon1} alt="icon1" />
              <h4 className={`${styles.slide__title} title`}>Мужские стрижки</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slideRun} flex`}>
              <img src={lineIcon1} alt="icon1" />
              <h4 className={`${styles.slide__title} title`}>Мужские стрижки</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slideRun} flex`}>
              <img src={lineIcon1} alt="icon1" />
              <h4 className={`${styles.slide__title} title`}>Мужские стрижки</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slideRun} flex`}>
              <img src={lineIcon1} alt="icon1" />
              <h4 className={`${styles.slide__title} title`}>Мужские стрижки</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slideRun} flex`}>
              <img src={lineIcon1} alt="icon1" />
              <h4 className={`${styles.slide__title} title`}>Мужские стрижки</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slideRun} flex`}>
              <img src={lineIcon1} alt="icon1" />
              <h4 className={`${styles.slide__title} title`}>Мужские стрижки</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slideRun} flex`}>
              <img src={lineIcon1} alt="icon1" />
              <h4 className={`${styles.slide__title} title`}>Мужские стрижки</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slideRun} flex`}>
              <img src={lineIcon1} alt="icon1" />
              <h4 className={`${styles.slide__title} title`}>Мужские стрижки</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export { AboutUs };