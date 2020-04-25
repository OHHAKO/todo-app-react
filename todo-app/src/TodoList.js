import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { items: this.state.items };
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
