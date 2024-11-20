import React from "react";

// potentially add curly braces like this function TestButton({onPress, label, style}) {
function TestButton(onPress, label, style) {
    return (
        <div className="TestButton">
            <button 
                onClick={onPress}
                style={{backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px'}}
                label={label}
                
            >


            </button>
        </div>
    );
}


//<Button onClick={() => alert("Button clicked!")} label="Click Me" />

export default TestButton;