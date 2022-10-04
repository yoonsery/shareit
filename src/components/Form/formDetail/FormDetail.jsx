import styles from './FormDetail.module.css';
const FormDetail = ({ props: item }) => {
  return (
    <div className={styles.description}>
      <ul className={styles.description_title}>
        <li> 상품명 </li>
        <li> 예약일자 </li>
      </ul>
      <ul className={styles.description_detail}>
        <li>
          {item.product.productType && (
            <span className={styles.live}>실시간</span>
          )}
          {item.product.productName}
        </li>
        <li> {item.review.reserveAt}</li>
      </ul>
    </div>
  );
};

export default FormDetail;
