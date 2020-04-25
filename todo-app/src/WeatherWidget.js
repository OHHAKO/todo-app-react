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
