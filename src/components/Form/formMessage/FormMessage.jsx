import FormSectionTitle from '../formSectionTitle/FormSectionTitle';
import FormTextArea from '../formTextArea/FormTextArea';

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
