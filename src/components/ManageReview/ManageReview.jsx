import { useSelector } from 'react-redux';
import Nav from '../nav/Nav';
import ReviewFooter from '../reviewFooter/ReviewFooter';

import styles from './ManageReview.module.css';
import InfiniteReviews from '../infiniteReviews/InfiniteReviews';

const ManageReview = () => {
  const isAvailable = useSelector((state) => state.reviewType.isAvailable);
  const isWritten = useSelector((state) => state.reviewType.isWritten);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Nav />
        <div className={styles.line} />
        <div className={isAvailable ? `${styles.left}` : `${styles.right}`} />
      </header>
      <InfiniteReviews isAvailable={isAvailable} isWritten={isWritten} />
      <ReviewFooter />
    </main>
  );
};

export default ManageReview;
