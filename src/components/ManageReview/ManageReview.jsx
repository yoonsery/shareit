import { useState } from 'react';
import AvailableReview from './AvailableReview/AvailableReview';
import WrittenReview from './WrittenReview/WrittenReview';
import Nav from './Nav/Nav';
import styles from './ManageReview.module.css';

const ManageReview = () => {
  // const [isMobile, setIsMobile] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isWritten, setIsWritten] = useState(true);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.header_title}>후기 관리</h2>
        <Nav available={isAvailable} written={isWritten} />
      </header>
      {isAvailable && <AvailableReview />}
      {isWritten && <WrittenReview />}
    </main>
  );
};

export default ManageReview;
