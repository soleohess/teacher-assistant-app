import React from "react";

function TestButton(props) {
    return (
        <div className="TestButton">
            <h2>{props.heading}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default TestButton;