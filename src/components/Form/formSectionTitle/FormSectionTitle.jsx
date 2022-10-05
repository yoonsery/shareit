import styles from './FormSectionTitle.module.css';

const FormSectionTitle = ({ title, addimg }) => {
  return (
    <div className={addimg ? `${styles.addimg}` : `${styles.title}`}>
      {title}
      <span>*</span>
    </div>
  );
};

export default FormSectionTitle;
