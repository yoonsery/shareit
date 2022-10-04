import { useSelector } from 'react-redux';
import ReviewFooter from '../reviewFooter/ReviewFooter';
import Available from '../available/Available';
import Written from '../written/Written';
import ReviewHeader from '../reviewHeader/ReviewHeader';
// import InfiniteReviews from '../infiniteReviews/InfiniteReviews';
import styles from './ReviewPage.module.css';

const ReviewPage = () => {
  const isAvailable = useSelector((state) => state.reviewType.isAvailable);
  const isWritten = useSelector((state) => state.reviewType.isWritten);

  return (
    <main className={styles.main}>
      <ReviewHeader />
      {/* <Available isAvailable={isAvailable} /> */}
      {isAvailable && <Available />}
      {isWritten && <Written />}
      {/* <InfiniteReviews isAvailable={isAvailable} isWritten={isWritten} /> */}
      <ReviewFooter />
    </main>
  );
};

export default ReviewPage;
