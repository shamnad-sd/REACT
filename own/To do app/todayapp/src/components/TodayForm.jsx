// src/components/TodayForm.jsx
import React, { useState } from 'react';
import CustomDatePicker from './CustomDatePicker';
import './TodayForm.css';

const TodayForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !date) return;
    addTask({ title, description, date: date.toISOString().split('T')[0] });
    setTitle('');
    setDescription('');
    setDate(new Date());
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setShowDatePicker(false);
  };

  return (
    <form className="today-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="date-picker-container">
        <input
          type="text"
          value={date.toDateString()}
          readOnly
          onClick={() => setShowDatePicker(true)}
          className="date-input"
        />
        {showDatePicker && (
          <div className="date-picker-modal">
            <CustomDatePicker selectedDate={date} onDateChange={handleDateChange} />
          </div>
        )}
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodayForm;
