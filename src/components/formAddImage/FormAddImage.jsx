import FormSectionTitle from '../form/formSectionTitle/FormSectionTitle';
import { FormWriteTitle } from '../formRating/FormRating';
import styles from './FormAddImage.module.css';
const FormAddImage = () => {
  const title = '포토첨부 (최대 5장)';
  return (
    <div>
      <FormSectionTitle title={title} />
    </div>
  );
};

export default FormAddImage;
