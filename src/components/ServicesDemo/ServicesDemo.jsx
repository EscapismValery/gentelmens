import { Link } from 'react-router-dom';
import styles from './ServicesDemo.module.scss';
import img1 from '../../images/servicesDemo/img1.jpg';
import img2 from '../../images/servicesDemo/img2.jpg';
import img3 from '../../images/servicesDemo/img3.jpg';
import img4 from '../../images/servicesDemo/img4.jpg';

const ServicesDemo = () => {
  const servicesList = [
    {
      title: 'Мужская стрижка',
      img: img1,
    },
    {
      title: 'Моделирование бороды',
      img: img2,
    },
    {
      title: 'Уход за лицом',
      img: img3,
    },
    {
      title: 'Полный комплекс',
      img: img4,
    },
  ]

  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <div className={`${styles.top} flex`}>
          <div className={`${styles.top__left}`}>
            <p className={`${styles.top__descr} text-primary`}>Выступи в роли переводчика и корректора орфографии. Я буду говорить на любом языке, а ты будешь определять язык, переводить его и отвечать исправленной и улучшенной версией моего текста на английском языке.</p>
            <Link to={"/services"} className={`${styles.top__link} ${styles.top__linkTop} flex`}>
              <span className={`text-primary link`}>Смотреть все услуги</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.82353 1.32422H14.1765M14.1765 1.32422V13.6772M14.1765 1.32422L1 14.5007" stroke="url(#paint0_linear_2201_79)" stroke-width="2" stroke-miterlimit="10"/>
                <defs>
                <linearGradient id="paint0_linear_2201_79" x1="-4.96264" y1="-9.06492" x2="23.1942" y2="-3.55504" gradientUnits="userSpaceOnUse">
                <stop stop-color="#171111"/>
                <stop offset="0.663849" stop-color="#B07B58"/>
                </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          <h2 className={`${styles.top__title} subtitle`}>наши эксклюзивные услуги для клиентов</h2>
        </div>
        <ul className={`${styles.services} list-reset`}>
          {servicesList.map((item, index) => 
            <li className={`${styles.item} flex`} id={index}>
              <a href="" className={`${styles.item__link}`}>
                <div className={`${styles.item__img}`}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={`${styles.item__top}`}>
                  <h3 className={`${styles.item__title} title`}>{item.title}</h3>
                  <p className={`${styles.item__btn} link text-primary flex`}>Записаться</p>
                </div>
              </a>
            </li>
          )}
        </ul>
        <Link to={"/services"} className={`${styles.top__linkBottom} btn text-primary`}>Смотреть все услуги</Link>
      </div>
    </section>
  );
};

export { ServicesDemo };