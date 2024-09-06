import styles from './ArticleRow.module.scss';
import articles from "../../database/blog";
import { BlogItem } from '../BlogItem';

const ArticleRow = ({title}) => {
  let sortArticles = articles.filter((item) => {
    return (item.title !== title);
  }).splice(0, 3);

  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <div className={`${styles.wrap}`}>
          <h2 className={`${styles.section__title} subtitle`}>СЛЕДУЮЩИЕ РАЗДЕЛЫ</h2>
          <ul className={`${styles.articles} list-reset`}>
            {sortArticles.map((item, index) =>
              <BlogItem item={item} index={index}/>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { ArticleRow };