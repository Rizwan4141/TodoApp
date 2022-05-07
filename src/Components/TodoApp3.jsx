import React, { useState } from "react";

const TodoApp3 = () => {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);
  const handleAdd = () => {
    setData([...data, todo]);
    setTodo("");
    console.log(data);
  };
  return (
    <div>
      <h1>TodoApp3</h1>
      <table>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        {data.map((item) => (
          <h1>{item}</h1>
        ))}
      </table>
    </div>
  );
};

export default TodoApp3;
