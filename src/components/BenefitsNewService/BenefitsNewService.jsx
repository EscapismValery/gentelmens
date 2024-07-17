import styles from './BenefitsNewService.module.scss';
import benefit2 from '../../images/benefitsNewService/2.jpg';
import benefit3 from '../../images/benefitsNewService/3.png';

const BenefitsNewService = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <div className={`${styles.top} flex`}>
          <h2 className={`${styles.top__title} subtitle`}>Наши преймущества как новый сервис</h2>
          <p className={`${styles.top__descr} text-primary`}>Назови три любых мужских прически и получи бесплатную диагностику кожи головы</p>
          <div className={`${styles.top__btnCont} flex`}>
            <button className={`${styles.top__btn} btn-reset btn text-primary`}>Записаться</button>
            <p className={`${styles.top__text} text-primary`}>Try new reality!</p>
          </div>
        </div>
        <ul className={`${styles.benefits} list-reset`}>
          <li className={`${styles.item} ${styles.item1}`}>
            <h3 className={`${styles.item1__title} title`}>Наше предложение</h3>
            <p className={`${styles.item1__text} text-primary`}>Возможность подобрать себе прическу/бороду, возможность подобрать себе прическу/бороду</p>
          </li>
          <li className={`${styles.item} ${styles.item2}`}>
            <img src={benefit2} alt="Мужская причёска" />
          </li>
          <li className={`${styles.item} ${styles.item3}`}>
            <div className={`${styles.item3__top} flex`}>
              <img src={benefit3} alt="Sofia" />
              <div className={`${styles.item3__topText}`}>
                <p className='title'>Sofia</p>
                <p className='text-primary'>Ежедневно новые ивенты для клиентов</p>
              </div>
            </div>
            <div className={`${styles.item3__items} flex`}>
              <div className={`${styles.item3__item} flex`}>
                <div className={`${styles.item3__date} ${styles.item3__dateRed} flex`}>
                  <span className={`${styles.item3__dateMo} text-primary`}>Июня</span>
                  <span className={`${styles.item3__dateNu} title`}>28</span>
                </div>
                <div className={`${styles.item3__info}`}>
                  <h4 className={`${styles.item3__infoTitle} text-primary`}>Умный календарь</h4>
                  <p className={`${styles.item3__infoDescr} text-primary`}>Для переменных значений</p>
                </div>
              </div>
              <div className={`${styles.item3__item} flex`}>
                <div className={`${styles.item3__date} ${styles.item3__dateGreen} flex`}>
                  <span className={`${styles.item3__dateMo} text-primary`}>Июня</span>
                  <span className={`${styles.item3__dateNu} title`}>28</span>
                </div>
                <div className={`${styles.item3__info}`}>
                  <h4 className={`${styles.item3__infoTitle} text-primary`}>Умный календарь</h4>
                  <p className={`${styles.item3__infoDescr} text-primary`}>Для переменных значений</p>
                </div>
              </div>
            </div>
          </li>
          <li className={`${styles.item} ${styles.item4} flex`}>
            <p className={`${styles.item4__item} title`}>Сертификат</p>
            <p className={`${styles.item4__item} title`}>Сертификат</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { BenefitsNewService };