import { createSlice } from '@reduxjs/toolkit';
import availableData from '../db/availableData.json';

// const initialAvailable = availableData.map((items) => console.log(items));
const initialAvailable = [
  {
    seq: 1,
    review: {
      reserveAt: '2022-08-04',
      deadLine: '2022-08-10',
    },
    product: {
      hostName: '대학교',
      hostImage:
        'https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_1280.jpg',
      spaceName: '운동장',
      productName: '풋살장',
      productType: '실시간',
    },
  },
  {
    seq: 2,
    review: {
      reserveAt: '2022-08-04',
      deadLine: '2022-08-15',
    },
    product: {
      hostName: '파티룸',
      hostImage:
        'https://cdn.pixabay.com/photo/2016/02/01/18/26/wedding-table-1174135_1280.jpg',
      spaceName: '홍대',
      productName: '홍대 파티룸',
      productType: '실시간',
    },
  },
];

const availableSlice = createSlice({
  name: 'availableList',
  initialState: initialAvailable,
  reducers: {
    getLoadingState(state) {
      console.log(state);
    },
  },
});

export const availableActions = availableSlice.actions;
export default availableSlice.reducer;
