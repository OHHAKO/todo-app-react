import React from "react";
import WeatherWidget from "./WeatherWidget";

class Head extends React.Component {
  render() {
    return (
      <div className="App-header">
        <WeatherWidget />
        <span className="title">Daily To Do List</span>
        <span className="rightWidget">Sunny/04.24</span>
        <h3>WELCOME {this.props.name} !</h3>
      </div>
    );
  }
}

export default Head;
