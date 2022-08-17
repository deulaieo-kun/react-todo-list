import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import ToDoBody from "./ToDoBody";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addToDo = (newTodo) => {
    if (!newTodo.text) {
      return;
    }
    const newTodos = [newTodo, ...todos];

    setTodos(newTodos);
  };

  return (
    <header>
      <h1>Task List 2022</h1>
      <TodoHeader addToDo={addToDo} />
      <br />
      <hr />
      <br />
      <br />
      <ToDoBody todos={todos} />
    </header>
  );
}
