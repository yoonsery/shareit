import styles from './FormFooter.module.css';

const FormFooter = () => {
  return (
    <>
      <section className={styles.footer}>
        <span className={styles.attention}>후기 등록 유의사항</span>
        <ul>
          <li>・후기 작성은 사용 완료 후 6 개월 이내 작성이 가능합니다.</li>
          <li>
            ・이미지는 최대 5 개까지 등록 가능하며, 이미지 개수와 <br />
            &nbsp; &nbsp; 상관없이 포인트는 1회만 지급됩니다.
          </li>
          <li>
            ・서비스 이용과 무관하거나 욕설, 광고, 음란, 저작권 침해 <br />{' '}
            &nbsp; &nbsp; 내용 등록 시 사전협의 없이 삭제할 수 있습니다.
          </li>
          <li>・작성된 후기 및 사진은 쉐어잇 마케팅에 활용될 수 있습니다. </li>
          <li>
            ・고객이 등록하는 게시물로 인해 발생하는 분쟁에 대한 <br /> &nbsp;
            &nbsp; 민사 형사 행정상 법적 책임은 게시자에 있고, 쉐어잇은 <br />{' '}
            &nbsp; &nbsp; 어떠한 책임도 부담하지 않습니다.
          </li>
        </ul>
      </section>
      <div className={styles.buttons}>
        <button type="button" className={styles.cancel}>
          취소
        </button>
        <button type="submit" className={styles.save}>
          저장
        </button>
      </div>
    </>
  );
};

export default FormFooter;
