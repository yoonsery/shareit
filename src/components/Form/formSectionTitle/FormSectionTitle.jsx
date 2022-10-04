import styles from './FormSectionTitle.module.css';

const FormSectionTitle = ({ title }) => {
  return (
    <div className={styles.title}>
      {title}
      <span>*</span>
    </div>
  );
};

export default FormSectionTitle;
