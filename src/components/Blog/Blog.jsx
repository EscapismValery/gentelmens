import styles from './Blog.module.scss';
import articles from '../../database/blog';
import { BlogItem } from '../BlogItem';


const Blog = () => {

  return (
    <section className={styles.section}>
      <div className={`${styles.section__container} container`}>
        <h2 className={`${styles.section__title} title-main`}>Блог</h2>
        <ul className={`${styles.articles} list-reset`}>
        {articles.map((item, index) => 
          <BlogItem item={item} index={index}/>
        )}
        </ul>
      </div>
    </section>
  );
};

export { Blog };