import React, { useState } from 'react';

function DropdownMenu(TrivoryStyle, CanvasStyle, GmailStyle) {
  const [isOpen, setIsOpen] = useState(false);
//useState true or false determines the default state of the dropdown menu (if it's open or closed)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Dropdown">
      <button onClick={toggleDropdown} className="Dropdown-toggle">
        Quick Links <span>{isOpen ? "▼" : "▶"}</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button TrivoryStyle={{backgroundColor: "green"}} onClick={() => window.open("https://trivory.com/ibw")}>Trivory</button>
          <button onClick={() => window.open("https://portlandpublic.instructure.com/")}>Canvas</button>
          <button onClick={() => window.open("https://mail.google.com")}>Gmail</button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;