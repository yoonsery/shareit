import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { availableActions } from '../../store/available';
import { writtenActions } from '../../store/written';
import Available from '../available/Available';
import Written from '../written/Written';

const InfiniteReviews = ({ isAvailable, isWritten }) => {
  const dispatch = useDispatch();
  const [scrollOption, setScrollOption] = useState({
    reviewLength: 3,
  });

  const availableReviewList = useSelector((state) => state.availableList);
  const writtenReviewList = useSelector((state) => state.writtenList);

  const infiniteScrollHandler = useCallback(() => {
    !isAvailable && dispatch(availableActions.getNewList(0));
    isAvailable &&
      dispatch(availableActions.getNewList(scrollOption.reviewLength));

    !isWritten && dispatch(writtenActions.getNewList(0));
    isWritten && dispatch(writtenActions.getNewList(scrollOption.reviewLength));
  }, [isAvailable, isWritten, dispatch, scrollOption.reviewLength]);

  useEffect(() => {
    infiniteScrollHandler();
  }, [
    isAvailable,
    isWritten,
    infiniteScrollHandler,
    scrollOption.reviewLength,
  ]);

  return (
    <>
      {isAvailable && <Available props={availableReviewList} />}
      {isWritten && <Written props={writtenReviewList} />}
    </>
  );
};

export default InfiniteReviews;
