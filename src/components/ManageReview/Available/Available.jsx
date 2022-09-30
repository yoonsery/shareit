import { useSelector } from 'react-redux';
import ReviewContainer from '../ReiveiwContainer/ReviewContainer';

const Available = () => {
  const availableList = useSelector((state) => state.availableList);

  return availableList.map((item, i) => (
    <ReviewContainer props={item} key={item.seq} />
  ));
};

export default Available;
