import styles from './ShopFull.module.scss';
import products from '../../database/shopFull';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activePopup, addProductAction } from '../../store/productsReducer';
import { ModalShop } from '../ModalShop/ModalShop';

const ShopFull = () => {
  const [productsState, setProductsState] = useState(products);
  const dispatch = useDispatch();
  const [nextStep, setNextStep] = useState(false);

  function PushInfoShop() {
    dispatch(activePopup(true));
    setNextStep(false);
  }

  const productsList = useSelector(state => state.products.products);
  const totalCount = useSelector(state => state.products.totalCount);

  function filterItems(category, e) {
    const filterBtns = document.querySelectorAll(`.${styles.filter__btn}`);
    setProductsState(products);

    filterBtns.forEach((btn) => {
      btn.classList.remove(styles.filter__btnActive);
    })

    e.target.classList.add(styles.filter__btnActive);

    if (category === 'all') {
      return setProductsState(products);
    } else {
      const newItemState = products.filter(item => item.category === category);
      setProductsState(newItemState);
    }
  } 

  function addProductToCart(e, item) {
    e.preventDefault();
    if (item.isActive) {
      dispatch(activePopup(true));
    } else {
      item.totalPrice = item.count * item.price;
      item.isActive = true;
      dispatch(addProductAction(item));
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.basketCont}`}>
          <button className={`${styles.basket} ${productsList.length > 0 && styles.active} flex`} onClick={() => PushInfoShop()}>
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45744 0.858438C8.63735 0.602256 8.86049 0.393678 9.11248 0.246156C9.36448 0.0986343 9.63972 0.0154449 9.92047 0.00195354C10.2012 -0.0115379 10.4812 0.0449682 10.7424 0.167827C11.0037 0.290687 11.2403 0.477171 11.437 0.715252L11.5456 0.858438L15.4983 6.48806H18.499C18.7099 6.48752 18.9186 6.5399 19.1113 6.64174C19.3041 6.74358 19.4765 6.8926 19.6173 7.07903C19.7582 7.26547 19.8642 7.48511 19.9286 7.72358C19.993 7.96205 20.0142 8.21397 19.9908 8.46284L19.8983 9.37685L19.7978 10.2598L19.7153 10.9209L19.6198 11.6308L19.5113 12.3766L19.3886 13.1498L19.2519 13.9385C19.1795 14.3363 19.1018 14.7336 19.0187 15.1306C18.7962 16.1783 18.5168 17.2078 18.1823 18.2127L17.9602 18.857L17.745 19.4393L17.542 19.9571L17.4475 20.1886L17.1972 20.7733C16.8755 21.5012 16.2683 21.9307 15.6259 21.9928L15.4651 21.9999H4.52788C4.17644 22.0031 3.83089 21.8928 3.52813 21.681C3.22537 21.4691 2.97677 21.1637 2.80889 20.7972L2.57567 20.2602L2.39472 19.8187L2.29922 19.5741L2.09817 19.0384C1.63907 17.773 1.26659 16.4658 0.984341 15.1294C0.929767 14.8699 0.877491 14.6098 0.827521 14.349L0.684774 13.5758L0.557106 12.8193L0.444517 12.0878L0.343991 11.3874L0.256533 10.7264L0.182144 10.1143L0.0916708 9.29929L0.0253237 8.63586L0.00823428 8.45329C-0.0125601 8.21887 0.0061259 7.98188 0.0632051 7.75611C0.120284 7.53034 0.214617 7.32029 0.340716 7.13819C0.466814 6.9561 0.622161 6.80558 0.797719 6.6954C0.973277 6.58522 1.16554 6.51758 1.36332 6.49641L1.50004 6.48806H4.50476L8.45744 0.858438ZM7.9518 12.1224C7.88379 11.8409 7.73093 11.5989 7.52233 11.4425C7.31372 11.2861 7.06393 11.2262 6.82053 11.2743C6.57714 11.3223 6.35713 11.4749 6.20241 11.7031C6.04768 11.9312 5.96905 12.2189 5.98149 12.5114L5.99456 12.6499L6.49719 16.2295L6.52232 16.3655C6.59032 16.6471 6.74318 16.8891 6.95179 17.0455C7.1604 17.2019 7.41018 17.2618 7.65358 17.2137C7.89698 17.1657 8.11698 17.0131 8.27171 16.7849C8.42643 16.5568 8.50506 16.2691 8.49263 15.9766L8.47956 15.8381L7.97693 12.2585L7.9518 12.1224ZM13.1822 11.2776C12.9392 11.2295 12.6898 11.289 12.4813 11.4447C12.2729 11.6005 12.1198 11.8416 12.0512 12.1224L12.0261 12.2585L11.5235 15.8381C11.4815 16.1384 11.5378 16.4463 11.6808 16.6989C11.8237 16.9515 12.0426 17.1297 12.2926 17.197C12.5427 17.2644 12.8049 17.2159 13.0258 17.0613C13.2466 16.9067 13.4094 16.6578 13.4807 16.3655L13.5059 16.2295L14.0085 12.6499C14.0521 12.3378 13.9895 12.018 13.8346 11.7607C13.6797 11.5034 13.445 11.3297 13.1822 11.2776ZM10.0015 2.38576L7.12145 6.48806H12.8816L10.0015 2.38576Z" fill="url(#paint0_linear_2309_1056)"/>
                <defs>
                <linearGradient id="paint0_linear_2309_1056" x1="-9.05044" y1="-17.3462" x2="33.963" y2="-9.69426" gradientUnits="userSpaceOnUse">
                <stop stop-color="#171111"/>
                <stop offset="0.663849" stop-color="#B07B58"/>
                </linearGradient>
                </defs>
              </svg>
              {productsList.length > 0 &&
                <span className={`${styles.basket__count} text-primary`}>{totalCount}</span>
              }
          </button>
        </div>
        <h2 className={`${styles.section__title} title-main`}>Магазин</h2>
        <div className={`${styles.filter} flex`}>
          <button className={`${styles.filter__btn} ${styles.filter__btnActive} btn-reset text-primary`} onClick={(e) => filterItems('all', e)}>Все продукты</button>
          <button className={`${styles.filter__btn} btn-reset text-primary`} onClick={(e) => filterItems('Парфюм', e)}>Парфюм</button>
          <button className={`${styles.filter__btn} btn-reset text-primary`} onClick={(e) => filterItems('Кондиционеры', e)}>Кондиционеры</button>
          <button className={`${styles.filter__btn} btn-reset text-primary`} onClick={(e) => filterItems('Термозащита', e)}>Термозащита</button>
          <button className={`${styles.filter__btn} btn-reset text-primary`} onClick={(e) => filterItems('Помады', e)}>Помады</button>
          <button className={`${styles.filter__btn} btn-reset text-primary`} onClick={(e) => filterItems('Гель', e)}>Гель</button>
          <button className={`${styles.filter__btn} btn-reset text-primary`} onClick={(e) => filterItems('Мусс', e)}>Мусс</button>
        </div>
        <ul className={`${styles.products} list-reset`}>
          {productsState.map((item, index) => 
            <Link to={item.href} className={`${styles.product}`} id={index}>
              <div className={`${styles.product__img}`}>
                <img src={item.img} alt={item.name} />
                <button className={`${styles.product__btn} ${item.isActive && styles.product__btnActive} btn-reset`} onClick={(e) => addProductToCart(e, item, index)}></button>
              </div>
              <h3 className={`${styles.product__name} title`}>{item.name}</h3>
              <p className={`${styles.product__descr} text-primary`}>{item.descr}</p>
              <p className={`${styles.product__price}`}>{item.price} ₽</p>
            </Link>
          )}
        </ul>
      </div>
      <ModalShop 
        nextStep={nextStep}
        setNextStep={setNextStep}
      />
    </section>
  );
};

export { ShopFull };