import { createSlice } from '@reduxjs/toolkit';

const initialWritten = [
  {
    seq: 1,
    review: {
      reserveAt: '2022-01-05',
      createAt: '2022-01-12',
      review: '친절하게 대응해 주셔서 너무 좋았어요.',
      reply:
        '안녕하세요. 고객님. 좋은 후기 남겨주셔서 감사합니다. 다음에 또 이용해 주세요.',
    },
    product: {
      hostName: '펜타스테이지',
      hostImage:
        'https://cdn.pixabay.com/photo/2016/11/22/19/15/audience-1850119_1280.jpg',
      spaceName: '[펜타스테이지 강남] A stage 빈티지&화이트',
      productName: '시간대관',
      productType: '실시간',
      isHostPick: false,
      rating: 0,
      like: 520,
    },
  },
  {
    seq: 2,
    review: {
      reserveAt: '2022-02-10',
      createAt: '2022-02-22',
      review: '조금 지저분한거 말고는 너무 재밌게 사용하고갑니다~~ 추천추천!!',
      reply:
        '이전 시간에 바로 이어서 이용하시다보니 청소상태가 미흡했어요... 다음 이용하실때는 깨끗하게 이용하실수있게 노력하겠습니다. 감사합니다.',
    },
    product: {
      hostName: '체대입시FA강북캠퍼스',
      hostImage:
        'https://cdn.pixabay.com/photo/2016/02/04/23/02/gym-room-1180062_1280.jpg',
      spaceName: '[강북/체육관] 실내체육관',
      productName: '생활체육',
      productType: '실시간',
      isHostPick: true,
      rating: 5,
      like: 0,
    },
  },
];

const writtenSlice = createSlice({
  name: 'writtenList',
  initialState: initialWritten,
  reducers: {
    getLoadingState(state) {
      console.log(state);
    },
  },
});

export const writtenActions = writtenSlice.actions;
export default writtenSlice.reducer;
