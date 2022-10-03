import { useSelector } from 'react-redux';
import FormDetail from '../formDetail/FormDetail';
import FormFooter from '../formFooter/FormFooter';
import FormThumbnail from '../formThumbnail/FormThumbnail';
import FormWrite from '../formWrite/FormWrite';

import styles from './Form.module.css';

const Form = () => {
  const item = useSelector((state) => state.availableList).slice(0, 1)[0];

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {<FormThumbnail props={item} />}
        <div className={styles.line} />
        <FormDetail props={item} />
      </section>
      <FormWrite />
      <FormFooter />
      <div>
        <button type="button">취소</button>
        <button type="submit">저장</button>
      </div>
    </main>
  );
};

export default Form;
