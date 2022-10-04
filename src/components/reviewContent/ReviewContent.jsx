import ReviewRating from '../reviewRating/ReviewRating';
import ReviewLike from '../reviewLike/ReviewLike';
import styles from './ReviewContent.module.css';

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

const ReviewContent = ({ props: item, state, setState, title, hasRating }) => {
  const reviewShowHandler = (e) => {
    e.preventDefault();
    setState((prev) => !prev);
  };

  return (
    <div className={styles.customerMenu}>
      <div className={styles.reviewTitle}>{title}</div>

      {hasRating && <ReviewRating props={item} />}

      {hasRating && <ReviewLike props={item} />}

      {item.product.isHostPick && hasRating ? (
        <div className={styles.pick}>호스트 PICK</div>
      ) : null}

      <button onClick={reviewShowHandler}>
        {state ? <ShowButton /> : <HideButton />}
      </button>
    </div>
  );
};

export default ReviewContent;
