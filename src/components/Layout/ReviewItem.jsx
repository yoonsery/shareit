import './ReviewItem.scss';

const ReviewCard = ({ props: item }) => {
  return (
    <section>
      <div className="imgWithTitle">
        <img alt="" src={item.product.hostImage} />
        <h2 className="hostName">{item.product.hostName}</h2>
        <h1 className="spaceName">{item.product.spaceName}</h1>
      </div>
      <ul>
        <li>
          <span>상품명</span>
          <span>{item.product.productName}</span>
        </li>
        <li>
          <span>예약일자</span>
          <span>{item.review.reserveAt}</span>
        </li>
        {item.review.deadLine && (
          <li>
            <span>작성기한</span>
            <span>{item.review.deadLine}</span>
          </li>
        )}
        {item.review.createAt && (
          <li>
            <span>작성일자</span>
            <span>{item.review.createAt}</span>
          </li>
        )}
      </ul>
    </section>
  );
};

export default ReviewCard;
