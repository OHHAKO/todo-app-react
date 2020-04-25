import React from "react";
import TodoList from "./TodoList";

class TodoBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], newTask: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ newTask: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newTask.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.newTask,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: this.state.items.concat(newItem),
      newTask: "",
    }));
  }

  render() {
    const buttonStyle = {
      padding: "20px 50px 10px 10px",
      margin: "0px 20px 20px 20px",
      fontSize: "25px",
      backgroundColor: "skyblue",
    };

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              id="new-task"
              onChange={this.handleChange}
              value={this.state.newTask}
            />
            <button style={buttonStyle}>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>

        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default TodoBoard;
