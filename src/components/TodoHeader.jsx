import React, { useState } from "react";

export default function TodoHeader({ addToDo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addToDo({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <div>
        <input
          id="new-task-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="text"
          className="todo-input"
          placeholder="What do you have planned?"
          style={{ width: "600px" }}
        />
        <button id="new-task-submit">Add To Do</button>
      </div>
    </form>
  );
}
