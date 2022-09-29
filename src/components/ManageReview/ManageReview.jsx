import AvailableReview from './AvailableReview/AvailableReview';
import WrittenReview from './WrittenReview/WrittenReview';

const ManageReview = () => {
  return (
    <>
      <h1>후기관리</h1>

      <AvailableReview />
      <WrittenReview />
    </>
  );
};

export default ManageReview;
