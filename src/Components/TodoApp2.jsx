import React, { useState } from "react";

const TodoApp2 = () => {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);

  const handleAdd = () => {
    setData([...data, todo]);
    setTodo("");           
  };
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {data.map(item => <h1>{item}</h1>)}
    </div>
  );
};

export default TodoApp2;
