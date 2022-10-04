import { useSelector, useDispatch } from 'react-redux';
import { typeActions } from '../../../store/review-type';
import styles from './ReviewNav.module.css';

const ReviewNav = () => {
  const dispatch = useDispatch();
  const isAvailable = useSelector((state) => state.reviewType.isAvailable);
  const isWritten = useSelector((state) => state.reviewType.isWritten);
  const availableList = useSelector((state) => state.availableList);
  const writtenList = useSelector((state) => state.writtenList);

  let availableStyles = isAvailable
    ? `${styles.list} ${styles.available} ${styles.active}`
    : `${styles.list} ${styles.available}`;

  let writtenStyles = isWritten
    ? `${styles.list} ${styles.written} ${styles.active}`
    : `${styles.list} ${styles.written}`;

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(typeActions.toggle());
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

export default ReviewNav;
