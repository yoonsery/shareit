import { useSelector } from 'react-redux';
import styles from './Nav.module.css';

const Nav = ({ available, written }) => {
  const availableList = useSelector((state) => state.availableList);
  const writtenList = useSelector((state) => state.writtenList);

  let availableStyles = available
    ? `${styles.list} ${styles.available} ${styles.active}`
    : `${styles.list} ${styles.available}`;

  let writtenStyles = written
    ? `${styles.list} ${styles.written} ${styles.active}`
    : `${styles.list} ${styles.written}`;

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={availableStyles}>
          작성가능 후기 ({availableList.length})
        </li>
        <li className={writtenStyles}>작성한 후기 ({writtenList.length})</li>
      </ul>
    </nav>
  );
};

export default Nav;
