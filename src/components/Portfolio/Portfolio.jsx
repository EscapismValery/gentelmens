import styles from './Portfolio.module.scss';

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
import { useState } from 'react';

const Portfolio = () => {
  const imagesFull = [
    {
      category: 'Стрижка',
      img: row1img1,
    },
    {
      category: 'Уход',
      img: row1img2,
    },
    {
      category: 'Комплекс',
      img: row2img1,
    },
    {
      category: 'Бритье',
      img: row2img2,
    },
    {
      category: 'Стрижка',
      img: row2img3,
    },
    {
      category: 'Комплекс',
      img: row3img1,
    },
    {
      category: 'Бритье',
      img: row3img2,
    },
    {
      category: 'Уход',
      img: row3img3,
    },
    {
      category: 'Стрижка',
      img: row4img1,
    },
    {
      category: 'Стрижка',
      img: row4img2,
    },
  ];
  
  const [images, setImages] = useState(imagesFull);

  function filterItems(category, e) {
    const filterBtns = document.querySelectorAll(`.${styles.filter__btn}`);
    setImages(imagesFull);

    filterBtns.forEach((btn) => {
      btn.classList.remove(styles.filter__btnActive);
    })

    e.target.classList.add(styles.filter__btnActive);

    if (category === 'all') {
      return setImages(imagesFull);
    } else {
      const newItemState = imagesFull.filter(item => item.category === category);
      setImages(newItemState);
    }
  } 

  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.section__container} container`}>
        <h2 className={`${styles.section__title} subtitle`}>Портфолио</h2>
        <div className={`${styles.filter} flex`}>
          <button className={`${styles.filter__btn} ${styles.filter__btnActive} btn-reset text-primary`} onClick={(e) => filterItems('all', e)}>Все работы</button>
          <button className={`${styles.filter__btn} btn-reset text-primary`} onClick={(e) => filterItems('Стрижка', e)}>Стрижка</button>
          <button className={`${styles.filter__btn} btn-reset text-primary`} onClick={(e) => filterItems('Бритье', e)}>Бритье</button>
          <button className={`${styles.filter__btn} btn-reset text-primary`} onClick={(e) => filterItems('Уход', e)}>Уход за лицом</button>
          <button className={`${styles.filter__btn} btn-reset text-primary`} onClick={(e) => filterItems('Комплекс', e)}>Комплекс</button>
        </div>
      </div>
      <div className={`${styles.images} flex`}>
        {images.map(item => 
          <div className={`${styles.images__item}`}>
            <img src={item.img} alt={item.category} />
          </div>
        )}
      </div>
    </section>
  );
};

export { Portfolio };