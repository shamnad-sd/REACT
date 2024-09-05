// src/components/CustomDatePicker.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';

const CustomDatePicker = ({ selectedDate, onDateChange }) => {
  const [startDate, setStartDate] = useState(selectedDate || new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <div className="custom-date-picker">
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        inline
        calendarClassName="custom-calendar"
      />
    </div>
  );
};

export default CustomDatePicker;
