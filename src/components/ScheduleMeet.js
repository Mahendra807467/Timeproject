import React from 'react';
import '../styles/ScheduleMeet.css';

function ScheduleMeet({ selectedDate }) {
    const handleScheduleClick = () => {
        // Logic to schedule a 2-hour Google Meet
        alert('Meet scheduled at ' + selectedDate);
    };

    return (
        <div className="schedule-meet">
            <button onClick={handleScheduleClick}>Schedule Meet</button>
        </div>
    );
}

export default ScheduleMeet;
