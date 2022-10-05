import { createSlice } from '@reduxjs/toolkit';

const initialType = {
  availLength: 5,
  writtenLength: 5,
};

const lengthSlice = createSlice({
  name: 'length',
  initialState: initialType,
  reducers: {
    get5MoreAvail(state) {
      state.availLength = state.availLength + 5;
    },
    get5MoreWritten(state) {
      state.writtenLength = state.writtenLength + 5;
    },
  },
});

export const lengthActions = lengthSlice.actions;
export default lengthSlice.reducer;
