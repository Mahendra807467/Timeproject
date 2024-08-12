import React from 'react';
import '../styles/TimezoneSlider.css';

function TimezoneSlider({ timezones, selectedDate }) {
    const handleSliderChange = (e) => {
        const newTime = new Date(selectedDate);
        newTime.setHours(newTime.getHours() + parseInt(e.target.value, 10));
        // Update the time based on slider value
    };

    return (
        <div className="timezone-slider">
            <input
                type="range"
                min="-12"
                max="14"
                onChange={handleSliderChange}
            />
            <div className="slider-timezones">
                {timezones.map(tz => (
                    <div key={tz.name} className="timezone">
                        {tz.name}: {new Date(selectedDate).toLocaleTimeString('en-US', { timeZone: tz.name })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimezoneSlider;