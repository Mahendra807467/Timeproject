import React, { useState } from 'react';
import TimezoneSlider from './components/TimezoneSlider';
import TimezoneList from './components/TimezoneList';
import DatePicker from './components/DatePicker';
import DarkModeToggle from './components/DarkModeToggle';
import ScheduleMeet from './components/ScheduleMeet';
import './App.css';

function App() {
    const [timezones, setTimezones] = useState([
        { name: 'UTC', offset: 0 },
        { name: 'IST', offset: 5.5 },
    ]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDarkMode, setIsDarkMode] = useState(false);

    const addTimezone = (timezone) => {
        setTimezones([...timezones, timezone]);
    };

    const removeTimezone = (name) => {
        setTimezones(timezones.filter(tz => tz.name !== name));
    };

    const reorderTimezones = (reorderedList) => {
        setTimezones(reorderedList);
    };

    return (
        <div className={isDarkMode ? 'app dark-mode' : 'app'}>
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <TimezoneSlider timezones={timezones} selectedDate={selectedDate} />
            <TimezoneList
                timezones={timezones}
                addTimezone={addTimezone}
                removeTimezone={removeTimezone}
                reorderTimezones={reorderTimezones}
            />
            <ScheduleMeet selectedDate={selectedDate} />
        </div>
    );
}

export default App