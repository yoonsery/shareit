import styles from './ReviewLayout.module.css';

const ReviewCard = ({ props: item }) => {
  return (
    <section className={styles.section}>
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
      <hr />
      <div className={styles.description}>
        <ul className={styles.description_title}>
          <li> 상품명 </li>
          <li> 예약일자 </li>
          {item.review.deadLine && <li> 작성기한 </li>}
          {item.review.createAt && <li> 작성일자 </li>}
        </ul>
        <ul className={styles.description_detail}>
          <li>
            {item.product.productType && (
              <span className={styles.live}>실시간</span>
            )}
            {item.product.productName}
          </li>
          <li> {item.review.reserveAt}</li>
          {item.review.deadLine && <li>{item.review.deadLine}</li>}
          {item.review.createAt && <li>{item.review.createAt}</li>}
        </ul>
      </div>
    </section>
  );
};

export default ReviewCard;
