import { configureStore } from '@reduxjs/toolkit';
import availableReducer from './available';
import writtenReducer from './written';
import typeReducer from './review-type';
import lengthReducer from './length';

const store = configureStore({
  reducer: {
    availableList: availableReducer,
    writtenList: writtenReducer,
    reviewType: typeReducer,
    length: lengthReducer,
  },
});

export default store;
