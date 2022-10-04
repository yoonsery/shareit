import { useSelector } from 'react-redux';
import FormThumbnail from '../formThumbnail/FormThumbnail';
import FormDetail from '../formDetail/FormDetail';
import styles from './FormCard.module.css';

const FormCard = () => {
  const item = useSelector((state) => state.availableList).slice(0, 1)[0];

  return (
    <section className={styles.section}>
      {<FormThumbnail props={item} />}
      <div className={styles.line} />
      <FormDetail props={item} />
    </section>
  );
};

export default FormCard;
