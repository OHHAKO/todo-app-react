import React from "react";
import axios from "axios";

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      temp: 0,
      humidity: 0,
      weather: "",
      detail_weather: "",
      wind: 0,
      country: "",
      city: "",
      cloud: "",
    };
  }

  //1. call api 2. fetch data 3. state setting 4. auto render
  getForecast() {
    const apiURI =
      "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=d5ead2db388458cac1b9f31d2240d12f";
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
        }));
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
    return (
      <div className="rightWidget">
        <div>{this.state.temp}</div>
        <div>{this.state.detail_weather}</div>
        <div>
          {this.state.city}, {this.state.country}
        </div>
        <div>
          {this.state.cloud} / {this.state.wind} / {this.state.humidity}
        </div>
      </div>
    );
  }
}

export default WeatherWidget;
