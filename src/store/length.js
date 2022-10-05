import { createSlice } from '@reduxjs/toolkit';

const initialType = {
  length: 5,
};

const lengthSlice = createSlice({
  name: 'length',
  initialState: initialType,
  reducers: {
    get5More(state) {
      state.length = state.length + 5;
    },
  },
});

export const lengthActions = lengthSlice.actions;
export default lengthSlice.reducer;
