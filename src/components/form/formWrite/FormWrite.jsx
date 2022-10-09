import FormAddImage from '../formAddImage/FormAddImage';
import FormMessage from '../formMessage/FormMessage';
import FormReview from '../formReview/FormReview';
import FormRating from '../formRating/FormRating';
import styles from './FormWrite.module.css';
import FormAgree from '../formAgree/FormAgree';

const FormWrite = () => {
  return (
    <section className={styles.container}>
      <FormRating />
      <div className={styles.line} />
      <FormReview />
      <div className={styles.line} />
      <FormAddImage />
      <div className={styles.line} />
      <FormMessage />
      <div className={styles.line} />
      <FormAgree />
    </section>
  );
};

export default FormWrite;
