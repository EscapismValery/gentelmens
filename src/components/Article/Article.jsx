import styles from './Article.module.scss';

const Article = ({title, items}) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <article className={`${styles.article}`}>
          <div className={`${styles.article__top} flex`}>
            <p className={`${styles.article__date} text-primary`}>15 марта</p>
            <h1 className={`${styles.article__title} title-main`}>{title}</h1>
            <p className={`${styles.article__descr} text-primary`}>Выступи в роли переводчика и корректора орфографии. Я буду говорить на любом языке, а ты будешь определять язык, переводить его и отвечать исправленной и улучшенной версией моего текста на английском языке. Замени мои упрощенные слова и предложения уровня A0 на более красивые слова и предложения.</p>
          </div>
          <div className={`${styles.article__content} flex`}>
            {items.map((row, indexRow) => 
              <div className={`${styles.article__row} flex`} id={indexRow}>
                {row.map((col, indexCol) =>
                  <div className={`${styles.article__col} flex`} id={indexCol}>
                    <div className={`${styles.article__img}`}>
                      <img src={col.img} alt={col.title} />
                    </div>
                    <h2 className={`${styles.article__subtitle} subtitle`}>{col.title}</h2>
                    <div className={`${styles.article__textCont} flex`}>
                      {col.text.map((p, indexP) =>
                        <p className={`${styles.article__text} text-primary`} id={indexP}>{p}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export { Article };