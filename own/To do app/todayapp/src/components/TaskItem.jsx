// src/components/TaskItem.jsx
import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{task.date}</span>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
