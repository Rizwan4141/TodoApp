import React, { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(todo, ...todos);
  };
  return (
    <div>
      <h1>What is the plain Today</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
};

export default TodoList;
