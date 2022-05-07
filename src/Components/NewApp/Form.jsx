import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import "./Form.css";

const Form = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    status: "",
  });

  const [records, setRecords] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  useEffect(() => {}, [records]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserInput({ ...userInput, [name]: value });
  };

  const handleTodoSubmit = (e) => {
    // e.preventDefault();
    if (!userInput) {
      alert("plz fill data");
    } else if (userInput && !toggleSubmit) {
      let tempRecords = records;
      tempRecords[isEditItem] = userInput;
      setRecords(tempRecords);
      // setRecords(
      //   records.map((elem) => {
      //     if (elem.id === isEditItem){
      //       return{...elem, name:userInput}
      //     }
      //     return elem;
      //   })
      // )
    } else {
      const newRecord = { ...userInput, id: new Date().getTime().toString() };
      console.log(records);
      setRecords([...records, newRecord]);
      console.log(records);

      setUserInput({ title: "", description: "", phone: "" });
    }
  };

  const deleteItem = (id) => {
    console.log("delete");

    setRecords((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const editItem = (id, text) => {
    let newEditItem = records.find((curElem) => {
      return curElem.id === id;
    });
    console.log(newEditItem);

    setToggleSubmit(false);

    setIsEditItem(id);

    setUserInput({
      title: text.title,
      description: text.description,
      status: text.status,
    });
  };

  return (
    <div className="main">
      <div className="container">
        <h1 data-testid="head">Todo List App</h1> 
        <h1 data-testid="data">Todo Data</h1> 
        {/* <form className="form-container" action="" onSubmit={handleTodoSubmit}> */}
        <div data-testid="input-title">
          <input className="inp1"
            type="text"
            autoComplete="off"
            placeholder=" Todo Title"
            value={userInput.title}
            onChange={handleInput}
            name="title"
            required
          /> 
        </div> <br />
        <div data-testid="input-description">
          <textarea
          className="inp2"
            data-testid="textarea"
            type="text"
            autoComplete="off"
            placeholder=" Description text"
            value={userInput.description}
            onChange={handleInput}
            name="description"
            id="description"
            row={5}
            required
          />
        </div>
        <div data-testid="input-status">
          <select
          className="inp3"
            type="status"
            autoComplete="off"
            placeholder="Statuss"
            value={userInput.status}
            onChange={handleInput}
            name="status"
            id="status"
            required
          >
            <option value="Todo">Todo</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
        {toggleSubmit ? (
          <button
            className="btn"
            type="submit"
            data-testid="save"
            onClick={handleTodoSubmit}
          >
            SAVE
          </button>
        ) : (
          <button className="btn" type="submit" onClick={handleTodoSubmit}>
            Edit
          </button>
        )}
        {/* </form> */}
        
      </div>

      <div >
        {records.map((curElem, index) => {
          return (
            <ToDoList
              key={index}
              id={index}
              text={curElem}
              onClick={editItem}
              onSelect={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Form;
