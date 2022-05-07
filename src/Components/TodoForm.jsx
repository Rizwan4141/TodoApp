import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("")
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter A Todo..."
          value={input}
          name="text"
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
