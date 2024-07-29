import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../logo.svg';

const Header = () => {
  // const [burgerIsActive, setBurgerIsActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container flex`}>
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
            {/* <li className={styles.nav__item}>
              <Link to={"/plug"} className={`${styles.nav__link} text-primary`}>Академия</Link>
            </li> */}
            {/* <li className={styles.nav__item}>
              <Link to={"/plug"} className={`${styles.nav__link} text-primary`}>Пресс-центр</Link>
            </li> */}
            {/* <li className={styles.nav__item}>
              <Link to={"/about-us"} className={`${styles.nav__link} text-primary`}>Вакансии</Link>
            </li> */}
            <li className={styles.nav__item}>
              <Link to={"/shop"} className={`${styles.nav__link} text-primary`}>Магазин</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={"/certificates"} className={`${styles.nav__link} text-primary`}>Сертификаты</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={"/contacts"} className={`${styles.nav__link} text-primary`}>Контакты</Link>
            </li>
          </ul>
        </nav>
        <button className={`${styles.header__btn} flex btn-reset btn text-primary`}>
          <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.14089 7.35287L4.37089 0.339867C4.31572 0.257873 4.24489 0.187591 4.16247 0.133061C4.08004 0.0785314 3.98766 0.040829 3.89061 0.022121C3.79357 0.00341309 3.69379 0.00406861 3.597 0.0240498C3.50022 0.0440311 3.40833 0.0829438 3.32664 0.138552C3.24494 0.19416 3.17503 0.265366 3.12094 0.348079C3.06685 0.430791 3.02964 0.523377 3.01145 0.620517C2.99326 0.717656 2.99445 0.817433 3.01495 0.914112C3.03545 1.01079 3.07485 1.10247 3.13089 1.18387L8.26089 8.72887L5.86589 12.4719C4.98554 12.0076 3.96374 11.8882 3.00008 12.137C2.03641 12.3858 1.20011 12.9849 0.654542 13.8173C0.108969 14.6497 -0.106686 15.6556 0.0497011 16.6385C0.206088 17.6214 0.723285 18.5107 1.50026 19.1327C2.27724 19.7547 3.25818 20.0647 4.25148 20.0021C5.24477 19.9395 6.17906 19.5089 6.87185 18.7944C7.56464 18.0798 7.96616 17.1326 7.99797 16.1379C8.02978 15.1431 7.68961 14.1722 7.04389 13.4149L9.17889 10.0779L11.2439 13.1139C10.5231 13.8007 10.0844 14.7317 10.0136 15.7248C9.94268 16.718 10.2447 17.7018 10.8607 18.4841C11.4766 19.2663 12.3621 19.7908 13.3441 19.9549C14.3262 20.119 15.3341 19.9109 16.1709 19.3714C17.0077 18.8319 17.6132 17.9997 17.8691 17.0375C18.1249 16.0753 18.0128 15.0523 17.5545 14.1684C17.0962 13.2845 16.3247 12.6033 15.3909 12.2579C14.4571 11.9126 13.428 11.9279 12.5049 12.3009L10.0579 8.70387L10.0599 8.70187L9.14089 7.35287ZM1.50089 16.0109C1.50089 15.3478 1.76428 14.7119 2.23312 14.2431C2.70197 13.7743 3.33785 13.5109 4.00089 13.5109C4.66393 13.5109 5.29982 13.7743 5.76866 14.2431C6.2375 14.7119 6.50089 15.3478 6.50089 16.0109C6.50089 16.6739 6.2375 17.3098 5.76866 17.7786C5.29982 18.2475 4.66393 18.5109 4.00089 18.5109C3.33785 18.5109 2.70197 18.2475 2.23312 17.7786C1.76428 17.3098 1.50089 16.6739 1.50089 16.0109ZM11.5009 16.0109C11.5009 15.3478 11.7643 14.7119 12.2331 14.2431C12.702 13.7743 13.3379 13.5109 14.0009 13.5109C14.6639 13.5109 15.2998 13.7743 15.7687 14.2431C16.2375 14.7119 16.5009 15.3478 16.5009 16.0109C16.5009 16.6739 16.2375 17.3098 15.7687 17.7786C15.2998 18.2475 14.6639 18.5109 14.0009 18.5109C13.3379 18.5109 12.702 18.2475 12.2331 17.7786C11.7643 17.3098 11.5009 16.6739 11.5009 16.0109ZM10.9389 7.32687L14.8819 1.16487C14.9385 1.08197 14.9778 0.988555 14.9976 0.89017C15.0174 0.791785 15.0173 0.690426 14.9972 0.592099C14.9771 0.493771 14.9375 0.400474 14.8807 0.317734C14.8239 0.234994 14.7511 0.164494 14.6665 0.110411C14.582 0.0563281 14.4874 0.0197616 14.3885 0.00287767C14.2896 -0.0140063 14.1883 -0.0108643 14.0906 0.0121177C13.9929 0.0350997 13.9008 0.0774542 13.8198 0.136672C13.7388 0.19589 13.6705 0.270767 13.6189 0.356867L10.0209 5.97887L10.9389 7.32687Z" fill="white"/>
          </svg>
          Записаться
        </button>
      </div>
    </header>
  );
};

export { Header };