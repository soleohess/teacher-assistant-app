import React, { useState } from "react";

//Button Component
const  Button = ({ onClick, label}) => (
    //ToDo: implement the button element here
    //Hint: Use the 'onClick' prop for the event handler and 'label' prop for the button text

    <button onClick={onClick}>
        {label}
    </button>
    //function onClick() { label }
);

//TextField Component
const TextField = ({ value, onChange, placeholder }) => (
    // TODO: Implement the input element here
    // Hint: Use the 'value', 'onChange', and 'placeholder' props
        <TextField onChange={onChange}>
            value = [placeholder]
        </TextField>
);

// Checkbox Component
const Checkbox = ({ checked, onChange, label }) => (
    // TODO: Implement the checkbox input and label here
 // Hint: Use the 'checked' and 'onChange' props for the input, and 'label' for the text
);

// Select Component
// Select (dropdown) components allow users to choose from a list of options
const Select = ({ value, onChange, options }) => (
 // TODO: Implement the select element and its option children here
 // Hint: Use 'value' and 'onChange' props for the select, and map over 'options' for the option elements
);

// Main UIElementsLesson Component
const UIElementsLesson = () => {
 // State hooks for managing component states
 // TODO: Create state variables for text, isChecked, and selectedOption using useState

 // Event handlers
 const handleButtonClick = () => {
 // TODO: Implement button click handler
 // Hint: Use alert() to show a message when the button is clicked
 };

 const handleTextChange = (e) => {
 // TODO: Implement text change handler
 // Hint: Update the text state with the new value from the event
 };

 const handleCheckboxChange = (e) => {
 // TODO: Implement checkbox change handler
 // Hint: Update the isChecked state with the new checked value from the event
 };

 const handleSelectChange = (e) => {
 // TODO: Implement select change handler
 // Hint: Update the selectedOption state with the new value from the event
 };

 // Options for the Select component
 const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

    return (
    <div>
        <h1>React Basic UI Elements</h1>

        <h2>Button</h2>
            {/* TODO: Add the Button component here */}

        <h2>Text Field</h2>
        {/* TODO: Add the TextField component here */}
        {/* TODO: Add a paragraph to display the entered text */}
        
        <h2>Checkbox</h2>
        {/* TODO: Add the Checkbox component here */}
        {/* TODO: Add a paragraph to display the checkbox state */}
        
        <h2>Select (Dropdown)</h2>
        {/* TODO: Add the Select component here */}
        {/* TODO: Add a paragraph to display the selected option */}
        
        {/*
        Student Task: Add a new UI element here
        Try adding a radio button group or a slider component
        Hint: You'll need to create a new component and add state for it
        */}
    </div>
    );
   };

export default UIElementsLesson; 