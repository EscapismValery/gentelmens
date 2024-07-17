import styles from './ShopDemo.module.scss';
import products from '../../database/shopDemo';

const ShopDemo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.section__title} subtitle`}>Магазин</h2>
        <ul className={`${styles.products} list-reset`}>
          {products.map((item, index) => 
            <li className={`${styles.product}`} id={index}>
              <div className={`${styles.product__img}`}>
                <img src={item.img} alt={item.name} />
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect className={styles.svgBack} width="54" height="54" rx="27" fill="white"/>
                  <g clip-path="url(#clip0_2263_1359)">
                  <path d="M39 15L15 15L15 39H39V15Z" fill="white" fill-opacity="0.01"/>
                  <path className={styles.svgArrow} d="M36 27H18" stroke="#1F2F55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path className={styles.svgArrow} d="M30 21L36 27L30 33" stroke="#1F2F55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_2263_1359">
                  <rect width="24" height="24" fill="white" transform="translate(15 15)"/>
                  </clipPath>
                  </defs>
                </svg>
                <span className={`${styles.product__price}`}>{item.price}$</span>
              </div>
              <h3 className={`${styles.product__name} title`}>{item.name}</h3>
              <p className={`${styles.product__descr} text-primary`}>{item.descr}</p>
              <ul className={`${styles.product__directionList} list-reset flex`}>
                {item.direction.map((dir, indexDir) => 
                  <li className={`${styles.product__directionItem} text-primary`} id={indexDir}>{dir}</li>
                )}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export { ShopDemo };