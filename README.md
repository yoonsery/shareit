![shareit](https://user-images.githubusercontent.com/69155242/196041478-4b1d1064-acf2-4d58-98e8-0f1d84fba6e1.gif)

## Features 🤓

- 사용자는 리뷰 페이지에서 `작성가능 후기`와 `작성한 후기`를 클릭해서 볼 수 있습니다.
- 작성가능 후기 페이지에서 각 아이템의 후기 쓰기 버튼을 누르면 해당 상품의 후기를 작성할 수 있는 `후기 작성하기` 페이지로 이동합니다.
- 작성한 후기 페이지에서 고객이 작성한 후기와 판매자 답변은 토글 버튼을 클릭해서 볼 수 있습니다.
- 작성한 후기는 각 아이템의 별점과 like 갯수, 호스트 PICK 여부에 따라 다르게 표시됩니다.
- 후기 작성하기 페이지에서 별 아이콘을 클릭하면 별점이 매겨집니다. 더블클릭으로 리셋할 수 있습니다.
- 사용후기 작성란과 판매자에게 전달하고 싶은 메시지란은 작성한 글자갯수가 우측 하단에 표기됩니다.
- 사진 첨부는 최대 5장까지 할 수 있습니다. 첨부하려는 이미지가 15MB 이상이면 경고창이 뜹니다.

## Tech 🛠

- [x] React Hooks
- [x] Redux toolkit
- [x] React Router Dom v6
- [x] PostCSS

## Trouble Shooting

#### 무한 스크롤 구현하기

- window에 addEventListener를 달아서 scroll을 감지하기

이 경우는 너무 자주 호출되서 성능이 좋지 않고 끊김 현상이 있어서 애초에 구현할 생각을 하지 않았다. 디바운싱과 쓰로틀링을 통해 개선할 수 있다지만 다른 옵션을 생각해보기로 결정.

- Intersection Observer

찾아보니 스크롤보다 성능이 좋고 리플로우 현상을 방지할 수 있어서 많이 사용중이다. 그래서 이 방법으로 구현해보고자 했는데... 첫번째만 렌더가 되고 이후엔 다른 페이지를 갔다 오면 리스트가 업데이트 된다. [스택오버플로우](https://stackoverflow.com/questions/65806186/intersectionobserver-inside-useeffect-works-only-once)에 나와 비슷한 상황의 질문이 있어 댓글에 달린대로 해봤지만 여전히 같은 문제가 발생한다. 여전히 해결중😇 기능 구현 완성에 의의를 둔다면 첫번째 방법인 스크롤 감지하는 걸로 했어야 했을까...

=> 해결했다!! intersection observer의 콜백에서 dispatch로 관리하던 게 1번만 렌더링 되고 작동하지 않은게 문제였는데 어차피 작성가능한 / 작성한 리스트는 해당 컴포넌트 말고 사용하는 곳이 없어서 각자 해당하는 컴포넌트에서 useState로 관리하도록 만들고 setState의 콜백으로 이전 값을 불러와 최신 상태로 업데이트 되도록 했다. 문제는 nav에 있는 해당 리스트의 갯수를 표시하는 거였는데 length store에서 리스트 갯수의 값을 관리하고 각 컴포넌트에서 dispatch로 legnth의 갯수를 업데이트 해주는 걸로 해결하였다.

역시 언제나처럼 조급한 맘을 버리고 한 발 떨어져서 문제를 재정의하고 파악하는 게 도움이 됐다 😌

#### overflow: scrollX

justify-content 를 사용하면 스크롤 바가 뜨지 않는다는 사실을 이번에 알게 되었다. `margin-right: auto;` 를 대신해서 해결했다.

## Note 📝

star rating 기능 구현하는 방법을 찾아보다가 정말 간단한 코드를 발견했다! ([※출처](https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6))

```js
<div className={styles.starContainer}>
  {[...Array(5)].map((star, idx) => {
    idx += 1;
    return (
      <button
        key={idx}
        type="button"
        className={styles.starRating}
        onClick={() => setRating(idx)}
        onDoubleClick={() => setRating(0)}
        style={{ fill: idx <= rating ? '#fcd34d' : '#d6d7d9' }}
      >
        <Star />
      </button>
    );
  })}
</div>
```
