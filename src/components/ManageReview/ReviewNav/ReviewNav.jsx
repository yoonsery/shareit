import { useContext } from 'react';
import { ReviewContext } from '../../../context/context';
import styles from './ReviewNav.module.css';

const ReviewNav = () => {
  const { availableList } = useContext(ReviewContext);
  const { writtenList } = useContext(ReviewContext);
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={`${styles.list} ${styles.available}`}>
          작성가능 후기 ({availableList.length})
        </li>
        <li className={`${styles.list} ${styles.written}`}>
          작성한 후기 ({writtenList.length})
        </li>
      </ul>
    </nav>
  );
};

export default ReviewNav;
