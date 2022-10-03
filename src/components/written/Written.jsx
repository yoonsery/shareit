import { useSelector } from 'react-redux';
import ReviewThumbnail from '../reviewThumbnail/ReviewThumbnail';
import ReviewDetail from '../reviewDetail/ReviewDetail';
import styles from './Written.module.css';
import Review from '../review/Review';

const Written = () => {
  const writtenList = useSelector((state) => state.writtenList);
  return writtenList.map((item) => (
    <section className={styles.section} key={item.seq}>
      <ReviewThumbnail props={item} />
      <div className={styles.line} />
      <ReviewDetail props={item} />
      <div className={styles.line} />
      <Review props={item} />
    </section>
  ));
};

export default Written;
