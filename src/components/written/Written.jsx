import { useSelector } from 'react-redux';
import Thumbnail from '../thumbnail/Thumbnail';
import Detail from '../detail/Detail';
import styles from './Written.module.css';

const Written = ({ props: list }) => {
  return list.map((item) => (
    <section className={styles.section} key={item.seq}>
      <Thumbnail props={item} />
      <hr />
      <Detail props={item} />
    </section>
  ));
};

export default Written;
