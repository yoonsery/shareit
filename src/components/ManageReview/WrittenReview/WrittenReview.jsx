import ReviewItem from '../../Layout/ReviewItem';
import reviewData from '../../../db/reviewData.json';

const WrittenReview = () => {
  return reviewData.map((item) => <ReviewItem props={item} key={item.seq} />);
};

export default WrittenReview;
