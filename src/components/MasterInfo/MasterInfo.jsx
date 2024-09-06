import styles from './MasterInfo.module.scss';

const MasterInfo = ({name, level, descr, img}) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__container}`}>
        <div className={`${styles.wrap} flex`}>
          <div className={`${styles.content}`}>
            <h2 className={`${styles.content__title} subtitle`}>{name}</h2>
            <h3 className={`${styles.content__level} title`}>{level}</h3>
            <p className={`${styles.content__descr} text-primary flex`}>
              {descr.map(item => 
                <span>{item}</span>
              )}
            </p>
            <button className={`${styles.content__btn} btn-reset btn text-primary`}>Записаться к мастеру</button>
          </div>
          <div className={`${styles.imgCont}`}>
            <img src={img} alt="Фото" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { MasterInfo };