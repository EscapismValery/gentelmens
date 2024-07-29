import styles from './PresentSert.module.scss';
import presentImg from '../../images/presentSert.png';

const PresentSert = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <div className={`${styles.wrap} flex`}>
          <div className={styles.img}>
            <img src={presentImg} alt="Подарочный сертификат" />
          </div>
          <div className={styles.content}>
            <h2 className={`${styles.content__title} subtitle`}>подарочный сертификат</h2>
            <p className={`${styles.content__descr} text-primary`}>Назови три любых мужских прически и получи бесплатную диагностику кожи головы назови три любых мужских прически и получи бесплатную диагностику кожи головы</p>
            <button className={`${styles.content__btn} btn-reset btn text-primary`}>Выбрать сертификат</button>
          </div>          
        </div>
      </div>
    </section>
  );
};

export { PresentSert };