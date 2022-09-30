import { configureStore } from '@reduxjs/toolkit';
import availableReducer from './available';
import writtenReducer from './written';

const store = configureStore({
  reducer: {
    availableList: availableReducer,
    writtenList: writtenReducer,
  },
});

export default store;
