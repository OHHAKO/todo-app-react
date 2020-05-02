# Todo app

### React로 간단한 Todo 웹 애플리케이션 만들기

<img src="./img/home3.JPG" width="700px" height="350px">

## 컴포넌트 계층구조

- App.js

  - Head.js: title
    - WeatherWidget.js: Weather Open API http req/res
  - Section.js: body
    - TodoBoard.js: user input/ event handler
      - TodoList.js: render todo list
  - App.css: include css style about components

## 주요 함수

### 1. Open API 호출 - WeatherWidget.js

- **Http Client 요청하는 자바스크립트 라이브러리 `Axios` 이용**
  - 이용 전 install: `yarn add axios`
  - `fetch`와 달리 JSON 데이터를 자동으로 변환하는 기능을 제공
- **Open API 호출**
  - promise 기반으로 async/await 문법 사용
  - 날씨정보 객체를 response에 응답받아 컴포넌트의 `state` 변경
  - error 처리를 위한 try/catch

```javascript
  getForecast() {
    const apiURI =
      "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=PRIVATE_KEY";
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURI);
        this.setState((state) => ({
          temp: Math.floor(response.data.main.temp - 273.15) + " ℃",
          humidity: response.data.main.humidity,
          weather: response.data.weather[0].main,
          detail_weather: response.data.weather[0].description,
          wind: response.data.wind.speed,
          country: response.data.sys.country,
          city: response.data.name,
          cloud: response.data.clouds.all + "%",
          img: response.data.weather[0].icon,
        }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }
```

### 2. Todo 아이템 입출력 - TodoBoard.js/TodoList.js

- **생성자**
  - 컴포넌트 state 선언
  - 이벤트 핸들러 바인딩

```javascript
  constructor(props) {
    super(props);
    this.state = { items: [], newTask: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
```

- **child 컴포넌트에 상태 전달**

```javascript
  render() {
    return (
      <div id="todoBoard">
        <div>
          ...
        </div>
        <div id="todolist">
          <TodoList items={this.state.items} />
        </div>
      </div>
    );
  }
```

- **parent에게 전달받은 props 출력**

```javascript
render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id} id={"key" + item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
```

### 명령어

- React 프로젝트 생성하는 명령어 설치: npm install -g create-react-app
- React 프로젝트 생성: create-react-app project_name
- 프로젝트 실행: npm start

  - 웹브라우저가 http://localhost:3000/ 주소 서버에 http request 전송

- `$ npm i`: package.json 파일에는 명시되어 있지만 node_module에는 존재하지 않는 module들을 일괄적으로 설치한다.
