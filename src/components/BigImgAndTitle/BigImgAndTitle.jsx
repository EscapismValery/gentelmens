import styles from './BigImgAndTitle.module.scss';
import circle from '../../images/circle.png';

const BigImgAndTitle = () => {
  return (
    <section className={`${styles.block}`}>
      <div className={`${styles.section__container} container`}>
        <h1 className={`${styles.block__title} title-main`}>о нашем салоне gentelmen’s</h1>
        <div className={`${styles.wrap}`}>
          <div className={`${styles.center}`}>
            <div className={`${styles.center__head}`}>
              {/* ТУТ АНИМАЦИЯ С ГОЛОВОЙ */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { BigImgAndTitle };