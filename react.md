### React 특징

- official document : [https://ko.reactjs.org/](https://ko.reactjs.org/)
- React 주요특징 3가지
  - 선언형: 상호작용 많은 UI를 만들 때 생기는 어려움을 줄여준다. 뷰/데이터갱신/컴포넌트변경 을 핵심으로 동작한다.
  - 컴포넌트 기반: 스스로 상태를 관리하는 캡슐화된 컴포넌트. 컴포넌트 로직은 js로 작성. 다양한 형식의 데이터를 앱 안에서 쉽게 전달, DOM과 별개로 상태관리 가능
  - 재사용: 기술 스택 나머지 부분에는 관여하지 않아서 기존 코드 재작성하지 않고도 개발 가능. 코드를 쉽게 재사용할 수 있다는 얘기인가?
- React는 Node 서버에서 렌더링 할 수 있다.

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

- props: 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터. 자식 입장에서는 읽기 전용이다.
- state: 컴포넌트 자신이 들고 있는 값을 말한다.(쓰기 전용)
  - state에는 여러가지 변수가 만들어 질 수 있는것 같다.
- 생성자에 쓰는 super: 부모 클래스 생성자를 가리킨다. 부모 생성자에게 props를 넘겨주어야 this. 를 쓸 수 있다. (그 props는 생성자 매개변수로 취해졌던것)

### 컴포넌트 정의하기 - 1. class 컴포넌트

- class문법 컴포넌트
- 컴포넌트에서 라이플사이클 API를 사용해야 하거나 state를 사용하는 경우 꼭 이렇게 정의해야 한다.
- 클래스 내부에 render를 구현한다.
- 입력값을 render 매개변수에 표시하지 않더라도 this.props. 를 이용해 접근이 가능하다.
- JSX 문법은 반드시 상위 parent 요소가 존재해야 한다.

- render()는 언제쓸까? ReactDOM.render는 언제쓸까?
- 생성자에서 변수초기화 , state 설정 등을 하는 것 같다.
- componentDidMount(): 컴포너트가 마운트 된 직후(즉 트리삽입) 호출되는 메서드. 여기서 state를 초기화 혹은 setState 하지말것

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

### 프로젝트 구조 이해하기

- index.js에서 ReactDOM.render()를 구현하는데 내부에서 App를 호출하고 있다.

---

참고하는 사이트

- [공식문서 Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#adoption-strategy)
- [import 이해하기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- [컴포넌트 함수형과 Class의 차이](https://overreacted.io/ko/how-are-function-components-different-from-classes/)
- [왜 super를 사용할까?](https://min9nim.github.io/2018/12/super-props/)
