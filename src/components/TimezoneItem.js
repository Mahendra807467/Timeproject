import React from 'react';
import '../styles/TimezoneItem.css';

function TimezoneItem({ timezone, removeTimezone }) {
    return (
        <div className="timezone-item">
            <span>{timezone.name}</span>
            <button onClick={() => removeTimezone(timezone.name)}>X</button>
        </div>
    );
}

export default TimezoneItem;