import styles from './ServicesFull.module.scss';

const ServicesFull = ({subtitle, title, items}) => {

  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        {subtitle &&
          <p className={`${styles.section__subtitle} text-primary`}>{subtitle}</p>
        }
        <h2 className={`${styles.section__title} title-main`}>{title}</h2>
        <div className={`${styles.table} flex`}>
          <header className={`${styles.table__header}`}>
            <h3 className={`${styles.table__title} subtitle`}>УСЛУГИ</h3>
            <h4 className={`${styles.table__subtitle} ${styles.table__cell} title`}>Top барбер</h4>
            <h4 className={`${styles.table__subtitle} ${styles.table__cell} title`}>Premium барбер</h4>
            <h4 className={`${styles.table__subtitle} ${styles.table__cell} title`}>VIP барбер</h4>
          </header>
          {items.map((item, index) => 
            <div className={`${styles.table__row}`} id={index}>
              <h3 className={`${styles.table__title} title`}>{item.name}</h3>
              <h4 className={`${styles.table__subtitle} ${styles.table__cell} title`}>
                {item.topPrice 
                ? <a href='' className={`${styles.table__cellLink}`}>{item.topPrice}</a>
                : '-'
                }
              </h4>
              <h4 className={`${styles.table__subtitle} ${styles.table__cell} title`}>
                {item.premiumPrice 
                ? <a href='' className={`${styles.table__cellLink}`}>{item.premiumPrice}</a>
                : '-'
                }
              </h4>
              <h4 className={`${styles.table__subtitle} ${styles.table__cell} title`}>
                {item.vipPrice 
                ? <a href='' className={`${styles.table__cellLink}`}>{item.vipPrice}</a>
                : '-'
                }
              </h4>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { ServicesFull };