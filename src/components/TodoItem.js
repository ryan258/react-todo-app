import React from "react";

export default function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.todo.completed && true} />
      <p> {props.todo.text}</p>
    </div>
  );
}
