import React, { useEffect } from "react";
// import "./App.css"
// import "./Form.css"

const ToDoList = (props) => {
  useEffect(() => {}, [props]);

  return (
    <div div className="container">
      <h2 className="table" data-testid="head">Todo List</h2>
      <div className="todo_style">
        <i
          className="fas fa-edit"
          aria-hidden="true"
          title="edit"
          onClick={() => {
            props.onClick(props.id, props.text);
          }}
        />
        <i
          className="fa fa-times"
          aria-hidden="true"
          title="delete"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <div key={props.text.id}>
          <div className="todo-info">
            <table className="table" border="1">
              <tr>
             <th>Title</th>
             <th>Description</th>
             <th>Status</th>
             </tr>
              <tr>
              <td><span> {props.text.title}</span></td>
             <td><span> {props.text.description}</span></td>
            <td><span> {props.text.status}</span></td>
            </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
