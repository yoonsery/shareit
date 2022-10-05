import { useSelector } from 'react-redux';
import ReviewHeader from './reviewHeader/ReviewHeader';
import Available from './available/Available';
import Written from './written/Written';
import ReviewFooter from './reviewFooter/ReviewFooter';

import styles from './Review.module.css';

const Review = () => {
  const isAvailable = useSelector((state) => state.reviewType.isAvailable);
  const isWritten = useSelector((state) => state.reviewType.isWritten);

  return (
    <main className={styles.main}>
      <ReviewHeader />
      {isAvailable && <Available />}
      {isWritten && <Written />}
      <ReviewFooter />
    </main>
  );
};

export default Review;
