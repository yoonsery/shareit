import { useEffect, useRef, useState } from 'react';
import FormSectionTitle from '../formSectionTitle/FormSectionTitle';
import styles from './FormAddImage.module.css';

const title = '포토첨부 (최대 5장)';

const InputIcon = () => (
  <svg
    className={`${styles.addIcon} w-6 h-6`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
);

const DeleteIcon = () => (
  <svg
    className={`${styles.deleteIcon} w-6 h-6`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const FormAddImage = () => {
  const [showImages, setShowImages] = useState([]);
  const inputRef = useRef();

  const addHandler = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }

    setShowImages(imageUrlLists);
  };

  useEffect(() => {
    return () => URL.revokeObjectURL();
  }, []);

  const deleteHandler = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <>
      <FormSectionTitle title={title} addimg={true} />

      <div className={styles.container}>
        <label htmlFor="input-file" className={styles.label}>
          <input
            ref={inputRef}
            type="file"
            id="input-file"
            multiple
            accept="image/*"
            style={{ display: 'none' }}
            onChange={addHandler}
          />
          <InputIcon />
        </label>

        {showImages.map((image, id) => (
          <div key={id} className={styles.imgContainer}>
            <img src={image} alt={`${image}-${id}`} />
            <div onClick={() => deleteHandler(id)}>
              <DeleteIcon />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.max}>포토당 최대 15MB</div>
    </>
  );
};

export default FormAddImage;
