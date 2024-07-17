import styles from './CtaImage.module.scss';
import image from '../../images/ctaImg.jpg';

const CtaImage = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <div className={`${styles.wrap} flex`}>
          <div className={`${styles.content}`}>
            <h2 className={`${styles.content__title} subtitle`}>записаться на стрижку</h2>
            <p className={`${styles.content__descr} text-primary`}>Тут будет наш текст, который будет призывать к стрижке, уникальный текст для пользователей</p>
            <button className={`${styles.content__btn} btn-reset btn text-primary`}>Записаться</button>
          </div>
          <div className={`${styles.imgCont}`}>
            <img src={image} alt="Фото" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { CtaImage };