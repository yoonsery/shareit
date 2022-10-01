import { useSelector } from 'react-redux';
import Available from '../available/Available';
import Written from '../written/Written';
import Nav from '../nav/Nav';
import ReviewFooter from '../reviewFooter/ReviewFooter';

import styles from './ManageReview.module.css';

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
      {isAvailable && <Available />}
      {isWritten && <Written />}
      <ReviewFooter />
    </main>
  );
};

export default ManageReview;
