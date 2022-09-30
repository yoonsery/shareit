import { useSelector } from 'react-redux';
import Available from './Available/Available';
import Written from './Written/Written';
import Nav from './Nav/Nav';

import styles from './ManageReview.module.css';

const ManageReview = () => {
  const isAvailable = useSelector((state) => state.reviewType.isAvailable);
  const isWritten = useSelector((state) => state.reviewType.isWritten);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2 className={styles.header_title}>후기 관리</h2>
        <Nav />
      </header>
      {isAvailable && <Available />}
      {isWritten && <Written />}
    </main>
  );
};

export default ManageReview;
