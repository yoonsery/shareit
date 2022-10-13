import { configureStore } from '@reduxjs/toolkit';
import typeReducer from './review-type';
import lengthReducer from './length';

const store = configureStore({
  reducer: {
    reviewType: typeReducer,
    length: lengthReducer,
  },
});

export default store;
