import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Available from './Available/Available';
import Written from './Written/Written';
import Nav from './Nav/Nav';

import styles from './ManageReview.module.css';

const ManageReview = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [isWritten, setIsWritten] = useState(false);
  const availableList = useSelector((state) => state.availableList);
  const writtenList = useSelector((state) => state.writtenList);
  const dispatch = useDispatch();

  const toggleHander = () => {
    setIsAvailable((state) => !isAvailable);
    setIsWritten((state) => !isWritten);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2 className={styles.header_title}>후기 관리</h2>
        <Nav
          available={isAvailable}
          written={isWritten}
          onClick={toggleHander}
        />
      </header>
      {isAvailable && <Available />}
      {isWritten && <Written />}
    </main>
  );
};

export default ManageReview;
