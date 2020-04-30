import React from "react";

class TodoList extends React.Component {
  handleClick(e) {
    console.log(e.target.id);
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id} onClick={this.handleClick} id={"key" + item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
