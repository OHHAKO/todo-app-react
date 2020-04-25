import React from "react";
import "./App.css";
import Head from "./Head";
import Section from "./Section";

function App(props) {
  return (
    <div className="container-fluid">
      <Head name="HAMA" />
      <div>
        <Section />
      </div>
    </div>
  );
}

export default App;
