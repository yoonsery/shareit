import styles from './FormAgree.module.css';

const FormAgree = () => {
  return (
    <div className={styles.agree}>
      <input
        className={styles.checkBox}
        type="checkbox"
        name="terms"
        value="agree"
      />
      <span className={styles.agreeText}>구매후기 약관 동의 (필수)</span>
      <button type="button" className={styles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default FormAgree;
