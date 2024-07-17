import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../logo.svg';

const Header = () => {
  // const [burgerIsActive, setBurgerIsActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to={"/"} className={styles.header__logo}>
          <img src={logo} alt="logo" />
        </Link>
        <nav className={`${styles.nav} flex`}>
          <ul className={`${styles.nav__list} list-reset flex`}>
            <li className={styles.nav__item}>
              <Link to={"/about-us"} className={`${styles.nav__link} text-primary`}>О нас</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={"/services"} className={`${styles.nav__link} text-primary`}>Услуги</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={"/masters"} className={`${styles.nav__link} text-primary`}>Мастера</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={"/portfolio"} className={`${styles.nav__link} text-primary`}>Портфолио</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={"/plug"} className={`${styles.nav__link} text-primary`}>Академия</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={"/plug"} className={`${styles.nav__link} text-primary`}>Пресс-центр</Link>
            </li>
          </ul>
          <ul className={`${styles.nav__list} list-reset flex`}>
            <li className={styles.nav__item}>
              <Link to={"/about-us"} className={`${styles.nav__link} text-primary`}>Вакансии</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={"/services"} className={`${styles.nav__link} text-primary`}>Магазин</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={"/masters"} className={`${styles.nav__link} text-primary`}>Сертификаты</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={"/portfolio"} className={`${styles.nav__link} text-primary`}>Контакты</Link>
            </li>
            <button className={`${styles.header__btn} btn-reset btn text-primary`}>Записаться</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };