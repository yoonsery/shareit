import { useState } from 'react';
import AvailableReview from './AvailableReview/AvailableReview';
import WrittenReview from './WrittenReview/WrittenReview';
import styles from './ManageReview.module.css';
import ReviewNav from './ReviewNav/ReviewNav';

const ManageReview = () => {
  // const [isMobile, setIsMobile] = useState(true);
  const [isAvailable, setIsAvailable] = useState(true);
  const [isWritten, setIsWritten] = useState(false);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.header_title}>후기 관리</h2>
        <ReviewNav />
      </header>
      {isAvailable && <AvailableReview />}
      {isWritten && <WrittenReview />}
    </main>
  );
};

export default ManageReview;
