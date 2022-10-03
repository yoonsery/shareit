import { useSelector } from 'react-redux';
import styles from './ReviewThumbnail.module.css';

const ReviewThumbnail = ({ props: item }) => {
  const forWirtten = useSelector((state) => state.reviewType.isWritten);

  return (
    <div
      className={
        forWirtten ? `${styles.written_thumbnail}` : `${styles.avail_thumbnail}`
      }
    >
      <img
        className={styles.image}
        alt="hostImage"
        src={item.product.hostImage}
      />
      <div
        className={
          forWirtten ? `${styles.written_title}` : `${styles.avail_title}`
        }
      >
        <h4 className={styles.host_name}>{item.product.hostName}</h4>
        <h3 className={styles.space_name}>{item.product.spaceName}</h3>
      </div>
    </div>
  );
};

export default ReviewThumbnail;
