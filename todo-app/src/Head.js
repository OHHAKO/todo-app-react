import React from "react";
import WeatherWidget from "./WeatherWidget";

class Head extends React.Component {
  render() {
    return (
      <div className="App-header">
        <span className="title">Daily To Do List</span>
        <WeatherWidget />
        {/* <span className="rightWidget">Sunny/04.24</span> */}

        <span id="welcome">WELCOME {this.props.name} !</span>
      </div>
    );
  }
}

export default Head;
