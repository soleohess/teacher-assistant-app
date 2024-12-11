import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Quick Links <span>{isOpen ? "▼" : "▶"}</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button className="trivory-button" onClick={() => window.open("https://trivory.com/ibw")}>Trivory</button>
          <button className="canvas-button" onClick={() => window.open("https://portlandpublic.instructure.com/")}>Canvas</button>
          <button className="gmail-button" onClick={() => window.open("https://mail.google.com")}>Gmail</button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;