import { createSlice } from '@reduxjs/toolkit';

const initialType = {
  availLength: 0,
  writtenLength: 0,
};

const lengthSlice = createSlice({
  name: 'length',
  initialState: initialType,
  reducers: {
    updateAvailLength(state, action) {
      state.availLength = action.payload;
    },
    updateWrittenLength(state, action) {
      state.writtenLength = action.payload;
    },
  },
});

export const lengthActions = lengthSlice.actions;
export default lengthSlice.reducer;
