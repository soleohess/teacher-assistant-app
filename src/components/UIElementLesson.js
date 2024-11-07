import React, { useState } from "react";

// Button Component
const Button = ({ onClick, label }) => (
    <button onClick={onClick}>
        {label}
    </button>
);

// TextField Component with Error Handling
const TextField = ({ value, onChange, placeholder, error }) => (
    <div>
        <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
);

// Checkbox Component
const Checkbox = ({ checked, onChange, label }) => (
    <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
    </label>
);

// Select Component
const Select = ({ value, onChange, options }) => (
    <select value={value} onChange={onChange}>
        {options.map((option, index) => (
            <option key={index} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
);

// RadioButtonGroup Component
const RadioButtonGroup = ({ name, selectedValue, onChange, options }) => (
    <div>
        {options.map((option, index) => (
            <label key={index}>
                <input
                    type="radio"
                    name={name}
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={onChange}
                />
                {option.label}
            </label>
        ))}
    </div>
);

// Main UIElementsLesson Component
const UIElementsLesson = () => {
    // State hooks for managing component states
    const [text, setText] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedRadio, setSelectedRadio] = useState("");
    const [error, setError] = useState("");

    // Event handler for text field
    const handleTextChange = (e) => {
        const value = e.target.value;
        if (value.length > 10) {
            setError("Text is too long");
        } else {
            setError("");
        }
        setText(value);
    };

    return (
        <div>
            <Button onClick={() => alert("Button clicked!")} label="Click Me" />
            <TextField value={text} onChange={handleTextChange} placeholder="Enter text" error={error} />
            <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} label="Check me" />
            <Select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                options={[
                    { value: "", label: "Select an option" },
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                ]}
            />
            <RadioButtonGroup
                name="radioGroup"
                selectedValue={selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.value)}
                options={[
                    { value: "radio1", label: "Radio 1" },
                    { value: "radio2", label: "Radio 2" },
                ]}
            />
            <div>
                <p>Text: {text}</p>
                <p>Checked: {isChecked ? "Yes" : "No"}</p>
                <p>Selected Option: {selectedOption}</p>
                <p>Selected Radio: {selectedRadio}</p>
            </div>
        </div>
    );
};

export default UIElementsLesson;