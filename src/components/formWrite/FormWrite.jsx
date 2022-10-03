import FormAddImage from '../formAddImage/FormAddImage';
import FormMessage from '../formMessage/FormMessage';
import FormReview from '../formReview/FormReview';
import FormStar from '../formStar/FormStar';
import styles from './FormWrite.module.css';

const FormWrite = () => {
  return (
    <>
      <FormStar />
      <div className={styles.line} />
      <FormReview />
      <div className={styles.line} />
      <FormAddImage />
      <div className={styles.line} />
      <FormMessage />
      <div className={styles.line} />
      <div className={styles.agree}>
        <button className={styles.agreeCheck} type="check" />
        <span>구매후기 약관 동의 (필수)</span>
        <button>
          {/* > 아이콘 가져오기 */}
          {/* --- */}
        </button>
      </div>
    </>
  );
};

export default FormWrite;
