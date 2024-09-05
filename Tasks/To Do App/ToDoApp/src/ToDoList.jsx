import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleDateChange(date) {
    setDueDate(date);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, { task: newTask, description, dueDate }]);
      setNewTask("");
      setDescription("");
      setDueDate(new Date());
    }
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>

      <div>
        
          <input
            type="text"
            placeholder="Enter a Task...."
            value={newTask}
            onChange={handleInputChange}
          /><br></br>

          <textarea
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          /><br></br>

          <input
            type="date"
            value={dueDate.toLocaleDateString('en-CA')}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
          /> <br></br>

          <button className="Add-button" onClick={addTask}>
            <span>ADD</span>
          </button>
        
      </div>

      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text">{task.task}</span>
            <span className="description">{task.description}</span>
            <span className="due-date">{task.dueDate.toLocaleDateString()}</span>
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