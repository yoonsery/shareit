import { useSelector, useDispatch } from 'react-redux';
import { typeActions } from '../../../store/review-type';
import styles from './ReviewNav.module.css';

const ReviewNav = () => {
  const dispatch = useDispatch();
  const isAvailable = useSelector((state) => state.reviewType.isAvailable);
  const isWritten = useSelector((state) => state.reviewType.isWritten);
  const availLength = useSelector((state) => state.length.availLength);
  const writtenLength = useSelector((state) => state.length.writtenLength);

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
          작성가능 후기 ({availLength})
        </li>
        <li onClick={onClickHandler} className={writtenStyles}>
          작성한 후기 ({writtenLength})
        </li>
      </ul>
    </nav>
  );
};

export default ReviewNav;
