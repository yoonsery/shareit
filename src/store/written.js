import { createSlice } from '@reduxjs/toolkit';
import reviewData from '../db/reviewData.json';

const initialState = reviewData;

const writtenSlice = createSlice({
  name: 'writtenList',
  initialState,
  reducers: {
    getMoreList: (state, action) => {
      return initialState.slice(0, action.payload);
    },
  },
});

export const writtenActions = writtenSlice.actions;
export default writtenSlice.reducer;
