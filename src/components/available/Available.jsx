import { useSelector } from 'react-redux';
import Thumbnail from '../thumbnail/Thumbnail';
import Detail from '../detail/Detail';
import styles from './Available.module.css';

const Available = ({ props: list }) => {
  return list.map((item) => (
    <section className={styles.section} key={item.seq}>
      <Thumbnail props={item} />
      <div className={styles.line} />
      <Detail props={item} />
      <button type="button" className={styles.button}>
        후기 쓰기
      </button>
    </section>
  ));
};

export default Available;
