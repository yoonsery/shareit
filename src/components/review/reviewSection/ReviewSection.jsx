import { useState } from 'react';
import ReviewContent from '../reviewContent/ReviewContent';

import styles from './ReviewSection.module.css';

const ReviewSection = ({ props: item }) => {
  const [reviewShow, setReviewShow] = useState(false);
  const [replyShow, setReplyShow] = useState(false);

  return (
    <section className={styles.reviewSection}>
      <ReviewContent
        props={item}
        state={reviewShow}
        setState={setReviewShow}
        title={'작성한 후기'}
        hasRating={true}
      />
      <div className={styles.line} />

      {/* 작성한 후기 */}
      {reviewShow && <p className={styles.review}> {item.review.review}</p>}
      {reviewShow && <div className={styles.line} />}

      <ReviewContent
        props={item}
        state={replyShow}
        setState={setReplyShow}
        title={'판매자 답변'}
        hasRating={false}
      />
      <div className={styles.line} />

      {/* 판매자 답변 */}
      {replyShow && (
        <div className={styles.hostReplySection}>
          <span>{item.product.hostName}</span>

          <p>{item.review.reply} </p>
        </div>
      )}
    </section>
  );
};

export default ReviewSection;
