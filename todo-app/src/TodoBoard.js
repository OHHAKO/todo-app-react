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
      id: Date.now(), //this.state.items.length + 1, ,
      tesxtDeco: "",
    };
    this.setState((state) => ({
      items: this.state.items.concat(newItem),
      newTask: "",
    }));
  }

  componentDidMount() {}

  render() {
    return (
      <div id="todoBoard">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              id="new-task"
              onChange={this.handleChange}
              value={this.state.newTask}
            />
            <button id="taskAddButon">
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
        <div id="todolist">
          <TodoList items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default TodoBoard;
