import Calendar from 'color-calendar';
import React, { useEffect } from 'react'
import "color-calendar/dist/css/theme-glass.css";

const CalendarComponent = () => {

 useEffect(() => {
  new Calendar({
   id: "#calendar",
   theme: "glass",
    headerBackgroundColor: "white",
    primaryColor: "#7445F8",
    dropShadow: "none",
    headerColor: "rgba(0, 0, 0, 0.5)",
    customWeekdayValues: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    calendarSize: "small",
    borderRadius: "None",
    layoutModifiers: ["month-left-align"]
 });
 }, [])
//  useEffect(() => {
//   if(document && document.querySelector("div.calendar__header")) {
//     console.log('khv')
//     document.querySelector("div.calendar__header") ? document.querySelector("div.calendar__header").style = JSON.stringify({
//       border: "1px solid rgba(0, 0, 0, 1)"
//     }) : null;
//    }
//  }, [])

  return (
    <section className='mt-3 ml-3 px-5 pt-3 bg-white rounded-t-lg shadow-lg shadow-black/50'>
     <div id="calendar" className='text-black' />
    </section>
    )
}

export default CalendarComponent