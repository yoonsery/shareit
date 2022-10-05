import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { availableActions } from '../../../store/available';
import { lengthActions } from '../../../store/length';
import ReviewThumbnail from '../reviewThumbnail/ReviewThumbnail';
import ReviewDetail from '../reviewDetail/ReviewDetail';
import styles from './Available.module.css';

const Available = () => {
  const availList = useSelector((state) => state.availableList);
  const length = useSelector((state) => state.length.availLength);
  const dispatch = useDispatch();

  const originLength = useState(availList.length)[0];
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

            dispatch(lengthActions.get5MoreAvail());
            dispatch(availableActions.getMoreList(length));
          }
        });
      },
      { threshold: 0.25 }
    );
    bottomObserver.current = observer;
  }, [originLength, length, dispatch]);

  useEffect(() => {
    dispatch(lengthActions.get5MoreAvail());
    dispatch(availableActions.getMoreList(length));
  }, [dispatch]);

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
              <NavLink
                className={styles.link}
                to={{ pathname: '/form' }}
                state={{ item: item }}
              >
                후기 쓰기
              </NavLink>
            </button>
          </section>
        ))}
      <div ref={setBottom}></div>
    </>
  );
};

export default Available;
