import styles from './History.module.scss';
import historyImg from '../../images/aboutUs/history.jpg';

const History = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container flex`}>
        <div className={`${styles.section__img}`}>
          <img src={historyImg} alt="салон Gentelmens" />
        </div>
        <div className={`${styles.content} flex`}>
          <h2 className={`${styles.content__title} subtitle`}>наша история заключается в том что это инновация</h2>
          <p className={`${styles.content__descr} text-primary`}>Возможность подобрать себе прическу/бороду по фотографии. Необходимо загрузить фотографию, далее включается автоматическая система фильтров, которая сделает лицо гораздно красочнее и красивее</p>
          <ul className={`${styles.content__items} list-reset flex`}>
            <li className={`${styles.content__item} flex`}>
              <div className={`${styles.content__itemTop}`}>
                <h3 className={`${styles.content__itemTitle} title`}>Почему так?</h3>
                <p className={`${styles.content__itemDescr} text-primary`}>Выступи в роли переводчика и корректора орфографии. Я буду говорить на любом языке, а ты будешь определять язык, переводить его и отвечать исправленной и улучшенной версией моего текста на английском языке.</p>
              </div>
              <div className={`${styles.bottom} flex`}>
                <div className={`${styles.bottom__left} flex`}>
                  
                </div>
                <div className={`${styles.bottom__info}`}>
                  <h4 className={`${styles.bottom__infoTitle} text-primary`}>Фишка при обучении</h4>
                  <p className={`${styles.bottom__infoDescr} text-primary`}>Для переменных значений</p>
                </div>
              </div>
            </li>
            <li className={`${styles.content__item} flex`}>
              <div className={`${styles.content__itemTop}`}>
                <h3 className={`${styles.content__itemTitle} title`}>Чего добились?</h3>
                <p className={`${styles.content__itemDescr} text-primary`}>Выступи в роли переводчика и корректора орфографии. Я буду говорить на любом языке, а ты будешь определять язык, переводить его и отвечать исправленной и улучшенной версией моего текста на английском языке.</p>
              </div>
              <div className={`${styles.bottom} flex`}>
                <div className={`${styles.bottom__left} flex`}>
                  
                </div>
                <div className={`${styles.bottom__info}`}>
                  <h4 className={`${styles.bottom__infoTitle} text-primary`}>Фишка при обучении</h4>
                  <p className={`${styles.bottom__infoDescr} text-primary`}>Для переменных значений</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { History };