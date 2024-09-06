import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../logo.svg';
import { useState } from 'react';
import { ModalShop } from '../ModalShop/ModalShop';
import { useDispatch, useSelector } from 'react-redux';
import { activePopup } from '../../store/productsReducer';

const Header = () => {
  // const [burgerIsActive, setBurgerIsActive] = useState(false);
  const [contactsIsActive, setContactsIsActive] = useState(false);

  // const [modalActive, setModalActive] = useState(false);
  // const [nextStep, setNextStep] = useState(false);

  // const dispatch = useDispatch();
  // const popupActive = useSelector(state => state.products.popupActive);

  // function PushInfoShop() {
  //   dispatch(activePopup(true));
  //   setNextStep(false);
  // }

  // const productsState = useSelector(state => state.products.products);
  // const totalCount = useSelector(state => state.products.totalCount);

  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={`${styles.header__wrap} flex`}>
          <Link to={"/"} className={styles.header__logo}>
            <img src={logo} alt="logo" />
          </Link>
          <nav className={`flex ${styles.nav}`}>
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
                <Link to={"/blog"} className={`${styles.nav__link} text-primary`}>Блог</Link>
              </li>
              <li className={styles.nav__item}>
                <Link to={"/certificates"} className={`${styles.nav__link} text-primary`}>Сертификаты</Link>
              </li>
              <li className={styles.nav__item}>
                <Link to={"/contacts"} className={`${styles.nav__link} text-primary`}>Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className={`flex ${styles.header__cta}`}>
            <div className={`${styles.header__ctaLeft} flex`}>
              <a href="tel:+73435555555" className={`${styles.header__ctaItem} ${styles.nav__link} ${styles.header__ctaNumber} text-primary`}>+7 ( 343 ) 555-55-55</a>
              <a className={`${styles.header__ctaItem} ${styles.header__ctaBtn} flex`} onClick={() => setContactsIsActive(!contactsIsActive)}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2249_3028)">
                  <path d="M0.5 7.61914V23.9995H9.46989V7.61914H0.5ZM3.88761 14.4955H2.38804V12.4203H3.88761V14.4955ZM3.88761 11.4308H2.38804V9.35568H3.88761V11.4308ZM6.7858 14.4955H5.28547V12.4203H6.7858V14.4955ZM6.7858 11.4308H5.28547V9.35568H6.7858V11.4308Z" fill="#151515"/>
                  <path d="M8.79343 6.52539H1.77734V8.40833H8.79343V6.52539Z" fill="#151515"/>
                  <path d="M13.8988 0H8.79297V1.14118H13.8988V0Z" fill="#151515"/>
                  <path d="M16.6253 22.5167C15.4102 21.1953 9.46089 13.3497 9.46089 9.67467C9.46089 7.52145 10.3915 5.5777 11.8781 4.21054V2.14291H13.3784V3.13393C13.8763 2.86065 14.4092 2.64067 14.9675 2.48151V1.14062H7.72656V23.9994H16.711V22.5932C16.6804 22.5707 16.6521 22.5452 16.6253 22.5167ZM9.17643 2.14291H10.676V4.2188H9.17643V2.14291Z" fill="#151515"/>
                  <path d="M17.4365 2.80469C13.5358 2.80469 10.373 5.90914 10.373 9.73959C10.373 13.1579 15.9997 20.6191 17.2087 21.9344C17.3303 22.0666 17.5413 22.0666 17.6637 21.9344C18.8734 20.6191 24.4993 13.1579 24.4993 9.73959C24.4993 5.90989 21.3373 2.80469 17.4358 2.80469H17.4365ZM17.4365 11.0805C16.1434 11.0805 15.0958 10.0512 15.0958 8.78235C15.0958 7.51354 16.1442 6.48423 17.4365 6.48423C18.7289 6.48423 19.7773 7.51354 19.7773 8.78235C19.7773 10.0512 18.7289 11.0805 17.4365 11.0805Z" fill="#151515"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_2249_3028">
                  <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                  </defs>
                </svg>
              </a>
              <address className={`${styles.header__ctaContacts} ${contactsIsActive && styles.header__ctaContacts_active} flex`}>
                <div className={`${styles.header__ctaContactsWrap}`}>
                  <h4 className={`${styles.header__ctaContactsTitle} ${styles.header__ctaContactsTitleAddress} title`}>Адрес</h4>
                  <p className={`${styles.header__ctaContactsDescr} text-primary`}>Россия, Пермь, ул. Революции 22</p>
                </div>
                <div className={`${styles.header__ctaContactsWrap}`}>
                  <h4 className={`${styles.header__ctaContactsTitle} ${styles.header__ctaContactsTitleTime} title`}>Время работы:</h4>
                  <p className={`${styles.header__ctaContactsDescr} text-primary`}>Каждый день: С 10:00 до 22:00</p>
                </div>
              </address>
            </div>
            <button className={`${styles.header__btn} flex btn-reset btn text-primary`}>
              <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.14089 7.35287L4.37089 0.339867C4.31572 0.257873 4.24489 0.187591 4.16247 0.133061C4.08004 0.0785314 3.98766 0.040829 3.89061 0.022121C3.79357 0.00341309 3.69379 0.00406861 3.597 0.0240498C3.50022 0.0440311 3.40833 0.0829438 3.32664 0.138552C3.24494 0.19416 3.17503 0.265366 3.12094 0.348079C3.06685 0.430791 3.02964 0.523377 3.01145 0.620517C2.99326 0.717656 2.99445 0.817433 3.01495 0.914112C3.03545 1.01079 3.07485 1.10247 3.13089 1.18387L8.26089 8.72887L5.86589 12.4719C4.98554 12.0076 3.96374 11.8882 3.00008 12.137C2.03641 12.3858 1.20011 12.9849 0.654542 13.8173C0.108969 14.6497 -0.106686 15.6556 0.0497011 16.6385C0.206088 17.6214 0.723285 18.5107 1.50026 19.1327C2.27724 19.7547 3.25818 20.0647 4.25148 20.0021C5.24477 19.9395 6.17906 19.5089 6.87185 18.7944C7.56464 18.0798 7.96616 17.1326 7.99797 16.1379C8.02978 15.1431 7.68961 14.1722 7.04389 13.4149L9.17889 10.0779L11.2439 13.1139C10.5231 13.8007 10.0844 14.7317 10.0136 15.7248C9.94268 16.718 10.2447 17.7018 10.8607 18.4841C11.4766 19.2663 12.3621 19.7908 13.3441 19.9549C14.3262 20.119 15.3341 19.9109 16.1709 19.3714C17.0077 18.8319 17.6132 17.9997 17.8691 17.0375C18.1249 16.0753 18.0128 15.0523 17.5545 14.1684C17.0962 13.2845 16.3247 12.6033 15.3909 12.2579C14.4571 11.9126 13.428 11.9279 12.5049 12.3009L10.0579 8.70387L10.0599 8.70187L9.14089 7.35287ZM1.50089 16.0109C1.50089 15.3478 1.76428 14.7119 2.23312 14.2431C2.70197 13.7743 3.33785 13.5109 4.00089 13.5109C4.66393 13.5109 5.29982 13.7743 5.76866 14.2431C6.2375 14.7119 6.50089 15.3478 6.50089 16.0109C6.50089 16.6739 6.2375 17.3098 5.76866 17.7786C5.29982 18.2475 4.66393 18.5109 4.00089 18.5109C3.33785 18.5109 2.70197 18.2475 2.23312 17.7786C1.76428 17.3098 1.50089 16.6739 1.50089 16.0109ZM11.5009 16.0109C11.5009 15.3478 11.7643 14.7119 12.2331 14.2431C12.702 13.7743 13.3379 13.5109 14.0009 13.5109C14.6639 13.5109 15.2998 13.7743 15.7687 14.2431C16.2375 14.7119 16.5009 15.3478 16.5009 16.0109C16.5009 16.6739 16.2375 17.3098 15.7687 17.7786C15.2998 18.2475 14.6639 18.5109 14.0009 18.5109C13.3379 18.5109 12.702 18.2475 12.2331 17.7786C11.7643 17.3098 11.5009 16.6739 11.5009 16.0109ZM10.9389 7.32687L14.8819 1.16487C14.9385 1.08197 14.9778 0.988555 14.9976 0.89017C15.0174 0.791785 15.0173 0.690426 14.9972 0.592099C14.9771 0.493771 14.9375 0.400474 14.8807 0.317734C14.8239 0.234994 14.7511 0.164494 14.6665 0.110411C14.582 0.0563281 14.4874 0.0197616 14.3885 0.00287767C14.2896 -0.0140063 14.1883 -0.0108643 14.0906 0.0121177C13.9929 0.0350997 13.9008 0.0774542 13.8198 0.136672C13.7388 0.19589 13.6705 0.270767 13.6189 0.356867L10.0209 5.97887L10.9389 7.32687Z" fill="white"/>
              </svg>
              Записаться
            </button>
          </div>
          {/* <button className={`${styles.basket} ${productsState.length > 0 && styles.active} flex`} onClick={() => PushInfoShop()}>
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45744 0.858438C8.63735 0.602256 8.86049 0.393678 9.11248 0.246156C9.36448 0.0986343 9.63972 0.0154449 9.92047 0.00195354C10.2012 -0.0115379 10.4812 0.0449682 10.7424 0.167827C11.0037 0.290687 11.2403 0.477171 11.437 0.715252L11.5456 0.858438L15.4983 6.48806H18.499C18.7099 6.48752 18.9186 6.5399 19.1113 6.64174C19.3041 6.74358 19.4765 6.8926 19.6173 7.07903C19.7582 7.26547 19.8642 7.48511 19.9286 7.72358C19.993 7.96205 20.0142 8.21397 19.9908 8.46284L19.8983 9.37685L19.7978 10.2598L19.7153 10.9209L19.6198 11.6308L19.5113 12.3766L19.3886 13.1498L19.2519 13.9385C19.1795 14.3363 19.1018 14.7336 19.0187 15.1306C18.7962 16.1783 18.5168 17.2078 18.1823 18.2127L17.9602 18.857L17.745 19.4393L17.542 19.9571L17.4475 20.1886L17.1972 20.7733C16.8755 21.5012 16.2683 21.9307 15.6259 21.9928L15.4651 21.9999H4.52788C4.17644 22.0031 3.83089 21.8928 3.52813 21.681C3.22537 21.4691 2.97677 21.1637 2.80889 20.7972L2.57567 20.2602L2.39472 19.8187L2.29922 19.5741L2.09817 19.0384C1.63907 17.773 1.26659 16.4658 0.984341 15.1294C0.929767 14.8699 0.877491 14.6098 0.827521 14.349L0.684774 13.5758L0.557106 12.8193L0.444517 12.0878L0.343991 11.3874L0.256533 10.7264L0.182144 10.1143L0.0916708 9.29929L0.0253237 8.63586L0.00823428 8.45329C-0.0125601 8.21887 0.0061259 7.98188 0.0632051 7.75611C0.120284 7.53034 0.214617 7.32029 0.340716 7.13819C0.466814 6.9561 0.622161 6.80558 0.797719 6.6954C0.973277 6.58522 1.16554 6.51758 1.36332 6.49641L1.50004 6.48806H4.50476L8.45744 0.858438ZM7.9518 12.1224C7.88379 11.8409 7.73093 11.5989 7.52233 11.4425C7.31372 11.2861 7.06393 11.2262 6.82053 11.2743C6.57714 11.3223 6.35713 11.4749 6.20241 11.7031C6.04768 11.9312 5.96905 12.2189 5.98149 12.5114L5.99456 12.6499L6.49719 16.2295L6.52232 16.3655C6.59032 16.6471 6.74318 16.8891 6.95179 17.0455C7.1604 17.2019 7.41018 17.2618 7.65358 17.2137C7.89698 17.1657 8.11698 17.0131 8.27171 16.7849C8.42643 16.5568 8.50506 16.2691 8.49263 15.9766L8.47956 15.8381L7.97693 12.2585L7.9518 12.1224ZM13.1822 11.2776C12.9392 11.2295 12.6898 11.289 12.4813 11.4447C12.2729 11.6005 12.1198 11.8416 12.0512 12.1224L12.0261 12.2585L11.5235 15.8381C11.4815 16.1384 11.5378 16.4463 11.6808 16.6989C11.8237 16.9515 12.0426 17.1297 12.2926 17.197C12.5427 17.2644 12.8049 17.2159 13.0258 17.0613C13.2466 16.9067 13.4094 16.6578 13.4807 16.3655L13.5059 16.2295L14.0085 12.6499C14.0521 12.3378 13.9895 12.018 13.8346 11.7607C13.6797 11.5034 13.445 11.3297 13.1822 11.2776ZM10.0015 2.38576L7.12145 6.48806H12.8816L10.0015 2.38576Z" fill="url(#paint0_linear_2309_1056)"/>
              <defs>
              <linearGradient id="paint0_linear_2309_1056" x1="-9.05044" y1="-17.3462" x2="33.963" y2="-9.69426" gradientUnits="userSpaceOnUse">
              <stop stop-color="#171111"/>
              <stop offset="0.663849" stop-color="#B07B58"/>
              </linearGradient>
              </defs>
            </svg>
            {productsState.length > 0 &&
              <span className={`${styles.basket__count} text-primary`}>{totalCount}</span>
            }
          </button> */}
        </div>
      </div>
      {/* <ModalShop 
        // active={modalActive} 
        // setActive={setModalActive}
        nextStep={nextStep}
        setNextStep={setNextStep}
      /> */}
    </header>
  );
};

export { Header };