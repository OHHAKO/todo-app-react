import React from "react";
import TodoBoard from "./TodoBoard";
class Section extends React.Component {
  render() {
    const style = {
      backgroundColor: "green",
    };
    return (
      <div className="Section" style={style}>
        <TodoBoard />
      </div>
    );
  }
}

export default Section;
