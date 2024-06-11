import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Calendar.css'

function DateCalendarComponent(props) {
  const time = new Date();
 
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDate = date < 10 ? `0${date}` : date;

  const formattedDateString = `${year}-${formattedMonth}-${formattedDate}`;

  function handleClick(date) {
    console.log("Clicked date:", date);
  }

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className={JSON.parse(localStorage.getItem("theme")) ? "cal" : ""} defaultValue={dayjs(formattedDateString)} readOnly onClick={handleClick} />
      </LocalizationProvider>
    </div>
  );
}

export default DateCalendarComponent;
