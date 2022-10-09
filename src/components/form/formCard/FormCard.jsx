import FormThumbnail from '../formThumbnail/FormThumbnail';
import FormDetail from '../formDetail/FormDetail';
import styles from './FormCard.module.css';

const FormCard = ({ props: item }) => {
  return (
    <section className={styles.section}>
      {<FormThumbnail props={item} />}
      <div className={styles.line} />
      <FormDetail props={item} />
    </section>
  );
};

export default FormCard;
