import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
const tileClassName = ({ date, view }) => {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddClassTo.find((dDate) => isSameDay(dDate, date))) {
      return 'myClassName';
    }
  }
};
const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='calendar'>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default Calendar;
