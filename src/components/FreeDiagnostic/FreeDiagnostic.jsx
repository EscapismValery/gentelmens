import styles from './FreeDiagnostic.module.scss';

const FreeDiagnostic = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <div className={`${styles.wrap} flex`}>
          <div className={styles.content}>
            <h2 className={`${styles.content__title} subtitle`}>Бесплатная диагностика кожи головы</h2>
            <p className={`${styles.content__descr} text-primary`}>Назови три любых мужских прически и получи бесплатную диагностику кожи головы</p>
            <form className={`${styles.form} flex`}>
              <input className={`${styles.form__field} text-primary`} type="text" name='haircut1' placeholder='Первая стрижка' required/>
              <input className={`${styles.form__field} text-primary`} type="text" name='haircut2' placeholder='Вторая стрижка' required/>
              <input className={`${styles.form__field} text-primary`} type="text" name='haircut3' placeholder='Третяя стрижка' required/>
              <button className={`${styles.form__btn} btn-reset btn text-primary`} type='submit'>Подтвердить</button>
            </form>
          </div>
          <div className={styles.img}></div>          
        </div>
      </div>
    </section>
  );
};

export { FreeDiagnostic };