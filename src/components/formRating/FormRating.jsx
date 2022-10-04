// import { StarIcon } from '@heroicons/react/20/solid';
import FormSectionTitle from '../form/formSectionTitle/FormSectionTitle';
import { useState } from 'react';
import styles from './FormRating.module.css';

const FormRating = () => {
  const titleText = '서비스 만족도를 선택해 주세요';
  const [starState, setStarState] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const Star = () => (
    <div className={styles.stars} onClick={ratingHandler}>
      <svg
        width="48"
        height="45"
        viewBox="0 0 48 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.star}
      >
        <path
          d="M23.5278 0.527914C23.6834 0.0801335 24.3167 0.0801334 24.4723 0.527913L29.914 16.1828C29.9827 16.3804 30.167 16.5143 30.3761 16.5186L46.9464 16.8563C47.4203 16.8659 47.616 17.4682 47.2383 17.7546L34.0311 27.7675C33.8644 27.8939 33.794 28.1106 33.8546 28.3108L38.6539 44.1744C38.7912 44.6282 38.2789 45.0004 37.8898 44.7296L24.2856 35.263C24.114 35.1436 23.8861 35.1436 23.7145 35.263L10.1103 44.7296C9.72121 45.0004 9.20889 44.6282 9.34617 44.1744L14.1455 28.3108C14.2061 28.1106 14.1357 27.8939 13.969 27.7675L0.761848 17.7546C0.384082 17.4682 0.579772 16.8659 1.05373 16.8563L17.624 16.5186C17.8331 16.5143 18.0175 16.3804 18.0861 16.1828L23.5278 0.527914Z"
          fill="#D6D7D9"
        />
      </svg>
    </div>
  );

  const ratingHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target);
  };

  return (
    <section className={styles.section}>
      <FormSectionTitle title={titleText} />
      <div className={styles.choose}>선택하세요</div>
      <div className={styles.starContainer}>
        {starState.map((star, i) => {
          return <Star key={i} />;
        })}
      </div>
    </section>
  );
};

export default FormRating;
