import { Link } from 'react-router-dom';
import styles from './ServicesDemo.module.scss';
import bigImg from '../../images/servicesDemo/big1.png';
import smallImg from '../../images/servicesDemo/small1.png';

const ServicesDemo = () => {
  const servicesList = [
    {
      title: 'Мужская стрижка',
      descr: 'Возможность подобрать себе прическу/бороду',
      img: bigImg,
    },
    {
      title: 'Бритье',
      descr: 'Возможность подобрать себе прическу/бороду',
      img: smallImg,
    },
    {
      title: 'Бритье',
      descr: 'Возможность подобрать себе прическу/бороду',
      img: smallImg,
    },
    {
      title: 'Стрижка ножницами',
      descr: 'Возможность подобрать себе прическу/бороду',
      img: smallImg,
    },
    {
      title: 'Детская стрижка',
      descr: 'Возможность подобрать себе прическу/бороду',
      img: smallImg,
    },
    {
      title: 'Уход за лицом',
      descr: 'Возможность подобрать себе прическу/бороду',
      img: bigImg,
    },
  ]

  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <div className={`${styles.top} flex`}>
          <h2 className={`${styles.section__title} subtitle`}>Наши услуги</h2>
          <Link to={"/services"} className={`${styles.top__link} flex`}>
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
        <ul className={`${styles.services} list-reset`}>
          {servicesList.map((item, index) => 
            <li className={`${styles.item} flex`} id={index} style={{backgroundImage: `url('${item.img}')`}}>
              <div className={`${styles.item__top}`}>
                <h3 className={`${styles.item__title} title`}>{item.title}</h3>
                <p className={`${styles.item__descr} text-primary`}>{item.descr}</p>
              </div>
              <button className={`${styles.item__btn} text-primary flex`}><span>Записаться</span></button>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export { ServicesDemo };