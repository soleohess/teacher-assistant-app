import React from "react";

function TestButton({ onPress, label, style }) {
  return (
    <div className="TestButton">
      <button 
        onClick={onPress}
        style={{backgroundColor: 'blue', color: 'white', padding: '100px 200px', border: 'none', borderRadius: '5px'}}
      >
        {label}
      </button>
    </div>
  );
}
//backgroundColor= the color of the button, color=textColor, padding=dimensions of the button, idk about the others

export default TestButton;