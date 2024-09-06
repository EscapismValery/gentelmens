import styles from './BlogItem.module.scss';
import { Link } from 'react-router-dom';

const BlogItem = ({item, index}) => {

  return (      
    <li className={`${styles.article} flex`} id={index}>
      <div className={`${styles.article__img}`}>
        <img src={item.img} alt={item.title} />
      </div>
      <p className={`${styles.article__date} text-primary`}>{item.date}</p>
      <h3 className={`${styles.article__title} title`}>{item.title}</h3>
      <Link to={item.href} className={`${styles.article__btn} btn text-primary`}>Читать статью</Link>
    </li>
  );
};

export { BlogItem };