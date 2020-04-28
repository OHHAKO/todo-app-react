import React from "react";
import axios from "axios";

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: "" };
  }
  //1. call api 2. fetch data 3. state setting 4. auto render
  getForecast() {
    const apiURI =
      "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=d5ead2db388458cac1b9f31d2240d12f";
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURI);
        console.log(response.data);
        console.log("현재온도: " + (response.data.main.temp - 273.15));
        console.log("현재습도: " + response.data.main.humidity);
        console.log("날씨: " + response.data.weather[0].main);
        console.log("상세날씨설명: " + response.data.weather[0].description);
        console.log("날씨 이미지: " + response.data.weather[0].icon);
        console.log("바람: " + response.data.wind.speed);
        console.log("나라: " + response.data.sys.country);
        console.log("도시이름: " + response.data.name);
        console.log("구름: " + response.data.clouds.all + "%");
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }

  componentDidMount() {
    this.getForecast();
  }

  render() {
    return <div> </div>;
  }
}

export default WeatherWidget;
