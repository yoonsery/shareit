import styles from './FormMessage.module.css';

const FormMessage = () => {
  return (
    <>
      <div>판매자에게 전달하고 싶은 메시지</div>
      <textarea placeholder="서비스 이용과 무관하거나 저작권 침해, 욕설, 광고, 음란, 불법적인 후기는 통보 없이 삭제 및 적립 혜택이 회수 될 수 있습니다."></textarea>
      {/* 글자수 카운트 */}
      <span>0/1000</span>
    </>
  );
};

export default FormMessage;
