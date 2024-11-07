import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  const [title, setNewTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleInputChange(event) {
    setNewTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleDateChange(date) {
    setDueDate(date);
  }

  function addTask() {
    if (title.trim()) {
      setTask([...task, { task: title, description, dueDate }]);
      setNewTitle("");
      setDescription("");
      setDueDate("");
    }
  }

  function deleteTask(index){
    task.splice(index);
    setTask([...task]);
  }
  return (
    <div className="to-do-list">
      <div className="todo">
        <h1>To Do List</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a Task...."
            value={title}
            onChange={handleInputChange}
          /><br></br>

          <textarea
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          /><br></br>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => handleDateChange(e.target.value)}
          />
         <br></br>

          <button className="Add-button" onClick={addTask}>
            <span>Add</span>
          </button>
        </div>
      </div>
      <ol>
        {task.map((task, index) => (
          <li key={index} className="output">
            <input className="check"
              type="checkbox"
            />
            <span className="text">{task.task}</span>
            <span className="description">{task.description}</span>
            <span className="due-date">{task.dueDate}</span>
            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;