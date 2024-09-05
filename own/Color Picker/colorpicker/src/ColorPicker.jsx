import React, { useState } from "react";
import './ColorPicker.css'

function ColorPicker() {
  const [Color, setColor] = useState("#FFFFF");

  function handleColorChange(event){
    setColor(event.target.value);

  }

  return (
    <div className="Color-Picker-container">
      <h1>COLOR PICKER</h1>
      <div className="color-display" style={{ backgroundColor: Color }}>
        <p>Selected Color :{Color}</p>
      </div>
      <label>select a color :</label>
      <input type="color" value={Color} onChange={handleColorChange}/>
    </div>
  );
}
export default ColorPicker;
