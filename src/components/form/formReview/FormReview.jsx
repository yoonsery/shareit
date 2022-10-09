import FormSectionTitle from '../formSectionTitle/FormSectionTitle';
import FormTextArea from '../formTextArea/FormTextArea';

const title = '사용후기를 작성해 주세요 (6자 이상)';

const FormReview = () => {
  return (
    <section>
      <FormSectionTitle title={title} />
      <FormTextArea />
    </section>
  );
};

export default FormReview;
