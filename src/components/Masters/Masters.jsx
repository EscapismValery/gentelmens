import styles from './Masters.module.scss';
import AlexeyImg from '../../images/masters/demo/Alexey.jpg';
import AlexeyImgHover from '../../images/masters/demo/AlexeyHover.jpg';
import { useState } from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Mousewheel } from 'swiper/modules';

// import 'swiper/scss';
// import 'swiper/scss/free-mode';
// import 'swiper/scss/mousewheel';

const Masters = () => {
  const mastersInfo = [
    {
      name: 'Алексей Никифоров',
      pos: 'Старший барбер',
      direction: [
        'Бритье',
        'Стрижка',
        'Моделинг',
      ],
      img: AlexeyImg,
      imgHover: AlexeyImgHover,
      href: '/',
    },
    {
      name: 'Алексей Никифоров',
      pos: 'Старший барбер',
      direction: [
        'Бритье',
        'Стрижка',
        'Моделинг',
      ],
      img: AlexeyImg,
      imgHover: AlexeyImgHover,
      href: '/',
    },
    {
      name: 'Алексей Никифоров',
      pos: 'Старший барбер',
      direction: [
        'Бритье',
        'Стрижка',
        'Моделинг',
      ],
      img: AlexeyImg,
      imgHover: AlexeyImgHover,
      href: '/',
    },
    {
      name: 'Алексей Никифоров',
      pos: 'Старший барбер',
      direction: [
        'Бритье',
        'Стрижка',
        'Моделинг',
      ],
      img: AlexeyImg,
      imgHover: AlexeyImgHover,
      href: '/',
    },
    {
      name: 'Алексей Никифоров',
      pos: 'Старший барбер',
      direction: [
        'Бритье',
        'Стрижка',
        'Моделинг',
      ],
      img: AlexeyImg,
      imgHover: AlexeyImgHover,
      href: '/',
    },
    {
      name: 'Алексей Никифоров',
      pos: 'Старший барбер',
      direction: [
        'Бритье',
        'Стрижка',
        'Моделинг',
      ],
      img: AlexeyImg,
      imgHover: AlexeyImgHover,
      href: '/',
    },
  ]

  return (
    <section className={styles.section}>
      <h2 className={`${styles.section__title} subtitle`}>Мастера</h2>
      <ul className={`${styles.masters} list-reset`}>
        {mastersInfo.map((item, index) => 
          <li className={`${styles.master}`} id={index}>
            <div className={`${styles.master__img}`}>
              <img className={styles.master__imgPrev} src={item.img} alt={item.name} />
              <img className={styles.master__imgHover} src={item.imgHover} alt={item.name} />
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className={styles.svgBack} width="54" height="54" rx="27" fill="white"/>
                <g clip-path="url(#clip0_2263_1359)">
                <path d="M39 15L15 15L15 39H39V15Z" fill="white" fill-opacity="0.01"/>
                <path className={styles.svgArrow} d="M36 27H18" stroke="#1F2F55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path className={styles.svgArrow} d="M30 21L36 27L30 33" stroke="#1F2F55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_2263_1359">
                <rect width="24" height="24" fill="white" transform="translate(15 15)"/>
                </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className={`${styles.master__name} title`}>{item.name}</h3>
            <p className={`${styles.master__pos} text-primary`}>{item.pos}</p>
            <ul className={`${styles.master__directionList} list-reset flex`}>
              {item.direction.map((dir, indexDir) => 
                <li className={`${styles.master__directionItem} text-primary`} id={indexDir}>{dir}</li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </section>
  );
};

export { Masters };