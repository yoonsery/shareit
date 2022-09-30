import { createSlice } from '@reduxjs/toolkit';

const initialType = {
  isAvailable: true,
  isWritten: false,
};

const typeSlice = createSlice({
  name: 'reviewType',
  initialState: initialType,
  reducers: {
    toggle(state) {
      state.isAvailable = !state.isAvailable;
      state.isWritten = !state.isWritten;
    },
  },
});

export const typeActions = typeSlice.actions;
export default typeSlice.reducer;
