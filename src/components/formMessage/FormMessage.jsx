import FormSectionTitle from '../form/formSectionTitle/FormSectionTitle';
import FormReview, { TextArea } from '../formReview/FormReview';
import FormTextArea from '../formTextArea/FormTextArea';
import styles from './FormMessage.module.css';

const FormMessage = () => {
  const title = '판매자에게 전달하고 싶은 메시지';
  return (
    <>
      <FormSectionTitle title={title} />
      <FormTextArea />
    </>
  );
};

export default FormMessage;
