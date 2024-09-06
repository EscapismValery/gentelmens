import styles from './Certificates.module.scss';
import cert1500 from '../../images/certificates/1.png';

const Certificates = ({setModalActive, setPrice, setNextStep}) => {
  const certList = [
    {
      price: '1 500',
      img: cert1500,
    },
    {
      price: '3 000',
      img: cert1500,
    },
    {
      price: '5 000',
      img: cert1500,
    },
    {
      price: '7 000',
      img: cert1500,
    },
    {
      price: '10 000',
      img: cert1500,
    },
    {
      price: '15 000',
      img: cert1500,
    },
  ]

  function PushInfoCert(price) {
    setPrice(price);
    setModalActive(true);
    setNextStep(false);
  }

  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <h2 className={`${styles.section__title} title-main`}>сертификаты</h2>
        <p className={`${styles.section__descr} text-primary`}>Выступи в роли переводчика и корректора орфографии. Я буду говорить на любом языке, а ты будешь определять язык, переводить его и отвечать исправленной и улучшенной версией моего текста на </p>
        <ul className={`${styles.items} list-reset`}>
          {certList.map((item, index) => 
            <li className={`${styles.item} flex`} id={index}>
              <div className={`${styles.item__content} flex`}>
                <div className={`${styles.item__top}`}>
                  <h3 className={`${styles.item__title} title`}>Подарочный сертификат</h3>
                  <a className={`${styles.item__link} link flex`} onClick={() => PushInfoCert(item.price)}>
                    <span className={`text-primary`}>Подробнее</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.82353 1.32422H14.1765M14.1765 1.32422V13.6772M14.1765 1.32422L1 14.5007" stroke="url(#paint0_linear_2201_79)" stroke-width="2" stroke-miterlimit="10"/>
                      <defs>
                      <linearGradient id="paint0_linear_2201_79" x1="-4.96264" y1="-9.06492" x2="23.1942" y2="-3.55504" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#171111"/>
                      <stop offset="0.663849" stop-color="#B07B58"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>
                <button className={`${styles.item__btn} btn-reset btn text-primary flex`} onClick={() => PushInfoCert(item.price)}>
                  <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 1.91797C2.75544 1.91797 1.80161 2.31306 1.09835 3.01632C0.395088 3.71958 0 4.67341 0 5.66797V6.91797H25V5.66797C25 4.67341 24.6049 3.71958 23.9017 3.01632C23.1984 2.31306 22.2446 1.91797 21.25 1.91797H3.75ZM25 9.41797H0V18.168C0 19.1625 0.395088 20.1164 1.09835 20.8196C1.80161 21.5229 2.75544 21.918 3.75 21.918H21.25C22.2446 21.918 23.1984 21.5229 23.9017 20.8196C24.6049 20.1164 25 19.1625 25 18.168V9.41797ZM7.5 15.668C7.5 15.3364 7.6317 15.0185 7.86612 14.7841C8.10054 14.5497 8.41848 14.418 8.75 14.418H14.2675L14.1163 14.2667C13.8817 14.0323 13.7499 13.7144 13.7497 13.3828C13.7496 13.0512 13.8812 12.7331 14.1156 12.4986C14.35 12.264 14.668 12.1322 14.9996 12.1321C15.3311 12.132 15.6492 12.2636 15.8837 12.498L18.1688 14.7842C18.4031 15.0186 18.5347 15.3365 18.5347 15.668C18.5347 15.9994 18.4031 16.3173 18.1688 16.5517L15.8837 18.8367C15.7684 18.9561 15.6305 19.0513 15.478 19.1168C15.3255 19.1824 15.1615 19.2168 14.9955 19.2183C14.8295 19.2197 14.6649 19.1881 14.5113 19.1252C14.3577 19.0624 14.2181 18.9696 14.1008 18.8522C13.9834 18.7348 13.8906 18.5953 13.8277 18.4417C13.7649 18.288 13.7332 18.1234 13.7347 17.9575C13.7361 17.7915 13.7706 17.6275 13.8361 17.475C13.9016 17.3225 13.9969 17.1845 14.1163 17.0692L14.2675 16.918H8.75C8.41848 16.918 8.10054 16.7863 7.86612 16.5519C7.6317 16.3174 7.5 15.9995 7.5 15.668Z" fill="white"/>
                  </svg>
                  {item.price}
                </button>
              </div>
              <div className={`${styles.item__img}`}>
                <img src={item.img} alt="сертификат" />
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export { Certificates };