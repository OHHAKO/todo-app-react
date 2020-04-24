import React from "react";
import "./App.css";
import HelloMessage from "./HelloMessage";

function App(props) {
  return (
    <div>
      <div className="App">Hello {props.name}</div>
      <div>
        <HelloMessage name="hako" />
      </div>
    </div>
  );
}

export default App;
