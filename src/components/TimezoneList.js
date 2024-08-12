import React from 'react';
import TimezoneItem from './TimezoneItem';
import '../styles/TimezoneList.css';

function TimezoneList({ timezones, addTimezone, removeTimezone, reorderTimezones }) {
    const handleAddTimezone = () => {
        const newTimezone = prompt('Enter timezone name (e.g., EST, PST):');
        addTimezone({ name: newTimezone, offset: 0 }); // You may need to calculate the correct offset
    };

    return (
        <div className="timezone-list">
            <button onClick={handleAddTimezone}>Add Timezone</button>
            {timezones.map(tz => (
                <TimezoneItem
                    key={tz.name}
                    timezone={tz}
                    removeTimezone={removeTimezone}
                />
            ))}
        </div>
    );
}

export default TimezoneList;