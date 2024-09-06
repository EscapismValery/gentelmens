import styles from './ModalCert.module.scss';
import imgCert1500 from '../../images/certificates/modal/1500.png';

const ModalCert = ({active, setActive, priceCert, nextStep, setNextStep}) => {
  return (
    <div className={`${styles.modal} ${active && styles.modal_active}`} onClick={() => setActive(false)}>
      <div className={`${styles.modal__content} ${active && styles.modal__content_active} flex`} onClick={(e) => e.stopPropagation()}>
        <div className={`${styles.modal__close} flex`} onClick={() => setActive(false)}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L1 1M6 6L11 11M6 6L11 1M6 6L1 11" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className={`${styles.modal__info} ${!nextStep && styles.modal__info_active}`}>
          <h3 className={`${styles.modal__title} subtitle`}>Сертификат</h3>
          <h4 className={`${styles.modal__price} title`}>Номиналом {priceCert} <span>₽</span></h4>
          <p className={`${styles.modal__descr} text-primary`}>Данным сертификатом вы можете воспользоваться в любом заведении Сети мужских парикмахерских «13 by TIMATI» на территории города Москва. Списание денежных средств с сертификата возможно как на получение услуг, так и на</p>
          <div className={`${styles.features} flex`}>
            <div className={`${styles.features__item}`}>
              <h5 className={`${styles.features__title} text-primary`}>Что включено?</h5>
              <div className={`${styles.features__subitems} flex`}>
                <p className={`${styles.features__subitem} text-primary`}>Бритье</p>
                <p className={`${styles.features__subitem} text-primary`}>Волосы</p>
              </div>
            </div>
            <div className={`${styles.features__item}`}>
              <h5 className={`${styles.features__title} text-primary`}>Срок действия:</h5>
              <p className={`${styles.features__descr} text-primary`}>2 года с момента покупки</p>
            </div>
            <div className={`${styles.features__item}`}>
              <h5 className={`${styles.features__title} text-primary`}>Где использовать?</h5>
              <p className={`${styles.features__descr} text-primary`}>АДРЕС БАРБЕРШОПА !!!!!!!!!!!!!</p>
            </div>
          </div>
          <button className={`${styles.modal__btn} btn-reset btn text-primary`} onClick={() => setNextStep(true)}>Перейти к оплате</button>
        </div>
        <form className={`${styles.modal__form} ${nextStep && styles.modal__form_active}`} action="">
          <h3 className={`${styles.modal__title} subtitle`}>Форма заявки</h3>
          <h4 className={`${styles.modal__price} title`}>Сертификат {priceCert} <span>₽</span></h4>
          <div className={`${styles.form} flex`}>
            <label className={`${styles.form__label} text-primary`} htmlFor="formCertName">На кого сертификат</label>
            <input className={`${styles.form__input} text-primary input`} type="text" name='formCertName' placeholder='Имя' required/>
            <label className={`${styles.form__label} text-primary`} htmlFor="formCertPhone">Номер телефона</label>
            <input className={`${styles.form__input} text-primary input`} type="phone" name='formCertPhone' placeholder='+7' required/>
            <label className={`${styles.form__label} text-primary`} htmlFor="formCertEmail">Email для получения чека и покупки</label>
            <input className={`${styles.form__input} text-primary input`} type="email" name='formCertEmail' placeholder='E-mail' required/>
          </div>
          <button className={`${styles.form__btn} btn-reset btn text-primary flex`}>
            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 1.91797C2.75544 1.91797 1.80161 2.31306 1.09835 3.01632C0.395088 3.71958 0 4.67341 0 5.66797V6.91797H25V5.66797C25 4.67341 24.6049 3.71958 23.9017 3.01632C23.1984 2.31306 22.2446 1.91797 21.25 1.91797H3.75ZM25 9.41797H0V18.168C0 19.1625 0.395088 20.1164 1.09835 20.8196C1.80161 21.5229 2.75544 21.918 3.75 21.918H21.25C22.2446 21.918 23.1984 21.5229 23.9017 20.8196C24.6049 20.1164 25 19.1625 25 18.168V9.41797ZM7.5 15.668C7.5 15.3364 7.6317 15.0185 7.86612 14.7841C8.10054 14.5497 8.41848 14.418 8.75 14.418H14.2675L14.1163 14.2667C13.8817 14.0323 13.7499 13.7144 13.7497 13.3828C13.7496 13.0512 13.8812 12.7331 14.1156 12.4986C14.35 12.264 14.668 12.1322 14.9996 12.1321C15.3311 12.132 15.6492 12.2636 15.8837 12.498L18.1688 14.7842C18.4031 15.0186 18.5347 15.3365 18.5347 15.668C18.5347 15.9994 18.4031 16.3173 18.1688 16.5517L15.8837 18.8367C15.7684 18.9561 15.6305 19.0513 15.478 19.1168C15.3255 19.1824 15.1615 19.2168 14.9955 19.2183C14.8295 19.2197 14.6649 19.1881 14.5113 19.1252C14.3577 19.0624 14.2181 18.9696 14.1008 18.8522C13.9834 18.7348 13.8906 18.5953 13.8277 18.4417C13.7649 18.288 13.7332 18.1234 13.7347 17.9575C13.7361 17.7915 13.7706 17.6275 13.8361 17.475C13.9016 17.3225 13.9969 17.1845 14.1163 17.0692L14.2675 16.918H8.75C8.41848 16.918 8.10054 16.7863 7.86612 16.5519C7.6317 16.3174 7.5 15.9995 7.5 15.668Z" fill="white"/>
            </svg>
            Оплатить {priceCert} <span>₽</span>
          </button>
          <p className={`${styles.form__subtext} text-primary`}>Нажимая на кнопку вы соглашаетесь с условиями соглашения и обраткой данных</p>
        </form>
        <div className={styles.modal__img}>
          <img src={imgCert1500} alt="Подарочный сертификат в барбершоп Gentelments" />
        </div>
      </div>
    </div>
  );
};

export { ModalCert };