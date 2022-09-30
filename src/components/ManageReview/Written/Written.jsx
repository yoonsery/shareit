import { useSelector } from 'react-redux';
import Thumbnail from '../Thumbnail/Thumbnail';
import Detail from '../Detail/Detail';
import styles from './Written.module.css';

const Written = () => {
  const writtenList = useSelector((state) => state.writtenList);

  return writtenList.map((item) => (
    <section className={styles.section} key={item.seq}>
      <Thumbnail props={item} />
      <hr />
      <Detail props={item} />
    </section>
  ));
};

export default Written;
