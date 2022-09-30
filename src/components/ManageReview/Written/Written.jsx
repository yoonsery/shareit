import { useSelector } from 'react-redux';

import ReviewContainer from '../ReiveiwContainer/ReviewContainer';

const Written = () => {
  const writtenList = useSelector((state) => state.writtenList);

  return writtenList.map((item) => (
    <ReviewContainer props={item} key={item.seq} />
  ));
};

export default Written;
