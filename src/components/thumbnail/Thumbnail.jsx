import styles from './Thumbnail.module.css';

const Thumbnail = ({ props: item }) => {
  return (
    <div className={styles.thumbnail}>
      <img
        className={styles.image}
        alt="hostImage"
        src={item.product.hostImage}
      />
      <div className={styles.title}>
        <h4 className={styles.host_name}>{item.product.hostName}</h4>
        <h3 className={styles.space_name}>{item.product.spaceName}</h3>
      </div>
    </div>
  );
};

export default Thumbnail;
