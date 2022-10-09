import styles from './FormTextArea.module.css';
import { useRef, useState } from 'react';

const FormTextArea = () => {
  const [letterCount, setLetterCount] = useState(0);
  const textRef = useRef();

  const changeHandler = () => {
    const letterLength = textRef.current.value.length;
    setLetterCount((prev) => letterLength);
  };

  return (
    <>
      <textarea
        ref={textRef}
        onChange={changeHandler}
        className={styles.textArea}
        placeholder="서비스 이용과 무관하거나 저작권 침해, 욕설, 광고, 음란, 불법적인 후기는 통보 없이 삭제 및 적립 혜택이 회수 될 수 있습니다."
      ></textarea>
      {/* 텍스트 길이 계산 */}
      <div className={styles.letterCount}>{`${letterCount}/1,000`}</div>
    </>
  );
};

export default FormTextArea;
