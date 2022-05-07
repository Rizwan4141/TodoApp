import React, { useState, useEffect } from "react";
import "./TodoApp1.css";

export const TodoApp1 = () => {
  const [todo, setTodo] = useState({});
  const [todocounter, setTodoCounter] = useState(0);
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const handleAdd = () => {
    const cnt = todocounter + 1;
    console.log("cnt------>", cnt);
    setTodoCounter(todocounter + 1);
    // here we have to store the current setData of data
    const tdo = { id: cnt, ...todo };
    setData([...data, tdo]);
  };
  const handleRemove = (item) => {
    const filtered = data.filter((elem, i) => i !== item);
    setData([...filtered]);
  };
  const handleEditRow = (id, newVal) => {
    const filt = data.filter((ele) => ele.id == id);
    setTodo({ ...filt, title: newVal });
  };
  const handleEdit = (id, text) => {
    const Edited = data.find((elem, i) => i !== elem);
    setData([...Edited]);
    const cntr = todocounter + 1;
    setTodo({
      id: cntr,
      title: text.title,
      description: text.description,
      status: text.status,
    });
  };

  useEffect(() => {
    console.log("====>", todo);
  }, [todo]);
  return (
    <div className="main">
      <div className="container1">
        <input
          className="inp"
          placeholder="title"
          type="text"
          value={todo.title}
          onChange={(e) => setTodo({ title: e.target.value })}
        />
        <input
          className="inp"
          placeholder="description"
          type="text"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <input
          className="inp"
          placeholder="status"
          type="text"
          value={todo.status}
          onChange={(e) => setTodo({ ...todo, status: e.target.value })}
        />
        <button onClick={handleAdd} className="btn-grad">
          Show in Table
        </button>
      </div>

      <div className="container2">
        <table className="table" border="1">
          <tr>
            <th>id</th>
            <th>Tittle</th>
            <th>discription</th>
            <th>status</th>
            <th>Modify</th>
          </tr>
          {data.map((item, index) => {
            return (
              <React.Fragment>
                <tr>
                  <td>{item.id}</td>
                  <td>
                    {isEdit ? (
                      <input
                        className="inp"
                        placeholder="title"
                        type="text"
                        value={item.title}
                        onChange={(e) => handleEditRow(item.id, e.target.value)}
                      />
                    ) : (
                     <td>{item.title}</td>
                    )}
                  </td>
                  
                  {/* <td>{item.description}</td> */}
                  {isEdit ? (
                    <input
                      className="inp" 
                      size={"10px"}
                      placeholder="title"
                      type="text"
                      value={item.description}
                      onChange={(e) => setTodo({ title: e.target.value })}
                    />
                  ) : (
                    <td>{item.description}</td>
                  )}
                  {isEdit ? (
                    <input
                      className="inp" 
                      size={"10px"}
                      placeholder="title"
                      type="text"
                      value={item.status}
                      onChange={(e) => setTodo({ title: e.target.value })}
                    />
                  ) : (
                    <td>{item.status}</td>
                  )
                  }
                  {/* <td>{item.description}</td> */}
                  <button className="Ebtn" onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                  <button className="Ebtn" onClick={() => setIsEdit(!isEdit)}>
                    Edit
                  </button>
                </tr>
              </React.Fragment>
            );
          })}
        </table>
      </div>
    </div>
  );
};
