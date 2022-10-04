import styles from './ReviewFooter.module.css';
const ReviewFooter = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.recommend}>
        고객님의 이용후기를 사진으로 다양하게 표현해 보세요!
      </p>
      <div className={styles.alert}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${styles.icon} w-6 h-6`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <p>
          서비스 이용과 무관하거나 저작권 침해, 욕설, 광고, 음란, 불법적인
          후기는 통보 없이 삭제 및 적립 혜택이 회수 될 수 있습니다.
        </p>
      </div>
    </footer>
  );
};

export default ReviewFooter;
