import styles from './SalonReviews.module.scss';
import leftImg from '../../images/salon/left.jpg';
import mainImg from '../../images/salon/main.jpg';
import rightImg from '../../images/salon/right.jpg';

const SalonReviews = () => {
  return (
    <section className={styles.section}>
      <h2 className={`${styles.section__title} subtitle`}>наш салон</h2>
      <div className={`${styles.images} flex`}>
        <img className={styles.images1} src={leftImg} alt='Фото салона' />
        <img className={styles.images2} src={mainImg} alt='Фото салона' />
        <img className={styles.images3} src={rightImg} alt='Фото салона' />
      </div>
      <div className={`container`}>
        <div className={`${styles.wrap} flex`}>
          <ul className={`${styles.reviews} list-reset flex`}>
            <li className={`${styles.reviews__item} flex`}>
              <span className={`${styles.reviews__number} flex`}>5.0</span>
              <h4 className={`${styles.reviews__company} title`}>Flamp</h4>
            </li>
            <li className={`${styles.reviews__item} flex`}>
              <span className={`${styles.reviews__number} flex`}>5.0</span>
              <h4 className={`${styles.reviews__company} title`}>Google</h4>
            </li>
            <li className={`${styles.reviews__item} flex`}>
              <span className={`${styles.reviews__number} flex`}>5.0</span>
              <h4 className={`${styles.reviews__company} title`}>Яндекс</h4>
            </li>
          </ul>
          <div className={`${styles.right}`}>
            <h3 className={`${styles.right__title} title`}>Нам доверяют</h3>
            <p className={`${styles.right__descr} text-primary`}>Назови три любых мужских прически и получи бесплатную диагностику кожи головы</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SalonReviews };