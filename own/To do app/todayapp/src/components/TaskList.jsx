// src/components/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onDelete={() => deleteTask(index)} />
      ))}
    </div>
  );
};

export default TaskList;
