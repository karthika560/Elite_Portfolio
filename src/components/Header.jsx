import React from "react";
function Header({ darkMode, setDarkMode }) 
{
  return (
    <header className="header">
      <div>
        <h1>TaskFlow</h1>
        <p>
          Simple Task Management Dashboard
        </p>
      </div>
      <button
        className="theme-button"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

export default Header;