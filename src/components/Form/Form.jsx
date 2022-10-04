import FormFooter from './formFooter/FormFooter';
import FormWrite from './formWrite/FormWrite';
import styles from './Form.module.css';
import FormCard from './formCard/FormCard';

const Form = () => {
  return (
    <main className={styles.main}>
      <FormCard />
      <FormWrite />
      <FormFooter />
    </main>
  );
};

export default Form;
