## SHAREIT 사전과제

## Features 🤓

- 사용자는 작성가능 후기와 작성한 후기를 볼 수 있는 리뷰 페이지를 볼 수 있습니다.
- 작성가능 후기에서 후기 쓰기 버튼을 누르면 해당 상품의 후기를 작성할 수 있는 페이지로 이동합니다.
- 작성한 후기 페이지에서 고객이 작성한 후기와 판매자 답변은 토글 버튼을 클릭해서 볼 수 있습니다

## Tech 🛠

- [x] React Hooks
- [x] Redux toolkit
- [x] React Router Dom v6
- [x] PostCSS

## Trouble Shooting

#### 1. 무한 스크롤 구현하기

- window에 addEventListener를 달아서 scroll을 감지하기

이 경우는 너무 자주 호출되서 성능이 좋지 않고 끊김 현상이 있어서 애초에 구현할 생각을 하지 않았다. 디바운싱과 쓰로틀링을 통해 개선할 수 있다지만 다른 옵션을 생각해보기로 결정.

- Intersection Observer

찾아보니 스크롤보다 성능이 좋고 리플로우 현상을 방지할 수 있어서 많이 사용중이다. 그래서 이 방법으로 구현해보고자 했는데... 첫번째만 렌더가 되고 이후엔 다른 페이지를 갔다 오면 리스트가 업데이트 된다. [스택오버플로우](https://stackoverflow.com/questions/65806186/intersectionobserver-inside-useeffect-works-only-once)에 나와 비슷한 상황의 질문이 있어 댓글에 달린대로 해봤지만 여전히 같은 문제가 발생한다. 여전히 해결중😇 기능 구현 완성에 의의를 둔다면 첫번째 방법인 스크롤 감지하는 걸로 했어야 했을까...

- 라이브러리 react-window-infinite-loader

공식사이트와 예제를 보고 내 코드에 적용시켜 보려고 이것저것 해보았지만, 아직 익숙하지 않은 라이브러리 가져와서 뚝딱뚝딱 만들지는 못하는 것 같다. 나중에 좀 더 읽어보고 도전해보기로.

#### 2. PostCSS 라이브러리 설치

중복되는 css코드가 많고 nesting과 mixin을 쓰고 싶어서 라이브러리 설치했는데 postcss.config.js 파일이 module을 못읽어온다. 역시 인터넷 뒤지고 다른 config 파일도 만들고 애를 써봤지만 실패. 시간에 쫓기다 보니 찾아보는 시간에 그냥 중복된 코드 쓰는 게 낫겠단 생각으로 라이브러리 없이 코딩했다.

#### 3. 구조 잡기

간단해 보이는 것 같아서 일단 만들고 이어붙이자는 생각으로 시작했다가 점점 시간이 지날수록 과거의 나를 호되게 꾸짖고 싶었다. 그래서 파일명 변경과 파일 구조 변경이 아주 빈번하게 일어났다. 상태관리도 context API 썼다가 리덕스 툴킷으로 변경하고 계속 고치고 고치고. 좀 더 세세하게 구조를 잡고 체계적으로 완성하는 연습이 필요하다.

#### 4. scrollX

justify-content 를 사용하면 스크롤 바가 뜨지 않는다는 사실을 모르고 많이 헤매었다. `margin-right: auto;` 를 대신해서 해결했다.

## Note 📝

star rating 기능 구현하는 방법을 찾아보다가 정말 간단한 코드를 발견했다! ([※출처](https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6))

더블클릭하면 rating 점수가 0점이 되도록 했다

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
