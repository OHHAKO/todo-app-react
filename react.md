# React 특징

- official document : [https://ko.reactjs.org/](https://ko.reactjs.org/)
- React 주요특징 3가지
  - 선언형: 상호작용 많은 UI를 만들 때 생기는 어려움을 줄여준다. 뷰/데이터갱신/컴포넌트변경 을 핵심으로 동작한다.
  - 컴포넌트 기반: 스스로 상태를 관리하는 캡슐화된 컴포넌트. 컴포넌트 로직은 js로 작성. 다양한 형식의 데이터를 앱 안에서 쉽게 전달, DOM과 별개로 상태관리 가능
  - 재사용: 기술 스택 나머지 부분에는 관여하지 않아서 기존 코드 재작성하지 않고도 개발 가능. 컴포넌트 재사용이 쉽다는 얘기.
- React는 Node 서버에서 렌더링 할 수 있다. (webpack, babel는 좋은 어시스트다)

## 컴포넌트 이해하기

- 컴포넌트란?(간단한 컴포넌트)

  - 컴포넌트는 보통 JSX문법으로 호출하며 내부적으로 render()를 구현한다. render()는 입력값, 즉 출력내용을 취한다.
  - 컴포넌트는 데이터를 여러 방식으로 매개변수로서 전달받아 접근할 수 있다.
  - JSX는 옵션이며 필수가 아니다. (안쓰고도 구현할 수 있다는 의미)
  - JSX를 컴파일 하면 브라우저가 이해할 수 있는 javascript가 된다. (Javascript 컴파일러 Babel repl 담당)


자바스크립트 라이브러리를 사용한 예제

- map을 사용해 동일한 컴포넌트 반복 출력하기
- jsx 문법으로 컴포넌트 구현

```javascript
function Dog({name}){
  return <div> 저는 {name} 입니다. </div>
};

var DogList = [{
  "name": "kozi",
  "img":"url"
  },
  {
  "name": "bukbuk",
  "img":"url"
  }];

function Comp(){
  return <div>
  { DogList.map((curDog) => (<Dog name="{curDog.name}"/>) )}
  </div>  
}

```

- 컴포넌트가 취하는 데이터
  - props: 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터. 자식 컴포넌트 입장에서는 읽기 전용이다.
  - state: 컴포넌트 자신이 들고 있는 값을 말한다.(쓰기 전용)
    - state에는 여러가지 변수가 만들어 질 수 있는데 부모에게 받은 props를 동적 데이터로 넘겨 자식 컴포넌트가 상태로 가질 수 있다.
  - 생성자에 쓰는 `super`(클래스 컴포넌트 해당): 부모 클래스 생성자를 가리킨다. 부모 컴포넌트에게 받은 props 데이터를 부모 생성자에게 넘겨주어야 `this.` 를 쓸 수 있다.

```javascript
function Parent(){
  return <Child name="hako"/>;
  }

function Child(props){
  return <div>{ props.name }</div> 
}
```

- 상태를 갖는 컴포넌트

  - 컴포넌트는 내부적 `상태 데이터`를 가질 수 있다. (this.state로 접근)
  - 컴포넌트 `상태 데이터`가 바뀌면 render()가 다시 호출되어 Html 마크업이 갱신된다.
    - 여기서 호출되는 render는 상태 데이터가 바뀐 해당 컴포넌트의 메서드인가? 그렇다.

## 컴포넌트 정의하기 - 1. class 컴포넌트

- class문법 컴포넌트
- 컴포넌트에서 라이프 사이클 API를 사용해야 하거나 state를 사용하는 경우 사용
- 클래스 내부에 jsx(html + javascript) 문법으로 render를 구현한다.
- 입력값을 render 매개변수에 표시하지 않더라도 this.props 객체를 이용해 접근이 가능하다.
- JSX 문법은 반드시 상위 parent 요소가 존재해야 한다.

- render()는 언제쓸까? ReactDOM.render는 언제쓸까? 
  - 컴포넌트 클래스는 생명주기에 의해 render()를 자동호출 한다. 
  - ReactDOM.render는 프로젝트에서 단 하나의 최상위 컴포넌트를 호출한다. 
  - 컴포넌트 호출 위치는 index.html의 element 지정. => `ReactDOM.render("<Hello/>",document.getElementById("root"))`
- 생성자에서 변수초기화 , state 설정 등 컴포넌트 생성 초기 필요한 설정들을 하는 것으로 추측. 그렇다면 생명주기 함수에서는?
- componentDidMount(): 컴포너트가 마운트 된 직후(즉 트리삽입) 호출되는 메서드. 여기서 state를 초기화 혹은 setState를 쓰지 않도록 주의
- e.preventDefault() : html에서 a나 submit태그가 가진 고유의 동작중에 페이지 이동 혹은 form안에 있는 input 전송하기 동작을 중단한다.
- props는 컴포넌트에서 사용할 데이터 중 변경되지 않는 데이터를 다룰때 사용. 부모컴포넌트가 자식컴포넌트에게 데이터를 전달할때 사용한다.

## 컴포넌트 정의하기 - 1. 함수형 컴포넌트

- 함수형 컴포넌트는 언제 쓸까? => 그냥 props만 전달해주면 view를 렌더링만 해주는 역할이라면 함수형 컴포넌트를 쓰자.
- 더 나아가 `컴포넌트는 자체기능은 없고 props가 들어가면 뷰가 나온다`는 것을 명시하기 위한 목적으로 쓴다. (정의 자체가 메세지를 전달)
- 함수형 컴포넌트는 내부에서 render()를 사용하지 않는 대신 return 사용
- 그렇다면 함수형 컴포넌트는 다른 컴포넌트를 return 할 수 있을까? 그렇다.

```javascript
function Hello(props) {
  return <div>Hello {props.name}</div>;
}
```

### ES6 화살표 함수 사용 예시

```javascript
const Hello = (props) => {
  return <div>Hello {props.name}</div>;
};
```

### 비구조화 할당 (Object Destructuring) 사용 예시

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

## 오픈 라이브러리 사용하기

- Rest api를 쓰려면 반드시 axios를 설치하라?

  - 정답은 놉. HTTP Client 요청응답 하는 라이브러리는 `fetch` 도 있다. 두가지의 다른점은 ,각각의 라이브러리가 요청에 대한 응답에 얼마큼 반응할 것인가의 차이.
  - 만약 fetch를 쓰게된다면 응답객체는 JSON객체 형식으로 파싱하는 작업이 필요하다.
  - axios 라이브러리는 이미JSON으로 파싱된 data객체를 반환한다.
  - axios: Promise 기반 웹 요청 클라이언트. axios는 REST API에 데이터를 요청할 때, 이를 Promise로 처리할 수 있게 해주는 라이브러리
  - `yarn add axios`
  <!--API Key: d5ead2db388458cac1b9f31d2240d12f -->

- Axios : Http 통신 js라이브러리. Promise를 기반으로 하며 async/await 문법 사용하여 XHR(XMLHttpRequest)요청을 매우 쉽게 한다.
- Fetch API보다 좋은 장점

  - 구형브라우저를 지원합니다.(Fetch API의 경우는 폴리필이 필요합니다.)
  - 요청과 응답 중단
  - 응답 시간 초과를 설정하는 방법이 있습니다.
  - CSRF 보호 기능 내장 (XSRF로부터 보호)
  - JSON 데이터 자동변환
  - Node.js에서의 사용

- FileReader: 웹앱이 비동기적으로 데이터를 읽기 위해서 읽을 파일을 가리키는 file혹은 blob객체를 이용해 파일의 내용을 읽고 사용자의 컴퓨터에 저장하는 것을 가능하게 한다.
- 여기서 에러발생. 첫번째 인자가 blob 객체가 아니여서 이다. input 을 이용해 file 선택한 객체가 아니라 require 메서드로 파일 경로에 직접 접근하면 return 되는 객체는 `뫄뫄` 이다. 여기서 콘솔을 확인했더니 경로가 엉뚱하게 잡혀 있었다. 텍스트 파일이 컴포넌트와 동일한 폴더에 있었는데 말이다... (만약 텍파가 아니라 js를 가져올 경우 가져올 대상 파일에서 모듈을 내보내는 코드 작성해야 함 )
- node.js 에서 require 메서드는 외부 모듈을 가져올때 사용한다. (모듈은 외부에 영향받지 않는 독립된, 재사용 가능한 코드 묶음)

```javascript
  readTextfile() {
    const file = "todo-list.txt";
    let fileReader = new FileReader();
    fileReader.onload = () => {
      //readAsText가 읽기를 끝내면 동작하는 메서드
      console.log("fileReader result: " + fileReader.result);
    };
    fileReader.readAsText(file,"EUC-KR"); //Param 1.object to read 2. encoding
  }
```

- 해결: 파일읽기 메서드 (readFileSync동기, readFile비동기)를 이용해야 함.
- 서버용 webpack.config.server.js 작성하기. 서버측에서 jsx를 다루므로 loader들의 설정과 특정 파일들을(CSS, Image, 등등 static하게 처리될 파일들) 번들링하지않는 설정(onlyLocals: true)이 주가 될 것입니다. 그외에는 build시킬 경로, static파일을 가져올 경로 등등 경로 설정입니다.

### react 애플리케이션 로컬 실행

- `npm satrt` 라는 명령어 사용. npm은 node Package Manager의 약자이다. node.js 기반에서 구동되는 것을 확인 할 수 있는 요소이다.

---

참고하는 사이트

- [공식문서 Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#adoption-strategy)
- [import 이해하기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- [컴포넌트 함수형과 Class의 차이](https://overreacted.io/ko/how-are-function-components-different-from-classes/)
- [왜 super를 사용할까?](https://min9nim.github.io/2018/12/super-props/)
- [What’s the Difference Between Axios and Fetch? 공식문서](https://rapidapi.com/blog/axios-react-api-tutorial/)
- [React Hooks side effect 혹은 use Effect 만들기](https://www.daleseo.com/react-hooks-use-effect/)
- [FileReader객체로 파일 읽기](https://foreachdreamcometrue.tistory.com/6)
- [react image,media folder](https://ducks228.tistory.com/entry/React-image-media-folder)
- [텍스트 파일 읽기쓰기](https://woonghub.tistory.com/91)
- [텍스트 파일 읽기](https://3dmpengines.tistory.com/1855)
- [nodejs의 파일시스템](https://backback.tistory.com/268)
