import { useState } from 'react';
import styles from './Review.module.css';

const Review = ({ props: item }) => {
  const [reviewShow, setReviewShow] = useState(true);
  const [replyShow, setReplyShow] = useState(true);

  const ShowButton = () => {
    return (
      <svg
        className={`${styles.showBtn} w-6 h-6`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    );
  };

  const HideButton = () => {
    return (
      <svg
        className={`${styles.hideBtn} w-6 h-6`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    );
  };

  const reviewShowHandler = (e) => {
    e.preventDefault();
    setReviewShow((prev) => !prev);
    console.log(reviewShow);
  };

  const replyShowHandler = () => {
    setReplyShow((prev) => !prev);
  };

  return (
    <>
      <section className={styles.reviewSection}>
        <div className={styles.customerMenu}>
          <div className={styles.reviewTitle}>작성한 후기</div>
          <div className={styles.rateContainer}>
            <svg
              className={`${styles.starIcon} w-6 h-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className={styles.starText}>{item.product.rating}</span>
          </div>
          <div className={styles.likeContainer}>
            <svg
              className={`${styles.likeIcon} w-6 h-6`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            <span className={styles.likeText}>{item.product.like}</span>
          </div>
          {item.product.isHostPick && (
            <div className={styles.pick}>호스트 PICK</div>
          )}
          <button onClick={reviewShowHandler}>
            {reviewShow ? <ShowButton /> : <HideButton />}
          </button>
        </div>
        {reviewShow && <div className={styles.line} />}
        {reviewShow && <p className={styles.review}> {item.review.review}</p>}
      </section>

      <div className={styles.line} />
      <section className={styles.replySection}>
        <div className={styles.replyMenu}>
          <span className={styles.replyTitle}>판매자 답변</span>
          <button onClick={replyShowHandler}>
            {replyShow ? <ShowButton /> : <HideButton />}
          </button>
        </div>
        <div className={styles.line} />
        {replyShow && (
          <div className={styles.hostReplySection}>
            <span>{item.product.hostName}</span>

            <p>{item.review.reply} </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Review;
