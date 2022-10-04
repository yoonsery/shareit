import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { availableActions } from '../../store/available';
import ReviewThumbnail from '../reviewThumbnail/ReviewThumbnail';
import ReviewDetail from '../reviewDetail/ReviewDetail';
import styles from './Available.module.css';
import { lengthActions } from '../../store/length';
// import useIntersect from '../infiniteReviews/useIntersect';

const Available = () => {
  const availList = useSelector((state) => state.availableList);
  const length = useSelector((state) => state.length.length);
  const dispatch = useDispatch();

  const [originLength, setOriginLength] = useState(availList.length);

  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  const addLength = () =>
    new Promise((resolve) => {
      dispatch(lengthActions.get5More());
      resolve();
    });

  const getMoreItems = () =>
    new Promise((resolve) => {
      dispatch(availableActions.getMoreList(length));
      resolve();
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log('entries [0]', entries);
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            if (length > originLength) {
              return;
            }
            console.log('entry curr', entry.current);
            console.log('length1', length);
            await addLength();
            // dispatch(lengthActions.get5More());
            await getMoreItems();
            // dispatch(availableActions.getMoreList(length));
            console.log('length2', length);
          }
        });
      },
      //  --

      { threshold: 0.25 }
    );
    bottomObserver.current = observer;
  }, [originLength, length, dispatch]);

  useEffect(() => {
    dispatch(lengthActions.get5More());
    dispatch(availableActions.getMoreList(length));
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
      {availList &&
        availList.map((item) => (
          <section className={styles.section} key={item.seq}>
            <ReviewThumbnail props={item} />
            <div className={styles.line} />
            <ReviewDetail props={item} />
            <button type="button" className={styles.button}>
              후기 쓰기
            </button>
          </section>
        ))}
      <div ref={setBottom}></div>
    </>
  );
};

export default Available;
