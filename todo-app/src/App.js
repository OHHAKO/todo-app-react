import React from "react";
import "./App.css";
import HelloMessage from "./HelloMessage";
import Head from "./Head";

function App(props) {
  return (
    <div>
      <Head />

      <div>
        <div className="App">Hello {props.name}</div>
        <HelloMessage name={props.name} />
      </div>
    </div>
  );
}

export default App;
