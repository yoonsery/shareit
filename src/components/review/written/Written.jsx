import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { lengthActions } from '../../../store/length';
import ReviewThumbnail from '../reviewThumbnail/ReviewThumbnail';
import ReviewDetail from '../reviewDetail/ReviewDetail';
import ReviewSection from '../reviewSection/ReviewSection';
import reviewData from '../../../db/reviewData.json';
import styles from './Written.module.css';

const Written = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState(reviewData.slice(0, 5));
  const [itemLength, setItemLength] = useState(5);
  const originLength = useState(reviewData.length)[0];
  const bottomRef = useRef(null);

  const scrollCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (itemLength > originLength) return;

          setItemLength((prev) => prev + 5);
          setList((prev) =>
            list.concat(reviewData.slice(itemLength, itemLength + 5))
          );
        }
      });
    },
    [itemLength, list, originLength]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(scrollCallback, {
      threshold: null,
    });

    if (itemLength > originLength) {
      dispatch(lengthActions.updateWrittenLength(originLength));
    } else {
      dispatch(lengthActions.updateWrittenLength(itemLength));
    }

    const { current } = bottomRef;
    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [originLength, itemLength, list, scrollCallback, dispatch]);

  useEffect(() => {
    setList(reviewData.slice(0, 5));
    setItemLength(5);
    dispatch(lengthActions.updateWrittenLength(itemLength));
    dispatch(lengthActions.updateAvailLength(0));
  }, []);

  return (
    <>
      {list &&
        list.map((item) => (
          <section className={styles.section} key={item.seq}>
            <ReviewThumbnail props={item} />
            <div className={styles.line} />
            <ReviewDetail props={item} />
            <div className={styles.line} />
            <ReviewSection props={item} />
          </section>
        ))}
      <div ref={bottomRef}></div>
    </>
  );
};

export default Written;
