import { useSelector } from 'react-redux';
import Thumbnail from '../thumbnail/Thumbnail';
import Detail from '../detail/Detail';
import styles from './Written.module.css';
import Review from '../review/Review';

const Written = () => {
  const writtenList = useSelector((state) => state.writtenList);
  return writtenList.map((item) => (
    <section className={styles.section} key={item.seq}>
      <Thumbnail props={item} />
      <div className={styles.line} />
      <Detail props={item} />
      <div className={styles.line} />
      <Review props={item} />
    </section>
  ));
};

export default Written;
