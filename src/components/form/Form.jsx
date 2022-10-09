import { Navigate, useLocation } from 'react-router-dom';
import FormCard from './formCard/FormCard';
import FormWrite from './formWrite/FormWrite';
import FormFooter from './formFooter/FormFooter';
import styles from './Form.module.css';

const Form = () => {
  const location = useLocation();

  if (!location.state) return <Navigate replace to="/" />;

  const { item } = location.state;

  return (
    <main className={styles.main}>
      <FormCard props={item} />
      <FormWrite />
      <FormFooter />
    </main>
  );
};

export default Form;
