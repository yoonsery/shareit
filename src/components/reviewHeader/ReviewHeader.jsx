import { useSelector } from 'react-redux';
import ReviewNav from '../reviewNav/ReviewNav';
import styles from './ReviewHeader.module.css';

const ReviewHeader = () => {
  const isAvailable = useSelector((state) => state.reviewType.isAvailable);

  return (
    <header className={styles.header}>
      <ReviewNav />
      <div className={styles.line} />
      <div className={isAvailable ? `${styles.left}` : `${styles.right}`} />
    </header>
  );
};

export default ReviewHeader;
