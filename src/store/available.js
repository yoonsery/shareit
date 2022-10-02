import { createSlice } from '@reduxjs/toolkit';
import availableData from '../db/availableData.json';

const initialState = availableData;

const availableSlice = createSlice({
  name: 'availableList',
  initialState,
  reducers: {
    getMoreList: (state, action) => {
      return initialState.slice(0, action.payload);
    },
  },
});

export const availableActions = availableSlice.actions;
export default availableSlice.reducer;
