import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  // const [description, setDescription] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTsak() {
     
    if(newTask.trim() !==""){
        setTask(t => [...t,newTask]);
        setNewTask("");
    }
  }

  function deleteTask(index) {

    const updatedTask = task.filter((_, i) => i !==index)
    setTask(updatedTask)
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>

        <div>
            <input
                type="text"
                placeholder="Enter a Task...."
                value={newTask}
                onChange={handleInputChange}/>
                
              {/* <textarea 
              placeholder="description">
              value=""
              </textarea> */}

            <button className="Add-button" onClick={addTsak} ><span>ADD</span></button>

        </div>
        <ol>
            {task.map((task, index) =>

            <li key={index}>

                <span className="text">{task}</span>

                <button className="delete-btn" 
                    onClick={ () => deleteTask(index)}> 
                    Delete </button>
            </li>

            )}
        </ol>

    </div>
  );
}
export default ToDoList;
