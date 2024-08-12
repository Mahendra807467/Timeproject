import React from 'react';
import '../styles/DarkModeToggle.css';

function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
    return (
        <div className="dark-mode-toggle">
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}

export default DarkModeToggle;