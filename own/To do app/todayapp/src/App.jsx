// src/App.jsx
import React, { useState } from 'react';
import TodayForm from './components/TodayForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState('light-theme');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className="app">
      <h1>Today</h1>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Toggle {theme === 'light-theme' ? 'Dark' : 'Light'} Theme
      </button>
      <TodayForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
