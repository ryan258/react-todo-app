import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }
  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} todo={item} />
    ));
    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
