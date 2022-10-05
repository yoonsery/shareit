import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writtenActions } from '../../../store/written';
import { lengthActions } from '../../../store/length';
import ReviewThumbnail from '../reviewThumbnail/ReviewThumbnail';
import ReviewDetail from '../reviewDetail/ReviewDetail';
import ReviewSection from '../reviewSection/ReviewSection';
import styles from './Written.module.css';

const Written = () => {
  const writtenList = useSelector((state) => state.writtenList);
  const length = useSelector((state) => state.length.writtenLength);
  const dispatch = useDispatch();

  const [originLength, setOriginLength] = useState(writtenList.length);
  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            if (length > originLength) {
              return;
            }

            dispatch(lengthActions.get5MoreWritten());
            dispatch(writtenActions.getMoreList(length));
          }
        });
      },
      { threshold: 0.25 }
    );
    bottomObserver.current = observer;
  }, [originLength, length, dispatch]);

  useEffect(() => {
    dispatch(lengthActions.get5MoreWritten());
    dispatch(writtenActions.getMoreList(length));
  }, []);

  useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);

  return (
    <>
      {writtenList &&
        writtenList.map((item) => (
          <section className={styles.section} key={item.seq}>
            <ReviewThumbnail props={item} />
            <div className={styles.line} />
            <ReviewDetail props={item} />
            <div className={styles.line} />
            <ReviewSection props={item} />
          </section>
        ))}
      <div ref={setBottom}></div>
    </>
  );
};

export default Written;
