import { useSelector } from 'react-redux';
import ReviewThumbnail from '../reviewThumbnail/ReviewThumbnail';
import ReviewDetail from '../reviewDetail/ReviewDetail';
import ReviewSection from '../reviewSection/ReviewSection';
import styles from './Written.module.css';

const Written = () => {
  const writtenList = useSelector((state) => state.writtenList);
  return writtenList.map((item) => (
    <section className={styles.section} key={item.seq}>
      <ReviewThumbnail props={item} />
      <div className={styles.line} />
      <ReviewDetail props={item} />
      <div className={styles.line} />
      <ReviewSection props={item} />
    </section>
  ));
};

export default Written;
