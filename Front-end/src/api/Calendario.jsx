import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './StylesApi/Calendario.css';

function Calendario() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='Calendario-Container'>
      <Calendar value={selectedDate} onChange={handleDateChange} className='Calendario'/>
    </div>
  );
}

export default Calendario;
