import { Link } from 'react-router-dom';
import styles from './ModalShop.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { activePopup, decrCountAction, incrCountAction, removeProductAction } from '../../store/productsReducer';

const ModalShop = ({nextStep, setNextStep}) => {
  const dispatch = useDispatch();
  const productsState = useSelector(state => state.products.products);
  const totalPrice = useSelector(state => state.products.totalPrice);
  const popupActive = useSelector(state => state.products.popupActive);

  function shopPopup(bool) {
    dispatch(activePopup(bool));
  }

  function removeProductToCart(item) {
    item.isActive = false;
    dispatch(removeProductAction(item));
    item.count = 1;
  }

  function incrementCount(item) {
    if (item.count > 9) return;
    item.count++;
    item.totalPrice = item.count * item.price;
    dispatch(incrCountAction(item))
  }

  function decrementCount(item) {
    if (item.count === 1) {
      item.count = 1;
      item.isActive = false;
      dispatch(removeProductAction(item));
    } else {
      item.count--;
      item.totalPrice = item.count * item.price;
      dispatch(decrCountAction(item))
    }
  }

  return (
    <div className={`${styles.modal} ${popupActive && styles.modal_active}`} onClick={() => shopPopup(false)}>
      <div className={`${styles.modal__content} ${popupActive && styles.modal__content_active} flex`} onClick={(e) => e.stopPropagation()}>
        {productsState.length === 0 
        ?
        <div className={`${styles.modal__info} ${productsState.length === 0 && styles.modal__info_active}`}>
          <button className={`${styles.modal__close} text-primary flex`} onClick={() => shopPopup(false)}>Свернуть</button>
          <h3 className={`${styles.modal__title} title-main`}>В корзине нет товаров</h3>
          <Link to={'/shop'} className={`${styles.modal__btn} btn text-primary flex`} onClick={() => shopPopup(false)}>
            Перейти в магазин
          </Link>
        </div>
        :
        <div className={`${styles.modal__info} ${!nextStep && productsState.length !== 0 && styles.modal__info_active}`}>
          <button className={`${styles.modal__close} text-primary flex`} onClick={() => shopPopup(false)}>Свернуть</button>
          <h3 className={`${styles.modal__title} title-main`}>Ваш заказ</h3>
          <ul className={`${styles.products} flex`}>
            {productsState.map((item, index) => 
              <li className={`${styles.product} flex`} id={index}>
                <div className={`${styles.product__info} flex`}>
                  <div className={`${styles.product__img} flex`}>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className={`${styles.product__text}`}>
                    <h4 className={`${styles.product__title} title`}>{item.name}</h4>
                    <p className={`${styles.product__descr} text-primary`}>{item.descr}</p>
                  </div>
                </div>
                <div className={`${styles.product__settings} flex`}>
                  <div className={`${styles.product__settingsTop} flex`}>
                    <p className={`${styles.product__totalPrice} title`}>{item.totalPrice} ₽</p>
                    <span className={`${styles.product__delete}`} onClick={() => removeProductToCart(item)}>&#10006;</span>
                  </div>
                  <div className={`${styles.product__settingsBottom} flex`}>
                    <button className={`${styles.product__settingsBtn} title`} onClick={() => decrementCount(item)}>&minus;</button>
                    <p className={`${styles.product__count} title`}>{item.count}</p>
                    <button className={`${styles.product__settingsBtn} title`} onClick={() => incrementCount(item)}>+</button>
                  </div>
                </div>
              </li>
            )}
          </ul>
          <div className={`${styles.modal__bottom}`}>
            <div className={`${styles.modal__total} flex`}>
              <p className={`${styles.modal__totalText} title`}>Итого к оплате:</p>
              <p className={`${styles.modal__totalText} title`}>{totalPrice} ₽</p>
            </div>
            <div className={`${styles.modal__memo}`}>
              <h4 className={`${styles.modal__memoTitle} text-primary`}>Памятка по заказу:</h4>
              <p className={`${styles.modal__memoText} text-primary`}>Забрать заказ после оплаты можно будет по адресу: <b>Город Пермь, Революции 22.</b> После оплаты заказ будет готов в ту же минуту!</p>
            </div>
            <button className={`${styles.modal__btn} btn-reset btn text-primary flex`} onClick={() => setNextStep(true)}>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 1.91797C2.75544 1.91797 1.80161 2.31306 1.09835 3.01632C0.395088 3.71958 0 4.67341 0 5.66797V6.91797H25V5.66797C25 4.67341 24.6049 3.71958 23.9017 3.01632C23.1984 2.31306 22.2446 1.91797 21.25 1.91797H3.75ZM25 9.41797H0V18.168C0 19.1625 0.395088 20.1164 1.09835 20.8196C1.80161 21.5229 2.75544 21.918 3.75 21.918H21.25C22.2446 21.918 23.1984 21.5229 23.9017 20.8196C24.6049 20.1164 25 19.1625 25 18.168V9.41797ZM7.5 15.668C7.5 15.3364 7.6317 15.0185 7.86612 14.7841C8.10054 14.5497 8.41848 14.418 8.75 14.418H14.2675L14.1163 14.2667C13.8817 14.0323 13.7499 13.7144 13.7497 13.3828C13.7496 13.0512 13.8812 12.7331 14.1156 12.4986C14.35 12.264 14.668 12.1322 14.9996 12.1321C15.3311 12.132 15.6492 12.2636 15.8837 12.498L18.1688 14.7842C18.4031 15.0186 18.5347 15.3365 18.5347 15.668C18.5347 15.9994 18.4031 16.3173 18.1688 16.5517L15.8837 18.8367C15.7684 18.9561 15.6305 19.0513 15.478 19.1168C15.3255 19.1824 15.1615 19.2168 14.9955 19.2183C14.8295 19.2197 14.6649 19.1881 14.5113 19.1252C14.3577 19.0624 14.2181 18.9696 14.1008 18.8522C13.9834 18.7348 13.8906 18.5953 13.8277 18.4417C13.7649 18.288 13.7332 18.1234 13.7347 17.9575C13.7361 17.7915 13.7706 17.6275 13.8361 17.475C13.9016 17.3225 13.9969 17.1845 14.1163 17.0692L14.2675 16.918H8.75C8.41848 16.918 8.10054 16.7863 7.86612 16.5519C7.6317 16.3174 7.5 15.9995 7.5 15.668Z" fill="white"/>
              </svg>
              Перейти к оплате
            </button>
          </div>
        </div>
        }
        <form className={`${styles.modal__form} ${nextStep && productsState.length !== 0 && styles.modal__form_active}`} action="">
          <button className={`${styles.modal__close} text-primary flex`} onClick={() => setNextStep(false)}>Вернуться к заказу</button>
          <h3 className={`${styles.modal__title} subtitle`}>Форма заявки</h3>
          <div className={`${styles.form} flex`}>
            <label className={`${styles.form__label} text-primary`} htmlFor="formCertName">На кого сертификат</label>
            <input className={`${styles.form__input} text-primary input`} type="text" name='formCertName' placeholder='Имя' required/>
            <label className={`${styles.form__label} text-primary`} htmlFor="formCertPhone">Номер телефона</label>
            <input className={`${styles.form__input} text-primary input`} type="phone" name='formCertPhone' placeholder='+7' required/>
            <label className={`${styles.form__label} text-primary`} htmlFor="formCertEmail">Email для получения чека и покупки</label>
            <input className={`${styles.form__input} text-primary input`} type="email" name='formCertEmail' placeholder='E-mail' required/>
          </div>
          <div className={`${styles.modal__bottom}`}>
            <div className={`${styles.modal__total} flex`}>
              <p className={`${styles.modal__totalText} title`}>Итого к оплате:</p>
              <p className={`${styles.modal__totalText} title`}>{totalPrice} ₽</p>
            </div>
            <div className={`${styles.modal__memo}`}>
              <h4 className={`${styles.modal__memoTitle} text-primary`}>Памятка по заказу:</h4>
              <p className={`${styles.modal__memoText} text-primary`}>Забрать заказ после оплаты можно будет по адресу: <b>Город Пермь, Революции 22.</b> После оплаты заказ будет готов в ту же минуту!</p>
            </div>
            <button className={`${styles.form__btn} btn-reset btn text-primary flex`}>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 1.91797C2.75544 1.91797 1.80161 2.31306 1.09835 3.01632C0.395088 3.71958 0 4.67341 0 5.66797V6.91797H25V5.66797C25 4.67341 24.6049 3.71958 23.9017 3.01632C23.1984 2.31306 22.2446 1.91797 21.25 1.91797H3.75ZM25 9.41797H0V18.168C0 19.1625 0.395088 20.1164 1.09835 20.8196C1.80161 21.5229 2.75544 21.918 3.75 21.918H21.25C22.2446 21.918 23.1984 21.5229 23.9017 20.8196C24.6049 20.1164 25 19.1625 25 18.168V9.41797ZM7.5 15.668C7.5 15.3364 7.6317 15.0185 7.86612 14.7841C8.10054 14.5497 8.41848 14.418 8.75 14.418H14.2675L14.1163 14.2667C13.8817 14.0323 13.7499 13.7144 13.7497 13.3828C13.7496 13.0512 13.8812 12.7331 14.1156 12.4986C14.35 12.264 14.668 12.1322 14.9996 12.1321C15.3311 12.132 15.6492 12.2636 15.8837 12.498L18.1688 14.7842C18.4031 15.0186 18.5347 15.3365 18.5347 15.668C18.5347 15.9994 18.4031 16.3173 18.1688 16.5517L15.8837 18.8367C15.7684 18.9561 15.6305 19.0513 15.478 19.1168C15.3255 19.1824 15.1615 19.2168 14.9955 19.2183C14.8295 19.2197 14.6649 19.1881 14.5113 19.1252C14.3577 19.0624 14.2181 18.9696 14.1008 18.8522C13.9834 18.7348 13.8906 18.5953 13.8277 18.4417C13.7649 18.288 13.7332 18.1234 13.7347 17.9575C13.7361 17.7915 13.7706 17.6275 13.8361 17.475C13.9016 17.3225 13.9969 17.1845 14.1163 17.0692L14.2675 16.918H8.75C8.41848 16.918 8.10054 16.7863 7.86612 16.5519C7.6317 16.3174 7.5 15.9995 7.5 15.668Z" fill="white"/>
              </svg>
              Оплатить
            </button>
            <p className={`${styles.form__subtext} text-primary`}>Нажимая на кнопку вы соглашаетесь с условиями соглашения и обраткой данных</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ModalShop };