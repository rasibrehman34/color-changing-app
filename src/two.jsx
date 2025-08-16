import { useState } from 'react';
import './App.css';

const App = () => {
    
  const [color, setColor] = useState({ background: "white", text: "black", btn: "grey" });

  const handleColorChange = (bgColor, txtColor) => {
    setColor({ background: bgColor, text: txtColor, btn: bgColor });
  };

  const resetColor = () => {
    setColor({ background: "white", text: "black", btn: "grey" });
  };

  return (
    <div>
      <div style={{ color: color.text, backgroundColor: color.background }} className="container">
        <h2>Current Color is {color.background}</h2>
        <div className="btns">
          {['red', 'blue', 'green'].map((colorName) => (
            <button
              key={colorName}
              style={{ backgroundColor: color.btn === colorName ? colorName : "white" }}
              onClick={() => handleColorChange(colorName, "white")}
            >
              {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
            </button>
          ))}
          <button
            style={{ backgroundColor: color.btn === "grey" ? "grey" : "white" }}
            onClick={resetColor}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
