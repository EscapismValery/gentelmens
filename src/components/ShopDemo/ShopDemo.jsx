import styles from './ShopDemo.module.scss';
import products from '../../database/shopDemo';
import { Link } from 'react-router-dom';

const ShopDemo = ({isDop}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.top} ${isDop && styles.topCenter} flex`}>
          <h2 className={`${styles.section__title} subtitle`}>{isDop ? 'Дополнительные товары' : 'Магазин'}</h2>
          {!isDop && 
          <Link to={"/shop"} className={`${styles.top__link} flex`}>
            <span className={`text-primary link`}>Смотреть всю продукцию</span>
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
          }
        </div>
        <ul className={`${styles.products} list-reset`}>
          {products.map((item, index) => 
            <Link to={item.href} className={`${styles.product}`} id={index}>
              <div className={`${styles.product__img}`}>
                <img src={item.img} alt={item.name} />
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="54" height="54" rx="27" fill="url(#paint0_linear_2201_1151)"/>
                  <g clip-path="url(#clip0_2201_1151)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4574 16.3584C25.6373 16.1023 25.8605 15.8937 26.1125 15.7462C26.3645 15.5986 26.6397 15.5154 26.9205 15.502C27.2012 15.4885 27.4812 15.545 27.7424 15.6678C28.0037 15.7907 28.2403 15.9772 28.437 16.2153L28.5456 16.3584L32.4983 21.9881H35.499C35.7099 21.9875 35.9186 22.0399 36.1113 22.1417C36.3041 22.2436 36.4765 22.3926 36.6173 22.579C36.7582 22.7655 36.8642 22.9851 36.9286 23.2236C36.993 23.4621 37.0142 23.714 36.9908 23.9628L36.8983 24.8768L36.7978 25.7598L36.7153 26.4209L36.6198 27.1308L36.5113 27.8766L36.3886 28.6498L36.2519 29.4385C36.1795 29.8363 36.1018 30.2336 36.0187 30.6306C35.7962 31.6783 35.5168 32.7078 35.1823 33.7127L34.9602 34.357L34.745 34.9393L34.542 35.4571L34.4475 35.6886L34.1972 36.2733C33.8755 37.0012 33.2683 37.4307 32.6259 37.4928L32.4651 37.4999H21.5279C21.1764 37.5031 20.8309 37.3928 20.5281 37.181C20.2254 36.9691 19.9768 36.6637 19.8089 36.2972L19.5757 35.7602L19.3947 35.3187L19.2992 35.0741L19.0982 34.5384C18.6391 33.273 18.2666 31.9658 17.9843 30.6294C17.9298 30.3699 17.8775 30.1098 17.8275 29.849L17.6848 29.0758L17.5571 28.3193L17.4445 27.5878L17.344 26.8874L17.2565 26.2264L17.1821 25.6143L17.0917 24.7993L17.0253 24.1359L17.0082 23.9533C16.9874 23.7189 17.0061 23.4819 17.0632 23.2561C17.1203 23.0303 17.2146 22.8203 17.3407 22.6382C17.4668 22.4561 17.6222 22.3056 17.7977 22.1954C17.9733 22.0852 18.1655 22.0176 18.3633 21.9964L18.5 21.9881H21.5048L25.4574 16.3584ZM24.9518 27.6224C24.8838 27.3409 24.7309 27.0989 24.5223 26.9425C24.3137 26.7861 24.0639 26.7262 23.8205 26.7743C23.5771 26.8223 23.3571 26.9749 23.2024 27.2031C23.0477 27.4312 22.9691 27.7189 22.9815 28.0114L22.9946 28.1499L23.4972 31.7295L23.5223 31.8655C23.5903 32.1471 23.7432 32.3891 23.9518 32.5455C24.1604 32.7019 24.4102 32.7618 24.6536 32.7137C24.897 32.6657 25.117 32.5131 25.2717 32.2849C25.4264 32.0568 25.5051 31.7691 25.4926 31.4766L25.4796 31.3381L24.9769 27.7585L24.9518 27.6224ZM30.1822 26.7776C29.9392 26.7295 29.6898 26.789 29.4813 26.9447C29.2729 27.1005 29.1198 27.3416 29.0512 27.6224L29.0261 27.7585L28.5235 31.3381C28.4815 31.6384 28.5378 31.9463 28.6808 32.1989C28.8237 32.4515 29.0426 32.6297 29.2926 32.697C29.5427 32.7644 29.8049 32.7159 30.0258 32.5613C30.2466 32.4067 30.4094 32.1578 30.4807 31.8655L30.5059 31.7295L31.0085 28.1499C31.0521 27.8378 30.9895 27.518 30.8346 27.2607C30.6797 27.0034 30.445 26.8297 30.1822 26.7776ZM27.0015 17.8858L24.1215 21.9881H29.8816L27.0015 17.8858Z" fill="white"/>
                  </g>
                  <defs>
                  <linearGradient id="paint0_linear_2201_1151" x1="-24.4362" y1="-42.5769" x2="90.9568" y2="-19.9962" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#171111"/>
                  <stop offset="0.663849" stop-color="#B07B58"/>
                  </linearGradient>
                  <clipPath id="clip0_2201_1151">
                  <rect width="24" height="24" fill="white" transform="translate(15 15)"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={`${styles.product__name} title`}>{item.name}</h3>
              <p className={`${styles.product__descr} text-primary`}>{item.descr}</p>
              {/* <ul className={`${styles.product__directionList} list-reset flex`}>
                {item.direction.map((dir, indexDir) => 
                  <li className={`${styles.product__directionItem} text-primary`} id={indexDir}>{dir}</li>
                )}
              </ul> */}
              <p className={`${styles.product__price}`}>{item.price} ₽</p>
            </Link>
          )}
        </ul>
        <Link to={"/shop"} className={`${styles.top__linkBottom} btn text-primary`}>Смотреть всю продукцию</Link>
      </div>
    </section>
  );
};

export { ShopDemo };