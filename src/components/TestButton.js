import React from "react";

function TestButton(props) {
    return (
        <div className="TestButton">
            <button onClick={props.onClick}>
                {props.label}
            </button>
        </div>
    );
}


//<Button onClick={() => alert("Button clicked!")} label="Click Me" />

export default TestButton;