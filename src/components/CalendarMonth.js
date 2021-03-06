import React from 'react';
import CalendarDay from './CalendarDay';

const monthLabels = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const CalendarMonth = ({ month, days, onDayClick, selectedTime }) => (
  <div className='CalendarMonth'>
    <div>
      {monthLabels[parseInt(month, 10)]}
    </div>
    {days.map(entry => (
      <CalendarDay
        entry={entry}
        key={entry.time}
        onClick={onDayClick}
        active={selectedTime === entry.time}
      />
    ))}
  </div>
);

export default CalendarMonth;
