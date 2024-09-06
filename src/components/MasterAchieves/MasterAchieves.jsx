import styles from './MasterAchieves.module.scss';

const MasterAchieves = ({items}) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <h2 className={`${styles.section__title} subtitle`}>Достижения</h2>
        <ul className={`${styles.section__list} list-reset`}>
          {items.map(item => 
            <li className={`${styles.item}`} style={{backgroundImage: `url('${item.icon}')`}}>
              <h3 className={`${styles.item__title} title`}>{item.title}</h3>
              <h4 className={`${styles.item__value} title-main`}>{item.value}</h4>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export { MasterAchieves };