import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { availableActions } from '../../store/available';
import { writtenActions } from '../../store/written';
import Available from '../available/Available';
import Written from '../written/Written';

const InfiniteReviews = ({ isAvailable, isWritten }) => {
  const availableReviewList = useSelector((state) => state.availableList);
  const writtenReviewList = useSelector((state) => state.writtenList);
  const dispatch = useDispatch();

  const [availCount, setAvailCount] = useState(5);
  const [writtenCount, setWrittenCount] = useState(5);
  // const [reviewCount, setReviewCount] = useState({
  //   availCount: 5,
  //   writtenCount: 5,
  // });
  const [loadingCount, setLoadingCount] = useState(5);

  const infiniteScrollHandler = useCallback(() => {
    if (isAvailable) {
      dispatch(writtenActions.getMoreList(0));
      dispatch(availableActions.getMoreList(availCount));
    }

    if (isWritten) {
      dispatch(availableActions.getMoreList(0));
      dispatch(writtenActions.getMoreList(writtenCount));
    }
  }, [isAvailable, isWritten, dispatch, availCount, writtenCount]);

  useEffect(() => {
    infiniteScrollHandler();
    window.addEventListener('dblclick', () => {
      // if (availCount > availableReviewList.length) {
      //   setAvailCount(availableReviewList.length);
      //   return;
      // }

      availCount >= availableReviewList.length &&
        setAvailCount(availableReviewList.length);

      writtenCount >= writtenReviewList.length &&
        setWrittenCount(writtenReviewList.length);

      if (isAvailable) {
        setAvailCount(availCount + loadingCount);
        setWrittenCount(5);
      }

      if (isWritten) {
        setWrittenCount(writtenCount + loadingCount);
        setAvailCount(5);
      }

      // console.log(availCount, writtenCount);
      console.count(availCount, writtenCount);
      console.count();
      return () => {
        console.count();
      };
    });
  }, [
    isAvailable,
    isWritten,
    infiniteScrollHandler,
    availCount,
    writtenCount,
    loadingCount,
    availableReviewList.length,
    writtenReviewList.length,
  ]);

  return (
    <>
      {isAvailable && <Available props={availableReviewList} />}
      {isWritten && <Written props={writtenReviewList} />}
    </>
  );
};

export default InfiniteReviews;
