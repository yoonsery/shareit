import { useContext } from 'react';
import { ReviewContext } from '../../../context/context';
import ReviewLayout from '../../Layout/ReviewLayout';

const WrittenReview = () => {
  const { writtenList } = useContext(ReviewContext);
  return writtenList.map((item) => (
    <ReviewLayout props={item} key={item.seq} />
  ));
};

export default WrittenReview;
