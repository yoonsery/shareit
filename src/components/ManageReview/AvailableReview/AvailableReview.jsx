import { useContext } from 'react';
import { ReviewContext } from '../../../context/context';
import ReviewLayout from '../../Layout/ReviewLayout';

const AvailableReview = () => {
  const { availableList } = useContext(ReviewContext);

  return availableList.map((item) => (
    <ReviewLayout props={item} key={item.seq} />
  ));
};

export default AvailableReview;
