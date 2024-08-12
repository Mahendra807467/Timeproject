import React from 'react';
import '../styles/DatePicker.css';

function DatePicker({ selectedDate, setSelectedDate }) {
    const handleDateChange = (e) => {
        setSelectedDate(new Date(e.target.value));
    };

    return (
        <div className="date-picker">
            <input
                type="date"
                value={selectedDate.toISOString().substring(0, 10)}
                onChange={handleDateChange}
            />
        </div>
    );
}

export default DatePicker;