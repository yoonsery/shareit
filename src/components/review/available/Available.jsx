import { useEffect, useState, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lengthActions } from '../../../store/length';
import ReviewThumbnail from '../reviewThumbnail/ReviewThumbnail';
import ReviewDetail from '../reviewDetail/ReviewDetail';
import availableData from '../../../db/availableData.json';
import styles from './Available.module.css';

const Available = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState(availableData.slice(0, 5));
  const [itemLength, setItemLength] = useState(5);
  const originLength = useState(availableData.length)[0];
  const bottomRef = useRef(null);

  const scrollCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (itemLength > originLength) return;

          setItemLength((prev) => prev + 5);
          setList((prev) =>
            list.concat(availableData.slice(itemLength, itemLength + 5))
          );
        }
      });
    },
    [itemLength, list, originLength]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(scrollCallback, {
      threshold: 0.25,
    });

    if (itemLength > originLength) {
      dispatch(lengthActions.updateAvailLength(originLength));
    } else {
      dispatch(lengthActions.updateAvailLength(itemLength));
    }

    const { current } = bottomRef;
    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [originLength, itemLength, list, scrollCallback, dispatch]);

  useEffect(() => {
    setList(availableData.slice(0, 5));
    setItemLength(5);
    dispatch(lengthActions.updateAvailLength(itemLength));
  }, []);

  return (
    <>
      {list &&
        list.map((item) => (
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
      <div ref={bottomRef}></div>
    </>
  );
};

export default Available;
