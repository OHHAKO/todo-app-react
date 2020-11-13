import React, { useState } from "react";
import TodoList from "./TodoList";

function TodoBoard() {
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleSubmit() {
    if (newTask.length === 0) {
      return;
    }
    const newItem = {
      text: newTask,
      id: Date.now(),
      tesxtDeco: "",
    };

    setItems(items.concat(newItem));
    setNewTask("");
  }

  return (
    <div id="todoBoard">
      <div>
        <input
          id="new-task"
          onChange={(e) => handleChange(e)}
          value={newTask}
        />
        <button onClick={handleSubmit} id="taskAddButon">
          Add #{items.length + 1}
        </button>
      </div>
      <div id="todolist">
        <ul>{items.length !== 0 ? <TodoList items={items} /> : ""}</ul>
      </div>
    </div>
  );
}

export default TodoBoard;
