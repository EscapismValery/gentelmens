import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.top} flex`}>
        <span className={`${styles.top__left}`}></span>
        <h2 className={`${styles.top__title} subtitle`}>контакты</h2>
      </div>
      <div className={`${styles.wrap} flex`}>
        <div className={`${styles.imgCont}`}></div>
        <ul className={`${styles.contacts} list-reset flex`}>
          <li className={`${styles.contacts__item} flex`}>
            <div className={`${styles.contacts__itemWrap} flex`}>
              <h3 className={`${styles.contacts__title} subtitle`}>gentelmen’s салон</h3>
              <a href='tel:+79826928892' className={`${styles.contacts__text} text-primary`}>+7 (982) 692-88-92</a>
            </div>
          </li>
          <li className={`${styles.contacts__item} flex`}>
            <div className={`${styles.contacts__itemWrap} flex`}>
              <h3 className={`${styles.contacts__title} subtitle`}>задать вопрос?</h3>
              <a href='mailto:hr@gentelmens.ru' className={`${styles.contacts__text} text-primary`}>hr@gentelmens.ru</a>
            </div>
          </li>
          <li className={`${styles.contacts__item} flex`}>
            <div className={`${styles.contacts__itemWrap} flex`}>
              <h3 className={`${styles.contacts__title} subtitle`}>мы здесь</h3>
              <a href='tel:+79826928892' className={`${styles.contacts__text} text-primary`}>Россия, Пермь, ул. Николая островского, 59</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Contacts };