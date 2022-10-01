import { createSlice } from '@reduxjs/toolkit';
import availableData from '../db/availableData.json';

const initialState = availableData.map((item) => item);

const availableSlice = createSlice({
  name: 'availableList',
  initialState,
  reducers: {
    getNewList: (state, action) => {
      return initialState.slice(0, action.payload);
    },
  },
});

export const availableActions = availableSlice.actions;
export default availableSlice.reducer;
