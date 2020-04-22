### 컴포넌트 이해하기

- 컴포넌트란?(간단한 컴포넌트)

  - 컴포넌트는 보통 JSX문법으로 작성하며 render()를 구현한다. render()는 입력값,출력내용을 취한다.
  - 컴포넌트에 전달된 데이터 접근가능 (this.props.)
  - JSX는 옵션이며 필수가 아니다.
  - JSX를 컴파일 하면 JS다. (Babel repl에서 확인가능)

- 상태를 갖는 컴포넌트

  - 컴포넌트는 내부적 `상태 데이터`를 가질 수 있다. (this.state로 접근)
  - 컴포넌트 `상태 데이터`가 바뀌면 render()가 다시 호출되어 마크업이 갱신된다.
    - 여기서 호출되는 render는 상태 데이터가 바뀐 컴포넌트의 메서드인가? 그렇겠지. 바뀐 데이터를 새로 출력해야 하니까.

### 컴포넌트 정의하기 - 1. class 문법

- class문법 컴포넌트
- 컴포넌트에서 라이플사이클 API를 사용해야 하거나 state를 사용하는 경우 꼭 이렇게 정의해야 한다.
- 클래스 내부에 render를 구현한다.

### 컴포넌트 정의하기 - 1. 함수형 컴포넌트

- 함수형 컴포넌트는 언제 쓸까? => 그냥 props만 전달해주면 view를 렌더링만 해주는 역할이라면 함수형 컴포넌트를 쓰자.
- 아니, 사실 `컴포넌트는 자체기능은 없고 props가 들어가면 뷰가 나온다`는 것을 명시하기 위해 쓴다.
- 함수형 컴포넌트는 함수 내부에 render를 사용하지 않고 return을 사용한다.
- 그렇다면 함수형 컴포넌트는 다른 컴포넌트를 return 할 수 있을까?

```javascript
function Hello(props) {
  return <div>Hello {props.name}</div>;
}
```

#### ES6의 화살표 함수 사용 가능

```javascript
const Hello = (props) => {
  return <div>Hello {props.name}</div>;
};
```

#### 비구조화 할당 (Object Destructuring)

```javascript
const Hello = ({ name }) => {
  return <div>Hello {name}</div>;
};
```

<!-- ### 프로젝트 구조 파악하기 -->

### import 역할

- 다른 모듈에서 내보낸 바인딩을 가져올 때 사용한다.
- from 이후에 오는 이름이 가져올 대상 모듈이다. (절대경로 혹은 상대경로)
- `import * as oneModule from "모듈A.js";`: 모듈 전체를 가져온다.
- `import {myMember} from "my-module.js";`: 모듈에서 하나의 멤버(oneModule)만 가져온다.
- `import {foo, bar} from "my-module.js";`: 모듈에서 여러 멤버들을 가져온다.
- `import "my-module.js";`: 어떠한 바인딩 없이 모듈 전체의 사이드 이펙트만 가져온다.

### export default 역할

- `export default hello`
- 변수, 함수, 오브젝트, 클래스 등을 내보낼 수 있는 명령어다.
- default로 export 한 요소는 중괄호 없이도 import 가능하다.
- export default로 전달하는 데이터를 중괄호로 감싸면 객체 형태가 된다.

- index.js에서 ReactDOM.render()를 구현하는데 내부에서 App를 호출하고 있다.

---

참고하는 사이트

- [공식문서 Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#adoption-strategy)
- [import 이해하기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
