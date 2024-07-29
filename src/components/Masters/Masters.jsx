import styles from './Masters.module.scss';
import mastersInfo from '../../database/masters';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/mousewheel';
import { Link } from 'react-router-dom';

const Masters = ({isSlider}) => {
  return (
    <section className={styles.section}>
      <h2 className={`${styles.section__title} subtitle`}>Мастера</h2>

      {isSlider 

        ? 

        <Swiper
          spaceBetween={10}
          slidesPerView={5.5}
          modules={[Mousewheel, FreeMode]}
          mousewheel={true}
          freeMode={true}
          
        >
          {mastersInfo.map((item, index) => 
            <SwiperSlide> 
              <Link to={item.href} className={`${styles.master}`} id={index}>
                <div className={`${styles.master__img}`}>
                  <img className={styles.master__imgPrev} src={item.img} alt={item.name} />
                  <img className={styles.master__imgHover} src={item.imgHover} alt={item.name} />
                  <div className={`${styles.master__imgBtns} flex`}>
                    <button className={`${styles.master__imgBtn} btn-reset btn text-primary`}>Записаться</button>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="54" height="54" rx="27" fill="white"/>
                      <g clip-path="url(#clip0_2201_2383)">
                      <path d="M21.1165 20.4141H33.4694M33.4694 20.4141V32.767M33.4694 20.4141L20.293 33.5905" stroke="url(#paint0_linear_2201_2383)" stroke-width="2" stroke-miterlimit="10"/>
                      </g>
                      <defs>
                      <linearGradient id="paint0_linear_2201_2383" x1="14.3303" y1="10.0249" x2="42.4872" y2="15.5348" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#171111"/>
                      <stop offset="0.663849" stop-color="#B07B58"/>
                      </linearGradient>
                      <clipPath id="clip0_2201_2383">
                      <rect width="14" height="14" fill="white" transform="translate(20 20)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <h3 className={`${styles.master__name} title`}>{item.name}</h3>
                <p className={`${styles.master__pos} text-primary`}>{item.level} барбер</p>
              </Link>
            </SwiperSlide>
          )}
        </Swiper>

        :

        <div className={`${styles.masters__container} container`}>
          <ul className={`${styles.masters} list-reset`}>
            {mastersInfo.map((item, index) => 
              <Link to={item.href} className={`${styles.master}`} id={index}>
                <div className={`${styles.master__img}`}>
                  <img className={styles.master__imgPrev} src={item.img} alt={item.name} />
                  <img className={styles.master__imgHover} src={item.imgHover} alt={item.name} />
                  <div className={`${styles.master__imgBtns} flex`}>
                    <button className={`${styles.master__imgBtn} btn-reset btn text-primary`}>Записаться</button>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="54" height="54" rx="27" fill="white"/>
                      <g clip-path="url(#clip0_2201_2383)">
                      <path d="M21.1165 20.4141H33.4694M33.4694 20.4141V32.767M33.4694 20.4141L20.293 33.5905" stroke="url(#paint0_linear_2201_2383)" stroke-width="2" stroke-miterlimit="10"/>
                      </g>
                      <defs>
                      <linearGradient id="paint0_linear_2201_2383" x1="14.3303" y1="10.0249" x2="42.4872" y2="15.5348" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#171111"/>
                      <stop offset="0.663849" stop-color="#B07B58"/>
                      </linearGradient>
                      <clipPath id="clip0_2201_2383">
                      <rect width="14" height="14" fill="white" transform="translate(20 20)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <h3 className={`${styles.master__name} title`}>{item.name}</h3>
                <p className={`${styles.master__pos} text-primary`}>{item.level} барбер</p>
              </Link>
            )}
          </ul>
        </div>
      }
    </section>
  );
};

export { Masters };