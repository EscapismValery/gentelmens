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
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.35355 4.35355C4.54882 4.15829 4.54882 3.84171 4.35355 3.64645L1.17157 0.464466C0.97631 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659729 0.269204 0.976311 0.464466 1.17157L3.29289 4L0.464466 6.82843C0.269204 7.02369 0.269204 7.34027 0.464466 7.53553C0.659729 7.7308 0.976311 7.7308 1.17157 7.53553L4.35355 4.35355ZM3 4.5L4 4.5L4 3.5L3 3.5L3 4.5Z" fill="#1F2F55"/>
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
              <a className={`${styles.item__link} text-primary link`}>Записаться</a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export { ServicesDemo };