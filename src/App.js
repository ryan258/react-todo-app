import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

function App() {
  const todos = todosData.map((item) => <TodoItem key={item.id} todo={item} />);
  return <div className="todo-list">{todos}</div>;
}

export default App;
