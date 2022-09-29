import ReviewItem from '../../Layout/ReviewItem';
import availableData from '../../../db/availableData.json';

const AvailableReview = () => {
  return availableData.map((item) => (
    <ReviewItem props={item} key={item.seq} />
  ));
};

export default AvailableReview;
