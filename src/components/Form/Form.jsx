import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FormCard from './formCard/FormCard';
import FormWrite from './formWrite/FormWrite';
import FormFooter from './formFooter/FormFooter';
import styles from './Form.module.css';
import { useEffect, useState } from 'react';

const Form = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <main className={styles.main}>
      <FormCard props={item} />
      <FormWrite />
      <FormFooter />
    </main>
  );
};

export default Form;
