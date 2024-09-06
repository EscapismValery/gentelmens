import styles from './Contacts.module.scss';
import tgIcon from '../../icons/contacts/socials/tg.svg';
import wsIcon from '../../icons/contacts/socials/ws.svg'
import vkIcon from '../../icons/contacts/socials/vk.svg'
import okIcon from '../../icons/contacts/socials/ok.svg'

const Contacts = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <div className={`${styles.wrap} flex`}>
          <div className={`${styles.contacts}`}>
            <h2 className={`${styles.contacts__title} subtitle`}>контакты</h2>
            <div className={`${styles.contacts__wrap}`}>
              <div className={`${styles.contacts__item} ${styles.contacts__itemSocials}`}>
                <div className={`${styles.contacts__itemWrap} flex`}>
                  <div className={`${styles.contacts__itemTop}`}>
                    <h3 className={`${styles.contacts__itemTitle} title`}>Социальные сети</h3>
                    <p className={`${styles.contacts__itemText} text-primary`}>Тут будет текст про социальные</p>
                  </div>
                  <ul className={`${styles.socials} list-reset`}>
                    <li className={`${styles.socials__item}`}>
                      <a className={`${styles.socials__link} flex`} href=''>
                        <img src={tgIcon} alt="" />
                      </a>
                    </li>
                    <li className={`${styles.socials__item}`}>
                      <a className={`${styles.socials__link} flex`} href=''>
                      <img src={wsIcon} alt="" />
                      </a>
                    </li>
                    <li className={`${styles.socials__item}`}>
                      <a className={`${styles.socials__link} flex`} href=''>
                      <img src={vkIcon} alt="" />
                      </a>
                    </li>
                    <li className={`${styles.socials__item}`}>
                      <a className={`${styles.socials__link} flex`} href=''>
                      <img src={okIcon} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.contacts__item} ${styles.contacts__itemPhone}`}>
                <h4 className={`${styles.contacts__itemTitle} text-primary`}>Номер телефона</h4>
                <a href="tel:+73435555555" className={`${styles.contacts__itemLink} title`}>+7 343 555-55-55</a>
              </div>
              <div className={`${styles.contacts__item} ${styles.contacts__itemEmail}`}>
                <h4 className={`${styles.contacts__itemTitle} text-primary`}>Электронная почта</h4>
                <a href="mailto:hr@gentelmens.ru" className={`${styles.contacts__itemLink} title`}>hr@gentelmens.ru</a>
              </div>
              <div className={`${styles.contacts__item} ${styles.contacts__itemAddress}`}>
                <h4 className={`${styles.contacts__itemTitle} text-primary`}>Адрес салона</h4>
                <p className={`${styles.contacts__itemText} title`}>Революции 22</p>
                <span className={`${styles.contacts__itemDop} text-primary`}>Пермь</span>
              </div>
              <div className={`${styles.contacts__item} ${styles.contacts__itemTime}`}>
                <h4 className={`${styles.contacts__itemTitle} text-primary`}>Время работы салона</h4>
                <p className={`${styles.contacts__itemText} title`}>С 10:00 до 22:00</p>
                <span className={`${styles.contacts__itemDop} text-primary`}>Ежедневно</span>
              </div>
              <div className={`${styles.contacts__item} ${styles.contacts__itemCta}`}>
                <div className={`${styles.contacts__itemWrap} flex`}>
                  <div className={`${styles.contacts__itemTop}`}>
                    <h3 className={`${styles.contacts__itemTitle} title`}>Gentelmen’s activite variable </h3>
                    <p className={`${styles.contacts__itemText} text-primary`}>Каждому новому клиенту дарим скидку&nbsp;<span>200 рублей</span> на первую стрижку</p>
                  </div>
                  <button className={`${styles.contacts__itemBtn} btn-reset btn text-primary`}>Записаться к нам</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.map}`}>
            <h2 className={`${styles.map__title} subtitle`}>наше местоположение</h2>
            <div className={`${styles.map__wrap}`}>
              <iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=56.259052%2C58.005425&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMjYxODE2NDY3EjvQoNC-0YHRgdC40Y8sINCf0LXRgNC80YwsINGD0LvQuNGG0LAg0KDQtdCy0L7Qu9GO0YbQuNC4LCAyMiIKDUQJYUIVjgVoQg%2C%2C&z=16.59" allowfullscreen="true">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contacts };