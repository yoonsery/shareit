import { configureStore } from '@reduxjs/toolkit';
import availableReducer from './available';
import writtenReducer from './written';
import typeReducer from './review-type';

const store = configureStore({
  reducer: {
    availableList: availableReducer,
    writtenList: writtenReducer,
    reviewType: typeReducer,
  },
});

export default store;
