import { useSelector } from 'react-redux';
import styles from './Nav.module.css';

const Nav = ({ available, written, onClick }) => {
  const availableList = useSelector((state) => state.availableList);
  const writtenList = useSelector((state) => state.writtenList);

  let availableStyles = available
    ? `${styles.list} ${styles.available} ${styles.active}`
    : `${styles.list} ${styles.available}`;

  let writtenStyles = written
    ? `${styles.list} ${styles.written} ${styles.active}`
    : `${styles.list} ${styles.written}`;

  const onClickHandler = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li onClick={onClickHandler} className={availableStyles}>
          작성가능 후기 ({availableList.length})
        </li>
        <li onClick={onClickHandler} className={writtenStyles}>
          작성한 후기 ({writtenList.length})
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
