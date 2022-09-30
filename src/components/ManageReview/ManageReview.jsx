import { useSelector } from 'react-redux';
import Available from './Available/Available';
import Written from './Written/Written';
import Nav from './Nav/Nav';

import styles from './ManageReview.module.css';
import Footer from './Footer/Footer';

const ManageReview = () => {
  const isAvailable = useSelector((state) => state.reviewType.isAvailable);
  const isWritten = useSelector((state) => state.reviewType.isWritten);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        {/* <h2 className={styles.header_title}>후기 관리</h2> */}
        <Nav />
        <div className={styles.line} />
        <div className={isAvailable ? `${styles.left}` : `${styles.right}`} />
      </header>
      {isAvailable && <Available />}
      {isWritten && <Written />}
      <Footer />
    </main>
  );
};

export default ManageReview;
